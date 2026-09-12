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
 * Category tiles.
 *
 * 11.9.: the text left the photograph for a solid deep-night band (Vesa:
 * "tekstit ei erotu") — contrast is an invariant (17:1) and measured.
 * 12.9.: the " · " hint chain became chips so a wrap could not orphan a dot —
 * and Vesa: "otsikot pitää mahtua samalle riville … laatikot ei ole
 * samankokoisia ja samassa rivissä nätisti". So: one tile per row on phones
 * (a half-width tile cannot hold "HOTELLIT & MÖKIT" on one line), and the
 * chips are full-width rows of one fixed height — the network's mobile rule
 * (feedback_mobile_uniform_grid: when option names differ in length, one
 * full-width row per option; measure widths and heights into a Set, more
 * than one value = unfinished). The layout gate fails a title that wraps and
 * chips whose widths or heights differ inside a tile.
 */
export default function CategoryTiles() {
  const lang = useLang();
  const to = useLocalePath();
  const tiles = COPY[lang].tiles;
  const browseLabel = COPY[lang].card.browse;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6" data-category-tiles>
      {tiles.map((tile, i) => {
        const meta = TILE_META[i];
        const items = tile.hint.split(/\s*[·・]\s*/).filter(Boolean);
        return (
          <Link
            key={meta.to}
            to={to(meta.to)}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-cream-2 no-underline transition-all duration-500 hover:-translate-y-0.5 hover:border-line-2"
          >
            <div className="relative aspect-[2/1] overflow-hidden sm:aspect-[16/10]">
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
              <h3 className="mb-3 font-heading text-2xl leading-tight text-snow md:text-[1.7rem]" data-tile-title>{tile.label}</h3>
              <ul className="mb-4 flex flex-col gap-1.5" aria-label={tile.hint} data-tile-chips>
                {items.map((item) => (
                  <li key={item} className="flex h-8 items-center rounded-md bg-snow/10 px-3 text-[11px] uppercase tracking-[0.12em] text-snow/90 md:text-xs">
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
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
