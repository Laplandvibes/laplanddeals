// Writes src/data/topActivities.ts: the GetYourGuide tours that readers across the LaplandVibes
// sites clicked through to most in the last 30 days (Vesa 2026-09-26: "tehdään 1").
//
//   node scripts/write-top-activities.mjs            read the click log, verify, write the file
//   node scripts/write-top-activities.mjs --dry-run  same, but print instead of writing
//   node scripts/write-top-activities.mjs --check    verify the COMMITTED ids still render as themselves
//
// Run weekly by the Windows task «LV Katsotuimmat retket» (C:\Users\pesol\scripts\katsotuimmat\),
// which commits and pushes; the site's CI publishes. Do not edit the data file by hand.
//
// Why a list of our own and not GetYourGuide's "booked 27 times yesterday": GYG gives affiliates no
// booking counts (Partner API spec read 26.9.2026: only `bestseller` / `likely_to_sell_out` flags),
// and a copied scarcity figure is stale the moment it is stored (UCPD Annex I no. 7). Our own click
// log is true on the day it is read, so the section says what it is: most-VIEWED, with the date.
//
// Source: go.laplandvibes.com/_stats (token-guarded; bot=0 rows only). Only the tour ids and the
// read date go into the site: click volumes stay private, which is why /_stats has a token at all.
//
// 🔴 Two measured GYG widget traps this script exists to catch (26.9.2026):
//   1. Without data-gyg-number-of-items equal to the id count, the widget pads the list with tours
//      of its own choosing (tour_ids=6 ids, no count → 10 cards, 4 of them not ours).
//   2. An id GYG no longer serves is silently REPLACED by a GYG pick (654057,<bad>,492901 → the
//      third card was 404461). A filler under "most-viewed" would be a false claim, so every id is
//      verified against the widget's own server-rendered frame before it is written.
//   The widget also ignores the order of tour_ids, so the section never shows a rank.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src/data/topActivities.ts');
const STATS = 'https://go.laplandvibes.com/_stats';
const TOKEN_FALLBACK = 'C:/Users/pesol/projects/command-center/command-center-sites/partners-customers.html';
const WIDGET = 'https://widget.getyourguide.com/default/activities.frame';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36';

const WINDOW_DAYS = 30;
const WANT = 6;
/** A tour needs this many clicks in the window to be called one of the most viewed. */
const MIN_CLICKS = 5;
/** Fewer verified tours than this and the file is written empty: the section hides itself. */
const MIN_TOURS = 3;

const args = new Set(process.argv.slice(2));
const DRY = args.has('--dry-run');
const CHECK = args.has('--check');
const today = new Date().toISOString().slice(0, 10);

