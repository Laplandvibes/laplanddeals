import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect, useReducer, lazy, Suspense, type ReactNode } from 'react';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import SharedFooter from '../../shared/Footer';
import SharedCookieBanner from '../../shared/CookieBanner';
import NewsletterPopup from './components/NewsletterPopup';
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect';
import { useHtmlLang, useLang } from './i18n/useLang';
import { COPY, loadCopy } from './locales/copy';
import { footerDict } from './locales/footerDict';

/**
 * Non-EN copy lives in per-language lazy chunks (see locales/copy.ts).
 * Gate the UI until the active language's chunk is registered in COPY, so
 * every consumer keeps reading COPY[lang] synchronously. EN never waits.
 */
function CopyGate({ children }: { children: ReactNode }) {
  const lang = useLang();
  const [, bump] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    let alive = true;
    if (!COPY[lang]) loadCopy(lang).then(() => { if (alive) bump(); });
    return () => { alive = false; };
  }, [lang]);
  if (!COPY[lang]) return <div className="min-h-screen bg-cream" />;
  return <>{children}</>;
}

const Home = lazy(() => import('./pages/Home'))
const Hotels = lazy(() => import('./pages/Hotels'))
const Activities = lazy(() => import('./pages/Activities'))
const Flights = lazy(() => import('./pages/Flights'))
const Cars = lazy(() => import('./pages/Cars'))
const Packages = lazy(() => import('./pages/Packages'))
const Summer = lazy(() => import('./pages/Summer'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const pillarLinks = [
  { name: 'Hotels',     href: '/hotels' },
  { name: 'Activities', href: '/activities' },
  { name: 'Flights',    href: '/flights' },
  { name: 'Cars',       href: '/cars' },
  { name: 'Packages',   href: '/packages' },
  { name: 'Summer',     href: '/summer' },
];

function LocaleSync() {
  // Read pathname directly so the effect re-runs on every route change, including
  // the LocaleAutoRedirect replace() that happens immediately after mount. Using
  // useLayoutEffect ensures the <html lang> attribute is updated before paint so
  // assistive tech and SEO crawlers see the correct value.
  const lang = useHtmlLang();
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [lang, pathname]);
  useEffect(() => {
    // Safety net: if some other script (analytics, GTM) rewrites <html lang>
    // after our layout effect, this re-asserts the correct value once paint
    // has settled.
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [lang, pathname]);
  return null;
}

function AppLayout() {
  const lang = useLang();
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <LocaleAutoRedirect />
      <LocaleSync />
      <CopyGate>
      <Nav />
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fi" element={<Home />} />
          <Route path="/de" element={<Home />} />

          <Route path="/hotels" element={<Hotels />} />
          <Route path="/fi/hotels" element={<Hotels />} />
          <Route path="/de/hotels" element={<Hotels />} />

          <Route path="/activities" element={<Activities />} />
          <Route path="/fi/activities" element={<Activities />} />
          <Route path="/de/activities" element={<Activities />} />

          <Route path="/flights" element={<Flights />} />
          <Route path="/fi/flights" element={<Flights />} />
          <Route path="/de/flights" element={<Flights />} />

          <Route path="/cars" element={<Cars />} />
          <Route path="/fi/cars" element={<Cars />} />
          <Route path="/de/cars" element={<Cars />} />

          <Route path="/packages" element={<Packages />} />
          <Route path="/fi/packages" element={<Packages />} />
          <Route path="/de/packages" element={<Packages />} />

          <Route path="/summer" element={<Summer />} />
          <Route path="/fi/summer" element={<Summer />} />
          <Route path="/de/summer" element={<Summer />} />

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/fi/privacy" element={<PrivacyPolicy />} />
          <Route path="/de/privacy" element={<PrivacyPolicy />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/fi/terms" element={<Terms />} />
          <Route path="/de/terms" element={<Terms />} />

          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/fi/cookie-policy" element={<CookiePolicy />} />
          <Route path="/de/cookie-policy" element={<CookiePolicy />} />
      {/* JA */}
          <Route path="/ja" element={<Home />} />
          <Route path="/ja/hotels" element={<Hotels />} />
          <Route path="/ja/activities" element={<Activities />} />
          <Route path="/ja/flights" element={<Flights />} />
          <Route path="/ja/cars" element={<Cars />} />
          <Route path="/ja/packages" element={<Packages />} />
          <Route path="/ja/summer" element={<Summer />} />
          <Route path="/ja/privacy" element={<PrivacyPolicy />} />
          <Route path="/ja/terms" element={<Terms />} />
          <Route path="/ja/cookie-policy" element={<CookiePolicy />} />

      {/* ES */}
          <Route path="/es" element={<Home />} />
          <Route path="/es/hotels" element={<Hotels />} />
          <Route path="/es/activities" element={<Activities />} />
          <Route path="/es/flights" element={<Flights />} />
          <Route path="/es/cars" element={<Cars />} />
          <Route path="/es/packages" element={<Packages />} />
          <Route path="/es/summer" element={<Summer />} />
          <Route path="/es/privacy" element={<PrivacyPolicy />} />
          <Route path="/es/terms" element={<Terms />} />
          <Route path="/es/cookie-policy" element={<CookiePolicy />} />

      {/* PT-BR (/br) */}
          <Route path="/br" element={<Home />} />
          <Route path="/br/hotels" element={<Hotels />} />
          <Route path="/br/activities" element={<Activities />} />
          <Route path="/br/flights" element={<Flights />} />
          <Route path="/br/cars" element={<Cars />} />
          <Route path="/br/packages" element={<Packages />} />
          <Route path="/br/summer" element={<Summer />} />
          <Route path="/br/privacy" element={<PrivacyPolicy />} />
          <Route path="/br/terms" element={<Terms />} />
          <Route path="/br/cookie-policy" element={<CookiePolicy />} />

      {/* ZH-CN (/cn) */}
          <Route path="/cn" element={<Home />} />
          <Route path="/cn/hotels" element={<Hotels />} />
          <Route path="/cn/activities" element={<Activities />} />
          <Route path="/cn/flights" element={<Flights />} />
          <Route path="/cn/cars" element={<Cars />} />
          <Route path="/cn/packages" element={<Packages />} />
          <Route path="/cn/summer" element={<Summer />} />
          <Route path="/cn/privacy" element={<PrivacyPolicy />} />
          <Route path="/cn/terms" element={<Terms />} />
          <Route path="/cn/cookie-policy" element={<CookiePolicy />} />

      {/* KO (/kr) */}
          <Route path="/kr" element={<Home />} />
          <Route path="/kr/hotels" element={<Hotels />} />
          <Route path="/kr/activities" element={<Activities />} />
          <Route path="/kr/flights" element={<Flights />} />
          <Route path="/kr/cars" element={<Cars />} />
          <Route path="/kr/packages" element={<Packages />} />
          <Route path="/kr/summer" element={<Summer />} />
          <Route path="/kr/privacy" element={<PrivacyPolicy />} />
          <Route path="/kr/terms" element={<Terms />} />
          <Route path="/kr/cookie-policy" element={<CookiePolicy />} />

      {/* FR */}
          <Route path="/fr" element={<Home />} />
          <Route path="/fr/hotels" element={<Hotels />} />
          <Route path="/fr/activities" element={<Activities />} />
          <Route path="/fr/flights" element={<Flights />} />
          <Route path="/fr/cars" element={<Cars />} />
          <Route path="/fr/packages" element={<Packages />} />
          <Route path="/fr/summer" element={<Summer />} />
          <Route path="/fr/privacy" element={<PrivacyPolicy />} />
          <Route path="/fr/terms" element={<Terms />} />
          <Route path="/fr/cookie-policy" element={<CookiePolicy />} />

      {/* IT */}
          <Route path="/it" element={<Home />} />
          <Route path="/it/hotels" element={<Hotels />} />
          <Route path="/it/activities" element={<Activities />} />
          <Route path="/it/flights" element={<Flights />} />
          <Route path="/it/cars" element={<Cars />} />
          <Route path="/it/packages" element={<Packages />} />
          <Route path="/it/summer" element={<Summer />} />
          <Route path="/it/privacy" element={<PrivacyPolicy />} />
          <Route path="/it/terms" element={<Terms />} />
          <Route path="/it/cookie-policy" element={<CookiePolicy />} />

      {/* NL */}
          <Route path="/nl" element={<Home />} />
          <Route path="/nl/hotels" element={<Hotels />} />
          <Route path="/nl/activities" element={<Activities />} />
          <Route path="/nl/flights" element={<Flights />} />
          <Route path="/nl/cars" element={<Cars />} />
          <Route path="/nl/packages" element={<Packages />} />
          <Route path="/nl/summer" element={<Summer />} />
          <Route path="/nl/privacy" element={<PrivacyPolicy />} />
          <Route path="/nl/terms" element={<Terms />} />
          <Route path="/nl/cookie-policy" element={<CookiePolicy />} />

          <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
      </main>
      <SharedFooter pillarLinks={pillarLinks} dict={footerDict(lang)} />
      </CopyGate>
      <SharedCookieBanner consentKey="laplanddeals_cookie_consent" lang={lang} />
      <NewsletterPopup />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
