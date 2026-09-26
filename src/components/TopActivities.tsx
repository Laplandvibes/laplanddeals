import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { GYG_CATEGORIES, gygLocalizeHref } from '../lib/gyg';
import { TOP_VIEWED_CHECKED_AT, TOP_VIEWED_WINDOW_DAYS } from '../data/topActivities';
import { topViewedIds } from '../lib/topViewed';
import { GygSection, GygWidget } from './GygLive';

/**
 * "Our readers' most-viewed tours" (Vesa 2026-09-26). The social proof GetYourGuide shows on its
 * own pages ("booked 27 times yesterday") is not available to affiliates and would be stale the
 * moment we stored it, so this section uses the one number we own: which GYG tours readers
 * across the LaplandVibes sites clicked through to most in the last 30 days. It says "viewed",
 * never "booked" or "best-selling" (a click is not a booking), shows the read date, and has no
 * rank because GYG's widget ignores the order of the ids.
 *
 * The ids come from data/topActivities.ts, written weekly by scripts/write-top-activities.mjs,
 * which also verifies each id renders as itself (GYG silently swaps a dead id for its own pick).
 * If the weekly job stops, the section hides itself (lib/topViewed.ts) rather than keep an old claim.
 */

function fmtDate(iso: string, lang: Lang): string {
  try { return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(`${iso}T12:00:00Z`)); }
  catch { return iso; }
}

export default function TopActivities({ cmp = 'lv_laplanddeals_top_viewed' }: { cmp?: string }) {
  const lang = useLang();
  const ids = topViewedIds();
  if (!ids.length) return null;

  const c = COPY[lang].live.topViewed;
  const browse = COPY[lang].live.activities.browse;
  const browseHref = gygLocalizeHref(GYG_CATEGORIES.all, lang);
  const lead = c.lead.replace('{days}', String(TOP_VIEWED_WINDOW_DAYS));

  return (
    <GygSection
      id="top-viewed-title"
      eyebrow={c.eyebrow.replace('{date}', fmtDate(TOP_VIEWED_CHECKED_AT, lang))}
      title={c.title}
      lead={lead}
      browseHref={browseHref}
      browseLabel={browse}
      className="border-b border-line"
    >
      <GygWidget cmp={cmp} tourIds={ids} fallbackText={lead} browseHref={browseHref} browseLabel={browse} />
    </GygSection>
  );
}
