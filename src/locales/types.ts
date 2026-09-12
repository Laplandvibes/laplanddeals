// Multilingual copy bundle for laplanddeals.com, EN · FI · DE · JA · ES · PT-BR · ZH-CN · KO · FR · IT · NL
// Brand voice rules (CLAUDE.md):
//   - No invented stats, no fake countdowns, no "" / "the editors"
//   - EN: editorial / honest curation
//   - FI: "kirjoitettu Suomesta", "toimituksen poiminta", "käsin valittu", "lähteet näkyvillä"
//   - DE: Siezen (formal Sie), deals vocabulary: Angebot, Rabatt, Last-Minute,
//         Frühbucher, Sparen, €/Nacht

export type SectionCopy = {
  nav: {
    hotels: string;
    activities: string;
    flights: string;
    cars: string;
    packages: string;
    summer: string;
    tonightsCta: string;
  };
  hero: {
    eyebrow: string;
    h1Line1Italic: string;
    h1Line1Bold: string;
    h1Line2: string;
    lead: string;
    primary: string;
    secondary: string;
    /**
     * Seasonal hero overrides. The base `eyebrow` / `lead` / `secondary` above
     * are the WINTER variant (shown Oct–Apr, matching the `home-hero` winter
     * image). When isSummerSeason() is true (May–Sep, the `home-hero-summer`
     * image), Hero.tsx swaps in these summer strings. Keeps the season term in
     * the copy aligned with the season shown in the photo.
     */
    eyebrowSummer?: string;
    leadSummer?: string;
    secondarySummer?: string;
    /** Secondary-CTA target: '/activities' in winter (aurora/husky), '/summer' in summer. */
    secondaryTo?: string;
    secondaryToSummer?: string;
  };
  flashBand: {
    leadBold: string;
    leadRest: string;
    cta: string;
  };
  /** Live sections (2026-09-10). {time}/{date}/{from}/{to} are runtime placeholders. */
  live: {
    flights: { eyebrow: string; title: string; lead: string; soon: string; anyDate: string; oneWay: string; roundTrip: string; from: string; checked: string; all: string };
    cabins: { eyebrow: string; title: string; lead: string; weekFrom: string; guests: string; lastMinute: string; lastMinuteLead: string; view: string; updated: string; perWeek: string; bedrooms: string; starsLabel: string };
    cars: { eyebrow: string; title: string; lead: string; window: string; total: string; operator: string; orSimilar: string; auto: string; manual: string; cta: string; classNames: string[]; colAutoFirst: string; airport: string; seats: string; days: string };
    activities: { eyebrow: string; title: string; lead: string; browse: string };
    /** places: Levi, Rovaniemi, Saariselkä, Ylläs, Ruka, Inari — CJK locales transliterate. */
    tonight: { eyebrow: string; title: string; lead: string; places: string[] };
    /** The paper sheet that carries every live section (11.9.2026, ported from hoteldeals). */
    sheet: { kicker: string; h2: string; lead: string; note: string };
    /** Shared list frame: sort toggle labels, wide-screen column titles, buttons. */
    list: { sortBy: string; sortPrice: string; sortDate: string; sortStars: string; colCheapest: string; colSoonest: string; colBestStars: string; showAll: string; openFare: string; openSearch: string; seenAt: string; photoCredit: string; empty: string };
    /** Fare calendar on the kelo panel. `{d}` read time, `{p}` price. */
    chart: { h2: string; lead: string; cheapest: string; priciest: string; empty: string; note: string; airport: string };
  };
  sections: {
    pickEyebrow: string;
    pickTitle: string;
    pickLead: string;
    pickCta: string;

    categoriesEyebrow: string;
    categoriesTitle: string;

    lastMinEyebrow: string;
    lastMinTitle: string;
    lastMinLead: string;

    summerEyebrow: string;
    summerTitle: string;
    summerLead: string;
    summerCta: string;

    everythingEyebrow: string;
    everythingTitle: string;
  };
  tiles: { label: string; hint: string }[];
  card: {
    livePrices: string;
    seeDeals: string;
    browse: string;
    flags: {
      'last-minute': string;
      'end-of-season': string;
      summer: string;
      package: string;
      'editor-pick': string;
    };
  };
  trust: { title: string; body: string }[];
  newsletter: {
    kicker: string;
    titleItalic: string;
    titleRest: string;
    lead: string;
    benefits: { title: string; body: string }[];
    placeholder: string;
    cta: string;
    sending: string;
    okTitle: string;
    okBody: string;
    fineprint: string;
    error: string;
  };
  hotelsPage: {
    eyebrow: string;
    h1Italic: string;
    h1: string;
    sub: string;
    seoTitle: string;
    seoDesc: string;
    bottomTitle: string;
    bottomLead: string;
    bottomCta: string;
  };
  activitiesPage: {
    eyebrow: string;
    h1Italic: string;
    h1: string;
    sub: string;
    seoTitle: string;
    seoDesc: string;
    bottomTitle: string;
    bottomLead: string;
    bottomCta: string;
  };
  flightsPage: {
    introTitle: string
    introP1: string
    introP2: string
    eyebrow: string;
    h1Italic: string;
    h1: string;
    sub: string;
    seoTitle: string;
    seoDesc: string;
    bottomTitle: string;
    bottomLead: string;
    bottomCta: string;
  };
  carsPage: {
    introTitle: string
    introP1: string
    introP2: string
    eyebrow: string;
    h1Italic: string;
    h1: string;
    sub: string;
    seoTitle: string;
    seoDesc: string;
    bottomTitle: string;
    bottomLead: string;
    bottomCta: string;
  };
  packagesPage: {
    introTitle: string
    introP1: string
    introP2: string
    eyebrow: string;
    h1Italic: string;
    h1: string;
    sub: string;
    seoTitle: string;
    seoDesc: string;
    curatedTitle: string;
    pairTitle: string;
    pairLead: string;
  };
  summerPage: {
    introTitle: string
    introP1: string
    introP2: string
    eyebrow: string;
    h1Italic: string;
    h1: string;
    sub: string;
    seoTitle: string;
    seoDesc: string;
    offersTitle: string;
    offersFallback: string;
    reasonsTitle: string;
    reasons: { title: string; body: string }[];
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { q: string; a: string }[];
  };
  related: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Keyword anchor text per sibling site. Order: hotelDeals, activities, tours. */
    links: { anchor: string; blurb: string }[];
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
