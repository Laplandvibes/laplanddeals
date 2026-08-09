import { Check, ArrowRight } from 'lucide-react';
import { useLang, type Lang } from '../i18n/useLang';
import { trackAffiliateClick } from '../lib/analytics';
import { gygLocalizeHref } from '../lib/gyg';
import AffiliateDisclosure from './AffiliateDisclosure';

/**
 * PartnerAd — an advertiser-SKINNED affiliate placement.
 *
 * Per premium_design_standard §6 + affiliate_ad_creative_process: each ad adopts
 * the ADVERTISER's own brand (colours + real logo), carries a localized
 * "Mainos / Partner" label, 3 concrete evergreen trust points, a CTA in the
 * advertiser's accent, and an AffiliateDisclosure. It reads as an authentic
 * partner unit while still sitting cleanly on the cream editorial page.
 *
 * RULES honoured:
 *  - Evergreen hooks only (free cancellation, price-match, size of inventory).
 *    NO invented %, NO fake countdowns (brand "no fake data" rule).
 *  - Affiliate rel is exactly: sponsored nofollow noopener (referrer kept).
 *  - Services (cottages / activities / hotels) → global audience OK, no
 *    Finland-only delivery wall.
 *  - Distributed, never stacked back-to-back; one per relevant page.
 */

export type AdvertiserId = 'lomarengas' | 'getyourguide' | 'hotelscom';

type Localized = Record<Lang, string>;

interface AdvertiserConfig {
  id: AdvertiserId;
  name: string;
  /** Real logo file under /public/logos, or null → CSS wordmark plate. */
  logo: string | null;
  /** CSS wordmark fallback (advertiser brand colour applied inline). */
  wordmark?: { text: string; mark?: string };
  /** Surface skin — kept light so it sits on cream; accent is the brand colour. */
  accent: string;       // brand colour (buttons, mark)
  accentText: string;   // text colour that reads on `accent`
  plateBg: string;      // logo plate background
  ring: string;         // subtle brand-tinted border on hover
  glow: string;         // soft brand radial behind the card
  href: string;
  trackId: string;
  badge: Localized;     // "Mainos" / "Partner ad"
  tagline: Localized;   // one-line advertiser hook
  points: Record<Lang, string[]>; // 3 concrete evergreen reasons
  cta: Localized;
  note: Localized;      // tiny clarifier under CTA (what the link does)
}

const badge: Localized = {
  en: 'Partner', fi: 'Mainos', de: 'Anzeige', ja: '広告', es: 'Publicidad',
  'pt-BR': 'Publicidade', 'zh-CN': '广告', ko: '광고', fr: 'Annonce', it: 'Annuncio', nl: 'Advertentie', sv: 'Annons',
};

