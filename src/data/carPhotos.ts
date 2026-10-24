/**
 * Photos of the example model on each car-class card (Vesa 4.10.2026, looking at the class list:
 * "kuinka poor nämä osiot ovat visuaalisesti, ei herätä visuaalista ostonautintoa"). The cards had
 * a drawn side-view per class; now each one shows a real photograph of the model it names
 * ("Volkswagen Polo or similar"), the same approach laplandcarrental has used since 26.9.2026.
 *
 * Source: Wikimedia Commons. One image, one site: these six are different photographers or
 * different cars and days from carrental's model photos (data/carModelPhotos.ts there), checked
 * by file name across every site repo and by a 32×18 pixel comparison against every image in
 * every site's public/ and src/ on 4.10.2026. Registered in _reissu-2026-07/KUVA-INVENTAARIO.md.
 *
 * Plates: none legible. Kia, Polo and T-Cross carry the dealer's own plate sign, the Golf a
 * dealer number, the V40's plate is blurred by the photographer, the Golf Variant has no front
 * plate. A brand on a real car is fine (feedback_arkitavaran_merkit_kuvissa_ok); a readable
 * registration plate is not.
 *
 * Files are resized only (960 px Commons thumbnail → 800 px WebP), never cropped: the card crops
 * on screen with object-fit, the file stays whole. CC BY-SA needs author, licence and source in
 * a reasonable place: one credit line under the card grid (feedback_kuvakrediitti, 26.9.2026).
 * The model match is by rule, because data/ebOffers.ts is written by a script and names arrive
 * as the comparison spells them ("VOLVO V40", "Volkswagen Golf Station Wagon"). An unknown model
 * returns undefined and the card falls back to the drawn class silhouette, never a generated car.
 */

import type { Lang } from '../i18n/useLang';

export type CarPhoto = {
  src: string;
  width: number;
  height: number;
  /** Model as the credit line names it. */
  model: string;
  /** Alt in every site language (gate:a11y-nimet 24.10.2026): describes only what the English alt says. */
  alt: Record<Lang, string>;
  author: string;
  license: string;
  licenseUrl: string;
  fileUrl: string;
  receipt: { source: 'Wikimedia Commons'; title: string; taken: string; retrieved: string; priceEur: 0; changes: string; plate: string };
};

