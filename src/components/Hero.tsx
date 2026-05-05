import { Link } from 'react-router-dom';
import { Hotel, Sparkles, Plane, Car, Calendar, Sun, ArrowDown, Tag } from 'lucide-react';

const quickTabs = [
  { to: '/hotels',     label: 'Hotels',     icon: Hotel },
  { to: '/activities', label: 'Activities', icon: Sparkles },
  { to: '/flights',    label: 'Flights',    icon: Plane },
  { to: '/cars',       label: 'Cars',       icon: Car },
  { to: '/packages',   label: 'Packages',   icon: Calendar },
  { to: '/summer',     label: 'Summer',     icon: Sun },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      {/* Layered gradient background — replaces banned Unsplash hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e1b4b] to-[#312e81]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(250,204,21,0.10),transparent_55%)]" />

      {/* Subtle aurora-ribbon — pure CSS */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[140%] h-96 bg-gradient-to-r from-transparent via-vibe-pink/15 to-transparent blur-3xl rotate-[-6deg]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-vibe-pink/10 border border-vibe-pink/30 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
            <Tag className="w-4 h-4 text-vibe-pink" />
            <span className="text-snow/90 text-xs sm:text-sm font-medium tracking-wide">
              Last-minute deals · End-of-season clearouts · Summer offers
            </span>
          </div>

          {/* Logo XL with hashtag glow */}
          <h1 className="mb-6 sm:mb-8">
            <span className="block font-heading tracking-wide text-5xl sm:text-7xl lg:text-8xl leading-none">
              <span className="text-vibe-pink drop-shadow-[0_0_40px_rgba(236,72,153,0.8)]">#</span>
              <span className="text-snow">LAPLAND</span>
              <span className="text-vibe-pink drop-shadow-[0_0_40px_rgba(236,72,153,0.8)]">DEALS</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-heading tracking-wide text-2xl sm:text-4xl lg:text-5xl text-snow mb-4 sm:mb-6">
            Live deals on Lapland — checked daily.
          </p>

          <p className="text-snow/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Curated last-minute offers on hotels, husky safaris, flights to Rovaniemi and car hire.
            We don't invent percentages — partners show today's real rate.
          </p>

          {/* Quick category tabs */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 max-w-3xl mx-auto mb-8 sm:mb-10">
            {quickTabs.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex flex-col items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-vibe-pink/10 hover:border-vibe-pink/40 transition-all duration-200 no-underline min-h-[44px]"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-snow/75 group-hover:text-vibe-pink transition-colors" />
                <span className="text-snow/85 group-hover:text-snow text-[11px] sm:text-sm font-semibold tracking-wide">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href="#deals"
              className="inline-flex items-center justify-center gap-2 bg-vibe-pink hover:bg-vibe-pink-2 text-snow font-bold px-7 py-3.5 rounded-xl text-base transition-colors no-underline"
            >
              Browse today's deals
              <ArrowDown className="w-4 h-4" />
            </a>
            <Link
              to="/summer"
              className="inline-flex items-center justify-center gap-2 border border-flash-yellow/50 bg-flash-yellow/5 hover:bg-flash-yellow/10 text-flash-yellow font-bold px-7 py-3.5 rounded-xl text-base transition-colors no-underline"
            >
              <Sun className="w-4 h-4" />
              Summer & midnight sun
            </Link>
          </div>

          {/* Trust micro-strip */}
          <p className="mt-8 sm:mt-10 text-snow/45 text-xs sm:text-sm">
            Built by the #LaplandVibes network · Verified Hotels.com · Trip.com · GetYourGuide partners
          </p>
        </div>
      </div>

      {/* Smooth fade into next section so the gradient doesn't end abruptly */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-deep-night" />

      {/* Sentinel for "Browse today's deals" anchor scroll */}
      <span id="deals" className="absolute bottom-0" />
    </section>
  );
}
