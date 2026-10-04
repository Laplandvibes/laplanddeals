import { useMemo, useState } from 'react';
import { Users } from 'lucide-react';
import LiveList, { type SortMode } from './live/LiveList';
import SegGroup from './live/SegGroup';
import LiveRow from './live/LiveRow';
import LiveCard from './live/LiveCard';
import CarSilhouette from './live/CarSilhouette';
import { carPhotoFor, type CarPhoto } from '../data/carPhotos';
import { buildAffiliateHref } from './AffiliateCTA';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { EB_AIRPORTS, EB_CHECKED_AT, EB_CLASS_KEYS, EB_OFFERS, EB_WINDOWS, type EbAirport, type EbOffer } from '../data/ebOffers';
import { ebPricesFresh, futureWindows } from '../data/ebFreshness';

/**
 * Real EconomyBookings totals for a 4-day airport hire, on the sheet. Data is
 * the carrental site's capture from the live comparison (data/ebOffers.ts for
 * provenance). Each row deep-links the SAME search with the SAME dates through
 * the go/cars Worker, so the visitor lands on live prices for exactly what
 * the row shows. Only windows whose pick-up is still ahead of today render.
 *
 * A figure shows only while the read is at most 7 days old (data/ebFreshness.ts,
 * checked in the browser on every render). After that the list becomes a class
 * guide: one row per class with what it suits and a typical model, no price and
 * no "read on" line, each row opening the airport's search with its own sid.
 *
 * Since 4.10.2026 each class is a photo card of the model it names (data/carPhotos.ts:
 * Wikimedia Commons, credited under the grid), as on laplandcarrental. Vesa on the class rows:
 * "ei herätä visuaalista ostonautintoa" — six identical grey plates with a drawn side-view.
 * A model without a photo keeps the drawn silhouette (CarSilhouette): an icon, never a
 * generated car, which invents plates and badges.
 */

const AIRPORT_NAME: Record<EbAirport, string> = { RVN: 'Rovaniemi', KTT: 'Kittilä', IVL: 'Ivalo' };

/** The comparison spells some makes in capitals ("VOLVO V40", "VOLKSWAGEN T-ROC"): a word of four or
 *  more capital letters becomes a name; model codes (V40, T-Cross, GTI) stay as written. */
function modelName(model: string): string {
  return model.replace(/\b[A-ZÄÖÜ]{4,}\b/g, (w) => w.charAt(0) + w.slice(1).toLowerCase());
}

/** Commons credits for the card photos, one line under the grid, in card order and grouped by
 *  author and licence ("Kia Picanto, Volkswagen Polo: Alexander Migl, CC BY-SA 4.0"): each model
 *  name links to its file page, the licence to its deed (CC BY-SA §3(a)). Grouping keeps the line
 *  to a few phone lines instead of eight. */
function PhotoCredits({ photos, label }: { photos: CarPhoto[]; label: string }) {
  if (!photos.length) return null;
  const groups: { author: string; license: string; licenseUrl: string; photos: CarPhoto[] }[] = [];
  for (const ph of photos) {
    const g = groups.find((x) => x.author === ph.author && x.license === ph.license);
    if (g) g.photos.push(ph);
    else groups.push({ author: ph.author, license: ph.license, licenseUrl: ph.licenseUrl, photos: [ph] });
  }
  const [before, after] = label.split('{source}');
  const link = 'lv-tap underline decoration-deep-night/30 hover:text-deep-night';
  return (
    <p className="mx-auto mt-3 max-w-4xl text-center text-base leading-relaxed text-deep-night/75" data-photo-credits>
      {before}
      {groups.map((g, i) => (
        <span key={g.author + g.license}>
          {i > 0 && ' · '}
          {g.photos.map((ph, k) => (
            <span key={ph.src}>{k > 0 && ', '}<a href={ph.fileUrl} target="_blank" rel="noopener" className={link}>{ph.model}</a></span>
          ))}
          : {g.author},{' '}
          <a href={g.licenseUrl} target="_blank" rel="license noopener" className={`${link} whitespace-nowrap`}>{g.license}</a>
        </span>
      ))}
      {after}
    </p>
  );
}

