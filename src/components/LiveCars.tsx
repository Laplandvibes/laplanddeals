import { useMemo, useState } from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { buildAffiliateHref } from './AffiliateCTA';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';
import { EB_AIRPORTS, EB_CHECKED_AT, EB_CLASS_KEYS, EB_OFFERS, EB_WINDOWS, type EbAirport } from '../data/ebOffers';

/**
 * Real EconomyBookings totals for a 4-day airport hire, captured from the live
 * comparison (see data/ebOffers.ts for provenance). Each row deep-links the
 * SAME search with the SAME dates through the go/cars Worker, so the visitor
 * lands on live prices for exactly what the row shows.
 *
 * Only windows whose pick-up is still ahead of today are rendered; when the
 * last one has passed the whole section disappears until the data is
 * refreshed. Rows per airport are the cheapest four.
 */

const ROWS = 4;
const AIRPORT_NAME: Record<EbAirport, string> = { RVN: 'Rovaniemi', KTT: 'Kittilä', IVL: 'Ivalo' };

function fmtDate(iso: string, lang: Lang): string {
  try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(iso + 'T12:00:00Z')); }
  catch { return iso; }
}

export default function LiveCars({ compact = false }: { compact?: boolean }) {
  const lang = useLang();
  const c = COPY[lang].live.cars;
  const [airport, setAirport] = useState<EbAirport>('RVN');

  const today = new Date().toISOString().slice(0, 10);
  const windows = useMemo(() => EB_WINDOWS.filter((w) => w.pickup >= today), [today]);
  const [winKey, setWinKey] = useState<string | null>(null);
  const win = windows.find((w) => w.key === winKey) ?? windows[0];

  const fmt = useMemo(() => {
    try { return new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }); }
    catch { return new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
  }, [lang]);

  if (!win) return null;

  const offers = EB_OFFERS
    .filter((o) => o.window === win.key && o.airport === airport)
    .sort((a, b) => a.total - b.total)
    .slice(0, ROWS);

  const checked = fmtDate(EB_CHECKED_AT, lang);
  const chip = (active: boolean) =>
    `min-h-[44px] px-4 rounded-full text-[12px] font-bold uppercase tracking-[0.12em] border transition-colors ${
      active ? 'bg-ivory text-deep-night border-ivory' : 'bg-transparent text-ink-soft border-line-2 hover:border-ivory/60'
    }`;

  return (
    <section className="relative py-16 sm:py-20" aria-labelledby="live-cars-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-8 md:mb-10">
          <p className="text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">{c.eyebrow.replace('{date}', checked)}</p>
          <h2 id="live-cars-title" className="font-heading text-3xl sm:text-5xl leading-[1.05] text-ink">{c.title}</h2>
          {!compact && <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">{c.lead}</p>}
        </div>

        {/* Selectors: one full-width row per group on phones, chips inline from sm up. */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 mb-6">
          <div className="grid grid-cols-3 gap-2 sm:flex">
            {EB_AIRPORTS.map((a) => (
              <button key={a} type="button" onClick={() => setAirport(a)} aria-pressed={airport === a} className={chip(airport === a)}>
                {AIRPORT_NAME[a]}
              </button>
            ))}
          </div>
          {windows.length > 1 && (
            <div className="grid grid-cols-2 gap-2 sm:flex">
              {windows.map((w) => (
                <button key={w.key} type="button" onClick={() => setWinKey(w.key)} aria-pressed={win.key === w.key} className={chip(win.key === w.key)}>
                  {fmtDate(w.pickup, lang)} – {fmtDate(w.dropoff, lang)}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="text-[12px] text-ink-mute mb-3">{c.window.replace('{from}', fmtDate(win.pickup, lang)).replace('{to}', fmtDate(win.dropoff, lang))} · {AIRPORT_NAME[airport]}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {offers.map((o) => {
            const sid = `live_car_${o.airport.toLowerCase()}_${win.key}_${EB_CLASS_KEYS[o.classIdx]}`;
            const href = buildAffiliateHref({
              partner: 'cars',
              sid,
              query: { pickup_location: o.airport, pickup_date: win.pickup, dropoff_date: win.dropoff },
              lang,
            });
            return (
              <li key={`${o.airport}-${o.window}-${o.classIdx}-${o.supplier}-${o.model}`}>
                <a
                  href={href}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  onClick={() => trackAffiliateClick('economybookings', sid, href)}
                  className="group flex items-center gap-4 min-h-[72px] rounded-lg border border-line bg-cream-2 px-4 py-3 hover:border-vibe-pink/40 transition-colors no-underline"
                >
                  {/* Phones wrap instead of truncating: "Volkswagen P…" and "Green M…" were
                      measured at 375 px, and a cut-off name reads as a defect. */}
                  <div className="w-[64px] sm:w-[76px] shrink-0">
                    <span className="inline-block rounded-full border border-line-2 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft">{c.classNames[o.classIdx]}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink text-[15px] leading-snug sm:truncate">{o.model} <span className="font-normal text-ink-mute whitespace-nowrap">· {c.orSimilar}</span></p>
                    <p className="flex flex-wrap items-center gap-x-1.5 text-[12px] text-ink-soft">
                      <span>{c.operator}: {o.supplier}</span>
                      <span>· {o.gear === 'A' ? c.auto : c.manual}</span>
                      <span className="inline-flex items-center gap-1"><Users className="w-3 h-3" aria-hidden="true" />{o.seats}</span>
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-ink-mute">{c.total}</div>
                    <div className="font-heading text-2xl leading-none text-vibe-pink flex items-center justify-end gap-1">
                      {fmt.format(o.total)}
                      <ArrowUpRight className="w-4 h-4 text-ink-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </div>
                    <div className="text-[11px] text-ink-mute mt-1 group-hover:text-vibe-pink transition-colors">{c.cta}</div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
