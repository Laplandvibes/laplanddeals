import CookieContent from '../shared/Legal/CookieContent';
import { useLang } from '../i18n/useLang';
import PageSeo from '../components/PageSeo';

export default function CookiePolicy() {
  const lang = useLang();
  return (
    <main className="pt-20">
      <PageSeo
        title="Cookie Policy"
        description="How LaplandDeals uses cookies. GDPR + ePrivacy compliant. Operated by LaPeso Oy."
        path="/cookie-policy"
      />
      <CookieContent siteName="LaplandDeals" lang={lang} />
    </main>
  );
}
