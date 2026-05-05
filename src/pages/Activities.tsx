import { Sparkles } from 'lucide-react';
import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import { PillarHeader } from './Hotels';
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
        h1="Lapland activity deals — live availability on GetYourGuide"
        sub="Husky safaris, aurora hunts, snowmobile expeditions, reindeer-farm visits, ice fishing. Real-time bookings — no fake timers, no invented percentages."
        icon={Sparkles}
        accent="from-[#0c4a6e] via-[#0e7490] to-[#0F172A]"
      />

      <section className="relative bg-deep-night py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-deep-night-2 py-12 border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-3">
            Browse the full Lapland catalogue
          </h2>
          <p className="text-snow/65 mb-6">
            900+ tours, day trips, and multi-day adventures on GetYourGuide.
          </p>
          <a
            href={GYG_CATEGORIES.all}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-snow font-bold px-7 py-3.5 rounded-xl no-underline"
          >
            All Lapland activities →
          </a>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
