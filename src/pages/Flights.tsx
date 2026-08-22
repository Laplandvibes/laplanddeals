import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import { getOffers } from '../data/offers';
import { buildTripFlightHome } from '../lib/tripcom';
import { useLang, LANG_PREFIX } from '../i18n/useLang';
import { COPY } from '../locales/copy';

export default function Flights() {
  const lang = useLang();
  const c = COPY[lang].flightsPage;
  const items = getOffers({ category: 'flights', lang });
  const path = lang === 'en' ? '/flights' : `/${LANG_PREFIX[lang]}/flights`;

  return (
    <>
      <PageSeo
        title={c.seoTitle}
        description={c.seoDesc}
        path={path}
        jsonLd={[pillarBreadcrumb('Flights', path)]}
      />

      <PillarHeader
        eyebrow={c.eyebrow}
        h1Italic={c.h1Italic}
        h1={c.h1}
        sub={c.sub}
        image="/images/offer-flight-hel-kao.webp"
      />

      {/* Editorial lead — the same copy block routes.json harvests as this
          route's copyKey, so reader and crawler get one text in one language. */}
      <section className="relative pt-14 sm:pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">{c.introTitle}</h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4 opacity-80">{c.introP1}</p>
          <p className="text-sm sm:text-base leading-relaxed opacity-80">{c.introP2}</p>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <OffersGrid offers={items} />
          <AffiliateDisclosure variant="block" className="mt-10 max-w-3xl" />
        </div>
      </section>

      <section className="bg-cream-2 py-14 border-y border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-3">
            {c.bottomTitle}
          </h2>
          <p className="text-ink-soft mb-7">
            {c.bottomLead}
          </p>
          <a
            href={buildTripFlightHome('flights_pillar_browse_all', lang)}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-ivory font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-4 rounded-full no-underline"
          >
            {c.bottomCta}
          </a>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
