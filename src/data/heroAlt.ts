import type { Lang } from '../i18n/useLang';

/**
 * Alt text of the two front-page heroes, in every site language (9.10.2026; the photographs are real, see
 * data/offerPhotos.ts). The same sentences, with " #LAPLANDDEALS" appended, are the share-card descriptions in
 * scripts/og-alt.json (keyed by the English sentence, as gate:og wants). Pillar-page heroes use the localised
 * title of the offer card that shows the same photograph.
 */
export const HOME_HERO_ALT: Record<'home-hero' | 'home-hero-summer', Record<Lang, string>> = {
  'home-hero': {
    en: "Snow-laden spruces and snowmobile tracks under a violet winter dusk near Kuusamo, Finland.",
    fi: "Lumen painamia kuusia ja moottorikelkan jälkiä violetin talvihämärän alla Kuusamon lähellä.",
    de: "Schneebeladene Fichten und Motorschlittenspuren in violetter Winterdämmerung bei Kuusamo in Finnland.",
    ja: "フィンランド、クーサモ近郊の紫色の冬の夕暮れ。雪をまとったトウヒとスノーモービルの轍。",
    es: "Abetos cargados de nieve y huellas de moto de nieve bajo un atardecer invernal violeta cerca de Kuusamo, en Finlandia.",
    'pt-BR': "Abetos carregados de neve e rastros de moto de neve sob um crepúsculo violeta de inverno perto de Kuusamo, na Finlândia.",
    'zh-CN': "芬兰库萨莫附近，紫色冬日暮色下挂满积雪的云杉和雪地摩托的辙印。",
    ko: "핀란드 쿠사모 근처, 보랏빛 겨울 해질녘의 눈 덮인 가문비나무와 스노모빌 자국.",
    fr: "Épicéas chargés de neige et traces de motoneige sous un crépuscule d'hiver violet près de Kuusamo, en Finlande.",
    it: "Abeti carichi di neve e tracce di motoslitta sotto un crepuscolo invernale viola vicino a Kuusamo, in Finlandia.",
    nl: "Besneeuwde sparren en sneeuwscootersporen onder een violette winterschemering bij Kuusamo in Finland.",
    sv: "Snötyngda granar och skoterspår under en violett vinterskymning nära Kuusamo i Finland.",
  },
  'home-hero-summer': {
    en: "A birch-lined river bend in Äkäslompolo, Finnish Lapland, in early summer light.",
    fi: "Koivujen reunustama joenmutka Äkäslompolossa Suomen Lapissa alkukesän valossa.",
    de: "Eine von Birken gesäumte Flussbiegung in Äkäslompolo im finnischen Lappland, im Licht des Frühsommers.",
    ja: "初夏の光に包まれた、フィンランド・ラップランド、ユッラス近郊の白樺に縁取られた川の湾曲部。",
    es: "Un meandro del río bordeado de abedules en Äkäslompolo, en la Laponia finlandesa, con la luz del principio del verano.",
    'pt-BR': "Uma curva do rio ladeada de bétulas em Äkäslompolo, na Lapônia finlandesa, sob a luz do início do verão.",
    'zh-CN': "初夏光线下，芬兰拉普兰 Ylläs 附近一处桦树环绕的河湾。",
    ko: "초여름 햇살 속 핀란드 라플란드 윌래스 인근의 자작나무가 늘어선 강굽이.",
    fr: "Un méandre bordé de bouleaux à Äkäslompolo, en Laponie finlandaise, dans la lumière du début d'été.",
    it: "Un'ansa del fiume fiancheggiata da betulle a Äkäslompolo, nella Lapponia finlandese, nella luce di inizio estate.",
    nl: "Een door berken omzoomde riviermeander in Äkäslompolo, in Fins Lapland, in het licht van de vroege zomer.",
    sv: "En björkkantad flodkrök i Äkäslompolo i finska Lappland i försommarljus.",
  },
};
