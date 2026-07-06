interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Use ivory text when placed over a dark gradient (e.g. Hero overlay). */
  invert?: boolean;
}

/**
 * #LaplandDeals wordmark — LV brand signature (`#` accent in vibe-pink)
 * adapted to the cream luxury variant. Same Playfair italic-light + roman
 * semibold pairing as the hero h1 so header → hero share one signature.
 */
export default function Logo({ className = '', size = 'md', invert = false }: LogoProps) {
  const sizeClass =
    size === 'lg' ? 'text-4xl md:text-5xl' :
    size === 'sm' ? 'text-xl md:text-2xl' :
    'text-xl md:text-2xl';

  const heavyColour = invert ? '#FFFFFF' : '#0F172A';

  // Standard #LAPLAND{BRAND} ecosystem signature (Bebas, # + brand word in
  // vibe-pink, LAPLAND in snow/ink) — a brand constant shared across every LV
  // site, regardless of each site's own body typography variant.
  return (
    <span
      className={`leading-none ${sizeClass} ${className}`}
      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
    >
      <span style={{ color: '#EC4899' }}>#</span>
      <span style={{ color: heavyColour }}>LAPLAND</span>
      <span style={{ color: '#EC4899' }}>DEALS</span>
    </span>
  );
}
