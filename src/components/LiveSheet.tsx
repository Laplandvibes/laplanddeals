import type { ReactNode } from 'react';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import FitHeading from './live/FitHeading';
import Units from './live/Units';

/**
 * The paper sheet that carries every live section (ported from
 * laplandhoteldeals, 11.9.2026): the dark page is the sky, the sheet rises
 * over it with a 28 px top radius and a blue-hour tint at the top. Only live
 * and dated partner data lives on the sheet; hero, nav, editorial cards, ads,
 * newsletter and footer stay deep-night.
 */
export default function LiveSheet({ children, intro = true }: { children: ReactNode; intro?: boolean }) {
  const lang = useLang();
  const c = COPY[lang].live.sheet;
  return (
    <section className="sheet relative z-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14" aria-labelledby={intro ? 'live-sheet-title' : undefined}>
      <div className="mx-auto max-w-6xl">
        {intro && (
          <div className="@container mb-10 sm:mb-12">
            <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#BE185D]">
              <span aria-hidden="true" className="deal-pulse inline-block h-2 w-2 shrink-0 rounded-full bg-[#BE185D]" />
              <Units text={c.kicker} />
            </p>
            <FitHeading id="live-sheet-title" text={c.h2} min={36} max={60} className="font-heading text-4xl leading-[1.02] text-deep-night sm:text-5xl md:text-6xl" />
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-deep-night/70 sm:text-lg">{c.lead}</p>
          </div>
        )}
        <div className="flex flex-col gap-14 sm:gap-20">{children}</div>
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-deep-night/60" data-sheet-note><Units text={c.note} /></p>
      </div>
    </section>
  );
}
