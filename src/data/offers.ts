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
    title: 'Glass Igloos — Saariselkä',
    category: 'hotels',
    location: 'Saariselkä · Aurora belt',
    blurb: 'Roughly 30 glass igloos exist in the entire region. Christmas weeks book out by August — open Hotels.com to see what\'s left tonight.',
    partner: 'hotels.com',
    href: hotelsUrl('Saariselkä, Finland', 'card_igloo_saariselka'),
    flag: 'editor-pick',
  },
  {
    id: 'levi-ski',
    title: 'Levi Slope-Side',
    category: 'hotels',
    location: 'Levi · Kittilä',
    blurb: 'Ski-in / ski-out on Finland\'s biggest fell (43 slopes, 230 km tracks). End-of-season weeks (Mar 15 – Apr 12) usually still open at lower rates.',
    partner: 'hotels.com',
    href: hotelsUrl('Levi, Kittilä, Finland', 'card_levi_ski'),
    flag: 'last-minute',
  },
  {
    id: 'rovaniemi-hotels',
    title: 'Rovaniemi City Stays',
    category: 'hotels',
    location: 'Rovaniemi · Arctic Circle',
    blurb: '15 minutes from Santa Claus Village. Direct flights from Helsinki six times daily. Family rooms, aparthotels, design hotels.',
    partner: 'hotels.com',
    href: hotelsUrl('Rovaniemi, Finland', 'card_rovaniemi_city'),
  },
  {
    id: 'yllas-cabins',
    title: 'Ylläs Wilderness Cabins',
    category: 'hotels',
    location: 'Ylläs · Pallas-Yllästunturi NP',
    blurb: 'Quieter neighbour to Levi — same fells, half the crowd. Cleanest air in Europe according to WMO measurements (2017).',
    partner: 'hotels.com',
    href: hotelsUrl('Ylläs, Kolari, Finland', 'card_yllas_cabins'),
    flag: 'end-of-season',
  },
  {
    id: 'ruka-hotels',
    title: 'Ruka & Kuusamo',
    category: 'hotels',
    location: 'Ruka · Oulanka NP',
    blurb: 'The wild east — bear country, Karhunkierros trail, husky ranches, latest reliable snow in Finland (often into May).',
    partner: 'hotels.com',
    href: hotelsUrl('Ruka, Kuusamo, Finland', 'card_ruka_stays'),
  },
  {
    id: 'inari-stays',
    title: 'Inari · Utsjoki — Far North',
    category: 'hotels',
    location: '300 km above Arctic Circle',
    blurb: 'Above the aurora oval — highest visible-aurora rate in Finland. Sámi capital, no light pollution, two-lane road then nothing.',
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
    blurb: 'Drive your own 6-dog team. Most kennels run 12 sleds/day max — peak weekends fill 7-10 days out. Half-day to overnight cabins.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.husky,
    flag: 'editor-pick',
  },
  {
    id: 'aurora-hunts',
    title: 'Northern Lights Tours',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Aurora season Sept 15 – Apr 5. Photographer-led hunts, frozen-lake campfires, mobile cabins. Cancellation usually 24h before.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.aurora,
    flag: 'last-minute',
  },
  {
    id: 'snowmobile',
    title: 'Snowmobile Tours',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Wilderness trails, frozen rivers, Sámi reindeer-farm lunches. Drivers need a class-B licence; passenger sleds available.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.snowmobile,
  },
  {
    id: 'reindeer-tours',
    title: 'Reindeer Sleigh & Farms',
    category: 'activities',
    location: 'Rovaniemi · Inari',
    blurb: '~200 reindeer-herding co-operatives in Finland. Slow sleigh rides, fire-warmed kotas, Sámi families. Book early-morning slots — quietest light.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.reindeer,
  },
  {
    id: 'ice-fishing',
    title: 'Ice Fishing on Frozen Lakes',
    category: 'activities',
    location: 'Inari · Saariselkä',
    blurb: 'Lake Inari freezes 60-80 cm deep by January. Drill, drop, wait. Equipment + hot drinks + a guide who knows where the perch run.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.iceFishing,
    flag: 'end-of-season',
  },
  {
    id: 'day-trips',
    title: 'Lapland Day Trips',
    category: 'activities',
    location: 'Across Lapland',
    blurb: 'Stack three in 24 hours: snowshoe + smoke sauna + aurora hunt. Most run 4-6 hours each, with 30-min hotel transfers either side.',
    partner: 'getyourguide',
    href: GYG_CATEGORIES.daytrips,
  },

  // ── Flights ────────────────────────────────────────────────────────
  {
    id: 'flight-hel-rvn',
    title: 'Helsinki → Rovaniemi',
    category: 'flights',
    location: 'HEL · RVN · 1h 20m',
    blurb: '6 daily Finnair + Norwegian rotations. Cheapest fares typically 4-8 weeks out (€89-129 round-trip range when not Christmas).',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToRovaniemi,
    flag: 'last-minute',
  },
  {
    id: 'flight-hel-ktt',
    title: 'Helsinki → Kittilä (Levi)',
    category: 'flights',
    location: 'HEL · KTT · 1h 25m',
    blurb: 'Fastest way to Levi (15 min) and Ylläs (50 min). Finnair runs 2-4 daily in winter; route closes nearly entirely May–Aug.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToKittila,
  },
  {
    id: 'flight-hel-ivl',
    title: 'Helsinki → Ivalo (Saariselkä)',
    category: 'flights',
    location: 'HEL · IVL · 1h 35m',
    blurb: 'Northernmost airport in the EU (68.61°N). Gateway to Saariselkä (30 min) and Inari (40 min). Aurora oval starts here.',
    partner: 'trip.com',
    href: TRIP_FLIGHTS.helToIvalo,
  },
  {
    id: 'flight-hel-kao',
    title: 'Helsinki → Kuusamo (Ruka)',
    category: 'flights',
    location: 'HEL · KAO · 1h 25m',
    blurb: 'Best access to Ruka, Oulanka NP and the wild east. Late-season skiing — Ruka often holds snow into early May.',
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
    blurb: 'Studded tyres legal Nov 1 – Mar 31 (extendable). 4WD recommended. Aurora-chasing range — most ranches and viewpoints within 90 min.',
    partner: 'economybookings',
    href: carsUrl('RVN', 'card_car_rvn'),
    flag: 'last-minute',
  },
  {
    id: 'car-ktt',
    title: 'Car Hire — Kittilä Airport',
    category: 'cars',
    location: 'KTT',
    blurb: 'Levi 15 min, Ylläs 50 min. Winter tyres + chains often included; check inclusions before pickup if December.',
    partner: 'economybookings',
    href: carsUrl('KTT', 'card_car_ktt'),
  },
  {
    id: 'car-ivl',
    title: 'Car Hire — Ivalo Airport',
    category: 'cars',
    location: 'IVL',
    blurb: 'Saariselkä 30 min, Inari 40 min, Norwegian border 2h. Quietest roads in Lapland — entire E75 stretches without seeing another car.',
    partner: 'economybookings',
    href: carsUrl('IVL', 'card_car_ivl'),
  },

  // ── Packages ───────────────────────────────────────────────────────
  {
    id: 'package-aurora-week',
    title: 'Aurora Week — DIY Package',
    category: 'packages',
    location: 'Saariselkä · Inari',
    blurb: 'Glass igloo (3-4 nights) + husky safari + aurora hunt + ice fishing. Each booked separately at the partner\'s live rate. Stack saves over packaged tours.',
    partner: 'getyourguide',
    href: gygDeepLink('lapland-l662/multi-day-trips-tc55', 'pkg_aurora_week'),
    flag: 'package',
  },
  {
    id: 'package-family-rovaniemi',
    title: 'Rovaniemi Family Break',
    category: 'packages',
    location: 'Rovaniemi · Arctic Circle',
    blurb: 'Santa Claus Village + reindeer farm + family hotel. Christmas Day arrivals: book the village 2-3 months ahead — daytime visit slots fill first.',
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
    blurb: '32 days the sun never sets (Jun 6 – Jul 7 above 70°N). Lakeside cabin nights run 30-50% under December rates. Mosquitoes peak late June.',
    partner: 'hotels.com',
    href: hotelsUrl('Inari, Finland', 'card_summer_midnight_sun'),
    flag: 'summer',
  },
  {
    id: 'summer-hiking',
    title: 'Summer Hiking — Pallas-Yllästunturi',
    category: 'activities',
    location: 'Muonio · Kittilä',
    blurb: '102,000 ha national park. Cleanest air in Europe (WMO). Ruska peaks ~Sept 5-15 — dwarf birch turns gold in three days.',
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
