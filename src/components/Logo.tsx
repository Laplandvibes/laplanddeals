interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Use ivory text when placed over a dark gradient (e.g. Hero overlay). */
  invert?: boolean;
}

export default function Logo({ className = '', size = 'md', invert = false }: LogoProps) {
  const sizeClass =
    size === 'lg' ? 'text-2xl md:text-3xl' :
    size === 'sm' ? 'text-base' :
    'text-xl';

  const word = invert ? 'text-ivory' : 'text-ink';

  return (
    <span className={`font-heading tracking-tight ${sizeClass} leading-none ${className}`}>
      <span className="italic font-medium" style={{ color: invert ? '#FFFFFF' : '#002F6C' }}>Lapland</span>
      <span className={`font-bold ${word}`}>Deals</span>
    </span>
  );
}
