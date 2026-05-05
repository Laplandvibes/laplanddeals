import { Hotel } from 'lucide-react';
import PageSeo, { pillarBreadcrumb } from '../components/PageSeo';
import OffersGrid from '../components/OffersGrid';
import NewsletterSection from '../components/NewsletterSection';
import AffiliateCTA from '../components/AffiliateCTA';
import { getOffers } from '../data/offers';

export default function Hotels() {
  const items = getOffers({ category: 'hotels' });

  return (
    <>
      <PageSeo
        title="Lapland Hotel Deals — Glass Igloos, Slope-Side, Wilderness Cabins"
        description="Live Hotels.com prices for glass igloos, ski-in stays, family hotels and wilderness lodges across Finnish Lapland. Last-minute and end-of-season cabin nights."
        path="/hotels"
        jsonLd={[pillarBreadcrumb('Hotels', '/hotels')]}
      />

      <PillarHeader
        eyebrow="Hotels"
        h1="Lapland hotel deals — live prices on Hotels.com"
        sub="Glass igloos under the aurora belt, slope-side properties on Levi, wilderness lodges in Ylläs, and family hotels in Rovaniemi. Compare tonight's rates."
        icon={Hotel}
        accent="from-[#1e3a8a] via-[#312e81] to-[#0F172A]"
      />

      <section className="relative bg-deep-night py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OffersGrid offers={items} />
        </div>
      </section>

      <section className="bg-deep-night-2 py-12 border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-snow mb-3">
            Don't see your destination?
          </h2>
          <p className="text-snow/65 mb-6">
            Search any Lapland town directly on Hotels.com.
          </p>
          <AffiliateCTA
            partner="hotels"
            sid="hotels_pillar_browse_all"
            destination="Finnish Lapland"
            className="inline-flex items-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-snow font-bold px-7 py-3.5 rounded-xl no-underline"
          >
            Browse all Lapland hotels →
          </AffiliateCTA>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

interface HeaderProps {
  eyebrow: string;
  h1: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

function PillarHeader({ eyebrow, h1, sub, icon: Icon, accent }: HeaderProps) {
  return (
    <header className="relative overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.20),transparent_55%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-vibe-pink/10 border border-vibe-pink/30 rounded-full px-4 py-1.5 mb-5">
          <Icon className="w-4 h-4 text-vibe-pink" />
          <span className="text-snow/85 text-xs sm:text-sm font-medium tracking-wide uppercase">{eyebrow}</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-wide text-snow mb-4 leading-tight">
          {h1}
        </h1>
        <p className="text-snow/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
      </div>
    </header>
  );
}

export { PillarHeader };
