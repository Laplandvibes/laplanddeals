/**
 * Photographs on the offer cards, the category tiles and the page heroes.
 *
 * 9.10.2026 (Vesa 4.10.: swap the network's AI images for real photographs). The 24 AI images
 * generated on 2026-05-05 are gone; every frame below is a real photograph with a licence that
 * allows commercial use, picked so that it shows what the card says (a Kemijoki dusk for
 * "Rovaniemi City Stays", a glass-roofed cabin for "Glass Igloos", the E75 at night for a car
 * page). One image, one site: every file was checked against every LaplandVibes repo by name,
 * by 64×36 pixel comparison and by photographer + day (siblings), and reserved in
 * _kuvavaihto-20261004/ledger.tsv. Receipt = source, title, author as written there, licence
 * with version, taken, retrieved, price 0 €, changes.
 *
 * 🔴 CC BY-SA files are resized only, never cropped: the file keeps the whole frame and the card
 * crops on screen with object-fit + `pos`. CC BY and public-domain files may be cropped; when one
 * was (`cropped`), the credit line says so (CC BY §3(a)(1)(B)).
 * 🔴 Never add a price, a partner product or an AI frame here: this is the credit register that
 * the page credit line (components/PhotoCredits.tsx) is built from, one entry per served file.
 */

export type OfferPhoto = {
  /** What the frame shows, in English (alt text of the hero and the credit receipts). */
  alt: string;
  /** Place name for credit lines that have no card title (home hero). */
  place: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  /** The file page at the source (Wikimedia Commons or Flickr). */
  fileUrl: string;
  source: 'Wikimedia Commons' | 'Flickr';
  taken: string;
  /** The served file was cropped (CC BY / public domain only): the credit says so. */
  cropped?: boolean;
  /** CSS object-position of the card crop (BY-SA frames are shown whole in the file). */
  pos?: string;
  receipt: { retrieved: string; priceEur: 0; changes: string; checks: string };
};

const BY2 = 'https://creativecommons.org/licenses/by/2.0/';
const BYSA2 = 'https://creativecommons.org/licenses/by-sa/2.0/';
const BYSA3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const PDM = 'https://creativecommons.org/publicdomain/mark/1.0/';
const WHEN = '2026-10-09';
const CHECKS = 'name, 64×36 pixel and photographer+day sibling check against all 29 repos 4.–9.10.2026; plates and faces checked at 100 %';
const commons = (t: string) => `https://commons.wikimedia.org/wiki/File:${t.replace(/ /g, '_')}`;
const r = (changes: string) => ({ retrieved: WHEN, priceEur: 0 as const, changes, checks: CHECKS });

