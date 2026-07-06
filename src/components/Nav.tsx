import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import EcosystemMenu from '../../../shared/EcosystemMenu';
import { useLang, useLocalePath, pick } from '../i18n/useLang';
import { COPY } from '../locales/copy';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langWrapRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].nav;

  // Accessibility aria translations (KO/FR/IT/NL screen-reader leaks fix).
  const ariaSwitchLanguage = pick(lang,
    'Switch language', 'Vaihda kieli', 'Sprache wechseln', '言語を切り替える', 'Cambiar idioma',
    'Mudar idioma', '切换语言', '언어 변경', 'Changer de langue', 'Cambia lingua', 'Taal wijzigen');
  const ariaLanguage = pick(lang,
    'Language', 'Kieli', 'Sprache', '言語', 'Idioma',
    'Idioma', '语言', '언어', 'Langue', 'Lingua', 'Taal');
  const ariaToggleMenu = pick(lang,
    'Toggle menu', 'Avaa/sulje valikko', 'Menü umschalten', 'メニューを開閉する', 'Alternar menú',
    'Alternar menu', '切换菜单', '메뉴 열기/닫기', 'Basculer le menu', 'Apri/chiudi menu', 'Menu wisselen');

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

  useEffect(() => { setOpen(false); setLangOpen(false); }, [pathname]);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!langWrapRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

  type LangCode = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl';
  const URL_PREFIX_OF: Record<LangCode, string> = {
    en: '', fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
    ko: 'kr', fr: 'fr', it: 'it', nl: 'nl',
  };
  const ALL_LANGS: { code: LangCode; label: string; native: string }[] = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'fi', label: 'FI', native: 'Suomi' },
    { code: 'de', label: 'DE', native: 'Deutsch' },
    { code: 'ja', label: 'JA', native: '日本語' },
    { code: 'es', label: 'ES', native: 'Español' },
    { code: 'pt-BR', label: 'BR', native: 'Português' },
    { code: 'zh-CN', label: 'CN', native: '简体中文' },
    { code: 'ko', label: 'KR', native: '한국어' },
    { code: 'fr', label: 'FR', native: 'Français' },
    { code: 'it', label: 'IT', native: 'Italiano' },
    { code: 'nl', label: 'NL', native: 'Nederlands' },
  ];

  const switchTo = (target: LangCode) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('lv_locale_choice', target);
    }
    const bare = pathname.replace(/^\/(fi|de|ja|es|br|cn|kr|fr|it|nl)(?=\/|$)/, '') || '/';
    const prefix = URL_PREFIX_OF[target];
    if (!prefix) {
      navigate(bare);
    } else {
      navigate(bare === '/' ? `/${prefix}` : `/${prefix}${bare}`);
    }
  };

  const currentLangLabel = ALL_LANGS.find((l) => l.code === lang)?.label ?? 'EN';

  const LangDropdown = () => (
    <div className="relative" ref={langWrapRef}>
      <button
        type="button"
        onClick={() => setLangOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={langOpen}
        aria-label={ariaSwitchLanguage}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] border border-ink-soft/40 text-ink-soft hover:border-vibe-pink hover:text-vibe-pink transition-colors"
      >
        <Globe className="w-3.5 h-3.5" />
        {currentLangLabel}
        <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
      </button>
      {langOpen && (
        <ul
          role="listbox"
          aria-label={ariaLanguage}
          className="absolute right-0 top-full mt-2 min-w-[180px] py-1 bg-cream border border-line rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto"
        >
          {ALL_LANGS.map((item) => {
            const isActive = item.code === lang;
            return (
              <li key={item.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => { switchTo(item.code); setLangOpen(false); }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? 'bg-vibe-pink/10 text-vibe-pink font-semibold'
                      : 'text-ink-soft hover:bg-cream-2 hover:text-vibe-pink'
                  }`}
                >
                  <span className="w-8 font-semibold text-xs tracking-wider">{item.label}</span>
                  <span>{item.native}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
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
            <EcosystemMenu lang={lang} currentDomain="laplanddeals.com" variant="light" />
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
            <select
              value={lang}
              onChange={(e) => switchTo(e.target.value as LangCode)}
              aria-label={ariaLanguage}
              className="bg-transparent border border-ink/30 rounded px-2 py-1 text-xs font-semibold uppercase text-ink"
            >
              {ALL_LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
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
