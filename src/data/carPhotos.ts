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

export type CarPhoto = {
  src: string;
  width: number;
  height: number;
  /** Model as the credit line names it. */
  model: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  fileUrl: string;
  receipt: { source: 'Wikimedia Commons'; title: string; taken: string; retrieved: string; priceEur: 0; changes: string; plate: string };
};

const PHOTOS: Record<string, CarPhoto> = {
  picanto: {
    src: '/images/cars/kia-picanto.webp', width: 800, height: 489, model: 'Kia Picanto',
    alt: 'White Kia Picanto city car, current model, at a dealership',
    author: 'Alexander Migl', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:2024_Kia_Picanto_(JA)_Rutesheimer_Autoschau_2025_DSC_9198.jpg',
    receipt: { source: 'Wikimedia Commons', title: '2024 Kia Picanto (JA) Rutesheimer Autoschau 2025 DSC 9198.jpg', taken: '2025-05-25', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4787×2925 → 800×489 WebP; no crop', plate: "dealer plate sign 'ATH', no registration plate" },
  },
  polo: {
    src: '/images/cars/vw-polo.webp', width: 800, height: 474, model: 'Volkswagen Polo',
    alt: 'White Volkswagen Polo hatchback, current model, at a dealership',
    author: 'Alexander Migl', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Volkswagen_Polo_VI_(2021)_IMG_5320.jpg',
    receipt: { source: 'Wikimedia Commons', title: 'Volkswagen Polo VI (2021) IMG 5320.jpg', taken: '2021-10-03', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4860×2882 → 800×474 WebP; no crop', plate: "dealer plate sign 'Polo', no registration plate" },
  },
  golf: {
    src: '/images/cars/vw-golf.webp', width: 800, height: 417, model: 'Volkswagen Golf',
    alt: 'Grey Volkswagen Golf hatchback, current model, parked',
    author: 'Harvey Bold', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:2024_Volkswagen_Golf_R-Line_TSI_-_1498cc_1.5_(150PS)_Petrol_-_Grey_-_03-2025,_Front.jpg',
    receipt: { source: 'Wikimedia Commons', title: '2024 Volkswagen Golf R-Line TSI - 1498cc 1.5 (150PS) Petrol - Grey - 03-2025, Front.jpg', taken: '2025-03-09', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4433×2310 → 800×417 WebP; no crop', plate: "dealer number '74'; a background car at the right edge shows two letters only" },
  },
  v40: {
    src: '/images/cars/volvo-v40.webp', width: 800, height: 450, model: 'Volvo V40',
    alt: 'Black Volvo V40 hatchback in a car park at dusk',
    author: 'Project Kei', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:VOLVO_V40_D4_Dynamic_Edition.jpg',
    receipt: { source: 'Wikimedia Commons', title: 'VOLVO V40 D4 Dynamic Edition.jpg', taken: '2018-01-13', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 2560×1440 → 800×450 WebP; no crop', plate: 'blurred by the photographer' },
  },
  variant: {
    src: '/images/cars/vw-golf-variant.webp', width: 800, height: 471, model: 'Volkswagen Golf Variant',
    alt: 'Dark grey Volkswagen Golf Variant estate, current model, parked',
    author: 'Alexander-93', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Volkswagen_Golf_VIII_Variant_Facelift_IMG_8758.jpg',
    receipt: { source: 'Wikimedia Commons', title: 'Volkswagen Golf VIII Variant Facelift IMG 8758.jpg', taken: '2024-05-09', retrieved: '2026-10-04', priceEur: 0, changes: 'resized 4781×2814 → 800×471 WebP; no crop', plate: 'no front plate fitted' },
  },
  tcross: {
    src: '/images/cars/vw-t-cross.webp', width: 800, height: 467, model: 'Volkswagen T-Cross',
    alt: 'Red Volkswagen T-Cross small SUV, current model, at a dealership',
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
