// Real offers captured from the EconomyBookings comparison results at the
// Rovaniemi (plc 61909), Kittilä (plc 61893) and Ivalo (plc 615) airports on
// 2026-09-02, via the live results page. Totals are EUR for 4 rental days
// including taxes/fees, exactly as shown. Same dataset as
// laplandcarrental-new/src/data/ebOffers.ts (source of truth for refreshes):
// re-run the same searches there and copy the rows — never invent.
//
// 🔴 Vanhenemisvahti: LiveCars.tsx renders only windows whose pick-up date is
// still in the future. A window that has passed disappears by itself, so the
// page can never advertise a hire that cannot be booked (app lesson 24.8.2026).

export type EbAirport = 'RVN' | 'KTT' | 'IVL'

export interface EbWindow {
  key: 'w1' | 'w2'
  pickup: string
  dropoff: string
}

export interface EbOffer {
  window: 'w1' | 'w2'
  airport: EbAirport
  /** Index into copy live.cars.classNames (0 mini … 5 suv) */
  classIdx: number
  model: string
  supplier: string
  seats: string
  gear: 'M' | 'A'
  /** EUR total for the 4-day window, as captured */
  total: number
}

export const EB_CHECKED_AT = '2026-09-02'

export const EB_AIRPORTS: EbAirport[] = ['RVN', 'KTT', 'IVL']

export const EB_WINDOWS: EbWindow[] = [
  { key: 'w1', pickup: '2026-10-23', dropoff: '2026-10-27' },
  { key: 'w2', pickup: '2026-12-11', dropoff: '2026-12-15' },
]

export const EB_CLASS_KEYS = ['mini', 'economy', 'compact', 'midsize', 'estate', 'suv'] as const

export const EB_OFFERS: EbOffer[] = [
  // ── RVN · Oct 23–27 ──
  { window: 'w1', airport: 'RVN', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 148.68 },
  { window: 'w1', airport: 'RVN', classIdx: 0, model: 'Fiat 500 1.0',                  supplier: 'keddy by Europcar', seats: '4', gear: 'M', total: 152.81 },
  { window: 'w1', airport: 'RVN', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Alamo',             seats: '5', gear: 'M', total: 172.04 },
  { window: 'w1', airport: 'RVN', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 172.09 },
  { window: 'w1', airport: 'RVN', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 175.07 },
  { window: 'w1', airport: 'RVN', classIdx: 3, model: 'Nissan Qashqai',                supplier: 'Green Motion',      seats: '5', gear: 'A', total: 195.80 },
  // ── RVN · Dec 11–15 ──
  { window: 'w2', airport: 'RVN', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 321.01 },
  { window: 'w2', airport: 'RVN', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 327.49 },
  { window: 'w2', airport: 'RVN', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 330.79 },
  { window: 'w2', airport: 'RVN', classIdx: 0, model: 'Volkswagen Up',                 supplier: 'Budget',            seats: '4', gear: 'M', total: 403.38 },
  { window: 'w2', airport: 'RVN', classIdx: 3, model: 'Volvo V40',                     supplier: 'Alamo',             seats: '5', gear: 'A', total: 411.81 },
  { window: 'w2', airport: 'RVN', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 448.78 },
  // ── KTT · Oct 23–27 ──
  { window: 'w1', airport: 'KTT', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 142.93 },
  { window: 'w1', airport: 'KTT', classIdx: 0, model: 'Fiat 500 1.0',                  supplier: 'keddy by Europcar', seats: '4', gear: 'M', total: 152.81 },
  { window: 'w1', airport: 'KTT', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 154.87 },
  { window: 'w1', airport: 'KTT', classIdx: 3, model: 'Nissan Qashqai',                supplier: 'Green Motion',      seats: '5', gear: 'A', total: 172.66 },
  { window: 'w1', airport: 'KTT', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 174.67 },
  { window: 'w1', airport: 'KTT', classIdx: 4, model: 'Hyundai i30 Wagon 1.5',         supplier: 'keddy by Europcar', seats: '5', gear: 'M', total: 217.62 },
  // ── KTT · Dec 11–15 ──
  { window: 'w2', airport: 'KTT', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 369.60 },
  { window: 'w2', airport: 'KTT', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Budget',            seats: '5', gear: 'A', total: 397.08 },
  { window: 'w2', airport: 'KTT', classIdx: 0, model: 'Volkswagen Up',                 supplier: 'Budget',            seats: '4', gear: 'M', total: 403.38 },
  { window: 'w2', airport: 'KTT', classIdx: 3, model: 'Skoda Octavia',                 supplier: 'Budget',            seats: '5', gear: 'A', total: 455.58 },
  { window: 'w2', airport: 'KTT', classIdx: 4, model: 'Skoda Octavia Estate',          supplier: 'Budget',            seats: '5', gear: 'A', total: 480.78 },
  { window: 'w2', airport: 'KTT', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 792.40 },
  // ── IVL · Oct 23–27 ──
  { window: 'w1', airport: 'IVL', classIdx: 0, model: 'Fiat 500 1.0',                  supplier: 'keddy by Europcar', seats: '4', gear: 'M', total: 152.81 },
  { window: 'w1', airport: 'IVL', classIdx: 1, model: 'Nissan Micra 1.0',              supplier: 'keddy by Europcar', seats: '5', gear: 'M', total: 153.42 },
  { window: 'w1', airport: 'IVL', classIdx: 2, model: 'Volkswagen Golf 1.2',           supplier: 'keddy by Europcar', seats: '5', gear: 'M', total: 176.22 },
  { window: 'w1', airport: 'IVL', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 204.01 },
  { window: 'w1', airport: 'IVL', classIdx: 3, model: 'Volkswagen T-Roc 1.5',          supplier: 'keddy by Europcar', seats: '5', gear: 'A', total: 219.43 },
  { window: 'w1', airport: 'IVL', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 232.39 },
  // ── IVL · Dec 11–15 ──
  { window: 'w2', airport: 'IVL', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Budget',            seats: '5', gear: 'A', total: 397.08 },
  { window: 'w2', airport: 'IVL', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Budget',            seats: '5', gear: 'M', total: 403.38 },
  { window: 'w2', airport: 'IVL', classIdx: 0, model: 'Volkswagen Up',                 supplier: 'Budget',            seats: '4', gear: 'M', total: 403.38 },
  { window: 'w2', airport: 'IVL', classIdx: 3, model: 'Skoda Octavia',                 supplier: 'Budget',            seats: '5', gear: 'A', total: 455.58 },
  { window: 'w2', airport: 'IVL', classIdx: 4, model: 'Skoda Octavia Estate',          supplier: 'Budget',            seats: '5', gear: 'A', total: 480.78 },
  { window: 'w2', airport: 'IVL', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 1037.82 },
]
