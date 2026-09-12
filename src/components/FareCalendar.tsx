import { useEffect, useMemo, useRef, useState } from 'react';
import { segClass } from './live/seg';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

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
 */

type Day = { day: number; price: number; airline: string; book: string };
type Month = { month: string; days: Day[] };
type Api = { code: string; ts: number; months: Month[] };

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

  const months = useMemo(() => (data?.months ?? []).filter((m) => m.days.length > 0), [data]);
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
  let barIndex = 0;

  return (
    <section ref={ref} id="fare-calendar" aria-labelledby="fare-calendar-title" className={`${inView ? 'chart-in ' : ''}${className ?? ''}`}>
      <div className="max-w-2xl">
        <h2 id="fare-calendar-title" className="font-heading text-3xl leading-[1.02] text-deep-night sm:text-5xl">{c.h2}</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-deep-night/70 sm:text-lg">{c.lead.replace('{d}', readAt)}</p>
      </div>

      <div className="tile-kelo mt-6 p-3 sm:p-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label={c.airport}>
          {AIRPORTS.map((a) => (
            <button key={a.code} type="button" aria-pressed={code === a.code} className={segClass(code === a.code)} onClick={() => setCode(a.code)}>
              {a.city}
            </button>
          ))}
        </div>

        {!data ? (
          <div className="mt-4 grid gap-4 md:grid-cols-3" aria-hidden="true">
            {[0, 1, 2].map((i) => <div key={i} className="card-frost h-60 animate-pulse" />)}
          </div>
        ) : months.length === 0 ? (
          <p className="card-frost mt-4 p-6 text-sm text-deep-night/75">{c.empty}</p>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {months.map((mo) => {
              const days = mo.days;
              const min = days.reduce((a, b) => (b.price < a.price ? b : a));
              const max = days.reduce((a, b) => (b.price > a.price ? b : a));
              return (
                <figure key={mo.month} className="card-frost p-4 sm:p-5">
                  <figcaption className="font-body font-bold text-deep-night">{monthTitle(mo.month)}</figcaption>
                  <div className="relative mt-3 h-40 pr-11">
                    {ticks.map((tv) => (
                      <div key={tv} aria-hidden="true" className="pointer-events-none absolute inset-x-0 border-t border-deep-night/10" style={{ bottom: `${(tv / ceiling) * 100}%` }}>
                        <span className="absolute -top-2 right-0 text-[10px] leading-none text-deep-night/50">{fmt.format(tv)}</span>
                      </div>
                    ))}
                    <div
                      className="absolute inset-y-0 left-0 right-11 flex items-end gap-[3px] border-b border-deep-night/20"
                      role="img"
                      aria-label={`${monthTitle(mo.month)}: ${c.cheapest.replace('{d}', dayLabel(mo.month, min.day)).replace('{p}', fmt.format(min.price))}; ${c.priciest.replace('{d}', dayLabel(mo.month, max.day)).replace('{p}', fmt.format(max.price))}`}
                    >
                      {days.map((d) => {
                        const i = barIndex++;
                        const h = Math.max(2, (d.price / ceiling) * 100);
                        const isMin = d.day === min.day, isMax = d.day === max.day;
                        return (
                          <div key={d.day} className="relative flex h-full min-w-[6px] flex-1 items-end">
                            {(isMin || isMax) && (
                              <span className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold leading-none ${isMin ? 'text-[#047857]' : 'text-deep-night'}`} style={{ bottom: `calc(${h}% + 4px)` }}>
                                {fmt.format(d.price)}
                              </span>
                            )}
                            <div className={`bar-in w-full rounded-t-[3px] ${isMin ? 'bg-aurora-green' : 'bar-kelo'}`} style={{ height: `${h}%`, ['--i' as string]: i }} title={`${dayLabel(mo.month, d.day, true)} ${fmt.format(d.price)} · ${d.airline}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between pr-11 text-[11px] text-deep-night/50">
                    <span>{dayLabel(mo.month, days[0].day)}</span>
                    <span>{dayLabel(mo.month, days[days.length - 1].day)}</span>
                  </div>
                  <dl className="mt-3 space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-deep-night">
                      <span className="inline-block h-2.5 w-2.5 rounded-sm bg-aurora-green" aria-hidden="true" />
                      <dd className="font-semibold">{c.cheapest.replace('{d}', dayLabel(mo.month, min.day)).replace('{p}', fmt.format(min.price))}</dd>
                    </div>
                    <div className="flex items-center gap-2 text-deep-night/70">
                      <span className="inline-block h-2.5 w-2.5 rounded-sm bar-kelo" aria-hidden="true" />
                      <dd>{c.priciest.replace('{d}', dayLabel(mo.month, max.day)).replace('{p}', fmt.format(max.price))}</dd>
                    </div>
                  </dl>
                </figure>
              );
            })}
          </div>
        )}
        <p className="mt-3 text-[11px] text-deep-night/55">{c.note}</p>
      </div>
    </section>
  );
}
