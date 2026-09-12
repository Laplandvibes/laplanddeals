import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LiveList, { type SortMode } from './live/LiveList';
import LiveRow from './live/LiveRow';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

/**
 * Cheapest Helsinki → Lapland fares, live, on the sheet. Data comes from this
 * site's own Pages Function (/api/live-flights), which reads laplandflights.fi's
 * Travelpayouts endpoints; nothing here is authored by hand.
 *
 * Every row opens the EXACT fare (the aviasales search URL carries the fare
 * token) through go.laplandvibes.com/go/aviasales, so the click lands in D1
 * and the Worker writes the per-site marker. The carrier mark on the row comes
 * from the same source as the fare (Travelpayouts' airline-logo CDN) — a price
 * row is never a bare price (rule §12). If the API fails, the section renders
 * nothing: an empty deals list is worse than no list.
 */

type Fare = { price: number; date: string; airline: string; airlineCode?: string; oneWay: boolean; book: string };
type Row = { code: string; city: string; cheapest: Fare | null; soon: Fare | null };
type Api = { ts: number; soonDays: number; rows: Row[] };
type Line = { key: string; sid: string; code: string; city: string; fare: Fare; soon: boolean };

const REDIRECT = 'https://go.laplandvibes.com/go/aviasales';
const LOGO = (code: string) => `https://pics.avs.io/120/60/${code}.png`;
const MAX_ROWS = 8;

let cache: Api | null = null;
let inflight: Promise<Api | null> | null = null;
function loadFares(): Promise<Api | null> {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch('/api/live-flights')
      .then((r) => (r.ok ? (r.json() as Promise<Api>) : null))
      .then((d) => { if (d && Array.isArray(d.rows)) cache = d; return cache; })
      .catch(() => null);
  }
  return inflight;
}

function goHref(book: string, sid: string): string {
  return `${REDIRECT}?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(book)}`;
}

function dateParts(iso: string, lang: Lang): { day: string; month: string } {
  const d = new Date(iso + 'T12:00:00Z');
  try {
    return {
      day: new Intl.DateTimeFormat(lang, { day: 'numeric', timeZone: 'UTC' }).format(d),
      month: new Intl.DateTimeFormat(lang, { month: 'short', timeZone: 'UTC' }).format(d),
    };
  } catch {
    return { day: iso.slice(8, 10), month: iso.slice(5, 7) };
  }
}

export default function LiveFlights({ limit = 6, phoneLimit, kicker }: { limit?: number; phoneLimit?: number; kicker?: boolean }) {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].live.flights;
  const cl = COPY[lang].live.list;
  const [data, setData] = useState<Api | null>(cache);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    loadFares().then((d) => { if (!alive) return; if (d) setData(d); else setFailed(true); });
    return () => { alive = false; };
  }, []);

  const fmt = useMemo(() => {
    try { return new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
    catch { return new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
  }, [lang]);

  const lines = useMemo<Line[]>(() => {
    if (!data) return [];
    const out: Line[] = [];
    const seen = new Set<string>();
    for (const r of data.rows) {
      const code = r.code.toLowerCase();
      if (r.soon && !seen.has(r.soon.book)) { seen.add(r.soon.book); out.push({ key: `${code}-soon`, sid: `live_flight_${code}_soon`, code: r.code, city: r.city, fare: r.soon, soon: true }); }
      if (r.cheapest && !seen.has(r.cheapest.book)) { seen.add(r.cheapest.book); out.push({ key: `${code}-any`, sid: `live_flight_${code}`, code: r.code, city: r.city, fare: r.cheapest, soon: false }); }
    }
    out.sort((a, b) => a.fare.price - b.fare.price);
    return out.slice(0, MAX_ROWS);
  }, [data]);

  if (failed || (data && lines.length === 0)) return null;

  const checkedAt = data
    ? (() => { try { return new Intl.DateTimeFormat(lang, { hour: '2-digit', minute: '2-digit' }).format(new Date(data.ts)); } catch { return ''; } })()
    : '';

  const modes: SortMode<Line>[] = [
    { key: 'price', label: cl.sortPrice, column: cl.colCheapest, sort: (a, b) => a.fare.price - b.fare.price || a.fare.date.localeCompare(b.fare.date) },
    { key: 'date', label: cl.sortDate, column: cl.colSoonest, sort: (a, b) => a.fare.date.localeCompare(b.fare.date) || a.fare.price - b.fare.price },
  ];

  return (
    <LiveList<Line>
      id="live-flights"
      kicker={kicker ? c.eyebrow : undefined}
      title={c.title}
      lead={c.lead}
      aside={
        <Link to={to('/flights')} className="inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full border border-deep-night/25 px-5 py-2.5 text-sm font-semibold text-deep-night no-underline transition-colors hover:border-deep-night hover:bg-deep-night hover:text-snow">
          {c.all} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      }
      rows={lines}
      modes={modes}
      limit={limit}
      phoneLimit={phoneLimit}
      loading={!data}
      rowKey={(l) => l.key}
      footnote={checkedAt ? `${c.checked.replace('{time}', checkedAt)} · Travelpayouts` : undefined}
      renderRow={(l, i) => {
        const { day, month } = dateParts(l.fare.date, lang);
        const code = l.fare.airlineCode;
        return (
          <LiveRow
            index={i}
            media={code ? { kind: 'logo', src: LOGO(code), alt: l.fare.airline || code } : { kind: 'plate', label: l.code, sub: l.fare.airline }}
            day={day}
            month={month}
            dateSub={l.fare.airline || undefined}
            badge={l.soon ? { text: c.soon, tone: 'pink' } : null}
            name={`Helsinki → ${l.city}`}
            facts={<><span className="font-medium text-finland-blue">{l.city} ({l.code})</span>{l.fare.airline && <><span aria-hidden="true">·</span><span>{l.fare.airline}</span></>}<span aria-hidden="true">·</span><span>{l.fare.oneWay ? c.oneWay : c.roundTrip}</span></>}
            price={fmt.format(l.fare.price)}
            seen={cl.seenAt.replace('{source}', 'Travelpayouts').replace('{d}', checkedAt)}
            href={goHref(l.fare.book, l.sid)}
            sid={l.sid}
            partner="aviasales"
            cta={cl.openFare}
          />
        );
      }}
    />
  );
}
