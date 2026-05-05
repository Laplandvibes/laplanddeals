import { Sparkles, Snowflake, Sun, Calendar, MapPin, Plane } from 'lucide-react';

/**
 * "Today's pulse" — concrete, real, dramatic data points instead of fake
 * inventory hits. Every line is a verifiable seasonal/operational pattern,
 * not an invented "1 room left" hook. We update the dates here whenever
 * Vesa pushes (manual refresh until a real partner-API feed lands).
 */
const pulse = [
  {
    icon: Snowflake,
    when: 'Right now',
    title: 'End-of-season window opening',
    body: 'Mid-March to mid-April: full snow, longer daylight, ski resorts at 30-40% off Christmas peak. Levi & Ylläs both running every lift.',
  },
  {
    icon: Sparkles,
    when: 'Through April 5',
    title: 'Aurora season — final weeks',
    body: 'Active aurora window closes early April. Saariselkä, Inari, Utsjoki run highest visible-aurora rates. Hunts cancellation usually 24h before — easy to add late.',
  },
  {
    icon: Calendar,
    when: 'Holy Week (Mar 30 – Apr 5, 2026)',
    title: 'Pääsiäinen books out fast',
    body: 'Finnish school holiday — domestic demand on cabins peaks for one week. If you want a cabin then, Hotels.com inventory thins ~3 weeks ahead.',
  },
  {
    icon: MapPin,
    when: 'Christmas 2026',
    title: 'Already on the books',
    body: 'Glass igloos + Santa Claus Village family rooms typically close to bookings late August. Christmas Eve dinners + reindeer-sleigh slots: usually gone by October.',
  },
  {
    icon: Plane,
    when: 'Sweet spot for fares',
    title: '4–8 weeks out from Helsinki',
    body: 'Finnair / Norwegian HEL→Lapland round-trips drop into the €89-129 band when booked 4-8 weeks ahead — outside peak Christmas / Pääsiäinen / February breaks.',
  },
  {
    icon: Sun,
    when: 'June 6 – July 7',
    title: '32 days the sun never sets',
    body: 'Above 70°N (Inari, Utsjoki). Lakeside cabins 30-50% under winter rates. Mosquitoes peak late June; ruska autumn peaks early September.',
  },
];

export default function TodaysPulse() {
  return (
    <section className="relative bg-ivory border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <p className="text-finland-blue text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
              Today's pulse
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[1.05] text-ink">
              <span className="italic font-light">What’s</span> happening on Lapland right now.
            </h2>
            <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">
              Concrete seasonal facts — not invented countdowns. We update this whenever the situation moves.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {pulse.map(({ icon: Icon, when, title, body }) => (
            <div key={title} className="rounded-lg bg-cream-2/50 border border-line p-6 hover:border-finland-blue/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-finland-blue" />
                <span className="text-finland-blue text-[10px] font-bold uppercase tracking-[0.18em]">
                  {when}
                </span>
              </div>
              <h3 className="font-heading text-xl font-medium text-ink mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-ink-soft text-[14px] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