const ADVERTISERS: Record<AdvertiserId, AdvertiserConfig> = {
  // ── Lomarengas — Finland's biggest cottage-rental network (Adtraction) ──
  lomarengas: {
    id: 'lomarengas',
    name: 'Lomarengas',
    logo: '/logos/lomarengas.png',
    accent: '#1F3A93',
    accentText: '#FFFFFF',
    plateBg: '#FFFFFF',
    ring: 'hover:border-[#1F3A93]/45',
    glow: 'radial-gradient(circle at 12% 0%, rgba(31,58,147,0.10), transparent 60%)',
    href: 'https://go.laplandvibes.com/go/lomarengas?sid=deals_partner',
    trackId: 'ad_lomarengas',
    badge,
    tagline: {
      en: "Finland's largest cottage network. Book a real Lapland cabin direct from the source.",
      fi: 'Suomen suurin mökkivälittäjä. Varaa aito Lapin mökki suoraan lähteeltä.',
      de: 'Finnlands größtes Hüttennetz. Buchen Sie eine echte Lappland-Hütte direkt an der Quelle.',
      ja: 'フィンランド最大のコテージネットワーク。本物のラップランドのコテージを直接予約。',
      es: 'La mayor red de cabañas de Finlandia: reserva una auténtica cabaña de Laponia en origen.',
      'pt-BR': 'A maior rede de cabanas da Finlândia: reserve uma cabana autêntica da Lapônia direto na fonte.',
      'zh-CN': '芬兰最大的小屋预订网络，直接从源头预订一座真正的拉普兰小屋。',
      ko: '핀란드 최대 코티지 네트워크. 진짜 라플란드 캐빈을 산지에서 직접 예약하세요.',
      fr: 'Le plus grand réseau de chalets de Finlande. Réservez un vrai chalet de Laponie à la source.',
      it: 'La più grande rete di cottage della Finlandia: prenota una vera baita lappone alla fonte.',
      nl: "Het grootste hutten­netwerk van Finland. Boek een echte Laplandse hut rechtstreeks bij de bron.",
      sv: 'Finlands största stugnätverk. Boka en riktig stuga i Lappland direkt hos källan.',
    },
    points: {
      en: ['4,000+ cabins across Finland', 'Many with private lakeside sauna', 'Finnish operator, local support'],
      fi: ['Yli 4 000 mökkiä eri puolilla Suomea', 'Monessa oma rantasauna', 'Suomalainen toimija, kotimainen tuki'],
      de: ['Über 4.000 Hütten in ganz Finnland', 'Viele mit eigener Seesauna', 'Finnischer Anbieter, lokaler Support'],
      ja: ['フィンランド全土に4,000棟以上のコテージ', '多くに専用の湖畔サウナ', 'フィンランドの事業者・現地サポート'],
      es: ['Más de 4.000 cabañas por toda Finlandia', 'Muchas con sauna privada junto al lago', 'Operador finlandés, soporte local'],
      'pt-BR': ['Mais de 4.000 cabanas por toda a Finlândia', 'Muitas com sauna privativa à beira do lago', 'Operador finlandês, suporte local'],
      'zh-CN': ['芬兰各地 4,000＋ 座小屋', '许多带私人湖畔桑拿', '芬兰本土运营商，本地客服'],
      ko: ['핀란드 전역 4,000＋ 채의 캐빈', '상당수가 개인 호숫가 사우나 보유', '핀란드 현지 업체, 현지 지원'],
      fr: ['Plus de 4 000 chalets dans toute la Finlande', 'Beaucoup avec sauna privé au bord du lac', 'Opérateur finlandais, assistance locale'],
      it: ['Oltre 4.000 baite in tutta la Finlandia', 'Molte con sauna privata sul lago', 'Operatore finlandese, assistenza locale'],
      nl: ['4.000+ hutten door heel Finland', 'Veel met eigen sauna aan het meer', 'Finse aanbieder, lokale ondersteuning'],
      sv: ['4 000+ stugor i hela Finland', 'Många med egen bastu vid sjön', 'Finsk aktör, lokal support'],
    },
    cta: {
      en: 'Browse cottages', fi: 'Selaa mökkejä', de: 'Hütten ansehen',
      ja: 'コテージを見る', es: 'Ver cabañas', 'pt-BR': 'Ver cabanas',
      'zh-CN': '查看小屋', ko: '코티지 보기', fr: 'Voir les chalets',
      it: 'Vedi i cottage', nl: 'Bekijk hutten', sv: 'Bläddra bland stugor',
    },
    note: {
      en: 'Opens Lomarengas.fi: live availability and prices.',
      fi: 'Avaa Lomarengas.fi:n. Vapaat ajat ja hinnat reaaliajassa.',
      de: 'Öffnet Lomarengas.fi: Verfügbarkeit und Preise in Echtzeit.',
      ja: 'Lomarengas.fi を開きます（空室状況と料金はリアルタイム）。',
      es: 'Abre Lomarengas.fi: disponibilidad y precios en tiempo real.',
      'pt-BR': 'Abre o Lomarengas.fi: disponibilidade e preços em tempo real.',
      'zh-CN': '打开 Lomarengas.fi：实时空房与价格。',
      ko: 'Lomarengas.fi를 엽니다. 실시간 예약 가능 여부와 요금.',
      fr: 'Ouvre Lomarengas.fi: disponibilités et prix en temps réel.',
      it: 'Apre Lomarengas.fi: disponibilità e prezzi in tempo reale.',
      nl: 'Opent Lomarengas.fi: actuele beschikbaarheid en prijzen.',
      sv: 'Öppnar Lomarengas.fi: tillgänglighet och priser i realtid.',
    },
  },

  // ── GetYourGuide — activity / tour marketplace (direct affiliate) ──
  getyourguide: {
    id: 'getyourguide',
    name: 'GetYourGuide',
    logo: null,
    wordmark: { text: 'GetYourGuide' },
    accent: '#FF5533',
    accentText: '#FFFFFF',
    plateBg: '#FFFFFF',
    ring: 'hover:border-[#FF5533]/45',
    glow: 'radial-gradient(circle at 12% 0%, rgba(255,85,51,0.10), transparent 60%)',
    // Workerin kautta 2026-08-03 (rakentaa GYG:n /s?q=-haun, injektoi
    // partner_id+cmp:n); kieli liitetään renderissä gygLocalizeHrefillä.
    href: 'https://go.laplandvibes.com/go/activities?sid=ad_gyg&q=Lapland%20Finland',
    trackId: 'ad_getyourguide',
    badge,
    tagline: {
      en: 'Husky, aurora and snowmobile tours: reserve now, pay later, cancel free up to 24h.',
      fi: 'Husky-, revontuli- ja kelkkaretket: varaa nyt, maksa myöhemmin, peru maksutta 24 h asti.',
      de: 'Husky-, Polarlicht- und Schneemobiltouren: jetzt reservieren, später zahlen, bis 24 h gratis stornieren.',
      ja: 'ハスキー・オーロラ・スノーモービルツアー。今すぐ予約・後払い・24時間前まで無料キャンセル。',
      es: 'Tours de husky, auroras y moto de nieve: reserva ahora, paga después, cancela gratis hasta 24 h.',
      'pt-BR': 'Tours de husky, auroras e moto de neve: reserve agora, pague depois, cancele grátis até 24 h.',
      'zh-CN': '哈士奇、极光与雪地摩托之旅：立即预订、稍后付款、提前 24 小时免费取消。',
      ko: '허스키·오로라·스노모빌 투어: 지금 예약, 나중에 결제, 24시간 전까지 무료 취소.',
      fr: 'Excursions husky, aurores et motoneige: réservez maintenant, payez plus tard, annulez gratuitement jusqu’à 24 h.',
      it: 'Tour husky, aurora e motoslitta: prenota ora, paga dopo, cancella gratis fino a 24 h.',
      nl: "Husky-, aurora- en sneeuwscootertochten: reserveer nu, betaal later, gratis annuleren tot 24 u.",
      sv: 'Husky-, norrskens- och skoterturer: boka nu, betala senare, avboka gratis fram till 24 h innan.',
    },
    points: {
      en: ['Free cancellation up to 24h before', 'Reserve now, pay later', 'Verified reviews on every tour'],
      fi: ['Maksuton peruutus 24 h ennen', 'Varaa nyt, maksa myöhemmin', 'Vahvistetut arvostelut joka retkellä'],
      de: ['Kostenlose Stornierung bis 24 h vorher', 'Jetzt reservieren, später zahlen', 'Geprüfte Bewertungen bei jeder Tour'],
      ja: ['24時間前まで無料キャンセル', '今すぐ予約・後払い', '全ツアーに認証済みレビュー'],
      es: ['Cancelación gratuita hasta 24 h antes', 'Reserva ahora, paga después', 'Reseñas verificadas en cada tour'],
      'pt-BR': ['Cancelamento grátis até 24 h antes', 'Reserve agora, pague depois', 'Avaliações verificadas em cada tour'],
      'zh-CN': ['提前 24 小时免费取消', '先预订，后付款', '每个行程均有真实评价'],
      ko: ['24시간 전까지 무료 취소', '먼저 예약, 나중에 결제', '모든 투어에 검증된 후기'],
      fr: ['Annulation gratuite jusqu’à 24 h avant', 'Réservez maintenant, payez plus tard', 'Avis vérifiés sur chaque excursion'],
      it: ['Cancellazione gratuita fino a 24 h prima', 'Prenota ora, paga dopo', 'Recensioni verificate su ogni tour'],
      nl: ['Gratis annuleren tot 24 u vooraf', 'Reserveer nu, betaal later', 'Geverifieerde reviews bij elke tour'],
      sv: ['Gratis avbokning fram till 24 h innan', 'Boka nu, betala senare', 'Verifierade omdömen på varje tur'],
    },
    cta: {
      en: 'Browse Lapland tours', fi: 'Selaa Lapin retkiä', de: 'Lappland-Touren ansehen',
      ja: 'ラップランドのツアーを見る', es: 'Ver tours por Laponia', 'pt-BR': 'Ver tours pela Lapônia',
      'zh-CN': '浏览拉普兰行程', ko: '라플란드 투어 둘러보기', fr: 'Voir les excursions en Laponie',
      it: 'Sfoglia i tour in Lapponia', nl: 'Bekijk Lapland-tochten', sv: 'Bläddra bland turer i Lappland',
    },
    note: {
      en: 'Opens GetYourGuide: live tour availability.',
      fi: 'Avaa GetYourGuiden: retkien vapaat ajat reaaliajassa.',
      de: 'Öffnet GetYourGuide: Tourverfügbarkeit in Echtzeit.',
      ja: 'GetYourGuide を開きます（ツアーの空き状況はリアルタイム）。',
      es: 'Abre GetYourGuide: disponibilidad de tours en tiempo real.',
      'pt-BR': 'Abre o GetYourGuide: disponibilidade de tours em tempo real.',
      'zh-CN': '打开 GetYourGuide：实时行程空位。',
      ko: 'GetYourGuide를 엽니다. 실시간 투어 예약 가능 여부.',
      fr: 'Ouvre GetYourGuide: disponibilités des excursions en temps réel.',
      it: 'Apre GetYourGuide: disponibilità dei tour in tempo reale.',
      nl: 'Opent GetYourGuide: actuele beschikbaarheid van tochten.',
      sv: 'Öppnar GetYourGuide: turernas tillgänglighet i realtid.',
    },
  },

  // ── Hotel search — via the go.laplandvibes.com Worker ──
  // The Worker routes fi (locale=fi_FI) to Sembo (Adtraction) and every other
  // locale to Trip.com. Default skin below is Trip.com; fi gets SEMBO_FI.
  hotelscom: {
    id: 'hotelscom',
    name: 'Trip.com',
    logo: null,
    wordmark: { text: 'Trip.com' },
    accent: '#2449B8',
    accentText: '#FFFFFF',
    plateBg: '#3264FF',
    ring: 'hover:border-[#3264FF]/45',
    glow: 'radial-gradient(circle at 12% 0%, rgba(50,100,255,0.10), transparent 60%)',
    href: 'https://go.laplandvibes.com/go/hotels?sid=ad_hotelscom_lapland&ss=Lapland%2C%20Finland',
    trackId: 'ad_hotelscom',
    badge,
    tagline: {
      en: 'Every Lapland stay in one place, from glass igloos to slope-side, at today’s live rate.',
      fi: 'Kaikki Lapin majoitukset yhdessä paikassa, lasi-igluista rinteen viereen, tämän päivän hinnoin.',
      de: 'Alle Lappland-Unterkünfte an einem Ort, von Glas-Iglus bis zur Piste, zum heutigen Live-Preis.',
      ja: 'ラップランドの宿をひとつに。ガラスイグルーからゲレンデ脇まで、本日の最新料金で。',
      es: 'Todo el alojamiento de Laponia en un solo lugar, de iglús de cristal a pie de pista, al precio de hoy.',
      'pt-BR': 'Toda a hospedagem da Lapônia num só lugar, de iglus de vidro a pé de pista, ao preço de hoje.',
      'zh-CN': '拉普兰所有住宿一站搞定，从玻璃穹顶屋到雪道旁，按今日实时价。',
      ko: '라플란드의 모든 숙소를 한곳에, 글라스 이글루부터 슬로프 사이드까지, 오늘의 실시간 요금으로.',
      fr: 'Tous les hébergements de Laponie au même endroit, des igloos de verre au pied des pistes, au tarif du jour.',
      it: 'Tutti gli alloggi della Lapponia in un solo posto, dagli igloo di vetro al bordo pista, alla tariffa di oggi.',
      nl: 'Al het verblijf in Lapland op één plek, van glazen iglo tot aan de piste, tegen het tarief van vandaag.',
      sv: 'Allt boende i Lappland på ett ställe, från glasiglos till skidnära, till dagens live-pris.',
    },
    points: {
      en: ['Hotels, cabins and glass igloos', 'Live prices and availability', 'One search for all of Lapland'],
      fi: ['Hotellit, mökit ja lasi-iglut', 'Hinnat ja saatavuus reaaliajassa', 'Koko Lappi yhdellä haulla'],
      de: ['Hotels, Hütten und Glas-Iglus', 'Preise und Verfügbarkeit in Echtzeit', 'Ganz Lappland in einer Suche'],
      ja: ['ホテル・コテージ・ガラスイグルー', '料金と空室はリアルタイム', 'ラップランド全域をひとつの検索で'],
      es: ['Hoteles, cabañas e iglús de cristal', 'Precios y disponibilidad en tiempo real', 'Toda Laponia en una sola búsqueda'],
      'pt-BR': ['Hotéis, cabanas e iglus de vidro', 'Preços e disponibilidade em tempo real', 'Toda a Lapônia em uma só busca'],
      'zh-CN': ['酒店、小屋与玻璃穹顶屋', '实时价格与空房', '一次搜索覆盖全拉普兰'],
      ko: ['호텔, 캐빈, 글라스 이글루', '실시간 요금과 예약 가능 여부', '한 번의 검색으로 라플란드 전역'],
      fr: ['Hôtels, chalets et igloos de verre', 'Prix et disponibilités en temps réel', 'Toute la Laponie en une seule recherche'],
      it: ['Hotel, baite e igloo di vetro', 'Prezzi e disponibilità in tempo reale', 'Tutta la Lapponia in una sola ricerca'],
      nl: ["Hotels, hutten en glazen iglo's", 'Prijzen en beschikbaarheid in realtime', 'Heel Lapland in één zoekopdracht'],
      sv: ['Hotell, stugor och glasiglos', 'Priser och tillgänglighet i realtid', 'Hela Lappland i en enda sökning'],
    },
    cta: {
      en: 'Search Lapland stays', fi: 'Hae Lapin majoitukset', de: 'Lappland-Unterkünfte suchen',
      ja: 'ラップランドの宿を探す', es: 'Buscar alojamiento en Laponia', 'pt-BR': 'Buscar hospedagem na Lapônia',
      'zh-CN': '搜索拉普兰住宿', ko: '라플란드 숙소 검색', fr: 'Rechercher un hébergement en Laponie',
      it: 'Cerca alloggi in Lapponia', nl: 'Zoek verblijf in Lapland', sv: 'Sök boende i Lappland',
    },
    note: {
      en: 'Opens Trip.com: live rooms and prices.',
      fi: 'Avaa Trip.comin: vapaat huoneet ja hinnat reaaliajassa.',
      de: 'Öffnet Trip.com: Zimmer und Preise in Echtzeit.',
      ja: 'Trip.com を開きます（空室と料金はリアルタイム）。',
      es: 'Abre Trip.com: habitaciones y precios en tiempo real.',
      'pt-BR': 'Abre o Trip.com: quartos e preços em tempo real.',
      'zh-CN': '打开 Trip.com：实时房型与价格。',
      ko: 'Trip.com을 엽니다. 실시간 객실과 요금.',
      fr: 'Ouvre Trip.com: chambres et prix en temps réel.',
      it: 'Apre Trip.com: camere e prezzi in tempo reale.',
      nl: 'Opent Trip.com: actuele kamers en prijzen.',
      sv: 'Öppnar Trip.com: rum och priser i realtid.',
    },
  },
};

