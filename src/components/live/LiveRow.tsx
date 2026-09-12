import type { CSSProperties, ReactNode } from 'react';
import { trackAffiliateClick } from '../../lib/analytics';
import Units from './Units';

/**
 * One live row — the receipt shape laplandhoteldeals settled on after its
 * measured gate (11.9.2026): media left with the date beside it, then the name
 * and one facts line across the full width, then a ruled price line with the
 * button. Same shape in the two wide-screen columns and in the single phone
 * column, so every list on the site reads the same way.
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
  /** Big number beside the media (a day, or a total-days count). */
  day: string;
  /** Small word after the day (month, or "days"). */
  month: string;
  /** One short line under the date (e.g. "one way · Finnair"). */
  dateSub?: string;
  badge?: { text: string; tone: 'green' | 'pink' } | null;
  name: string;
  /** Fact units; the row renders a separator INSIDE each unit after the first, so a wrap can never orphan a dot. */
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

export default function LiveRow(p: LiveRowProps) {
  const m = p.media;
  return (
    <li className="card-frost card-lift row-in" style={{ '--i': `${p.index * 40}ms` } as CSSProperties}>
      <a
        href={p.href}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={() => trackAffiliateClick(p.partner, p.sid, p.href)}
        className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 p-2.5 no-underline sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-4 sm:p-3"
        aria-label={`${p.name}, ${p.price}${p.unit ? ' ' + p.unit : ''}`}
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
            className="h-[4.5rem] w-full rounded-lg object-cover bg-[#E6ECF3] sm:h-[5.25rem] sm:rounded-xl"
          />
        ) : m && m.kind === 'logo' ? (
          <div className="flex h-[4.5rem] w-full items-center justify-center rounded-lg border border-deep-night/10 bg-[#F4F7FB] p-1 sm:h-[5.25rem] sm:rounded-xl sm:p-2">
            <img src={m.src} alt={m.alt} width={120} height={60} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
          </div>
        ) : m && m.kind === 'plate' ? (
          <div className="flex h-[4.5rem] w-full flex-col items-center justify-center rounded-lg border border-deep-night/10 bg-[#F4F7FB] px-1 text-center sm:h-[5.25rem] sm:rounded-xl">
            <span className="font-heading text-xl leading-none text-deep-night sm:text-2xl">{m.label}</span>
            {m.sub && <span className="mt-1 text-[10px] uppercase tracking-wider text-deep-night/55">{m.sub}</span>}
          </div>
        ) : (
          <div aria-hidden="true" />
        )}

        {/* The date, and the badge where it fits beside the media. */}
        <div className="self-center">
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

        {/* Name and one facts line, full width. */}
        <div className="col-span-2 min-w-0">
          <h3 className="font-body text-[17px] font-bold leading-snug text-deep-night line-clamp-2 sm:text-lg">{p.name}</h3>
          <div className="mt-0.5 text-xs leading-relaxed text-deep-night/70 sm:text-[13px]">
            <Units items={p.facts} />
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-between gap-3 border-t border-deep-night/10 pt-2.5">
          <div className="text-left">
            <div className="font-heading text-[1.9rem] leading-none text-deep-night whitespace-nowrap sm:text-[2.1rem]">
              {p.price}
              {p.unit && <span className="font-body text-sm font-medium text-deep-night/60"> {p.unit}</span>}
            </div>
            <div className="mt-1 flex items-start gap-1.5 text-[11px] leading-snug text-deep-night/55 sm:text-xs">
              <span className="fresh-dot mt-[0.3em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-green" aria-hidden="true" />
              <span><Seen text={p.seen} /></span>
            </div>
          </div>
          <span className="btn-pink inline-flex min-h-11 min-w-[6rem] items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold">
            {p.cta}
          </span>
        </div>
      </a>
    </li>
  );
}
