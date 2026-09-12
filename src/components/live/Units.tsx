import type { ReactNode } from 'react';

/**
 * A " · " chain whose separator can never sit at a line edge.
 *
 * Vesa 12.9.2026: "etkö näe miten nuo bulletpointit menee ihan pieleen?" —
 * a wrapped chain left the dot alone at a line end ("IVALO ·") or, after the
 * first fix, at a line start ("· EconomyBookings, 2.9."). Moving the dot into
 * the following word was not enough: a wrap still shows a dot first on the
 * new line.
 *
 * The classic divider trick instead: every unit carries its dot in its own
 * left padding; the inner row is pulled left by exactly that padding, and the
 * OUTER wrapper clips (`overflow: hidden`). A unit that starts a line has its
 * dot in the clipped strip and it disappears; only dots BETWEEN two units on
 * the same line are visible. Pure CSS, no line-position guessing. The layout
 * gate measures every dot: a visible one must have a same-line predecessor.
 * (First attempt put the negative margin and the clip on the same element —
 * that just moves the box, nothing is clipped; measured 218 "visible" dots.)
 *
 * `text` splits on " · " / "・"; `items` takes ready nodes (row facts).
 * A single unit renders as ordinary wrapping text.
 */
export default function Units({ text, items, className }: { text?: string; items?: ReactNode[]; className?: string }) {
  const parts: ReactNode[] = items
    ? items.filter((x) => x !== null && x !== undefined && x !== false && x !== '')
    : (text ?? '').split(/\s*[·・]\s*/).filter(Boolean);
  if (parts.length < 2) return <>{parts[0] ?? null}</>;
  return (
    <span className={`units block overflow-hidden ${className ?? ''}`}>
      <span className="units-row flex flex-wrap" style={{ marginLeft: '-1.05em', rowGap: '0.1em' }}>
        {parts.map((part, i) => (
          <span key={i} className="unit relative whitespace-nowrap" style={{ paddingLeft: '1.05em' }}>
            <span aria-hidden="true" className="unit-dot absolute opacity-60" style={{ left: '0.32em' }}>·</span>
            {part}
          </span>
        ))}
      </span>
    </span>
  );
}
