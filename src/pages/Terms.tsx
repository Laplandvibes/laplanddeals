import TermsContent from '../shared/Legal/TermsContent';
import { useLang, type Lang } from '../i18n/useLang';
import PageSeo from '../components/PageSeo';

// <title> and description per locale. The prerender reads these same `const <locale>` blocks
// (scripts/routes.json "pageFile": seoTitle / seoDescription), so the static HTML and the browser
// show one text: change it only here.
const en = { seoTitle: 'Terms of Use', seoDescription: 'Terms of use for LaplandDeals. By accessing or using this website, you agree to these terms.' };
const fi = { seoTitle: 'Käyttöehdot', seoDescription: 'LaplandDealsin käyttöehdot. Käyttämällä tätä sivustoa hyväksyt nämä käyttöehdot.' };
const de = { seoTitle: 'Nutzungsbedingungen', seoDescription: 'Die Nutzungsbedingungen von LaplandDeals. Mit dem Zugriff auf bzw. der Nutzung dieser Website erklären Sie sich mit diesen Bedingungen einverstanden.' };
const ja = { seoTitle: '利用規約', seoDescription: 'LaplandDealsの利用規約。本ウェブサイトをご利用いただくには、本規約に同意していただく必要があります。' };
const es = { seoTitle: 'Términos de servicio', seoDescription: 'Los términos de uso de LaplandDeals. Al acceder o utilizar este sitio web, usted acepta estos términos.' };
const ptBR = { seoTitle: 'Termos de uso', seoDescription: 'Os termos de uso do LaplandDeals. Ao acessar ou usar este site, você concorda com estes termos.' };
const zhCN = { seoTitle: '使用条款', seoDescription: 'LaplandDeals的使用条款。访问或使用本网站，即表示您同意本条款。如果您不同意，请停止使用本网站。旅行信息（包括价格、营业时间、天气状况和可订情况）经常发生变化。' };
const ko = { seoTitle: '이용약관', seoDescription: 'LaplandDeals 이용약관. 본 웹사이트에 접속하거나 이용하시는 것은 본 약관에 동의하시는 것입니다. 동의하지 않으시면 사이트 이용을 중단해 주십시오.' };
const fr = { seoTitle: 'Conditions d’utilisation', seoDescription: "Les conditions d’utilisation de LaplandDeals. En accédant à ce site ou en l'utilisant, vous acceptez ces conditions." };
const it = { seoTitle: 'Termini di utilizzo', seoDescription: 'I termini di utilizzo di LaplandDeals. Accedendo o utilizzando il presente sito web, Lei accetta i presenti termini.' };
const nl = { seoTitle: 'Gebruiksvoorwaarden', seoDescription: 'De gebruiksvoorwaarden van LaplandDeals. Door deze website te bezoeken of te gebruiken, gaat u akkoord met deze voorwaarden.' };
const sv = { seoTitle: 'Användarvillkor', seoDescription: 'Användarvillkor för LaplandDeals. Genom att öppna eller använda denna webbplats godkänner du dessa villkor.' };
const META: Record<Lang, { seoTitle: string; seoDescription: string }> = {
  en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv,
};

export default function Terms() {
  const lang = useLang();
  // 🔴 <div>, EI <main>: jaettu TermsContent renderöi oman <main>:insä, ja
  // kaksi mainia samassa dokumentissa on virheellistä HTML:ää sekä antaa
  // ruudunlukijalle kaksi maamerkkiä. Verkostosweep 13.8.2026: tämä oli
  // ainoa sivusto 27:stä jolla vika oli jäljellä. Älä muuta takaisin.
  return (
    <div className="pt-20">
      <PageSeo
        title={META[lang].seoTitle}
        description={META[lang].seoDescription}
        path="/terms"
      />
      <TermsContent siteName="LaplandDeals" lang={lang} />
    </div>
  );
}
