import TermsContent from '../../../shared/Legal/TermsContent';
import { useLang } from '../i18n/useLang';
import PageSeo from '../components/PageSeo';

export default function Terms() {
  const lang = useLang();
  // 🔴 <div>, EI <main>: jaettu TermsContent renderöi oman <main>:insä, ja
  // kaksi mainia samassa dokumentissa on virheellistä HTML:ää sekä antaa
  // ruudunlukijalle kaksi maamerkkiä. Verkostosweep 13.8.2026: tämä oli
  // ainoa sivusto 27:stä jolla vika oli jäljellä. Älä muuta takaisin.
  return (
    <div className="pt-20">
      <PageSeo
        title="Terms of Use"
        description="Terms of use for LaplandDeals. Operated by Lapeso Oy."
        path="/terms"
      />
      <TermsContent siteName="LaplandDeals" lang={lang} />
    </div>
  );
}
