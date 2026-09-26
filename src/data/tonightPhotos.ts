/**
 * Winter photos for the "A bed tonight in …" tiles (Vesa 26.9.2026: "hotellit ilman kuvia").
 * No own winter photo exists for these six places (the July 2026 road trip was summer and missed
 * Rovaniemi, Saariselkä and Inari), so they are Wikimedia Commons files: real photographs of the
 * named place, snow on the ground, no identifiable people, no business sign as the subject, and
 * checked unused on every LaplandVibes repo (every branch, ~17 spellings per name) on 27.9.2026.
 * Registered in _reissu-2026-07/KUVA-INVENTAARIO.md §6b.
 *
 * 🔴 CC BY-SA files are resized only, never cropped (`crop: false` ⇒ the tile shows the whole
 * frame). Public-domain, CC0 and CC BY files were centre-cropped to 3:2; for CC BY that change is
 * stated in the credit line, as the licence requires.
 * Receipt fields: Commons title, author as written on Commons, licence with version, licence URL,
 * file page, date taken, file size served here.
 */

export type TonightPhoto = {
  src: string; width: number; height: number;
  title: string; author: string; license: string; licenseUrl: string; fileUrl: string; taken: string;
  /** false = licence forbids adapting without share-alike (BY-SA): shown uncropped. */
  crop: boolean;
  /** The served file was cropped and the licence asks for changes to be indicated (CC BY). */
  croppedNote: boolean;
};

export const TONIGHT_PHOTOS: Record<string, TonightPhoto> = {
  levi: {
    src: '/images/tonight-levi.webp', width: 900, height: 589,
    // Commons tags this PNG public domain, but it is kallerna's CC BY-SA 3.0 / GFDL "Levi gondoli.jpg"
    // with the date stamp removed by Kanuto90: credited and treated as CC BY-SA 3.0.
    title: 'Levi gondoli.png', author: 'kallerna', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Levi_gondoli.png', taken: '2008', crop: false, croppedNote: false,
  },
  rovaniemi: {
    src: '/images/tonight-rovaniemi.webp', width: 900, height: 600,
    title: 'Jätkänkynttilän silta march 2009.jpg', author: 'Wikiut', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/File:J%C3%A4tk%C3%A4nkynttil%C3%A4n_silta_march_2009.jpg',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:J%C3%A4tk%C3%A4nkynttil%C3%A4n_silta_march_2009.jpg', taken: '2009-03-13', crop: true, croppedNote: false,
  },
  saariselka: {
    src: '/images/tonight-saariselka.webp', width: 900, height: 600,
    title: 'Saariselkä chapel.JPG', author: 'SeppVei', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Saariselk%C3%A4_chapel.JPG', taken: '2012-04-05', crop: true, croppedNote: false,
  },
  yllas: {
    src: '/images/tonight-yllas.webp', width: 900, height: 600,
    title: 'Kellostapuli - panoramio.jpg', author: 'dr.eros', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Kellostapuli_-_panoramio.jpg', taken: '2006-04-15', crop: true, croppedNote: true,
  },
  ruka: {
    src: '/images/tonight-ruka.webp', width: 900, height: 601,
    title: 'Ruka (25369794728).jpg', author: 'Timo Newton-Syms', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:Ruka_(25369794728).jpg', taken: '2017-11-15', crop: false, croppedNote: false,
  },
  inari: {
    src: '/images/tonight-inari.webp', width: 900, height: 600,
    title: 'SIIDA Inari, Suomi Finland 2013-03-10 004.jpg', author: 'Manfred Werner - Tsui', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    fileUrl: 'https://commons.wikimedia.org/wiki/File:SIIDA_Inari,_Suomi_Finland_2013-03-10_004.jpg', taken: '2013-03-10', crop: false, croppedNote: false,
  },
};
