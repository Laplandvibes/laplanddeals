import { Calendar } from 'lucide-react';
import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import { PillarHeader } from './Hotels';
import { offers, getOffers } from '../data/offers';

export default function Packages() {
  // Curated packages plus the hotels/activities they pair with.
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
        h1="Build your own Lapland trip — live prices, no markups"
        sub="We don't sell sealed packages. We curate the building blocks — flights, stays, husky days, aurora hunts — and you book each at the partner's live rate. No middleman fee."
        icon={Calendar}
        accent="from-[#10b981] via-[#0f766e] to-[#0F172A]"
      />

      <section className="relative bg-deep-night py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-6">
            Curated trip ideas
          </h2>
          <OffersGrid offers={packageItems} cols="md:grid-cols-2" />
        </div>
      </section>

      <section className="relative bg-deep-night-2 py-12 sm:py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-2">
            Pair these with your stay
          </h2>
          <p className="text-snow/60 mb-8">
            The blocks most travellers stack into a 4–7 night Lapland trip.
          </p>
          <OffersGrid offers={pairsWith} />
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