export const OFFER_PHOTOS: Record<string, OfferPhoto> = {
  'husky-safaris': {
    alt: 'Huskies pulling a sled over snow, a musher ahead and pine forest beyond, at Kakslauttanen near Saariselkä',
    place: 'Saariselkä', title: 'husky safari 09', author: 'arcticroute.com', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: 'https://www.flickr.com/photos/arcticroute/2107835589/', source: 'Flickr', taken: '2005-03-15',
    receipt: r('resized 2272×1704 → 1600×1200, AVIF + WebP; no crop'),
  },
  'reindeer-tours': {
    alt: 'A reindeer harnessed to a red sleigh beside a log fence at Santa Claus Village, Rovaniemi',
    place: 'Rovaniemi', title: 'Lapland 2021, Santa Claus Village', author: 'John Dickinson', license: 'Public Domain Mark 1.0', licenseUrl: PDM,
    fileUrl: 'https://www.flickr.com/photos/chorley-photos/52121066682/', source: 'Flickr', taken: '2021-12-17',
    receipt: r('resized 6000×4000 → 1600×1067; no crop'),
  },
  'igloo-saariselka': {
    alt: 'Green aurora seen through the glass roof of a cabin, snowy pines outside',
    place: 'Lapland', title: 'Northern Lights view - Lapland, Finland - Travel photography', author: 'Giuseppe Milo', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: 'https://www.flickr.com/photos/giuseppemilo/46367705654/', source: 'Flickr', taken: '2019-01-23', cropped: true,
    receipt: r('cropped 2000×1500 → 2000×980 (the lower part, a person asleep in the bed, removed); resized to 1600×784 / 1280–2000 px hero, AVIF + WebP'),
  },
  'package-aurora-week': {
    alt: 'Log cabins with bare birches under a green aurora near Kilpisjärvi',
    place: 'Kilpisjärvi', title: 'Aurora Boreal Marco Brotto-38.jpg', author: 'Marco Brotto', license: 'CC BY-SA 4.0', licenseUrl: BYSA4,
    fileUrl: commons('Aurora Boreal Marco Brotto-38.jpg'), source: 'Wikimedia Commons', taken: '2015-02', pos: '50% 88%',
    receipt: r('resized 2977×2977 → 1200×1200 card, 1280/1920/2560 px hero, AVIF + WebP; no crop'),
  },
  'package-family-rovaniemi': {
    alt: 'Santa Claus Village at blue hour with snow, Christmas lights and visitors, Rovaniemi',
    place: 'Rovaniemi', title: 'Lapland 2019', author: 'John Dickinson', license: 'Public Domain Mark 1.0', licenseUrl: PDM,
    fileUrl: 'https://www.flickr.com/photos/chorley-photos/49344210521/', source: 'Flickr', taken: '2019-12-11',
    receipt: r('resized 6000×4000 → 1600×1067; no crop'),
  },
  'rovaniemi-hotels': {
    alt: 'The frozen Kemijoki in Rovaniemi at sunset, a bridge in the distance and a snowy riverside stairway',
    place: 'Rovaniemi', title: 'Lapland 2021 Kemijoki viewed from Koskenranta.', author: 'John Dickinson', license: 'Public Domain Mark 1.0', licenseUrl: PDM,
    fileUrl: 'https://www.flickr.com/photos/chorley-photos/52096626523/', source: 'Flickr', taken: '2021-12-16',
    receipt: r('resized 6000×4000 → 1600×1067; no crop'),
  },
  'flight-hel-kao': {
    alt: 'Myllykoski rapids in Kuusamo, a snow-covered old mill beside open water',
    place: 'Kuusamo', title: 'Kuusamo, Finland - 49634488102.jpg', author: 'Ninara', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: commons('Kuusamo, Finland - 49634488102.jpg'), source: 'Wikimedia Commons', taken: '2020-02-19',
    receipt: r('resized 4743×3162 → 1600×1067 card, 1280/1920/2560 px hero; no crop'),
  },
  'ruka-hotels': {
    alt: 'Open water and hoar-frosted pines on the Kiveskoski rapids, Kuusamo',
    place: 'Kuusamo', title: 'Kuusamo, Finland - 49625972623.jpg', author: 'Ninara', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: commons('Kuusamo, Finland - 49625972623.jpg'), source: 'Wikimedia Commons', taken: '2020-02-19',
    receipt: r('resized 5355×2801 → 1600×837; no crop; swimmers in drysuits are specks, no face recognisable'),
  },
  'flight-hel-ktt': {
    alt: 'Snow-laden spruces at twilight, Levi',
    place: 'Levi', title: 'Blue Twilight - Flickr - villoks.jpg', author: 'Ville Oksanen', license: 'CC BY-SA 2.0', licenseUrl: BYSA2,
    fileUrl: commons('Blue Twilight - Flickr - villoks.jpg'), source: 'Wikimedia Commons', taken: '2005-12-26', pos: '50% 60%',
    receipt: r('resized 2200×1444 → 1600×1050; no crop'),
  },
  'levi-ski': {
    alt: 'The floodlit north-facing main slope at Levi at night',
    place: 'Levi', title: 'Nocturnal Skiing', author: 'Clint Budd', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: 'https://www.flickr.com/photos/58827557@N06/44964051425/', source: 'Flickr', taken: '2018-02-10',
    receipt: r('resized 6000×4000 → 1600×1067; no crop'),
  },
  'summer-hiking': {
    alt: 'The Hetta–Pallas hiking trail crossing open fell in summer, between Sioskuru and Pahakuru',
    place: 'Pallas-Yllästunturi', title: 'Sioskuru-Pahakuru.jpg', author: 'Havesj', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/File:Sioskuru-Pahakuru.jpg',
    fileUrl: commons('Sioskuru-Pahakuru.jpg'), source: 'Wikimedia Commons', taken: '2005-08-03',
    receipt: r('resized 1919×1141 → 1600×951; no crop. Commons: public domain, the photographer\'s own release ({{PD-self}})'),
  },
  'summer-midnight-sun': {
    alt: 'A canoe on the Teno river at midnight in July, Nuorgam',
    place: 'Nuorgam', title: 'Nuorgam, Lapland, Finland.jpg', author: 'Ninara', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: commons('Nuorgam, Lapland, Finland.jpg'), source: 'Wikimedia Commons', taken: '2020-07-19',
    receipt: r('resized 4730×3171 → 1600×1073 card, 1280/1920/2560 px hero; no crop; three paddlers are small, no face recognisable'),
  },
  'inari-stays': {
    alt: 'Green aurora over log cabins in Nellim, Inari',
    place: 'Nellim', title: 'Aurora over small village.jpg', author: 'Martin Stojanovski', license: 'CC BY-SA 4.0', licenseUrl: BYSA4,
    fileUrl: commons('Aurora over small village.jpg'), source: 'Wikimedia Commons', taken: '2015-01-21', pos: '50% 88%',
    receipt: r('resized 1935×2800 → 1200×1736; no crop (portrait; the card shows the cabin and the sky on screen)'),
  },
  'aurora-hunts': {
    alt: 'A green aurora arc over a snow-covered spruce forest in Lapland',
    place: 'Lapland', title: 'PROMOFOTO Lapland mooi 2019 HR (18 van 1).jpg', author: 'Wowfoto', license: 'CC BY-SA 4.0', licenseUrl: BYSA4,
    fileUrl: commons('PROMOFOTO Lapland mooi 2019 HR (18 van 1).jpg'), source: 'Wikimedia Commons', taken: '2019-02-14', pos: '50% 45%',
    receipt: r('resized 8256×5504 → 1600×1067 card, 1280/1920/2560 px hero; no crop'),
  },
  'car-ktt': {
    alt: 'A snowy forest road at sunset in western Lapland',
    place: 'Lapland', title: 'Sur ma route', author: '@ S@ndrine', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: 'https://www.flickr.com/photos/neelsandrine/49543368232/', source: 'Flickr', taken: '2020-02-16',
    receipt: r('resized 5801×3626 → 1600×1000 card, 1280/1920/2560 px hero; no crop'),
  },
  'car-rvn': {
    alt: 'The E75 road in Rovaniemi on a winter night, cars with headlights on a snowy road under street lights',
    place: 'Rovaniemi', title: 'Lapland 2021, European Route E75 viewed from Koskikatu, Rovaniemi', author: 'John Dickinson', license: 'Public Domain Mark 1.0', licenseUrl: PDM,
    fileUrl: 'https://www.flickr.com/photos/chorley-photos/52122597295/', source: 'Flickr', taken: '2021-12-18',
    receipt: r('resized 6000×4000 → 1600×1067; no crop; no plate legible at 100 %'),
  },
  'car-ivl': {
    alt: 'Snowy birch and pine woodland beside the E75 road south of Inari village',
    place: 'Inari', title: 'Inarijärventie (Inari, Suomi - Finland) 2013-03-10 a.jpg', author: 'Manfred Werner - Tsui', license: 'CC BY-SA 3.0', licenseUrl: BYSA3,
    fileUrl: commons('Inarijärventie (Inari, Suomi - Finland) 2013-03-10 a.jpg'), source: 'Wikimedia Commons', taken: '2013-03-10',
    receipt: r('resized 3300×2200 → 1600×1067; no crop'),
  },
  'flight-hel-ivl': {
    alt: 'A snow-and-ice-covered tree on Kaunispää fell in Saariselkä',
    place: 'Saariselkä', title: 'Snowy Tree (300941334).jpg', author: 'Timo Newton-Syms', license: 'CC BY-SA 2.0', licenseUrl: BYSA2,
    fileUrl: commons('Snowy Tree (300941334).jpg'), source: 'Wikimedia Commons', taken: '2002-12-29', pos: '60% 50%',
    receipt: r('1600×1200 as published, converted to AVIF + WebP; no crop, no resize'),
  },
  'flight-hel-rvn': {
    alt: 'Mist rising from the open Kemijoki in Rovaniemi at dusk, the moon above the far bank',
    place: 'Rovaniemi', title: 'Lapland 2021 Mist over Kemijoki.', author: 'John Dickinson', license: 'Public Domain Mark 1.0', licenseUrl: PDM,
    fileUrl: 'https://www.flickr.com/photos/chorley-photos/52096626253/', source: 'Flickr', taken: '2021-12-16',
    receipt: r('resized 6000×4000 → 1600×1067; no crop'),
  },
  'ice-fishing': {
    alt: 'A man on a snowmobile towing an ice-fishing shelter across a frozen lake',
    place: 'Lapland', title: 'Ice fishing in Finland', author: 'Heather Sunderland', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: 'https://www.flickr.com/photos/rukakuusamo/5789883247/', source: 'Flickr', taken: '2010-12-31',
    receipt: r('resized 4000×3000 → 1600×1200; no crop; the rider is seen from the side, face not recognisable'),
  },
  'day-trips': {
    alt: 'A log lean-to under heavy snow at Korouoma, Posio',
    place: 'Korouoma', title: 'Korouoma Canyon, Lapland 02.jpg', author: 'Ninara', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: commons('Korouoma Canyon, Lapland 02.jpg'), source: 'Wikimedia Commons', taken: '2021-02-12',
    receipt: r('resized 4724×3162 → 1600×1071; no crop'),
  },
  'yllas-cabins': {
    alt: 'A snow-packed wooden hut at Ylläs, its doorway opening onto a view over the fells',
    place: 'Ylläs', title: 'See through - Flickr - Janne Räkköläinen.jpg', author: 'Janne Räkköläinen', license: 'CC BY-SA 2.0', licenseUrl: BYSA2,
    fileUrl: commons('See through - Flickr - Janne Räkköläinen.jpg'), source: 'Wikimedia Commons', taken: '2023-04-03', pos: '50% 52%',
    receipt: r('resized 2604×3353 → 1200×1545 (portrait); no crop'),
  },
  'snowmobile': {
    alt: 'A snowmobile rider kicking up powder on a frozen lake in low sun',
    place: 'Lapland', title: 'Photo motoneige LID.jpg', author: 'Lapland-I-D', license: 'CC BY-SA 4.0', licenseUrl: BYSA4,
    fileUrl: commons('Photo motoneige LID.jpg'), source: 'Wikimedia Commons', taken: '2017-11-30', pos: '50% 55%',
    receipt: r('resized 2048×1366 → 1600×1067; no crop'),
  },
  /* Front-page heroes (not a card): shown by components/Hero.tsx, credited in the page credit line. */
  'home-hero': {
    alt: 'Snow-laden spruces and snowmobile tracks under a violet dusk sky near Kuusamo',
    place: 'Kuusamo', title: '2012-01-27', author: 'Guillaume Baviere', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: 'https://www.flickr.com/photos/84554176@N00/6977125849/', source: 'Flickr', taken: '2012-01-27',
    receipt: r('resized 4518×2724 → 1280/1920/2560 px, AVIF + WebP; no crop; Flickr: "Kuusamo. Au pied du mont Livaara"'),
  },
  'home-hero-summer': {
    alt: 'A birch-lined river bend in Äkäslompolo in early summer light',
    place: 'Äkäslompolo', title: 'Äkäslompolo, Lapland (42976575930).jpg', author: 'Ninara', license: 'CC BY 2.0', licenseUrl: BY2,
    fileUrl: commons('Äkäslompolo, Lapland (42976575930).jpg'), source: 'Wikimedia Commons', taken: '2018-06-02',
    receipt: r('resized 2999×1999 → 1280/1920/2560 px, AVIF + WebP; no crop'),
  },
};

