import { useEffect, useMemo, useRef, useState } from 'react';
import FitHeading from './live/FitHeading';
import SegGroup from './live/SegGroup';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import Units from './live/Units';

/**
 * "When are flights to Lapland cheapest?" — one bar per departure day for
 * which Travelpayouts has a cached fare from Helsinki, three months ahead,
 * per Lapland airport. The honest version of a last-minute site's urgency:
 * it does not say "3 seats left", it shows that 31 December costs half of
 * 15 September, in the reader's own airport.
 *
 * Data: this site's Pages Function (/api/live-flights?cal=RVN → laplandflights.fi
 * /api/flightsearch per month). Days without a cached fare have no bar, and
 * the chart says so. Rendered on the kelo panel, the site's one warm surface
 * (ported from laplandhoteldeals' PriceCalendar, 11.9.2026). Bars grow once
 * when the chart scrolls into view; reduced motion fades.
 *
 * Each month is drawn on its own calendar: one slot per day, the bar in its
 * date's slot, so a day without a fare is a visible gap and 1 → 13 November
 * is twelve slots, not one. hoteldeals prices every night, so its bars can
 * simply follow each other; the Travelpayouts cache is sparse (26.9.2026: RVN
 * October 12 days, November 4, KTT October 1). Side by side, a bar's width
 * would follow the number of fares (4 fares = 57 px blocks at 375 px, 1 fare
 * = one block across the month) and the gaps between dates would vanish.
 *
 * A month becomes a panel when it has at least two fares, the least a
 * comparison needs. A month with a single fare is listed as a line under the
 * panels instead, so that fare is still shown. Up to three panels, taken in
 * order from the four months the function returns: at the end of a month the
 * current one rarely has two fares left, and the chart then still reaches
 * three months ahead.
 */

type Day = { day: number; price: number; airline: string; book: string };
type Month = { month: string; days: Day[] };
type Api = { code: string; ts: number; months: Month[] };

/** The fewest fares that make a month a chart (cheapest ≠ priciest). */
const MIN_FARES = 2;
/** Month panels on screen: "three months ahead". */
const PANELS = 3;
/**
 * The cheapest and dearest price are labelled in a row above the plot, with a
 * hairline down to the bar: on a day axis a label right over the cheapest bar
 * would sit on the bars of its taller neighbours. The two labels share that
 * row, so the dearest one is left to the legend when they would touch, judged
 * on the narrowest phone the network measures (360 px: a 228 px plot) at ~6 px
 * per character, which only errs toward dropping it.
 */
const PHONE_PLOT_PX = 228;
const LABEL_CHAR_PX = 6;

const daysIn = (ym: string) => { const [y, m] = ym.split('-').map(Number); return new Date(y, m, 0).getDate(); };

const AIRPORTS: { code: string; city: string }[] = [
  { code: 'RVN', city: 'Rovaniemi' },
  { code: 'KTT', city: 'Kittilä' },
  { code: 'IVL', city: 'Ivalo' },
  { code: 'KAO', city: 'Kuusamo' },
];

const cache = new Map<string, Api>();
function load(code: string): Promise<Api | null> {
  const hit = cache.get(code);
  if (hit) return Promise.resolve(hit);
  return fetch(`/api/live-flights?cal=${code}`)
    .then((r) => (r.ok ? (r.json() as Promise<Api>) : null))
    .then((d) => { if (d && Array.isArray(d.months)) { cache.set(code, d); return d; } return null; })
    .catch(() => null);
}

