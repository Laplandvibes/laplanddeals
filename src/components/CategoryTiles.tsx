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

/**
 * Category tiles. The text no longer floats over the photograph: it sits in
 * a solid deep-night band under it (Vesa 11.9.2026: "tekstit ei erotu,
 * porttien läpi"). Measured on the live tiles before the change: the label
 * over the photo hit 1.0–2.5:1 on bright skies. A solid band makes the
 * contrast an invariant (snow on #0F172A = 17:1) instead of a per-photo
 * gamble — the same move the network's share cards made on 6.9. The layout
 * gate (scripts/check-ui-layout.mjs) measures every tile text node against
 * the pixels behind it and fails under 4.5:1.
 */
export default function CategoryTiles() {
  const lang = useLang();
  const to = useLocalePath();
  const tiles = COPY[lang].tiles;
  const browseLabel = COPY[lang].card.browse;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6" data-category-tiles>
      {tiles.map((tile, i) => {
        const meta = TILE_META[i];
        return (
          <Link
            key={meta.to}
            to={to(meta.to)}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-cream-2 no-underline transition-all duration-500 hover:-translate-y-0.5 hover:border-line-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
              <img
                src={meta.img}
                alt={`${tile.label} deals in Lapland`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-1 flex-col bg-deep-night p-4 md:p-5" data-tile-text>
              <h3 className="mb-1 font-heading text-2xl leading-tight text-snow md:text-[1.7rem]">{tile.label}</h3>
              <p className="mb-3 text-[11px] uppercase leading-snug tracking-[0.14em] text-snow/90 md:text-xs">{tile.hint}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-vibe-pink">
                {browseLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
