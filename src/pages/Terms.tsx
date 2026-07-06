import TermsContent from '../../../shared/Legal/TermsContent';
import { useLang } from '../i18n/useLang';
import PageSeo from '../components/PageSeo';

export default function Terms() {
  const lang = useLang();
  return (
    <main className="pt-20">
      <PageSeo
        title="Terms of Use"
        description="Terms of use for LaplandDeals. Operated by Lapeso Oy."
        path="/terms"
      />
      <TermsContent siteName="LaplandDeals" lang={lang} />
    </main>
  );
}
