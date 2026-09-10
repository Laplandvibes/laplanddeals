import { useState, useEffect} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { Menu, X} from 'lucide-react';
import Logo from './Logo';
import EcosystemMenu from '../shared/EcosystemMenu';
import { useLang, useLocalePath, pick } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].nav;

  // Accessibility aria translations (KO/FR/IT/NL screen-reader leaks fix).
  const ariaToggleMenu = pick(lang,
    'Toggle menu', 'Avaa/sulje valikko', 'Menü umschalten', 'メニューを開閉する', 'Alternar menú',
    'Alternar menu', '切换菜单', '메뉴 열기/닫기', 'Basculer le menu', 'Apri/chiudi menu', 'Menu openen/sluiten', 'Växla meny');

  const navLinks = [
    { label: c.hotels,     to: to('/hotels') },
    { label: c.activities, to: to('/activities') },
    { label: c.flights,    to: to('/flights') },
    { label: c.cars,       to: to('/cars') },
    { label: c.packages,   to: to('/packages') },
    { label: c.summer,     to: to('/summer') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);





  const LangDropdown = () => (
    <div className="relative">
      <LanguageSwitcher tone={'dark'} />
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(15,23,42,0.04)]'
          : 'bg-cream/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 h-16 md:h-[72px]">
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            {/* NB: "cream" tokens are remapped to deep-night since the 2026-06-27 dark
    redesign — the nav is DARK, so the menu uses the default dark variant. */}
            <EcosystemMenu lang={lang} currentDomain="laplanddeals.com" />
            <Link to={to('/')} className="no-underline" aria-label="LaplandDeals home">
              <Logo />
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors no-underline ${
                    active ? 'text-vibe-pink' : 'text-ink-soft hover:text-vibe-pink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <LangDropdown />
            <Link
              to={to('/hotels')}
              className="inline-flex items-center text-[13px] font-bold uppercase tracking-[0.12em] bg-vibe-pink hover:bg-vibe-pink-2 text-ivory px-5 py-2.5 rounded-full transition-colors no-underline"
            >
              {c.tonightsCta}
            </Link>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <div className="relative inline-flex items-center">
              <LanguageSwitcher tone={'dark'} />
            </div>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2 -mr-2 text-ink hover:text-vibe-pink transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={ariaToggleMenu}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-cream/98 backdrop-blur-md border-t border-line">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-[15px] font-semibold uppercase tracking-[0.1em] no-underline py-3 px-2 rounded-md transition-colors ${
                    active ? 'text-vibe-pink bg-cream-2' : 'text-ink-soft hover:text-vibe-pink hover:bg-cream-2'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to={to('/hotels')}
              className="block text-center text-[14px] font-bold uppercase tracking-[0.12em] bg-vibe-pink text-ivory mt-3 px-5 py-3 rounded-full no-underline"
            >
              {c.tonightsCta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
