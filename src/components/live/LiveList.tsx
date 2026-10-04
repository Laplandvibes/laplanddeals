import { Fragment, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLang } from '../../i18n/useLang';
import { COPY } from '../../locales/copy';
import FitHeading from './FitHeading';
import SegGroup from './SegGroup';
import Units from './Units';

/**
 * The list frame every live section shares (ported from laplandhoteldeals
 * DealList, 11.9.2026): an ice tile carrying the controls and the rows.
 *
 * Wide screens (lg+): the same rows appear twice — the left column sorted by
 * the first mode, the right column by the second (Vesa 11.9.: "eikö nämä
 * voisi olla kahdessa rivissä … halvin ensin ja oikealla hienoin ensin").
 * Phones and tablets: one column and a sort toggle. `limit` rows per column,
 * then "show all".
 *
 * Sorting is client-side and emits no funnel events (06-mittaus: a
 * client-side sorter is not a form). Affiliate clicks are counted in D1.
 *
 * `layout="cards"` (4.10.2026, cabins and car classes): ONE sorted grid of
 * photo cards — a swipe row on a phone (cards at 82 %, the next one's edge in
 * view), 2 columns from 640 px, 3 from 1024 px — and the sort toggle at every
 * width. The two-column split repeated four of six
 * cabins side by side on a desktop (smallest first | largest first over the
 * same twelve rows), which read as a broken list, not a choice.
 */

export interface SortMode<T> {
  key: string;
  /** Toggle label on narrow screens. */
  label: string;
  /** Column title on wide screens. */
  column: string;
  sort: (a: T, b: T) => number;
}

interface LiveListProps<T> {
  /** Stable id: the section is `aria-labelledby` `${id}-title`. */
  id: string;
  kicker?: string;
  title: string;
  lead?: string;
  /** Rendered top-right of the header (e.g. the Lomarengas last-minute button). */
  aside?: ReactNode;
  rows: T[];
  modes: SortMode<T>[];
  /** Filter chips rendered inside the tile above the rows. */
  chips?: ReactNode;
  renderRow: (row: T, index: number) => ReactNode;
  rowKey: (row: T) => string;
  /** Rows per column before "show all". Omit for no cap. */
  limit?: number;
  /** Rows on one-column screens before "show all" (defaults to `limit`). Four lists × six rows was 21 000 px on a phone. */
  phoneLimit?: number;
  /** Text under the tile (source, read time). */
  footnote?: ReactNode;
  /** Placeholder while `rows` is still loading. */
  loading?: boolean;
  className?: string;
  /** "rows" (default): receipt rows, two sorted columns on lg+. "cards": one sorted grid of photo cards. */
  layout?: 'rows' | 'cards';
  /** Under the tile, before the footnote: e.g. the photo credits of a card grid. */
  credits?: ReactNode;
}

/** Cards: a swipe row on a phone (bleeds to the tile edge, snaps card by card), a grid from sm. */
const CARD_GRID = '-mx-3 flex snap-x snap-mandatory scroll-px-3 gap-3 overflow-x-auto px-3 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3';

