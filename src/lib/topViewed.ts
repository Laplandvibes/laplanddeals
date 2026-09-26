import { TOP_VIEWED_CHECKED_AT, TOP_VIEWED_TOUR_IDS } from '../data/topActivities';

/**
 * Readers' most-viewed GYG tours (components/TopActivities.tsx). The list is written weekly by
 * scripts/write-top-activities.mjs; if that job stops, the section hides after MAX_AGE_DAYS rather
 * than keep an old "most viewed" claim on the page.
 */
const MAX_AGE_DAYS = 21;
const MIN_TOURS = 3;

/** The ids to show today, or [] when the list is too short or too old to call "most viewed". */
export function topViewedIds(now = Date.now()): readonly number[] {
  const age = (now - Date.parse(`${TOP_VIEWED_CHECKED_AT}T00:00:00Z`)) / 86_400_000;
  if (!(age >= 0 && age <= MAX_AGE_DAYS)) return [];
  return TOP_VIEWED_TOUR_IDS.length >= MIN_TOURS ? TOP_VIEWED_TOUR_IDS : [];
}
