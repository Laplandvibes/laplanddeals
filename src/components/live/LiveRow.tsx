import type { CSSProperties, ReactNode } from 'react';
import { trackAffiliateClick } from '../../lib/analytics';
import Units from './Units';

/**
 * One live row — a receipt line whose shape follows the ROW'S OWN WIDTH, not
 * the viewport (Vesa 12.9.2026: "aivan hutiloiden tehty eikä optimoitu
 * tabletille tai mobiiliin"). The same component sits in a 319 px phone
 * column, in the two ~457 px desktop columns and alone across a 680–950 px
 * tablet. A viewport breakpoint cannot tell those apart — `sm:` is true for
 * a 457 px desktop column and for a 755 px tablet row alike — a container
 * query can (`@container` on the card, `@2xl` = 42 rem = 672 px).
 *
 * Stacked (container < 672 px): media + date side by side, then the name and
 * facts across the full width, then a ruled price line with the button. This
 * is the measured phone shape, unchanged (≈229 px tall at 375 px).
 *
 * Receipt (container ≥ 672 px): four columns — media · date · name + facts +
 * read-time · (price over button). The tablet's single wide column had ~300 px
 * of white space to the right of the date and again under the price; now it
 * carries content. The price column is capped at 9 rem, and the read-time sits
 * under the facts: as a plain `max-content` track the nowrap price plus the
 * read-time line left the name cell 45 px wide (measured).
 *
 * Inks are explicit deep-night classes: on this site `text-ink` is SNOW.
 * Price is ink; pink appears only on the button.
 */

export type RowMedia =
  | { kind: 'photo'; src: string; alt: string; width: number; height: number; eager?: boolean }
  | { kind: 'logo'; src: string; alt: string }
  | { kind: 'plate'; label: string; sub?: string };

export interface LiveRowProps {
  index: number;
  media: RowMedia | null;
  /** Big number beside the media (a day, or a guest count). */
  day: string;
  /** Small word after the day (month, or "guests"). */
  month: string;
  /** One short line under the date (e.g. "Finnair", "105 m² · 3 mh"). */
  dateSub?: string;
  badge?: { text: string; tone: 'green' | 'pink' } | null;
  name: string;
  /** Fact units; Units renders the separators so a wrap can never orphan a dot. */
  facts: ReactNode[];
  price: string;
  unit?: string;
  seen: string;
  href: string;
  sid: string;
  partner: string;
  cta: string;
}

/** "{source}, read {d}": the tail after the first comma stays on one line, so a wrap
 *  gives "EconomyBookings," / "luettu 2.9." and never a lone date. */
function Seen({ text }: { text: string }) {
  const i = text.indexOf(', ');
  if (i === -1) return <span className="whitespace-nowrap">{text}</span>;
  return (
    <>
      <span>{text.slice(0, i + 1)}</span>{' '}
      <span className="whitespace-nowrap">{text.slice(i + 2)}</span>
    </>
  );
}

const MEDIA_H = 'h-[4.5rem] sm:h-[5.25rem] @2xl:h-[5rem]';