function fmtDate(iso: string, lang: Lang): string {
  try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(iso + 'T12:00:00Z')); }
  catch { return iso; }
}

/** A class row when no figure is shown: the class, a typical model of it (the first
 *  captured row of that class names the kind of car, not an offer). */
interface ClassRow { classIdx: number; model: string | null; seats: string }

export default function LiveCars({ limit = 6, phoneLimit, kicker }: { limit?: number; phoneLimit?: number; kicker?: boolean }) {
  const lang = useLang();
  const c = COPY[lang].live.cars;
  const cl = COPY[lang].live.list;
  const [airport, setAirport] = useState<EbAirport>('RVN');
  const now = new Date();
  const windows = futureWindows(EB_WINDOWS, now);
  const priced = windows.length > 0 && ebPricesFresh(EB_CHECKED_AT, now);
  const [winKey, setWinKey] = useState<string | null>(null);
  const win = windows.find((w) => w.key === winKey) ?? windows[0];

  const fmt = useMemo(() => {
    try { return new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
    catch { return new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
  }, [lang]);

  // Two segmented groups (airport, dates): equal segments, a label above each.
  const chips = (
    <>
      <SegGroup
        label={c.airport}
        options={EB_AIRPORTS.map((a) => ({ key: a, label: AIRPORT_NAME[a] }))}
        value={airport}
        onChange={(k) => setAirport(k as EbAirport)}
      />
      {win && windows.length > 1 && (
        <SegGroup
          label={cl.sortDate}
          options={windows.map((w) => ({ key: w.key, label: `${fmtDate(w.pickup, lang)} – ${fmtDate(w.dropoff, lang)}` }))}
          value={win.key}
          onChange={setWinKey}
        />
      )}
    </>
  );
  const dates: Record<string, string> = win ? { pickup_date: win.pickup, dropoff_date: win.dropoff } : {};
  const windowText = win ? c.window.replace('{from}', fmtDate(win.pickup, lang)).replace('{to}', fmtDate(win.dropoff, lang)) : null;

  if (!priced) {
    const classRows: ClassRow[] = EB_CLASS_KEYS.map((_, classIdx) => {
      const ex = EB_OFFERS.find((o) => o.classIdx === classIdx);
      return { classIdx, model: ex?.model ?? null, seats: ex?.seats ?? '' };
    });
    const byClass: SortMode<ClassRow>[] = [{ key: 'class', label: '', column: '', sort: (a, b) => a.classIdx - b.classIdx }];
    const shown = classRows.slice(0, limit ?? classRows.length);
    const credits = shown.map((r) => carPhotoFor(r.model)).filter((x): x is CarPhoto => !!x);
    return (
      <LiveList<ClassRow>
        id="live-cars"
        title={c.titleGuide}
        lead={c.lead}
        rows={classRows}
        modes={byClass}
        chips={chips}
        layout="cards"
        limit={limit}
        phoneLimit={phoneLimit}
        rowKey={(r) => EB_CLASS_KEYS[r.classIdx]}
        credits={<PhotoCredits photos={credits} label={cl.photoCredit} />}
        footnote={[windowText, AIRPORT_NAME[airport]].filter(Boolean).join(' · ')}
        renderRow={(r, i) => {
          const sid = `live_car_class_${airport.toLowerCase()}_${win?.key ?? 'open'}_${EB_CLASS_KEYS[r.classIdx]}`;
          const href = buildAffiliateHref({ partner: 'cars', sid, query: { pickup_location: airport, ...dates }, lang });
          const ph = carPhotoFor(r.model);
          return (
            <LiveCard
              index={i}
              photo={ph ? { src: ph.src, alt: ph.alt, width: ph.width, height: ph.height, eager: i < 2 } : null}
              fallback={<CarSilhouette kind={EB_CLASS_KEYS[r.classIdx]} className="h-auto w-3/5 max-w-[10rem]" />}
              eyebrow={[
                c.classNames[r.classIdx],
                r.seats ? <span key="s" className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" aria-hidden="true" />{r.seats} {c.seats}</span> : null,
              ]}
              name={c.uses[r.classIdx]}
              facts={r.model ? [`${modelName(r.model)}${lang === 'ja' || lang === 'zh-CN' ? '' : ' '}${c.orSimilar}`] : []}
              note={c.priceAt}
              href={href}
              sid={sid}
              partner="economybookings"
              cta={cl.openSearch}
            />
          );
        }}
      />
    );
  }

  if (!win) return null;

  const rows = EB_OFFERS.filter((o) => o.window === win.key && o.airport === airport);
  const checked = fmtDate(EB_CHECKED_AT, lang);
  const days = Math.round((Date.parse(win.dropoff) - Date.parse(win.pickup)) / 86400000);

  const modes: SortMode<EbOffer>[] = [
    { key: 'price', label: cl.sortPrice, column: cl.colCheapest, sort: (a, b) => a.total - b.total },
    { key: 'auto', label: c.auto, column: c.colAutoFirst, sort: (a, b) => Number(b.gear === 'A') - Number(a.gear === 'A') || a.total - b.total },
  ];

  return (
    <LiveList<EbOffer>
      id="live-cars"
      kicker={kicker ? c.eyebrow.replace('{date}', checked) : undefined}
      title={c.title}
      lead={c.leadPriced}
      rows={rows}
      modes={modes}
      chips={chips}
      limit={limit}
      phoneLimit={phoneLimit}
      rowKey={(o) => `${o.airport}-${o.window}-${o.classIdx}-${o.supplier}-${o.model}`}
      footnote={`${windowText} · ${AIRPORT_NAME[airport]} · EconomyBookings, ${checked}`}
      renderRow={(o, i) => {
        const sid = `live_car_${o.airport.toLowerCase()}_${win.key}_${EB_CLASS_KEYS[o.classIdx]}`;
        const href = buildAffiliateHref({ partner: 'cars', sid, query: { pickup_location: o.airport, ...dates }, lang });
        const { day, month } = (() => { try { const d = new Date(win.pickup + 'T12:00:00Z'); return { day: new Intl.DateTimeFormat(lang, { day: 'numeric', timeZone: 'UTC' }).format(d), month: new Intl.DateTimeFormat(lang, { month: 'short', timeZone: 'UTC' }).format(d) }; } catch { return { day: win.pickup.slice(8, 10), month: win.pickup.slice(5, 7) }; } })();
        return (
          <LiveRow
            index={i}
            media={(() => {
              const ph = carPhotoFor(o.model);
              return ph
                ? { kind: 'photo' as const, src: ph.src, alt: ph.alt, width: ph.width, height: ph.height, eager: i < 2 }
                : { kind: 'plate' as const, label: c.classNames[o.classIdx], sub: c.orSimilar, icon: <CarSilhouette kind={EB_CLASS_KEYS[o.classIdx]} className="mb-0.5 h-7 w-auto sm:h-8" /> };
            })()}
            day={day}
            month={month}
            dateSub={`${days} ${c.days}`}
            badge={null}
            name={modelName(o.model)}
            facts={[<span key="s" className="font-medium text-finland-blue">{o.supplier}</span>, o.gear === 'A' ? c.auto : c.manual, <span key="n" className="inline-flex items-center gap-1"><Users className="h-3 w-3" aria-hidden="true" />{o.seats} {c.seats}</span>]}
            price={fmt.format(o.total)}
            unit={c.total}
            seen={cl.seenAt.replace('{source}', 'EconomyBookings').replace('{d}', checked)}
            href={href}
            sid={sid}
            partner="economybookings"
            cta={cl.openSearch}
          />
        );
      }}
    />
  );
}
