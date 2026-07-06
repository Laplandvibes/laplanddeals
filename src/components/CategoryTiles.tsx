import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

const TILE_META = [
  { to: '/hotels',     img: '/images/offer-yllas-cabins.webp' },
  { to: '/activities', img: '/images/offer-aurora-hunts.webp' },
  { to: '/flights',    img: '/images/offer-flight-hel-ivl.webp' },
  { to: '/cars',       img: '/images/offer-car-ktt.webp' },
  { to: '/packages',   img: '/images/offer-package-family-rovaniemi.webp' },
  { to: '/summer',     img: '/images/offer-summer-hiking.webp' },
];

export default function CategoryTiles() {
  const lang = useLang();
  const to = useLocalePath();
  const tiles = COPY[lang].tiles;
  const browseLabel = COPY[lang].card.browse;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {tiles.map((tile, i) => {
        const meta = TILE_META[i];
        return (
          <Link
            key={meta.to}
            to={to(meta.to)}
            className="group relative overflow-hidden rounded-lg border border-line hover:border-line-2 transition-all duration-500 hover:-translate-y-0.5 no-underline aspect-[4/5] md:aspect-[4/3]"
          >
            <img
              src={meta.img}
              alt={`${tile.label} deals in Lapland`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative h-full p-5 md:p-6 flex flex-col justify-end">
              <h3 className="font-heading text-2xl md:text-[1.7rem] font-medium text-ivory leading-tight mb-1">
                {tile.label}
              </h3>
              <p className="text-ivory/75 text-[11px] md:text-xs leading-snug uppercase tracking-[0.14em] mb-3">
                {tile.hint}
              </p>
              <span className="inline-flex items-center gap-1.5 text-ivory text-[12px] font-bold uppercase tracking-[0.12em]">
                {browseLabel}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
