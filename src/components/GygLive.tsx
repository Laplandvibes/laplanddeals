import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { GYG_CATEGORIES, gygLocalizeHref } from '../lib/gyg';

/**
 * GetYourGuide "activities" widget for the Lapland region (location 2652).
 * The Integration Analyzer script in index.html scans the DOM and mounts an
 * iframe with LIVE prices and availability — the only honest source of
 * activity prices we have (GetYourGuide publishes no deals feed to affiliates).
 *
 * 'auto' and 'city' widget modes are banned network-wide (2026-07-02 rule):
 * they ignore location targeting and show GYG's global inventory.
 *
 * Ad-block / tracking-protection fallback: if no iframe mounts within a few
 * seconds the box collapses and a plain CTA to the Lapland listing (through
 * the Worker) takes its place, so the section is never an empty rectangle.
 */

const GYG_PARTNER_ID = 'VRMKD7N';
const LAPLAND_LOCATION_ID = '2652';
const GYG_LOCALE: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
};

export default function GygLive({ items = 6, cmp = 'lv_laplanddeals_live' }: { items?: number; cmp?: string }) {
  const lang = useLang();
  const c = COPY[lang].live.activities;
  const boxRef = useRef<HTMLDivElement>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    // No synchronous reset here (react-hooks/set-state-in-effect): the first
    // tick below re-evaluates the iframe presence after a language switch too.
    let cancelled = false;
    let waited = 0;
    const FIRST = 2500, STEP = 1000, MAX = 12000;
    const tick = (delay: number): ReturnType<typeof setTimeout> =>
      setTimeout(() => {
        if (cancelled) return;
        waited += delay;
        if (boxRef.current?.querySelector('iframe')) { setBlocked(false); return; }
        setBlocked(true);
        if (waited < MAX) tick(STEP);
      }, delay);
    const t = tick(FIRST);
    return () => { cancelled = true; clearTimeout(t); };
  }, [lang]);

  const browseHref = gygLocalizeHref(GYG_CATEGORIES.all, lang);

  return (
    <section className="relative bg-cream-2 border-y border-line py-16 sm:py-20" aria-labelledby="live-activities-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <p className="text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">{c.eyebrow}</p>
            <h2 id="live-activities-title" className="font-heading text-3xl sm:text-5xl leading-[1.05] text-ink">{c.title}</h2>
            <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">{c.lead}</p>
          </div>
          <a
            href={browseHref}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="hidden md:inline-flex items-center gap-1 text-ink hover:text-vibe-pink text-[12px] font-bold uppercase tracking-[0.14em] no-underline"
          >
            {c.browse} <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <div
          ref={boxRef}
          className={blocked ? 'h-0 overflow-hidden' : 'min-h-[120px]'}
          key={`gyg-${lang}`}
          data-gyg-widget="activities"
          data-gyg-partner-id={GYG_PARTNER_ID}
          data-gyg-locale-code={GYG_LOCALE[lang]}
          data-gyg-cmp={cmp}
          data-gyg-location-id={LAPLAND_LOCATION_ID}
          data-gyg-number-of-items={String(items)}
        />

        {blocked && (
          <div className="flex flex-col items-center text-center rounded-2xl border border-line bg-cream px-6 py-8">
            <span className="grid place-items-center w-12 h-12 rounded-full bg-vibe-pink/15 border border-vibe-pink/40 text-vibe-pink mb-4">
              <Compass className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-ink-soft text-sm leading-relaxed max-w-md mb-5">{c.lead}</p>
            <a
              href={browseHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-ivory font-bold uppercase tracking-[0.1em] px-6 py-3.5 rounded-full text-[13px] transition-colors no-underline"
            >
              {c.browse} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        )}

        <a
          href={browseHref}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="md:hidden inline-flex items-center gap-1 mt-5 text-ink hover:text-vibe-pink text-[12px] font-bold uppercase tracking-[0.14em] no-underline"
        >
          {c.browse} <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
