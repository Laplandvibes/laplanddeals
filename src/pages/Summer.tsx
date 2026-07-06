import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import { offers } from '../data/offers';
import AffiliateCTA from '../components/AffiliateCTA';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

export default function Summer() {
  const lang = useLang();
  const c = COPY[lang].summerPage;
  const summerItems = offers(lang).filter((o) => o.flag === 'summer');
  const path = lang === 'en' ? '/summer' : `/${lang}/summer`;

  return (
    <>
      <PageSeo
        title={c.seoTitle}
        description={c.seoDesc}
        path={path}
        jsonLd={[pillarBreadcrumb('Summer', path)]}
      />

      <PillarHeader
        eyebrow={c.eyebrow}
        h1Italic={c.h1Italic}
        h1={c.h1}
        sub={c.sub}
        image="/images/offer-summer-midnight-sun.webp"
      />

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-8">
            {c.offersTitle}
          </h2>
          {summerItems.length > 0 ? (
            <OffersGrid offers={summerItems} cols="md:grid-cols-2 lg:grid-cols-3" />
          ) : (
            <p className="text-ink-soft">{c.offersFallback}</p>
          )}
          <AffiliateDisclosure variant="block" className="mt-10 max-w-3xl" />
        </div>
      </section>

      <section className="bg-flash-yellow-bg py-16 border-y border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink mb-8 text-center">
            {c.reasonsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.reasons.map((r) => (
              <div key={r.title} className="rounded-lg bg-cream-2 border border-line p-6">
                <p className="font-heading text-xl font-medium text-summer mb-2">{r.title}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <AffiliateCTA
              partner="hotels-seasonal"
              sid="summer_browse_all"
              destination="Lapland, Finland"
              query={{ checkin: '2026-06-15', checkout: '2026-06-22' }}
              className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-ivory font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-4 rounded-full no-underline"
            >
              {c.cta}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
