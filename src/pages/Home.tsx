import { Link } from 'react-router-dom';
import { Sparkles, Zap, Sun, ArrowRight, ShieldCheck, Newspaper, Globe } from 'lucide-react';
import PageSeo from '../components/PageSeo';
import Hero from '../components/Hero';
import FlashBand from '../components/FlashBand';
import CategoryTiles from '../components/CategoryTiles';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import { offers, getEditorPicks, getLastMinute, getSummerOffers } from '../data/offers';

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

      {/* ── Editor's picks ─────────────────────────────────────────── */}
      <section className="relative bg-deep-night py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 sm:mb-10">
            <div>
              <p className="text-vibe-pink text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Editor's picks
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl tracking-wide text-snow">
                Hand-picked Lapland deals
              </h2>
            </div>
            <Link to="/hotels" className="hidden sm:inline-flex items-center gap-1 text-snow/65 hover:text-vibe-pink text-sm font-semibold no-underline">
              All hotels <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <OffersGrid offers={editorsPicks} cols="md:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────────────── */}
      <section className="relative bg-deep-night-2 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-vibe-pink text-xs uppercase tracking-[0.2em] mb-2">
              Browse by category
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl tracking-wide text-snow">
              Find your kind of Lapland deal
            </h2>
          </div>
          <CategoryTiles />
        </div>
      </section>

      {/* ── Last-minute window ─────────────────────────────────────── */}
      <section className="relative bg-deep-night py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-flash-yellow text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Last-minute window
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl tracking-wide text-snow">
                Going within the next two weeks?
              </h2>
              <p className="text-snow/60 text-base mt-3 max-w-2xl">
                Cabin nights, husky slots and aurora hunts that often have last-minute openings.
                Live partner availability — refreshed on every click.
              </p>
            </div>
          </div>
          <OffersGrid offers={lastMinute} />
        </div>
      </section>

      {/* ── Summer / midnight sun (kesä-sääntö) ─────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#facc15]/10 via-deep-night-2 to-deep-night py-16 sm:py-20 border-y border-flash-yellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-flash-yellow text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4" /> Midnight sun · Jun 6 – Jul 7
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl tracking-wide text-snow">
                Summer in Lapland is cheaper than you think
              </h2>
              <p className="text-snow/65 text-base mt-3 max-w-2xl">
                32 days the sun never sets. Lakeside cabins at a fraction of December rates.
                Hiking peaks late August — clean air, no mosquitoes, ruska gold.
              </p>
            </div>
            <Link to="/summer" className="shrink-0 inline-flex items-center gap-2 bg-flash-yellow text-deep-night font-bold px-5 py-3 rounded-xl text-sm tracking-wide whitespace-nowrap hover:bg-flash-yellow/85 transition-colors no-underline">
              Browse summer deals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {summerPicks.length > 0 && <OffersGrid offers={summerPicks} cols="md:grid-cols-2 lg:grid-cols-4" />}
        </div>
      </section>

      {/* ── All deals (preview) ─────────────────────────────────────── */}
      <section className="relative bg-deep-night py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 sm:mb-10">
            <div>
              <p className="text-vibe-pink text-xs uppercase tracking-[0.2em] mb-2">
                Everything
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl tracking-wide text-snow">
                Today's catalogue
              </h2>
            </div>
          </div>
          <OffersGrid offers={everything} />
        </div>
      </section>

      {/* ── Trust strip ─────────────────────────────────────────────── */}
      <section className="bg-deep-night-2 border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Honest curation', body: 'Live partner prices. Never invented percentages or fake countdowns.' },
              { icon: Newspaper,   title: 'Reviewed by locals', body: 'Curated by people who actually live and travel in Finnish Lapland.' },
              { icon: Globe,       title: 'Part of #LaplandVibes', body: '23+ sister sites. One ecosystem. One newsletter. One source of truth.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="w-7 h-7 text-vibe-pink shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-lg tracking-wide text-snow mb-1">{title}</p>
                  <p className="text-snow/65 text-sm leading-relaxed">{body}</p>
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
