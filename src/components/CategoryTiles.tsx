import { Link } from 'react-router-dom';
import { Hotel, Sparkles, Plane, Car, Calendar, Sun, ArrowRight } from 'lucide-react';

const tiles = [
  { to: '/hotels',     label: 'Hotels & Cabins',  icon: Hotel,    tint: 'from-[#1e3a8a] to-[#0F172A]', count: 'Glass igloos · Slope-side · Wilderness lodges' },
  { to: '/activities', label: 'Activities',       icon: Sparkles, tint: 'from-[#0c4a6e] to-[#0F172A]', count: 'Husky · Aurora · Snowmobile · Reindeer' },
  { to: '/flights',    label: 'Flights',          icon: Plane,    tint: 'from-[#7c2d12] to-[#0F172A]', count: 'Helsinki · Rovaniemi · Kittilä · Ivalo' },
  { to: '/cars',       label: 'Car Hire',         icon: Car,      tint: 'from-[#1e293b] to-[#0F172A]', count: '4WD · Studded tyres · Airport pickup' },
  { to: '/packages',   label: 'Packages',         icon: Calendar, tint: 'from-[#10b981] to-[#0F172A]', count: 'Aurora week · Family breaks · Weekend escapes' },
  { to: '/summer',     label: 'Summer',           icon: Sun,      tint: 'from-[#facc15] to-[#7c2d12]', count: 'Midnight sun · Hiking · Lake stays' },
];

export default function CategoryTiles() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
      {tiles.map(({ to, label, icon: Icon, tint, count }) => (
        <Link
          key={to}
          to={to}
          className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-vibe-pink/50 transition-all duration-300 hover:-translate-y-0.5 no-underline"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${tint}`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative p-5 md:p-6 min-h-[140px] md:min-h-[160px] flex flex-col justify-between">
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-snow/85 group-hover:text-vibe-pink transition-colors" />
            <div>
              <h3 className="font-heading text-xl md:text-2xl tracking-wide text-snow mb-1">
                {label}
              </h3>
              <p className="text-snow/60 text-[11px] md:text-xs leading-snug">
                {count}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-vibe-pink text-xs font-semibold tracking-wide">
                Browse
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
