// Trip.com affiliate deep-link builders.
// Allianceid 8175308, SID 309472136, trip_sub1=laplanddeals.com
// Synced 2026-05-05 from laplandvibes/src/lib/tripcom.ts

const TRIP_CONFIG = {
  allianceId: '8175308',
  defaultSiteId: '309472136',
  sourceTag: 'laplanddeals.com',
} as const;

// LOCALE: 2026-05-16 — pass user locale to Trip.com so DE/FI users land on the
// local Trip.com flow (locale=de-DE / fi-FI). EN defaults to en-XX (multi-lang EN).
export type TripLang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl';
const TRIP_LOCALE: Record<TripLang, string> = {
  en: 'en-XX',
  fi: 'fi-FI',
  de: 'de-DE',
  ja: 'ja-JP',
  es: 'es-ES',
  'pt-BR': 'pt-BR',
  'zh-CN': 'zh-CN',
  ko: 'ko-KR',
  fr: 'fr-FR',
  it: 'it-IT',
  nl: 'nl-NL',
};

function defaultDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().slice(0, 10);
}

function attachAffiliateParams(url: URL, sid: string): void {
  url.searchParams.set('Allianceid', TRIP_CONFIG.allianceId);
  url.searchParams.set('SID', TRIP_CONFIG.defaultSiteId);
  url.searchParams.set('trip_sub1', TRIP_CONFIG.sourceTag);
  url.searchParams.set('trip_sub2', sid);
}

// ─── Flights ────────────────────────────────────────────────────────────

export interface TripFlightOpts {
  from: string;
  to: string;
  sid: string;
  depart?: string;
  returnDate?: string;
  triptype?: 'rt' | 'ow';
  /** Site language — sets Trip.com locale param. */
  lang?: TripLang;
}

export function buildTripFlightUrl(o: TripFlightOpts): string {
  const url = new URL('https://www.trip.com/flights/showfarefirst');
  const triptype = o.triptype ?? 'rt';
  const depart = o.depart ?? defaultDate(30);
  url.searchParams.set('dcity', o.from.toLowerCase());
  url.searchParams.set('acity', o.to.toLowerCase());
  url.searchParams.set('ddate', depart);
  url.searchParams.set('triptype', triptype);
  if (triptype === 'rt') {
    url.searchParams.set('rdate', o.returnDate ?? defaultDate(34));
  }
  url.searchParams.set('class', 'y');
  url.searchParams.set('quantity', '1');
  url.searchParams.set('curr', 'EUR');
  url.searchParams.set('locale', TRIP_LOCALE[o.lang ?? 'en']);
  attachAffiliateParams(url, o.sid);
  return url.toString();
}

export function buildTripFlightHome(sid: string, lang: TripLang = 'en'): string {
  const url = new URL('https://www.trip.com/flights');
  url.searchParams.set('locale', TRIP_LOCALE[lang]);
  attachAffiliateParams(url, sid);
  return url.toString();
}

// ─── Hotels ─────────────────────────────────────────────────────────────

export interface TripHotelOpts {
  city: string;
  sid: string;
  /** Site language — sets Trip.com locale param. */
  lang?: TripLang;
}

/** Trip.com hotel city search — fallback when Hotels.com (CJ) doesn't cover. */
export function buildTripHotelUrl(o: TripHotelOpts): string {
  const url = new URL('https://www.trip.com/hotels/list');
  url.searchParams.set('city', o.city);
  url.searchParams.set('locale', TRIP_LOCALE[o.lang ?? 'en']);
  url.searchParams.set('curr', 'EUR');
  attachAffiliateParams(url, o.sid);
  return url.toString();
}

// ─── Buses & Trains ─────────────────────────────────────────────────────

export interface TripTransportOpts {
  fromCity: string;
  toCity: string;
  sid: string;
  tab?: 'coach' | 'train';
  depart?: string;
  /** Site language — sets Trip.com locale param. */
  lang?: TripLang;
}

export function buildTripTransportUrl(o: TripTransportOpts): string {
  const url = new URL('https://www.trip.com/trains/list');
  url.searchParams.set('locale', TRIP_LOCALE[o.lang ?? 'en']);
  url.searchParams.set('curr', 'EUR');
  url.searchParams.set('departurecity', o.fromCity);
  url.searchParams.set('arrivalcity', o.toCity);
  url.searchParams.set('tripTab', o.tab ?? 'coach');
  url.searchParams.set('departdate', o.depart ?? defaultDate(14));
  url.searchParams.set('hidadultnum', '1');
  url.searchParams.set('hidinfantnum', '0');
  url.searchParams.set('hidoldnum', '0');
  attachAffiliateParams(url, o.sid);
  return url.toString();
}

// ─── Common pre-built deep links ────────────────────────────────────────

const PAIRS = {
  hel_rvn: { from: 'hel', to: 'rvn', fromCity: 'Helsinki', toCity: 'Rovaniemi' },
  hel_ktt: { from: 'hel', to: 'ktt', fromCity: 'Helsinki', toCity: 'Kittilä' },
  hel_ivl: { from: 'hel', to: 'ivl', fromCity: 'Helsinki', toCity: 'Ivalo' },
  hel_oul: { from: 'hel', to: 'oul', fromCity: 'Helsinki', toCity: 'Oulu' },
  hel_kao: { from: 'hel', to: 'kao', fromCity: 'Helsinki', toCity: 'Kuusamo' },
  hel_kem: { from: 'hel', to: 'kem', fromCity: 'Helsinki', toCity: 'Kemi' },
} as const;

export const TRIP_FLIGHTS = (lang: TripLang = 'en') => ({
  helToRovaniemi: buildTripFlightUrl({ ...PAIRS.hel_rvn, sid: 'flight_hel_rvn', lang }),
  helToKittila:   buildTripFlightUrl({ ...PAIRS.hel_ktt, sid: 'flight_hel_ktt', lang }),
  helToIvalo:     buildTripFlightUrl({ ...PAIRS.hel_ivl, sid: 'flight_hel_ivl', lang }),
  helToOulu:      buildTripFlightUrl({ ...PAIRS.hel_oul, sid: 'flight_hel_oul', lang }),
  helToKuusamo:   buildTripFlightUrl({ ...PAIRS.hel_kao, sid: 'flight_hel_kao', lang }),
  helToKemi:      buildTripFlightUrl({ ...PAIRS.hel_kem, sid: 'flight_hel_kem', lang }),
});

export const TRIP_HOTELS = (lang: TripLang = 'en') => ({
  rovaniemi:   buildTripHotelUrl({ city: 'Rovaniemi',   sid: 'hotel_rovaniemi', lang }),
  levi:        buildTripHotelUrl({ city: 'Levi',        sid: 'hotel_levi', lang }),
  saariselka:  buildTripHotelUrl({ city: 'Saariselkä',  sid: 'hotel_saariselka', lang }),
  yllas:       buildTripHotelUrl({ city: 'Ylläs',       sid: 'hotel_yllas', lang }),
  inari:       buildTripHotelUrl({ city: 'Inari',       sid: 'hotel_inari', lang }),
  ruka:        buildTripHotelUrl({ city: 'Ruka',        sid: 'hotel_ruka', lang }),
});
