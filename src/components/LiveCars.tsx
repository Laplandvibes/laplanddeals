import { useMemo, useState } from 'react';
import { Users } from 'lucide-react';
import LiveList, { type SortMode } from './live/LiveList';
import SegGroup from './live/SegGroup';
import LiveRow from './live/LiveRow';
import { buildAffiliateHref } from './AffiliateCTA';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { EB_AIRPORTS, EB_CHECKED_AT, EB_CLASS_KEYS, EB_OFFERS, EB_WINDOWS, type EbAirport, type EbOffer } from '../data/ebOffers';

/**
 * Real EconomyBookings totals for a 4-day airport hire, on the sheet. Data is
 * the carrental site's capture from the live comparison (data/ebOffers.ts for
 * provenance). Each row deep-links the SAME search with the SAME dates through
 * the go/cars Worker, so the visitor lands on live prices for exactly what
 * the row shows. Only windows whose pick-up is still ahead of today render.
 *
 * The comparison has no licensable car photos, so the media cell is a plate
 * with the class and seats — the facts of the offer, not a stock car.
 */

const AIRPORT_NAME: Record<EbAirport, string> = { RVN: 'Rovaniemi', KTT: 'Kittilä', IVL: 'Ivalo' };

function fmtDate(iso: string, lang: Lang): string {
  try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(iso + 'T12:00:00Z')); }
  catch { return iso; }
}

export default function LiveCars({ limit = 6, phoneLimit, kicker }: { limit?: number; phoneLimit?: number; kicker?: boolean }) {
  const lang = useLang();
  const c = COPY[lang].live.cars;
  const cl = COPY[lang].live.list;
  const [airport, setAirport] = useState<EbAirport>('RVN');
  const today = new Date().toISOString().slice(0, 10);
  const windows = useMemo(() => EB_WINDOWS.filter((w) => w.pickup >= today), [today]);
  const [winKey, setWinKey] = useState<string | null>(null);
  const win = windows.find((w) => w.key === winKey) ?? windows[0];

  const fmt = useMemo(() => {
    try { return new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
    catch { return new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }); }
  }, [lang]);

  if (!win) return null;

  const rows = EB_OFFERS.filter((o) => o.window === win.key && o.airport === airport);
  const checked = fmtDate(EB_CHECKED_AT, lang);
  const days = Math.round((Date.parse(win.dropoff) - Date.parse(win.pickup)) / 86400000);

  const modes: SortMode<EbOffer>[] = [
    { key: 'price', label: cl.sortPrice, column: cl.colCheapest, sort: (a, b) => a.total - b.total },
    { key: 'auto', label: c.auto, column: c.colAutoFirst, sort: (a, b) => Number(b.gear === 'A') - Number(a.gear === 'A') || a.total - b.total },
  ];

  // Two segmented groups (airport, dates): equal segments, a label above each.
  const chips = (
    <>
      <SegGroup
        label={c.airport}
        options={EB_AIRPORTS.map((a) => ({ key: a, label: AIRPORT_NAME[a] }))}
        value={airport}
        onChange={(k) => setAirport(k as EbAirport)}
      />
      {windows.length > 1 && (
        <SegGroup
          label={cl.sortDate}
          options={windows.map((w) => ({ key: w.key, label: `${fmtDate(w.pickup, lang)} – ${fmtDate(w.dropoff, lang)}` }))}
          value={win.key}
          onChange={setWinKey}
        />
      )}
    </>
  );

  return (
    <LiveList<EbOffer>
      id="live-cars"
      kicker={kicker ? c.eyebrow.replace('{date}', checked) : undefined}
      title={c.title}
      lead={c.lead}
      rows={rows}
      modes={modes}
      chips={chips}
      limit={limit}
      phoneLimit={phoneLimit}
      rowKey={(o) => `${o.airport}-${o.window}-${o.classIdx}-${o.supplier}-${o.model}`}
      footnote={`${c.window.replace('{from}', fmtDate(win.pickup, lang)).replace('{to}', fmtDate(win.dropoff, lang))} · ${AIRPORT_NAME[airport]} · EconomyBookings, ${checked}`}
      renderRow={(o, i) => {
        const sid = `live_car_${o.airport.toLowerCase()}_${win.key}_${EB_CLASS_KEYS[o.classIdx]}`;
        const href = buildAffiliateHref({ partner: 'cars', sid, query: { pickup_location: o.airport, pickup_date: win.pickup, dropoff_date: win.dropoff }, lang });
        const { day, month } = (() => { try { const d = new Date(win.pickup + 'T12:00:00Z'); return { day: new Intl.DateTimeFormat(lang, { day: 'numeric', timeZone: 'UTC' }).format(d), month: new Intl.DateTimeFormat(lang, { month: 'short', timeZone: 'UTC' }).format(d) }; } catch { return { day: win.pickup.slice(8, 10), month: win.pickup.slice(5, 7) }; } })();
        return (
          <LiveRow
            index={i}
            media={{ kind: 'plate', label: c.classNames[o.classIdx], sub: c.orSimilar }}
            day={day}
            month={month}
            dateSub={`${days} ${c.days}`}
            badge={null}
            name={o.model}
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
