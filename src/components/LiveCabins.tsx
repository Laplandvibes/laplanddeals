import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, BedDouble, Maximize2, Star, Users } from 'lucide-react';
import LiveList, { type SortMode } from './live/LiveList';
import LiveCard from './live/LiveCard';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';

/**
 * Cabins in Lapland and Ruka, on the sheet. Source: the affiliate Worker's /_cabins endpoint
 * (Lomarengas Adtraction product feed pfid 375, parsed into KV at most once per 24 h): photo,
 * capacity, bedrooms and place; the Lomarengas programme explicitly allows showing its photos.
 *
 * 🔴 No price (Vesa 26.9.2026, "mennään kuten ehdotit"). The feed's price field could not be
 * verified as a weekly price: 7 / 60 showcase cabins matched lomarengas.fi's own offer price
 * within ±10 %, the cheapest end ran 1 € … 105 € for a 10-person cabin, and lomarengas.fi shows
 * no price until dates are picked. The Worker withholds prices network-wide until a verified
 * source exists; each row says where the price is instead. The rows are picked round-robin
 * across the resort groups so six cards never all come from Levi.
 *
 * Photo cards (4.10.2026, Vesa: "ei herätä visuaalista ostonautintoa"): one grid, smallest or
 * largest first by the toggle (a couple and a big group look for different cabins). The photo
 * leads; the card carries what the feed states and Lomarengas stands behind — guests, bedrooms,
 * floor area and Lomarengas's own quality class ("Lomarenkaan laatutarkastettu majoituskohde:
 * ★★★★ (4)" in the feed description, back in the feed by 4.10.2026). The header button opens
 * Lomarengas's OWN last-minute filter for Lapland: the only honest "äkkilähdöt" link, because the
 * feed carries no discount field.
 */

type ApiCabin = {
  id: string; name: string; img: string; slug: string; place: string; muni: string;
  p: number | null; pe: number; sqm: number | null; br: number | null; stars: number | null; weeklyFrom: number | null;
};
type Api = { updatedAt: string; totals: Record<string, number>; groups: Record<string, ApiCabin[]> };

const CABINS_API = 'https://go.laplandvibes.com/_cabins';
const REDIRECT = 'https://go.laplandvibes.com/go/lomarengas';
const MAX_ROWS = 12;
const GROUP_ORDER = ['levi', 'yllas', 'saariselka', 'ruka', 'lapland'];

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

/** The feed writes names in sentence case with unit codes in lower case ("Levin stara c 15",
 *  "Villa arcus a"); the card shows them as names ("Levin Stara C 15"). */
function cabinName(name: string): string {
  return name.split(' ').map((w) => (w === 'ja' ? w : w.charAt(0).toLocaleUpperCase('fi') + w.slice(1))).join(' ');
}

/** "82.5" → "82,5" in Finnish, German, French …: the reader's own decimal mark. */
function fmtArea(sqm: number, lang: Lang): string {
  try { return new Intl.NumberFormat(lang, { maximumFractionDigits: 1 }).format(sqm); } catch { return String(sqm); }
}

/** Take one cabin from each resort group in turn until MAX_ROWS. */
function roundRobin(groups: Record<string, ApiCabin[]>): ApiCabin[] {
  const keys = [...GROUP_ORDER.filter((k) => groups[k]), ...Object.keys(groups).filter((k) => !GROUP_ORDER.includes(k))];
  const seen = new Set<string>();
  const out: ApiCabin[] = [];
  for (let i = 0; out.length < MAX_ROWS; i++) {
    let took = false;
    for (const k of keys) {
      const cab = groups[k][i];
      if (!cab) continue;
      took = true;
      if (!cab.img || !cab.p || seen.has(cab.id)) continue;
      seen.add(cab.id); out.push(cab);
      if (out.length === MAX_ROWS) break;
    }
    if (!took) break;
  }
  return out;
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

  const cabins = useMemo(() => (data ? roundRobin(data.groups) : []), [data]);

  if (failed || (data && cabins.length === 0)) return null;

  const updated = data
    ? (() => { try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short' }).format(new Date(data.updatedAt)); } catch { return data.updatedAt.slice(0, 10); } })()
    : '';
  const lmHref = lastMinuteHref(lang);

  const modes: SortMode<ApiCabin>[] = [
    { key: 'small', label: c.sortSmall, column: c.colSmall, sort: (a, b) => (a.p || 0) - (b.p || 0) || (a.br || 0) - (b.br || 0) },
    { key: 'large', label: c.sortLarge, column: c.colLarge, sort: (a, b) => (b.p || 0) - (a.p || 0) || (b.br || 0) - (a.br || 0) },
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
      layout="cards"
      limit={limit}
      phoneLimit={phoneLimit}
      loading={!data}
      rowKey={(cab) => cab.id}
      footnote={updated ? `${c.updated.replace('{date}', updated)} · ${cl.photoCredit.replace('{source}', 'Lomarengas')}` : undefined}
      renderRow={(cab, i) => {
        const sid = `live_cabin_${cab.id}`;
        const stars = cab.stars && cab.stars >= 1 && cab.stars <= 5 ? cab.stars : null;
        return (
          <LiveCard
            index={i}
            photo={{ src: cab.img, alt: `${cabinName(cab.name)}, ${cab.place}`, width: 600, height: 400, eager: i < 2, hideBottom: 0.2 }}
            eyebrow={[cab.place, cab.muni && cab.muni !== cab.place ? cab.muni : null]}
            name={cabinName(cab.name)}
            facts={[
              <span key="p" className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-deep-night/50" aria-hidden="true" />{cab.p} {c.guests}</span>,
              cab.br ? <span key="b" className="inline-flex items-center gap-1"><BedDouble className="h-3.5 w-3.5 text-deep-night/50" aria-hidden="true" />{cab.br} {c.bedrooms}</span> : null,
              cab.sqm ? <span key="s" className="inline-flex items-center gap-1"><Maximize2 className="h-3.5 w-3.5 text-deep-night/50" aria-hidden="true" />{fmtArea(cab.sqm, lang)} m²</span> : null,
            ]}
            extra={stars ? (
              <span className="inline-flex flex-wrap items-center gap-x-1.5">
                <span className="inline-flex text-[#D97706]" role="img" aria-label={`${c.starsLabel} ${stars}/5`} title={c.starsLabel}>
                  {Array.from({ length: stars }, (_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />)}
                </span>
                <span aria-hidden="true">{c.starsLabel}</span>
              </span>
            ) : undefined}
            note={c.priceAt}
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
