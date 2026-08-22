import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { useLang } from '../i18n/useLang';
import { GYG_WORKER_LANG } from '../lib/gyg';

/**
 * LaplandVibes affiliate CTA. All CJ-routed clicks (Hotels.com, EconomyBookings)
 * are funnelled through https://go.laplandvibes.com — the Cloudflare Worker
 * handles per-domain CJ Website ID attribution via Referer.
 *
 * Activities (GetYourGuide) also go through the Worker — see ../lib/gyg.ts,
 * which was migrated back on 2026-08-03. This component kept building direct
 * getyourguide.com links until 2026-08-22, citing the same stale
 * bug_go_lv_worker_gyg_dropped.md (2026-05-02) the helper had already
 * disproved: `handleGyg` forwards the whole multi-segment path (verified live
 * 2026-08-22), and a direct link never reaches the D1 click log.
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
  // ─── Activities (GetYourGuide) via the Worker ─────────────────────
  // The slug goes in the PATH so the Worker can log which activity converted
  // (D1 `slug` column); a direct link is invisible to our own click count.
  // `partner_id` + `cmp=lv_<domain>_<sid>` are added by the Worker from env +
  // Referer, so the id lives in exactly one place.
  //
  // 🔴 `language` is read by the WORKER, not by GetYourGuide: `?language=xx` is a
  // no-op there (measured 2026-08-02) — GYG localises by a `<lang>-<country>/`
  // PATH PREFIX, which the Worker builds from this parameter. That is why the
  // old per-locale hosts (getyourguide.de/.fr/.es…) are gone rather than kept:
  // one Worker owns the whole mapping. Codes come from GYG_WORKER_LANG so this
  // component and ../lib/gyg.ts cannot drift apart.
  if (partner === 'activities') {
    const path = (destination ?? '').replace(/^\/+/, '').replace(/\/+$/, '');
    const params = new URLSearchParams();
    params.set('sid', sid);
    const gygLang = GYG_WORKER_LANG[lang];
    if (gygLang) params.set('language', gygLang);
    if (query) for (const [k, v] of Object.entries(query)) if (v) params.set(k, v);
    return `${REDIRECT_HOST}/go/activities${path ? `/${path}` : ''}?${params.toString()}`;
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
