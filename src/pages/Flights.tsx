import { Plane } from 'lucide-react';
import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import { PillarHeader } from './Hotels';
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
        h1="Flights to Lapland — live fares on Trip.com"
        sub="Helsinki to every Lapland gateway, pre-filled and dated. Click through to real Finnair and Norwegian rates."
        icon={Plane}
        accent="from-[#7c2d12] via-[#9a3412] to-[#0F172A]"
      />

      <section className="relative bg-deep-night py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-deep-night-2 py-12 border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-3">
            Travelling from outside Finland?
          </h2>
          <p className="text-snow/65 mb-6">
            Search any origin to any Lapland airport on Trip.com.
          </p>
          <a
            href={buildTripFlightHome('flights_pillar_browse_all')}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-snow font-bold px-7 py-3.5 rounded-xl no-underline"
          >
            Open Trip.com flight search →
          </a>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
