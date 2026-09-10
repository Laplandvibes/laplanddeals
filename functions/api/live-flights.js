// GET /api/live-flights — cheapest Helsinki → Lapland fares for the front page.
//
// Source of truth is laplandflights.fi's own Pages Worker (TP_TOKEN lives there,
// never here): /api/fares gives the lowest cached Travelpayouts fare per airport,
// /api/flightsearch gives every cached dated fare for a month, from which the
// cheapest departure inside the next 14 days is picked. Nothing is invented: a
// row exists only when Travelpayouts has a real fare with a real date.
//
// The booking URL is returned RAW (aviasales.com search with the fare token);
// the page wraps it in go.laplandvibes.com/go/aviasales?dest= so the click is
// logged in D1 and the Worker writes marker=723794.laplanddeals_com_<sid>.
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
const CACHE_TTL = 900;
const UA = 'LaplandDeals live-flights (+https://laplanddeals.com)';

function iso(d) { return d.toISOString().slice(0, 10); }
function addDays(d, n) { const x = new Date(d); x.setUTCDate(x.getUTCDate() + n); return x; }

async function getJson(url) {
  try {
    const r = await fetch(url, { headers: { accept: 'application/json', 'user-agent': UA }, cf: { cacheTtl: 300 } });
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null;
  }
}

async function soonFare(code, today, horizon) {
  // flightsearch works per MONTH (TP's cache is sparse per exact day); ask for
  // the current month and, when the 14-day window crosses into the next one,
  // that month too.
  const months = [iso(today).slice(0, 7)];
  const hm = iso(horizon).slice(0, 7);
  if (hm !== months[0]) months.push(hm);
  const lists = await Promise.all(
    months.map((m) => getJson(`${UPSTREAM}/api/flightsearch?origin=${ORIGIN}&dest=${code}&depart=${m}-01&oneway=1`)),
  );
  const from = iso(today), to = iso(horizon);
  let best = null;
  for (const j of lists) {
    for (const it of (j && j.results) || []) {
      const day = String(it.departure_at || '').slice(0, 10);
      if (!day || day < from || day > to) continue;
      if (!it.book || !it.price) continue;
      if (!best || it.price < best.price) {
        best = { price: Math.round(it.price), date: day, airline: it.airline || '', oneWay: true, transfers: it.transfers ?? 0, book: it.book };
      }
    }
  }
  return best;
}

export async function onRequestGet({ request, waitUntil }) {
  const cache = caches.default;
  const cacheKey = new Request(new URL('/api/live-flights?v=1', request.url).toString(), { method: 'GET' });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const today = new Date();
  const horizon = addDays(today, SOON_DAYS);
  const fares = await getJson(`${UPSTREAM}/api/fares?origin=${ORIGIN}`);
  const byCode = new Map();
  for (const r of (fares && fares.rows) || []) if (r && r.fare) byCode.set(r.code, r.fare);

  const rows = await Promise.all(
    DEST.map(async (d) => {
      const f = byCode.get(d.code) || null;
      const cheapest = f && f.book && f.price
        ? { price: Math.round(f.price), date: String(f.date || '').slice(0, 10), airline: f.airline || '', oneWay: !!f.oneWay, book: f.book }
        : null;
      const soon = await soonFare(d.code, today, horizon);
      return { code: d.code, city: d.city, cheapest, soon };
    }),
  );

  const ok = rows.some((r) => r.cheapest || r.soon);
  const body = JSON.stringify({ origin: ORIGIN, soonDays: SOON_DAYS, ts: Date.now(), rows });
  const res = new Response(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // An empty answer must never be pinned: TP's cache may simply not have
      // been warm for a minute.
      'cache-control': ok ? 'public, max-age=600' : 'no-store',
    },
  });
  if (ok) waitUntil(cache.put(cacheKey, new Response(body, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': `public, max-age=${CACHE_TTL}` } })));
  return res;
}
