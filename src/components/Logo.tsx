interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Use ivory text when placed over a dark gradient (e.g. Hero overlay). */
  invert?: boolean;
}

/**
 * Wordmark — same Playfair styling logic as the hero h1: italic display
 * "Lapland" + roman semibold "Deals". Single visual signature across the site.
 */
export default function Logo({ className = '', size = 'md', invert = false }: LogoProps) {
  const sizeClass =
    size === 'lg' ? 'text-3xl md:text-4xl' :
    size === 'sm' ? 'text-lg' :
    'text-2xl md:text-[1.7rem]';

  const lightColour = invert ? '#FFFFFF' : '#002F6C';
  const heavyColour = invert ? '#FFFFFF' : '#0F172A';

  return (
    <span className={`font-heading leading-none ${sizeClass} ${className}`}>
      <span className="italic font-light" style={{ color: lightColour, letterSpacing: '-0.02em' }}>
        Lapland
      </span>
      <span className="font-semibold" style={{ color: heavyColour, letterSpacing: '-0.01em' }}>
        Deals
      </span>
    </span>
  );
}
