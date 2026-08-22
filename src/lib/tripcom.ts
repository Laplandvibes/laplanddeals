// Trip.com booking links - reitittyvat go.laplandvibes.com-Workerin kautta.
//
// MUUTOS 2026-08-22 (Vesan paatos). Tassa luki aiemmin: "Trip.com URLs DO NOT
// route through go.laplandvibes.com (that worker is CJ-only)." Se piti paikkansa
// 30.4.2026, mutta vanheni CJ-exitissa 23.7. Kommentti jai korjaamatta ja
// OPETTI OHITUSTA seuraaville: sama kuvio kopioitui koko verkostoon, joten
// lentoklikit eivat koskaan paatyneet D1-lokiin eivatka Command Centeriin,
// vaikka komissio kulki.
//
// Nyt kaikki menee /go/flights- ja /go/trains-reittien kautta:
//   - klikki kirjautuu D1:een (kumppani, sid, sivusto, maa, laite)
//   - kumppanitunnukset asetetaan Workerissa, joten ne eivat voi pudota pois
//     sivuston linkista huomaamatta
//   - kohde-URL on tavulleen sama kuin ennen (verifioitu livena)
//
// w         = lahdesivusto. Worker paattelisi sen muuten Referer-otsakkeesta,
//             joka katoaa some-sovellusselaimissa ja tiukalla referrer-policylla.
// trip_sid  = TAMAN sivuston oma Trip.com-SID. SID ei ole verkostossa yksi:
//             neljalla sivustolla on oma (Vesa lisannyt ne Trip.comin Sites-
//             hallintaan), muilla jaettu. Ilman tata parametria neljan sivuston
//             tuotto sulaisi Trip.comin raportissa yhdeksi riviksi.
//
// Paivamaarat jatetaan pois kun kutsuja ei niita anna: Worker tayttaa oletukset
// (+30/+34 vrk lennoille, +14 juna/bussille) KLIKIN hetkella. Ennen ne
// laskettiin renderoinnissa, joten prerenderoity sivu tarjosi vanhetessaan yha
// lahempana olevaa - pahimmillaan mennytta - paivaa.

const GO = 'https://go.laplandvibes.com/go';
const SITE_TAG = 'laplanddeals.com';
const TRIP_SID = '309472136';

/** Rakentaa Worker-linkin: tyhjat parametrit jatetaan pois, sid + w aina mukaan. */
function goUrl(route: 'flights' | 'trains' | 'hotels', params: Record<string, string>, sid: string): string {
  const u = new URL(`${GO}/${route}`);
  for (const [k, v] of Object.entries(params)) if (v) u.searchParams.set(k, v);
  u.searchParams.set('sid', sid);
  u.searchParams.set('w', SITE_TAG);
  if (route !== 'hotels') u.searchParams.set('trip_sid', TRIP_SID);
  return u.toString();
}

// LOCALE: 2026-05-16 — pass user locale to Trip.com so DE/FI users land on the
// local Trip.com flow (locale=de-DE / fi-FI). EN defaults to en-XX (multi-lang EN).
export type TripLang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';
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
  sv: 'sv-SE',
};

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
  const triptype = o.triptype ?? 'rt';
  return goUrl('flights', {
    dcity: o.from.toLowerCase(),
    acity: o.to.toLowerCase(),
    ddate: o.depart ?? '',
    triptype,
    rdate: triptype === 'rt' ? (o.returnDate ?? '') : '',
    class: 'y',
    quantity: '1',
    curr: 'EUR',
    locale: TRIP_LOCALE[o.lang ?? 'en'],
  }, o.sid);
}

export function buildTripFlightHome(sid: string, lang: TripLang = 'en'): string {
  return goUrl('flights', { locale: TRIP_LOCALE[lang] }, sid);
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
  // Hotellit kulkevat verkoston yhteisen /go/hotels-reitin kautta: se osaa
  // lisaksi ohjata suomenkieliset Sembolle (9 %) ja muut Trip.comille.
  return goUrl('hotels', { ss: o.city, locale: TRIP_LOCALE[o.lang ?? 'en'] }, o.sid);
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
  return goUrl('trains', {
    locale: TRIP_LOCALE[o.lang ?? 'en'],
    curr: 'EUR',
    departurecity: o.fromCity,
    arrivalcity: o.toCity,
    tripTab: o.tab ?? 'coach',
    departdate: o.depart ?? '',
  }, o.sid);
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
