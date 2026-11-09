import type { Offer } from '../data/offers';
import OfferCard from './OfferCard';

interface Props {
  offers: Offer[];
  cols?: string;
  cardSize?: 'sm' | 'md' | 'lg';
}

export default function OffersGrid({ offers, cols = 'md:grid-cols-2 lg:grid-cols-3', cardSize = 'md' }: Props) {
  if (!offers.length) return null;
  return (
    // Kahdessa sarakkeessa (768–1023 px) pariton viimeinen kortti keskelle muiden levyisenä, ei venytetä
    // (gate:tabletti laaja 9.11.2026, hubin DestinationGrid-malli). Kaikki kutsujat käyttävät md:grid-cols-2.
    <div className={`grid grid-cols-1 ${cols} gap-6 md:gap-8 md:max-lg:[&>*:last-child:nth-child(odd)]:col-span-2 md:max-lg:[&>*:last-child:nth-child(odd)]:justify-self-center md:max-lg:[&>*:last-child:nth-child(odd)]:w-[calc(50%_-_16px)]`}>
      {offers.map((o) => (
        <OfferCard key={o.id} offer={o} size={cardSize} />
      ))}
    </div>
  );
}
