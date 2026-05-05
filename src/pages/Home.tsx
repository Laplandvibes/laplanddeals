import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Newspaper, Globe } from 'lucide-react';
import PageSeo from '../components/PageSeo';
import Hero from '../components/Hero';
import FlashBand from '../components/FlashBand';
import TodaysPulse from '../components/TodaysPulse';
import CategoryTiles from '../components/CategoryTiles';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import { offers, getEditorPicks, getLastMinute, getSummerOffers } from '../data/offers';

function SectionHeader({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
      <div className="max-w-2xl">
        <p className="text-finland-blue text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
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

export default function Home() {
  const editorsPicks = getEditorPicks(4);
  const lastMinute = getLastMinute(6);
  const summerPicks = getSummerOffers(4);
  const everything = offers.slice(0, 12);

  const itemList = {
    '@type': 'ItemList',
    name: 'LaplandDeals — featured offers',
    itemListElement: editorsPicks.concat(lastMinute).map((o, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: o.title,
      url: o.href,
    })),
  };

  return (
    <>
      <PageSeo
        title="LaplandDeals — Last-Minute Deals & Offers for Finnish Lapland"
        description="Live partner deals on Lapland hotels, husky safaris, flights to Rovaniemi and car hire. Last-minute prices, end-of-season clearouts, summer offers — checked daily."
        path="/"
        jsonLd={[
          {
            '@type': 'WebPage',
            name: 'LaplandDeals — Last-Minute Deals & Offers for Finnish Lapland',
            url: 'https://laplanddeals.com/',
            inLanguage: 'en',
          },
          itemList,
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Are LaplandDeals prices real or invented?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every deal links to a live partner search (Hotels.com, Trip.com, GetYourGuide, EconomyBookings). The partner shows today\'s actual price the moment you click — we never invent percentages or expiry timers.',
                },
              },
              {
                '@type': 'Question',
                name: 'When is the cheapest time to visit Lapland?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Mid-March to mid-April is end-of-season — full snow, longer daylight, lower cabin and ski prices. Late April to early June is shoulder season. Summer (June–August) has midnight-sun cabin deals at a fraction of winter rates.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where do these deals come from?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We curate a list of categories and destinations across Finnish Lapland and link each card to a live affiliate search on Hotels.com, Trip.com, GetYourGuide or EconomyBookings. Pricing is theirs; the curation is ours.',
                },
              },
            ],
          },
        ]}
      />

      <Hero />
      <FlashBand />
      <TodaysPulse />

      {/* ── Editor's picks ─────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="Editor's picks"
            title="Quietly curated for the season ahead."
            lead="The places we'd send our own friends. Each links to today's live partner price."
          >
            <Link to="/hotels" className="hidden md:inline-flex items-center gap-1 text-ink hover:text-vibe-pink text-[12px] font-bold uppercase tracking-[0.14em] no-underline">
              All hotels <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </SectionHeader>
          <OffersGrid offers={editorsPicks} cols="md:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────────────── */}
      <section className="relative bg-cream-2 py-20 sm:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="Browse by category"
            title="Find your kind of Lapland deal."
          />
          <CategoryTiles />
        </div>
      </section>

      {/* ── Last-minute ─────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="Last-minute window"
            title="Going within the next two weeks?"
            lead="Cabin nights, husky slots and aurora hunts that often have last-minute openings. Live partner availability — refreshed on every click."
          />
          <OffersGrid offers={lastMinute} />
        </div>
      </section>

      {/* ── Summer (kesä-sääntö) ─────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 border-y border-line bg-flash-yellow-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="Midnight sun · Jun 6 – Jul 7"
            title="Summer in Lapland is the secret deal."
            lead="32 days the sun never sets. Lakeside cabins at a fraction of December rates. Hiking peaks late August — clean air, no mosquitoes, ruska gold."
          >
            <Link
              to="/summer"
              className="shrink-0 inline-flex items-center gap-2 bg-ink hover:bg-finland-blue text-ivory font-bold uppercase tracking-[0.1em] px-6 py-3 rounded-full text-[13px] transition-colors no-underline"
            >
              Browse summer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionHeader>
          {summerPicks.length > 0 && <OffersGrid offers={summerPicks} cols="md:grid-cols-2 lg:grid-cols-4" />}
        </div>
      </section>

      {/* ── All (preview) ─────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader eyebrow="Everything" title="Today's catalogue." />
          <OffersGrid offers={everything} />
        </div>
      </section>

      {/* ── Trust ─────────────────────────────────────────────────── */}
      <section className="bg-cream-2 border-t border-line py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Honest curation', body: 'Live partner prices. Never invented percentages or fake countdowns.' },
              { icon: Newspaper,   title: 'Reviewed by locals', body: 'Curated by people who actually live and travel in Finnish Lapland.' },
              { icon: Globe,       title: 'Part of #LaplandVibes', body: '23+ sister sites. One ecosystem. One newsletter. One source of truth.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="w-6 h-6 text-finland-blue shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-lg font-medium text-ink mb-1">{title}</p>
                  <p className="text-ink-soft text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
