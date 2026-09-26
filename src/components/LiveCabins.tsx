import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import LiveList, { type SortMode } from './live/LiveList';
import LiveRow from './live/LiveRow';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';

/**
 * Lapland's lowest-priced cabins by weekly from-price, on the sheet (no "this week": the feed
 * is a catalogue, not availability for given dates). Source: the affiliate
 * Worker's /_cabins endpoint (Lomarengas Adtraction product feed pfid 375,
 * parsed into KV at most once per 24 h). Photo, weekly from-price, capacity
 * and the operator's quality stars all come from that one feed (rule §12);
 * the Lomarengas programme explicitly allows showing its photos.
 *
 * Wide screens: cheapest first | best-rated first (Lomarengas stars, ties by
 * price). The header button opens Lomarengas's OWN last-minute filter for
 * Lapland — the only honest "äkkilähdöt" link, because the feed carries no
 * discount field (Price == OriginalPrice on 3 970 / 3 970 rows, 10.9.2026).
 */

type ApiCabin = {
  id: string; name: string; img: string; slug: string; place: string; muni: string;
  p: number | null; pe: number; sqm: number | null; br: number | null; stars: number | null; weeklyFrom: number | null;
};
type Api = { updatedAt: string; totals: Record<string, number>; groups: Record<string, ApiCabin[]> };

const CABINS_API = 'https://go.laplandvibes.com/_cabins';
const REDIRECT = 'https://go.laplandvibes.com/go/lomarengas';
const MAX_ROWS = 12;
/**
 * Same sanity band the Worker applies to its full price list (/_cabins?prices=1): the feed
 * carries broken price rows. Measured 26.9.2026 (Vesa: "miksi Vaivihka näyttää 1 € hintaa?"):
 * the showcase had 1 €, 65 €, 68 €, 70 € and 88 € "weekly" prices, all with no capacity or size,
 * and sorting cheapest-first put exactly those rows at the top.
 */
const MIN_WEEKLY = 100;
const MAX_WEEKLY = 20000;

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

export default function LiveCabins({ limit = 6, phoneLimit, kicker }: { limit?: number; phoneLimit?: number; kicker?: boolean }) {
  const lang = useLang();
  const c = COPY[lang].live.cabins;
  const cl = COPY[lang].live.list;
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
    for (const group of Object.values(data.groups)) for (const cab of group) {
      if (!cab.weeklyFrom || cab.weeklyFrom < MIN_WEEKLY || cab.weeklyFrom > MAX_WEEKLY || !cab.img || seen.has(cab.id)) continue;
      seen.add(cab.id); all.push(cab);
    }
    all.sort((a, b) => (a.weeklyFrom || 9e9) - (b.weeklyFrom || 9e9));
    return all.slice(0, MAX_ROWS);
  }, [data]);

  if (failed || (data && cabins.length === 0)) return null;

  const updated = data
    ? (() => { try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short' }).format(new Date(data.updatedAt)); } catch { return data.updatedAt.slice(0, 10); } })()
    : '';
  const lmHref = lastMinuteHref(lang);

  // The feed's description stopped yielding stars, guests and size (0/60 on 26.9.2026): a
  // "best-rated first" column over empty ratings would just repeat the price order.
  const hasStars = cabins.some((cab) => cab.stars);
  const modes: SortMode<ApiCabin>[] = [
    { key: 'price', label: cl.sortPrice, column: cl.colCheapest, sort: (a, b) => (a.weeklyFrom || 9e9) - (b.weeklyFrom || 9e9) },
    ...(hasStars ? [{ key: 'stars', label: cl.sortStars, column: cl.colBestStars, sort: (a: ApiCabin, b: ApiCabin) => (b.stars || 0) - (a.stars || 0) || (a.weeklyFrom || 9e9) - (b.weeklyFrom || 9e9) }] : []),
  ];

  return (
    <LiveList<ApiCabin>
      id="live-cabins"
      kicker={kicker ? c.eyebrow : undefined}
      title={c.title}
      lead={c.lead}
      aside={
        <div className="lg:max-w-xs lg:shrink-0 lg:text-right">
          <a
            href={lmHref}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => trackAffiliateClick('lomarengas', 'live_cabins_lastminute', lmHref)}
            className="btn-pink inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold no-underline sm:w-auto"
          >
            {c.lastMinute} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-2 text-xs leading-relaxed text-deep-night/60">{c.lastMinuteLead}</p>
        </div>
      }
      rows={cabins}
      modes={modes}
      limit={limit}
      phoneLimit={phoneLimit}
      loading={!data}
      rowKey={(cab) => cab.id}
      footnote={updated ? `${c.updated.replace('{date}', updated)} · ${cl.photoCredit.replace('{source}', 'Lomarengas')}` : undefined}
      renderRow={(cab, i) => {
        const sid = `live_cabin_${cab.id}`;
        return (
          <LiveRow
            index={i}
            media={{ kind: 'photo', src: cab.img, alt: `${cab.name}, ${cab.place}`, width: 640, height: 427, eager: i < 2 }}
            day={cab.p ? `${cab.p}${cab.pe ? `+${cab.pe}` : ''}` : cab.br ? String(cab.br) : ''}
            month={cab.p ? c.guests : cab.br ? c.bedrooms : ''}
            dateSub={cab.sqm ? `${Math.round(cab.sqm)} m²${cab.p && cab.br ? ` · ${cab.br} ${c.bedrooms}` : ''}` : undefined}
            badge={cab.stars ? { text: `${'★'.repeat(Math.min(5, cab.stars))} ${cab.stars}/5`, tone: 'green' } : null}
            name={cab.name}
            facts={[<span key="p" className="font-medium text-finland-blue">{cab.place}</span>, cab.muni && cab.muni !== cab.place ? cab.muni : null, cab.stars ? <span key="s" className="inline-flex items-center gap-1"><Star className="h-3 w-3 text-finland-blue" aria-hidden="true" />{c.starsLabel}</span> : null]}
            price={fmt.format(cab.weeklyFrom || 0)}
            unit={c.perWeek}
            seen={cl.seenAt.replace('{source}', 'Lomarengas').replace('{d}', updated)}
            href={cabinHref(cab.slug, sid, lang)}
            sid={sid}
            partner="lomarengas"
            cta={c.view}
          />
        );
      }}
    />
  );
}
