import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import AffiliateCTA from '../components/AffiliateCTA';
import { getOffers } from '../data/offers';

export default function Hotels() {
  const items = getOffers({ category: 'hotels' });

  return (
    <>
      <PageSeo
        title="Lapland Hotel Deals — Glass Igloos, Slope-Side, Wilderness Cabins"
        description="Live Hotels.com prices for glass igloos, ski-in stays, family hotels and wilderness lodges across Finnish Lapland. Last-minute and end-of-season cabin nights."
        path="/hotels"
        jsonLd={[pillarBreadcrumb('Hotels', '/hotels')]}
      />

      <PillarHeader
        eyebrow="Hotels & Cabins"
        h1="Lapland hotel deals — live prices on Hotels.com."
        sub="Glass igloos under the aurora belt, slope-side properties on Levi, wilderness lodges in Ylläs, family hotels in Rovaniemi. Compare tonight's rates."
        image="/images/offer-igloo-saariselka.webp"
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-cream-2 py-14 border-y border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-3">
            Don't see your destination?
          </h2>
          <p className="text-ink-soft mb-7">
            Search any Lapland town directly on Hotels.com.
          </p>
          <AffiliateCTA
            partner="hotels"
            sid="hotels_pillar_browse_all"
            destination="Finnish Lapland"
            className="inline-flex items-center gap-2 bg-ink hover:bg-finland-blue text-ivory font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-4 rounded-full no-underline"
          >
            Browse all Lapland hotels →
          </AffiliateCTA>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
