import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Hotels', to: '/hotels' },
  { label: 'Activities', to: '/activities' },
  { label: 'Flights', to: '/flights' },
  { label: 'Cars', to: '/cars' },
  { label: 'Packages', to: '/packages' },
  { label: 'Summer', to: '/summer' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(15,23,42,0.04)]'
          : 'bg-cream/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link to="/" className="no-underline" aria-label="LaplandDeals home">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors no-underline ${
                    active ? 'text-finland-blue' : 'text-ink-soft hover:text-vibe-pink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            to="/hotels"
            className="hidden lg:inline-flex items-center text-[13px] font-bold uppercase tracking-[0.12em] bg-ink hover:bg-finland-blue text-ivory px-5 py-2.5 rounded-full transition-colors no-underline"
          >
            Tonight's deals
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-ink hover:text-vibe-pink transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cream/98 backdrop-blur-md border-t border-line">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-[15px] font-semibold uppercase tracking-[0.1em] no-underline py-3 px-2 rounded-md transition-colors ${
                    active ? 'text-finland-blue bg-cream-2' : 'text-ink-soft hover:text-vibe-pink hover:bg-cream-2'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/hotels"
              className="block text-center text-[14px] font-bold uppercase tracking-[0.12em] bg-ink text-ivory mt-3 px-5 py-3 rounded-full no-underline"
            >
              Tonight's deals
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
