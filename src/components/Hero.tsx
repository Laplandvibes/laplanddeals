import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[92vh] flex items-center overflow-hidden pt-16">
      {/* Hero photograph */}
      <img
        src="/images/home-hero.webp"
        alt="Finnish Lapland — log cabin on the snowy edge of a frozen lake at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />

      {/* Soft horizontal gradient — anchors the text block on the left without
          flattening the right-side photograph. */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/0" />
      {/* Slim bottom fade so cream page bg meets hero softly */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream" />
      {/* Magazine paper-grain texture */}
      <div aria-hidden="true" className="absolute inset-0 paper-grain opacity-40 mix-blend-overlay" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-ivory/80 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] mb-6 sm:mb-8">
            Curated · Last-minute · End-of-season · Midnight sun
          </p>

          {/* H1 mirrors the wordmark: # in vibe-pink + italic-light "Lapland"
              + roman semibold "Deals". One signature, header → hero. */}
          <h1 className="font-heading text-ivory leading-[1.02] mb-6 sm:mb-8 text-[3rem] sm:text-[4.5rem] lg:text-[6rem]">
            <span className="font-semibold tracking-[-0.04em] text-vibe-pink">#</span>
            <span className="italic font-light tracking-[-0.02em]">Lapland</span>
            <span className="font-semibold tracking-[-0.01em]">Deals</span>
            <span className="font-light italic">,</span>
            <br />
            <span className="font-semibold tracking-[-0.015em]">checked daily.</span>
          </h1>

          <p className="text-ivory/85 text-base sm:text-lg lg:text-xl max-w-xl mb-9 sm:mb-11 leading-relaxed">
            Quietly curated last-minute offers on Finnish Lapland — glass-igloo nights, husky safaris,
            flights to Rovaniemi, winter car hire. Live partner prices; we never invent percentages.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/hotels"
              className="group inline-flex items-center justify-center gap-2 bg-ivory hover:bg-cream text-ink font-bold tracking-[0.06em] px-7 py-4 rounded-full text-[13px] uppercase transition-colors no-underline"
            >
              Tonight's hotels
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/summer"
              className="inline-flex items-center justify-center gap-2 border border-ivory/40 hover:border-ivory text-ivory font-semibold tracking-[0.06em] px-7 py-4 rounded-full text-[13px] uppercase transition-colors backdrop-blur-sm bg-white/5 no-underline"
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
