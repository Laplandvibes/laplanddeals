import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[88vh] flex items-end overflow-hidden pt-16">
      {/* Hero photograph */}
      <picture className="absolute inset-0">
        <img
          src="/images/home-hero.webp"
          alt="Finnish Lapland — log cabin on the snowy edge of a frozen lake at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </picture>

      {/* Cream-side fade so the page bg blends back in below the hero */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-cream" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Soft paper grain — premium magazine texture */}
      <div aria-hidden="true" className="absolute inset-0 opacity-50 paper-grain mix-blend-overlay" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-ivory/80 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] mb-5 sm:mb-7">
            Curated · Last-minute · End-of-season · Midnight sun
          </p>

          <h1 className="font-heading font-medium text-ivory leading-[1.04] tracking-tight text-[2.5rem] sm:text-6xl lg:text-[4.5rem] mb-6">
            <span className="italic font-light text-ivory/95">Lapland deals</span>,
            <br />
            <span className="font-semibold">checked daily.</span>
          </h1>

          <p className="text-ivory/85 text-base sm:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Quietly curated last-minute offers on Finnish Lapland — glass-igloo nights, husky safaris,
            flights to Rovaniemi, winter car hire. Live partner prices; we never invent percentages.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/hotels"
              className="group inline-flex items-center justify-center gap-2 bg-ivory hover:bg-cream text-ink font-bold tracking-[0.06em] px-7 py-4 rounded-full text-[14px] uppercase transition-colors no-underline"
            >
              Tonight's hotels
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/summer"
              className="inline-flex items-center justify-center gap-2 border border-ivory/40 hover:border-ivory text-ivory font-semibold tracking-[0.06em] px-7 py-4 rounded-full text-[14px] uppercase transition-colors backdrop-blur-sm bg-white/5 no-underline"
            >
              Midnight sun
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom anchor for "Browse today's deals" */}
      <span id="deals" className="absolute bottom-0" />
    </section>
  );
}
