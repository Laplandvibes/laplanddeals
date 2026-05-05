import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Each tile uses an image that does NOT appear elsewhere on the home page —
// not in Editor's picks, not in pillar heroes, not in offer cards.
const tiles = [
  { to: '/hotels',     label: 'Hotels & Cabins',  hint: 'Glass igloos · Slope-side · Wilderness lodges',     img: '/images/offer-yllas-cabins.webp' },
  { to: '/activities', label: 'Activities',       hint: 'Husky · Aurora · Snowmobile · Reindeer',            img: '/images/offer-aurora-hunts.webp' },
  { to: '/flights',    label: 'Flights',          hint: 'Helsinki to Rovaniemi · Kittilä · Ivalo · Kuusamo', img: '/images/offer-flight-hel-ivl.webp' },
  { to: '/cars',       label: 'Car Hire',         hint: '4WD · Studded tyres · Airport pickup',              img: '/images/offer-car-ktt.webp' },
  { to: '/packages',   label: 'Packages',         hint: 'Aurora week · Family breaks · Weekend escapes',     img: '/images/offer-package-family-rovaniemi.webp' },
  { to: '/summer',     label: 'Summer',           hint: 'Midnight sun · Hiking · Lakeside cabins',           img: '/images/offer-summer-hiking.webp' },
];

export default function CategoryTiles() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {tiles.map(({ to, label, hint, img }) => (
        <Link
          key={to}
          to={to}
          className="group relative overflow-hidden rounded-lg border border-line hover:border-line-2 transition-all duration-500 hover:-translate-y-0.5 no-underline aspect-[4/5] md:aspect-[4/3]"
        >
          <img
            src={img}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative h-full p-5 md:p-6 flex flex-col justify-end">
            <h3 className="font-heading text-2xl md:text-[1.7rem] font-medium text-ivory leading-tight mb-1">
              {label}
            </h3>
            <p className="text-ivory/75 text-[11px] md:text-xs leading-snug uppercase tracking-[0.14em] mb-3">
              {hint}
            </p>
            <span className="inline-flex items-center gap-1.5 text-ivory text-[12px] font-bold uppercase tracking-[0.12em]">
              Browse
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
