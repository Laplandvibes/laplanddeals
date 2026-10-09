import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { HOME_HERO_WIDTHS, isSummerSeason } from '../data/offerPhotos';
import { HOME_HERO_ALT } from '../data/heroAlt';

// June–August → summer hero (midnight sun through 7 July, hiking August).
// Was May–September until 2026-09-10: on 10 September the live hero still read
// "MIDNIGHT SUN · cheapest season of the year" two months after the sun set.
// From September the base (aurora-season) copy is the truthful one.
// (isSummerSeason lives in data/offerPhotos.ts so the page credit line names the photo that is shown.)

/* ── Otsikko kahdella rivillä jokaisella kielellä tietokoneella (Vesa 3.10.2026: "tehdään turhaan kolmirivisiä") ──
 * Mitattu livenä 3.10. (12 kieltä × 1280/1536/1920): 22 löydöstä, otsikko 3–4 riviä de/fr/sv/it/nl/es/pt-BR/ja.
 * Koko kasvoi näytön mukana (102–122 px), palsta pysyi 768 px:ssä ⇒ "Günstige Last- / Minute- / Angebote für /
 * Lappland." ja ja katkesi kesken sanan ("ラップラン / ドの格安"). Rivijako on datassa (valkoinen rivi | pinkki rivi),
 * joten sm:stä ylöspäin koko on pienempi kahdesta: suunniteltu --h1-max tai koko jolla pidempi rivi mahtuu
 * palstaan (100cqi / rivin leveys em-yksiköinä). Palsta pysyy 768 px:ssä: teksti ei siirry kuvan vaaleaan reunaan.
 * Malli: hubin Hero.tsx (laplandvibes cadea06). */
const CJK_CHAR = /[぀-ヿ㐀-鿿가-힯＀-￯]/;
/** Rivin leveysarvio em-yksiköinä: Bebas Neuen versaali ~0,36–0,39 em, arvio 0,4 jättää varaa; CJK-merkki 1,05 em. */
const emWidth = (s: string): number =>
  [...s].reduce((w, ch) => w + (CJK_CHAR.test(ch) ? 1.05 : ch === ' ' ? 0.25 : 0.4), 0);

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
  const heroSet = (ext: string) => HOME_HERO_WIDTHS.map((w) => `/images/${w === 1920 ? heroBase : `${heroBase}-${w}`}.${ext} ${w}w`).join(', ');
  const eyebrow = isSummer ? c.eyebrowSummer ?? c.eyebrow : c.eyebrow;
  const lead = isSummer ? c.leadSummer ?? c.lead : c.lead;
  const secondary = isSummer ? c.secondarySummer ?? c.secondary : c.secondary;
  const secondaryTo = isSummer
    ? c.secondaryToSummer ?? c.secondaryTo ?? '/summer'
    : c.secondaryTo ?? '/summer';
  const line1 = `${c.h1Line1Italic}${c.h1Line1Bold}`;
  const h1Em = Math.max(emWidth(line1), emWidth(c.h1Line2));
  const cjk = CJK_CHAR.test(line1);

  return (
    <section className="relative min-h-[100svh] md:min-h-[92vh] flex items-center overflow-hidden pt-16">
      {/* Hero photograph */}
      {/* Real photographs since 9.10.2026 (data/offerPhotos.ts); home-hero.avif|webp is the 1920 px file,
          the preload in public/_headers points at it. */}
      <picture>
        <source srcSet={heroSet('avif')} sizes="100vw" type="image/avif" />
        <source srcSet={heroSet('webp')} sizes="100vw" type="image/webp" />
        <img
          src={`/images/${heroBase}.webp`}
          alt={HOME_HERO_ALT[heroBase][lang]}
          className="absolute inset-0 w-full h-full object-cover object-[center_42%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </picture>

      {/* 🔴 Peite oli VAIN vaakasuuntainen (vasen 70 % → oikea 0 %). Tyopoydalla teksti
          on vasemmassa palstassa ja se riitti, mutta 375 px:lla teksti levittyy koko
          leveydelle ja oikea reuna jai kirkkaaksi. Mitattu 21.9.2026 (korttiteksti-portti):
          hero-otsikon pinkki 1,00:1 rajan 3:1 sijaan ja 61 % pikseleista rajan alle.
          Nyt vaakapeite vahvempi JA pystysuuntainen kerros tekstikaistan kohdalle. */}
      {/* Phones: the text spans the full width, so the violet dusk sky behind the pink line needs its own dimming (gate heroteksti 9.10.2026). */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/30 sm:hidden" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/60 to-black/25" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream" />
      <div aria-hidden="true" className="absolute inset-0 paper-grain opacity-40 mix-blend-overlay" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* @container: otsikon koko lasketaan tämän palstan leveydestä (100cqi). */}
        <div className="@container max-w-3xl">
          <p className="flex items-center gap-2.5 text-ivory text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] mb-6 sm:mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-vibe-pink deal-pulse shrink-0" />
            {eyebrow}
          </p>

          {/* Bebas is single-weight and upright — no italic/weight games. */}
          {/* Puhelin (< 640) pitää kiinteän koon; sm+ = min(suunniteltu, palstaan mahtuva). ja/zh/ko: keep-all, ettei
              rivi katkea kesken sanan jos arvio pettää. */}
          <h1
            className={`font-heading text-ivory leading-[0.95] mb-6 sm:mb-8 text-[3.4rem] sm:[--h1-max:5rem] lg:[--h1-max:6.4rem] xl:[--h1-max:clamp(102px,1.5938vw_+_81.6px,122.4px)] sm:[font-size:min(var(--h1-max),calc(100cqi/var(--h1-em)))] drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)]${cjk ? ' [word-break:keep-all] [overflow-wrap:anywhere]' : ''}`}
            style={{ ['--h1-em' as string]: h1Em.toFixed(2) }}
          >
            {line1}
            <br />
            <span className="text-vibe-pink drop-shadow-[0_0_40px_rgba(236,72,153,0.8)]">{c.h1Line2}</span>
          </h1>

          <p className="text-ivory/85 text-base sm:text-lg lg:text-xl max-w-xl xl:max-w-3xl mb-9 sm:mb-11 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] xl:text-2xl">
            {lead}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to={to('/hotels')}
              className="group inline-flex items-center justify-center gap-2 bg-[#DB2777] hover:bg-[#BE185D] text-white font-bold tracking-[0.06em] px-7 py-4 rounded-full text-[13px] uppercase transition-colors no-underline"
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
