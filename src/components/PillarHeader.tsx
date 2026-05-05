interface PillarHeaderProps {
  eyebrow: string;
  h1: string;
  sub: string;
  /** Hero photograph path under /public, e.g. /images/offer-igloo-saariselka.webp */
  image: string;
}

export default function PillarHeader({ eyebrow, h1, sub, image }: PillarHeaderProps) {
  return (
    <header className="relative overflow-hidden pt-16 min-h-[60vh] md:min-h-[68vh] flex items-end">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
      <div className="absolute inset-0 paper-grain opacity-40 mix-blend-overlay" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <div className="max-w-3xl">
          <p className="text-ivory/80 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] mb-4">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.75rem] font-medium leading-[1.05] tracking-tight text-ivory mb-5">
            {h1}
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            {sub}
          </p>
        </div>
      </div>
    </header>
  );
}
