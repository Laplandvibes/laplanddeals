import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';

/**
 * Cheapest Lapland cabins this week, from the affiliate Worker's /_cabins
 * endpoint (Lomarengas Adtraction product feed pfid 375, parsed into KV at
 * most once per 24 h). Photos and weekly from-prices are the operator's own;
 * the Lomarengas programme explicitly allows showing them. Every CTA routes
 * through go/lomarengas?dest= so the click hits D1 with a placement tag.
 *
 * The header CTA opens Lomarengas's OWN last-minute filter for Lapland
 * (?lastMinuteOffer=true) — that is the only honest "äkkilähdöt" link we can
 * offer, because the feed carries no discount field (measured 2026-09-10:
 * Price == OriginalPrice on 3 970 / 3 970 rows).
 */

type ApiCabin = {
  id: string; name: string; img: string; slug: string; place: string; muni: string;
  p: number | null; pe: number; sqm: number | null; br: number | null; stars: number | null; weeklyFrom: number | null;
};
type Api = { updatedAt: string; totals: Record<string, number>; groups: Record<string, ApiCabin[]> };

const CABINS_API = 'https://go.laplandvibes.com/_cabins';
const REDIRECT = 'https://go.laplandvibes.com/go/lomarengas';
const SHOWN = 6;

let cache: Api | null = null;
let inflight: Promise<Api | null> | null = null;
function load(): Promise<Api | null> {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch(CABINS_API)
      .then((r) => (r.ok ? (r.json() as Promise<Api>) : null))
      .then((d) => { if (d && d.groups) cache = d; return cache; })
      .catch(() => null);
  }
  return inflight;
}

function cabinHref(slug: string, sid: string, lang: Lang): string {
  const dest = lang === 'fi' ? `https://www.lomarengas.fi/mokit/${slug}` : `https://www.lomarengas.fi/en/cottages/${slug}`;
  return `${REDIRECT}?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;
}
function lastMinuteHref(lang: Lang): string {
  const dest = lang === 'fi'
    ? 'https://www.lomarengas.fi/mokkihaku/lappi?lastMinuteOffer=true'
    : 'https://www.lomarengas.fi/en/cottage-search/lappi?lastMinuteOffer=true';
  return `${REDIRECT}?sid=live_cabins_lastminute&dest=${encodeURIComponent(dest)}`;
}

export default function LiveCabins() {
  const lang = useLang();
  const c = COPY[lang].live.cabins;
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

  const cabins = useMemo(() => {
    if (!data) return [];
    const seen = new Set<string>();
    const all: ApiCabin[] = [];
    for (const group of Object.values(data.groups)) {
      for (const cab of group) {
        if (!cab.weeklyFrom || cab.weeklyFrom <= 0 || seen.has(cab.id)) continue;
        seen.add(cab.id);
        all.push(cab);
      }
    }
    all.sort((a, b) => (a.weeklyFrom || 9e9) - (b.weeklyFrom || 9e9));
    return all.slice(0, SHOWN);
  }, [data]);

  if (failed || (data && cabins.length === 0)) return null;

  const updated = data
    ? (() => { try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short' }).format(new Date(data.updatedAt)); } catch { return data.updatedAt.slice(0, 10); } })()
    : '';
  const lmHref = lastMinuteHref(lang);

  return (
    <section className="relative bg-cream-2 border-y border-line py-16 sm:py-20" aria-labelledby="live-cabins-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <p className="text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">{c.eyebrow}</p>
            <h2 id="live-cabins-title" className="font-heading text-3xl sm:text-5xl leading-[1.05] text-ink">{c.title}</h2>
            <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">{c.lead}</p>
          </div>
          <div className="md:max-w-xs md:text-right">
            <a
              href={lmHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick('lomarengas', 'live_cabins_lastminute', lmHref)}
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-vibe-pink hover:bg-vibe-pink-2 text-ivory font-bold uppercase tracking-[0.1em] px-6 py-3.5 rounded-full text-[13px] transition-colors no-underline"
            >
              {c.lastMinute}
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-ink-mute text-[12px] leading-relaxed mt-3">{c.lastMinuteLead}</p>
          </div>
        </div>

        {!data ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" aria-hidden="true">
            {[0, 1, 2].map((i) => <li key={i} className="h-[88px] rounded-lg border border-line bg-cream/60 animate-pulse" />)}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {cabins.map((cab) => {
              const sid = `live_cabin_${cab.id}`;
              const href = cabinHref(cab.slug, sid, lang);
              return (
                <li key={cab.id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => trackAffiliateClick('lomarengas', sid, href)}
                    className="group flex items-center gap-4 min-h-[88px] rounded-lg border border-line bg-cream px-3 py-3 hover:border-vibe-pink/40 transition-colors no-underline"
                  >
                    <img
                      src={cab.img}
                      alt={cab.name}
                      loading="lazy"
                      decoding="async"
                      width={96}
                      height={72}
                      className="w-24 h-[72px] shrink-0 rounded-md object-cover bg-cream-2"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-ink text-[15px] leading-snug truncate">{cab.name}</p>
                      <p className="text-[12px] text-ink-soft truncate">{cab.place}{cab.muni && cab.muni !== cab.place ? `, ${cab.muni}` : ''}</p>
                      {cab.p ? (
                        <p className="inline-flex items-center gap-1 text-[11px] text-ink-mute mt-1">
                          <Users className="w-3 h-3" aria-hidden="true" />{cab.p}{cab.pe ? `+${cab.pe}` : ''} {c.guests}
                        </p>
                      ) : null}
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-ink-mute">{c.weekFrom}</div>
                      <div className="font-heading text-2xl leading-none text-vibe-pink">{fmt.format(cab.weeklyFrom || 0)}</div>
                      <div className="text-[11px] text-ink-mute mt-1 group-hover:text-vibe-pink transition-colors">{c.view} →</div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {updated && <p className="mt-4 text-[12px] text-ink-mute">{c.updated.replace('{date}', updated)} · Lomarengas</p>}
      </div>
    </section>
  );
}
