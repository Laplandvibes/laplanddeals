import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
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

      <PillarHeader
        eyebrow="Midnight sun · June 6 – July 7"
        h1Italic="Summer in Lapland"
        h1="is the secret deal."
        sub="32 days the sun never sets. Lakeside cabins at a fraction of December rates. Hiking peaks late August — clean air, no mosquitoes, ruska gold."
        image="/images/offer-summer-midnight-sun.webp"
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-8">
            Summer offers — live partner prices
          </h2>
          {summerItems.length > 0 ? (
            <OffersGrid offers={summerItems} cols="md:grid-cols-2 lg:grid-cols-3" />
          ) : (
            <p className="text-ink-soft">Summer offers being curated — check back soon.</p>
          )}
        </div>
      </section>

      <section className="bg-flash-yellow-bg py-16 border-y border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-8 text-center">
            Three honest reasons summer is cheaper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Demand drops in May', body: 'Aurora season ends, ski resorts close. Cabins that booked solid in February have empty weeks.' },
              { title: 'Lapland is wide open', body: 'Same fells, same lakes, same wilderness — without the package-tour markup.' },
              { title: 'Daylight is endless', body: 'You hike at midnight. You swim at 2 AM. You get a longer trip per day.' },
            ].map((c) => (
              <div key={c.title} className="rounded-lg bg-ivory border border-line p-6">
                <p className="font-heading text-xl font-medium text-summer mb-2">{c.title}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <AffiliateCTA
              partner="hotels-seasonal"
              sid="summer_browse_all"
              destination="Lapland, Finland"
              query={{ checkin: '2026-06-15', checkout: '2026-06-22' }}
              className="inline-flex items-center gap-2 bg-ink hover:bg-finland-blue text-ivory font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-4 rounded-full no-underline"
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
