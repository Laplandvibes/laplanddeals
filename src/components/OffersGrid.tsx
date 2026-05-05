import type { Offer } from '../data/offers';
import OfferCard from './OfferCard';

interface Props {
  offers: Offer[];
  /** Tailwind grid-cols class, e.g. "md:grid-cols-2 lg:grid-cols-3". Defaults sensibly. */
  cols?: string;
  cardSize?: 'sm' | 'md' | 'lg';
}

export default function OffersGrid({ offers, cols = 'md:grid-cols-2 lg:grid-cols-3', cardSize = 'md' }: Props) {
  if (!offers.length) return null;
  return (
    <div className={`grid grid-cols-1 ${cols} gap-5 md:gap-6`}>
      {offers.map((o) => (
        <OfferCard key={o.id} offer={o} size={cardSize} />
      ))}
    </div>
  );
}