/** fi is routed to Sembo (Adtraction) by the go/hotels Worker, so the hotel
 *  unit is skinned as Sembo for fi. Same id/trackId: analytics keys unchanged. */
const SEMBO_FI: AdvertiserConfig = {
  ...ADVERTISERS.hotelscom,
  name: 'Sembo',
  wordmark: { text: 'Sembo' },
  accent: '#0369A1',
  plateBg: '#FFFFFF',
  ring: 'hover:border-[#0EA5E9]/45',
  glow: 'radial-gradient(circle at 12% 0%, rgba(14,165,233,0.10), transparent 60%)',
  note: { ...ADVERTISERS.hotelscom.note, fi: 'Avaa Sembon: vapaat huoneet ja hinnat reaaliajassa.' },
};

/** Worker locale codes per site language, appended to the hotels ad href so the
 *  go/hotels Worker routes fi to Sembo and every other locale to Trip.com. */
const HOTELS_AD_LOCALE: Record<Lang, string> = {
  fi: 'fi_FI', en: 'en_US', de: 'de_DE', fr: 'fr_FR', it: 'it_IT', es: 'es_ES',
  nl: 'nl_NL', ja: 'ja_JP', ko: 'ko_KR', sv: 'sv_SE', 'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN',
};

interface Props {
  advertiser: AdvertiserId;
  /** Placement tag for analytics, e.g. 'hotels_pillar'. */
  placement?: string;
  className?: string;
}