function token() {
  if (process.env.LV_STATS_TOKEN) return process.env.LV_STATS_TOKEN.trim();
  if (existsSync(TOKEN_FALLBACK)) {
    const m = readFileSync(TOKEN_FALLBACK, 'utf8').match(/_stats\?token=([^&'"\s]+)/);
    if (m) return m[1];
  }
  throw new Error('LV_STATS_TOKEN puuttuu (eikä Command Centerin partners-customers.html:ssa ole _stats-tokenia)');
}

/** Tour clicks per GYG tour id, most first. Paths look like `sirkka-l139331/levi-…-t654057`. */
async function readClicks() {
  const r = await fetch(`${STATS}?days=${WINDOW_DAYS}&token=${encodeURIComponent(token())}`, { headers: { accept: 'application/json' } });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error || !Array.isArray(j.topActivities)) throw new Error(`/_stats ${r.status}: ${j.error ?? 'topActivities puuttuu'}`);
  const byId = new Map();
  for (const { slug, n } of j.topActivities) {
    const m = String(slug).split('?')[0].replace(/\/+$/, '').match(/-t(\d+)$/);
    if (m) byId.set(Number(m[1]), (byId.get(Number(m[1])) ?? 0) + Number(n));
  }
  return [...byId].map(([id, n]) => ({ id, n })).sort((a, b) => b.n - a.n || a.id - b.id);
}

/** The ids GYG's widget actually renders for this request (its server-rendered frame, first-seen order). */
async function widgetIds(ids) {
  const u = new URL(WIDGET);
  u.search = new URLSearchParams({ widget: 'activities', partner_id: 'VRMKD7N', locale_code: 'en-US', cmp: 'lv_laplanddeals_verify', tour_ids: ids.join(','), number_of_items: String(ids.length) }).toString();
  const r = await fetch(u, { headers: { 'user-agent': UA, accept: 'text/html' } });
  if (!r.ok) throw new Error(`GYG-widget ${r.status}`);
  const html = await r.text();
  return [...new Set([...html.matchAll(/[?&]et=(\d+)/g)].map((m) => Number(m[1])))];
}

/** Keep the ids GYG renders as themselves; pull replacements from the queue until WANT or empty. */
async function verify(candidates) {
  const queue = [...candidates];
  const kept = [];
  const dropped = [];
  for (let round = 0; round < 5 && kept.length < WANT && queue.length; round++) {
    const batch = [...kept, ...queue.splice(0, WANT - kept.length)];
    const shown = new Set(await widgetIds(batch));
    kept.length = 0;
    for (const id of batch) (shown.has(id) ? kept : dropped).push(id);
  }
  return { kept, dropped };
}

function render(ids) {
  return `// GENERATED by scripts/write-top-activities.mjs (weekly Windows task «LV Katsotuimmat retket»).
// Do not edit by hand: the next run overwrites it.
//
// GetYourGuide tours that readers across the LaplandVibes sites clicked through to most in the
// ${WINDOW_DAYS} days to the date below (go.laplandvibes.com click log, bots excluded), each verified to
// render as itself in GYG's widget. Click counts are deliberately not stored: the log is private.
// The widget ignores this order, so the page never shows a rank.

export const TOP_VIEWED_CHECKED_AT = '${today}';
export const TOP_VIEWED_WINDOW_DAYS = ${WINDOW_DAYS};
export const TOP_VIEWED_TOUR_IDS: readonly number[] = [${ids.join(', ')}];
`;
}

async function check() {
  const src = readFileSync(OUT, 'utf8');
  const ids = (src.match(/TOP_VIEWED_TOUR_IDS[^=]*=\s*\[([^\]]*)\]/)?.[1] ?? '').split(',').map((s) => Number(s.trim())).filter(Boolean);
  const date = src.match(/TOP_VIEWED_CHECKED_AT = '([\d-]+)'/)?.[1];
  if (!ids.length) { console.log(`write-top-activities --check: tyhjä lista (${date}) — osio piilossa`); return; }
  const shown = await widgetIds(ids);
  const missing = ids.filter((id) => !shown.includes(id));
  const extra = shown.filter((id) => !ids.includes(id));
  if (missing.length || extra.length) {
    console.log(`⚠️ GYG ei näytä kaikkia: puuttuu ${missing.join(',') || '-'}, tilalla ${extra.join(',') || '-'} (lista ${date})`);
    process.exitCode = 1;
    return;
  }
  console.log(`write-top-activities --check: ${ids.length}/${ids.length} retkeä näkyy omana itsenään (lista ${date})`);
}

async function main() {
  if (CHECK) return check();
  const clicks = await readClicks();
  const eligible = clicks.filter((c) => c.n >= MIN_CLICKS);
  const { kept, dropped } = await verify(eligible.map((c) => c.id));
  const ids = kept.length >= MIN_TOURS ? kept.slice(0, WANT) : [];
  const n = new Map(clicks.map((c) => [c.id, c.n]));

  console.log(`write-top-activities: ${WINDOW_DAYS} pv, ${clicks.length} retkeä klikkilokissa, ${eligible.length} vähintään ${MIN_CLICKS} klikillä`);
  for (const id of ids) console.log(`  t${id}  ${n.get(id)} klikkiä`);
  if (dropped.length) console.log(`⚠️ GYG ei näyttänyt näitä omana itsenään, jätetty pois: ${dropped.map((id) => `t${id}`).join(', ')}`);
  if (!ids.length) console.log(`⚠️ vain ${kept.length} kelvollista retkeä (< ${MIN_TOURS}) — lista kirjoitetaan tyhjänä, osio piiloutuu`);

  const out = render(ids);
  if (DRY) { console.log(`--- ${OUT} (dry-run) ---\n${out}`); return; }
  writeFileSync(OUT, out, 'utf8');
  console.log(`kirjoitettu: src/data/topActivities.ts (${ids.length} retkeä, ${today})`);
}

await main();
