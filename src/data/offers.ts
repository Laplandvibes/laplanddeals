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
 * Optional `flag` is editorial framing (Last-minute / End-of-season / Summer)
 * not a marketing trick — set it where the underlying category genuinely
 * benefits from it (e.g. winter cabin nights in March = real end-of-season
 * window).
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
  /** Tailwind gradient class string for the card visual until AI image arrives. */
  gradient: string;
  /** lucide-react icon name; mapped in component. */
  icon: string;
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
    blurb: 'Heated glass igloos under the aurora belt. Live nightly prices on Hotels.com.',
    partner: 'hotels.com',
    href: hotelsUrl('Saariselkä, Finland', 'card_igloo_saariselka'),
    flag: 'editor-pick',
    gradient: 'from-[#1e3a8a] via-[#312e81] to-[#0F172A]',
    icon: 'Sparkles',
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
    gradient: 'from-[#0c4a6e] via-[#075985] to-[#0F172A]',
    icon: 'Mountain',
  },
  {
    id: 'rovaniemi-hotels',
    title: 'Rovaniemi City Stays',
    category: 'hotels',
    location: 'Rovaniemi',
    blurb: '15 minutes from Santa Claus Village. Compare hotels and aparthotels.',
    partner: 'hotels.com',
    href: hotelsUrl('Rovaniemi, Finland', 'card_rovaniemi_city'),
    gradient: 'from-[#7c2d12] via-[#9a3412] to-[#0F172A]',
    icon: 'Building',
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
    gradient: 'from-[#064e3b] via-[#065f46] to-[#0F172A]',
    icon: 'Trees',
  },
  {
    id: 'ruka-hotels',
    title: 'Ruka & Kuusamo Stays',
    category: 'hotels',
    location: 'Ruka',
    blurb: 'Wild east — Oulanka National Park, husky ranches, late-spring snow.',
    partner: 'hotels.com',
    href: hotelsUrl('Ruka, Kuusamo, Finland', 'card_ruka_stays'),
    gradient: 'from-[#1e3a8a] via-[#0f172a] to-[#0F172A]',
    icon: 'Snowflake',
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
    gradient: 'from-[#312e81] via-[#1e1b4b] to-[#0F172A]',
    icon: 'Compass',
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
    gradient: 'from-[#0c4a6e] via-[#0e7490] to-[#0F172A]',
    icon: 'Dog',
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
    gradient: 'from-[#10b981] via-[#0f766e] to-[#0F172A]',
    icon: 'Stars',
  },
  {
    id: 'snowmobile',
    title: 'Snowmobile Tours',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Wilderness trails, frozen rivers, Sámi reindeer-farm lunches.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.snowmobile,
    gradient: 'from-[#7c2d12] via-[#92400e] to-[#0F172A]',
    icon: 'Zap',
  },
  {
    id: 'reindeer-tours',
    title: 'Reindeer Sleigh & Farm Visits',
    category: 'activities',
    location: 'Rovaniemi · Inari',
    blurb: 'Slow, quiet, ancient — sleigh rides and farm visits with Sámi families.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.reindeer,
    gradient: 'from-[#7f1d1d] via-[#991b1b] to-[#0F172A]',
    icon: 'Heart',
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
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#0F172A]',
    icon: 'Fish',
  },
  {
    id: 'day-trips',
    title: 'Lapland Day Trips',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Half-day excursions you can stack: snowshoe + sauna + aurora in 24 hours.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.daytrips,
    gradient: 'from-[#1e1b4b] via-[#312e81] to-[#0F172A]',
    icon: 'Route',
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
    gradient: 'from-[#0c4a6e] via-[#0369a1] to-[#0F172A]',
    icon: 'Plane',
  },
  {
    id: 'flight-hel-ktt',
    title: 'Helsinki → Kittilä (Levi)',
    category: 'flights',
    location: 'HEL · KTT',
    blurb: 'The fast way to Levi & Ylläs. 1h 25m direct.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToKittila,
    gradient: 'from-[#7c2d12] via-[#9a3412] to-[#0F172A]',
    icon: 'Plane',
  },
  {
    id: 'flight-hel-ivl',
    title: 'Helsinki → Ivalo (Saariselkä)',
    category: 'flights',
    location: 'HEL · IVL',
    blurb: 'Northernmost airport in the EU. Gateway to Saariselkä & Inari.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToIvalo,
    gradient: 'from-[#312e81] via-[#1e1b4b] to-[#0F172A]',
    icon: 'Plane',
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
    gradient: 'from-[#064e3b] via-[#065f46] to-[#0F172A]',
    icon: 'Plane',
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
    gradient: 'from-[#1e293b] via-[#0f172a] to-[#0F172A]',
    icon: 'Car',
  },
  {
    id: 'car-ktt',
    title: 'Car Hire — Kittilä Airport',
    category: 'cars',
    location: 'KTT',
    blurb: 'Levi 15 min, Ylläs 50 min. Winter tyres included.',
    partner: 'economybookings',
    href: carsUrl('KTT', 'card_car_ktt'),
    gradient: 'from-[#1e3a8a] via-[#1e293b] to-[#0F172A]',
    icon: 'Car',
  },
  {
    id: 'car-ivl',
    title: 'Car Hire — Ivalo Airport',
    category: 'cars',
    location: 'IVL',
    blurb: 'Saariselkä 30 min, Norwegian border 2h. Quietest roads in Lapland.',
    partner: 'economybookings',
    href: carsUrl('IVL', 'card_car_ivl'),
    gradient: 'from-[#312e81] via-[#1e1b4b] to-[#0F172A]',
    icon: 'Car',
  },

  // ── Packages (linked to GYG multi-day + Hotels.com city stays) ────
  {
    id: 'package-aurora-week',
    title: 'Aurora Week — DIY Package',
    category: 'packages',
    location: 'Saariselkä · Inari',
    blurb: 'Igloo + husky safari + aurora hunt + ice fishing. Each booked separately, prices live.',
    partner: 'getyourguide',
    href: gygDeepLink('lapland-l662/multi-day-trips-tc55', 'pkg_aurora_week'),
    flag: 'package',
    gradient: 'from-[#10b981] via-[#0f766e] to-[#0F172A]',
    icon: 'Calendar',
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
    gradient: 'from-[#9a3412] via-[#7c2d12] to-[#0F172A]',
    icon: 'Users',
  },

  // ── Summer offers (kesä-sääntö) ────────────────────────────────────
  {
    id: 'summer-midnight-sun',
    title: 'Midnight Sun Stays',
    category: 'hotels',
    location: 'Inari · Utsjoki',
    blurb: '32 days when the sun never sets (Jun 6 – Jul 7). Lakeside cabins, live prices.',
    partner: 'hotels.com',
    href: hotelsUrl('Inari, Finland', 'card_summer_midnight_sun'),
    flag: 'summer',
    gradient: 'from-[#facc15] via-[#f97316] to-[#7c2d12]',
    icon: 'Sun',
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
    gradient: 'from-[#facc15] via-[#84cc16] to-[#064e3b]',
    icon: 'Mountain',
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
