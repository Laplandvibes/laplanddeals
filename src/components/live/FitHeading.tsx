import { useLayoutEffect, useRef } from 'react';

/**
 * A section heading that stays on ONE line whenever its container allows.
 *
 * Vesa 12.9.2026, tablet: "eikö otsikko mahtuisi yhdelle riville tässäkin …
 * vittu samat ongelmat vuodesta toiseen". A breakpoint size cannot promise
 * that: a 47-character Finnish title and a 52-character French one need
 * different sizes at the same width, and the header shares its row with an
 * aside on some lists.
 *
 * Text width scales linearly with font-size, so the size that exactly fills
 * the container is `container × R`, where R = fontSize / textWidth is a
 * constant of the string and the font. R is measured once (nowrap, 100 px)
 * and written as `font-size: clamp(min, R·100cqw, max)`. That single value is
 * right at every width with no further script and no shift on resize. Below
 * `min` the heading wraps as ordinary text: a title cannot be one line on a
 * 343 px phone without shrinking to 17 px, and it should not be.
 *
 * The parent must be a `@container` (container-type: inline-size). Re-measured
 * after web fonts load, since the fallback face has other metrics. The layout
 * gate checks every `[data-fit-title]`: one line from 768 px up, at most two
 * lines on a phone.
 */
export default function FitHeading({
  as = 'h2',
  text,
  min = 30,
  max = 48,
  className,
  id,
}: {
  as?: 'h1' | 'h2' | 'h3';
  text: string;
  /** Smallest size in px before the heading is allowed to wrap. */
  min?: number;
  /** Largest size in px (the breakpoint size the heading had before). */
  max?: number;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const span = el?.firstElementChild as HTMLElement | null;
    if (!el || !span) return;
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const prevWs = el.style.whiteSpace;
      el.style.fontSize = '100px';
      el.style.whiteSpace = 'nowrap';
      const w = span.getBoundingClientRect().width;
      el.style.whiteSpace = prevWs;
      if (w > 0) {
        // cqw per container px, with 3 % in hand for subpixel rounding.
        const r = (100 / w) * 100 * 0.97;
        el.style.fontSize = `clamp(${min}px, ${r.toFixed(3)}cqw, ${max}px)`;
      } else {
        el.style.fontSize = '';
      }
    };
    measure();
    if (typeof document !== 'undefined' && document.fonts?.ready) document.fonts.ready.then(measure).catch(() => undefined);
    return () => { cancelled = true; };
  }, [text, min, max]);
  const Tag = as;
  return (
    <Tag ref={ref} id={id} className={className} data-fit-title>
      <span>{text}</span>
    </Tag>
  );
}
