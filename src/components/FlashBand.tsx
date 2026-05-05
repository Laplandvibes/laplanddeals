import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Slim "live partner deals" band. Top of the home page, under the hero.
 * Honest framing: it's not a fake countdown timer — it tells the user that
 * partner prices are LIVE and refresh on each click.
 */
export default function FlashBand() {
  return (
    <section className="relative bg-[#1E293B] border-y border-white/10 stripes-flash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <span className="absolute -inset-1 rounded-full bg-flash-yellow/30 blur deal-pulse" aria-hidden="true" />
              <Zap className="relative w-5 h-5 text-flash-yellow" />
            </div>
            <p className="text-sm sm:text-base text-snow/85">
              <span className="font-bold text-flash-yellow">Live partner prices</span>
              <span className="text-snow/55"> · refreshed on every click. We never invent percentages — partners show today's actual rate.</span>
            </p>
          </div>
          <Link
            to="/hotels"
            className="shrink-0 inline-flex items-center gap-1.5 text-vibe-pink hover:text-vibe-pink-2 text-sm font-bold tracking-wide whitespace-nowrap no-underline"
          >
            Tonight's hotels →
          </Link>
        </div>
      </div>
    </section>
  );
}
