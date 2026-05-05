interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClass =
    size === 'lg' ? 'text-3xl md:text-5xl' :
    size === 'sm' ? 'text-xl' :
    'text-2xl md:text-3xl';

  return (
    <span className={`font-heading tracking-wide ${sizeClass} leading-none ${className}`}>
      <span className="text-vibe-pink">#</span>
      <span className="text-snow">LAPLAND</span>
      <span className="text-vibe-pink">DEALS</span>
    </span>
  );
}
