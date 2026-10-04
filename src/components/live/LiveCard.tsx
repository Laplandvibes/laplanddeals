import type { CSSProperties, ReactNode } from 'react';
import { trackAffiliateClick } from '../../lib/analytics';
import Units from './Units';

/**
 * A photo-led offer card for the live sheet (cabins, car classes). Vesa 4.10.2026, looking at the
 * cabin and car lists on a desktop: "kuinka poor nämä osiot ovat visuaalisesti, ei herätä
 * visuaalista ostonautintoa". Measured on the live page: the cabin photo was 128 × 84 px on a
 * 543 × 242 px row (8 % of the card), the car rows had no picture at all, and the two wide
 * columns repeated four of six cabins. The photo is what sells a cabin, so here it leads.
 *
 * One shape at every width: photo on top (16:10), text under it, the button across the foot with
 * the "price on <partner>" line under it. Text never sits on the photo, so the photo carries no
 * dark overlay (feedback 26.9.2026). On a phone the cards sit in a swipe row at 82 % width, the
 * next card's edge in view (LiveList, the laplandcarrental offer-card pattern): a row-shaped card
 * beside a 132 px photo left the text a 190 px column — facts one per line, the price line split
 * from the button, a car's bonnet cropped away (measured at 375 px in six languages).
 *
 * `hideBottom`: the share of the photo to keep out of view at the bottom. Lomarengas's feed
 * images carry the partner's own stamp in their bottom 18 % (measured on all 60 feed images
 * 4.10.2026: the stamp starts at y 330–332 of 400). The image box is made taller than the frame
 * and anchored to the top, so the stamp falls outside the frame at every width; the file is not
 * altered and the photo credit stays in the list's footnote.
 *
 * Inks are explicit deep-night classes: on this site `text-ink` is SNOW. Pink lives only on the
 * button (Vesa 10.9.2026).
 */

export interface LiveCardProps {
  index: number;
  photo: { src: string; alt: string; width: number; height: number; eager?: boolean; hideBottom?: number; position?: string } | null;
  /** Shown in the photo frame when there is no photo (e.g. the drawn car class). */
  fallback?: ReactNode;
  /** Line above the name: place, or class and seats. Units keeps a " · " off the line edges. */
  eyebrow: ReactNode[];
  name: string;
  /** Facts with icons, one wrapping line. */
  facts: ReactNode[];
  /** One more line (e.g. the partner's quality class). */
  extra?: ReactNode;
  /** Short line under the button ("Price on Lomarengas"). */
  note: string;
  href: string;
  sid: string;
  partner: string;
  cta: string;
}

export default function LiveCard(p: LiveCardProps) {
  const ph = p.photo;
  const hide = ph?.hideBottom ?? 0;
  return (
    <li
      className="card-frost card-lift row-in w-[82%] max-w-[22rem] shrink-0 snap-start overflow-hidden sm:w-auto sm:max-w-none sm:shrink"
      style={{ '--i': `${p.index * 40}ms` } as CSSProperties}
      data-live-card
    >
      <a
        href={p.href}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={() => trackAffiliateClick(p.partner, p.sid, p.href)}
        className="group flex h-full flex-col text-deep-night no-underline"
        aria-label={[p.name, p.note].filter(Boolean).join(', ')}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#E6ECF3]" data-card-photo>
          {ph ? (
            <img
              src={ph.src}
              alt={ph.alt}
              width={ph.width}
              height={ph.height}
              loading={ph.eager ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-x-0 top-0 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              style={{ height: hide ? `${100 / (1 - hide)}%` : '100%', objectPosition: ph.position ?? (hide ? '50% 0%' : '50% 50%') }}
              data-hide-bottom={hide || undefined}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#E8EEF6] to-[#D5E0EC]">{p.fallback}</div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5 px-4 pt-3.5 pb-3">
          <div className="text-[13px] font-semibold leading-snug text-finland-blue">
            <Units items={p.eyebrow} />
          </div>
          <h3 className="font-body text-lg font-bold leading-snug text-deep-night line-clamp-2">{p.name}</h3>
          <div className="text-sm leading-relaxed text-deep-night/75">
            <Units items={p.facts} />
          </div>
          {p.extra && <div className="text-[13px] leading-snug text-deep-night/75">{p.extra}</div>}
        </div>

        <div className="mt-auto border-t border-deep-night/10 px-4 pt-3 pb-2.5">
          <span className="btn-pink flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold">
            {p.cta}
          </span>
          <span className="mt-1.5 block text-center text-xs font-medium text-deep-night/60">{p.note}</span>
        </div>
      </a>
    </li>
  );
}
