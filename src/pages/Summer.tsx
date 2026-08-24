import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import PillarHeader from '../components/PillarHeader';
import { offers } from '../data/offers';
import AffiliateCTA from '../components/AffiliateCTA';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import { useLang, LANG_PREFIX } from '../i18n/useLang';
import { COPY } from '../locales/copy';

export default function Summer() {
  const lang = useLang();
  const c = COPY[lang].summerPage;
  const summerItems = offers(lang).filter((o) => o.flag === 'summer');
  const path = lang === 'en' ? '/summer' : `/${LANG_PREFIX[lang]}/summer`;

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
            {/* No hardcoded checkin/checkout here. They were '2026-06-15' and
                '2026-06-22', so by late August every click opened a Trip.com
                search for a stay that had already ended. Measured through the
                Worker 2026-08-24: checkin/checkout are in PASSTHROUGH and
                Trip.com receives them verbatim; only Sembo has a past-date
                guard, so just the fi_FI reader was protected. Undated, the
                partner opens on its own dates and the reader picks theirs. */}
            <AffiliateCTA
              partner="hotels-seasonal"
              sid="summer_browse_all"
              destination="Lapland, Finland"
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
