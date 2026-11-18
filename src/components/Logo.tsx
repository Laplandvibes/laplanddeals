import type { CSSProperties } from 'react';

import { LV_SANAMERKKI, LV_SANAMERKKI_PIENI } from './lvSanamerkki';
// Sanamerkin leveys 1 px:n fontilla (Bebas Neue + tracking-wide). Puhelin- ja tablettinavissa koko lasketaan
// tästä ja vapaasta tilasta (index.css LV-NAV-SANAMERKKI): 24 px, pienempi vain kun ei mahdu.
const WM_STYLE = { '--lv-wm-k': 5.35 } as CSSProperties;

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Use ivory text when placed over a dark gradient (e.g. Hero overlay). */
  invert?: boolean;
  /** Navin sanamerkki: koko puhelin- ja tablettinavissa vapaan tilan mukaan (index.css LV-NAV-SANAMERKKI). */
  nav?: boolean;
}

/**
 * #LaplandDeals wordmark — LV brand signature (`#` accent in vibe-pink)
 * adapted to the cream luxury variant. Same Playfair italic-light + roman
 * semibold pairing as the hero h1 so header → hero share one signature.
 */
export default function Logo({ className = '', size = 'md', invert = false, nav = false }: LogoProps) {
  // Yläpalkissa pienen koon muoto (kirjainten reiät auki 16–21 px:n koossa), muualla virallinen.
  const LVS = nav ? LV_SANAMERKKI_PIENI : LV_SANAMERKKI;
  const sizeClass =
    size === 'lg' ? 'text-4xl md:text-5xl' :
    size === 'sm' ? 'text-xl md:text-2xl' :
    // Navin koko: työpöydällä verkoston 30 px (alle 1280 px:n koko tulee index.css:n LV-NAV-SANAMERKKI-lohkosta).
    'text-xl md:text-2xl xl:text-3xl';

  // Dark deal theme (2026-07-06): the site chrome is deep-night everywhere, so
  // LAPLAND is ALWAYS snow — the old non-invert ink (#0F172A) vanished against
  // the dark nav (Vesa spotted it on /summer). `invert` kept for API compat.
  void invert;
  const heavyColour = '#F9FAFB';

  // Standard #LAPLAND{BRAND} ecosystem signature (Bebas, # + brand word in
  // vibe-pink, LAPLAND in snow/ink) — a brand constant shared across every LV
  // site, regardless of each site's own body typography variant.
  return (
    <span translate="no"
      className={`notranslate leading-none ${sizeClass}${nav ? ' lv-wm' : ''} ${className}`}
      data-lv-sanamerkki={nav ? '' : undefined}
      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.025em', ...(nav ? WM_STYLE : {}) }}
    >
      {/* VIRALLINEN sanamerkki (Vesa 14.11.2026; yläpalkki 15.11.2026 "sama leveys kuin nyt"): piirros ./lvSanamerkki.ts,
          leveys = entisen tekstin leveys, osat perivät entiset värinsä (currentColor). Teksti ruudunlukijalle ja hakukoneelle. */}
      <svg viewBox={LVS.viewBox} aria-hidden="true" focusable="false" style={{ width: `${LVS.leveysEm}em`, height: 'auto', display: 'inline-block', verticalAlign: 'middle', overflow: 'visible' }}>
        <path style={{ color: '#EC4899' }} fill="currentColor" fillRule="evenodd" d={LVS.d[0]} />
        <path style={{ color: heavyColour }} fill="currentColor" fillRule="evenodd" d={LVS.d[1]} />
        <path style={{ color: '#EC4899' }} fill="currentColor" fillRule="evenodd" d={LVS.d[2]} />
      </svg>
      <span className="sr-only">#LAPLANDDEALS</span>
    </span>
  );
}
