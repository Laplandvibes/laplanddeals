import { useMemo } from 'react';
import { ArrowUpRight, Moon } from 'lucide-react';
import { buildAffiliateHref } from './AffiliateCTA';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { trackAffiliateClick } from '../lib/analytics';
import Units from './live/Units';

/**
 * "A bed tonight in …" — six resort buttons whose search is pinned to TONIGHT,
 * on the sheet's ice tile as white cards.
 *
 * Why: the hero's "Tonight's hotel deals" CTA used to open the partner search
 * with no dates (Trip.com) or with the Worker's default of today + 30 days
 * (Sembo `day=`), measured 2026-09-10. The Worker forwards `checkin` and
 * `checkout` to both partners, so the promise costs one parameter to keep.
 * Dates are computed at render in the visitor's local time.
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
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export default function TonightStrip({ id = 'tonight', kicker }: { id?: string; kicker?: boolean }) {
  const lang = useLang();
  const c = COPY[lang].live.tonight;
  const { checkin, checkout, label } = useMemo(() => {
    const now = new Date();
    const next = new Date(now); next.setDate(now.getDate() + 1);
    let label = '';
    try { label = new Intl.DateTimeFormat(lang, { weekday: 'short', day: 'numeric', month: 'short' }).format(now); } catch { label = localIso(now); }
    return { checkin: localIso(now), checkout: localIso(next), label };
  }, [lang]);

  return (
    <section id={id} className="relative" aria-labelledby={`${id}-title`}>
      <div className="mb-5 max-w-2xl sm:mb-6">
        {kicker && (
          <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#BE185D]">
            <Moon className="h-3.5 w-3.5" aria-hidden="true" /><Units text={`${c.eyebrow} · ${label}`} />
          </p>
        )}
        <h2 id={`${id}-title`} className="font-heading text-3xl leading-[1.02] text-deep-night sm:text-5xl">{c.title}</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-deep-night/70 sm:text-lg">{c.lead}</p>
      </div>
      <div className="tile-ice p-3 sm:p-5">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
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
                  className="card-frost card-lift group flex min-h-[52px] items-center justify-between gap-2 px-5 py-3 text-[15px] font-bold text-deep-night no-underline"
                >
                  <span className="truncate">{c.places[i]}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-deep-night/40 transition-colors group-hover:text-[#BE185D]" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
