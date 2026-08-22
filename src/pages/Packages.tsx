import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import PartnerAd from '../components/PartnerAd';
import { offers, getOffers } from '../data/offers';
import { useLang, LANG_PREFIX } from '../i18n/useLang';
import { COPY } from '../locales/copy';

export default function Packages() {
  const lang = useLang();
  const c = COPY[lang].packagesPage;
  const packageItems = getOffers({ category: 'packages', lang });
  const pairsWith = offers(lang).filter((o) =>
    ['igloo-saariselka', 'husky-safaris', 'aurora-hunts', 'rovaniemi-hotels', 'reindeer-tours', 'ice-fishing'].includes(o.id),
  );
  const path = lang === 'en' ? '/packages' : `/${LANG_PREFIX[lang]}/packages`;

  return (
    <>
      <PageSeo
        title={c.seoTitle}
        description={c.seoDesc}
        path={path}
        jsonLd={[pillarBreadcrumb('Packages', path)]}
      />

      <PillarHeader
        eyebrow={c.eyebrow}
        h1Italic={c.h1Italic}
        h1={c.h1}
        sub={c.sub}
        image="/images/offer-day-trips.webp"
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
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-8">
            {c.curatedTitle}
          </h2>
          <OffersGrid offers={packageItems} cols="md:grid-cols-2" />
        </div>
      </section>

      <section className="bg-cream-2 py-16 sm:py-20 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-2">
            {c.pairTitle}
          </h2>
          <p className="text-ink-soft mb-10 max-w-2xl">
            {c.pairLead}
          </p>
          <OffersGrid offers={pairsWith} />
          <PartnerAd advertiser="lomarengas" placement="packages_pillar" className="mt-12 sm:mt-16" />
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