/** Lomarengas-CTA: sid kutsupaikasta + dest=Lapin mökkihaku. Kovakoodattu
 *  sid 'deals_partner' sulatti kaikki pinnat yhdeksi raportointiriviksi, ja
 *  ilman destiä Adtraction-wrap pudotti lomarengas.fi:n ETUSIVULLE
 *  (lv_permanent_rules §5, 2026-08-09). Lomarenkaalla vain fi/en-sivustot. */
function lomarengasHref(sid: string, lang: Lang): string {
  const dest = lang === 'fi'
    ? 'https://www.lomarengas.fi/mokkihaku/lappi'
    : 'https://www.lomarengas.fi/en/cottage-search/lappi';
  return `https://go.laplandvibes.com/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;
}

export default function PartnerAd({ advertiser, placement, className = '' }: Props) {
  const lang = useLang();
  const a = advertiser === 'hotelscom' && lang === 'fi' ? SEMBO_FI : ADVERTISERS[advertiser];
  if (!a) return null;

  const href =
    a.id === 'hotelscom' ? `${a.href}&locale=${HOTELS_AD_LOCALE[lang]}`
    : a.id === 'lomarengas' ? lomarengasHref(placement ?? a.trackId, lang)
    : gygLocalizeHref(a.href, lang);
  const points = a.points[lang] ?? a.points.en;

  return (
    <div className={className}>
      <div
        className={`group relative overflow-hidden rounded-2xl border border-line bg-ivory ${a.ring} transition-colors duration-300 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.22)]`}
      >
        {/* brand glow */}
        <div aria-hidden="true" className="absolute inset-0" style={{ background: a.glow }} />
        {/* brand accent rail */}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ background: a.accent }} />

        <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-9">
          {/* Logo plate */}
          <div className="flex flex-col items-start gap-3">
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ background: a.accent, color: a.accentText }}
            >
              {a.badge[lang] ?? a.badge.en}
            </span>
            <div
              className="ad-sheen relative flex h-20 w-44 items-center justify-center overflow-hidden rounded-xl border border-line px-4"
              style={{ background: a.plateBg }}
            >
              {a.logo ? (
                <img src={a.logo} alt={a.name} className="max-h-11 w-auto object-contain" loading="lazy" decoding="async" />
              ) : (
                <span
                  className="font-heading text-2xl font-semibold tracking-tight"
                  style={{ color: a.plateBg === '#FFFFFF' ? a.accent : '#FFFFFF' }}
                >
                  {a.wordmark?.text}
                </span>
              )}
            </div>
          </div>

          {/* Copy + CTA */}
          <div className="min-w-0">
            <p className="font-heading text-xl sm:text-2xl font-medium text-deep-night leading-snug mb-4">
              {a.tagline[lang] ?? a.tagline.en}
            </p>
            <ul className="grid sm:grid-cols-3 gap-x-5 gap-y-2 mb-6">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-deep-night/70 text-[13px] leading-snug">
                  <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: a.accent }} aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
              <a
                href={href}
                target="_blank"
                rel="sponsored nofollow noopener"
                onClick={() => trackAffiliateClick(a.id === 'hotelscom' ? 'lodging' : a.id, placement ?? a.trackId, href)}
                className="group/btn inline-flex items-center justify-center text-center leading-snug gap-2 rounded-full px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] sm:whitespace-nowrap no-underline transition-transform hover:-translate-y-0.5"
                style={{ background: a.accent, color: a.accentText }}
              >
                {a.cta[lang] ?? a.cta.en}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
              <span className="text-deep-night/55 text-[11px] leading-snug">{a.note[lang] ?? a.note.en}</span>
            </div>
          </div>
        </div>
      </div>
      <AffiliateDisclosure variant="inline" className="mt-2.5 px-1" />
    </div>
  );
}