export default function FareCalendar({ className }: { className?: string }) {
  const lang = useLang();
  const c = COPY[lang].live.chart;
  const [code, setCode] = useState('RVN');
  const [data, setData] = useState<Api | null>(cache.get('RVN') ?? null);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let alive = true;
    load(code).then((d) => { if (!alive) return; if (d) { setData(d); setFailed(false); } else setFailed(true); });
    return () => { alive = false; };
  }, [code]);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const fmt = useMemo(() => {
    try { return new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
    catch { return new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
  }, [lang]);

  const { months, lone } = useMemo(() => {
    const panels: Month[] = [];
    const single: { month: string; fare: Day }[] = [];
    for (const m of data?.months ?? []) {
      if (panels.length === PANELS) break;
      if (m.days.length >= MIN_FARES) panels.push(m);
      else if (m.days.length === 1) single.push({ month: m.month, fare: m.days[0] });
    }
    return { months: panels, lone: single };
  }, [data]);
  const { ceiling, ticks } = useMemo(() => {
    const all = months.flatMap((m) => m.days);
    const rawMax = all.length ? Math.max(...all.map((d) => d.price)) : 1;
    const step = rawMax <= 200 ? 50 : rawMax <= 500 ? 100 : 250;
    const top = Math.ceil(rawMax / step) * step;
    const t: number[] = [];
    for (let v = step; v <= top; v += step) t.push(v);
    return { ceiling: top, ticks: t };
  }, [months]);

  if (failed && !data) return null;

  const monthTitle = (ym: string) => { const [y, m] = ym.split('-').map(Number); try { return new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(new Date(y, m - 1, 1)); } catch { return ym; } };
  const dayLabel = (ym: string, day: number, long = false) => { const [y, m] = ym.split('-').map(Number); try { return new Intl.DateTimeFormat(lang, long ? { weekday: 'short', day: 'numeric', month: 'short' } : { day: 'numeric', month: 'short' }).format(new Date(y, m - 1, day)); } catch { return `${day}.${m}.`; } };
  const readAt = data ? (() => { try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(data.ts)); } catch { return ''; } })() : '';
  // The read date: in the current month the days before it are past, and are
  // tinted so an empty start of the month does not read as "no fares".
  const readDay = data ? new Date(data.ts) : null;
  const readYm = readDay ? `${readDay.getFullYear()}-${String(readDay.getMonth() + 1).padStart(2, '0')}` : '';
  const sentenceCase = (s: string) => s.charAt(0).toLocaleUpperCase(lang) + s.slice(1);
  let barIndex = 0;

  return (
    <section ref={ref} id="fare-calendar" aria-labelledby="fare-calendar-title" className={`${inView ? 'chart-in ' : ''}${className ?? ''}`}>
      <div className="@container">
        <FitHeading id="fare-calendar-title" text={c.h2} className="font-heading text-3xl leading-[1.02] text-deep-night sm:text-5xl" />
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-deep-night/70 sm:text-lg">{c.lead.replace('{d}', readAt)}</p>
      </div>

      <div className="tile-kelo mt-6 p-3 sm:p-5">
        <SegGroup
          className="max-w-2xl"
          label={c.airport}
          options={AIRPORTS.map((a) => ({ key: a.code, label: a.city }))}
          value={code}
          onChange={setCode}
        />

        {!data ? (
          <div className="mt-4 grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))' }} aria-hidden="true">
            {[0, 1, 2].map((i) => <div key={i} className="card-frost h-60 animate-pulse" />)}
          </div>
        ) : months.length === 0 && lone.length === 0 ? (
          <p className="card-frost mt-4 p-6 text-sm text-deep-night/75">{c.empty}</p>
        ) : (
          <>
            {months.length > 0 && (
              <div className="mt-4 grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))' }} data-fill-grid="fare-months">
                {months.map((mo) => {
                  const days = mo.days;
                  const n = daysIn(mo.month);
                  const past = mo.month === readYm && readDay ? readDay.getDate() - 1 : 0;
                  const min = days.reduce((a, b) => (b.price < a.price ? b : a));
                  const max = days.reduce((a, b) => (b.price > a.price ? b : a));
                  const spread = max.price > min.price;
                  const cheapest = c.cheapest.replace('{d}', dayLabel(mo.month, min.day)).replace('{p}', fmt.format(min.price));
                  const priciest = c.priciest.replace('{d}', dayLabel(mo.month, max.day)).replace('{p}', fmt.format(max.price));
                  // A label is centred on its bar, or kept inside the plot at either end of the month.
                  const anchor = (day: number) => (day <= 2 ? 'left-0' : day >= n - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2');
                  const labelSpan = (d: Day): [number, number] => {
                    const slot = PHONE_PLOT_PX / n, w = fmt.format(d.price).length * LABEL_CHAR_PX;
                    const x0 = d.day <= 2 ? (d.day - 1) * slot : d.day >= n - 1 ? d.day * slot - w : (d.day - 0.5) * slot - w / 2;
                    return [x0, x0 + w];
                  };
                  const [a0, a1] = labelSpan(min), [b0, b1] = labelSpan(max);
                  const labelMax = spread && (b1 + 4 <= a0 || a1 + 4 <= b0);
                  return (
                    <figure key={mo.month} className="card-frost p-4 sm:p-5">
                      <figcaption className="font-body font-bold text-deep-night">{monthTitle(mo.month)}</figcaption>
                      <div className="relative mt-5 h-40 pr-11">
                        {ticks.map((tv) => (
                          <div key={tv} aria-hidden="true" className="pointer-events-none absolute inset-x-0 border-t border-deep-night/10" style={{ bottom: `${(tv / ceiling) * 100}%` }}>
                            <span className="absolute -top-2 right-0 text-[10px] leading-none text-deep-night/50">{fmt.format(tv)}</span>
                          </div>
                        ))}
                        <div
                          className="absolute inset-y-0 left-0 right-11 grid items-end gap-x-[2px] border-b border-deep-night/20"
                          style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
                          role="img"
                          aria-label={`${monthTitle(mo.month)}: ${cheapest}${spread ? `; ${priciest}` : ''}`}
                        >
                          {past > 0 && <div aria-hidden="true" className="h-full bg-deep-night/[0.05]" style={{ gridColumn: `1 / ${past + 1}`, gridRow: 1 }} />}
                          {days.map((d) => {
                            const i = barIndex++;
                            const h = Math.max(2, (d.price / ceiling) * 100);
                            const isMin = d.day === min.day;
                            const labelled = isMin || (labelMax && d.day === max.day);
                            return (
                              <div
                                key={d.day}
                                className="relative flex h-full items-end justify-center"
                                style={{ gridColumn: d.day, gridRow: 1 }}
                                data-day={d.day}
                                title={`${dayLabel(mo.month, d.day, true)} ${fmt.format(d.price)} · ${d.airline}`}
                              >
                                {labelled && (
                                  <span className={isMin ? 'text-[#047857]' : 'text-deep-night'}>
                                    <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 w-px -translate-x-1/2 bg-current opacity-40" style={{ bottom: `${h}%` }} />
                                    <span className={`absolute bottom-full ${anchor(d.day)} mb-0.5 whitespace-nowrap text-[10px] font-semibold leading-none`}>
                                      {fmt.format(d.price)}
                                    </span>
                                  </span>
                                )}
                                <div className={`bar-in w-full max-w-3 rounded-t-[3px] ${isMin ? 'bg-aurora-green' : 'bar-kelo'}`} style={{ height: `${h}%`, ['--i' as string]: i }} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mt-1 flex justify-between pr-11 text-[11px] text-deep-night/50">
                        <span>{dayLabel(mo.month, 1)}</span>
                        <span>{dayLabel(mo.month, n)}</span>
                      </div>
                      <dl className="mt-3 space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-deep-night">
                          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-aurora-green" aria-hidden="true" />
                          <dd className="font-semibold">{cheapest}</dd>
                        </div>
                        {spread && (
                          <div className="flex items-center gap-2 text-deep-night/70">
                            <span className="inline-block h-2.5 w-2.5 rounded-sm bar-kelo" aria-hidden="true" />
                            <dd>{priciest}</dd>
                          </div>
                        )}
                      </dl>
                    </figure>
                  );
                })}
              </div>
            )}
            {lone.length > 0 && (
              <ul className="mt-4 space-y-1 text-sm text-deep-night/75" data-fare-single>
                {lone.map(({ month, fare }) => (
                  <li key={month}>{c.single.replace('{m}', sentenceCase(monthTitle(month))).replace('{d}', dayLabel(month, fare.day)).replace('{p}', fmt.format(fare.price))}</li>
                ))}
              </ul>
            )}
          </>
        )}
        <p className="mt-3 text-[11px] text-deep-night/55" data-sheet-note><Units text={c.note} /></p>
      </div>
    </section>
  );
}
