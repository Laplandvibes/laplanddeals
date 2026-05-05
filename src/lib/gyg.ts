/**
 * GetYourGuide deep-link helper.
 *
 * The `go.laplandvibes.com/go/activities/*` Cloudflare Worker collapses every
 * slug to GYG's homepage (bug, 2026-05-02 — see bug_go_lv_worker_gyg_dropped.md).
 * We bypass it for GYG by linking directly with `partner_id` + `cmp` query
 * params — same attribution, correct deep-link.
 *
 * Lapland location slug correction (2026-05-05): `lapland-l662` returns 404 —
 * the correct GYG ID for Finnish Lapland is `l4404`. Verified via curl.
 *
 * Category sub-pages (`/lapland-l4404/<category-tcXX>`) tend to 404 too — GYG
 * doesn't expose stable category permalinks under every location. Reliable
 * pattern is to use the SEARCH endpoint `/s/?q=…&partner_id=VRMKD7N&cmp=…`
 * which always 200s and pre-filters the listing.
 */

const GYG_PARTNER_ID = 'VRMKD7N';
const SITE_TAG = 'laplanddeals';

function withAffiliate(rawUrl: string, sid: string): string {
  const url = new URL(rawUrl);
  url.searchParams.set('partner_id', GYG_PARTNER_ID);
  url.searchParams.set('cmp', `lv_${SITE_TAG}_${sid}`);
  return url.toString();
}

/**
 * Direct deeplink to a specific GYG product or location page (when you know
 * the exact slug works — verify with curl/browser first).
 *
 * @param productPath  Path component after `getyourguide.com/`. Example:
 *                     `lapland-l4404` (Finnish Lapland location).
 *                     `rovaniemi-l2653` (Rovaniemi city). NOTE Rovaniemi
 *                     currently 403s anonymously but works in browser.
 */
export function gygDeepLink(productPath: string, sid: string): string {
  const path = productPath.replace(/^\/+/, '');
  return withAffiliate(`https://www.getyourguide.com/${path}/`, sid);
}

/**
 * Search-result deeplink — most reliable. Always 200s, pre-filters by query,
 * preserves affiliate attribution. Use this for category landings.
 */
export function gygSearch(query: string, sid: string): string {
  const url = new URL('https://www.getyourguide.com/s/');
  url.searchParams.set('q', query);
  url.searchParams.set('partner_id', GYG_PARTNER_ID);
  url.searchParams.set('cmp', `lv_${SITE_TAG}_${sid}`);
  return url.toString();
}

/**
 * Common Lapland category landing pages. Each uses a verified-working GYG
 * search URL with affiliate params baked in.
 */
export const GYG_CATEGORIES = {
  all:        gygDeepLink('lapland-l4404', 'cat_all'),
  husky:      gygSearch('husky safari Lapland', 'cat_husky'),
  snowmobile: gygSearch('snowmobile Lapland', 'cat_snowmobile'),
  reindeer:   gygSearch('reindeer Lapland', 'cat_reindeer'),
  aurora:     gygSearch('northern lights Lapland', 'cat_aurora'),
  iceFishing: gygSearch('ice fishing Lapland', 'cat_ice_fishing'),
  daytrips:   gygSearch('Lapland day trip', 'cat_daytrips'),
  multiday:   gygSearch('Lapland multi-day tour', 'cat_multiday'),
  hiking:     gygSearch('Lapland hiking summer', 'cat_hiking'),
} as const;
