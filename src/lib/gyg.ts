/**
 * GetYourGuide deep-link helper.
 *
 * The `go.laplandvibes.com/go/activities/*` Cloudflare Worker collapses every
 * slug to GYG's homepage (bug, 2026-05-02 — see bug_go_lv_worker_gyg_dropped.md).
 * We bypass it for GYG by linking directly with `partner_id` + `cmp` query
 * params — same attribution, correct deep-link.
 *
 * For Hotels.com / EconomyBookings the worker is still the right route (CJ
 * attribution flows through Referer, not query string).
 */

const GYG_PARTNER_ID = 'VRMKD7N';

/**
 * Build a deep link to a specific GYG product or category page.
 *
 * @param productPath  Path component after `getyourguide.com/`. Examples:
 *                     `lapland-l662/snowmobile-tc6` (category)
 *                     `rovaniemi-l2653/rovaniemi-arctic-snowhotel-...-t1130814` (product)
 * @param sid          Per-placement campaign tag, snake_case.
 */
export function gygDeepLink(productPath: string, sid: string): string {
  const path = productPath.replace(/^\/+/, '');
  const url = new URL(`https://www.getyourguide.com/${path}/`);
  url.searchParams.set('partner_id', GYG_PARTNER_ID);
  url.searchParams.set('cmp', `lv_laplanddeals_${sid}`);
  return url.toString();
}

/** Common Lapland category landing pages on GYG. */
export const GYG_CATEGORIES = {
  all:        gygDeepLink('lapland-l662', 'cat_all'),
  husky:      gygDeepLink('lapland-l662/husky-safaris-tc26', 'cat_husky'),
  snowmobile: gygDeepLink('lapland-l662/snowmobile-tc6', 'cat_snowmobile'),
  reindeer:   gygDeepLink('lapland-l662/reindeer-tours-tc52', 'cat_reindeer'),
  aurora:     gygDeepLink('lapland-l662/northern-lights-tc119', 'cat_aurora'),
  iceFishing: gygDeepLink('lapland-l662/ice-fishing-tc6058', 'cat_ice_fishing'),
  daytrips:   gygDeepLink('lapland-l662/day-trips-tc54', 'cat_daytrips'),
} as const;
