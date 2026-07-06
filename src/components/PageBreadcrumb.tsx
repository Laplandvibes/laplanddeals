import Breadcrumbs from '../../../shared/Breadcrumbs';
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
      className="bg-cream text-deep-night border-b border-deep-night/10"
      accentClassName="hover:text-vibe-pink hover:opacity-100"
    />
  );
}
