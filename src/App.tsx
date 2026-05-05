import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import SharedFooter from '../../shared/Footer';
import SharedCookieBanner from '../../shared/CookieBanner';
import NewsletterPopup from './components/NewsletterPopup';

import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Activities from './pages/Activities';
import Flights from './pages/Flights';
import Cars from './pages/Cars';
import Packages from './pages/Packages';
import Summer from './pages/Summer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';

const pillarLinks = [
  { name: 'Hotels',     href: '/hotels' },
  { name: 'Activities', href: '/activities' },
  { name: 'Flights',    href: '/flights' },
  { name: 'Cars',       href: '/cars' },
  { name: 'Packages',   href: '/packages' },
  { name: 'Summer',     href: '/summer' },
];

function AppLayout() {
  return (
    <div className="min-h-screen bg-deep-night text-snow">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SharedFooter pillarLinks={pillarLinks} />
      <SharedCookieBanner consentKey="laplanddeals_cookie_consent" />
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
