import PageBreadcrumb from './PageBreadcrumb';

interface PillarHeaderProps {
  eyebrow: string;
  h1: string;
  /** Optional italic display word(s) prepended to the h1 in italic-light. */
  h1Italic?: string;
  sub: string;
  /** Hero photograph path under /public, e.g. /images/offer-igloo-saariselka.webp */
  image: string;
}

/**
 * Pillar page header — same visual signature as the home Hero:
 *   - full-bleed photograph background
 *   - left-anchored horizontal dark gradient (NOT bottom-up)
 *   - vertically centered content block
 *   - paper-grain magazine texture overlay
 *   - h1 uses Playfair italic-light + roman-semibold pairing
 */
export default function PillarHeader({ eyebrow, h1, h1Italic, sub, image }: PillarHeaderProps) {
  return (
    <>
    <header className="relative overflow-hidden pt-16 min-h-[72vh] md:min-h-[78vh] flex items-center">
      <img
        src={image}
        alt={`${h1Italic ? `${h1Italic} ` : ''}${h1} · Lapland travel deals`}
        className="absolute inset-0 w-full h-full object-cover object-[center_42%]"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/0" />
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
