/**
 * Mainospaikkojen data — laplanddeals.com (LV Media -inventaari).
 *
 * Myyntiprosessi:
 *   1. Kumppani ostaa paikan (LV Media -portaali → lv_bookings)
 *   2. Agentti täyttää paikan tässä tiedostossa Partner-objektilla
 *   3. `npm run build` + deploy → mainos ilmestyy etusivulle
 *
 * Jaettu malli (shared/HomeAdSlots.tsx):
 *   sponsors[0] = PÄÄKUMPPANI  → kompakti banneri heti heron alla
 *   sponsors[1] = KAKKOSPÄÄKUMPPANI → kortti kumppaniosiossa
 *   spots       = 6 kohdekohtaista premium-paikkaa
 * Tyhjä paikka (null) renderöi house-adin, joka linkittää LV Media
 * -portaaliin (laplandvibes.com/media/site/laplanddeals) + GA4-event.
 */

import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots';
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid';

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplanddeals',
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
