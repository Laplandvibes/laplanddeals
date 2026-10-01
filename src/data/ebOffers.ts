// Real offers captured from the EconomyBookings comparison results at the
// Rovaniemi (plc 61909), Kittilä (plc 61893) and Ivalo (plc 615) airports on
// 2026-09-26, via the live results page. Totals are EUR for 4 rental days
// including taxes/fees, exactly as shown. Same rows as
// laplandcarrental-new/src/data/ebOffers.ts: both files were written by one run
// of the Windows task "LV Autohinnat" (scripts/write-eb-prices.mjs in
// laplandcarrental-new). The task ran weekly from 2026-09-26 and has been
// stopped since 2026-10-01: the results page now answers automated browsers
// with a bot check (HTTP 403), and that check is not worked around. The rows
// below are the last read. Do not edit rows by hand, never invent.
//
// Freshness (src/data/ebFreshness.ts, checked in the browser on every render):
// LiveCars.tsx shows a figure only while the read is at most 7 days old, and
// only for windows whose pick-up day is still ahead, so the page never shows an
// old price or advertises a hire that cannot be booked. Without a figure it
// shows the classes with their search links.

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

export const EB_CHECKED_AT = '2026-09-26'

export const EB_AIRPORTS: EbAirport[] = ['RVN', 'KTT', 'IVL']

export const EB_WINDOWS: EbWindow[] = [
  { key: 'w1', pickup: '2026-10-23', dropoff: '2026-10-27' },
  { key: 'w2', pickup: '2026-12-11', dropoff: '2026-12-15' },
]

export const EB_CLASS_KEYS = ['mini', 'economy', 'compact', 'midsize', 'estate', 'suv'] as const

export const EB_OFFERS: EbOffer[] = [
  // ── RVN · Oct 23–27 ──
  { window: 'w1', airport: 'RVN', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 113.38 },
  { window: 'w1', airport: 'RVN', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 121.50 },
  { window: 'w1', airport: 'RVN', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 133.34 },
  { window: 'w1', airport: 'RVN', classIdx: 0, model: 'Kia Picanto',                   supplier: 'Autounion',         seats: '4', gear: 'M', total: 135.73 },
  { window: 'w1', airport: 'RVN', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 158.74 },
  { window: 'w1', airport: 'RVN', classIdx: 3, model: 'VOLVO V40',                     supplier: 'Alamo',             seats: '5', gear: 'A', total: 168.16 },
  // ── RVN · Dec 11–15 ──
  { window: 'w2', airport: 'RVN', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 300.03 },
  { window: 'w2', airport: 'RVN', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 310.94 },
  { window: 'w2', airport: 'RVN', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 338.87 },
  { window: 'w2', airport: 'RVN', classIdx: 0, model: 'Volkswagen Up',                 supplier: 'Budget',            seats: '4', gear: 'M', total: 445.98 },
  { window: 'w2', airport: 'RVN', classIdx: 3, model: 'Skoda Octavia',                 supplier: 'Budget',            seats: '5', gear: 'A', total: 503.98 },
  { window: 'w2', airport: 'RVN', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 569.04 },
  // ── KTT · Oct 23–27 ──
  { window: 'w1', airport: 'KTT', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 137.93 },
  { window: 'w1', airport: 'KTT', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 148.97 },
  { window: 'w1', airport: 'KTT', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 149.56 },
  { window: 'w1', airport: 'KTT', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 157.18 },
  { window: 'w1', airport: 'KTT', classIdx: 0, model: 'FIAT 500 1.0',                  supplier: 'keddy by Europcar', seats: '4', gear: 'M', total: 161.74 },
  { window: 'w1', airport: 'KTT', classIdx: 3, model: 'Nissan Qashqai',                supplier: 'Green Motion',      seats: '5', gear: 'A', total: 166.12 },
  // ── KTT · Dec 11–15 ──
  { window: 'w2', airport: 'KTT', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 369.22 },
  { window: 'w2', airport: 'KTT', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 387.86 },
  { window: 'w2', airport: 'KTT', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 420.26 },
  { window: 'w2', airport: 'KTT', classIdx: 0, model: 'Volkswagen Up',                 supplier: 'Budget',            seats: '4', gear: 'M', total: 445.98 },
  { window: 'w2', airport: 'KTT', classIdx: 3, model: 'Skoda Octavia',                 supplier: 'Budget',            seats: '5', gear: 'A', total: 503.98 },
  { window: 'w2', airport: 'KTT', classIdx: 5, model: 'Volkswagen T-Cross',            supplier: 'Green Motion',      seats: '5', gear: 'M', total: 570.07 },
  // ── IVL · Oct 23–27 ──
  { window: 'w1', airport: 'IVL', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 154.01 },
  { window: 'w1', airport: 'IVL', classIdx: 0, model: 'FIAT 500 1.0',                  supplier: 'keddy by Europcar', seats: '4', gear: 'M', total: 161.74 },
  { window: 'w1', airport: 'IVL', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 178.26 },
  { window: 'w1', airport: 'IVL', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 186.87 },
  { window: 'w1', airport: 'IVL', classIdx: 5, model: 'Toyota Yaris Cross Hybrid',     supplier: 'Green Motion',      seats: '5', gear: 'A', total: 190.42 },
  { window: 'w1', airport: 'IVL', classIdx: 3, model: 'VOLKSWAGEN T-ROC 1.5',          supplier: 'keddy by Europcar', seats: '5', gear: 'A', total: 233.34 },
  // ── IVL · Dec 11–15 ──
  { window: 'w2', airport: 'IVL', classIdx: 1, model: 'Volkswagen Polo',               supplier: 'Green Motion',      seats: '5', gear: 'M', total: 368.97 },
  { window: 'w2', airport: 'IVL', classIdx: 4, model: 'Volkswagen Golf Station Wagon', supplier: 'Green Motion',      seats: '5', gear: 'A', total: 393.57 },
  { window: 'w2', airport: 'IVL', classIdx: 2, model: 'Volkswagen Golf',               supplier: 'Budget',            seats: '5', gear: 'A', total: 438.99 },
  { window: 'w2', airport: 'IVL', classIdx: 0, model: 'Volkswagen Up',                 supplier: 'Budget',            seats: '4', gear: 'M', total: 445.98 },
  { window: 'w2', airport: 'IVL', classIdx: 3, model: 'Skoda Octavia',                 supplier: 'Budget',            seats: '5', gear: 'A', total: 503.98 },
  { window: 'w2', airport: 'IVL', classIdx: 5, model: 'Toyota Yaris Cross Hybrid',     supplier: 'Green Motion',      seats: '5', gear: 'A', total: 614.24 },
]
