import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Newspaper, Globe, ExternalLink } from 'lucide-react';
import AffiliateDisclosure from '../components/AffiliateDisclosure';
import PageSeo from '../components/PageSeo';
import Hero from '../components/Hero';
import FlashBand from '../components/FlashBand';
import TodaysPulse from '../components/TodaysPulse';
import CategoryTiles from '../components/CategoryTiles';
import OffersGrid from '../components/OffersGrid';
import PartnerAd from '../components/PartnerAd';
import NewsletterSection from '../components/NewsletterSection';
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { offers, getEditorPicks, getLastMinute, getSummerOffers } from '../data/offers';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { AppPromoHero } from '../components/AppPromo';

function SectionHeader({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
      <div className="max-w-2xl">
        <p className="text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
          {eyebrow}
        </p>
        <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[1.05] text-ink">
          {title}
        </h2>
        {lead && (
          <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">
            {lead}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

// Canonical sibling-site URLs (source: shared/Footer + SITE-MAP.md). Order must
// match COPY[lang].related.links: hotelDeals, activities, tours.
const SIBLING_URLS = [
  'https://laplandhoteldeals.com',
  'https://laplandactivities.fi',
  'https://laplandtours.online',
];

const SEO_TITLE: Record<Lang, { title: string; desc: string }> = {
  en: {
    title: 'LaplandDeals: Last-Minute Deals for Finnish Lapland',
    desc: 'Live partner deals on Lapland hotels, husky safaris, flights to Rovaniemi and car hire. Last-minute prices, end-of-season clearouts, summer offers.',
  },
  fi: {
    title: 'LaplandDeals: Last-minute-tarjoukset Suomen Lappiin',
    desc: 'Kumppaneiden live-tarjoukset Lapin hotelleihin, huskysafareihin, lentoihin Rovaniemelle ja autovuokrauksiin. Last-minute-hinnat, kauden lopun mökkiyöt ja kesätarjoukset.',
  },
  de: {
    title: 'LaplandDeals: Last-Minute-Angebote für Finnisch-Lappland',
    desc: 'Live-Partnerangebote für Hotels in Lappland, Husky-Safaris, Flüge nach Rovaniemi und Mietwagen. Last-Minute-Preise, Saisonende-Rabatte, Sommerangebote.',
  },
  ja: {
    title: 'LaplandDeals：フィンランド・ラップランドのお得な旅行プラン',
    desc: 'ラップランドのホテル、ハスキーサファリ、ロヴァニエミ行き航空券、レンタカーの最新パートナーオファー。直前価格・シーズン終了セール・夏季オファーを',
  },
  es: {
    title: 'LaplandDeals: Ofertas de última hora para la Laponia finlandesa',
    desc: 'Ofertas reales de los socios en hoteles de Laponia, safaris en husky, vuelos a Rovaniemi y alquiler de coches. Precios de última hora, descensos de fin de temporada y ofertas de verano.',
  },
  'pt-BR': {
    title: 'LaplandDeals: Ofertas de última hora para a Lapônia finlandesa',
    desc: 'Ofertas reais dos parceiros em hotéis da Lapônia, safáris com huskies, voos para Rovaniemi e aluguel de carro. Preços de última hora, promoções de fim de temporada e ofertas de verão.',
  },
  'zh-CN': {
    title: 'LaplandDeals：芬兰拉普兰临时优惠与特价',
    desc: '拉普兰酒店、哈士奇雪橇、罗瓦涅米航班和租车的合作伙伴实时优惠。临时折扣、季末清仓、夏季优惠。',
  },
  ko: {
    title: 'LaplandDeals: 핀란드 라플란드 직전 예약 특가와 할인',
    desc: '라플란드 호텔, 허스키 사파리, 로바니에미행 항공편, 렌터카의 파트너 실시간 특가. 직전 예약, 시즌 마감 할인, 여름 특가.',
  },
  fr: {
    title: 'LaplandDeals: Offres et promotions de dernière minute pour la Laponie finlandaise',
    desc: "Offres partenaires en direct sur les hôtels de Laponie, safaris en husky, vols pour Rovaniemi et location de voitures. Tarifs de dernière minute, soldes de fin de saison, offres d'été.",
  },
  it: {
    title: 'LaplandDeals: Offerte last-minute e promozioni per la Lapponia finlandese',
    desc: 'Offerte partner in tempo reale su hotel in Lapponia, safari con husky, voli per Rovaniemi e autonoleggio. Prezzi last-minute, sconti di fine stagione, offerte estive.',
  },
  nl: {
    title: 'LaplandDeals: Last-minute aanbiedingen voor Fins Lapland',
    desc: "Live partneraanbiedingen voor Lapland-hotels, husky-safari's, vluchten naar Rovaniemi en autoverhuur. Last-minute prijzen, eindseizoenskortingen, zomeraanbiedingen.",
  },
  sv: {
    title: 'LaplandDeals: sista minuten-erbjudanden till finska Lappland',
    desc: 'Partnernas live-priser på hotell i Lappland, huskysafarier, flyg till Rovaniemi och biluthyrning. Sista minuten-priser, slutrea på säsongen och sommarerbjudanden.',
  },
};

// Per-question links to the deal pages that back each FAQ answer
// (Vesa 2026-07-07: FAQ answers must point to our own supporting content).
// Keys are nav entries → labels come pre-translated in all 11 locales.
const FAQ_ROUTE = {
  hotels: '/hotels',
  activities: '/activities',
  flights: '/flights',
  cars: '/cars',
  packages: '/packages',
  summer: '/summer',
} as const;
const FAQ_LINKS: (keyof typeof FAQ_ROUTE)[][] = [
  ['summer', 'hotels'],       // 1 cheapest time → summer season + hotel deals
  ['hotels', 'activities'],   // 2 how far ahead to book
  ['hotels', 'activities'],   // 3 last-minute deals
  ['packages'],               // 4 what's in a package
  ['hotels', 'summer'],       // 5 finding genuine discounts
];

export default function Home() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang];

  const editorsPicks = getEditorPicks(4, lang);
  const lastMinute = getLastMinute(6, lang);
  const summerPicks = getSummerOffers(4, lang);
  const everything = offers(lang).slice(0, 12);
  const seo = SEO_TITLE[lang];
  const pathSeg: Record<Lang, string> = { en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es', 'pt-BR': '/br', 'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl', sv: '/sv' };
  const path = pathSeg[lang] || '/';
  const inLangMap: Record<Lang, string> = { en: 'en', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv' };
  const inLang = inLangMap[lang];

  const itemList = {
    '@type': 'ItemList',
    name: 'LaplandDeals: featured offers',
    itemListElement: editorsPicks.concat(lastMinute).map((o, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: o.title,
      url: o.href,
    })),
  };

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <PageSeo
        title={seo.title}
        description={seo.desc}
        path={path}
        jsonLd={[
          {
            '@type': 'WebPage',
            name: seo.title,
            url: `https://laplanddeals.com${path === '/' ? '/' : path}`,
            inLanguage: inLang,
          },
          itemList,
          faqSchema,
        ]}
      />

      <Hero />

      {/* ── PÄÄKUMPPANI — kompakti banneri heti heron alla (LV Media) ── */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} />

      <FlashBand />
      <TodaysPulse />

      {/* ── Editor's picks ─────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow={c.sections.pickEyebrow}
            title={c.sections.pickTitle}
            lead={c.sections.pickLead}
          >
            <Link to={to('/hotels')} className="hidden md:inline-flex items-center gap-1 text-ink hover:text-vibe-pink text-[12px] font-bold uppercase tracking-[0.14em] no-underline">
              {c.sections.pickCta} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </SectionHeader>
          <OffersGrid offers={editorsPicks} cols="md:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* ── Kumppanit: kakkospääkumppani + 6 premium-paikkaa (LV Media) ── */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} />

      {/* ── Categories ─────────────────────────────────────────────── */}
      <section className="relative bg-cream-2 py-20 sm:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow={c.sections.categoriesEyebrow}
            title={c.sections.categoriesTitle}
          />
          <CategoryTiles />
        </div>
      </section>

      {/* ── Last-minute ─────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow={c.sections.lastMinEyebrow}
            title={c.sections.lastMinTitle}
            lead={c.sections.lastMinLead}
          />
          <OffersGrid offers={lastMinute} />
        </div>
      </section>

      {/* ── Summer ─────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 border-y border-line bg-flash-yellow-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow={c.sections.summerEyebrow}
            title={c.sections.summerTitle}
            lead={c.sections.summerLead}
          >
            <Link
              to={to('/summer')}
              className="shrink-0 inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-ivory font-bold uppercase tracking-[0.1em] px-6 py-3 rounded-full text-[13px] transition-colors no-underline"
            >
              {c.sections.summerCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionHeader>
          {summerPicks.length > 0 && <OffersGrid offers={summerPicks} cols="md:grid-cols-2 lg:grid-cols-4" />}
        </div>
      </section>

      {/* ── Partner: Lomarengas cottages (distinct from the offer cards) ── */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <PartnerAd advertiser="lomarengas" placement="home_cottages" />
        </div>
      </section>

      {/* ── All ─────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader eyebrow={c.sections.everythingEyebrow} title={c.sections.everythingTitle} />
          <OffersGrid offers={everything} />
          <AffiliateDisclosure variant="block" className="mt-10 max-w-3xl" />
        </div>
      </section>

      {/* ── Trust ─────────────────────────────────────────────────── */}
      <section className="bg-cream-2 border-t border-line py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ShieldCheck, Newspaper, Globe].map((Icon, i) => {
              const t = c.trust[i];
              return (
                <div key={t.title} className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-vibe-pink shrink-0 mt-1" />
                  <div>
                    <p className="font-heading text-lg font-medium text-ink mb-1">{t.title}</p>
                    <p className="text-ink-soft text-sm leading-relaxed">{t.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* App launch block, directly under the site's own opening. At the foot
          of the page it measured 81 % down a 33 000 px front page, and an
          announcement nobody scrolls to is not an announcement. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppPromoHero />
      </div>

      {/* ── FAQ (visible counterpart of the FAQPage JSON-LD above) ──── */}
      <section className="relative py-20 sm:py-24 border-t border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 md:mb-14">
            <p className="text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
              {c.faq.eyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[1.05] text-ink">
              {c.faq.title}
            </h2>
            <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed">
              {c.faq.lead}
            </p>
          </div>
          <div className="space-y-4">
            {c.faq.items.map((f, faqIndex) => (
              <details
                key={f.q}
                className="group rounded-xl border border-line bg-cream-2 open:border-finland-blue/40 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 min-h-[68px] text-ink font-bold text-base sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-vibe-pink transition-transform duration-200 group-open:rotate-45 text-2xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                    {f.a}
                  </p>
                  {(FAQ_LINKS[faqIndex] ?? []).length > 0 && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                      {FAQ_LINKS[faqIndex].map((key) => (
                        <Link
                          key={key}
                          to={to(FAQ_ROUTE[key])}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-vibe-pink hover:text-ink transition-colors no-underline"
                        >
                          {c.nav[key]} <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related sites / where to next ───────────────────────────── */}
      <section className="relative bg-cream-2 py-20 sm:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-14">
            <p className="text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
              {c.related.eyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[1.05] text-ink">
              {c.related.title}
            </h2>
            <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed">
              {c.related.lead}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.related.links.map((l, i) => (
              <a
                key={SIBLING_URLS[i]}
                href={SIBLING_URLS[i]}
                target="_blank"
                rel="noopener"
                className="group flex flex-col rounded-xl border border-line bg-cream p-6 hover:border-finland-blue/50 hover:-translate-y-0.5 transition-all no-underline"
              >
                <span className="inline-flex items-center gap-1.5 font-heading text-xl font-medium text-ink group-hover:text-vibe-pink transition-colors">
                  {l.anchor}
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60" />
                </span>
                <span className="text-ink-soft text-sm leading-relaxed mt-2">
                  {l.blurb}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
