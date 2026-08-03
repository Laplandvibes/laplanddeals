import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { useLang } from '../i18n/useLang';

/**
 * LaplandVibes affiliate CTA. All CJ-routed clicks (Hotels.com, EconomyBookings)
 * are funnelled through https://go.laplandvibes.com — the Cloudflare Worker
 * handles per-domain CJ Website ID attribution via Referer.
 *
 * For GYG, see ./gyg.ts (worker collapses slugs to homepage — bypass).
 * For Trip.com, see ../lib/tripcom.ts (Impact, direct links with query params).
 *
 * Synced 2026-05-05 from laplandbars/AffiliateCTA.tsx — same canonical contract.
 */

export type AffiliatePartner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities';

export interface AffiliateCTAProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> {
  partner: AffiliatePartner;
  /** Placement tag, e.g. 'hero_cta', 'inline_paragraph', 'card'. snake_case. Max 50 chars. */
  sid: string;
  /**
   * For hotels/cars: search query passed as `?ss=...`.
   * For activities: GYG slug appended to the path.
   */
  destination?: string;
  /** Extra query params (checkin, pickup_date, currency, …). Merged after sid + ss. */
  query?: Record<string, string>;
  children: ReactNode;
}

const REDIRECT_HOST = 'https://go.laplandvibes.com';

type _Lang = "en" | "fi" | "de" | "ja" | "es" | "pt-BR" | "zh-CN" | "ko" | "fr" | "it" | "nl" | "sv";
const HOTELS_LOCALE: Record<_Lang, string> = {
  en: "en_US",
  fi: "fi_FI",
  de: "de_DE",
  ja: "ja_JP",
  es: "es_ES",
  "pt-BR": "pt_BR",
  "zh-CN": "zh_CN",
  ko: "ko_KR",
  fr: "fr_FR",
  it: "it_IT",
  nl: "nl_NL",
  sv: "sv_SE",
};
const CARS_LANG: Record<_Lang, string> = {
  en: "en",
  fi: "fi",
  de: "de",
  ja: "ja",
  es: "es",
  "pt-BR": "pt",
  "zh-CN": "zh",
  ko: "ko",
  fr: "fr",
  it: "it",
  nl: "nl",
  sv: "sv",
};
const GYG_DOMAIN: Record<_Lang, string> = {
  en: "https://www.getyourguide.com",
  fi: "https://www.getyourguide.com",
  de: "https://www.getyourguide.de",
  // GYG has no .jp — fallback to .com + ?language=ja (added in GYG builder).
  ja: "https://www.getyourguide.com",
  es: "https://www.getyourguide.es",
  "pt-BR": "https://www.getyourguide.com",
  "zh-CN": "https://www.getyourguide.com",
  ko: "https://www.getyourguide.com",
  fr: "https://www.getyourguide.fr",
  it: "https://www.getyourguide.it",
  nl: "https://www.getyourguide.nl",
  // GYG has no .se — fallback to .com + ?language=sv (added in GYG builder).
  sv: "https://www.getyourguide.com",
};

const GYG_PARTNER_ID = 'VRMKD7N';
const SITE_ID = 'laplanddeals';

// `lang` is REQUIRED: it decides the hotels locale, and the go/hotels Worker routes
// locale=fi_FI to Sembo (9 % / 45 d) and every other locale to Trip.com. An "en"
// default silently sent Finnish visitors past Sembo — see offers.ts (Vesa 2026-07-26).
export function buildAffiliateHref({
  partner,
  sid,
  destination,
  query,
  lang,
}: Pick<AffiliateCTAProps, 'partner' | 'sid' | 'destination' | 'query'> & { lang: _Lang }): string {
  if (partner === 'activities') {
    const path = (destination ?? '').replace(/^\/+/, '').replace(/\/+$/, '');
    const url = new URL(path ? `${GYG_DOMAIN[lang]}/${path}/` : `${GYG_DOMAIN[lang]}/`);
    url.searchParams.set('partner_id', GYG_PARTNER_ID);
    url.searchParams.set('cmp', `lv_${SITE_ID}_${sid}`);
    if (lang === 'fi') url.searchParams.set('language', 'fi');
    if (lang === 'ja') url.searchParams.set('language', 'ja');
    if (lang === 'es') url.searchParams.set('language', 'es');
    if (lang === 'pt-BR') url.searchParams.set('language', 'pt-BR');
    if (lang === 'zh-CN') url.searchParams.set('language', 'zh-CN');
    if (lang === 'ko') url.searchParams.set('language', 'ko');
    if (lang === 'fr') url.searchParams.set('language', 'fr');
    if (lang === 'it') url.searchParams.set('language', 'it');
    if (lang === 'nl') url.searchParams.set('language', 'nl');
    if (lang === 'sv') url.searchParams.set('language', 'sv');
    if (query) for (const [k, v] of Object.entries(query)) if (v) url.searchParams.set(k, v);
    return url.toString();
  }
  const params = new URLSearchParams({ sid, ...(query || {}) });
  // 🔴 cars käyttää pickup_location=IATA, EI ss:ää — ss=IATA valuu EB:n
  // ?location=-tekstihakuun, jonka EB pudottaa tyhjäksi etusivuksi (3.8.2026).
  if (destination) {
    if (partner === "cars") params.set('pickup_location', destination);
    else params.set('ss', anchorHotelsSs(partner, destination));
  }
  if (partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget") {
    params.set("locale", HOTELS_LOCALE[lang]);
  } else if (partner === "cars") {
    params.set("lang", CARS_LANG[lang]);
  }
  return `${REDIRECT_HOST}/go/${partner}?${params.toString()}`;
}

export default function AffiliateCTA({
  partner,
  sid,
  destination,
  query,
  children,
  ...rest
}: AffiliateCTAProps) {
  const lang = useLang();
  return (
    <a
      {...rest}
      href={buildAffiliateHref({ partner, sid, destination, query, lang })}
      target="_blank"
      rel="sponsored nofollow noopener"
    >
      {children}
    </a>
  );
}

/**
 * Anchor any hotels search to Finnish Lapland. A bare "Lapland"/"Levi"/etc.
 * makes Hotels.com geocode to *Lapland, Indiana, USA* — a real revenue/trust
 * bug (Vesa 2026-07-08). Force ", Finland" onto every hotels query that does
 * not already name the country; leave cars/activities queries untouched.
 * Callers cannot re-introduce the bug.
 */
function anchorHotelsSs(partner: string, destination: string): string {
  const isHotels = partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget";
  if (!isHotels) return destination;
  return /finland|suomi/i.test(destination) ? destination : `${destination.replace(/[\s,]+$/, "")}, Finland`;
}
