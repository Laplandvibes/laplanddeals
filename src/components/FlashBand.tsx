import { Link } from 'react-router-dom';

/**
 * Slim "live partner deals" band. Top of the home page, under the hero.
 * Honest framing: not a fake countdown — it tells the visitor that partner
 * prices are LIVE and refresh on each click.
 */
export default function FlashBand() {
  return (
    <section className="relative bg-ivory border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative shrink-0 w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-flash-red deal-pulse" />
              <span className="absolute inset-0 rounded-full bg-flash-red" />
            </span>
            <p className="text-[13px] sm:text-sm text-ink-soft">
              <span className="font-bold text-ink">Live partner prices</span>
              <span className="text-ink-mute"> · refreshed on every click. We never invent percentages — partners show today's rate.</span>
            </p>
          </div>
          <Link
            to="/hotels"
            className="shrink-0 inline-flex items-center gap-1.5 text-finland-blue hover:text-vibe-pink text-[12px] font-bold uppercase tracking-[0.14em] whitespace-nowrap no-underline"
          >
            Tonight's hotels →
          </Link>
        </div>
      </div>
    </section>
  );
}
