import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plane } from 'lucide-react';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';

/**
 * Cheapest Helsinki → Lapland fares, live. Data comes from this site's own
 * Pages Function (/api/live-flights), which reads laplandflights.fi's
 * Travelpayouts endpoints; nothing here is authored by hand.
 *
 * Every row opens the EXACT fare (the aviasales search URL carries the fare
 * token) through go.laplandvibes.com/go/aviasales so the click lands in D1
 * and the Worker writes the per-site marker. If the API fails or returns no
 * real fares, the section renders nothing — an empty deals list is worse
 * than no list.
 */

type Fare = { price: number; date: string; airline: string; oneWay: boolean; book: string };
type Row = { code: string; city: string; cheapest: Fare | null; soon: Fare | null };
type Api = { ts: number; soonDays: number; rows: Row[] };

type Line = { key: string; sid: string; city: string; fare: Fare; soon: boolean };

const REDIRECT = 'https://go.laplandvibes.com/go/aviasales';
const MAX_ROWS = 8;

let cache: Api | null = null;
let inflight: Promise<Api | null> | null = null;
function load(): Promise<Api | null> {
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

export default function LiveFlights({ compact = false }: { compact?: boolean }) {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].live.flights;
  const [data, setData] = useState<Api | null>(cache);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    load().then((d) => { if (!alive) return; if (d) setData(d); else setFailed(true); });
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
      if (r.soon && !seen.has(r.soon.book)) {
        seen.add(r.soon.book);
        out.push({ key: `${code}-soon`, sid: `live_flight_${code}_soon`, city: r.city, fare: r.soon, soon: true });
      }
      if (r.cheapest && !seen.has(r.cheapest.book)) {
        seen.add(r.cheapest.book);
        out.push({ key: `${code}-any`, sid: `live_flight_${code}`, city: r.city, fare: r.cheapest, soon: false });
      }
    }
    out.sort((a, b) => a.fare.price - b.fare.price);
    return out.slice(0, MAX_ROWS);
  }, [data]);

  if (failed || (data && lines.length === 0)) return null;

  const checkedAt = data
    ? (() => { try { return new Intl.DateTimeFormat(lang, { hour: '2-digit', minute: '2-digit' }).format(new Date(data.ts)); } catch { return ''; } })()
    : '';

  return (
    <section className="relative py-16 sm:py-20" aria-labelledby="live-flights-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
              <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-vibe-pink deal-pulse shrink-0" />
              {c.eyebrow}
            </p>
            <h2 id="live-flights-title" className="font-heading text-3xl sm:text-5xl leading-[1.05] text-ink">{c.title}</h2>
            {!compact && <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">{c.lead}</p>}
          </div>
          {!compact && (
            <Link to={to('/flights')} className="hidden md:inline-flex items-center gap-1 text-ink hover:text-vibe-pink text-[12px] font-bold uppercase tracking-[0.14em] no-underline">
              {c.all} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {!data ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="h-[72px] rounded-lg border border-line bg-cream-2/60 animate-pulse" />
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lines.map((l) => {
              const href = goHref(l.fare.book, l.sid);
              const { day, month } = dateParts(l.fare.date, lang);
              return (
                <li key={l.key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('aviasales', l.sid, href)}
                    className="group flex items-center gap-4 min-h-[72px] rounded-lg border border-line bg-cream-2 px-4 py-3 hover:border-vibe-pink/40 transition-colors no-underline"
                  >
                    <div className="w-12 shrink-0 text-center">
                      <div className="font-heading text-3xl leading-none text-ink">{day}</div>
                      <div className="text-[10px] uppercase tracking-[0.14em] text-ink-mute mt-0.5">{month}</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 font-bold text-ink text-[15px] leading-snug">
                        <Plane className="w-3.5 h-3.5 text-vibe-pink shrink-0" aria-hidden="true" />
                        <span className="truncate">Helsinki → {l.city}</span>
                      </p>
                      <p className="text-[12px] text-ink-soft truncate">
                        {l.fare.airline ? `${l.fare.airline} · ` : ''}{l.fare.oneWay ? c.oneWay : c.roundTrip}
                        {l.soon && <span className="ml-2 inline-flex items-center rounded-full bg-vibe-pink/15 text-vibe-pink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{c.soon}</span>}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-ink-mute">{c.from}</div>
                      <div className="font-heading text-3xl leading-none text-vibe-pink flex items-center gap-1 justify-end">
                        {fmt.format(l.fare.price)}
                        <ArrowUpRight className="w-4 h-4 text-ink-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {checkedAt && (
          <p className="mt-4 text-[12px] text-ink-mute">{c.checked.replace('{time}', checkedAt)}</p>
        )}
        {!compact && (
          <Link to={to('/flights')} className="md:hidden inline-flex items-center gap-1 mt-5 text-ink hover:text-vibe-pink text-[12px] font-bold uppercase tracking-[0.14em] no-underline">
            {c.all} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </section>
  );
}
