import { Sun } from 'lucide-react';
import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import { offers } from '../data/offers';
import AffiliateCTA from '../components/AffiliateCTA';

export default function Summer() {
  const summerItems = offers.filter((o) => o.flag === 'summer');

  return (
    <>
      <PageSeo
        title="Lapland Summer Deals — Midnight Sun Stays & Hiking"
        description="32 days the sun never sets in Finnish Lapland (Jun 6 – Jul 7). Midnight-sun cabin deals, hiking in Pallas-Yllästunturi, lakeside summer stays at a fraction of winter rates."
        path="/summer"
        jsonLd={[pillarBreadcrumb('Summer', '/summer')]}
      />

      {/* Warm summer hero (kesä-sääntö: image-forward warm overlay + neon yellow) */}
      <header className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#facc15] via-[#f97316] to-[#7c2d12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.45),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-deep-night/40 backdrop-blur-sm border border-snow/30 rounded-full px-4 py-1.5 mb-5">
            <Sun className="w-4 h-4 text-flash-yellow" />
            <span className="text-snow text-xs sm:text-sm font-bold tracking-wide uppercase">
              Midnight sun · June 6 – July 7
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-wide text-snow mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,15,40,0.55)]">
            Lapland in summer is the secret deal
          </h1>
          <p className="text-snow/95 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,15,40,0.5)]">
            32 days the sun never sets. Lakeside cabins at a fraction of December rates. Hiking peaks late August — clean air, no mosquitoes, ruska gold.
          </p>
        </div>
      </header>

      <section className="relative bg-deep-night py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-6">
            Summer offers — live partner prices
          </h2>
          {summerItems.length > 0 ? (
            <OffersGrid offers={summerItems} cols="md:grid-cols-2 lg:grid-cols-3" />
          ) : (
            <p className="text-snow/60">Summer offers being curated — check back soon.</p>
          )}
        </div>
      </section>

      <section className="bg-deep-night-2 py-14 border-y border-flash-yellow/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-6 text-center">
            Three honest reasons summer is cheaper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Demand drops in May', body: 'Aurora season ends, ski resorts close. Cabins that booked solid in February have empty weeks.' },
              { title: 'Lapland is wide open', body: 'Same fells, same lakes, same wilderness — without the package-tour markup.' },
              { title: 'Daylight is endless', body: 'You hike at midnight. You swim at 2 AM. You get a longer trip per day.' },
            ].map((c) => (
              <div key={c.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                <p className="font-heading text-lg tracking-wide text-flash-yellow mb-2">{c.title}</p>
                <p className="text-snow/70 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <AffiliateCTA
              partner="hotels-seasonal"
              sid="summer_browse_all"
              destination="Lapland, Finland"
              query={{ checkin: '2026-06-15', checkout: '2026-06-22' }}
              className="inline-flex items-center gap-2 bg-flash-yellow hover:bg-flash-yellow/85 text-deep-night font-bold px-7 py-3.5 rounded-xl no-underline"
            >
              Find a summer week →
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
