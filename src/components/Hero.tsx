import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

// May–September → summer hero, otherwise winter hero.
const isSummerSeason = () => { const m = new Date().getMonth()+1; return m>=5 && m<=9; };

export default function Hero() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].hero;
  // Same season check that drives heroBase, so the hero TEXT matches the hero
  // IMAGE: summer (May–Sep) = midnight-sun copy + /summer CTA, winter = aurora
  // copy + /activities CTA. Falls back to the winter (base) strings if a lang
  // is missing a *Summer override.
  const isSummer = isSummerSeason();
  const heroBase = isSummer ? 'home-hero-summer' : 'home-hero';
  const eyebrow = isSummer ? c.eyebrowSummer ?? c.eyebrow : c.eyebrow;
  const lead = isSummer ? c.leadSummer ?? c.lead : c.lead;
  const secondary = isSummer ? c.secondarySummer ?? c.secondary : c.secondary;
  const secondaryTo = isSummer
    ? c.secondaryToSummer ?? c.secondaryTo ?? '/summer'
    : c.secondaryTo ?? '/summer';

  return (
    <section className="relative min-h-[100svh] md:min-h-[92vh] flex items-center overflow-hidden pt-16">
      {/* Hero photograph */}
      <picture>
        <source srcSet={`/images/${heroBase}.avif`} type="image/avif" />
        <source srcSet={`/images/${heroBase}.webp`} type="image/webp" />
        <img
          src={`/images/${heroBase}.webp`}
          alt="Finnish Lapland, a lakeside cabin landscape"
          className="absolute inset-0 w-full h-full object-cover object-[center_42%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </picture>

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/0" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream" />
      <div aria-hidden="true" className="absolute inset-0 paper-grain opacity-40 mix-blend-overlay" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2.5 text-ivory/80 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] mb-6 sm:mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-vibe-pink deal-pulse shrink-0" />
            {eyebrow}
          </p>

          {/* Bebas is single-weight and upright — no italic/weight games. */}
          <h1 className="font-heading text-ivory leading-[0.95] mb-6 sm:mb-8 text-[3.4rem] sm:text-[5rem] lg:text-[6.4rem] drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)]">
            {c.h1Line1Italic}
            {c.h1Line1Bold}
            <br />
            <span className="text-vibe-pink drop-shadow-[0_0_40px_rgba(236,72,153,0.8)]">{c.h1Line2}</span>
          </h1>

          <p className="text-ivory/85 text-base sm:text-lg lg:text-xl max-w-xl mb-9 sm:mb-11 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {lead}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to={to('/hotels')}
              className="group inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-ivory font-bold tracking-[0.06em] px-7 py-4 rounded-full text-[13px] uppercase transition-colors no-underline"
            >
              {c.primary}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to={to(secondaryTo)}
              className="inline-flex items-center justify-center gap-2 border border-ivory/40 hover:border-ivory text-ivory font-semibold tracking-[0.06em] px-7 py-4 rounded-full text-[13px] uppercase transition-colors backdrop-blur-sm bg-white/5 no-underline"
            >
              {secondary}
            </Link>
          </div>
        </div>
      </div>

      <span id="deals" className="absolute bottom-0" />
    </section>
  );
}
