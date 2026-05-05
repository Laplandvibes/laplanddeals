import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import AffiliateCTA from '../components/AffiliateCTA';
import { getOffers } from '../data/offers';

export default function Cars() {
  const items = getOffers({ category: 'cars' });

  return (
    <>
      <PageSeo
        title="Lapland Car Hire Deals — Studded Tyres, 4WD, Airport Pickup"
        description="Live EconomyBookings prices on car hire from Rovaniemi, Kittilä, Ivalo and Kuusamo airports. Studded tyres included for winter driving."
        path="/cars"
        jsonLd={[pillarBreadcrumb('Cars', '/cars')]}
      />

      <PillarHeader
        eyebrow="Car hire"
        h1="Live prices on EconomyBookings."
        sub="Studded winter tyres, 4WD, free aurora-chasing range. Pickup at every Lapland airport."
        image="/images/offer-car-rvn.webp"
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-cream-2 py-14 border-y border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-3">
            Helsinki pickup or one-way drop-off?
          </h2>
          <p className="text-ink-soft mb-7">
            EconomyBookings supports one-way rentals between most Finnish airports.
          </p>
          <AffiliateCTA
            partner="cars"
            sid="cars_pillar_browse_all"
            className="inline-flex items-center gap-2 bg-ink hover:bg-finland-blue text-ivory font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-4 rounded-full no-underline"
          >
            Open EconomyBookings →
          </AffiliateCTA>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
