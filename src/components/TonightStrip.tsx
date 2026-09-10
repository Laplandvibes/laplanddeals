import { useMemo } from 'react';
import { ArrowUpRight, Moon } from 'lucide-react';
import { buildAffiliateHref } from './AffiliateCTA';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';

/**
 * "A bed tonight in …" — six resort buttons whose search is pinned to TONIGHT.
 *
 * Why: the hero's "Tonight's hotel deals" CTA used to open the partner search
 * with no dates (Trip.com) or with the Worker's default of today + 30 days
 * (Sembo `day=`), measured 2026-09-10. The Worker forwards `checkin` and
 * `checkout` to both partners (PASSTHROUGH → Trip.com checkIn/checkOut, Sembo
 * day=), so the promise costs one parameter to keep. Dates are computed at
 * render in the visitor's local time — a prerendered snapshot only carries
 * the build day until React hydrates.
 */

const PLACES: { key: string; q: string }[] = [
  { key: 'levi', q: 'Levi, Kittilä, Finland' },
  { key: 'rovaniemi', q: 'Rovaniemi, Finland' },
  { key: 'saariselka', q: 'Saariselkä, Finland' },
  { key: 'yllas', q: 'Ylläs, Kolari, Finland' },
  { key: 'ruka', q: 'Ruka, Kuusamo, Finland' },
  { key: 'inari', q: 'Inari, Finland' },
];

function localIso(d: Date): string {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function TonightStrip({ id = 'tonight' }: { id?: string }) {
  const lang = useLang();
  const c = COPY[lang].live.tonight;

  const { checkin, checkout } = useMemo(() => {
    const now = new Date();
    const next = new Date(now); next.setDate(now.getDate() + 1);
    return { checkin: localIso(now), checkout: localIso(next) };
  }, []);

  return (
    <section id={id} className="relative bg-cream-2 border-y border-line py-12 sm:py-16" aria-labelledby="tonight-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-6 md:mb-8">
          <p className="flex items-center gap-2 text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
            <Moon className="w-3.5 h-3.5" aria-hidden="true" />{c.eyebrow}
          </p>
          <h2 id="tonight-title" className="font-heading text-3xl sm:text-5xl leading-[1.05] text-ink">{c.title}</h2>
          <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">{c.lead}</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {PLACES.map((p, i) => {
            const sid = `tonight_${p.key}`;
            const href = buildAffiliateHref({ partner: 'hotels', sid, destination: p.q, query: { checkin, checkout }, lang });
            return (
              <li key={p.key}>
                <a
                  href={href}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  onClick={() => trackAffiliateClick('lodging', sid, href)}
                  className="group flex items-center justify-between gap-2 min-h-[52px] rounded-full border border-line-2 bg-cream px-5 py-3 text-ink font-bold text-[14px] hover:border-vibe-pink hover:text-vibe-pink transition-colors no-underline"
                >
                  <span className="truncate">{c.places[i]}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-ink-mute group-hover:text-vibe-pink transition-colors" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
