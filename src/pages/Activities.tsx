import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import { getOffers } from '../data/offers';
import { GYG_CATEGORIES } from '../lib/gyg';

export default function Activities() {
  const items = getOffers({ category: 'activities' });

  return (
    <>
      <PageSeo
        title="Lapland Activity Deals — Husky, Aurora, Snowmobile & More"
        description="Live GetYourGuide prices on husky safaris, aurora hunts, snowmobile tours, reindeer farms and ice fishing across Finnish Lapland. Last-minute slots."
        path="/activities"
        jsonLd={[pillarBreadcrumb('Activities', '/activities')]}
      />

      <PillarHeader
        eyebrow="Activities"
        h1Italic="Lapland activities"
        h1="real-time availability."
        sub="Husky safaris, aurora hunts, snowmobile expeditions, reindeer-farm visits, ice fishing. Live availability on GetYourGuide — no fake timers, no invented percentages."
        image="/images/offer-snowmobile.webp"
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-cream-2 py-14 border-y border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-3">
            Browse the full Lapland catalogue
          </h2>
          <p className="text-ink-soft mb-7">
            900+ tours, day trips, and multi-day adventures on GetYourGuide.
          </p>
          <a
            href={GYG_CATEGORIES.all}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-2 bg-ink hover:bg-finland-blue text-ivory font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-4 rounded-full no-underline"
          >
            All Lapland activities →
          </a>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
