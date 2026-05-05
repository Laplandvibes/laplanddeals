import { ArrowUpRight, MapPin } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Offer } from '../data/offers';
import { trackAffiliateClick } from '../lib/analytics';

const FLAG_LABEL: Record<NonNullable<Offer['flag']>, string> = {
  'last-minute':   'Last-minute window',
  'end-of-season': 'End of season',
  'summer':        'Summer / Midnight sun',
  'package':       'Multi-day',
  'editor-pick':   "Editor's pick",
};

const FLAG_STYLE: Record<NonNullable<Offer['flag']>, string> = {
  'last-minute':   'bg-flash-yellow text-deep-night',
  'end-of-season': 'bg-flash-red text-snow',
  'summer':        'bg-flash-yellow text-deep-night',
  'package':       'bg-vibe-pink text-snow',
  'editor-pick':   'bg-snow text-deep-night',
};

const PARTNER_LABEL: Record<Offer['partner'], string> = {
  'hotels.com':      'on Hotels.com',
  'trip.com':        'on Trip.com',
  'getyourguide':    'on GetYourGuide',
  'economybookings': 'on EconomyBookings',
};

interface Props {
  offer: Offer;
  size?: 'sm' | 'md' | 'lg';
}

export default function OfferCard({ offer, size = 'md' }: Props) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[offer.icon] ?? Icons.Tag;

  const heightClass =
    size === 'lg' ? 'h-72 md:h-80' :
    size === 'sm' ? 'h-44' :
    'h-56';

  const handleClick = () => {
    trackAffiliateClick(offer.partner, offer.id, offer.href);
  };

  return (
    <a
      href={offer.href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={handleClick}
      className="group flex flex-col overflow-hidden rounded-2xl bg-[#1E293B] border border-white/10 hover:border-vibe-pink/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-vibe-pink/10 no-underline"
    >
      {/* Visual */}
      <div className={`relative ${heightClass} overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%)]" />

        {/* Flag badge */}
        {offer.flag && (
          <span
            className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${FLAG_STYLE[offer.flag]}`}
          >
            {offer.flag === 'last-minute' && <span className="w-1.5 h-1.5 rounded-full bg-deep-night deal-pulse" />}
            {FLAG_LABEL[offer.flag]}
          </span>
        )}

        {/* Category icon (large, decorative) */}
        <Icon className="absolute right-5 bottom-5 w-20 h-20 text-snow/20 group-hover:text-snow/30 group-hover:scale-110 transition-all duration-500" />

        {/* Bottom gradient for legibility on the title overlay if used later */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1E293B] to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading text-xl md:text-2xl tracking-wide text-snow mb-2 leading-tight">
          {offer.title}
        </h3>

        <div className="flex items-center gap-1.5 text-snow/55 text-xs mb-3">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>{offer.location}</span>
        </div>

        <p className="text-snow/70 text-sm leading-relaxed mb-5 flex-1">
          {offer.blurb}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <span className="text-snow/45 text-[11px] uppercase tracking-wider">
            Live prices {PARTNER_LABEL[offer.partner]}
          </span>
          <span className="inline-flex items-center gap-1.5 text-vibe-pink text-sm font-bold tracking-wide">
            See deals
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
