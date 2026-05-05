import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import { offers, getOffers } from '../data/offers';

export default function Packages() {
  const packageItems = getOffers({ category: 'packages' });
  const pairsWith = offers.filter((o) =>
    ['igloo-saariselka', 'husky-safaris', 'aurora-hunts', 'rovaniemi-hotels', 'reindeer-tours', 'ice-fishing'].includes(o.id),
  );

  return (
    <>
      <PageSeo
        title="Lapland Package Deals — Aurora Week, Family Breaks, Weekends"
        description="Multi-day Lapland trip ideas: aurora week in Saariselkä, family breaks in Rovaniemi, weekend escapes. Each booked separately at live partner rates."
        path="/packages"
        jsonLd={[pillarBreadcrumb('Packages', '/packages')]}
      />

      <PillarHeader
        eyebrow="Packages"
        h1Italic="Build your own"
        h1="Lapland trip."
        sub="We don't sell sealed packages. We curate the building blocks — flights, stays, husky days, aurora hunts — and you book each at the partner's live rate. No middleman fee."
        image="/images/offer-day-trips.webp"
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-8">
            Curated trip ideas
          </h2>
          <OffersGrid offers={packageItems} cols="md:grid-cols-2" />
        </div>
      </section>

      <section className="bg-cream-2 py-16 sm:py-20 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-2">
            Pair these with your stay
          </h2>
          <p className="text-ink-soft mb-10 max-w-2xl">
            The blocks most travellers stack into a 4–7 night Lapland trip.
          </p>
          <OffersGrid offers={pairsWith} />
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
