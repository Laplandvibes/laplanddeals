import { Link } from 'react-router-dom';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

/**
 * Slim "live partner deals" band. Top of the home page, under the hero.
 * Honest framing: not a fake countdown — it tells the visitor that partner
 * prices are LIVE and refresh on each click.
 */
export default function FlashBand() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].flashBand;

  return (
    <section className="relative bg-cream-2 border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative shrink-0 w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-flash-red deal-pulse" />
              <span className="absolute inset-0 rounded-full bg-flash-red" />
            </span>
            <p className="text-[13px] sm:text-sm text-ink-soft">
              <span className="font-bold text-ink">{c.leadBold}</span>
              <span className="text-ink-mute">{c.leadRest}</span>
            </p>
          </div>
          <Link
            to={to('/hotels')}
            className="shrink-0 inline-flex items-center gap-1.5 text-vibe-pink hover:text-ivory text-[12px] font-bold uppercase tracking-[0.14em] whitespace-nowrap no-underline"
          >
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
