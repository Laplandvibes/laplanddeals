import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import { getOffers } from '../data/offers';
import { buildTripFlightHome } from '../lib/tripcom';

export default function Flights() {
  const items = getOffers({ category: 'flights' });

  return (
    <>
      <PageSeo
        title="Flights to Lapland — Live Trip.com Deals on Helsinki Routes"
        description="Live Trip.com flight prices: Helsinki to Rovaniemi, Kittilä, Ivalo, Kuusamo and Kemi. Direct Finnair and Norwegian fares — pre-filled, ready to book."
        path="/flights"
        jsonLd={[pillarBreadcrumb('Flights', '/flights')]}
      />

      <PillarHeader
        eyebrow="Flights"
        h1="Live fares on Trip.com."
        sub="Helsinki to every Lapland gateway, pre-filled and dated. Click through to real Finnair and Norwegian rates."
        image="/images/offer-flight-hel-rvn.webp"
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-cream-2 py-14 border-y border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-3">
            Travelling from outside Finland?
          </h2>
          <p className="text-ink-soft mb-7">
            Search any origin to any Lapland airport on Trip.com.
          </p>
          <a
            href={buildTripFlightHome('flights_pillar_browse_all')}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-2 bg-ink hover:bg-finland-blue text-ivory font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-4 rounded-full no-underline"
          >
            Open Trip.com flight search →
          </a>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
