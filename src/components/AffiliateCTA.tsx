import type { ReactNode, AnchorHTMLAttributes } from 'react';

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

export function buildAffiliateHref({
  partner,
  sid,
  destination,
  query,
}: Pick<AffiliateCTAProps, 'partner' | 'sid' | 'destination' | 'query'>): string {
  const params = new URLSearchParams({ sid, ...(query || {}) });

  if (destination && partner !== 'activities') {
    params.set('ss', destination);
  }

  const pathname =
    partner === 'activities' && destination ? `/go/activities/${destination}` : `/go/${partner}`;

  return `${REDIRECT_HOST}${pathname}?${params.toString()}`;
}

export default function AffiliateCTA({
  partner,
  sid,
  destination,
  query,
  children,
  ...rest
}: AffiliateCTAProps) {
  return (
    <a
      {...rest}
      href={buildAffiliateHref({ partner, sid, destination, query })}
      target="_blank"
      rel="sponsored nofollow noopener"
    >
      {children}
    </a>
  );
}
