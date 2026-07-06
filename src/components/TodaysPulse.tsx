import { Sparkles, Snowflake, Sun, Calendar, MapPin, Plane } from 'lucide-react';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

const ICONS = [Snowflake, Sparkles, Calendar, MapPin, Plane, Sun];

export default function TodaysPulse() {
  const lang = useLang();
  const c = COPY[lang].pulse;

  return (
    <section className="relative bg-cream-2 border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <p className="text-vibe-pink text-[11px] uppercase tracking-[0.28em] mb-3 font-bold">
              {c.eyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[1.05] text-ink">
              <span className="italic font-light">{c.titleItalic}</span> {c.titleRest}
            </h2>
            <p className="text-ink-soft text-base sm:text-lg mt-4 leading-relaxed max-w-xl">
              {c.lead}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {c.items.map((item, i) => {
            const Icon = ICONS[i] || Snowflake;
            return (
              <div key={item.title} className="rounded-lg bg-cream-2/50 border border-line p-6 hover:border-vibe-pink/40 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-vibe-pink" />
                  <span className="text-vibe-pink text-[10px] font-bold uppercase tracking-[0.18em]">
                    {item.when}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-medium text-ink mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-ink-soft text-[14px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