const PHOTOS: Record<string, CarPhoto> = {
  picanto: {
    src: '/images/cars/kia-picanto.webp', width: 800, height: 489, model: 'Kia Picanto',
    alt: {
      en: 'White Kia Picanto city car, current model, at a dealership',
      fi: 'Valkoinen Kia Picanto -pikkuauto, nykyinen malli, autoliikkeessä',
      sv: 'Vit Kia Picanto, liten stadsbil av nuvarande modell, hos en bilhandlare',
      de: 'Weißer Kia Picanto, Kleinstwagen im aktuellen Modell, beim Händler',
      es: 'Kia Picanto blanco, utilitario urbano, modelo actual, en un concesionario',
      fr: 'Kia Picanto blanche, citadine, modèle actuel, chez un concessionnaire',
      it: 'Kia Picanto bianca, citycar, modello attuale, in una concessionaria',
      nl: 'Witte Kia Picanto, stadsauto, huidig model, bij een dealer',
      'pt-BR': 'Kia Picanto branco, carro compacto urbano, modelo atual, em uma concessionária',
      ja: '販売店に並ぶ白いキア・ピカント（現行型の小型車）',
      ko: '대리점에 전시된 흰색 기아 피칸토(현행 모델 경차)',
      'zh-CN': '经销店里的白色起亚 Picanto 小型城市车（现款）',
    },
    author: 'Alexander Migl', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:2024_Kia_Picanto_(JA)_Rutesheimer_Autoschau_2025_DSC_9198.jpg',
    receipt: { source: 'Wikimedia Commons', title: '2024 Kia Picanto (JA) Rutesheimer Autoschau 2025 DSC 9198.jpg', taken: '2025-05-25', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4787×2925 → 800×489 WebP; no crop', plate: "dealer plate sign 'ATH', no registration plate" },
  },
  polo: {
    src: '/images/cars/vw-polo.webp', width: 800, height: 474, model: 'Volkswagen Polo',
    alt: {
      en: 'White Volkswagen Polo hatchback, current model, at a dealership',
      fi: 'Valkoinen Volkswagen Polo -viistoperä, nykyinen malli, autoliikkeessä',
      sv: 'Vit Volkswagen Polo halvkombi av nuvarande modell, hos en bilhandlare',
      de: 'Weißer Volkswagen Polo, Schrägheck im aktuellen Modell, beim Händler',
      es: 'Volkswagen Polo blanco de portón trasero, modelo actual, en un concesionario',
      fr: 'Volkswagen Polo blanche à hayon, modèle actuel, chez un concessionnaire',
      it: 'Volkswagen Polo bianca a due volumi, modello attuale, in una concessionaria',
      nl: 'Witte Volkswagen Polo hatchback, huidig model, bij een dealer',
      'pt-BR': 'Volkswagen Polo hatch branco, modelo atual, em uma concessionária',
      ja: '販売店に並ぶ白いフォルクスワーゲン・ポロ（現行型ハッチバック）',
      ko: '대리점에 전시된 흰색 폭스바겐 폴로 해치백(현행 모델)',
      'zh-CN': '经销店里的白色大众 Polo 两厢车（现款）',
    },
    author: 'Alexander Migl', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Volkswagen_Polo_VI_(2021)_IMG_5320.jpg',
    receipt: { source: 'Wikimedia Commons', title: 'Volkswagen Polo VI (2021) IMG 5320.jpg', taken: '2021-10-03', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4860×2882 → 800×474 WebP; no crop', plate: "dealer plate sign 'Polo', no registration plate" },
  },
  golf: {
    src: '/images/cars/vw-golf.webp', width: 800, height: 417, model: 'Volkswagen Golf',
    alt: {
      en: 'Grey Volkswagen Golf hatchback, current model, parked',
      fi: 'Harmaa Volkswagen Golf -viistoperä, nykyinen malli, pysäköitynä',
      sv: 'Grå Volkswagen Golf halvkombi av nuvarande modell, parkerad',
      de: 'Grauer Volkswagen Golf, Schrägheck im aktuellen Modell, geparkt',
      es: 'Volkswagen Golf gris de portón trasero, modelo actual, aparcado',
      fr: 'Volkswagen Golf grise à hayon, modèle actuel, garée',
      it: 'Volkswagen Golf grigia a due volumi, modello attuale, parcheggiata',
      nl: 'Grijze Volkswagen Golf hatchback, huidig model, geparkeerd',
      'pt-BR': 'Volkswagen Golf hatch cinza, modelo atual, estacionado',
      ja: '駐車中のグレーのフォルクスワーゲン・ゴルフ（現行型ハッチバック）',
      ko: '주차된 회색 폭스바겐 골프 해치백(현행 모델)',
      'zh-CN': '停放着的灰色大众高尔夫两厢车（现款）',
    },
    author: 'Harvey Bold', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:2024_Volkswagen_Golf_R-Line_TSI_-_1498cc_1.5_(150PS)_Petrol_-_Grey_-_03-2025,_Front.jpg',
    receipt: { source: 'Wikimedia Commons', title: '2024 Volkswagen Golf R-Line TSI - 1498cc 1.5 (150PS) Petrol - Grey - 03-2025, Front.jpg', taken: '2025-03-09', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4433×2310 → 800×417 WebP; no crop', plate: "dealer number '74'; a background car at the right edge shows two letters only" },
  },
  v40: {
    src: '/images/cars/volvo-v40.webp', width: 800, height: 450, model: 'Volvo V40',
    alt: {
      en: 'Black Volvo V40 hatchback in a car park at dusk',
      fi: 'Musta Volvo V40 -viistoperä pysäköintialueella hämärässä',
      sv: 'Svart Volvo V40 halvkombi på en parkeringsplats i skymningen',
      de: 'Schwarzer Volvo V40, Schrägheck, auf einem Parkplatz in der Abenddämmerung',
      es: 'Volvo V40 negro de portón trasero en un aparcamiento al anochecer',
      fr: 'Volvo V40 noire à hayon sur un parking au crépuscule',
      it: 'Volvo V40 nera a due volumi in un parcheggio al crepuscolo',
      nl: 'Zwarte Volvo V40 hatchback op een parkeerplaats in de schemering',
      'pt-BR': 'Volvo V40 hatch preto em um estacionamento ao entardecer',
      ja: '夕暮れの駐車場に停まる黒いボルボ V40（ハッチバック）',
      ko: '해 질 녘 주차장에 서 있는 검은색 볼보 V40 해치백',
      'zh-CN': '黄昏时停车场里的黑色沃尔沃 V40 两厢车',
    },
    author: 'Project Kei', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:VOLVO_V40_D4_Dynamic_Edition.jpg',
    receipt: { source: 'Wikimedia Commons', title: 'VOLVO V40 D4 Dynamic Edition.jpg', taken: '2018-01-13', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 2560×1440 → 800×450 WebP; no crop', plate: 'blurred by the photographer' },
  },
  variant: {
    src: '/images/cars/vw-golf-variant.webp', width: 800, height: 471, model: 'Volkswagen Golf Variant',
    alt: {
      en: 'Dark grey Volkswagen Golf Variant estate, current model, parked',
      fi: 'Tummanharmaa Volkswagen Golf Variant -farmari, nykyinen malli, pysäköitynä',
      sv: 'Mörkgrå Volkswagen Golf Variant kombi av nuvarande modell, parkerad',
      de: 'Dunkelgrauer Volkswagen Golf Variant, Kombi im aktuellen Modell, geparkt',
      es: 'Volkswagen Golf Variant familiar gris oscuro, modelo actual, aparcado',
      fr: 'Break Volkswagen Golf Variant gris foncé, modèle actuel, garé',
      it: 'Station wagon Volkswagen Golf Variant grigio scuro, modello attuale, parcheggiata',
      nl: 'Donkergrijze Volkswagen Golf Variant stationwagen, huidig model, geparkeerd',
      'pt-BR': 'Perua Volkswagen Golf Variant cinza-escuro, modelo atual, estacionada',
      ja: '駐車中のダークグレーのフォルクスワーゲン・ゴルフ ヴァリアント（現行型ステーションワゴン）',
      ko: '주차된 짙은 회색 폭스바겐 골프 바리안트 왜건(현행 모델)',
      'zh-CN': '停放着的深灰色大众高尔夫旅行版（现款）',
    },
    author: 'Alexander-93', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Volkswagen_Golf_VIII_Variant_Facelift_IMG_8758.jpg',
    receipt: { source: 'Wikimedia Commons', title: 'Volkswagen Golf VIII Variant Facelift IMG 8758.jpg', taken: '2024-05-09', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4781×2814 → 800×471 WebP; no crop', plate: 'no front plate fitted' },
  },
  tcross: {
    src: '/images/cars/vw-t-cross.webp', width: 800, height: 467, model: 'Volkswagen T-Cross',
    alt: {
      en: 'Red Volkswagen T-Cross small SUV, current model, at a dealership',
      fi: 'Punainen Volkswagen T-Cross -pikkumaasturi, nykyinen malli, autoliikkeessä',
      sv: 'Röd Volkswagen T-Cross, liten SUV av nuvarande modell, hos en bilhandlare',
      de: 'Roter Volkswagen T-Cross, kleiner SUV im aktuellen Modell, beim Händler',
      es: 'Volkswagen T-Cross rojo, SUV pequeño, modelo actual, en un concesionario',
      fr: 'Volkswagen T-Cross rouge, petit SUV, modèle actuel, chez un concessionnaire',
      it: 'Volkswagen T-Cross rossa, SUV compatto, modello attuale, in una concessionaria',
      nl: 'Rode Volkswagen T-Cross, kleine SUV, huidig model, bij een dealer',
      'pt-BR': 'Volkswagen T-Cross vermelho, SUV compacto, modelo atual, em uma concessionária',
      ja: '販売店に並ぶ赤いフォルクスワーゲン・T-クロス（現行型の小型SUV）',
      ko: '대리점에 전시된 빨간색 폭스바겐 T-크로스 소형 SUV(현행 모델)',
      'zh-CN': '经销店里的红色大众 T-Cross 小型 SUV（现款）',
    },
    author: 'Alexander-93', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Volkswagen_T-Cross_(2023)_1X7A2499.jpg',
    receipt: { source: 'Wikimedia Commons', title: 'Volkswagen T-Cross (2023) 1X7A2499.jpg', taken: '2024-03-17', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 5632×3284 → 800×467 WebP; no crop', plate: "dealer plate sign 'Hahn Automobile', no registration plate" },
  },
};

/** Specific rules (estate) before general ones (golf). */
const RULES: [RegExp, string][] = [
  [/golf.*(station wagon|variant|estate|\bsw\b)/, 'variant'],
  [/t-?cross/, 'tcross'],
  [/\bpolo\b/, 'polo'],
  [/\bgolf\b/, 'golf'],
  [/picanto/, 'picanto'],
  [/\bv40\b/, 'v40'],
];

export function carPhotoFor(model: string | null | undefined): CarPhoto | undefined {
  if (!model) return undefined;
  const m = model.toLowerCase().replace(/\b\d\.\d\b/g, ' ').replace(/\s+/g, ' ').trim();
  const hit = RULES.find(([re]) => re.test(m));
  return hit ? PHOTOS[hit[1]] : undefined;
}
