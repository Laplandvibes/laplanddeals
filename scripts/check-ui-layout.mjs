#!/usr/bin/env node
/**
 * check-ui-layout.mjs — the MEASURED layout gate for laplanddeals' live sheet,
 * category tiles and fare calendar, at phone and desktop width. Ported from
 * laplandhoteldeals (lv_permanent_rules §13, Vesa 11.9.2026: "eikö meillä ole
 * porttia tuohon?") and extended with the thing Vesa flagged here the same
 * day: "tekstit ei erotu, porttien läpi" — text contrast is measured, not
 * eyeballed.
 *
 * Fails the run on any of:
 *   - a live row taller than a phone can show two of (375 px: > 240 px; desktop > 260)
 *   - rows of uneven height inside one list (max − min > 48 px)
 *   - a row photo that did not render (naturalWidth 0) or renders under 80 px
 *   - text that overflows its row (scrollWidth > clientWidth)
 *   - a row button under 44 px tall / 96 px wide (iOS HIG tap target)
 *   - a visible control under 36 px tall
 *   - the page scrolling sideways
 *   - fare-calendar bars narrower than 5 px, fewer than 3 gridlines, or a month with < 2 bars
 *   - an orphaned separator: a bare "·" text node, or one at a line edge, in any row or tile
 *   - a tile title that wraps, chips of unequal width/height inside a tile, or a cut chip text
 *   - a section title that wraps from 768 px up (FitHeading must size it to its container)
 *   - a segmented control whose segments differ in width or height, or whose label is cut
 *   - a [data-fill-grid] that leaves more than 24 px empty at the right of its first row
 *   - category-tile text under 4.5:1 against the pixels it actually sits on
 *     (the tile's text band is sampled with canvas: photo drawn object-fit cover,
 *     every positioned overlay composited by its computed colour/alpha, then the
 *     WCAG ratio at each sampled pixel behind the text — worst pixel counts)
 *
 * Run: node scripts/check-ui-layout.mjs [baseUrl]
 *   The live sheet needs /api/live-flights (a Pages Function), so run against
 *   `wrangler pages dev dist` or the deployed site; `vite preview` alone shows
 *   the cabin and car lists only (the flight list hides itself, which the gate
 *   then reports as a note, not a failure).
 */
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const { chromium } = await import(pathToFileURL(resolve(ROOT, "../node_modules/playwright/index.mjs")).href).catch(() => import("playwright"));
const base = (process.argv[2] || "https://laplanddeals.com").replace(/\/$/, "");

const VIEWS = [
  { name: "phone", w: 375, h: 812, mobile: true, maxRow: 240, minImg: 80, oneLineTitles: false },
  // Two tablet widths, because they land on different sides of every layout
  // switch on this site: 768 = the `md`/portrait tablet, 900 = a landscape
  // tablet still below `lg` (1024) where the lists are one wide column.
  // Vesa 12.9.2026: "tablet nkymä, miksi nämä ei ole keskitettyjä vaan
  // oikealla on turhaan tyhjä tila … eikö otsikko mahtuisi yhdelle riville".
  { name: "tablet", w: 768, h: 1024, mobile: false, maxRow: 260, minImg: 100, oneLineTitles: true },
  { name: "tablet-wide", w: 900, h: 1180, mobile: false, maxRow: 260, minImg: 100, oneLineTitles: true },
  { name: "desktop", w: 1280, h: 800, mobile: false, maxRow: 260, minImg: 100, oneLineTitles: true },
];
const PAGES = ["/", "/fi/", "/de/", "/flights/", "/hotels/", "/cars/"];
const failures = [];
const notes = [];

