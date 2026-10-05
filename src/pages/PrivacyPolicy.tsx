import PrivacyContent from '../shared/Legal/PrivacyContent';
import { useLang, type Lang } from '../i18n/useLang';
import PageSeo from '../components/PageSeo';

// <title> and description per locale. The prerender reads these same `const <locale>` blocks
// (scripts/routes.json "pageFile": seoTitle / seoDescription), so the static HTML and the browser
// show one text: change it only here.
const en = { seoTitle: 'Privacy Policy', seoDescription: 'How LaplandDeals handles your data. We collect pseudonymous analytics data via Google Analytics 4.' };
const fi = { seoTitle: 'Tietosuojaseloste', seoDescription: 'Miten LaplandDeals käsittelee tietojasi. Keräämme pseudonyymejä kävijäanalytiikkatietoja Google Analytics 4:n kautta.' };
const de = { seoTitle: 'Datenschutzerklärung', seoDescription: 'So verarbeitet LaplandDeals Ihre Daten. Wir erheben pseudonyme Analysedaten über Google Analytics 4.' };
const ja = { seoTitle: 'プライバシーポリシー', seoDescription: 'LaplandDealsの個人情報の取り扱いについて。Google Analytics 4 を通じて仮名化されたアクセス解析データを収集しています。' };
const es = { seoTitle: 'Política de privacidad', seoDescription: 'Cómo trata LaplandDeals sus datos. Recopilamos datos analíticos seudonimizados a través de Google Analytics 4.' };
const ptBR = { seoTitle: 'Política de privacidade', seoDescription: 'Como o LaplandDeals trata seus dados. Coletamos dados analíticos pseudonimizados por meio do Google Analytics 4.' };
const zhCN = { seoTitle: '隐私政策', seoDescription: 'LaplandDeals如何处理您的数据。我们通过 Google Analytics 4 收集假名化的访问分析数据。如果您订阅了我们的电子简报，我们会安全地存储您的电子邮件地址。' };
const ko = { seoTitle: '개인정보 처리방침', seoDescription: 'LaplandDeals의 개인정보 처리 방식. 당사는 Google Analytics 4를 통해 가명 처리된 분석 데이터를 수집합니다. 뉴스레터를 구독하시면 귀하의 이메일 주소를 안전하게 보관합니다.' };
const fr = { seoTitle: 'Politique de confidentialité', seoDescription: 'Comment LaplandDeals traite vos données. Nous collectons des données analytiques pseudonymes via Google Analytics 4.' };
const it = { seoTitle: 'Informativa sulla privacy', seoDescription: 'Come LaplandDeals tratta i Suoi dati. Raccogliamo dati analitici pseudonimi tramite Google Analytics 4.' };
const nl = { seoTitle: 'Privacyverklaring', seoDescription: 'Hoe LaplandDeals met uw gegevens omgaat. Wij verzamelen gepseudonimiseerde analysegegevens via Google Analytics 4.' };
const sv = { seoTitle: 'Integritetspolicy', seoDescription: 'Så behandlar LaplandDeals dina uppgifter. Vi samlar in pseudonym analysdata via Google Analytics 4.' };
const META: Record<Lang, { seoTitle: string; seoDescription: string }> = {
  en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv,
};

export default function PrivacyPolicy() {
  const lang = useLang();
  return (
    <main className="pt-20">
      <PageSeo
        title={META[lang].seoTitle}
        description={META[lang].seoDescription}
        path="/privacy"
      />
      <PrivacyContent siteName="LaplandDeals" lang={lang} />
    </main>
  );
}
