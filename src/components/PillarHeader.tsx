import PageBreadcrumb from './PageBreadcrumb';
import { HEROES, type HeroKey } from '../data/offerPhotos';
import { offers } from '../data/offers';
import { useLang } from '../i18n/useLang';

interface PillarHeaderProps {
  eyebrow: string;
  h1: string;
  /** Optional italic display word(s) prepended to the h1 in italic-light. */
  h1Italic?: string;
  sub: string;
  /** Hero photograph (data/offerPhotos.ts HEROES): public/images/hero-<key>-<width>.avif|webp. */
  hero: HeroKey;
}

/**
 * Pillar page header — same visual signature as the home Hero:
 *   - full-bleed photograph background
 *   - measured scrim (`.pillar-scrim` in index.css): a band behind the text under
 *     lg, a gradient anchored to the text column from lg. The old viewport-wide
 *     gradient left the pink line on sunlit snow under 3:1 (/flights/, 26.9.2026).
 *   - vertically centered content block
 *   - paper-grain magazine texture overlay
 *   - h1 uses Playfair italic-light + roman-semibold pairing
 */
export default function PillarHeader({ eyebrow, h1, h1Italic, sub, hero }: PillarHeaderProps) {
  const lang = useLang();
  const h = HEROES[hero];
  // Alt = the localised title of the offer card that shows the same photograph (no new translation work).
  const alt = offers(lang).find((o) => o.id === h.photo)?.title ?? '';
  const srcset = (ext: string) => h.widths.map((w) => `/images/hero-${hero}-${w}.${ext} ${w}w`).join(', ');
  const mid = h.widths.includes(1920) ? 1920 : h.widths[h.widths.length - 1];
  return (
    <>
    <header className="relative overflow-hidden pt-16 min-h-[72vh] md:min-h-[78vh] flex items-center">
      {/* Real photograph (9.10.2026): AVIF/WebP in 1280/1920/2560 px, never cropped in the file. */}
      <picture>
        <source type="image/avif" srcSet={srcset('avif')} sizes="100vw" />
        <source type="image/webp" srcSet={srcset('webp')} sizes="100vw" />
        <img
          src={`/images/hero-${hero}-${mid}.webp`}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${h.zoom ?? ''}`}
          style={{ objectPosition: h.pos ?? '50% 42%' }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </picture>
      {h.dim ? <div aria-hidden="true" className="absolute inset-0" style={{ background: `rgba(0,0,0,${h.dim})` }} /> : null}
      <div aria-hidden="true" className="absolute inset-0 pillar-scrim" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream" />
      <div aria-hidden="true" className="absolute inset-0 paper-grain opacity-40 mix-blend-overlay" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-ivory/80 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] mb-5 sm:mb-7 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {eyebrow}
          </p>
          {/* Bebas is single-weight and upright — no italic/weight games.
              Two-line lockup matching the home Hero: white lead-in line,
              pink payoff line with the brand glow. */}
          <h1 className="font-heading text-ivory leading-[0.95] mb-5 sm:mb-7 text-[2.8rem] sm:text-[4rem] lg:text-[5.2rem] drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)]">
            {h1Italic && (
              <>
                {h1Italic}
                <br />
              </>
            )}
            <span className="text-vibe-pink drop-shadow-[0_0_40px_rgba(236,72,153,0.8)]">{h1}</span>
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {sub}
          </p>
        </div>
      </div>
    </header>
    <PageBreadcrumb />
    </>
  );
}