const browser = await chromium.launch();
for (const v of VIEWS) {
  for (const path of PAGES) {
    const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h }, isMobile: v.mobile, locale: path.startsWith("/fi") ? "fi-FI" : path.startsWith("/de") ? "de-DE" : "en-US", deviceScaleFactor: 1 });
    await ctx.addInitScript(() => { try { localStorage.setItem("laplanddeals_cookie_consent", "declined"); localStorage.setItem("lv_locale_choice", location.pathname.startsWith("/fi") ? "fi" : location.pathname.startsWith("/de") ? "de" : "en"); } catch {} });
    const page = await ctx.newPage();
    await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(5500);
    await page.evaluate(() => { document.querySelectorAll('[role="dialog"]').forEach((d) => (d.style.display = "none")); document.documentElement.style.scrollBehavior = "auto"; });
    // let lazy images and the chart settle
    await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(800);

    const m = await page.evaluate(() => {
      const lists = [...document.querySelectorAll("[data-live-list]")].map((sec) => {
        const id = sec.id;
        const ols = [...sec.querySelectorAll("ol")];
        const rows = ols.flatMap((ol) => [...ol.querySelectorAll(":scope > li")]).filter((li) => li.getClientRects().length > 0);
        return {
          id,
          rows: rows.map((li) => {
            const r = li.getBoundingClientRect();
            const img = li.querySelector("img");
            const btn = li.querySelector(".btn-pink");
            const b = btn?.getBoundingClientRect();
            const overflow = [...li.querySelectorAll("*")].some((e) => e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflowX !== "hidden" && !["IMG", "SVG"].includes(e.tagName) && !getComputedStyle(e).webkitLineClamp?.match(/\d/));
            return { h: Math.round(r.height), img: img ? { natural: img.naturalWidth, w: Math.round(img.getBoundingClientRect().width) } : null, btn: b ? { w: Math.round(b.width), h: Math.round(b.height) } : null, overflow };
          }),
          controls: [...sec.querySelectorAll("button")].filter((b) => b.getClientRects().length > 0).map((b) => Math.round(b.getBoundingClientRect().height)),
        };
      });
      const chart = document.querySelector('section[aria-labelledby="fare-calendar-title"]');
      const charts = chart ? [...chart.querySelectorAll("figure")].map((f) => {
        const bars = [...f.querySelectorAll(".bar-in")].map((b) => b.getBoundingClientRect().width);
        const grid = f.querySelectorAll('[aria-hidden="true"].border-t').length;
        return { bars: bars.length, minBarW: bars.length ? Math.round(Math.min(...bars) * 10) / 10 : 0, grid };
      }) : [];
      const chartControls = chart ? [...chart.querySelectorAll("button")].filter((b) => b.getClientRects().length > 0).map((b) => Math.round(b.getBoundingClientRect().height)) : [];

      // Category tiles: measured contrast of every text node against the pixels behind it.
      const lum = (r, g, b) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const parse = (s) => { const n = (s.match(/[\d.]+/g) || []).map(Number); return s.startsWith("rgb") ? { r: n[0] || 0, g: n[1] || 0, b: n[2] || 0, a: n.length > 3 ? n[3] : 1 } : null; };
      const tiles = [];
      for (const tile of document.querySelectorAll("[data-category-tiles] > a")) {
        const tr = tile.getBoundingClientRect();
        const cv = document.createElement("canvas"); cv.width = Math.max(1, Math.round(tr.width)); cv.height = Math.max(1, Math.round(tr.height));
        const g = cv.getContext("2d");
        // page background under the tile
        g.fillStyle = "#0F172A"; g.fillRect(0, 0, cv.width, cv.height);
        const img = tile.querySelector("img");
        if (img && img.complete && img.naturalWidth) {
          const ir = img.getBoundingClientRect();
          const s = Math.max(ir.width / img.naturalWidth, ir.height / img.naturalHeight);
          const dw = img.naturalWidth * s, dh = img.naturalHeight * s;
          g.save(); g.beginPath(); g.rect(ir.left - tr.left, ir.top - tr.top, ir.width, ir.height); g.clip();
          try { g.drawImage(img, ir.left - tr.left + (ir.width - dw) / 2, ir.top - tr.top + (ir.height - dh) / 2, dw, dh); } catch {}
          g.restore();
        }
        // every element with a solid background colour, composited in DOM order (gradients are read as their computed colour if solid, else skipped and reported)
        let skippedGradient = false;
        for (const el of tile.querySelectorAll("*")) {
          const cs = getComputedStyle(el);
          const bg = parse(cs.backgroundColor);
          if (cs.backgroundImage !== "none") skippedGradient = true;
          if (!bg || bg.a === 0) continue;
          const r = el.getBoundingClientRect();
          g.fillStyle = `rgba(${bg.r},${bg.g},${bg.b},${bg.a})`;
          g.fillRect(r.left - tr.left, r.top - tr.top, r.width, r.height);
        }
        for (const t of tile.querySelectorAll("h3, p, span, li")) {
          if (!t.textContent.trim() || !t.getClientRects().length) continue;
          const r = t.getBoundingClientRect();
          const x0 = Math.max(0, Math.round(r.left - tr.left)), y0 = Math.max(0, Math.round(r.top - tr.top));
          const x1 = Math.min(cv.width, Math.round(r.right - tr.left)), y1 = Math.min(cv.height, Math.round(r.bottom - tr.top));
          if (x1 <= x0 || y1 <= y0) continue;
          const d = g.getImageData(x0, y0, x1 - x0, y1 - y0).data;
          const tc = parse(getComputedStyle(t).color) || { r: 255, g: 255, b: 255 };
          const tl = lum(tc.r, tc.g, tc.b);
          let worst = 99;
          for (let i = 0; i < d.length; i += 8) { const bl = lum(d[i], d[i + 1], d[i + 2]); const c = (Math.max(tl, bl) + 0.05) / (Math.min(tl, bl) + 0.05); if (c < worst) worst = c; }
          tiles.push({ tile: tile.getAttribute("href"), text: t.textContent.trim().slice(0, 30), worst: Math.round(worst * 100) / 100, gradient: skippedGradient });
        }
      }
      // Orphaned separators (Vesa 12.9.: "miten nuo bulletpointit menee ihan pieleen"): a " · " chain that
      // wraps leaves the dot alone at a line end or start. Structural check: inside rows and tiles no
      // element may be a bare "·"/"・" text node unless it sits inside a nowrap unit, and no line box may
      // begin or end with one (measured via Range rects per separator).
      const orphans = [];
      // Units: every unit carries a dot in its left padding; the container clips the strip
      // where a line-starting unit's dot lands. A dot whose box is inside the container's
      // visible area must therefore follow another unit on the SAME line, or it is orphaned.
      for (const cont of document.querySelectorAll(".units")) {
        const cr = cont.getBoundingClientRect();
        const units = [...cont.querySelectorAll(".unit")];
        units.forEach((u, i) => {
          const dot = u.querySelector(".unit-dot"); if (!dot) return;
          const dr = dot.getBoundingClientRect(); const ur = u.getBoundingClientRect();
          const visible = dr.right > cr.left + 0.5;
          if (!visible) return;
          const prev = units[i - 1];
          const sameLine = prev && Math.abs(prev.getBoundingClientRect().top - ur.top) < 2;
          if (!sameLine) orphans.push(`visible dot starts a line in "${(cont.textContent || "").trim().slice(0, 40)}"`);
        });
      }
      for (const scope of [...document.querySelectorAll("[data-live-list], [data-category-tiles] > a, [data-sheet-note], section.sheet p")]) {
        const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) {
          const t = n.textContent;
          if (!/[·・]/.test(t)) continue;
          const el = n.parentElement;
          if (!el || !el.getClientRects().length) continue;
          // a dot inside a nowrap unit can never be orphaned
          if (el.closest(".unit")) continue;
          if (t.trim() === "·" || t.trim() === "・") { orphans.push(`bare separator node "${(el.parentElement?.textContent || "").trim().slice(0, 40)}"`); continue; }
          // a dot inside a longer text: check it is not at a line start/end
          let idx = -1;
          while ((idx = t.indexOf("·", idx + 1)) !== -1) {
            const r = document.createRange(); r.setStart(n, idx); r.setEnd(n, idx + 1);
            const dr = r.getBoundingClientRect(); const pr = el.getBoundingClientRect();
            if (dr.left - pr.left < 6 || pr.right - dr.right < 6) { orphans.push(`separator at line edge in "${t.trim().slice(0, 40)}"`); break; }
          }
        }
      }
      // Tile shape (Vesa 12.9.: "otsikot pitää mahtua samalle riville … laatikot ei ole samankokoisia"):
      // a title must be one line; the chips inside a tile must share one width and one height;
      // a chip's text must not be cut (scrollWidth > clientWidth on the truncating span).
      const tileShape = [];
      for (const tile of document.querySelectorAll("[data-category-tiles] > a")) {
        const t = tile.querySelector("[data-tile-title]");
        if (t) {
          const lh = parseFloat(getComputedStyle(t).lineHeight) || parseFloat(getComputedStyle(t).fontSize) * 1.2;
          if (t.getBoundingClientRect().height > lh * 1.35) tileShape.push(`title wraps: "${t.textContent.trim()}"`);
        }
        const chips = [...tile.querySelectorAll("[data-tile-chips] > li")];
        const ws = new Set(chips.map((c) => Math.round(c.getBoundingClientRect().width)));
        const hs = new Set(chips.map((c) => Math.round(c.getBoundingClientRect().height)));
        if (ws.size > 1) tileShape.push(`chip widths differ in "${t?.textContent.trim()}": ${[...ws].join("/")}`);
        if (hs.size > 1) tileShape.push(`chip heights differ in "${t?.textContent.trim()}": ${[...hs].join("/")}`);
        for (const c of chips) { const sp = c.querySelector("span"); if (sp && sp.scrollWidth > sp.clientWidth + 1) tileShape.push(`chip text cut: "${sp.textContent.trim()}"`); }
      }
      // Section titles that must stay on one line (FitHeading sizes itself to
      // its container). Measured as line boxes, not by comparing to a font
      // size: a heading is one line when its height is within 1.35 line-heights.
      const fitTitles = [...document.querySelectorAll("[data-fit-title]")].filter((h) => h.getClientRects().length > 0).map((h) => {
        const cs = getComputedStyle(h);
        const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2;
        return { text: (h.textContent || "").trim().slice(0, 44), lines: Math.round(h.getBoundingClientRect().height / lh * 10) / 10, size: Math.round(parseFloat(cs.fontSize)) };
      });

      // Segmented controls: every segment the same size, none with cut text.
      const segGroups = [...document.querySelectorAll("[data-seg-group]")].filter((g) => g.getClientRects().length > 0).map((g) => {
        const btns = [...g.querySelectorAll("button")];
        return {
          label: g.getAttribute("aria-label") || "",
          n: btns.length,
          widths: [...new Set(btns.map((b) => Math.round(b.getBoundingClientRect().width)))],
          heights: [...new Set(btns.map((b) => Math.round(b.getBoundingClientRect().height)))],
          cut: btns.filter((b) => b.scrollWidth > b.clientWidth + 1).map((b) => (b.textContent || "").trim()),
        };
      });

      // A grid whose items leave a hole at the right edge (the fare calendar
      // rendered 2 of 3 months into a fixed 3-column grid). Measured: the gap
      // between the right edge of the last item in the FIRST row and the
      // right edge of the grid, ignoring single-column layouts.
      const gridGaps = [];
      for (const grid of document.querySelectorAll("[data-fill-grid]")) {
        const items = [...grid.children].filter((el) => el.getClientRects().length > 0);
        if (items.length < 2) continue;
        const gr = grid.getBoundingClientRect();
        const top = Math.round(items[0].getBoundingClientRect().top);
        const firstRow = items.filter((el) => Math.abs(Math.round(el.getBoundingClientRect().top) - top) < 4);
        if (firstRow.length < 2) continue;
        const right = Math.max(...firstRow.map((el) => el.getBoundingClientRect().right));
        gridGaps.push({ id: grid.getAttribute("data-fill-grid"), gap: Math.round(gr.right - right), items: items.length, inRow: firstRow.length });
      }

      return { overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth, lists, charts, chartControls, tiles, orphans, tileShape, fitTitles, segGroups, gridGaps };
    });
    await ctx.close();

    const tag = `${v.name} ${path}`;
    if (m.overflowX) failures.push(`${tag}: page scrolls sideways`);
    for (const o of m.orphans) failures.push(`${tag}: orphaned separator — ${o}`);
    for (const o of m.tileShape) failures.push(`${tag}: tile shape — ${o}`);
    for (const t of m.fitTitles) {
      notes.push(`${tag}: title "${t.text}" ${t.lines} line(s) at ${t.size} px`);
      // A phone is allowed two lines; from 768 px up a section title fits one.
      const maxLines = v.oneLineTitles ? 1.35 : 2.35;
      if (t.lines > maxLines) failures.push(`${tag}: title wraps to ${t.lines} lines: "${t.text}"`);
    }
    for (const g of m.segGroups) {
      if (g.widths.length > 1) failures.push(`${tag}: seg group "${g.label}" has ${g.widths.length} different widths (${g.widths.join("/")})`);
      if (g.heights.length > 1) failures.push(`${tag}: seg group "${g.label}" has ${g.heights.length} different heights (${g.heights.join("/")})`);
      for (const c of g.cut) failures.push(`${tag}: seg label cut: "${c}"`);
    }
    for (const g of m.gridGaps) {
      notes.push(`${tag}: grid ${g.id}: ${g.inRow}/${g.items} in first row, ${g.gap} px to the right edge`);
      if (g.gap > 24) failures.push(`${tag}: grid ${g.id} leaves ${g.gap} px empty at the right (${g.inRow} items in the row)`);
    }
    for (const l of m.lists) {
      if (!l.rows.length) { notes.push(`${tag}: ${l.id}: no rows rendered`); continue; }
      const hs = l.rows.map((r) => r.h);
      const max = Math.max(...hs), min = Math.min(...hs);
      notes.push(`${tag}: ${l.id}: ${hs.length} rows, height ${min}–${max} px`);
      if (max > v.maxRow) failures.push(`${tag}: ${l.id}: tallest row ${max} px > ${v.maxRow} px`);
      if (max - min > 48) failures.push(`${tag}: ${l.id}: row heights uneven (${min}–${max} px)`);
      l.rows.forEach((r, i) => {
        if (r.img && r.img.natural === 0) failures.push(`${tag}: ${l.id} row ${i + 1} photo did not render`);
        else if (r.img && r.img.w < v.minImg) failures.push(`${tag}: ${l.id} row ${i + 1} photo only ${r.img.w} px wide`);
        if (!r.btn) failures.push(`${tag}: ${l.id} row ${i + 1} has no button`);
        else if (r.btn.h < 44 || r.btn.w < 96) failures.push(`${tag}: ${l.id} row ${i + 1} button ${r.btn.w}×${r.btn.h} px under tap target`);
        if (r.overflow) failures.push(`${tag}: ${l.id} row ${i + 1} text overflows its box`);
      });
      if (l.controls.length && Math.min(...l.controls) < 36) failures.push(`${tag}: ${l.id}: a control is only ${Math.min(...l.controls)} px tall`);
    }
    m.charts.forEach((ch, i) => {
      notes.push(`${tag}: chart month ${i + 1}: ${ch.bars} bars, min width ${ch.minBarW} px, ${ch.grid} gridlines`);
      if (ch.bars < 2) failures.push(`${tag}: chart month ${i + 1} has only ${ch.bars} bars`);
      if (ch.bars && ch.minBarW < 5) failures.push(`${tag}: chart month ${i + 1} bars ${ch.minBarW} px wide (< 5)`);
      if (ch.grid < 3) failures.push(`${tag}: chart month ${i + 1} has ${ch.grid} gridlines (< 3)`);
    });
    if (m.chartControls.length && Math.min(...m.chartControls) < 36) failures.push(`${tag}: chart control only ${Math.min(...m.chartControls)} px tall`);
    if (m.tiles.length) {
      const worst = Math.min(...m.tiles.map((t) => t.worst));
      notes.push(`${tag}: ${m.tiles.length} tile text nodes, worst contrast ${worst}:1`);
      for (const t of m.tiles) if (t.worst < 4.5) failures.push(`${tag}: tile ${t.tile} "${t.text}" contrast ${t.worst}:1 < 4.5`);
      if (m.tiles.some((t) => t.gradient)) failures.push(`${tag}: a tile text band uses a gradient — contrast cannot be guaranteed, use a solid band`);
    }
  }
}
await browser.close();

for (const n of notes) console.log("   " + n);
if (failures.length) {
  for (const f of failures) console.error("❌ " + f);
  console.error(`\ncheck-ui-layout: ${failures.length} failure(s)`);
  process.exit(1);
}
console.log(`\n✅ check-ui-layout: ${notes.length} measurements, 0 failures`);
