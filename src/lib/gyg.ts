/**
 * GetYourGuide deep-link helper — Workerin kautta 2026-08-03 alkaen.
 *
 * Tämä tiedosto rakensi aiemmin raakoja getyourguide.com-URLeja perusteella
 * "Worker collapses every slug to GYG's homepage (2026-05-02)". Väite ei pidä
 * enää paikkaansa: se oli curl-bot-fallback-artefakti, ja Worker on 2026-08-02
 * lähtien hoitanut slugin, /s?q=-haun JA kielen polkuprefiksin (`language=`-
 * parametri → GYG:n `<kieli>-<maa>/`-etuliite, ainoa lokalisointi jota GYG
 * kunnioittaa — raaka ?language= on GYG:llä no-op). Suora linkitys menettäisi
 * D1-klikkilokin ja veisi partner_id:n bundleen; Worker injektoi partner_id:n
 * ja cmp=lv_<domain>_<sid>:n itse.
 *
 * Koska tarjousdata (offers.ts) on staattinen moduuli ilman kieltä, kieli
 * liitetään renderissä: kutsu `gygLocalizeHref(href, lang)` — se koskee vain
 * /go/activities-URLeihin ja jättää muut ennalleen.
 */

import type { Lang } from '../i18n/useLang';

const GO = 'https://go.laplandvibes.com/go/activities';

/**
 * Worker `?language=` codes (same table as shared/gyg/picks.ts). `en` is GYG's
 * default and needs no param; `de` needs a code here even though the old raw
 * links didn't send one — they used the getyourguide.de domain instead.
 */
export const GYG_WORKER_LANG: Record<Lang, string | undefined> = {
  en: undefined, fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'pt-br',
  'zh-CN': 'zh', ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};

/**
 * Liitä sivun kieli Worker-aktiviteettilinkkiin renderissä. Muut URLit
 * (Lomarengas, Trip.com, …) palautuvat sellaisenaan.
 */
export function gygLocalizeHref(href: string, lang: Lang): string {
  if (!href.startsWith(GO)) return href;
  const code = GYG_WORKER_LANG[lang];
  if (!code) return href;
  return `${href}${href.includes('?') ? '&' : '?'}language=${code}`;
}

/**
 * Direct deeplink to a specific GYG product or location page (when you know
 * the exact slug works — verify in a real browser first; a delisted id does
 * NOT 404, GYG redirects it to a city listing).
 *
 * @param productPath  Path component after `getyourguide.com/`. Example:
 *                     `lapland-finland-l2652` (Finnish Lapland location).
 */
export function gygDeepLink(productPath: string, sid: string): string {
  const path = productPath.replace(/^\/+/, '').replace(/\/+$/, '');
  return `${GO}/${path}?sid=${sid}`;
}

/**
 * Search deeplink — most reliable. Worker rakentaa GYG:n /s?q=-haun (ainoa
 * URL jossa GYG kunnioittaa q:ta; sijaintisivut ohittavat sen).
 */
export function gygSearch(query: string, sid: string): string {
  return `${GO}?sid=${sid}&q=${encodeURIComponent(query)}`;
}

/**
 * Common Lapland category landing pages.
 */
export const GYG_CATEGORIES = {
  all:        gygDeepLink('lapland-finland-l2652', 'cat_all'),
  husky:      gygSearch('husky safari Lapland', 'cat_husky'),
  snowmobile: gygSearch('snowmobile Lapland', 'cat_snowmobile'),
  reindeer:   gygSearch('reindeer Lapland', 'cat_reindeer'),
  aurora:     gygSearch('northern lights Lapland', 'cat_aurora'),
  iceFishing: gygSearch('ice fishing Lapland', 'cat_ice_fishing'),
  daytrips:   gygSearch('Lapland day trip', 'cat_daytrips'),
  multiday:   gygSearch('Lapland multi-day tour', 'cat_multiday'),
  hiking:     gygSearch('Lapland hiking summer', 'cat_hiking'),
} as const;
