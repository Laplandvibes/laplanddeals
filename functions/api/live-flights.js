// GET /api/live-flights            — cheapest Helsinki → Lapland fares for the list
// GET /api/live-flights?cal=RVN    — cheapest cached fare per departure day, 3 months, for the calendar
//
// Source of truth is laplandflights.fi's own Pages Worker (TP_TOKEN lives there,
// never here): /api/fares gives the lowest cached Travelpayouts fare per airport,
// /api/flightsearch gives every cached dated fare for a month, from which the
// cheapest departure inside the next 14 days (list) or per day (calendar) is
// picked. Nothing is invented: a row or a bar exists only when Travelpayouts
// has a real fare with a real date.
//
// Booking URLs are returned RAW (aviasales.com search with the fare token);
// the page wraps them in go.laplandvibes.com/go/aviasales?dest= so the click
// is logged in D1 and the Worker writes marker=723794.laplanddeals_com_<sid>.
//
// Cache: 15 min in the Cloudflare Cache API + 10 min in the browser. The
// upstream itself changes hourly, so anything tighter only adds load.
const UPSTREAM = 'https://laplandflights.fi';
const ORIGIN = 'HEL';
const DEST = [
  { code: 'RVN', city: 'Rovaniemi' },
  { code: 'KTT', city: 'Kittilä' },
  { code: 'IVL', city: 'Ivalo' },
  { code: 'KAO', city: 'Kuusamo' },
];
const SOON_DAYS = 14;
const CAL_MONTHS = 3;
const CACHE_TTL = 900;
const UA = 'LaplandDeals live-flights (+https://laplanddeals.com)';
// Carrier marks come from the same source as the fare (Travelpayouts CDN),
// keyed by IATA code. /api/fares returns display names, so map them back.
const AIRLINE_NAME = { N7: 'Norra', N0: 'Norra', AY: 'Finnair', DY: 'Norwegian', D8: 'Norwegian', SK: 'SAS' };
const AIRLINE_CODE = { Finnair: 'AY', Norwegian: 'DY', SAS: 'SK', Norra: 'N0', Lufthansa: 'LH', KLM: 'KL', 'Air France': 'AF', 'British Airways': 'BA', 'Wizz Air': 'W6', Ryanair: 'FR', SWISS: 'LX', Austrian: 'OS', Eurowings: 'EW', TAP: 'TP' };

const airlineName = (s) => (s && s.length === 2 && AIRLINE_NAME[s]) ? AIRLINE_NAME[s] : (s || '');
function iso(d) { return d.toISOString().slice(0, 10); }
function addDays(d, n) { const x = new Date(d); x.setUTCDate(x.getUTCDate() + n); return x; }
function addMonths(ym, n) { const [y, m] = ym.split('-').map(Number); const d = new Date(Date.UTC(y, m - 1 + n, 1)); return iso(d).slice(0, 7); }

async function getJson(url) {
  try {
    const r = await fetch(url, { headers: { accept: 'application/json', 'user-agent': UA }, cf: { cacheTtl: 300 } });
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null;
  }
}

async function monthFares(code, ym) {
  const j = await getJson(`${UPSTREAM}/api/flightsearch?origin=${ORIGIN}&dest=${code}&depart=${ym}-01&oneway=1`);
  return (j && j.results) || [];
}

async function soonFare(code, today, horizon) {
  const months = [iso(today).slice(0, 7)];
  const hm = iso(horizon).slice(0, 7);
  if (hm !== months[0]) months.push(hm);
  const lists = await Promise.all(months.map((m) => monthFares(code, m)));
  const from = iso(today), to = iso(horizon);
  let best = null;
  for (const list of lists) for (const it of list) {
    const day = String(it.departure_at || '').slice(0, 10);
    if (!day || day < from || day > to || !it.book || !it.price) continue;
    if (!best || it.price < best.price) best = { price: Math.round(it.price), date: day, airline: airlineName(it.airline), airlineCode: it.airlineCode || AIRLINE_CODE[it.airline] || (it.airline && it.airline.length === 2 ? it.airline : ''), oneWay: true, book: it.book };
  }
  return best;
}

async function calendar(code, today) {
  const first = iso(today).slice(0, 7);
  const months = [];
  for (let i = 0; i < CAL_MONTHS; i++) {
    const ym = addMonths(first, i);
    const list = await monthFares(code, ym);
    const byDay = new Map();
    for (const it of list) {
      const dep = String(it.departure_at || '').slice(0, 10);
      if (!dep || dep < iso(today) || !it.price || !it.book) continue;
      const day = Number(dep.slice(8, 10));
      const cur = byDay.get(day);
      if (!cur || it.price < cur.price) byDay.set(day, { day, price: Math.round(it.price), airline: airlineName(it.airline), book: it.book });
    }
    months.push({ month: ym, days: [...byDay.values()].sort((a, b) => a.day - b.day) });
  }
  return months;
}

function jsonResponse(body, ok) {
  return new Response(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // An empty answer must never be pinned: TP's cache may simply not have been warm for a minute.
      'cache-control': ok ? 'public, max-age=600' : 'no-store',
    },
  });
}

export async function onRequestGet({ request, waitUntil }) {
  const url = new URL(request.url);
  const cal = (url.searchParams.get('cal') || '').toUpperCase().slice(0, 3);
  const cache = caches.default;
  const cacheKey = new Request(new URL(`/api/live-flights?v=2${cal ? `&cal=${cal}` : ''}`, request.url).toString(), { method: 'GET' });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const today = new Date();
  let body, ok;

  if (cal) {
    if (!DEST.some((d) => d.code === cal)) return new Response(JSON.stringify({ error: 'unknown_airport' }), { status: 400, headers: { 'content-type': 'application/json' } });
    const months = await calendar(cal, today);
    ok = months.some((m) => m.days.length > 0);
    body = JSON.stringify({ code: cal, ts: Date.now(), months });
  } else {
    const horizon = addDays(today, SOON_DAYS);
    const fares = await getJson(`${UPSTREAM}/api/fares?origin=${ORIGIN}`);
    const byCode = new Map();
    for (const r of (fares && fares.rows) || []) if (r && r.fare) byCode.set(r.code, r.fare);
    const rows = await Promise.all(
      DEST.map(async (d) => {
        const f = byCode.get(d.code) || null;
        const cheapest = f && f.book && f.price
          ? { price: Math.round(f.price), date: String(f.date || '').slice(0, 10), airline: airlineName(f.airline), airlineCode: AIRLINE_CODE[f.airline] || (f.airline && f.airline.length === 2 ? f.airline : ''), oneWay: !!f.oneWay, book: f.book }
          : null;
        const soon = await soonFare(d.code, today, horizon);
        return { code: d.code, city: d.city, cheapest, soon };
      }),
    );
    ok = rows.some((r) => r.cheapest || r.soon);
    body = JSON.stringify({ origin: ORIGIN, soonDays: SOON_DAYS, ts: Date.now(), rows });
  }

  const res = jsonResponse(body, ok);
  if (ok) waitUntil(cache.put(cacheKey, new Response(body, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': `public, max-age=${CACHE_TTL}` } })));
  return res;
}
