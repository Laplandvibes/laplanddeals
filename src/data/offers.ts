import { gygDeepLink, GYG_CATEGORIES } from '../lib/gyg';
import { buildAffiliateHref } from '../components/AffiliateCTA';
import { TRIP_FLIGHTS } from '../lib/tripcom';

/**
 * LaplandDeals offer catalogue.
 *
 * IMPORTANT BRAND RULE — NO FAKE PRICES.
 * Every offer here points to a LIVE partner search/category page (Hotels.com,
 * Trip.com, GetYourGuide, EconomyBookings). The partner shows today's actual
 * price; we never invent percentages or expiry timers. Curation is ours;
 * pricing is theirs.
 *
 * Each offer has a corresponding photograph at /public/images/offer-{id}.webp
 * (generated via scripts/generate-images.py through OpenAI gpt-image-1).
 */

export type OfferCategory = 'hotels' | 'activities' | 'flights' | 'cars' | 'packages';
export type OfferFlag = 'last-minute' | 'end-of-season' | 'summer' | 'package' | 'editor-pick';
export type OfferPartner = 'hotels.com' | 'trip.com' | 'getyourguide' | 'economybookings';

export interface Offer {
  id: string;
  title: string;
  category: OfferCategory;
  location: string;
  blurb: string;
  partner: OfferPartner;
  href: string;
  flag?: OfferFlag;
}

// ─── Helpers ────────────────────────────────────────────────────────────

function hotelsUrl(query: string, sid: string): string {
  return buildAffiliateHref({ partner: 'hotels', sid, destination: query });
}

function carsUrl(pickupIATA: string, sid: string): string {
  return buildAffiliateHref({
    partner: 'cars',
    sid,
    query: { pickup_location: pickupIATA },
  });
}

// ─── Offers ─────────────────────────────────────────────────────────────

