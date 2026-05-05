import { Car } from 'lucide-react';
import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import { PillarHeader } from './Hotels';
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
        h1="Lapland car hire — live prices on EconomyBookings"
        sub="Studded winter tyres, 4WD, free aurora-chasing range. Pickup at every Lapland airport."
        icon={Car}
        accent="from-[#1e293b] via-[#0f172a] to-[#0F172A]"
      />

      <section className="relative bg-deep-night py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-deep-night-2 py-12 border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-3">
            Helsinki pickup or one-way drop-off?
          </h2>
          <p className="text-snow/65 mb-6">
            EconomyBookings supports one-way rentals between most Finnish airports.
          </p>
          <AffiliateCTA
            partner="cars"
            sid="cars_pillar_browse_all"
            className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-snow font-bold px-7 py-3.5 rounded-xl no-underline"
          >
            Open EconomyBookings →
          </AffiliateCTA>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
