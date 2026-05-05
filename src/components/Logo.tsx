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
    size === 'lg' ? 'text-3xl md:text-4xl' :
    size === 'sm' ? 'text-lg' :
    'text-2xl md:text-[1.7rem]';

  const heavyColour = invert ? '#FFFFFF' : '#0F172A';

  return (
    <span className={`font-heading leading-none ${sizeClass} ${className}`}>
      <span className="font-semibold" style={{ color: '#EC4899', letterSpacing: '-0.04em', marginRight: '0.04em' }}>#</span>
      <span className="italic font-light" style={{ color: heavyColour, letterSpacing: '-0.02em' }}>
        Lapland
      </span>
      <span className="font-semibold" style={{ color: heavyColour, letterSpacing: '-0.01em' }}>
        Deals
      </span>
    </span>
  );
}