export default function LiveRow(p: LiveRowProps) {
  const m = p.media;
  return (
    <li className="card-frost card-lift row-in @container" style={{ '--i': `${p.index * 40}ms` } as CSSProperties}>
      <a
        href={p.href}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={() => trackAffiliateClick(p.partner, p.sid, p.href)}
        className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 p-2.5 no-underline sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-4 sm:p-3 @2xl:grid-cols-[8rem_7rem_minmax(0,1fr)_auto] @2xl:items-center @2xl:gap-y-0"
        aria-label={`${p.name}, ${p.price}${p.unit ? ' ' + p.unit : ''}`}
        data-live-row
      >
        {/* Media cell: the partner's own photo, the carrier's mark from the fare
            source, or a plain plate when the source has no picture. */}
        {m && m.kind === 'photo' ? (
          <img
            src={m.src}
            alt={m.alt}
            width={m.width}
            height={m.height}
            loading={m.eager ? 'eager' : 'lazy'}
            decoding="async"
            className={`${MEDIA_H} w-full rounded-lg object-cover bg-[#E6ECF3] sm:rounded-xl`}
          />
        ) : m && m.kind === 'logo' ? (
          <div className={`${MEDIA_H} flex w-full items-center justify-center rounded-lg border border-deep-night/10 bg-[#F4F7FB] p-1 sm:rounded-xl sm:p-2`}>
            <img src={m.src} alt={m.alt} width={120} height={60} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
          </div>
        ) : m && m.kind === 'plate' ? (
          <div className={`${MEDIA_H} flex w-full flex-col items-center justify-center rounded-lg border border-deep-night/10 bg-[#F4F7FB] px-1 text-center sm:rounded-xl`}>
            <span className="font-heading text-xl leading-none text-deep-night sm:text-2xl">{m.label}</span>
            {m.sub && <span className="mt-1 text-[10px] uppercase tracking-wider text-deep-night/55">{m.sub}</span>}
          </div>
        ) : (
          <div aria-hidden="true" />
        )}

        {/* The date, and the badge where it fits beside the media. */}
        <div className="min-w-0 self-center">
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading text-2xl leading-none text-deep-night sm:text-[1.75rem]">{p.day}</span>
            <span className="text-xs text-deep-night/60">{p.month}</span>
          </div>
          {p.dateSub && <div className="mt-0.5 text-[11px] text-deep-night/55 sm:text-xs"><Units text={p.dateSub} /></div>}
          {p.badge && (
            <span
              className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold leading-tight ${
                p.badge.tone === 'green' ? 'bg-aurora-green/15 text-[#047857]' : 'bg-vibe-pink/12 text-[#BE185D]'
              }`}
            >
              {p.badge.text}
            </span>
          )}
        </div>

        {/* Name and one facts line. Full width when stacked, its own cell in
            the receipt row. */}
        <div className="col-span-2 min-w-0 @2xl:col-span-1 @2xl:self-center">
          <h3 className="font-body text-[17px] font-bold leading-snug text-deep-night line-clamp-2 sm:text-lg">{p.name}</h3>
          <div className="mt-0.5 text-xs leading-relaxed text-deep-night/70 sm:text-[13px]">
            <Units items={p.facts} />
          </div>
          <div className="mt-1 flex items-start gap-1.5 text-[11px] leading-snug text-deep-night/55">
            <span className="fresh-dot mt-[0.3em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-green" aria-hidden="true" />
            <span><Seen text={p.seen} /></span>
          </div>
        </div>

        {/* Price + read-time, then the button: one ruled line when stacked,
            one right-aligned column in the receipt row. */}
        <div className="col-span-2 flex items-center justify-between gap-3 border-t border-deep-night/10 pt-2.5 @2xl:col-span-1 @2xl:max-w-[9rem] @2xl:flex-col @2xl:items-stretch @2xl:gap-2 @2xl:border-0 @2xl:pt-0">
          {/* Price and unit are two nowrap words that may wrap BETWEEN each
              other: as one nowrap line "149 € 4 Tage gesamt" pushed a 375 px
              German row past its own width (measured). In the 9 rem receipt
              column the unit always sits under the price. */}
          <div className="flex flex-wrap items-baseline gap-x-1.5 @2xl:flex-col @2xl:items-end @2xl:gap-0">
            <span className="font-heading text-[1.9rem] leading-none text-deep-night whitespace-nowrap sm:text-[2.1rem]">{p.price}</span>
            {p.unit && <span className="whitespace-nowrap font-body text-sm font-medium text-deep-night/60 @2xl:mt-0.5 @2xl:text-xs">{p.unit}</span>}
          </div>
          <span className="btn-pink inline-flex min-h-11 min-w-[6rem] items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold sm:px-5 @2xl:w-full">
            {p.cta}
          </span>
        </div>
      </a>
    </li>
  );
}
