// node --test scripts/eb-freshness.test.mjs
// When LiveCars may show a captured EconomyBookings price (src/data/ebFreshness.ts, the same
// file as in laplandcarrental-new), and the copy it shows without one, in all 12 languages.
// Node 22.18+/23.6+ loads the .ts module directly (types are stripped).
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { EB_PRICE_MAX_AGE_DAYS, ebPricesFresh, futureWindows } from "../src/data/ebFreshness.ts";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["de", "en", "es", "fi", "fr", "it", "ja", "ko", "nl", "ptBR", "sv", "zhCN"];

test("prices show on the read day and the six days after it (Finland), never later", () => {
  assert.equal(EB_PRICE_MAX_AGE_DAYS, 7);
  assert.equal(ebPricesFresh("2026-09-26", new Date("2026-10-02T23:59:00+03:00")), true);
  assert.equal(ebPricesFresh("2026-09-26", new Date("2026-10-03T00:00:00+03:00")), false);
  assert.equal(ebPricesFresh("2026-09-26", new Date("2026-09-25T12:00:00+03:00")), false);
  assert.deepEqual(futureWindows([{ pickup: "2026-10-23" }, { pickup: "2026-12-11" }], new Date("2026-10-24T08:00:00+03:00")), [{ pickup: "2026-12-11" }]);
});

test("same freshness module as laplandcarrental-new (when that checkout is next to this one)", (t) => {
  const sibling = resolve(ROOT, "../laplandcarrental-new/src/data/ebFreshness.ts");
  if (!existsSync(sibling)) return t.skip("laplandcarrental-new not checked out next to this repo");
  const norm = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");
  assert.equal(norm(resolve(ROOT, "src/data/ebFreshness.ts")), norm(sibling));
});

test("the car rows without a price: title, lead, price line and six class uses, no figure or dash", () => {
  for (const lang of LANGS) {
    const src = readFileSync(resolve(ROOT, `src/locales/copy.${lang}.ts`), "utf8").replace(/\r\n/g, "\n");
    const start = src.indexOf('"cars": {');
    const block = src.slice(start, src.indexOf("\n    }", start));
    const val = (key) => block.match(new RegExp(String.raw`^\s+"${key}": ("(?:[^"\\]|\\.)*"),$`, "m"))?.[1];
    for (const key of ["titleGuide", "lead", "priceAt", "leadPriced"]) {
      const v = val(key);
      assert.ok(v && JSON.parse(v).trim(), `${lang} ${key} missing`);
      if (key !== "leadPriced") assert.doesNotMatch(JSON.parse(v), /[0-9€—]/, `${lang} ${key}: ${v}`);
    }
    const uses = block.match(/"uses": \[([\s\S]*?)\]/);
    assert.ok(uses, `${lang} uses missing`);
    const list = JSON.parse(`[${uses[1]}]`);
    assert.equal(list.length, 6, `${lang} uses`);
    // Uses may hold a head count (ja "2人の街乗りに"), never a price or a dash.
    for (const u of list) assert.ok(u.trim() && !/[€—]/.test(u), `${lang} use: ${u}`);
  }
});
