import CookieContent from '../shared/Legal/CookieContent';
import { useLang, type Lang } from '../i18n/useLang';
import PageSeo from '../components/PageSeo';

// <title> and description per locale. The prerender reads these same `const <locale>` blocks
// (scripts/routes.json "pageFile": seoTitle / seoDescription), so the static HTML and the browser
// show one text: change it only here.
const en = { seoTitle: 'Cookie Policy', seoDescription: 'How LaplandDeals uses cookies. Cookies are small text files stored on your device when you visit a website.' };
const fi = { seoTitle: 'Evästekäytäntö', seoDescription: 'Miten LaplandDeals käyttää evästeitä. Evästeet ovat pieniä tekstitiedostoja, jotka tallentuvat laitteellesi vieraillessasi verkkosivustolla.' };
const de = { seoTitle: 'Cookie-Richtlinie', seoDescription: 'So verwendet LaplandDeals Cookies. Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden.' };
const ja = { seoTitle: 'クッキーポリシー', seoDescription: 'LaplandDealsのクッキーの使用について。クッキーとは、ウェブサイトを訪問した際にお客様のデバイスに保存される小さなテキストファイルです。' };
const es = { seoTitle: 'Política de cookies y consentimiento', seoDescription: 'Cómo usa LaplandDeals las cookies. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.' };
const ptBR = { seoTitle: 'Política de cookies', seoDescription: 'Como o LaplandDeals usa cookies. Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site.' };
const zhCN = { seoTitle: 'Cookie 政策', seoDescription: 'LaplandDeals如何使用Cookie。Cookie 是您访问网站时存储在您设备上的小型文本文件。它们帮助网站记住您的偏好，并了解您如何使用该网站。' };
const ko = { seoTitle: '쿠키 정책', seoDescription: 'LaplandDeals의 쿠키 사용 방식. 쿠키는 귀하가 웹사이트를 방문할 때 기기에 저장되는 작은 텍스트 파일입니다. 웹사이트가 귀하의 설정을 기억하고 사이트 이용 방식을 이해하는 데 도움이 됩니다.' };
const fr = { seoTitle: 'Politique de cookies', seoDescription: 'Comment LaplandDeals utilise les cookies. Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web.' };
const it = { seoTitle: 'Cookie policy', seoDescription: 'Come LaplandDeals utilizza i cookie. I cookie sono piccoli file di testo memorizzati sul Suo dispositivo quando visita un sito web.' };
const nl = { seoTitle: 'Cookiebeleid', seoDescription: 'Hoe LaplandDeals cookies gebruikt. Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt.' };
const sv = { seoTitle: 'Cookiepolicy', seoDescription: 'Så använder LaplandDeals cookies. Cookies är små textfiler som lagras på din enhet när du besöker en webbplats.' };
const META: Record<Lang, { seoTitle: string; seoDescription: string }> = {
  en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv,
};

export default function CookiePolicy() {
  const lang = useLang();
  return (
    <main className="pt-20">
      <PageSeo
        title={META[lang].seoTitle}
        description={META[lang].seoDescription}
        path="/cookie-policy"
      />
      <CookieContent siteName="LaplandDeals" lang={lang} />
    </main>
  );
}
