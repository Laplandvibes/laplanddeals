import Breadcrumbs from '../shared/Breadcrumbs';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

/**
 * Ecosystem breadcrumb, rendered BELOW the hero (mounted once inside PillarHeader)
 * so it reads as the first line of page content instead of a bar wedged between
 * the nav and the hero. Self-hides on home + unmapped routes (shared/Breadcrumbs
 * returns null there), so PillarHeader can mount it unconditionally.
 */
export default function PageBreadcrumb() {
  const lang = useLang();
  const c = COPY[lang];
  const to = useLocalePath();
  const labelMap: Record<string, string> = {
    '/hotels': c.nav.hotels,
    '/activities': c.nav.activities,
    '/flights': c.nav.flights,
    '/cars': c.nav.cars,
    '/packages': c.nav.packages,
    '/summer': c.nav.summer,
  };
  return (
    <Breadcrumbs
      lang={lang}
      to={to}
      labelMap={labelMap}
      // --color-cream on tällä sivustolla #0F172A (tumma pohja), joten teksti on snow: text-deep-night antoi
      // murupolulle kontrastin 1,00:1 eli näkymättömän tekstin (mitattu 8.11.2026 joka pilarisivulla).
      className="bg-cream text-snow border-b border-white/10"
      accentClassName="hover:text-vibe-pink hover:opacity-100"
      // Alle 1024 px murupolku keskelle samalle akselille kuin keskitetty otsikko (Vesa 17.10.2026); tietokoneella vasen reuna ennallaan.
      containerClassName="max-w-7xl mx-auto px-4 sm:px-6 max-lg:justify-center"
    />
  );
}
