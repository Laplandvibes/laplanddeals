import PrivacyContent from '../shared/Legal/PrivacyContent';
import { useLang } from '../i18n/useLang';
import PageSeo from '../components/PageSeo';

export default function PrivacyPolicy() {
  const lang = useLang();
  return (
    <main className="pt-20">
      <PageSeo
        title="Privacy Policy"
        description="How LaplandDeals handles your data. GDPR compliant. Operated by Lapeso Oy."
        path="/privacy"
      />
      <PrivacyContent siteName="LaplandDeals" lang={lang} />
    </main>
  );
}