/** The pillar-page heroes: larger variants of a card photo (hero-<page>-<width>.avif|webp). */
export type HeroKey = 'hotels' | 'activities' | 'flights' | 'cars' | 'packages' | 'summer';
export const HEROES: Record<HeroKey, { photo: string; widths: number[]; /** object-position of the cover crop */ pos?: string; /** Tailwind classes: a display zoom that moves the subject out from behind the text column (BY-SA frames are never cropped in the file) */ zoom?: string; /** extra black layer under the scrim (0–1) for a bright frame, measured by gate heroteksti */ dim?: number }> = {
  hotels: { photo: 'igloo-saariselka', widths: [1280, 1920, 2000], pos: '50% 50%' },
  activities: { photo: 'aurora-hunts', widths: [1280, 1920, 2560], pos: '50% 42%' },
  flights: { photo: 'flight-hel-kao', widths: [1280, 1920, 2560], pos: '50% 42%' },
  cars: { photo: 'car-ktt', widths: [1280, 1920, 2560], pos: '50% 62%' },
  packages: { photo: 'package-aurora-week', widths: [1280, 1920, 2560], pos: '50% 82%' },
  summer: { photo: 'summer-midnight-sun', widths: [1280, 1920, 2560], pos: '50% 45%' },
};

/** Served widths of the two front-page heroes (home-hero.avif|webp is the 1920 px file). */
export const HOME_HERO_WIDTHS = [1280, 1920, 2560];

/** The six category tiles on the front page, in COPY[lang].tiles order; the file is /images/offer-<photo>.avif|webp. */
export const TILE_PHOTOS = [
  { to: '/hotels', photo: 'yllas-cabins' },
  { to: '/activities', photo: 'aurora-hunts' },
  { to: '/flights', photo: 'flight-hel-ivl' },
  { to: '/cars', photo: 'car-ktt' },
  { to: '/packages', photo: 'package-family-rovaniemi' },
  { to: '/summer', photo: 'summer-hiking' },
];

/** Credit-line items for a list of offers: one entry per offer that has a photograph, titled as the card. */
export const creditItems = (list: { id: string; title: string }[]) =>
  list.filter((o) => OFFER_PHOTOS[o.id]).map((o) => ({ key: o.id, label: o.title }));

/** June–August → the summer front-page hero (midnight sun through 7 July, hiking August); otherwise the winter one. */
export const isSummerSeason = () => { const m = new Date().getMonth() + 1; return m >= 6 && m <= 8; };
