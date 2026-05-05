import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Offer } from '../data/offers';
import { trackAffiliateClick } from '../lib/analytics';

const FLAG_LABEL: Record<NonNullable<Offer['flag']>, string> = {
  'last-minute':   'Last-minute',
  'end-of-season': 'End of season',
  'summer':        'Midnight sun',
  'package':       'Multi-day',
  'editor-pick':   "Editor's pick",
};

const FLAG_STYLE: Record<NonNullable<Offer['flag']>, string> = {
  'last-minute':   'bg-flash-red text-ivory',
  'end-of-season': 'bg-finland-blue text-ivory',
  'summer':        'bg-flash-yellow text-ivory',
  'package':       'bg-vibe-pink text-ivory',
  'editor-pick':   'bg-ivory text-ink border border-line-2',
};

const PARTNER_LABEL: Record<Offer['partner'], string> = {
  'hotels.com':      'Hotels.com',
  'trip.com':        'Trip.com',
  'getyourguide':    'GetYourGuide',
  'economybookings': 'EconomyBookings',
};

interface Props {
  offer: Offer;
  size?: 'sm' | 'md' | 'lg';
  /** When true and image exists in /public/images, show the photograph. Default true. */
  showImage?: boolean;
}

export default function OfferCard({ offer, size = 'md', showImage = true }: Props) {
  const heightClass =
    size === 'lg' ? 'h-72 md:h-[22rem]' :
    size === 'sm' ? 'h-44' :
    'h-60 md:h-64';

  const handleClick = () => {
    trackAffiliateClick(offer.partner, offer.id, offer.href);
  };

  return (
    <a
      href={offer.href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={handleClick}
      className="group flex flex-col overflow-hidden rounded-lg bg-ivory border border-line hover:border-line-2 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-0.5 no-underline"
    >
      {/* Visual */}
      <div className={`relative ${heightClass} overflow-hidden bg-cream-2`}>
        {showImage && (
          <img
            src={`/images/offer-${offer.id}.webp`}
            alt={offer.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        )}

        {/* Subtle bottom fade for legibility on bright photos */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

        {/* Flag badge */}
        {offer.flag && (
          <span
            className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase shadow-sm ${FLAG_STYLE[offer.flag]}`}
          >
            {offer.flag === 'last-minute' && <span className="w-1.5 h-1.5 rounded-full bg-ivory deal-pulse" />}
            {FLAG_LABEL[offer.flag]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-1.5 text-ink-mute text-[11px] uppercase tracking-[0.16em] mb-2">
          <MapPin className="w-3 h-3 shrink-0" />
          <span>{offer.location}</span>
        </div>

        <h3 className="font-heading text-xl md:text-[1.4rem] font-medium text-ink leading-snug mb-2.5">
          {offer.title}
        </h3>

        <p className="text-ink-soft text-[14px] leading-relaxed mb-5 flex-1">
          {offer.blurb}
        </p>

        <div className="flex items-end justify-between mt-auto pt-4 border-t border-line">
          <div className="flex flex-col">
            <span className="text-ink-mute text-[10px] uppercase tracking-[0.14em]">Live prices</span>
            <span className="text-ink text-[13px] font-semibold tracking-tight">
              {PARTNER_LABEL[offer.partner]}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-vibe-pink text-[13px] font-bold tracking-[0.04em]">
            See deals
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
