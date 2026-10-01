/**
 * When a captured EconomyBookings price may still be shown.
 *
 * A total read from the comparison is shown on the day it was read and on the six days after
 * it (calendar days in Finland), never longer. After that the cards and the table drop the
 * figure and keep what does not age: the class, what it suits and the search link. The check
 * runs in the browser on every render, so an old build cannot keep showing an old price.
 *
 * Search windows whose pick-up day has passed are dropped too: a search for a past date cannot
 * be booked.
 *
 * Same file in laplandcarrental-new and laplanddeals-new (both show the same rows). Pure and
 * import-free, so the Node tests can load it directly.
 */

export const EB_PRICE_MAX_AGE_DAYS = 7

/** The calendar day in Finland for an instant, as YYYY-MM-DD. */
export function helsinkiDay(now: Date): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Helsinki',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return `${get('year')}-${get('month')}-${get('day')}`
}

/** Whole days from one YYYY-MM-DD to another (negative when `to` is earlier). */
export function daysBetween(from: string, to: string): number {
  return Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86400000)
}

/** True while a price read on `checkedAt` (YYYY-MM-DD) may be shown. A read dated in the
 *  future (a wrong clock) counts as not fresh. */
export function ebPricesFresh(checkedAt: string, now: Date = new Date()): boolean {
  const age = daysBetween(checkedAt, helsinkiDay(now))
  return age >= 0 && age < EB_PRICE_MAX_AGE_DAYS
}

/** The last calendar day (YYYY-MM-DD, Finland) on which a read from `checkedAt` shows prices. */
export function ebPricesLastDay(checkedAt: string): string {
  const d = new Date(Date.parse(`${checkedAt}T00:00:00Z`) + (EB_PRICE_MAX_AGE_DAYS - 1) * 86400000)
  return d.toISOString().slice(0, 10)
}

/** The windows whose pick-up day is today or later (Finland). */
export function futureWindows<T extends { pickup: string }>(windows: readonly T[], now: Date = new Date()): T[] {
  const today = helsinkiDay(now)
  return windows.filter((w) => w.pickup >= today)
}