/** True from `minPx` up; false while prerendering, so static HTML is the single column. */
function useMinWidth(minPx: number): boolean {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minPx}px)`);
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [minPx]);
  return wide;
}

export default function LiveList<T>({ id, kicker, title, lead, aside, rows, modes, chips, renderRow, rowKey, limit, phoneLimit, footnote, loading, className, layout = 'rows', credits }: LiveListProps<T>) {
  const lang = useLang();
  const c = COPY[lang].live.list;
  const cards = layout === 'cards';
  const lg = useMinWidth(1024);
  // Rows: two sorted columns from lg. Cards: never — one grid, the toggle chooses the order.
  const wide = lg && !cards;
  const [sortKey, setSortKey] = useState(modes[0]?.key ?? '');
  const [expanded, setExpanded] = useState(false);

  // Rows: a phone gets the short list. Cards: a phone swipes through the same `limit` cards
  // sideways, so the list costs one card of height and nothing is held back.
  const cap = cards || lg ? limit : (phoneLimit ?? limit);
  const perColumn = cap && !expanded ? cap : rows.length;
  const columns = useMemo(() => {
    const active = wide ? modes.slice(0, 2) : [modes.find((m) => m.key === sortKey) ?? modes[0]];
    return active.filter(Boolean).map((m) => ({ mode: m, rows: [...rows].sort(m.sort).slice(0, perColumn) }));
  }, [rows, modes, wide, sortKey, perColumn]);
  const canExpand = !!cap && rows.length > cap;

  return (
    <section id={id} className={`relative ${className ?? ''}`} aria-labelledby={`${id}-title`} data-live-list data-layout={layout}>
      {/* Header: the title block is a container so FitHeading can size the
          title to it. The aside sits beside it only from lg up: on a tablet
          it would take a third of the row and force the title onto two
          lines (Vesa 12.9.: "eikö otsikko mahtuisi yhdelle riville"). */}
      <div className="mb-5 flex flex-col gap-4 sm:mb-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="@container min-w-0 flex-1">
          {kicker && <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#BE185D]"><Units text={kicker} /></p>}
          <FitHeading id={`${id}-title`} text={title} className="font-heading text-3xl leading-[1.02] text-deep-night sm:text-5xl" />
          {lead && <p className="mt-3 max-w-2xl text-base leading-relaxed text-deep-night/70 sm:text-lg">{lead}</p>}
        </div>
        {aside}
      </div>

      <div className="tile-ice p-3 sm:p-5">
        {(modes.length > 1 || chips) && (
          <div
            className={`mb-4 grid gap-x-5 gap-y-4 ${modes.length > 1 && !chips && !cards ? 'lg:hidden' : ''}`}
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 18rem), 1fr))' }}
            data-live-controls
          >
            {modes.length > 1 && (
              <SegGroup
                className={cards ? '' : 'lg:hidden'}
                label={c.sortBy}
                options={modes.map((m) => ({ key: m.key, label: m.label }))}
                value={sortKey}
                onChange={setSortKey}
              />
            )}
            {chips}
          </div>
        )}

        {loading ? (
          cards ? (
            <ol className={CARD_GRID} aria-hidden="true">
              {[0, 1, 2].map((i) => <li key={i} className="card-frost h-[25rem] w-[82%] max-w-[22rem] shrink-0 animate-pulse sm:w-auto sm:max-w-none" />)}
            </ol>
          ) : (
            <ol className="flex flex-col gap-3" aria-hidden="true">
              {[0, 1, 2].map((i) => <li key={i} className="card-frost h-[9.5rem] animate-pulse" />)}
            </ol>
          )
        ) : rows.length === 0 ? (
          <p className="card-frost p-6 text-sm text-deep-night/75">{c.empty}</p>
        ) : (
          <div className={`grid gap-5 ${wide && columns.length > 1 ? 'lg:grid-cols-2' : ''}`}>
            {columns.map((col) => (
              <div key={col.mode.key} className="min-w-0">
                {wide && columns.length > 1 && <h3 className="mb-3 font-heading text-2xl leading-none text-deep-night">{col.mode.column}</h3>}
                <ol className={cards ? CARD_GRID : 'flex flex-col gap-3'} data-card-grid={cards || undefined}>
                  {col.rows.map((r, i) => <Fragment key={`${col.mode.key}-${rowKey(r)}`}>{renderRow(r, i)}</Fragment>)}
                </ol>
              </div>
            ))}
          </div>
        )}

        {canExpand && !expanded && (
          <div className="mt-4 text-center">
            <button
              type="button"
              className="seg-btn min-h-11 rounded-full border border-deep-night/25 bg-white px-6 py-2.5 text-sm font-semibold text-deep-night hover:border-deep-night"
              onClick={() => setExpanded(true)}
            >
              {c.showAll.replace('{n}', String(rows.length))}
            </button>
          </div>
        )}
      </div>

      {credits}
      {footnote && <p className="mt-4 max-w-3xl text-xs leading-relaxed text-deep-night/60">{typeof footnote === 'string' ? <Units text={footnote} /> : footnote}</p>}
    </section>
  );
}