export const offers: Offer[] = [
  // ── Hotels ──────────────────────────────────────────────────────────
  {
    id: 'igloo-saariselka',
    title: 'Glass Igloo Stays — Saariselkä',
    category: 'hotels',
    location: 'Saariselkä',
    blurb: 'Heated glass igloos on the aurora belt. Live nightly prices on Hotels.com.',
    partner: 'hotels.com',
    href: hotelsUrl('Saariselkä, Finland', 'card_igloo_saariselka'),
    flag: 'editor-pick',
  },
  {
    id: 'levi-ski',
    title: 'Levi Slope-Side Hotels',
    category: 'hotels',
    location: 'Levi',
    blurb: 'Ski-in / ski-out properties on Finland\'s biggest fell. Tonight\'s rates on Hotels.com.',
    partner: 'hotels.com',
    href: hotelsUrl('Levi, Kittilä, Finland', 'card_levi_ski'),
    flag: 'last-minute',
  },
  {
    id: 'rovaniemi-hotels',
    title: 'Rovaniemi City Stays',
    category: 'hotels',
    location: 'Rovaniemi',
    blurb: '15 minutes from Santa Claus Village. Compare hotels and aparthotels.',
    partner: 'hotels.com',
    href: hotelsUrl('Rovaniemi, Finland', 'card_rovaniemi_city'),
  },
  {
    id: 'yllas-cabins',
    title: 'Ylläs Cabins & Wilderness Lodges',
    category: 'hotels',
    location: 'Ylläs',
    blurb: 'Quieter than Levi, equally generous fells. Cabin rates on Hotels.com.',
    partner: 'hotels.com',
    href: hotelsUrl('Ylläs, Kolari, Finland', 'card_yllas_cabins'),
    flag: 'end-of-season',
  },
  {
    id: 'ruka-hotels',
    title: 'Ruka & Kuusamo Stays',
    category: 'hotels',
    location: 'Ruka',
    blurb: 'Wild east — Oulanka National Park, husky ranches, late-spring snow.',
    partner: 'hotels.com',
    href: hotelsUrl('Ruka, Kuusamo, Finland', 'card_ruka_stays'),
  },
  {
    id: 'inari-stays',
    title: 'Inari & Utsjoki — Far North',
    category: 'hotels',
    location: 'Inari',
    blurb: 'Above the aurora oval. Sámi culture, frozen lakes, almost zero light pollution.',
    partner: 'hotels.com',
    href: hotelsUrl('Inari, Finland', 'card_inari_stays'),
    flag: 'editor-pick',
  },

  // ── Activities ─────────────────────────────────────────────────────
  {
    id: 'husky-safaris',
    title: 'Husky Safaris',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Drive your own team — half-day to overnight. Live availability on GetYourGuide.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.husky,
    flag: 'editor-pick',
  },
  {
    id: 'aurora-hunts',
    title: 'Northern Lights Tours',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Photographer-led hunts, glass igloos, lake-ice campfires. Real-time bookings.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.aurora,
    flag: 'last-minute',
  },
  {
    id: 'snowmobile',
    title: 'Snowmobile Tours',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Wilderness trails, frozen rivers, Sámi reindeer-farm lunches.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.snowmobile,
  },
  {
    id: 'reindeer-tours',
    title: 'Reindeer Sleigh & Farm Visits',
    category: 'activities',
    location: 'Rovaniemi · Inari',
    blurb: 'Slow, quiet, ancient — sleigh rides and farm visits with Sámi families.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.reindeer,
  },
  {
    id: 'ice-fishing',
    title: 'Ice Fishing on Frozen Lakes',
    category: 'activities',
    location: 'Inari · Saariselkä',
    blurb: 'Drill, drop, wait. Equipment, hot drinks, and a guide who knows the lake.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.iceFishing,
    flag: 'end-of-season',
  },
  {
    id: 'day-trips',
    title: 'Lapland Day Trips',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Half-day excursions you can stack: snowshoe + sauna + aurora in 24 hours.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.daytrips,
  },

  // ── Flights ────────────────────────────────────────────────────────
  {
    id: 'flight-hel-rvn',
    title: 'Helsinki → Rovaniemi',
    category: 'flights',
    location: 'HEL · RVN',
    blurb: 'Daily Finnair + Norwegian. Live results on Trip.com — pre-filled.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToRovaniemi,
    flag: 'last-minute',
  },
  {
    id: 'flight-hel-ktt',
    title: 'Helsinki → Kittilä (Levi)',
    category: 'flights',
    location: 'HEL · KTT',
    blurb: 'The fast way to Levi & Ylläs. 1h 25m direct.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToKittila,
  },
  {
    id: 'flight-hel-ivl',
    title: 'Helsinki → Ivalo (Saariselkä)',
    category: 'flights',
    location: 'HEL · IVL',
    blurb: 'Northernmost airport in the EU. Gateway to Saariselkä & Inari.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToIvalo,
  },
  {
    id: 'flight-hel-kao',
    title: 'Helsinki → Kuusamo (Ruka)',
    category: 'flights',
    location: 'HEL · KAO',
    blurb: 'Best access to Ruka, Oulanka and the wild east.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToKuusamo,
    flag: 'end-of-season',
  },

  // ── Cars ───────────────────────────────────────────────────────────
  {
    id: 'car-rvn',
    title: 'Car Hire — Rovaniemi Airport',
    category: 'cars',
    location: 'RVN',
    blurb: 'Studded tyres, 4WD, free aurora-chasing range. Compare on EconomyBookings.',
    partner: 'economybookings',
    href: carsUrl('RVN', 'card_car_rvn'),
    flag: 'last-minute',
  },
  {
    id: 'car-ktt',
    title: 'Car Hire — Kittilä Airport',
    category: 'cars',
    location: 'KTT',
    blurb: 'Levi 15 min, Ylläs 50 min. Winter tyres included.',
    partner: 'economybookings',
    href: carsUrl('KTT', 'card_car_ktt'),
  },
  {
    id: 'car-ivl',
    title: 'Car Hire — Ivalo Airport',
    category: 'cars',
    location: 'IVL',
    blurb: 'Saariselkä 30 min, Norwegian border 2h. Quietest roads in Lapland.',
    partner: 'economybookings',
    href: carsUrl('IVL', 'card_car_ivl'),
  },

  // ── Packages ───────────────────────────────────────────────────────
  {
    id: 'package-aurora-week',
    title: 'Aurora Week — DIY Package',
    category: 'packages',
    location: 'Saariselkä · Inari',
    blurb: 'Igloo + husky safari + aurora hunt + ice fishing. Each booked separately, prices live.',
    partner: 'getyourguide',
    href: gygDeepLink('lapland-l662/multi-day-trips-tc55', 'pkg_aurora_week'),
    flag: 'package',
  },
  {
    id: 'package-family-rovaniemi',
    title: 'Rovaniemi Family Break',
    category: 'packages',
    location: 'Rovaniemi',
    blurb: 'Santa Claus Village + reindeer farm + family hotel. Live availability + stays.',
    partner: 'getyourguide',
    href: gygDeepLink('rovaniemi-l2653', 'pkg_family_rovaniemi'),
    flag: 'package',
  },

  // ── Summer (kesä-sääntö) ───────────────────────────────────────────
  {
    id: 'summer-midnight-sun',
    title: 'Midnight Sun Stays',
    category: 'hotels',
    location: 'Inari · Utsjoki',
    blurb: '32 days when the sun never sets (Jun 6 – Jul 7). Lakeside cabins, live prices.',
    partner: 'hotels.com',
    href: hotelsUrl('Inari, Finland', 'card_summer_midnight_sun'),
    flag: 'summer',
  },
  {
    id: 'summer-hiking',
    title: 'Summer Hiking — Pallas-Yllästunturi',
    category: 'activities',
    location: 'Muonio · Kittilä',
    blurb: 'Cleanest air in Europe. Ruska peaks late August — light, golden, quiet.',
    partner: 'getyourguide',
    href: gygDeepLink('lapland-l662/hiking-tc14', 'card_summer_hiking'),
    flag: 'summer',
  },
];

export function getOffers(opts?: { category?: OfferCategory; flag?: OfferFlag; limit?: number }): Offer[] {
  let out = offers;
  if (opts?.category) out = out.filter((o) => o.category === opts.category);
  if (opts?.flag) out = out.filter((o) => o.flag === opts.flag);
  if (opts?.limit) out = out.slice(0, opts.limit);
  return out;
}

export function getEditorPicks(limit = 4): Offer[] {
  return offers.filter((o) => o.flag === 'editor-pick').slice(0, limit);
}

export function getLastMinute(limit = 6): Offer[] {
  return offers.filter((o) => o.flag === 'last-minute').slice(0, limit);
}

export function getSummerOffers(limit = 4): Offer[] {
  return offers.filter((o) => o.flag === 'summer').slice(0, limit);
}
