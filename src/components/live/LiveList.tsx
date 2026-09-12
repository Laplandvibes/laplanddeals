import { Fragment, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLang } from '../../i18n/useLang';
import { COPY } from '../../locales/copy';
import { segClass } from './seg';
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
}

/** True from the lg breakpoint up; false while prerendering, so static HTML is the single column. */
function useWide(): boolean {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return wide;
}

export default function LiveList<T>({ id, kicker, title, lead, aside, rows, modes, chips, renderRow, rowKey, limit, phoneLimit, footnote, loading, className }: LiveListProps<T>) {
  const lang = useLang();
  const c = COPY[lang].live.list;
  const wide = useWide();
  const [sortKey, setSortKey] = useState(modes[0]?.key ?? '');
  const [expanded, setExpanded] = useState(false);

  const cap = wide ? limit : (phoneLimit ?? limit);
  const perColumn = cap && !expanded ? cap : rows.length;
  const columns = useMemo(() => {
    const active = wide ? modes.slice(0, 2) : [modes.find((m) => m.key === sortKey) ?? modes[0]];
    return active.filter(Boolean).map((m) => ({ mode: m, rows: [...rows].sort(m.sort).slice(0, perColumn) }));
  }, [rows, modes, wide, sortKey, perColumn]);
  const canExpand = !!cap && rows.length > cap;

  return (
    <section id={id} className={`relative ${className ?? ''}`} aria-labelledby={`${id}-title`} data-live-list>
      <div className="mb-5 flex flex-col gap-4 sm:mb-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          {kicker && <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#BE185D]"><Units text={kicker} /></p>}
          <h2 id={`${id}-title`} className="font-heading text-3xl leading-[1.02] text-deep-night sm:text-5xl">{title}</h2>
          {lead && <p className="mt-3 max-w-2xl text-base leading-relaxed text-deep-night/70 sm:text-lg">{lead}</p>}
        </div>
        {aside}
      </div>

      <div className="tile-ice p-3 sm:p-5">
        {(modes.length > 1 || chips) && (
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            {modes.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 lg:hidden" role="group" aria-label={c.sortBy}>
                <span className="mr-1 text-xs font-medium text-deep-night/55">{c.sortBy}</span>
                {modes.map((m) => (
                  <button key={m.key} type="button" aria-pressed={sortKey === m.key} className={segClass(sortKey === m.key)} onClick={() => setSortKey(m.key)}>
                    {m.label}
                  </button>
                ))}
              </div>
            )}
            {chips}
          </div>
        )}

        {loading ? (
          <ol className="flex flex-col gap-3" aria-hidden="true">
            {[0, 1, 2].map((i) => <li key={i} className="card-frost h-[9.5rem] animate-pulse" />)}
          </ol>
        ) : rows.length === 0 ? (
          <p className="card-frost p-6 text-sm text-deep-night/75">{c.empty}</p>
        ) : (
          <div className={`grid gap-5 ${wide && columns.length > 1 ? 'lg:grid-cols-2' : ''}`}>
            {columns.map((col) => (
              <div key={col.mode.key}>
                {wide && columns.length > 1 && <h3 className="mb-3 font-heading text-2xl leading-none text-deep-night">{col.mode.column}</h3>}
                <ol className="flex flex-col gap-3">
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

      {footnote && <p className="mt-4 max-w-3xl text-xs leading-relaxed text-deep-night/60">{typeof footnote === 'string' ? <Units text={footnote} /> : footnote}</p>}
    </section>
  );
}
