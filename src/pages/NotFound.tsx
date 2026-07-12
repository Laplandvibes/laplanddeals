import SharedNotFound from '../../../shared/NotFound';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';

// Thin wrapper around the canonical shared 404 (Vesa 2026-07-12: catch-all no
// longer renders the home page). Standard deep-night + vibe-pink — deals-new's
// `bg-cream`/`text-ink` tokens are the renamed deep-night palette, so the
// shared component's dark defaults apply as-is.
export default function NotFound() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].nav;

  return (
    <SharedNotFound
      lang={lang}
      siteName="LaplandDeals"
      homeHref={to('/')}
      links={[
        { href: to('/hotels'), label: c.hotels },
        { href: to('/activities'), label: c.activities },
        { href: to('/packages'), label: c.packages },
      ]}
    />
  );
}
