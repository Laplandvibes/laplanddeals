// Multilingual copy bundle for laplanddeals.com, EN · FI · DE · JA · ES · PT-BR · ZH-CN · KO · FR · IT · NL
// Brand voice rules (CLAUDE.md):
//   - No invented stats, no fake countdowns, no "" / "the editors"
//   - EN: editorial / honest curation
//   - FI: "kirjoitettu Suomesta", "toimituksen poiminta", "käsin valittu", "lähteet näkyvillä"
//   - DE: Siezen (formal Sie), deals vocabulary: Angebot, Rabatt, Last-Minute,
//         Frühbucher, Sparen, €/Nacht
import type { Lang } from '../i18n/useLang';

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
  pulse: {
    eyebrow: string;
    titleItalic: string;
    titleRest: string;
    lead: string;
    items: { when: string; title: string; body: string }[];
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
const en: SectionCopy = {
  nav: {
    hotels: 'Hotels',
    activities: 'Activities',
    flights: 'Flights',
    cars: 'Cars',
    packages: 'Packages',
    summer: 'Summer',
    tonightsCta: "Tonight's deals",
  },
  hero: {
    eyebrow: 'Last minute · Cheap deals · Aurora season',
    h1Line1Italic: "Lapland's cheapest",
    h1Line1Bold: '',
    h1Line2: 'last-minute deals.',
    lead:
      "Freed-up hotel nights, unfilled husky and snowmobile seats, cheap packages and open cabins, all in one place. One click takes you straight to the partner's current price.",
    primary: "Tonight's hotel deals",
    secondary: 'Cheap aurora tours',
    eyebrowSummer: 'Last minute · Cheap deals · Midnight sun',
    leadSummer:
      "The cheapest season of the year: midnight-sun cabins under winter rates, open activity seats, flights to Rovaniemi and summer car hire. One click takes you straight to the partner's current price.",
    secondarySummer: 'Midnight-sun deals',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: "Partner's own price",
    leadRest:
      ' · one click opens the partner page with their current rate. We never invent percentages or run fake countdowns.',
    cta: "Tonight's hotels →",
  },
  pulse: {
    eyebrow: "Today's pulse",
    titleItalic: 'What’s',
    titleRest: 'happening on Lapland right now.',
    lead:
      'Concrete seasonal facts, not invented countdowns. We update this whenever the situation moves.',
    items: [
      {
        when: 'Right now',
        title: 'Midnight sun, lowest rates of the year',
        body: 'Through July the sun barely sets. Lakeside cabins run well under winter prices, and the same fells that sold out in February sit quiet. Best-value window of the year.',
      },
      {
        when: 'Now through August',
        title: 'Hiking and water season',
        body: 'Pallas-Yllästunturi and the eastern fells are dry and open. Long days for hiking, SUP and lake swims. Mosquitoes ease off through August; bring a head net for late June.',
      },
      {
        when: 'Sept 5 – 15',
        title: 'Ruska: autumn colour peaks fast',
        body: 'The dwarf birch turns gold in roughly three days. Cabins are still affordable and the air is the cleanest in Europe (WMO). Aurora also returns as the nights darken.',
      },
      {
        when: 'Christmas 2026',
        title: 'Already filling up',
        body: 'Glass igloos and Santa Claus Village family rooms usually close to bookings in late August. Christmas Eve dinners and reindeer-sleigh slots tend to be gone by October.',
      },
      {
        when: 'Sweet spot for fares',
        title: '4–8 weeks out from Helsinki',
        body: 'Finnair and Norwegian HEL→Lapland round-trips drop into the €89–129 band when booked 4–8 weeks ahead, outside the Christmas, Easter and February peaks.',
      },
      {
        when: 'From September',
        title: 'Aurora season starts again',
        body: 'The active window runs roughly mid-September to early April. Saariselkä, Inari and Utsjoki have the highest visible-aurora rates. Hunts usually cancel up to 24h before, so they are easy to add late.',
      },
    ],
  },
  sections: {
    pickEyebrow: "Editor's picks",
    pickTitle: 'Quietly curated for the season ahead.',
    pickLead:
      "Places worth sending a friend to. Each card links to today's live partner price.",
    pickCta: 'All hotels',

    categoriesEyebrow: 'Browse by category',
    categoriesTitle: 'Find your kind of Lapland deal.',

    lastMinEyebrow: 'Last-minute window',
    lastMinTitle: 'Going within the next two weeks?',
    lastMinLead:
      'Cabin nights, husky slots and aurora hunts that often have last-minute openings. Live partner availability, refreshed on every click.',

    summerEyebrow: 'Midnight sun · Jun 6 – Jul 7',
    summerTitle: 'Summer in Lapland is the secret deal.',
    summerLead:
      '32 days the sun never sets. Lakeside cabins at a fraction of December rates. Hiking peaks late August, clean air, no mosquitoes, ruska gold.',
    summerCta: 'Browse summer',

    everythingEyebrow: 'Everything',
    everythingTitle: "Today's catalogue.",
  },
  tiles: [
    { label: 'Hotels & Cabins', hint: 'Glass igloos · Slope-side · Wilderness lodges' },
    { label: 'Activities', hint: 'Husky · Aurora · Snowmobile · Reindeer' },
    { label: 'Flights', hint: 'Helsinki to Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Car Hire', hint: '4WD · Studded tyres · Airport pickup' },
    { label: 'Packages', hint: 'Aurora week · Family breaks · Weekend escapes' },
    { label: 'Summer', hint: 'Midnight sun · Hiking · Lakeside cabins' },
  ],
  card: {
    livePrices: 'Live prices',
    seeDeals: 'See deals',
    browse: 'Browse',
    flags: {
      'last-minute': 'Last-minute',
      'end-of-season': 'End of season',
      summer: 'Midnight sun',
      package: 'Multi-day',
      'editor-pick': "Editor's pick",
    },
  },
  trust: [
    {
      title: 'Honest curation',
      body: 'Live partner prices. Never invented percentages or fake countdowns.',
    },
    {
      title: 'Reviewed by locals',
      body: 'Curated by people who travel and write from Finnish Lapland.',
    },
    {
      title: 'Part of #LaplandVibes',
      body: '23+ sister sites. One ecosystem, one source of truth.',
    },
  ],
  newsletter: {
    kicker: 'The #LaplandVibes newsletter',
    titleItalic: 'Catch the deals',
    titleRest: 'before they go.',
    lead:
      "Last-minute Lapland prices, end-of-season cabin drops and midnight-sun windows you'd otherwise miss.",
    benefits: [
      {
        title: 'Real partner prices',
        body: 'Live rates pulled the moment you click. No invented percentages.',
      },
      {
        title: 'Last-minute drops',
        body: 'Cabin nights below floor, ski-week fills, off-peak husky slots.',
      },
      {
        title: 'Summer & midnight sun',
        body: 'The 32-day window from June 6, different season, different deals.',
      },
      {
        title: 'Only when it matters',
        body: 'A roundup when there are real deals, not a torrent. Unsubscribe link on every send.',
      },
    ],
    placeholder: 'Your email address',
    cta: 'Get the deals',
    sending: 'Sending…',
    okTitle: "You're on the list.",
    okBody: 'Welcome email is on its way, check your inbox.',
    fineprint: 'Only when there is something worth flagging. Unsubscribe in one click. We never share your address.',
    error: 'Could not subscribe right now. Please try again in a moment.',
  },
  hotelsPage: {
    eyebrow: 'Hotels & Cabins',
    h1Italic: 'Lapland hotels',
    h1: 'live prices, tonight.',
    sub:
      "Glass igloos under the aurora belt, slope-side properties on Levi, wilderness lodges in Ylläs, family hotels in Rovaniemi. Compare tonight's rates on Hotels.com.",
    seoTitle: 'Lapland Hotel Deals, Glass Igloos, Slope-Side, Wilderness Cabins',
    seoDesc:
      'Live Hotels.com prices for glass igloos, ski-in stays, family hotels and wilderness lodges across Finnish Lapland. Last-minute and end-of-season cabin nights.',
    bottomTitle: "Don't see your destination?",
    bottomLead: 'Search any Lapland town directly on Hotels.com.',
    bottomCta: 'Browse all Lapland hotels →',
  },
  activitiesPage: {
    eyebrow: 'Activities',
    h1Italic: 'Lapland activities',
    h1: 'real-time availability.',
    sub:
      'Husky safaris, aurora hunts, snowmobile expeditions, reindeer-farm visits, ice fishing. Live availability on GetYourGuide, no fake timers, no invented percentages.',
    seoTitle: 'Lapland Activity Deals, Husky, Aurora, Snowmobile & More',
    seoDesc:
      'Live GetYourGuide prices on husky safaris, aurora hunts, snowmobile tours, reindeer farms and ice fishing across Finnish Lapland. Last-minute slots.',
    bottomTitle: 'Browse the full Lapland catalogue',
    bottomLead: '900+ tours, day trips and multi-day adventures on GetYourGuide.',
    bottomCta: 'All Lapland activities →',
  },
  flightsPage: {
    eyebrow: 'Flights',
    h1Italic: 'Flights to Lapland',
    h1: 'live Trip.com fares.',
    sub:
      'Helsinki to every Lapland gateway, pre-filled and dated. Click through to real Finnair and Norwegian rates.',
    seoTitle: 'Flights to Lapland, Live Trip.com Deals on Helsinki Routes',
    seoDesc:
      'Live Trip.com flight prices: Helsinki to Rovaniemi, Kittilä, Ivalo, Kuusamo and Kemi. Direct Finnair and Norwegian fares, pre-filled, ready to book.',
    bottomTitle: 'Travelling from outside Finland?',
    bottomLead: 'Search any origin to any Lapland airport on Trip.com.',
    bottomCta: 'Open Trip.com flight search →',
  },
  carsPage: {
    eyebrow: 'Car hire',
    h1Italic: 'Winter-ready cars',
    h1: 'live partner prices.',
    sub:
      'Studded tyres, 4WD, free aurora-chasing range. Pickup at every Lapland airport, compare on EconomyBookings.',
    seoTitle: 'Lapland Car Hire Deals, Studded Tyres, 4WD, Airport Pickup',
    seoDesc:
      'Live EconomyBookings prices on car hire from Rovaniemi, Kittilä, Ivalo and Kuusamo airports. Studded tyres included for winter driving.',
    bottomTitle: 'Helsinki pickup or one-way drop-off?',
    bottomLead: 'EconomyBookings supports one-way rentals between most Finnish airports.',
    bottomCta: 'Open EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Packages',
    h1Italic: 'Build your own',
    h1: 'Lapland trip.',
    sub:
      "We don't sell sealed packages. We curate the building blocks, flights, stays, husky days, aurora hunts, and you book each at the partner's live rate. No middleman fee.",
    seoTitle: 'Lapland Package Deals, Aurora Week, Family Breaks, Weekends',
    seoDesc:
      'Multi-day Lapland trip ideas: aurora week in Saariselkä, family breaks in Rovaniemi, weekend escapes. Each booked separately at live partner rates.',
    curatedTitle: 'Curated trip ideas',
    pairTitle: 'Pair these with your stay',
    pairLead: 'The blocks most travellers stack into a 4–7 night Lapland trip.',
  },
  summerPage: {
    eyebrow: 'Midnight sun · June 6 – July 7',
    h1Italic: 'Summer in Lapland',
    h1: 'is the secret deal.',
    sub:
      '32 days the sun never sets. Lakeside cabins at a fraction of December rates. Hiking peaks late August, clean air, no mosquitoes, ruska gold.',
    seoTitle: 'Lapland Summer Deals, Midnight Sun Stays & Hiking',
    seoDesc:
      '32 days the sun never sets in Finnish Lapland (Jun 6 – Jul 7). Midnight-sun cabin deals, hiking in Pallas-Yllästunturi, lakeside summer stays at a fraction of winter rates.',
    offersTitle: 'Summer offers, live partner prices',
    offersFallback: 'Summer offers being curated, check back soon.',
    reasonsTitle: 'Three honest reasons summer is cheaper',
    reasons: [
      {
        title: 'Demand drops in May',
        body: 'Aurora season ends, ski resorts close. Cabins that booked solid in February have empty weeks.',
      },
      {
        title: 'Lapland is wide open',
        body: 'Same fells, same lakes, same wilderness, without the package-tour markup.',
      },
      {
        title: 'Daylight is endless',
        body: 'You hike at midnight. You swim at 2 AM. You get a longer trip per day.',
      },
    ],
    cta: 'Find a summer week →',
  },
  faq: {
    eyebrow: 'Good to know',
    title: 'Lapland deals, your questions, answered.',
    lead: 'Honest answers on timing, booking windows and what to expect. No invented prices, no fake urgency.',
    items: [
      {
        q: 'When is the cheapest time to visit Lapland?',
        a: 'Late spring and summer, roughly May through August, are the quietest and most affordable. Aurora season has ended and the ski resorts have closed, so lakeside cabins that sold out in February sit empty. Within winter, the shoulder weeks (mid-March to mid-April) are cheaper than the Christmas and February-holiday peaks while still having full snow and longer daylight.',
      },
      {
        q: 'How far in advance should I book a Lapland trip?',
        a: 'It depends on the season. Christmas and New Year are the tightest: glass igloos and Santa Claus Village family rooms often close to bookings by late August. Aurora season (roughly November to March) is calmer but popular weekends fill early. Spring, summer and autumn rarely need months of lead time. Flights from Helsinki tend to be cheapest booked a few weeks out, outside the Christmas, Easter and February-break peaks.',
      },
      {
        q: 'Are last-minute Lapland deals worth it?',
        a: 'Often, yes, outside the few peak windows. When a cabin, husky slot or aurora hunt has unsold space close to the date, partners release it at the live rate, and aurora and husky tours frequently take bookings up to about 24 hours before. The exceptions are Christmas, New Year, Easter (Pääsiäinen) and the February school holiday, when demand is high and waiting rarely helps.',
      },
      {
        q: "What's included in a typical Lapland package deal?",
        a: 'It varies by operator, so always read the inclusions. A common bundle pairs a few nights of accommodation with one or two activities, a husky safari, an aurora hunt or a snowmobile tour, and sometimes airport transfers. On LaplandDeals we do not sell sealed packages; we curate the building blocks (flights, stays, activities, car hire) so you book each at the partner’s live price with no middleman fee.',
      },
      {
        q: 'How can I find genuine Lapland discounts?',
        a: 'Compare the live partner price against the property or operator’s normal rate rather than trusting a headline percentage. Travel in the shoulder or summer seasons, stay slightly outside the busiest resorts, and book activities directly through trusted platforms. Every price on LaplandDeals links straight to the partner’s current rate, we never invent percentages or run fake countdowns.',
      },
    ],
  },
  related: {
    eyebrow: 'Where to next',
    title: 'More from the #LaplandVibes network.',
    lead: 'Sister sites that go deeper on one corner of a Lapland trip. Each opens in a new tab.',
    links: [
      { anchor: 'hotel deals & packages', blurb: 'Glass igloos, Northern Lights suites and family resorts across Finnish Lapland.' },
      { anchor: 'deals on activities & safaris', blurb: 'Husky safaris, aurora hunts, snowmobile tours and reindeer farms with live availability.' },
      { anchor: 'all-inclusive tour bundles', blurb: 'Multi-day guided itineraries that stitch stays, transfers and activities together.' },
    ],
  },
};

// JA block, chrome translated; long-form prose left in EN with TODO
// for native translator. Phase 3B (2026-05-17).
const ja: SectionCopy = {
  nav: {
    hotels: 'ホテル',
    activities: 'アクティビティ',
    flights: 'フライト',
    cars: 'レンタカー',
    packages: 'パッケージ',
    summer: '夏',
    tonightsCta: '今夜のお得情報',
  },
  hero: {
    eyebrow: '厳選 · 今が旬 · オーロラシーズン',
    h1Line1Italic: 'ラップランド最安の',
    h1Line1Bold: '',
    h1Line2: '直前セール。',
    lead:
      'フィンランド・ラップランドの直前予約オファーを静かに厳選, オーロラの下のガラスイグルー、ハスキーサファリ、ロヴァニエミ便、冬の4WDレンタカー。提携先のリアルタイム価格を表示し、割引率を捏造することは一切ありません。',
    primary: '今夜のホテル',
    secondary: 'オーロラツアー',
    eyebrowSummer: '厳選 · 今が旬 · 白夜',
    leadSummer:
      'フィンランド・ラップランドのオファーを静かに厳選, 白夜のキャビン、ハイキングとSUP、湖のクルーズ、ロヴァニエミ便、夏のレンタカー。提携先のリアルタイム価格を表示し、割引率を捏造することは一切ありません。',
    secondarySummer: '白夜の旅',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: '提携先のリアルタイム価格',
    leadRest:
      ' · クリックのたびに更新されます。割引率を捏造することは一切なく、提携先が公表する本日のレートをそのままお見せしています。',
    cta: '今夜のホテル →',
  },
  pulse: {
    eyebrow: '今日のラップランド',
    titleItalic: '今、',
    titleRest: 'ラップランドで起きていること。',
    lead:
      '架空のカウントダウンではなく、季節ごとの具体的な事実をお届けします。状況が変わるたびに更新しています。',
    items: [
      {
        when: '今まさに',
        title: '白夜と、一年で最も安いレート',
        body: '7月いっぱい、太陽はほとんど沈みません。湖畔のコテージは冬期料金を大きく下回り、2月には満室だった同じ山々が今は静かです。一年で最もお得な時期です。',
      },
      {
        when: '今から8月まで',
        title: 'ハイキングと水辺のシーズン',
        body: 'パッラス・ユッラストゥントゥリと東部の山々は乾いて開けています。長い一日をハイキング、SUP、湖水浴に。蚊は8月にかけて落ち着きます。6月下旬はヘッドネットをお持ちください。',
      },
      {
        when: '9月5日 – 15日',
        title: 'ルスカ、紅葉のピークはあっという間',
        body: 'ヒメカンバはおよそ3日で黄金色に染まります。コテージはまだ手頃で、空気はヨーロッパで最も澄んでいます(WMO)。夜が深まるにつれ、オーロラも戻ってきます。',
      },
      {
        when: '2026年クリスマス',
        title: 'すでに予約が動いています',
        body: 'ガラスイグルーやサンタクロース村のファミリールームは、8月下旬には予約終了となるのが通例です。クリスマスイブのディナーやトナカイそり枠は、10月までにほぼ満枠となります。',
      },
      {
        when: '航空券のお得な時期',
        title: 'ヘルシンキ発・出発の4〜8週間前',
        body: 'フィンエアー / ノルウェジアン航空のヘルシンキ→ラップランド往復便は、4〜8週間前の予約で€89〜129の価格帯に落ち着きます。クリスマス、パーシエイネン、2月のピークを除く時期が狙い目です。',
      },
      {
        when: '9月から',
        title: 'オーロラシーズンが再び始まります',
        body: '観測好機はおおむね9月中旬から4月初旬まで続きます。サーリセルカ、イナリ、ウツヨキは可視率が最も高いエリアです。オーロラハントは通常24時間前まで予約可能なため、直前の追加も簡単です。',
      },
    ],
  },
  sections: {
    pickEyebrow: '編集部のおすすめ',
    pickTitle: 'これからのシーズンに向けて静かに厳選しました。',
    pickLead:
      '友人にそっと教えたくなる場所だけを集めています。各カードは本日の提携先リアルタイム価格にリンクしています。',
    pickCta: 'すべてのホテルを見る',

    categoriesEyebrow: 'カテゴリーから探す',
    categoriesTitle: 'あなたに合うラップランドのお得情報を。',

    lastMinEyebrow: '直前予約の窓口',
    lastMinTitle: '2週間以内に出発予定ですか?',
    lastMinLead:
      'コテージの空き枠、ハスキーサファリの追加枠、オーロラハントの直前空席。提携先のリアルタイム在庫状況をクリックのたびに更新しています。',

    summerEyebrow: '白夜 · 6月6日 – 7月7日',
    summerTitle: 'ラップランドの夏は、知る人ぞ知る季節限定のお得な時期です。',
    summerLead:
      '太陽が沈まない32日間。湖畔のコテージは12月料金のごく一部の価格で泊まれます。8月下旬はハイキングのベストシーズン, 澄んだ空気、蚊もなく、ルスカの黄金色が広がります。',
    summerCta: '夏のオファーを見る',

    everythingEyebrow: 'すべてのオファー',
    everythingTitle: '本日のカタログ。',
  },
  tiles: [
    { label: 'ホテル & コテージ', hint: 'ガラスイグルー · ゲレンデサイド · 山小屋ロッジ' },
    { label: 'アクティビティ', hint: 'ハスキー · オーロラ · スノーモービル · トナカイ' },
    { label: 'フライト', hint: 'ヘルシンキ発 ロヴァニエミ · キッティラ · イヴァロ · クーサモ' },
    { label: 'レンタカー', hint: '四輪駆動 · スパイクタイヤ · 空港受け取り' },
    { label: 'パッケージ', hint: 'オーロラの一週間 · ファミリー休暇 · 週末旅' },
    { label: '夏', hint: '白夜 · ハイキング · 湖畔のコテージ' },
  ],
  card: {
    livePrices: 'リアルタイム価格',
    seeDeals: 'お得情報を見る',
    browse: '見る',
    flags: {
      'last-minute': '直前予約',
      'end-of-season': 'シーズン終盤',
      summer: '白夜',
      package: '連泊',
      'editor-pick': '編集部のおすすめ',
    },
  },
  trust: [
    {
      title: '誠実な厳選',
      body: '提携先のリアルタイム価格。架空の割引率や偽のカウントダウンは一切ありません。',
    },
    {
      title: '地元目線でレビュー',
      body: 'フィンランド・ラップランドから旅し、執筆している人々が厳選しています。',
    },
    {
      title: '#LaplandVibes ネットワークの一員',
      body: '23以上の姉妹サイト。一つのエコシステム、一つの信頼できる情報源です。',
    },
  ],
  newsletter: {
    kicker: '#LaplandVibes ニュースレター',
    titleItalic: 'お得情報を',
    titleRest: '消える前にキャッチ。',
    lead:
      '直前予約のラップランド価格、シーズン終盤のコテージ値下げ、白夜の予約窓口, 見逃しがちなチャンスをお届けします。',
    benefits: [
      {
        title: '本物の提携先価格',
        body: 'クリックしたその瞬間にリアルタイムのレートを取得します。架空の割引率は一切ありません。',
      },
      {
        title: '直前のお得な値下げ',
        body: 'コテージの底値、スキー週の埋め込み、オフピークのハスキー枠などをお知らせします。',
      },
      {
        title: '夏と白夜',
        body: '6月6日から始まる32日間, シーズンが違えば、お得な内容も変わります。',
      },
      {
        title: '週1回のまとめ',
        body: '洪水ではなくダイジェスト形式。配信解除リンクは毎号に掲載しています。',
      },
    ],
    placeholder: 'メールアドレス',
    cta: 'お得情報を受け取る',
    sending: '送信中…',
    okTitle: '登録が完了しました。',
    okBody: 'ウェルカムメールをお送りします, 受信ボックスをご確認ください。',
    fineprint: '本当にお伝えする価値がある時だけ配信します。ワンクリックで配信解除できます。メールアドレスを第三者と共有することはありません。',
    error: '現在登録できませんでした。少し時間をおいて再度お試しください。',
  },
  hotelsPage: {
    eyebrow: 'ホテル & コテージ',
    h1Italic: 'ラップランドのホテル',
    h1: '今夜のリアルタイム価格。',
    sub:
      'オーロラベルト下のガラスイグルー、レヴィのゲレンデサイドのお宿、ユッラスのウィルダネスロッジ、ロヴァニエミのファミリーホテル。今夜のレートをHotels.comで比較できます。',
    seoTitle: 'ラップランドのホテルお得情報、ガラスイグルー、ゲレンデサイド、山小屋',
    seoDesc:
      'フィンランド・ラップランド各地のガラスイグルー、スキーイン宿、ファミリーホテル、ウィルダネスロッジのHotels.comリアルタイム価格。直前予約とシーズン終盤のコテージもあります。',
    bottomTitle: 'お目当ての街が見つかりませんか?',
    bottomLead: 'Hotels.comでラップランドのどの街も直接検索できます。',
    bottomCta: 'すべてのラップランドのホテルを見る →',
  },
  activitiesPage: {
    eyebrow: 'アクティビティ',
    h1Italic: 'ラップランドのアクティビティ',
    h1: 'リアルタイムの空き状況。',
    sub:
      'ハスキーサファリ、オーロラハント、スノーモービル遠征、トナカイ牧場、氷上釣り。GetYourGuideでリアルタイムに空き状況を確認できます, 偽のタイマーや架空の割引率はありません。',
    seoTitle: 'ラップランドのアクティビティお得情報、ハスキー、オーロラ、スノーモービルなど',
    seoDesc:
      'フィンランド・ラップランド全域のハスキーサファリ、オーロラハント、スノーモービルツアー、トナカイ牧場、氷上釣りのGetYourGuideリアルタイム価格。直前予約枠もあります。',
    bottomTitle: 'ラップランドの全カタログを見る',
    bottomLead: 'GetYourGuideで900以上のツアー、日帰り旅行、複数日アドベンチャーを取り扱っています。',
    bottomCta: 'すべてのラップランドのアクティビティ →',
  },
  flightsPage: {
    eyebrow: 'フライト',
    h1Italic: 'ラップランドへのフライト',
    h1: 'Trip.comのリアルタイム運賃。',
    sub:
      'ヘルシンキからラップランドの全空港まで、出発地と日付を入力済みでご案内します。クリックするだけで、フィンエアーやノルウェジアンの実際のレートに移動します。',
    seoTitle: 'ラップランドへのフライト、ヘルシンキ路線のTrip.comお得情報',
    seoDesc:
      'Trip.comのリアルタイム航空券価格:ヘルシンキ発 ロヴァニエミ、キッティラ、イヴァロ、クーサモ、ケミ便。フィンエアーとノルウェジアンの直行便を入力済みでご紹介します。',
    bottomTitle: 'フィンランド以外からのご出発ですか?',
    bottomLead: 'Trip.comでお好きな出発地からラップランドの空港までの航空券を検索できます。',
    bottomCta: 'Trip.com航空券検索を開く →',
  },
  carsPage: {
    eyebrow: 'レンタカー',
    h1Italic: '冬装備のレンタカー',
    h1: '提携先のリアルタイム価格。',
    sub:
      'スパイクタイヤ、四輪駆動、オーロラハントに十分な走行距離。ラップランドのすべての空港で受け取り可能です, EconomyBookingsで比較してください。',
    seoTitle: 'ラップランドのレンタカーお得情報、スパイクタイヤ、4WD、空港受け取り',
    seoDesc:
      'EconomyBookingsのロヴァニエミ、キッティラ、イヴァロ、クーサモ各空港発レンタカーのリアルタイム価格。冬季運転に必須のスパイクタイヤも込みです。',
    bottomTitle: 'ヘルシンキ受け取り、または片道返却ですか?',
    bottomLead: 'EconomyBookingsはフィンランド国内の主要空港間で片道レンタルにも対応しています。',
    bottomCta: 'EconomyBookingsを開く →',
  },
  packagesPage: {
    eyebrow: 'パッケージ',
    h1Italic: '自分だけの',
    h1: 'ラップランド旅行を組み立てる。',
    sub:
      '当サイトでは固定パッケージは販売していません。フライト、宿泊、ハスキー、オーロラハントなど旅の要素を厳選し、それぞれを提携先のリアルタイムレートで予約いただきます。仲介手数料はかかりません。',
    seoTitle: 'ラップランドのパッケージ、オーロラの一週間、ファミリー休暇、週末旅',
    seoDesc:
      'サーリセルカでのオーロラ週、ロヴァニエミのファミリー休暇、週末旅など、複数日のラップランド旅行のアイデア。各要素は提携先のリアルタイムレートで個別に予約します。',
    curatedTitle: '厳選した旅程のアイデア',
    pairTitle: '滞在と組み合わせたいオプション',
    pairLead: '4〜7泊のラップランド旅行で、多くの旅行者が組み合わせる定番要素です。',
  },
  summerPage: {
    eyebrow: '白夜 · 6月6日 – 7月7日',
    h1Italic: 'ラップランドの夏は',
    h1: '知る人ぞ知るお得な季節です。',
    sub:
      '太陽が沈まない32日間。湖畔のコテージは12月料金のごく一部の価格。8月下旬はハイキングのベストシーズン, 澄んだ空気、蚊もなく、ルスカの黄金色が広がります。',
    seoTitle: 'ラップランドの夏のお得情報、白夜の滞在とハイキング',
    seoDesc:
      'フィンランド・ラップランドで太陽が沈まない32日間(6月6日 – 7月7日)。白夜のコテージのお得情報、パッラス=ユッラストゥントゥリでのハイキング、冬期料金のごく一部の価格の湖畔の夏滞在。',
    offersTitle: '夏のオファー、提携先のリアルタイム価格',
    offersFallback: '夏のオファーを厳選中です、近日中にご確認ください。',
    reasonsTitle: '夏がお得な3つの正直な理由',
    reasons: [
      {
        title: '5月に需要が下がります',
        body: 'オーロラシーズンが終わり、スキーリゾートが閉まります。2月には満室だったコテージにも空き週が出てきます。',
      },
      {
        title: 'ラップランドが広く開放されます',
        body: '同じ山々、同じ湖、同じ大自然, パッケージツアーの上乗せ料金なしで楽しめます。',
      },
      {
        title: '日照時間が無限大',
        body: '真夜中にハイキング、午前2時に泳ぐ、1日の体験時間が長くなります。',
      },
    ],
    cta: '夏の1週間を探す →',
  },
  faq: {
    eyebrow: '知っておきたいこと',
    title: 'ラップランドのお得情報、よくある質問にお答えします。',
    lead: '時期、予約のタイミング、何を期待できるかについて正直にお答えします。架空の価格も、煽るような緊急感もありません。',
    items: [
      {
        q: 'ラップランドを訪れるのに最も安い時期はいつですか?',
        a: '晩春から夏, おおよそ5月から8月, が最も静かで手頃です。オーロラシーズンが終わり、スキーリゾートも閉まるため、2月には満室だった湖畔のコテージが空きます。冬の中では、ショルダー期(3月中旬〜4月中旬)がクリスマスや2月の学校休暇のピークよりも安く、それでいて雪はたっぷり、日照時間も長くなります。',
      },
      {
        q: 'ラップランド旅行はどれくらい前に予約すべきですか?',
        a: 'シーズンによって異なります。クリスマスと年末年始が最も逼迫します。ガラスイグルーやサンタクロース村のファミリールームは、8月下旬には予約終了となることが多いです。オーロラシーズン(おおよそ11月〜3月)は比較的落ち着いていますが、人気の週末は早く埋まります。春、夏、秋は数か月前の予約はほとんど不要です。ヘルシンキ発の航空券は、クリスマス・イースター・2月の休暇のピークを除けば、数週間前の予約が最も安くなる傾向があります。',
      },
      {
        q: 'ラップランドの直前予約のお得情報は利用する価値がありますか?',
        a: 'いくつかのピーク時期を除けば、多くの場合は価値があります。コテージ、ハスキー枠、オーロラハントに直前の空きが出ると、提携先がリアルタイム価格で放出します。オーロラやハスキーのツアーは、開始の約24時間前まで予約を受け付けていることがよくあります。例外はクリスマス、年末年始、イースター(パーシエイネン)、2月の学校休暇で、この時期は需要が高く、待っても効果はほとんどありません。',
      },
      {
        q: '一般的なラップランドのパッケージには何が含まれますか?',
        a: '事業者によって異なるため、含まれる内容は必ずご確認ください。一般的なプランでは、数泊の宿泊に1〜2つのアクティビティ(ハスキーサファリ、オーロラハント、スノーモービルツアーなど)が組み合わされ、空港送迎が付くこともあります。LaplandDealsでは固定パッケージは販売していません。旅の要素(フライト、宿泊、アクティビティ、レンタカー)を厳選し、それぞれを提携先のリアルタイム価格で予約いただきます, 仲介手数料はかかりません。',
      },
      {
        q: 'ラップランドの本物の割引を見つけるには?',
        a: '見出しの割引率を信じるのではなく、提携先のリアルタイム価格を施設や事業者の通常料金と比較してください。ショルダー期や夏に旅行し、最も混雑するリゾートから少し離れた場所に泊まり、アクティビティは信頼できるプラットフォームから直接予約しましょう。LaplandDealsのすべての価格は提携先の現在のレートに直接リンクしています, 割引率を捏造したり、偽のカウントダウンを表示したりすることはありません。',
      },
    ],
  },
  related: {
    eyebrow: '次はこちら',
    title: '#LaplandVibes ネットワークのその他のサイト。',
    lead: 'ラップランド旅行の各分野を深く掘り下げる姉妹サイト。それぞれ新しいタブで開きます。',
    links: [
      { anchor: 'ホテルのお得情報とパッケージ', blurb: 'フィンランド・ラップランド各地のガラスイグルー、オーロラスイート、ファミリーリゾート。' },
      { anchor: 'アクティビティとサファリのお得情報', blurb: 'ハスキーサファリ、オーロラハント、スノーモービルツアー、トナカイ牧場をリアルタイムの空き状況で。' },
      { anchor: 'オールインクルーシブのツアーパッケージ', blurb: '宿泊、送迎、アクティビティをまとめた複数日のガイド付き旅程。' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FINNISH, toimituksen poiminta, käsin valittu, kirjoitettu Suomesta
// ─────────────────────────────────────────────────────────────────────────────
const fi: SectionCopy = {
  nav: {
    hotels: 'Hotellit',
    activities: 'Aktiviteetit',
    flights: 'Lennot',
    cars: 'Autot',
    packages: 'Matkapaketit',
    summer: 'Kesä',
    tonightsCta: 'Tämän illan tarjoukset',
  },
  hero: {
    eyebrow: 'Last minute · Vapautuneet paikat · Revontulikausi',
    h1Line1Italic: 'Lapin halvimmat',
    h1Line1Bold: '',
    h1Line2: 'viime hetken diilit.',
    lead:
      'Vapautuneet hotelliyöt, täyttymättömät husky- ja kelkkaretket, edulliset paketit ja vapaat mökit yhdessä paikassa. Klikkaus vie suoraan kumppanille, jossa näet ja varaat sen hetkisen hinnan.',
    primary: 'Illan hotellidiilit',
    secondary: 'Halvat revontuliretket',
    eyebrowSummer: 'Last minute · Vapautuneet paikat · Yötön yö',
    leadSummer:
      'Vuoden halvin sesonki: yöttömän yön mökit alle talvihintojen, vapaat retkipaikat, lennot Rovaniemelle ja kesän vuokra-autot. Klikkaus vie suoraan kumppanille, jossa näet ja varaat sen hetkisen hinnan.',
    secondarySummer: 'Yötön yö -diilit',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Suoraan kumppanin hinta',
    leadRest:
      ' · klikkaus vie kumppanin sivulle, jossa näet hinnan. Emme keksi prosentteja emmekä pyöritä valeajastimia.',
    cta: 'Tämän illan hotellit →',
  },
  pulse: {
    eyebrow: 'Tilanne tänään',
    titleItalic: 'Mitä',
    titleRest: 'Lapissa tapahtuu juuri nyt.',
    lead:
      'Konkreettisia kausifaktoja, ei keksittyjä kelloja. Päivitämme tämän aina kun tilanne muuttuu.',
    items: [
      {
        when: 'Juuri nyt',
        title: 'Yötön yö, vuoden halvimmat hinnat',
        body: 'Heinäkuun loppuun asti aurinko tuskin laskee. Järvenrantamökit selvästi alle talvihintojen, ja samat tunturit jotka myytiin loppuun helmikuussa ovat nyt hiljaisia. Vuoden paras hinta-laatuikkuna.',
      },
      {
        when: 'Nyt elokuun loppuun',
        title: 'Vaellus- ja vesikausi',
        body: 'Pallas-Yllästunturi ja itäiset tunturit ovat kuivia ja auki. Pitkät päivät vaellukseen, SUP-lautailuun ja järviuintiin. Hyttyset helpottavat elokuuta kohti; ota niskaverkko mukaan kesäkuun lopulla.',
      },
      {
        when: '5.–15.9.',
        title: 'Ruska: syysvärit huippuun nopeasti',
        body: 'Vaivaiskoivu kääntyy kullalle noin kolmessa päivässä. Mökit ovat yhä edullisia ja ilma on Euroopan puhtainta (WMO). Myös revontulet palaavat öiden pimentyessä.',
      },
      {
        when: 'Joulu 2026',
        title: 'Jo nyt täyttymässä',
        body: 'Lasi-iglut ja Joulupukin Pajakylän perhehuoneet sulkeutuvat varauksilta yleensä elokuun lopulla. Jouluaaton illalliset ja porotila-ajelut: useimmiten loppu lokakuussa.',
      },
      {
        when: 'Lippujen makea piste',
        title: '4–8 viikkoa Helsingistä',
        body: 'Finnairin ja Norwegianin HEL→Lappi-edestakaiset putoavat 89–129 € välille, kun varaat 4–8 viikkoa etukäteen, pois lukien joulun, pääsiäisen ja helmikuun huiput.',
      },
      {
        when: 'Syyskuusta alkaen',
        title: 'Revontulisesonki alkaa taas',
        body: 'Aktiivinen kausi kulkee suunnilleen syyskuun puolivälistä huhtikuun alkuun. Saariselkä, Inari ja Utsjoki näyttävät korkeimmat näkyvyysprosentit. Revontulisafari peruuntuu yleensä 24 h ennen, joten sen voi lisätä myöhään.',
      },
    ],
  },
  sections: {
    pickEyebrow: 'Toimituksen poiminta',
    pickTitle: 'Käsin valittu tulevalle kaudelle.',
    pickLead:
      'Paikat joihin lähettäisimme ystävämme. Jokainen kortti vie suoraan kumppanin omaan hintaan.',
    pickCta: 'Kaikki hotellit',

    categoriesEyebrow: 'Selaa kategorian mukaan',
    categoriesTitle: 'Etsi tarjous omaan matkaasi.',

    lastMinEyebrow: 'Last-minute -ikkuna',
    lastMinTitle: 'Lähdössä parin viikon sisällä?',
    lastMinLead:
      'Mökkiyöitä, husky-paikkoja ja revontulisafareita, joissa on usein last-minute-aukkoja. Vapaat paikat ja hinnan näet suoraan kumppanilta.',

    summerEyebrow: 'Yötön yö · 6.6.–7.7.',
    summerTitle: 'Lapin kesä on salainen tarjous.',
    summerLead:
      '32 vuorokautta aurinko ei laske. Järvenrantamökit murto-osalla joulukuun hinnoista. Vaeltaminen parhaimmillaan elokuun lopussa, puhdas ilma, ei hyttysiä, ruskan kulta.',
    summerCta: 'Selaa kesää',

    everythingEyebrow: 'Kaikki',
    everythingTitle: 'Tämän päivän valikoima.',
  },
  tiles: [
    { label: 'Hotellit & mökit', hint: 'Lasi-iglut · Rinneläheiset · Erämaalodget' },
    { label: 'Aktiviteetit', hint: 'Husky · Revontulet · Moottorikelkka · Porot' },
    { label: 'Lennot', hint: 'Helsinki–Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Autovuokraus', hint: '4WD · Talvirenkaat · Lentokenttänouto' },
    { label: 'Matkapaketit', hint: 'Revontuliviikko · Perheloma · Viikonloppupakko' },
    { label: 'Kesä', hint: 'Yötön yö · Vaellus · Järvenrantamökit' },
  ],
  card: {
    livePrices: 'Kumppanin hinta',
    seeDeals: 'Katso tarjoukset',
    browse: 'Selaa',
    flags: {
      'last-minute': 'Viime hetki',
      'end-of-season': 'Kauden loppu',
      summer: 'Yötön yö',
      package: 'Monipäiväinen',
      'editor-pick': 'Toimituksen valinta',
    },
  },
  trust: [
    {
      title: 'Rehellinen kuratointi',
      body: 'Linkki vie suoraan kumppanille. Ei keksittyjä prosentteja eikä valeajastimia.',
    },
    {
      title: 'Suomessa kirjoitettu',
      body: 'Sisältö kirjoitetaan ja kuratoidaan Suomesta. Lähteet näkyvillä.',
    },
    {
      title: 'Osa #LaplandVibes-verkostoa',
      body: '23+ sisarsivustoa. Yksi ekosysteemi, yksi totuuden lähde.',
    },
  ],
  newsletter: {
    kicker: '#LaplandVibes-uutiskirje',
    titleItalic: 'Nappaa tarjoukset',
    titleRest: 'ennen kuin ne katoavat.',
    lead:
      'Last-minute-hintoja Lappiin, kauden loppumökkien pudotuksia ja yöttömän yön ikkunoita jotka muuten menisivät ohi.',
    benefits: [
      {
        title: 'Aidot kumppanihinnat',
        body: 'Hinnan näet kumppanilta kun klikkaat. Ei keksittyjä prosentteja.',
      },
      {
        title: 'Last-minute-pudotukset',
        body: 'Mökkiöitä lattiahinnan alle, hiihtoviikkojen täytöt, off-peak-huskyt.',
      },
      {
        title: 'Kesä & yötön yö',
        body: '32 vuorokauden ikkuna 6.6. alkaen, eri kausi, eri tarjoukset.',
      },
      {
        title: 'Viikoittainen kooste',
        body: 'Kooste, ei tulvaa. Peruutuslinkki jokaisessa lähetyksessä.',
      },
    ],
    placeholder: 'Sähköpostiosoitteesi',
    cta: 'Liity listalle',
    sending: 'Lähetetään…',
    okTitle: 'Olet listalla.',
    okBody: 'Tervetuloviesti on matkalla, vilkaise sähköpostiasi.',
    fineprint: 'Lähetämme vain silloin kun on jotain oikeasti kerrottavaa. Peruutus yhdellä klikkauksella. Emme jaa osoitettasi.',
    error: 'Tilaaminen ei onnistunut juuri nyt. Yritä hetken päästä uudelleen.',
  },
  hotelsPage: {
    eyebrow: 'Hotellit & mökit',
    h1Italic: 'Lapin hotellit',
    h1: 'vapaat huoneet tänä iltana.',
    sub:
      'Lasi-iglut revontulivyöhykkeellä, rinneläheiset kohteet Levillä, erämaalodget Ylläksellä, perhehotellit Rovaniemellä. Vertaile tämän illan hinnat Hotels.comissa.',
    seoTitle: 'Lapin hotellitarjoukset, lasi-iglut, rinne, mökit',
    seoDesc:
      'Hotels.comin sen hetkiset hinnat lasi-igluihin, ski-in-majoituksiin, perhehotelleihin ja erämaalodgeihin Suomen Lapissa. Last-minute- ja kauden loppumökkiöitä.',
    bottomTitle: 'Eikö kohdetta löytynyt?',
    bottomLead: 'Hae mitä tahansa Lapin kuntaa suoraan Hotels.comista.',
    bottomCta: 'Selaa kaikki Lapin hotellit →',
  },
  activitiesPage: {
    eyebrow: 'Aktiviteetit',
    h1Italic: 'Lapin aktiviteetit',
    h1: 'reaaliaikainen saatavuus.',
    sub:
      'Huskysafarit, revontulisafarit, moottorikelkkaretket, porotilavierailut, pilkkiminen. Live-saatavuus GetYourGuidessa, ei valeajastimia, ei keksittyjä prosentteja.',
    seoTitle: 'Lapin aktiviteettitarjoukset, husky, revontulet, kelkka',
    seoDesc:
      'GetYourGuiden sen hetkiset hinnat huskysafareihin, revontulisafareihin, moottorikelkkaretkiin, porotiloihin ja pilkkimiseen Suomen Lapissa. Last-minute-paikkoja.',
    bottomTitle: 'Selaa koko Lapin valikoima',
    bottomLead: '900+ retkeä, päiväreissua ja monipäiväistä seikkailua GetYourGuidessa.',
    bottomCta: 'Kaikki Lapin aktiviteetit →',
  },
  flightsPage: {
    eyebrow: 'Lennot',
    h1Italic: 'Lennot Lappiin',
    h1: 'Trip.comin halvimmat hinnat.',
    sub:
      'Helsinki jokaiselle Lapin lentokentälle, valmiiksi täytetty ja päivätty. Klikkaa avataksesi Finnairin ja Norwegianin todelliset hinnat.',
    seoTitle: 'Lennot Lappiin, Trip.comin live-tarjoukset Helsingistä',
    seoDesc:
      'Trip.comin hinnat suoraan: Helsinki–Rovaniemi, Kittilä, Ivalo, Kuusamo ja Kemi. Suorat Finnair- ja Norwegian-lennot, valmiiksi täytetty, valmiita varattaviksi.',
    bottomTitle: 'Matkustatko Suomen ulkopuolelta?',
    bottomLead: 'Hae mitä tahansa lähtöä mihin tahansa Lapin lentokenttään Trip.comissa.',
    bottomCta: 'Avaa Trip.comin lentohaku →',
  },
  carsPage: {
    eyebrow: 'Autovuokraus',
    h1Italic: 'Talvivalmiit autot',
    h1: 'kumppanin hinnat suoraan.',
    sub:
      'Talvirenkaat, 4WD, riittävä matka revontulijahtiin. Nouto jokaiselta Lapin lentokentältä, vertaile EconomyBookingsissa.',
    seoTitle: 'Lapin autovuokraustarjoukset, talvirenkaat, 4WD, nouto',
    seoDesc:
      'EconomyBookingsin sen hetkiset hinnat autovuokraukseen Rovaniemen, Kittilän, Ivalon ja Kuusamon lentokentiltä. Talvirenkaat sisältyvät.',
    bottomTitle: 'Helsingin nouto vai yksisuuntainen palautus?',
    bottomLead: 'EconomyBookings tukee yksisuuntaisia vuokrauksia useimpien Suomen lentokenttien välillä.',
    bottomCta: 'Avaa EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Matkapaketit',
    h1Italic: 'Rakenna oma',
    h1: 'Lapin reissusi.',
    sub:
      'Emme myy suljettuja paketteja. Kuratoimme palaset, lennot, majoitukset, huskypäivät, revontulisafarit, ja sinä varaat jokaisen kumppanin live-hinnalla. Ei välityspalkkiota.',
    seoTitle: 'Lapin matkapaketit, revontuliviikko, perheloma, viikonloppu',
    seoDesc:
      'Monipäiväisiä Lapin matkaideoita: revontuliviikko Saariselällä, perheloma Rovaniemellä, viikonloppukarkureissut. Jokainen varataan erikseen kumppanin hinnalla.',
    curatedTitle: 'Kuratoidut matkaideat',
    pairTitle: 'Yhdistä nämä majoitukseesi',
    pairLead: 'Palaset jotka useimmat matkailijat kasaavat 4–7 yön Lapin matkaan.',
  },
  summerPage: {
    eyebrow: 'Yötön yö · 6.6.–7.7.',
    h1Italic: 'Lapin kesä on',
    h1: 'salainen tarjous.',
    sub:
      '32 vuorokautta aurinko ei laske. Järvenrantamökit murto-osalla joulukuun hinnoista. Vaeltaminen parhaimmillaan elokuun lopussa, puhdas ilma, ei hyttysiä, ruskan kulta.',
    seoTitle: 'Lapin kesätarjoukset, yöttömän yön majoitukset & vaellus',
    seoDesc:
      '32 vuorokautta aurinko ei laske Suomen Lapissa (6.6.–7.7.). Yöttömän yön mökkialennukset, Pallas-Yllästunturin vaellukset, järvenrantakesä edullisesti.',
    offersTitle: 'Kesätarjoukset, kumppanin sen hetkiset hinnat',
    offersFallback: 'Kesätarjoukset kuratoinnissa, palaa pian.',
    reasonsTitle: 'Kolme rehellistä syytä miksi kesä on halvempi',
    reasons: [
      {
        title: 'Kysyntä putoaa toukokuussa',
        body: 'Revontulikausi päättyy, hiihtokeskukset sulkeutuvat. Helmikuussa loppuun varatut mökit ovat tyhjillään.',
      },
      {
        title: 'Lappi on auki sinulle',
        body: 'Samat tunturit, samat järvet, sama erämaa, ilman pakettimatkan välityspalkkiota.',
      },
      {
        title: 'Valoisaa ympäri vuorokauden',
        body: 'Vaellat keskiyöllä. Uit kahdelta yöllä. Saat pidemmän matkan päivää kohti.',
      },
    ],
    cta: 'Etsi kesäviikko →',
  },
  faq: {
    eyebrow: 'Hyvä tietää',
    title: 'Lapin tarjoukset, vastauksia kysymyksiisi.',
    lead: 'Rehellisiä vastauksia ajoituksesta, varausikkunoista ja siitä mitä odottaa. Ei keksittyjä hintoja, ei tekokiirettä.',
    items: [
      {
        q: 'Milloin on halvinta matkustaa Lappiin?',
        a: 'Kevätkesä ja kesä, suunnilleen toukokuusta elokuuhun, ovat hiljaisinta ja edullisinta aikaa. Revontulikausi on ohi ja hiihtokeskukset ovat kiinni, joten helmikuussa loppuunvaratut järvenrantamökit ovat tyhjillään. Talven sisällä välikausiviikot (maaliskuun puolivälistä huhtikuun puoliväliin) ovat halvempia kuin joulun ja helmikuun loman huiput, ja silti tarjolla on täysi lumi ja pidemmät valoisat päivät.',
      },
      {
        q: 'Kuinka paljon etukäteen Lapin matka kannattaa varata?',
        a: 'Se riippuu kaudesta. Joulu ja uusivuosi ovat tiukimmat: lasi-iglut ja Joulupukin Pajakylän perhehuoneet sulkeutuvat varauksilta usein jo elokuun lopulla. Revontulikausi (suunnilleen marraskuusta maaliskuuhun) on rauhallisempi, mutta suositut viikonloput täyttyvät aikaisin. Kevät, kesä ja syksy eivät yleensä vaadi kuukausien varoaikaa. Lennot Helsingistä ovat tyypillisesti edullisimmillaan muutama viikko etukäteen varattuna, pois lukien joulun, pääsiäisen ja helmikuun loman huiput.',
      },
      {
        q: 'Kannattaako Lapin last-minute-tarjouksia hyödyntää?',
        a: 'Usein kyllä, muutamaa ruuhka-aikaa lukuun ottamatta. Kun mökissä, husky-paikassa tai revontulisafarissa on myymätöntä tilaa lähellä päivämäärää, kumppanit vapauttavat sen live-hintaan, ja revontuli- ja husky-retket ottavat usein varauksia vielä noin 24 tuntia ennen lähtöä. Poikkeuksia ovat joulu, uusivuosi, pääsiäinen ja helmikuun koululoma, jolloin kysyntä on korkea eikä odottamisesta yleensä ole hyötyä.',
      },
      {
        q: 'Mitä tyypilliseen Lapin matkapakettiin kuuluu?',
        a: 'Se vaihtelee toimijoittain, joten lue aina mitä hintaan sisältyy. Yleinen kokonaisuus yhdistää muutaman yön majoituksen yhteen tai kahteen aktiviteettiin, husky-safariin, revontulisafariin tai moottorikelkkaretkeen, ja joskus mukana on lentokenttäkuljetukset. LaplandDealsissa emme myy suljettuja paketteja: kuratoimme palaset (lennot, majoitukset, aktiviteetit, autovuokraus), ja sinä varaat jokaisen kumppanin live-hintaan ilman välityspalkkiota.',
      },
      {
        q: 'Miten löydän aitoja Lapin alennuksia?',
        a: 'Vertaa kumppanin live-hintaa kohteen tai toimijan normaaliin hintaan sen sijaan että luottaisit otsikon prosenttilukuun. Matkusta väli- tai kesäkaudella, majoitu hieman vilkkaimpien keskusten ulkopuolelle ja varaa aktiviteetit suoraan luotettavilta alustoilta. Jokainen LaplandDealsin hinta linkkaa suoraan kumppanin sen hetkiseen hintaan, emme keksi prosentteja emmekä pyöritä valeajastimia.',
      },
    ],
  },
  related: {
    eyebrow: 'Minne seuraavaksi',
    title: 'Lisää #LaplandVibes-verkostosta.',
    lead: 'Sisarsivustoja jotka syventyvät yhteen Lapin matkan osa-alueeseen. Jokainen avautuu uuteen välilehteen.',
    links: [
      { anchor: 'hotellitarjoukset ja matkapaketit', blurb: 'Lasi-igluja, revontulisviittejä ja perhehotelleja eri puolilla Suomen Lappia.' },
      { anchor: 'aktiviteetti- ja safaritarjoukset', blurb: 'Husky-safarit, revontulisafarit, moottorikelkkaretket ja porotilat live-saatavuudella.' },
      { anchor: 'all inclusive -kiertomatkat', blurb: 'Monipäiväisiä opastettuja matkaohjelmia jotka yhdistävät majoitukset, kuljetukset ja aktiviteetit.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DEUTSCH, Siezen, Angebot/Rabatt/Last-Minute/Frühbucher/Sparen-Vokabular
// ─────────────────────────────────────────────────────────────────────────────
const de: SectionCopy = {
  nav: {
    hotels: 'Hotels',
    activities: 'Aktivitäten',
    flights: 'Flüge',
    cars: 'Mietwagen',
    packages: 'Pakete',
    summer: 'Sommer',
    tonightsCta: 'Angebote heute Abend',
  },
  hero: {
    eyebrow: 'Kuratiert · Jetzt Saison · Polarlichtsaison',
    h1Line1Italic: 'Lapplands günstigste',
    h1Line1Bold: '',
    h1Line2: 'Last-Minute-Deals.',
    lead:
      'Sorgfältig kuratierte Last-Minute-Angebote für Finnisch-Lappland, Nächte im Glas-Iglu unter dem Polarlicht, Husky-Safaris, Flüge nach Rovaniemi, Winter-Mietwagen mit Allrad. Live-Preise direkt vom Partner; wir erfinden keine Prozente.',
    primary: 'Hotels heute Abend',
    secondary: 'Polarlicht-Touren',
    eyebrowSummer: 'Kuratiert · Jetzt Saison · Mitternachtssonne',
    leadSummer:
      'Sorgfältig kuratierte Angebote für Finnisch-Lappland, Hütten unter der Mitternachtssonne, Wandern und SUP, Seekreuzfahrten, Flüge nach Rovaniemi, Sommer-Mietwagen. Live-Preise direkt vom Partner; wir erfinden keine Prozente.',
    secondarySummer: 'Mitternachtssonne',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Live-Partnerpreise',
    leadRest:
      ' · bei jedem Klick aktualisiert. Wir erfinden keine Prozente, der Partner zeigt den heutigen Preis.',
    cta: 'Hotels heute Abend →',
  },
  pulse: {
    eyebrow: 'Lage heute',
    titleItalic: 'Was',
    titleRest: 'in Lappland gerade passiert.',
    lead:
      'Konkrete Saisonfakten, keine erfundenen Countdowns. Wir aktualisieren diesen Block, sobald sich die Lage ändert.',
    items: [
      {
        when: 'Genau jetzt',
        title: 'Mitternachtssonne, die niedrigsten Preise des Jahres',
        body: 'Bis Ende Juli geht die Sonne kaum unter. Seenhütten liegen deutlich unter den Winterpreisen, und dieselben Fjelle, die im Februar ausgebucht waren, sind jetzt ruhig. Das preislich günstigste Fenster des Jahres.',
      },
      {
        when: 'Jetzt bis August',
        title: 'Wander- und Wassersaison',
        body: 'Pallas-Yllästunturi und die östlichen Fjelle sind trocken und offen. Lange Tage zum Wandern, für SUP und Seenbäder. Die Mücken lassen bis August nach; für Ende Juni ein Kopfnetz mitnehmen.',
      },
      {
        when: '5.–15. September',
        title: 'Ruska: die Herbstfärbung erreicht schnell ihren Höhepunkt',
        body: 'Die Zwergbirke färbt sich in rund drei Tagen golden. Hütten sind noch günstig und die Luft ist die sauberste in Europa (WMO). Mit den dunkler werdenden Nächten kehren auch die Polarlichter zurück.',
      },
      {
        when: 'Weihnachten 2026',
        title: 'Bereits in den Büchern',
        body: 'Glas-Iglus und Familienzimmer im Weihnachtsmanndorf schließen ihre Buchung meist Ende August. Heiligabend-Dinner und Rentierschlitten-Plätze sind in der Regel im Oktober vergeben.',
      },
      {
        when: 'Sparen bei Flügen',
        title: '4–8 Wochen Vorlauf ab Helsinki',
        body: 'Finnair- und Norwegian-Hin-und-Rückflüge HEL→Lappland fallen auf 89–129 €, wenn Sie 4–8 Wochen im Voraus buchen, außerhalb der Weihnachts-, Oster- und Februarspitzen.',
      },
      {
        when: 'Ab September',
        title: 'Die Polarlicht-Saison beginnt erneut',
        body: 'Das aktive Fenster reicht etwa von Mitte September bis Anfang April. Saariselkä, Inari und Utsjoki zeigen die höchsten Sichtquoten. Touren werden meist bis 24 h vorher storniert, sie lassen sich also leicht kurzfristig dazubuchen.',
      },
    ],
  },
  sections: {
    pickEyebrow: 'Redaktionsempfehlung',
    pickTitle: 'Leise kuratiert für die kommende Saison.',
    pickLead:
      'Orte, die Sie auch einem Freund empfehlen würden. Jede Karte führt zum heutigen Live-Preis des Partners.',
    pickCta: 'Alle Hotels',

    categoriesEyebrow: 'Nach Kategorie',
    categoriesTitle: 'Finden Sie Ihr Lappland-Angebot.',

    lastMinEyebrow: 'Last-Minute-Fenster',
    lastMinTitle: 'Reise in den nächsten zwei Wochen?',
    lastMinLead:
      'Hüttennächte, Husky-Slots und Polarlicht-Touren mit oft kurzfristiger Verfügbarkeit. Live-Verfügbarkeit des Partners, bei jedem Klick aktualisiert.',

    summerEyebrow: 'Mitternachtssonne · 6.6.–7.7.',
    summerTitle: 'Der Sommer in Lappland ist das Geheimangebot.',
    summerLead:
      '32 Tage geht die Sonne nicht unter. Seenhütten zum Bruchteil der Dezemberpreise. Wandern am besten Ende August, klare Luft, keine Mücken, Ruska-Gold.',
    summerCta: 'Sommer ansehen',

    everythingEyebrow: 'Alle Angebote',
    everythingTitle: 'Heutige Auswahl.',
  },
  tiles: [
    { label: 'Hotels & Hütten', hint: 'Glas-Iglus · Pistennah · Wildnis-Lodges' },
    { label: 'Aktivitäten', hint: 'Husky · Aurora · Schneemobil · Rentier' },
    { label: 'Flüge', hint: 'Helsinki–Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Mietwagen', hint: '4WD · Spikereifen · Abholung am Flughafen' },
    { label: 'Pakete', hint: 'Aurora-Woche · Familienauszeit · Wochenende' },
    { label: 'Sommer', hint: 'Mitternachtssonne · Wandern · Seenhütten' },
  ],
  card: {
    livePrices: 'Live-Preise',
    seeDeals: 'Angebote ansehen',
    browse: 'Ansehen',
    flags: {
      'last-minute': 'Last-Minute',
      'end-of-season': 'Saisonende',
      summer: 'Mitternachtssonne',
      package: 'Mehrtägig',
      'editor-pick': 'Empfehlung der Redaktion',
    },
  },
  trust: [
    {
      title: 'Ehrliche Kuratierung',
      body: 'Live-Partnerpreise. Niemals erfundene Prozente oder gefälschte Countdowns.',
    },
    {
      title: 'Aus Finnland geprüft',
      body: 'Inhalte aus Finnland kuratiert und verfasst. Quellen sichtbar.',
    },
    {
      title: 'Teil von #LaplandVibes',
      body: '23+ Schwesterseiten. Ein Ökosystem, eine Quelle der Wahrheit.',
    },
  ],
  newsletter: {
    kicker: 'Der #LaplandVibes-Newsletter',
    titleItalic: 'Sichern Sie sich die Angebote,',
    titleRest: 'bevor sie weg sind.',
    lead:
      'Last-Minute-Preise für Lappland, Saisonende-Rabatte auf Hütten und Mitternachtssonne-Fenster, die Sie sonst verpassen würden.',
    benefits: [
      {
        title: 'Echte Partnerpreise',
        body: 'Live-Raten werden beim Klick geladen. Keine erfundenen Prozente.',
      },
      {
        title: 'Last-Minute-Rabatte',
        body: 'Hüttennächte unter dem Sockelpreis, Skiwochen-Restplätze, Husky-Slots außerhalb der Spitze.',
      },
      {
        title: 'Sommer & Mitternachtssonne',
        body: 'Das 32-Tage-Fenster ab 6. Juni, andere Saison, andere Angebote.',
      },
      {
        title: 'Knappe Zusammenfassung',
        body: 'Eine Zusammenfassung, keine Flut. Abmeldung in jeder Sendung.',
      },
    ],
    placeholder: 'Ihre E-Mail-Adresse',
    cta: 'Angebote abonnieren',
    sending: 'Wird gesendet…',
    okTitle: 'Sie sind dabei.',
    okBody: 'Die Willkommens-E-Mail ist unterwegs, schauen Sie in Ihr Postfach.',
    fineprint: 'Wir senden nur, wenn es neue Angebote gibt. Abmeldung mit einem Klick. Wir geben Ihre Adresse nicht weiter.',
    error: 'Anmeldung gerade nicht möglich. Bitte versuchen Sie es in einem Moment erneut.',
  },
  hotelsPage: {
    eyebrow: 'Hotels & Hütten',
    h1Italic: 'Hotels in Lappland',
    h1: 'Live-Preise für heute Abend.',
    sub:
      'Glas-Iglus im Polarlichtgürtel, pistennahe Häuser in Levi, Wildnis-Lodges in Ylläs, Familienhotels in Rovaniemi. Vergleichen Sie die heutigen Raten auf Hotels.com.',
    seoTitle: 'Lappland Hotelangebote, Glas-Iglus, Pistennah, Hütten',
    seoDesc:
      'Hotels.com Live-Preise für Glas-Iglus, Ski-in-Unterkünfte, Familienhotels und Wildnis-Lodges in Finnisch-Lappland. Last-Minute- und Saisonende-Hütten.',
    bottomTitle: 'Ihr Reiseziel nicht dabei?',
    bottomLead: 'Suchen Sie jeden Ort in Lappland direkt auf Hotels.com.',
    bottomCta: 'Alle Hotels in Lappland ansehen →',
  },
  activitiesPage: {
    eyebrow: 'Aktivitäten',
    h1Italic: 'Aktivitäten in Lappland',
    h1: 'Verfügbarkeit in Echtzeit.',
    sub:
      'Husky-Safaris, Polarlichtjagd, Schneemobiltouren, Besuche auf Rentierfarmen, Eisfischen. Live-Verfügbarkeit auf GetYourGuide, keine falschen Timer, keine erfundenen Prozente.',
    seoTitle: 'Lappland Aktivitätsangebote, Husky, Polarlicht, Schneemobil',
    seoDesc:
      'GetYourGuide Live-Preise für Husky-Safaris, Polarlichtjagd, Schneemobiltouren, Rentierfarmen und Eisfischen in Finnisch-Lappland. Last-Minute-Slots.',
    bottomTitle: 'Vollständigen Lappland-Katalog ansehen',
    bottomLead: '900+ Touren, Tagesausflüge und mehrtägige Abenteuer auf GetYourGuide.',
    bottomCta: 'Alle Lappland-Aktivitäten →',
  },
  flightsPage: {
    eyebrow: 'Flüge',
    h1Italic: 'Flüge nach Lappland',
    h1: 'Live-Preise von Trip.com.',
    sub:
      'Helsinki zu jedem Flughafen in Lappland, vorausgefüllt und datiert. Klicken Sie sich zu den echten Finnair- und Norwegian-Tarifen.',
    seoTitle: 'Flüge nach Lappland, Live-Angebote von Trip.com ab Helsinki',
    seoDesc:
      'Live-Flugpreise von Trip.com: Helsinki nach Rovaniemi, Kittilä, Ivalo, Kuusamo und Kemi. Direktflüge mit Finnair und Norwegian, vorausgefüllt und buchbar.',
    bottomTitle: 'Sie reisen von außerhalb Finnlands an?',
    bottomLead: 'Suchen Sie jeden Abflug zu jedem Lappland-Flughafen auf Trip.com.',
    bottomCta: 'Trip.com Flugsuche öffnen →',
  },
  carsPage: {
    eyebrow: 'Mietwagen',
    h1Italic: 'Winterfeste Mietwagen',
    h1: 'Live-Partnerpreise.',
    sub:
      'Spikereifen, 4WD, ausreichende Reichweite für die Polarlichtjagd. Abholung an jedem Lappland-Flughafen, vergleichen Sie auf EconomyBookings.',
    seoTitle: 'Lappland Mietwagen, Spikereifen, 4WD, Flughafenabholung',
    seoDesc:
      'EconomyBookings Live-Preise für Mietwagen an den Flughäfen Rovaniemi, Kittilä, Ivalo und Kuusamo. Spikereifen für die Winterfahrt inklusive.',
    bottomTitle: 'Abholung in Helsinki oder Einwegmiete?',
    bottomLead: 'EconomyBookings unterstützt Einwegmieten zwischen den meisten finnischen Flughäfen.',
    bottomCta: 'EconomyBookings öffnen →',
  },
  packagesPage: {
    eyebrow: 'Pakete',
    h1Italic: 'Bauen Sie Ihre eigene',
    h1: 'Lappland-Reise.',
    sub:
      'Wir verkaufen keine versiegelten Pakete. Wir kuratieren die Bausteine, Flüge, Unterkünfte, Husky-Tage, Polarlichtjagd, und Sie buchen jeden zum Live-Tarif des Partners. Keine Vermittlungsgebühr.',
    seoTitle: 'Lappland Pauschalangebote, Aurora, Familie, Wochenende',
    seoDesc:
      'Mehrtägige Lappland-Reiseideen: Aurora-Woche in Saariselkä, Familienauszeit in Rovaniemi, Wochenend-Trips. Jeder Baustein einzeln zum Partner-Live-Tarif.',
    curatedTitle: 'Kuratierte Reiseideen',
    pairTitle: 'Mit Ihrer Unterkunft kombinieren',
    pairLead: 'Die Bausteine, die die meisten Reisenden zu einer 4–7-Nächte-Lapplandreise stapeln.',
  },
  summerPage: {
    eyebrow: 'Mitternachtssonne · 6. Juni – 7. Juli',
    h1Italic: 'Der Sommer in Lappland',
    h1: 'ist das Geheimangebot.',
    sub:
      '32 Tage geht die Sonne nicht unter. Seenhütten zum Bruchteil der Dezemberpreise. Wandern am besten Ende August, klare Luft, keine Mücken, Ruska-Gold.',
    seoTitle: 'Lappland Sommerangebote, Mitternachtssonne & Wandern',
    seoDesc:
      '32 Tage geht die Sonne nicht unter in Finnisch-Lappland (6.6.–7.7.). Hütten unter Mitternachtssonne, Wandern im Pallas-Yllästunturi, Sommer am See.',
    offersTitle: 'Sommerangebote, Live-Partnerpreise',
    offersFallback: 'Sommerangebote werden kuratiert, schauen Sie bald wieder vorbei.',
    reasonsTitle: 'Drei ehrliche Gründe, warum der Sommer günstiger ist',
    reasons: [
      {
        title: 'Die Nachfrage fällt im Mai',
        body: 'Die Polarlicht-Saison endet, Skigebiete schließen. Hütten, die im Februar voll waren, haben leere Wochen.',
      },
      {
        title: 'Lappland steht Ihnen offen',
        body: 'Dieselben Fjelle, dieselben Seen, dieselbe Wildnis, ohne den Pauschalreise-Aufschlag.',
      },
      {
        title: 'Endloses Tageslicht',
        body: 'Sie wandern um Mitternacht. Sie schwimmen um 2 Uhr morgens. Mehr Tag pro Reisetag.',
      },
    ],
    cta: 'Sommerwoche finden →',
  },
  faq: {
    eyebrow: 'Gut zu wissen',
    title: 'Lappland-Angebote, Ihre Fragen, beantwortet.',
    lead: 'Ehrliche Antworten zu Reisezeit, Buchungsfenstern und dem, was Sie erwartet. Keine erfundenen Preise, keine vorgetäuschte Dringlichkeit.',
    items: [
      {
        q: 'Wann ist die günstigste Reisezeit für Lappland?',
        a: 'Spätfrühling und Sommer, etwa von Mai bis August, sind am ruhigsten und am günstigsten. Die Aurora-Saison ist vorbei und die Skigebiete sind geschlossen, sodass Seehütten, die im Februar ausgebucht waren, nun leer stehen. Innerhalb des Winters sind die Nebensaison-Wochen (Mitte März bis Mitte April) günstiger als die Hochsaison zu Weihnachten und in den Februarferien, bei vollem Schnee und längeren Tagen.',
      },
      {
        q: 'Wie weit im Voraus sollte ich eine Lappland-Reise buchen?',
        a: 'Das hängt von der Saison ab. Weihnachten und Neujahr sind am knappsten: Glas-Iglus und Familienzimmer im Weihnachtsmanndorf sind oft schon Ende August ausgebucht. Die Aurora-Saison (etwa November bis März) ist entspannter, beliebte Wochenenden füllen sich jedoch früh. Frühling, Sommer und Herbst erfordern selten einen Vorlauf von Monaten. Flüge ab Helsinki sind in der Regel am günstigsten, wenn Sie einige Wochen im Voraus buchen, außerhalb der Hochsaison zu Weihnachten, Ostern und in den Februarferien.',
      },
      {
        q: 'Lohnen sich Last-Minute-Angebote für Lappland?',
        a: 'Oft ja, außerhalb der wenigen Hochsaison-Fenster. Wenn eine Hütte, ein Husky-Platz oder eine Aurora-Tour kurz vor dem Termin noch frei ist, geben die Partner sie zum Live-Preis frei, und Aurora- und Husky-Touren nehmen häufig noch bis etwa 24 Stunden vorher Buchungen an. Die Ausnahmen sind Weihnachten, Neujahr, Ostern (Pääsiäinen) und die Februarferien, wenn die Nachfrage hoch ist und Warten selten hilft.',
      },
      {
        q: 'Was ist in einem typischen Lappland-Paket enthalten?',
        a: 'Das variiert je nach Anbieter, lesen Sie daher stets die enthaltenen Leistungen. Ein gängiges Paket verbindet einige Übernachtungen mit ein bis zwei Aktivitäten, einer Husky-Safari, einer Aurora-Tour oder einer Schneemobiltour, und manchmal Flughafentransfers. Bei LaplandDeals verkaufen wir keine festen Pakete: Wir kuratieren die Bausteine (Flüge, Unterkünfte, Aktivitäten, Mietwagen), und Sie buchen jeden einzeln zum Live-Preis des Partners, ohne Vermittlungsgebühr.',
      },
      {
        q: 'Wie finde ich echte Rabatte für Lappland?',
        a: 'Vergleichen Sie den Live-Partnerpreis mit dem regulären Preis der Unterkunft oder des Anbieters, statt einer angekündigten Prozentzahl zu vertrauen. Reisen Sie in der Neben- oder Sommersaison, übernachten Sie etwas außerhalb der belebtesten Orte und buchen Sie Aktivitäten direkt über vertrauenswürdige Plattformen. Jeder Preis bei LaplandDeals verlinkt direkt zum aktuellen Tarif des Partners, wir erfinden keine Prozente und schalten keine gefälschten Countdowns.',
      },
    ],
  },
  related: {
    eyebrow: 'Wohin als Nächstes',
    title: 'Mehr aus dem #LaplandVibes-Netzwerk.',
    lead: 'Schwestersites, die einen Bereich Ihrer Lappland-Reise vertiefen. Jede öffnet sich in einem neuen Tab.',
    links: [
      { anchor: 'Hotelangebote & Pakete', blurb: 'Glas-Iglus, Nordlicht-Suiten und Familienresorts in ganz Finnisch-Lappland.' },
      { anchor: 'Angebote für Aktivitäten & Safaris', blurb: 'Husky-Safaris, Aurora-Touren, Schneemobiltouren und Rentierfarmen mit Live-Verfügbarkeit.' },
      { anchor: 'All-inclusive-Rundreisen', blurb: 'Mehrtägige geführte Reiserouten, die Unterkünfte, Transfers und Aktivitäten verbinden.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ESPAÑOL (tratamiento de usted)
// ─────────────────────────────────────────────────────────────────────────────
const es: SectionCopy = {
  nav: {
    hotels: 'Hoteles',
    activities: 'Actividades',
    flights: 'Vuelos',
    cars: 'Coches',
    packages: 'Paquetes',
    summer: 'Verano',
    tonightsCta: 'Ofertas de esta noche',
  },
  hero: {
    eyebrow: 'Seleccionado · En temporada · Temporada de auroras',
    h1Line1Italic: 'Las ofertas last minute',
    h1Line1Bold: '',
    h1Line2: 'más baratas de Laponia.',
    lead:
      'Ofertas de última hora cuidadosamente seleccionadas en la Laponia finlandesa, noches en iglús de cristal bajo la aurora, safaris en husky, vuelos a Rovaniemi, alquiler de coches 4x4 de invierno. Precios reales de los socios; nunca inventamos porcentajes.',
    primary: 'Hoteles de esta noche',
    secondary: 'Tours de auroras',
    eyebrowSummer: 'Seleccionado · En temporada · Sol de medianoche',
    leadSummer:
      'Ofertas cuidadosamente seleccionadas en la Laponia finlandesa, cabañas bajo el sol de medianoche, senderismo y SUP, cruceros por los lagos, vuelos a Rovaniemi, alquiler de coches de verano. Precios reales de los socios; nunca inventamos porcentajes.',
    secondarySummer: 'Sol de medianoche',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Precios reales de los socios',
    leadRest:
      ' · actualizados con cada clic. Nunca inventamos porcentajes, los socios muestran la tarifa real de hoy.',
    cta: 'Hoteles de esta noche →',
  },
  pulse: {
    eyebrow: 'El pulso de hoy',
    titleItalic: 'Qué',
    titleRest: 'está pasando en Laponia ahora mismo.',
    lead:
      'Hechos estacionales concretos, no cuentas atrás inventadas. Lo actualizamos cuando la situación cambia.',
    items: [
      {
        when: 'Ahora mismo',
        title: 'Sol de medianoche, las tarifas más bajas del año',
        body: 'Hasta julio el sol apenas se pone. Las cabañas junto al lago salen muy por debajo de los precios de invierno, y los mismos fjells que se agotaron en febrero están tranquilos. La mejor ventana de calidad-precio del año.',
      },
      {
        when: 'De ahora a agosto',
        title: 'Temporada de senderismo y agua',
        body: 'Pallas-Yllästunturi y los fjells del este están secos y abiertos. Días largos para caminar, hacer SUP y bañarse en los lagos. Los mosquitos aflojan a lo largo de agosto; lleve una red para la cabeza a finales de junio.',
      },
      {
        when: '5-15 sep',
        title: 'Ruska: el color del otoño llega a su punto rápido',
        body: 'El abedul enano se vuelve dorado en unos tres días. Las cabañas siguen siendo asequibles y el aire es el más limpio de Europa (OMM). Las auroras boreales también regresan a medida que las noches se oscurecen.',
      },
      {
        when: 'Navidad 2026',
        title: 'Ya se está llenando',
        body: 'Los iglús de cristal y las habitaciones familiares de Santa Claus Village suelen cerrar reservas a finales de agosto. Las cenas de Nochebuena y las plazas de trineo de renos tienden a agotarse en octubre.',
      },
      {
        when: 'Mejor momento para tarifas',
        title: '4-8 semanas antes desde Helsinki',
        body: 'Los vuelos de ida y vuelta de Finnair y Norwegian HEL→Laponia caen al rango de 89-129 € cuando se reservan con 4-8 semanas de antelación, fuera de las puntas de Navidad, Semana Santa y febrero.',
      },
      {
        when: 'Desde septiembre',
        title: 'Vuelve la temporada de auroras',
        body: 'La ventana activa va aproximadamente de mediados de septiembre a principios de abril. Saariselkä, Inari y Utsjoki tienen las tasas más altas de auroras visibles. Las cazas suelen cancelarse hasta 24 h antes, así que es fácil añadirlas a última hora.',
      },
    ],
  },
  sections: {
    pickEyebrow: 'Selección editorial',
    pickTitle: 'Cuidadosamente seleccionado para la temporada que viene.',
    pickLead:
      'Lugares que merecen una recomendación a un amigo. Cada tarjeta enlaza con el precio real de hoy del socio.',
    pickCta: 'Todos los hoteles',

    categoriesEyebrow: 'Explorar por categoría',
    categoriesTitle: 'Encuentre su tipo de oferta de Laponia.',

    lastMinEyebrow: 'Ventana de última hora',
    lastMinTitle: '¿Viaja en las próximas dos semanas?',
    lastMinLead:
      'Noches de cabaña, plazas de husky y cazas de auroras que suelen tener huecos de última hora. Disponibilidad real del socio, actualizada con cada clic.',

    summerEyebrow: 'Sol de medianoche · 6 jun – 7 jul',
    summerTitle: 'El verano en Laponia es la oferta secreta.',
    summerLead:
      '32 días sin que el sol se ponga. Cabañas junto al lago a una fracción de las tarifas de diciembre. El senderismo llega al pico a finales de agosto, aire limpio, sin mosquitos, oro de ruska.',
    summerCta: 'Explorar verano',

    everythingEyebrow: 'Todo',
    everythingTitle: 'El catálogo de hoy.',
  },
  tiles: [
    { label: 'Hoteles y cabañas', hint: 'Iglús de cristal · Pistas de esquí · Lodges salvajes' },
    { label: 'Actividades', hint: 'Husky · Auroras · Motonieve · Renos' },
    { label: 'Vuelos', hint: 'Helsinki a Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Alquiler de coches', hint: '4x4 · Neumáticos con clavos · Recogida en aeropuerto' },
    { label: 'Paquetes', hint: 'Semana de auroras · Escapadas familiares · Fines de semana' },
    { label: 'Verano', hint: 'Sol de medianoche · Senderismo · Cabañas junto al lago' },
  ],
  card: {
    livePrices: 'Precios en directo',
    seeDeals: 'Ver ofertas',
    browse: 'Explorar',
    flags: {
      'last-minute': 'Última hora',
      'end-of-season': 'Fin de temporada',
      summer: 'Sol de medianoche',
      package: 'Varios días',
      'editor-pick': 'Selección del editor',
    },
  },
  trust: [
    {
      title: 'Selección honesta',
      body: 'Precios reales del socio. Nunca porcentajes inventados ni cuentas atrás falsas.',
    },
    {
      title: 'Revisado por locales',
      body: 'Curado por personas que viajan y escriben desde la Laponia finlandesa.',
    },
    {
      title: 'Parte de #LaplandVibes',
      body: 'Más de 23 sitios hermanos. Un ecosistema, una sola fuente de verdad.',
    },
  ],
  newsletter: {
    kicker: 'El boletín de #LaplandVibes',
    titleItalic: 'Atrape las ofertas',
    titleRest: 'antes de que desaparezcan.',
    lead:
      'Precios de última hora de Laponia, descensos de fin de temporada en cabañas y ventanas de sol de medianoche que de otro modo se perdería.',
    benefits: [
      {
        title: 'Precios reales de los socios',
        body: 'Tarifas en directo al hacer clic. Sin porcentajes inventados.',
      },
      {
        title: 'Descensos de última hora',
        body: 'Noches de cabaña bajo mínimos, semanas de esquí con huecos, plazas de husky fuera de temporada.',
      },
      {
        title: 'Verano y sol de medianoche',
        body: 'La ventana de 32 días desde el 6 de junio, otra estación, otras ofertas.',
      },
      {
        title: 'Solo cuando importa',
        body: 'Un resumen, no un torrente. Enlace de baja en cada envío.',
      },
    ],
    placeholder: 'Su dirección de correo',
    cta: 'Recibir las ofertas',
    sending: 'Enviando…',
    okTitle: 'Está en la lista.',
    okBody: 'El correo de bienvenida está en camino, revise su bandeja de entrada.',
    fineprint: 'Solo cuando hay algo que merece la pena. Baja en un clic. Nunca compartimos su dirección.',
    error: 'No se ha podido suscribir ahora mismo. Inténtelo de nuevo en un momento.',
  },
  hotelsPage: {
    eyebrow: 'Hoteles y cabañas',
    h1Italic: 'Hoteles de Laponia',
    h1: 'precios reales, esta noche.',
    sub:
      'Iglús de cristal bajo el cinturón de auroras, alojamientos junto a las pistas en Levi, lodges salvajes en Ylläs, hoteles familiares en Rovaniemi. Compare las tarifas de esta noche en Hotels.com.',
    seoTitle: 'Ofertas de hoteles en Laponia, Iglús de cristal y cabañas',
    seoDesc:
      'Precios en directo de Hotels.com para iglús de cristal, alojamientos ski-in, hoteles familiares y lodges salvajes en la Laponia finlandesa.',
    bottomTitle: '¿No ve su destino?',
    bottomLead: 'Busque cualquier pueblo de Laponia directamente en Hotels.com.',
    bottomCta: 'Ver todos los hoteles de Laponia →',
  },
  activitiesPage: {
    eyebrow: 'Actividades',
    h1Italic: 'Actividades en Laponia',
    h1: 'disponibilidad en tiempo real.',
    sub:
      'Safaris en husky, cacerías de auroras, expediciones en motonieve, visitas a granjas de renos, pesca en hielo. Disponibilidad real en GetYourGuide, sin temporizadores falsos, sin porcentajes inventados.',
    seoTitle: 'Ofertas de actividades en Laponia, Husky, auroras y más',
    seoDesc:
      'Precios en directo de GetYourGuide en safaris en husky, cacerías de auroras, tours en motonieve, granjas de renos y pesca en hielo en la Laponia finlandesa.',
    bottomTitle: 'Explore el catálogo completo de Laponia',
    bottomLead: 'Más de 900 tours, excursiones de un día y aventuras de varios días en GetYourGuide.',
    bottomCta: 'Todas las actividades de Laponia →',
  },
  flightsPage: {
    eyebrow: 'Vuelos',
    h1Italic: 'Vuelos a Laponia',
    h1: 'tarifas reales de Trip.com.',
    sub:
      'De Helsinki a cada puerta de entrada a Laponia, con datos prellenados. Pulse para ver tarifas reales de Finnair y Norwegian.',
    seoTitle: 'Vuelos a Laponia, Ofertas de Trip.com desde Helsinki',
    seoDesc:
      'Precios reales de vuelos en Trip.com: Helsinki a Rovaniemi, Kittilä, Ivalo, Kuusamo y Kemi. Tarifas directas de Finnair y Norwegian.',
    bottomTitle: '¿Viaja desde fuera de Finlandia?',
    bottomLead: 'Busque cualquier origen a cualquier aeropuerto de Laponia en Trip.com.',
    bottomCta: 'Abrir la búsqueda de vuelos en Trip.com →',
  },
  carsPage: {
    eyebrow: 'Alquiler de coches',
    h1Italic: 'Coches listos para el invierno',
    h1: 'precios reales del socio.',
    sub:
      'Neumáticos con clavos, 4x4, autonomía libre para perseguir auroras. Recogida en todos los aeropuertos de Laponia, compare en EconomyBookings.',
    seoTitle: 'Alquiler de coches en Laponia, Neumáticos con clavos, 4x4',
    seoDesc:
      'Precios en directo de EconomyBookings para alquiler de coches en los aeropuertos de Rovaniemi, Kittilä, Ivalo y Kuusamo. Neumáticos con clavos incluidos.',
    bottomTitle: '¿Recogida en Helsinki o devolución en otro lugar?',
    bottomLead: 'EconomyBookings admite alquileres de una sola dirección entre la mayoría de aeropuertos finlandeses.',
    bottomCta: 'Abrir EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Paquetes',
    h1Italic: 'Construya su propio',
    h1: 'viaje a Laponia.',
    sub:
      'No vendemos paquetes cerrados. Curamos los bloques, vuelos, alojamientos, días de husky, cacerías de auroras, y usted reserva cada uno a la tarifa real del socio. Sin comisión de intermediario.',
    seoTitle: 'Paquetes en Laponia, Semana de auroras y escapadas',
    seoDesc:
      'Ideas de viaje de varios días a Laponia: semana de auroras en Saariselkä, escapadas familiares en Rovaniemi y de fin de semana. Cada parte por separado.',
    curatedTitle: 'Ideas de viaje seleccionadas',
    pairTitle: 'Combine esto con su estancia',
    pairLead: 'Los bloques que la mayoría de los viajeros añaden a un viaje de 4-7 noches por Laponia.',
  },
  summerPage: {
    eyebrow: 'Sol de medianoche · 6 jun – 7 jul',
    h1Italic: 'El verano en Laponia',
    h1: 'es la oferta secreta.',
    sub:
      '32 días sin que el sol se ponga. Cabañas junto al lago a una fracción de las tarifas de diciembre. El senderismo llega al pico a finales de agosto, aire limpio, sin mosquitos, oro de ruska.',
    seoTitle: 'Ofertas de verano en Laponia, Sol de medianoche',
    seoDesc:
      '32 días sin que el sol se ponga en la Laponia finlandesa (6 jun – 7 jul). Cabañas con sol de medianoche, senderismo en Pallas-Yllästunturi y estancias al lago.',
    offersTitle: 'Ofertas de verano, precios reales del socio',
    offersFallback: 'Las ofertas de verano están en preparación, vuelva pronto.',
    reasonsTitle: 'Tres razones honestas por las que el verano es más barato',
    reasons: [
      {
        title: 'La demanda baja en mayo',
        body: 'La temporada de auroras termina, las estaciones de esquí cierran. Las cabañas que en febrero estaban llenas tienen semanas libres.',
      },
      {
        title: 'Laponia está abierta de par en par',
        body: 'Los mismos montes, los mismos lagos, la misma naturaleza, sin el recargo del paquete turístico.',
      },
      {
        title: 'La luz del día no acaba',
        body: 'Camina a medianoche. Nada a las 2 de la madrugada. Tiene más día por día.',
      },
    ],
    cta: 'Encontrar una semana de verano →',
  },
  faq: {
    eyebrow: 'Conviene saber',
    title: 'Ofertas de Laponia, tus preguntas, respondidas.',
    lead: 'Respuestas honestas sobre cuándo viajar, cuándo reservar y qué esperar. Sin precios inventados ni urgencia fingida.',
    items: [
      {
        q: '¿Cuándo es más barato viajar a Laponia?',
        a: 'El final de la primavera y el verano, aproximadamente de mayo a agosto, son la época más tranquila y económica. La temporada de auroras ha terminado y las estaciones de esquí han cerrado, así que las cabañas junto al lago que se agotaban en febrero quedan vacías. Dentro del invierno, las semanas de temporada media (de mediados de marzo a mediados de abril) son más baratas que los picos de Navidad y de las vacaciones de febrero, con nieve abundante y más horas de luz.',
      },
      {
        q: '¿Con cuánta antelación conviene reservar un viaje a Laponia?',
        a: 'Depende de la temporada. Navidad y Año Nuevo son lo más ajustado: los iglús de cristal y las habitaciones familiares de la Aldea de Papá Noel suelen agotarse a finales de agosto. La temporada de auroras (de noviembre a marzo aproximadamente) es más tranquila, pero los fines de semana populares se llenan pronto. Primavera, verano y otoño rara vez requieren meses de antelación. Los vuelos desde Helsinki suelen salir más baratos reservando con algunas semanas de margen, fuera de los picos de Navidad, Semana Santa y las vacaciones de febrero.',
      },
      {
        q: '¿Merecen la pena las ofertas de última hora en Laponia?',
        a: 'A menudo sí, fuera de los pocos periodos de máxima demanda. Cuando una cabaña, una plaza de husky o una caza de auroras tiene espacio sin vender cerca de la fecha, los socios lo liberan al precio en tiempo real, y las excursiones de auroras y de huskies suelen admitir reservas hasta unas 24 horas antes. Las excepciones son Navidad, Año Nuevo, Semana Santa (Pääsiäinen) y las vacaciones escolares de febrero, cuando la demanda es alta y esperar rara vez ayuda.',
      },
      {
        q: '¿Qué incluye un paquete típico de Laponia?',
        a: 'Varía según el operador, así que lee siempre lo que incluye. Un paquete habitual combina algunas noches de alojamiento con una o dos actividades, un safari en husky, una caza de auroras o una excursión en moto de nieve, y a veces traslados al aeropuerto. En LaplandDeals no vendemos paquetes cerrados: seleccionamos las piezas (vuelos, alojamientos, actividades, alquiler de coche) y tú reservas cada una al precio en tiempo real del socio, sin comisión de intermediario.',
      },
      {
        q: '¿Cómo encontrar descuentos auténticos en Laponia?',
        a: 'Compara el precio en tiempo real del socio con la tarifa habitual del alojamiento o el operador, en lugar de fiarte de un porcentaje llamativo. Viaja en temporada media o en verano, alójate algo apartado de los centros más concurridos y reserva las actividades directamente en plataformas de confianza. Cada precio en LaplandDeals enlaza directamente con la tarifa actual del socio: nunca inventamos porcentajes ni mostramos cuentas atrás falsas.',
      },
    ],
  },
  related: {
    eyebrow: 'Adónde ir después',
    title: 'Más de la red #LaplandVibes.',
    lead: 'Sitios hermanos que profundizan en un aspecto del viaje a Laponia. Cada uno se abre en una pestaña nueva.',
    links: [
      { anchor: 'ofertas de hoteles y paquetes', blurb: 'Iglús de cristal, suites con auroras boreales y resorts familiares por toda la Laponia finlandesa.' },
      { anchor: 'ofertas en actividades y safaris', blurb: 'Safaris en husky, cazas de auroras, excursiones en moto de nieve y granjas de renos con disponibilidad en tiempo real.' },
      { anchor: 'circuitos todo incluido', blurb: 'Itinerarios guiados de varios días que combinan alojamientos, traslados y actividades.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PORTUGUÊS BRASILEIRO (tratamento "você")
// ─────────────────────────────────────────────────────────────────────────────
const ptBR: SectionCopy = {
  nav: {
    hotels: 'Hotéis',
    activities: 'Atividades',
    flights: 'Voos',
    cars: 'Carros',
    packages: 'Pacotes',
    summer: 'Verão',
    tonightsCta: 'Ofertas para hoje à noite',
  },
  hero: {
    eyebrow: 'Selecionado · Na temporada · Temporada de auroras',
    h1Line1Italic: 'As ofertas de última hora',
    h1Line1Bold: '',
    h1Line2: 'mais baratas da Lapônia.',
    lead:
      'Ofertas de última hora cuidadosamente selecionadas na Lapônia finlandesa, noites em iglus de vidro sob a aurora, safáris com huskies, voos para Rovaniemi, aluguel de carros 4x4 para inverno. Preços reais dos parceiros; a gente nunca inventa porcentagens.',
    primary: 'Hotéis para hoje à noite',
    secondary: 'Passeios de aurora',
    eyebrowSummer: 'Selecionado · Na temporada · Sol da meia-noite',
    leadSummer:
      'Ofertas cuidadosamente selecionadas na Lapônia finlandesa, cabanas sob o sol da meia-noite, trilhas e SUP, cruzeiros pelos lagos, voos para Rovaniemi, aluguel de carros para o verão. Preços reais dos parceiros; a gente nunca inventa porcentagens.',
    secondarySummer: 'Sol da meia-noite',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Preços reais dos parceiros',
    leadRest:
      ' · atualizados a cada clique. Nunca inventamos porcentagens, os parceiros mostram a tarifa de hoje.',
    cta: 'Hotéis para hoje à noite →',
  },
  pulse: {
    eyebrow: 'O pulso de hoje',
    titleItalic: 'O que',
    titleRest: 'está acontecendo na Lapônia agora.',
    lead:
      'Fatos sazonais concretos, não contagens regressivas inventadas. Atualizamos sempre que a situação muda.',
    items: [
      {
        when: 'Agora',
        title: 'Sol da meia-noite, as tarifas mais baixas do ano',
        body: 'Até julho o sol quase não se põe. As cabanas à beira do lago saem bem abaixo dos preços de inverno, e as mesmas montanhas que esgotaram em fevereiro ficam tranquilas. A melhor janela de custo-benefício do ano.',
      },
      {
        when: 'De agora até agosto',
        title: 'Temporada de trilhas e água',
        body: 'Pallas-Yllästunturi e as montanhas do leste estão secas e abertas. Dias longos para caminhar, fazer SUP e nadar nos lagos. Os mosquitos diminuem ao longo de agosto; leve uma rede de cabeça no fim de junho.',
      },
      {
        when: '5-15 set',
        title: 'Ruska: o pico das cores de outono chega rápido',
        body: 'A bétula-anã fica dourada em cerca de três dias. As cabanas ainda estão acessíveis e o ar é o mais limpo da Europa (OMM). A aurora boreal também volta à medida que as noites escurecem.',
      },
      {
        when: 'Natal de 2026',
        title: 'Já está enchendo',
        body: 'Iglus de vidro e quartos familiares na Vila do Papai Noel costumam fechar reservas no fim de agosto. Jantares de Véspera de Natal e horários de trenó com renas geralmente acabam até outubro.',
      },
      {
        when: 'Melhor janela para tarifas',
        title: '4-8 semanas antes a partir de Helsinki',
        body: 'Voos ida e volta Finnair e Norwegian HEL→Lapônia caem na faixa de €89-129 quando reservados com 4-8 semanas de antecedência, fora dos picos de Natal, Páscoa e fevereiro.',
      },
      {
        when: 'A partir de setembro',
        title: 'A temporada de aurora recomeça',
        body: 'A janela ativa vai mais ou menos de meados de setembro ao início de abril. Saariselkä, Inari e Utsjoki têm as maiores taxas de aurora visível. As caças costumam ser canceladas até 24h antes, então é fácil adicionar de última hora.',
      },
    ],
  },
  sections: {
    pickEyebrow: 'Escolhas da redação',
    pickTitle: 'Selecionado com cuidado para a próxima temporada.',
    pickLead:
      'Lugares que valem a recomendação para um amigo. Cada cartão leva ao preço real do parceiro de hoje.',
    pickCta: 'Todos os hotéis',

    categoriesEyebrow: 'Navegar por categoria',
    categoriesTitle: 'Encontre o seu tipo de oferta da Lapônia.',

    lastMinEyebrow: 'Janela de última hora',
    lastMinTitle: 'Vai viajar nas próximas duas semanas?',
    lastMinLead:
      'Noites em cabanas, vagas de husky e caça à aurora que costumam ter horários de última hora. Disponibilidade real do parceiro, atualizada a cada clique.',

    summerEyebrow: 'Sol da meia-noite · 6 jun – 7 jul',
    summerTitle: 'Verão na Lapônia é a oferta secreta.',
    summerLead:
      '32 dias em que o sol não se põe. Cabanas à beira do lago por uma fração das tarifas de dezembro. Pico de caminhada no fim de agosto, ar limpo, sem mosquitos, ouro do ruska.',
    summerCta: 'Ver verão',

    everythingEyebrow: 'Tudo',
    everythingTitle: 'O catálogo de hoje.',
  },
  tiles: [
    { label: 'Hotéis e cabanas', hint: 'Iglus de vidro · Pé na pista · Lodges selvagens' },
    { label: 'Atividades', hint: 'Husky · Aurora · Snowmobile · Renas' },
    { label: 'Voos', hint: 'Helsinki para Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Aluguel de carro', hint: '4x4 · Pneus com pinos · Retirada no aeroporto' },
    { label: 'Pacotes', hint: 'Semana de aurora · Viagens em família · Fim de semana' },
    { label: 'Verão', hint: 'Sol da meia-noite · Caminhadas · Cabanas à beira do lago' },
  ],
  card: {
    livePrices: 'Preços ao vivo',
    seeDeals: 'Ver ofertas',
    browse: 'Explorar',
    flags: {
      'last-minute': 'Última hora',
      'end-of-season': 'Fim de temporada',
      summer: 'Sol da meia-noite',
      package: 'Vários dias',
      'editor-pick': 'Escolha do editor',
    },
  },
  trust: [
    {
      title: 'Curadoria honesta',
      body: 'Preços reais dos parceiros. Nunca porcentagens inventadas nem contagens regressivas falsas.',
    },
    {
      title: 'Revisado por moradores locais',
      body: 'Selecionado por quem viaja e escreve a partir da Lapônia finlandesa.',
    },
    {
      title: 'Parte do #LaplandVibes',
      body: 'Mais de 23 sites parceiros. Um ecossistema, uma única fonte da verdade.',
    },
  ],
  newsletter: {
    kicker: 'O boletim do #LaplandVibes',
    titleItalic: 'Pegue as ofertas',
    titleRest: 'antes que elas saiam.',
    lead:
      'Preços de última hora da Lapônia, descontos de fim de temporada em cabanas e janelas de sol da meia-noite que você perderia de outra forma.',
    benefits: [
      {
        title: 'Preços reais dos parceiros',
        body: 'Tarifas em tempo real no momento do clique. Sem porcentagens inventadas.',
      },
      {
        title: 'Promoções de última hora',
        body: 'Noites em cabanas abaixo do mínimo, semanas de esqui se completando, vagas de husky fora do pico.',
      },
      {
        title: 'Verão e sol da meia-noite',
        body: 'A janela de 32 dias a partir de 6 de junho, outra estação, outras ofertas.',
      },
      {
        title: 'Só quando vale',
        body: 'Um resumo, não uma enxurrada. Link de cancelamento em todo envio.',
      },
    ],
    placeholder: 'Seu endereço de e-mail',
    cta: 'Receber as ofertas',
    sending: 'Enviando…',
    okTitle: 'Você está na lista.',
    okBody: 'O e-mail de boas-vindas está a caminho, confira sua caixa de entrada.',
    fineprint: 'Só enviamos quando há algo que realmente vale a pena. Cancelamento em um clique. Nunca compartilhamos seu endereço.',
    error: 'Não foi possível inscrever agora. Tente novamente daqui a pouco.',
  },
  hotelsPage: {
    eyebrow: 'Hotéis e cabanas',
    h1Italic: 'Hotéis da Lapônia',
    h1: 'preços reais, hoje à noite.',
    sub:
      'Iglus de vidro sob o cinturão de aurora, acomodações ao pé da pista em Levi, lodges no meio da floresta em Ylläs, hotéis para a família em Rovaniemi. Compare as tarifas desta noite no Hotels.com.',
    seoTitle: 'Ofertas de hotéis na Lapônia, Iglus de vidro e cabanas',
    seoDesc:
      'Preços ao vivo no Hotels.com para iglus de vidro, hospedagens ski-in, hotéis para a família e lodges selvagens em toda a Lapônia finlandesa.',
    bottomTitle: 'Não encontrou seu destino?',
    bottomLead: 'Busque qualquer cidade da Lapônia direto no Hotels.com.',
    bottomCta: 'Ver todos os hotéis da Lapônia →',
  },
  activitiesPage: {
    eyebrow: 'Atividades',
    h1Italic: 'Atividades na Lapônia',
    h1: 'disponibilidade em tempo real.',
    sub:
      'Safáris com huskies, caça à aurora, expedições de snowmobile, visitas a fazendas de renas, pesca no gelo. Disponibilidade real no GetYourGuide, sem cronômetros falsos, sem porcentagens inventadas.',
    seoTitle: 'Ofertas de atividades na Lapônia, Husky, aurora e mais',
    seoDesc:
      'Preços em tempo real no GetYourGuide em safáris com huskies, caça à aurora, snowmobile, fazendas de renas e pesca no gelo na Lapônia finlandesa.',
    bottomTitle: 'Veja o catálogo completo da Lapônia',
    bottomLead: 'Mais de 900 passeios, bate-volta e aventuras de vários dias no GetYourGuide.',
    bottomCta: 'Todas as atividades da Lapônia →',
  },
  flightsPage: {
    eyebrow: 'Voos',
    h1Italic: 'Voos para a Lapônia',
    h1: 'tarifas reais do Trip.com.',
    sub:
      'De Helsinki para todo portão da Lapônia, com datas pré-preenchidas. Clique para ver tarifas reais da Finnair e da Norwegian.',
    seoTitle: 'Voos para a Lapônia, Ofertas do Trip.com de Helsinki',
    seoDesc:
      'Preços de voos em tempo real no Trip.com: Helsinki para Rovaniemi, Kittilä, Ivalo, Kuusamo e Kemi. Tarifas diretas da Finnair e da Norwegian.',
    bottomTitle: 'Vindo de fora da Finlândia?',
    bottomLead: 'Busque qualquer origem para qualquer aeroporto da Lapônia no Trip.com.',
    bottomCta: 'Abrir a busca de voos no Trip.com →',
  },
  carsPage: {
    eyebrow: 'Aluguel de carro',
    h1Italic: 'Carros prontos para o inverno',
    h1: 'preços reais do parceiro.',
    sub:
      'Pneus com pinos, 4x4, autonomia livre para caçar aurora. Retirada em todos os aeroportos da Lapônia, compare no EconomyBookings.',
    seoTitle: 'Aluguel de carro na Lapônia, Pneus com pinos, 4x4',
    seoDesc:
      'Preços em tempo real no EconomyBookings para aluguel de carro nos aeroportos de Rovaniemi, Kittilä, Ivalo e Kuusamo. Pneus com pinos inclusos.',
    bottomTitle: 'Retirar em Helsinki ou devolver em outro aeroporto?',
    bottomLead: 'O EconomyBookings aceita aluguel one-way entre a maioria dos aeroportos finlandeses.',
    bottomCta: 'Abrir o EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Pacotes',
    h1Italic: 'Monte a sua',
    h1: 'viagem para a Lapônia.',
    sub:
      'A gente não vende pacote pronto. Selecionamos os blocos, voos, hospedagens, dias com husky, caça à aurora, e você reserva cada um na tarifa real do parceiro. Sem taxa de intermediário.',
    seoTitle: 'Pacotes na Lapônia, Semana de aurora e viagens família',
    seoDesc:
      'Ideias de roteiros de vários dias na Lapônia: semana de aurora em Saariselkä, viagens em família em Rovaniemi e fins de semana. Cada parte reservada à parte.',
    curatedTitle: 'Ideias de viagem selecionadas',
    pairTitle: 'Combine com a sua hospedagem',
    pairLead: 'Os blocos que a maioria dos viajantes monta numa viagem de 4-7 noites pela Lapônia.',
  },
  summerPage: {
    eyebrow: 'Sol da meia-noite · 6 jun – 7 jul',
    h1Italic: 'Verão na Lapônia',
    h1: 'é a oferta secreta.',
    sub:
      '32 dias em que o sol não se põe. Cabanas à beira do lago por uma fração das tarifas de dezembro. Pico de caminhada no fim de agosto, ar limpo, sem mosquitos, ouro do ruska.',
    seoTitle: 'Ofertas de verão na Lapônia, Sol da meia-noite',
    seoDesc:
      '32 dias em que o sol não se põe na Lapônia finlandesa (6 jun – 7 jul). Cabanas com sol da meia-noite, caminhadas em Pallas-Yllästunturi e estadias no lago.',
    offersTitle: 'Ofertas de verão, preços reais dos parceiros',
    offersFallback: 'As ofertas de verão estão sendo selecionadas, volte em breve.',
    reasonsTitle: 'Três motivos honestos pelos quais o verão é mais barato',
    reasons: [
      {
        title: 'A demanda cai em maio',
        body: 'A temporada de aurora termina, as estações de esqui fecham. Cabanas lotadas em fevereiro ficam com semanas vazias.',
      },
      {
        title: 'A Lapônia fica totalmente aberta',
        body: 'As mesmas montanhas, os mesmos lagos, a mesma natureza, sem a margem do pacote turístico.',
      },
      {
        title: 'A luz do dia é infinita',
        body: 'Você caminha à meia-noite. Toma banho de lago às 2 da manhã. Cada dia rende mais.',
      },
    ],
    cta: 'Encontrar uma semana no verão →',
  },
  faq: {
    eyebrow: 'Bom saber',
    title: 'Ofertas da Lapônia, suas perguntas, respondidas.',
    lead: 'Respostas honestas sobre quando ir, quando reservar e o que esperar. Sem preços inventados nem urgência fingida.',
    items: [
      {
        q: 'Qual é a época mais barata para visitar a Lapônia?',
        a: 'O fim da primavera e o verão, de maio a agosto, aproximadamente, são a época mais tranquila e em conta. A temporada de auroras acabou e as estações de esqui fecharam, então as cabanas à beira do lago que lotavam em fevereiro ficam vazias. Dentro do inverno, as semanas de baixa temporada (de meados de março a meados de abril) são mais baratas que os picos do Natal e das férias de fevereiro, com neve farta e mais horas de luz.',
      },
      {
        q: 'Com quanta antecedência devo reservar uma viagem à Lapônia?',
        a: 'Depende da temporada. Natal e Ano-Novo são os períodos mais disputados: os iglus de vidro e os quartos familiares da Vila do Papai Noel costumam esgotar no fim de agosto. A temporada de auroras (de novembro a março, aproximadamente) é mais calma, mas os fins de semana populares enchem cedo. Primavera, verão e outono raramente exigem meses de antecedência. Os voos saindo de Helsinque costumam sair mais baratos reservando com algumas semanas de margem, fora dos picos de Natal, Páscoa e das férias de fevereiro.',
      },
      {
        q: 'As ofertas de última hora na Lapônia valem a pena?',
        a: 'Muitas vezes sim, fora dos poucos períodos de pico. Quando uma cabana, uma vaga de husky ou uma caça à aurora tem espaço não vendido perto da data, os parceiros a liberam pelo preço em tempo real, e os passeios de aurora e de husky frequentemente aceitam reservas até cerca de 24 horas antes. As exceções são Natal, Ano-Novo, Páscoa (Pääsiäinen) e as férias escolares de fevereiro, quando a procura é alta e esperar raramente ajuda.',
      },
      {
        q: 'O que costuma estar incluído em um pacote da Lapônia?',
        a: 'Varia conforme o operador, então leia sempre o que está incluído. Um pacote comum combina algumas noites de hospedagem com uma ou duas atividades, um safári de husky, uma caça à aurora ou um passeio de moto de neve, e às vezes traslados do aeroporto. Na LaplandDeals não vendemos pacotes fechados: selecionamos as peças (voos, hospedagens, atividades, aluguel de carro) e você reserva cada uma pelo preço em tempo real do parceiro, sem taxa de intermediação.',
      },
      {
        q: 'Como encontrar descontos verdadeiros na Lapônia?',
        a: 'Compare o preço em tempo real do parceiro com a tarifa normal da hospedagem ou do operador, em vez de confiar em uma porcentagem de destaque. Viaje na baixa temporada ou no verão, hospede-se um pouco afastado dos centros mais movimentados e reserve as atividades diretamente em plataformas confiáveis. Cada preço na LaplandDeals leva direto à tarifa atual do parceiro, nunca inventamos porcentagens nem mostramos contagens regressivas falsas.',
      },
    ],
  },
  related: {
    eyebrow: 'Para onde ir depois',
    title: 'Mais da rede #LaplandVibes.',
    lead: 'Sites irmãos que aprofundam um aspecto da viagem à Lapônia. Cada um abre em uma nova aba.',
    links: [
      { anchor: 'ofertas de hotéis e pacotes', blurb: 'Iglus de vidro, suítes com aurora boreal e resorts para famílias por toda a Lapônia finlandesa.' },
      { anchor: 'ofertas em atividades e safáris', blurb: 'Safáris de husky, caças à aurora, passeios de moto de neve e fazendas de renas com disponibilidade em tempo real.' },
      { anchor: 'pacotes de tour com tudo incluído', blurb: 'Roteiros guiados de vários dias que combinam hospedagens, traslados e atividades.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 简体中文 (礼貌敬语 "您")
// ─────────────────────────────────────────────────────────────────────────────
const zhCN: SectionCopy = {
  nav: {
    hotels: '酒店',
    activities: '活动',
    flights: '航班',
    cars: '租车',
    packages: '套餐',
    summer: '夏季',
    tonightsCta: '今晚优惠',
  },
  hero: {
    eyebrow: '精选 · 当季 · 极光季',
    h1Line1Italic: '拉普兰最便宜的',
    h1Line1Bold: '',
    h1Line2: '尾单特惠。',
    lead:
      '我们精心挑选芬兰拉普兰的临时优惠, 极光下的玻璃穹顶酒店、哈士奇雪橇、飞往罗瓦涅米的航班、冬季四驱租车。直接来自合作伙伴的实时价格;我们从不编造折扣百分比。',
    primary: '今晚的酒店',
    secondary: '极光之旅',
    eyebrowSummer: '精选 · 当季 · 午夜阳光',
    leadSummer:
      '我们精心挑选芬兰拉普兰的优惠, 午夜阳光下的小木屋、徒步与桨板、湖上巡游、飞往罗瓦涅米的航班、夏季租车。直接来自合作伙伴的实时价格;我们从不编造折扣百分比。',
    secondarySummer: '午夜阳光',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: '合作伙伴的实时价格',
    leadRest:
      ' · 每次点击都会刷新。我们从不编造折扣, 合作伙伴显示的是今天的真实价格。',
    cta: '今晚的酒店 →',
  },
  pulse: {
    eyebrow: '今日动态',
    titleItalic: '拉普兰',
    titleRest: '此刻正在发生什么。',
    lead:
      '真实的季节信息，而非编造的倒计时。情况一有变化我们就会更新。',
    items: [
      {
        when: '现在',
        title: '午夜阳光，全年价格处于低位的时段',
        body: '整个7月太阳几乎不落。湖边小屋的价格远低于冬季，二月一房难求的那些山地此时十分清静。这是一年里相当实惠的出行窗口。',
      },
      {
        when: '现在至8月',
        title: '徒步与亲水季节',
        body: '帕拉斯-于来斯通图里国家公园和东部山地干燥、开放。白昼漫长，适合徒步、桨板和湖中游泳。蚊虫在整个8月逐渐减少；6月底前往请带上防蚊头网。',
      },
      {
        when: '9月5日 – 15日',
        title: 'Ruska:秋色（秋季色彩）很快进入高峰',
        body: '矮桦大约三天就会转为金黄。小屋价格依然亲民，空气是欧洲数一数二洁净的（据世界气象组织 WMO）。随着夜晚转暗，极光也将回归。',
      },
      {
        when: '2026年圣诞节',
        title: '已经开始满员',
        body: '玻璃穹顶酒店和圣诞老人村的家庭房通常在8月底就停止接受预订。圣诞夜晚餐和驯鹿雪橇时段往往在10月前就已订满。',
      },
      {
        when: '机票较划算的时机',
        title: '从赫尔辛基出发提前4-8周',
        body: '芬兰航空和挪威航空 HEL→拉普兰往返机票在提前4-8周预订时通常降至89-129欧元区间，圣诞、复活节和2月高峰除外。',
      },
      {
        when: '9月起',
        title: '极光季节再度开启',
        body: '活跃窗口大致从9月中旬延续到4月初。萨利色尔卡、伊纳里和乌茨约基的可见极光率较高。极光之旅一般可在出发前24小时内取消，因此临时加入很方便。',
      },
    ],
  },
  sections: {
    pickEyebrow: '编辑精选',
    pickTitle: '为即将到来的季节精心挑选。',
    pickLead:
      '值得推荐给朋友的去处。每张卡片都链接到合作伙伴今天的实时价格。',
    pickCta: '所有酒店',

    categoriesEyebrow: '按类别浏览',
    categoriesTitle: '找到您心仪的拉普兰优惠。',

    lastMinEyebrow: '临时窗口',
    lastMinTitle: '未来两周内出发?',
    lastMinLead:
      '常有临时空房的小木屋之夜、哈士奇时段和极光之旅。合作伙伴的实时空房, 每次点击都会刷新。',

    summerEyebrow: '午夜阳光 · 6月6日 – 7月7日',
    summerTitle: '拉普兰的夏天是被忽视的优惠。',
    summerLead:
      '32天太阳不落。湖边小屋仅为12月价格的几分之一。徒步高峰在8月底, 空气清新、没有蚊虫、秋色金黄。',
    summerCta: '浏览夏季',

    everythingEyebrow: '全部',
    everythingTitle: '今日目录。',
  },
  tiles: [
    { label: '酒店与小木屋', hint: '玻璃穹顶 · 雪道旁 · 荒野旅馆' },
    { label: '活动', hint: '哈士奇 · 极光 · 摩托雪橇 · 驯鹿' },
    { label: '航班', hint: '赫尔辛基至罗瓦涅米 · 基蒂莱 · 伊瓦洛 · 库萨莫' },
    { label: '租车', hint: '4WD · 钉胎 · 机场取车' },
    { label: '套餐', hint: '极光一周 · 家庭出游 · 周末小旅行' },
    { label: '夏季', hint: '午夜阳光 · 徒步 · 湖边小屋' },
  ],
  card: {
    livePrices: '实时价格',
    seeDeals: '查看优惠',
    browse: '查看',
    flags: {
      'last-minute': '最后一刻',
      'end-of-season': '季末',
      summer: '午夜阳光',
      package: '多日',
      'editor-pick': '编辑精选',
    },
  },
  trust: [
    {
      title: '诚实的精选',
      body: '合作伙伴的实时价格。从不编造折扣百分比或虚假倒计时。',
    },
    {
      title: '由当地人审阅',
      body: '由在芬兰拉普兰生活、旅行和写作的人精心挑选。',
    },
    {
      title: '#LaplandVibes 网络成员',
      body: '23+ 姐妹网站。一个生态系统,一个权威信息源。',
    },
  ],
  newsletter: {
    kicker: '#LaplandVibes 电子报',
    titleItalic: '把握优惠',
    titleRest: '在它们消失之前。',
    lead:
      '拉普兰临时优惠价格、季末小屋大降价以及您原本会错过的午夜阳光窗口。',
    benefits: [
      {
        title: '合作伙伴的真实价格',
        body: '点击瞬间获取实时价格。绝无编造的折扣百分比。',
      },
      {
        title: '临时降价',
        body: '低于底价的小木屋之夜、即将售完的滑雪周、淡季的哈士奇时段。',
      },
      {
        title: '夏季与午夜阳光',
        body: '从6月6日开始的32天窗口期, 不同的季节,不同的优惠。',
      },
      {
        title: '仅在值得分享时',
        body: '汇总,而非信息轰炸。每封邮件都附取消订阅链接。',
      },
    ],
    placeholder: '您的电子邮箱',
    cta: '获取优惠',
    sending: '发送中…',
    okTitle: '您已加入名单。',
    okBody: '欢迎邮件正在发送, 请查收您的收件箱。',
    fineprint: '仅在真正有值得分享的内容时发送。一键退订。我们绝不共享您的地址。',
    error: '目前无法订阅。请稍后再试。',
  },
  hotelsPage: {
    eyebrow: '酒店与小木屋',
    h1Italic: '拉普兰酒店',
    h1: '今晚的实时价格。',
    sub:
      '极光带下的玻璃穹顶、莱维雪道旁的酒店、于来斯的荒野旅馆、罗瓦涅米的家庭酒店。在 Hotels.com 上比较今晚的房价。',
    seoTitle: '拉普兰酒店优惠，玻璃穹顶、雪道旁、荒野小屋',
    seoDesc:
      'Hotels.com 上玻璃穹顶酒店、雪道直达住宿、家庭酒店和荒野旅馆的实时价格,遍布芬兰拉普兰。临时折扣和季末小屋优惠。',
    bottomTitle: '没找到您的目的地?',
    bottomLead: '直接在 Hotels.com 上搜索任何拉普兰小镇。',
    bottomCta: '浏览全部拉普兰酒店 →',
  },
  activitiesPage: {
    eyebrow: '活动',
    h1Italic: '拉普兰活动',
    h1: '实时空位。',
    sub:
      '哈士奇雪橇、追极光、摩托雪橇远征、驯鹿农场访问、冰钓。GetYourGuide 上的真实空位, 没有虚假计时器,也没有编造的折扣。',
    seoTitle: '拉普兰活动优惠，哈士奇、极光、摩托雪橇等',
    seoDesc:
      'GetYourGuide 上哈士奇雪橇、极光之旅、摩托雪橇、驯鹿农场和冰钓在芬兰拉普兰各地的实时价格。临时时段。',
    bottomTitle: '浏览拉普兰完整活动目录',
    bottomLead: 'GetYourGuide 上有900多种当日游、徒步和多日冒险。',
    bottomCta: '所有拉普兰活动 →',
  },
  flightsPage: {
    eyebrow: '航班',
    h1Italic: '飞往拉普兰',
    h1: 'Trip.com 实时机票。',
    sub:
      '从赫尔辛基飞往每个拉普兰门户城市,日期已预填。点击查看芬兰航空与挪威航空的真实票价。',
    seoTitle: '飞往拉普兰航班，Trip.com 赫尔辛基出发实时优惠',
    seoDesc:
      'Trip.com 上的实时机票价格:赫尔辛基至罗瓦涅米、基蒂莱、伊瓦洛、库萨莫和凯米。芬兰航空与挪威航空直飞, 已预填,随时可订。',
    bottomTitle: '您是从芬兰之外出发吗?',
    bottomLead: '在 Trip.com 上搜索任何出发地到任何拉普兰机场。',
    bottomCta: '打开 Trip.com 机票搜索 →',
  },
  carsPage: {
    eyebrow: '租车',
    h1Italic: '冬季准备就绪的车辆',
    h1: '合作伙伴的实时价格。',
    sub:
      '钉胎、四驱、可自由追逐极光的里程。所有拉普兰机场均可取车, 在 EconomyBookings 上比价。',
    seoTitle: '拉普兰租车优惠，钉胎、4WD、机场取车',
    seoDesc:
      'EconomyBookings 上在罗瓦涅米、基蒂莱、伊瓦洛和库萨莫机场租车的实时价格。冬季驾驶专用钉胎。',
    bottomTitle: '赫尔辛基取车或异地还车?',
    bottomLead: 'EconomyBookings 支持大多数芬兰机场之间的单程租车。',
    bottomCta: '打开 EconomyBookings →',
  },
  packagesPage: {
    eyebrow: '套餐',
    h1Italic: '自由组合您的',
    h1: '拉普兰之旅。',
    sub:
      '我们不卖封闭式套餐。我们精选构建模块, 航班、住宿、哈士奇日、极光团, 您按合作伙伴的实时价格分别预订。没有中间商抽成。',
    seoTitle: '拉普兰套餐优惠，极光一周、家庭出游、周末小旅行',
    seoDesc:
      '多日拉普兰行程灵感:萨利色尔卡的极光一周、罗瓦涅米的家庭出游、周末小旅行。各项目分别按合作伙伴的实时价格预订。',
    curatedTitle: '精选行程灵感',
    pairTitle: '搭配您的住宿',
    pairLead: '多数旅行者会在 4-7 晚拉普兰行程中叠加的模块。',
  },
  summerPage: {
    eyebrow: '午夜阳光 · 6月6日 – 7月7日',
    h1Italic: '拉普兰的夏天',
    h1: '是被忽视的优惠。',
    sub:
      '32天太阳不落。湖边小屋仅为12月价格的几分之一。徒步高峰在8月底, 空气清新、没有蚊虫、秋色金黄。',
    seoTitle: '拉普兰夏季优惠，午夜阳光住宿与徒步',
    seoDesc:
      '芬兰拉普兰32天太阳不落(6月6日 – 7月7日)。午夜阳光下的小屋优惠、帕拉斯-于来斯通图里国家公园徒步、湖边夏季住宿,价格仅为冬季的几分之一。',
    offersTitle: '夏季优惠，合作伙伴的实时价格',
    offersFallback: '夏季优惠正在精选中、请稍后再来。',
    reasonsTitle: '夏季更便宜的三个真实原因',
    reasons: [
      {
        title: '需求在五月下降',
        body: '极光季节结束,滑雪场关闭。二月份订满的小木屋会空出整周。',
      },
      {
        title: '整个拉普兰任您驰骋',
        body: '同样的山丘、湖泊、荒野, 没有打包旅行的加价。',
      },
      {
        title: '日光无尽',
        body: '您可以午夜徒步、凌晨2点游泳。每天的时间被拉长。',
      },
    ],
    cta: '寻找夏季一周 →',
  },
  faq: {
    eyebrow: '实用提示',
    title: '拉普兰优惠，常见问题解答。',
    lead: '关于何时出行、何时预订以及可以期待什么的诚实解答。没有虚构价格，没有虚假的紧迫感。',
    items: [
      {
        q: '什么时候去拉普兰最便宜？',
        a: '春末和夏季（大约5月至8月）最为清静，也最实惠。极光季已经结束，滑雪场也已关闭，2月里一房难求的湖畔小屋如今空置。在冬季之内，平季周（3月中旬至4月中旬）比圣诞和2月假期高峰便宜，同时仍有充足的积雪和更长的白昼。',
      },
      {
        q: '拉普兰行程应提前多久预订？',
        a: '这取决于季节。圣诞和新年最为紧张：玻璃穹顶屋和圣诞老人村的家庭房通常在8月底前就订满。极光季（大约11月至3月）相对从容，但热门的周末很早就会订满。春、夏、秋季很少需要提前数月。从赫尔辛基出发的航班通常提前几周预订最便宜，避开圣诞、复活节和2月假期高峰即可。',
      },
      {
        q: '拉普兰的临时优惠值得吗？',
        a: '在少数高峰时段之外，往往值得。当小屋、哈士奇名额或极光之旅在临近日期仍有未售出的空位时，合作伙伴会以实时价格放出，而极光和哈士奇之旅通常在出发前约24小时仍接受预订。例外是圣诞、新年、复活节（Pääsiäinen）和2月学校假期，此时需求旺盛，等待很少有帮助。',
      },
      {
        q: '典型的拉普兰套餐包含什么？',
        a: '因运营商而异，因此请务必查看所含内容。常见的套餐将几晚住宿与一到两项活动相结合，哈士奇雪橇、极光之旅或雪地摩托之旅，有时还包含机场接送。在 LaplandDeals，我们不出售封闭式套餐：我们精选各项要素（航班、住宿、活动、租车），由您按合作伙伴的实时价格分别预订，没有中介费。',
      },
      {
        q: '如何找到真正的拉普兰折扣？',
        a: '将合作伙伴的实时价格与酒店或运营商的常规价格进行比较，而不是轻信醒目的折扣百分比。在平季或夏季出行，住在最热闹的度假区稍外围，并通过可信平台直接预订活动。LaplandDeals 上的每个价格都直接链接到合作伙伴的当前价格，我们绝不编造百分比，也不显示虚假的倒计时。',
      },
    ],
  },
  related: {
    eyebrow: '接下来去哪',
    title: '#LaplandVibes 网络的更多站点。',
    lead: '深入拉普兰旅行某一方面的姊妹网站。每个都会在新标签页中打开。',
    links: [
      { anchor: '酒店优惠与套餐', blurb: '遍布芬兰拉普兰的玻璃穹顶屋、极光套房和家庭度假村。' },
      { anchor: '活动与雪橇之旅优惠', blurb: '哈士奇雪橇、极光之旅、雪地摩托和驯鹿农场，实时显示空位。' },
      { anchor: '全包式行程套餐', blurb: '将住宿、接送和活动串联起来的多日导览行程。' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// KOREAN (한국어, 정중체)
// ─────────────────────────────────────────────────────────────────────────────
const ko: SectionCopy = {
  nav: {
    hotels: '호텔',
    activities: '액티비티',
    flights: '항공',
    cars: '렌터카',
    packages: '패키지',
    summer: '여름',
    tonightsCta: '오늘 밤 특가',
  },
  hero: {
    eyebrow: '엄선 · 지금이 제철 · 오로라 시즌',
    h1Line1Italic: '라플란드 최저가',
    h1Line1Bold: '',
    h1Line2: '막판 특가.',
    lead:
      '라플란드의 직전 예약 특가를 조용히 큐레이션합니다, 오로라 아래 글래스 이글루의 밤, 허스키 사파리, 로바니에미행 항공편, 겨울 4WD 렌터카까지. 파트너의 실시간 가격이며 할인율을 임의로 만들어내지 않습니다.',
    primary: '오늘 밤 호텔',
    secondary: '오로라 투어',
    eyebrowSummer: '엄선 · 지금이 제철 · 백야',
    leadSummer:
      '라플란드의 특가를 조용히 큐레이션합니다, 백야의 통나무집, 하이킹과 SUP, 호수 크루즈, 로바니에미행 항공편, 여름 렌터카까지. 파트너의 실시간 가격이며 할인율을 임의로 만들어내지 않습니다.',
    secondarySummer: '백야',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: '파트너 실시간 가격',
    leadRest:
      ' · 클릭할 때마다 새로 불러옵니다. 할인율을 임의로 만들어내지 않습니다, 파트너가 표시하는 오늘의 요금입니다.',
    cta: '오늘 밤 호텔 →',
  },
  pulse: {
    eyebrow: '오늘의 상황',
    titleItalic: '지금',
    titleRest: '라플란드에서 일어나고 있는 일.',
    lead:
      '구체적인 계절 정보, 가짜 카운트다운은 없습니다. 상황이 바뀔 때마다 업데이트합니다.',
    items: [
      {
        when: '지금',
        title: '백야, 1년 중 가장 낮은 요금',
        body: '7월 내내 해가 거의 지지 않습니다. 호숫가 통나무집은 겨울 요금보다 훨씬 저렴하고, 2월에 매진됐던 그 펠들이 지금은 한산합니다. 1년 중 가성비가 가장 좋은 시기입니다.',
      },
      {
        when: '지금부터 8월까지',
        title: '하이킹과 물놀이 시즌',
        body: 'Pallas-Yllästunturi와 동부 펠들이 건조하고 활짝 열려 있습니다. 긴 낮 동안 하이킹, SUP, 호수 수영을 즐기세요. 모기는 8월에 걸쳐 잦아듭니다. 6월 말에는 헤드넷을 챙기세요.',
      },
      {
        when: '9월 5~15일',
        title: 'Ruska(단풍): 가을빛이 순식간에 절정',
        body: '난쟁이자작나무가 사흘 남짓이면 황금빛으로 물듭니다. 통나무집은 아직 저렴하고 공기는 유럽에서 가장 맑습니다(WMO). 밤이 어두워지면서 오로라도 다시 돌아옵니다.',
      },
      {
        when: '2026년 크리스마스',
        title: '이미 예약 마감 임박',
        body: '글래스 이글루와 산타클로스 마을의 패밀리룸은 보통 8월 말이면 예약을 닫습니다. 크리스마스 이브 디너와 순록 썰매 시간대는 10월이면 매진되는 경우가 많습니다.',
      },
      {
        when: '항공권 최적기',
        title: '헬싱키 출발 4~8주 전',
        body: '핀에어 / 노르웨이안의 HEL→라플란드 왕복은 크리스마스, 부활절, 2월 성수기를 피해 4~8주 전 예약하면 89~129유로 구간으로 떨어집니다.',
      },
      {
        when: '9월부터',
        title: '오로라 시즌이 다시 시작됩니다',
        body: '활발한 윈도우는 대략 9월 중순부터 4월 초까지 이어집니다. 사리셀캐, 이나리, 우츠요키의 오로라 관측률이 가장 높습니다. 헌팅 투어는 보통 24시간 전까지 취소할 수 있어 임박 예약도 쉽습니다.',
      },
    ],
  },
  sections: {
    pickEyebrow: '에디터 추천',
    pickTitle: '다가오는 시즌을 위해 조용히 큐레이션했습니다.',
    pickLead:
      '친구에게 추천할 만한 곳들. 각 카드는 오늘의 파트너 실시간 가격으로 연결됩니다.',
    pickCta: '모든 호텔',

    categoriesEyebrow: '카테고리별로 둘러보기',
    categoriesTitle: '내게 맞는 라플란드 특가를 찾으세요.',

    lastMinEyebrow: '직전 예약 윈도우',
    lastMinTitle: '앞으로 2주 안에 떠나시나요?',
    lastMinLead:
      '직전에도 자리가 자주 열리는 통나무집 1박, 허스키 시간대, 오로라 헌트. 파트너의 실시간 잔여 정보, 클릭할 때마다 새로 고침됩니다.',

    summerEyebrow: '백야 · 6월 6일 – 7월 7일',
    summerTitle: '라플란드의 여름은 숨겨진 특가입니다.',
    summerLead:
      '32일 동안 해가 지지 않습니다. 호숫가 통나무집은 12월 요금의 일부 수준. 하이킹 절정은 8월 말, 맑은 공기, 모기 없음, 황금빛 단풍.',
    summerCta: '여름 둘러보기',

    everythingEyebrow: '전체',
    everythingTitle: '오늘의 카탈로그.',
  },
  tiles: [
    { label: '호텔 & 통나무집', hint: '글래스 이글루 · 슬로프 인접 · 황야 롯지' },
    { label: '액티비티', hint: '허스키 · 오로라 · 스노모빌 · 순록' },
    { label: '항공', hint: '헬싱키, 로바니에미 · 키틸래 · 이발로 · 쿠사모' },
    { label: '렌터카', hint: '4WD · 스파이크 타이어 · 공항 픽업' },
    { label: '패키지', hint: '오로라 일주일 · 가족 여행 · 주말 탈출' },
    { label: '여름', hint: '백야 · 하이킹 · 호숫가 통나무집' },
  ],
  card: {
    livePrices: '실시간 가격',
    seeDeals: '특가 보기',
    browse: '둘러보기',
    flags: {
      'last-minute': '막판 특가',
      'end-of-season': '시즌 마감',
      summer: '백야',
      package: '다일',
      'editor-pick': '에디터 추천',
    },
  },
  trust: [
    {
      title: '정직한 큐레이션',
      body: '파트너의 실시간 가격. 할인율이나 가짜 카운트다운을 임의로 만들지 않습니다.',
    },
    {
      title: '현지인의 검토',
      body: '라플란드에서 여행하고 글을 쓰는 사람들이 직접 큐레이션합니다.',
    },
    {
      title: '#LaplandVibes의 일원',
      body: '23개 이상의 자매 사이트. 하나의 생태계, 하나의 출처.',
    },
  ],
  newsletter: {
    kicker: '#LaplandVibes 뉴스레터',
    titleItalic: '특가를 놓치지 마세요',
    titleRest: '사라지기 전에.',
    lead:
      '라플란드의 직전 예약 가격, 시즌 마감 통나무집 할인, 놓치기 쉬운 백야 윈도우.',
    benefits: [
      {
        title: '파트너의 실제 가격',
        body: '클릭하는 순간 실시간 요금을 가져옵니다. 임의 할인율 없음.',
      },
      {
        title: '직전 할인',
        body: '바닥 이하의 통나무집 1박, 마감 임박 스키 주, 비수기 허스키 시간대.',
      },
      {
        title: '여름과 백야',
        body: '6월 6일부터 시작되는 32일 윈도우, 다른 계절, 다른 특가.',
      },
      {
        title: '주간 요약',
        body: '폭격이 아닌 요약. 모든 메일에 구독 해지 링크가 있습니다.',
      },
    ],
    placeholder: '이메일 주소',
    cta: '특가 받기',
    sending: '전송 중…',
    okTitle: '구독자 명단에 추가되었습니다.',
    okBody: '환영 이메일이 발송되었습니다, 받은편지함을 확인해 주세요.',
    fineprint: '진짜 공유할 가치가 있을 때만 보냅니다. 한 번의 클릭으로 해지. 주소는 절대 공유하지 않습니다.',
    error: '지금은 구독할 수 없습니다. 잠시 후 다시 시도해 주세요.',
  },
  hotelsPage: {
    eyebrow: '호텔 & 통나무집',
    h1Italic: '라플란드 호텔',
    h1: '오늘 밤 실시간 가격.',
    sub:
      '오로라 벨트 아래 글래스 이글루, 레비의 슬로프 인접 호텔, 윌래스의 황야 롯지, 로바니에미의 가족 호텔. 오늘 밤 요금을 Hotels.com에서 비교하세요.',
    seoTitle: '라플란드 호텔 특가, 글래스 이글루, 슬로프 인접, 황야 통나무집',
    seoDesc:
      'Hotels.com 실시간 가격: 글래스 이글루, 스키인 숙소, 가족 호텔, 황야 롯지를 라플란드 전역에서. 직전 예약과 시즌 마감 통나무집.',
    bottomTitle: '원하시는 곳이 보이지 않나요?',
    bottomLead: 'Hotels.com에서 라플란드의 모든 도시를 직접 검색하세요.',
    bottomCta: '모든 라플란드 호텔 둘러보기 →',
  },
  activitiesPage: {
    eyebrow: '액티비티',
    h1Italic: '라플란드 액티비티',
    h1: '실시간 가능 여부.',
    sub:
      '허스키 사파리, 오로라 헌트, 스노모빌 원정, 순록 농장 방문, 빙어 낚시. GetYourGuide의 실시간 예약 가능, 가짜 타이머도, 임의 할인율도 없습니다.',
    seoTitle: '라플란드 액티비티 특가, 허스키, 오로라, 스노모빌 등',
    seoDesc:
      'GetYourGuide 실시간 가격: 허스키 사파리, 오로라 헌트, 스노모빌 투어, 순록 농장, 빙어 낚시를 라플란드 전역에서. 직전 시간대.',
    bottomTitle: '라플란드 전체 카탈로그를 둘러보세요',
    bottomLead: 'GetYourGuide에서 900개 이상의 투어, 당일 여행, 다일 모험.',
    bottomCta: '모든 라플란드 액티비티 →',
  },
  flightsPage: {
    eyebrow: '항공',
    h1Italic: '라플란드행 항공편',
    h1: 'Trip.com 실시간 운임.',
    sub:
      '헬싱키에서 모든 라플란드 게이트웨이로, 미리 채워진 날짜로. 클릭하면 핀에어와 노르웨이안의 실제 요금이 표시됩니다.',
    seoTitle: '라플란드행 항공편, Trip.com 헬싱키 노선 실시간 특가',
    seoDesc:
      'Trip.com 실시간 항공권 가격: 헬싱키, 로바니에미, 키틸래, 이발로, 쿠사모, 케미. 핀에어와 노르웨이안 직항, 미리 채워져 바로 예약 가능.',
    bottomTitle: '핀란드 외 지역에서 출발하시나요?',
    bottomLead: 'Trip.com에서 어느 출발지에서든 라플란드 공항으로 검색하세요.',
    bottomCta: 'Trip.com 항공편 검색 열기 →',
  },
  carsPage: {
    eyebrow: '렌터카',
    h1Italic: '겨울 준비 완료 차량',
    h1: '파트너의 실시간 가격.',
    sub:
      '스파이크 타이어, 4WD, 오로라 추격에 필요한 주행 거리. 라플란드 모든 공항에서 픽업, EconomyBookings에서 비교하세요.',
    seoTitle: '라플란드 렌터카 특가, 스파이크 타이어, 4WD, 공항 픽업',
    seoDesc:
      'EconomyBookings 실시간 가격: 로바니에미, 키틸래, 이발로, 쿠사모 공항에서의 렌터카. 겨울 운전을 위한 스파이크 타이어 포함.',
    bottomTitle: '헬싱키 픽업이나 편도 반납을 원하시나요?',
    bottomLead: 'EconomyBookings는 대부분의 핀란드 공항 간 편도 렌탈을 지원합니다.',
    bottomCta: 'EconomyBookings 열기 →',
  },
  packagesPage: {
    eyebrow: '패키지',
    h1Italic: '나만의 라플란드',
    h1: '여행을 만드세요.',
    sub:
      '저희는 정해진 패키지를 팔지 않습니다. 빌딩 블록, 항공편, 숙소, 허스키 데이, 오로라 투어, 을 엄선해 두면 여러분이 파트너의 실시간 가격에 따로 예약하시면 됩니다. 중간 마진이 없습니다.',
    seoTitle: '라플란드 패키지 특가, 오로라 일주일, 가족 여행, 주말 탈출',
    seoDesc:
      '다일 라플란드 여정 영감: 사리셀캐 오로라 일주일, 로바니에미 가족 여행, 주말 탈출. 각 요소는 파트너 실시간 가격으로 따로 예약합니다.',
    curatedTitle: '엄선된 여정 영감',
    pairTitle: '숙소와 함께',
    pairLead: '대부분의 여행자가 4~7박 라플란드 여행에 더해 예약하는 모듈.',
  },
  summerPage: {
    eyebrow: '백야 · 6월 6일 – 7월 7일',
    h1Italic: '라플란드의 여름은',
    h1: '숨겨진 특가입니다.',
    sub:
      '32일 동안 해가 지지 않습니다. 호숫가 통나무집은 12월 요금의 일부. 하이킹 절정은 8월 말, 맑은 공기, 모기 없음, 황금빛 단풍.',
    seoTitle: '라플란드 여름 특가, 백야 숙소와 하이킹',
    seoDesc:
      '라플란드의 32일 백야 (6월 6일 – 7월 7일). 백야 통나무집 특가, 팔라스-윌래스툰투리 국립공원 하이킹, 호숫가 여름 숙소를 겨울 가격의 일부에.',
    offersTitle: '여름 특가, 파트너 실시간 가격',
    offersFallback: '여름 특가를 큐레이션 중입니다、곧 다시 확인해 주세요.',
    reasonsTitle: '여름이 더 저렴한 세 가지 진짜 이유',
    reasons: [
      {
        title: '5월 이후 수요 감소',
        body: '오로라 시즌이 끝나고 스키장이 문을 닫습니다. 2월에 매진되던 통나무집들이 한 주씩 비게 됩니다.',
      },
      {
        title: '라플란드 전체가 여러분의 것',
        body: '같은 언덕, 호수, 황야, 패키지의 마진 없이.',
      },
      {
        title: '햇살은 무한정',
        body: '자정에 하이킹, 새벽 2시에 수영. 매일이 길어집니다.',
      },
    ],
    cta: '여름 한 주 찾기 →',
  },
  faq: {
    eyebrow: '알아두면 좋은 점',
    title: '라플란드 특가, 자주 묻는 질문.',
    lead: '여행 시기, 예약 시점, 무엇을 기대할 수 있는지에 대한 정직한 답변. 지어낸 가격도, 거짓 긴박감도 없습니다.',
    items: [
      {
        q: '라플란드를 방문하기에 가장 저렴한 시기는 언제인가요?',
        a: '늦봄과 여름, 대략 5월부터 8월까지, 이 가장 한산하고 저렴합니다. 오로라 시즌이 끝나고 스키 리조트도 문을 닫아, 2월에 매진되던 호숫가 오두막이 비어 있습니다. 겨울 중에서는 비수기 주간(3월 중순~4월 중순)이 크리스마스와 2월 방학 성수기보다 저렴하면서도 눈이 충분하고 낮이 더 깁니다.',
      },
      {
        q: '라플란드 여행은 얼마나 미리 예약해야 하나요?',
        a: '시즌에 따라 다릅니다. 크리스마스와 새해가 가장 빡빡합니다. 글래스 이글루와 산타클로스 마을의 가족실은 보통 8월 말이면 예약이 마감됩니다. 오로라 시즌(대략 11월~3월)은 비교적 여유롭지만 인기 있는 주말은 일찍 찹니다. 봄, 여름, 가을은 몇 달 전 예약이 거의 필요 없습니다. 헬싱키발 항공편은 크리스마스, 부활절, 2월 방학 성수기를 제외하면 보통 몇 주 전에 예약할 때 가장 저렴합니다.',
      },
      {
        q: '라플란드 막판 특가는 이용할 가치가 있나요?',
        a: '소수의 성수기를 제외하면 대체로 그렇습니다. 오두막, 허스키 자리, 오로라 헌팅에 날짜가 임박해 미판매 공간이 남으면 파트너가 실시간 가격으로 공개하며, 오로라와 허스키 투어는 출발 약 24시간 전까지 예약을 받는 경우가 많습니다. 예외는 크리스마스, 새해, 부활절(Pääsiäinen), 2월 학교 방학으로, 이 시기에는 수요가 높아 기다려도 도움이 되는 일이 드뭅니다.',
      },
      {
        q: '일반적인 라플란드 패키지에는 무엇이 포함되나요?',
        a: '업체마다 다르므로 포함 내역을 항상 확인하세요. 일반적인 패키지는 며칠간의 숙박에 한두 가지 액티비티, 허스키 사파리, 오로라 헌팅, 스노모빌 투어, 를 결합하고 때로는 공항 이동을 포함합니다. LaplandDeals에서는 고정 패키지를 판매하지 않습니다. 구성 요소(항공편, 숙박, 액티비티, 렌터카)를 선별해 드리고, 고객이 각각을 파트너의 실시간 가격으로 예약하므로 중개 수수료가 없습니다.',
      },
      {
        q: '진짜 라플란드 할인은 어떻게 찾나요?',
        a: '눈에 띄는 할인율을 믿기보다 파트너의 실시간 가격을 숙소나 업체의 평소 요금과 비교하세요. 비수기나 여름에 여행하고, 가장 붐비는 리조트에서 조금 떨어진 곳에 묵으며, 액티비티는 신뢰할 수 있는 플랫폼에서 직접 예약하세요. LaplandDeals의 모든 가격은 파트너의 현재 요금으로 바로 연결됩니다, 저희는 할인율을 지어내거나 가짜 카운트다운을 표시하지 않습니다.',
      },
    ],
  },
  related: {
    eyebrow: '다음 행선지',
    title: '#LaplandVibes 네트워크의 다른 사이트.',
    lead: '라플란드 여행의 한 분야를 깊이 다루는 자매 사이트. 각 링크는 새 탭에서 열립니다.',
    links: [
      { anchor: '호텔 특가 및 패키지', blurb: '핀란드 라플란드 전역의 글래스 이글루, 오로라 스위트, 가족 리조트.' },
      { anchor: '액티비티 및 사파리 특가', blurb: '실시간 예약 가능 여부와 함께하는 허스키 사파리, 오로라 헌팅, 스노모빌 투어, 순록 농장.' },
      { anchor: '올인클루시브 투어 패키지', blurb: '숙박, 이동, 액티비티를 하나로 엮은 다일정 가이드 투어.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FRENCH (Français, vouvoiement)
// ─────────────────────────────────────────────────────────────────────────────
const fr: SectionCopy = {
  nav: {
    hotels: 'Hôtels',
    activities: 'Activités',
    flights: 'Vols',
    cars: 'Location de voitures',
    packages: 'Forfaits',
    summer: 'Été',
    tonightsCta: 'Offres ce soir',
  },
  hero: {
    eyebrow: 'Sélectionné · En saison · Saison des aurores',
    h1Line1Italic: 'Les offres last minute',
    h1Line1Bold: '',
    h1Line2: 'les moins chères de Laponie.',
    lead:
      "Sélection discrète d'offres de dernière minute pour la Laponie finlandaise, nuits en igloo de verre sous les aurores, safaris en husky, vols pour Rovaniemi, location de voitures 4x4 d'hiver. Tarifs partenaires en direct ; nous n'inventons jamais de pourcentages.",
    primary: 'Hôtels ce soir',
    secondary: 'Excursions aurores',
    eyebrowSummer: 'Sélectionné · En saison · Soleil de minuit',
    leadSummer:
      "Sélection discrète d'offres pour la Laponie finlandaise, chalets sous le soleil de minuit, randonnée et paddle, croisières sur les lacs, vols pour Rovaniemi, location de voitures d'été. Tarifs partenaires en direct ; nous n'inventons jamais de pourcentages.",
    secondarySummer: 'Soleil de minuit',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Tarifs partenaires en direct',
    leadRest:
      " · actualisés à chaque clic. Aucun pourcentage inventé, les partenaires affichent le tarif du jour.",
    cta: 'Hôtels ce soir →',
  },
  pulse: {
    eyebrow: 'Pouls du jour',
    titleItalic: 'Ce qui',
    titleRest: 'se passe en Laponie en ce moment.',
    lead:
      "Faits saisonniers concrets, pas de compte à rebours inventé. Mis à jour dès que la situation change.",
    items: [
      {
        when: 'En ce moment',
        title: "Soleil de minuit, les tarifs les plus bas de l'année",
        body: "Jusqu'à fin juillet, le soleil se couche à peine. Les chalets au bord du lac restent bien en dessous des prix d'hiver, et les fjells qui affichaient complet en février sont déserts. La meilleure période de l'année côté rapport qualité-prix.",
      },
      {
        when: "D'ici fin août",
        title: "Saison de la randonnée et de l'eau",
        body: "Le Pallas-Yllästunturi et les fjells de l'est sont secs et ouverts. Longues journées pour la randonnée, le SUP et la baignade en lac. Les moustiques se calment au fil d'août ; prévoyez une moustiquaire de tête pour fin juin.",
      },
      {
        when: '5–15 sept.',
        title: "Ruska : les couleurs d'automne au sommet, et vite",
        body: "Le bouleau nain vire à l'or en trois jours environ. Les chalets restent abordables et l'air est le plus pur d'Europe (WMO). Les aurores boréales reviennent aussi à mesure que les nuits s'assombrissent.",
      },
      {
        when: 'Noël 2026',
        title: 'Déjà très réservé',
        body: 'Les igloos de verre et chambres familiales du village du Père Noël ferment généralement aux réservations fin août. Dîners de Noël et balades en traîneau à rennes : souvent partis avant octobre.',
      },
      {
        when: 'Fenêtre idéale pour les tarifs',
        title: '4 à 8 semaines avant le départ depuis Helsinki',
        body: "Les A/R Finnair et Norwegian HEL→Laponie tombent dans la fourchette 89-129 € lorsqu'ils sont réservés 4 à 8 semaines à l'avance, hors pics de Noël, de Pâques et de février.",
      },
      {
        when: 'À partir de septembre',
        title: 'La saison des aurores boréales repart',
        body: "La fenêtre active court de mi-septembre à début avril environ. Saariselkä, Inari et Utsjoki affichent les taux d'aurores visibles les plus élevés. Les sorties s'annulent souvent jusqu'à 24 h avant, faciles à ajouter au dernier moment.",
      },
    ],
  },
  sections: {
    pickEyebrow: 'Sélection de la rédaction',
    pickTitle: 'Discrètement sélectionnés pour la saison à venir.',
    pickLead:
      "Des adresses qu'on recommanderait à un ami. Chaque carte renvoie au tarif partenaire du jour.",
    pickCta: 'Tous les hôtels',

    categoriesEyebrow: 'Parcourir par catégorie',
    categoriesTitle: 'Trouvez votre type d\'offre en Laponie.',

    lastMinEyebrow: 'Fenêtre de dernière minute',
    lastMinTitle: 'Vous partez dans les deux semaines ?',
    lastMinLead:
      "Nuits en chalet, créneaux de husky et chasses aux aurores qui se libèrent souvent à la dernière minute. Disponibilité partenaire en direct, rafraîchie à chaque clic.",

    summerEyebrow: 'Soleil de minuit · 6 juin – 7 juillet',
    summerTitle: "L'été en Laponie, c'est l'offre cachée.",
    summerLead:
      "32 jours sans coucher de soleil. Chalets au bord du lac à une fraction des tarifs de décembre. Pic de randonnée fin août, air pur, pas de moustiques, ruska doré.",
    summerCta: "Découvrir l'été",

    everythingEyebrow: 'Tout',
    everythingTitle: 'Le catalogue du jour.',
  },
  tiles: [
    { label: 'Hôtels & chalets', hint: 'Igloos de verre · Pied des pistes · Lodges en pleine nature' },
    { label: 'Activités', hint: 'Husky · Aurore boréale · Motoneige · Renne' },
    { label: 'Vols', hint: 'Helsinki vers Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Location de voitures', hint: '4x4 · Pneus cloutés · Prise en charge à l\'aéroport' },
    { label: 'Forfaits', hint: 'Semaine aurores · Vacances en famille · Escapades de week-end' },
    { label: 'Été', hint: 'Soleil de minuit · Randonnée · Chalets au bord du lac' },
  ],
  card: {
    livePrices: 'Prix en direct',
    seeDeals: 'Voir les offres',
    browse: 'Parcourir',
    flags: {
      'last-minute': 'Dernière minute',
      'end-of-season': 'Fin de saison',
      summer: 'Soleil de minuit',
      package: 'Plusieurs jours',
      'editor-pick': 'Choix de la rédaction',
    },
  },
  trust: [
    {
      title: 'Sélection honnête',
      body: "Tarifs partenaires en direct. Jamais de pourcentages inventés ni de faux comptes à rebours.",
    },
    {
      title: 'Vérifié par des locaux',
      body: 'Sélection réalisée par des personnes qui voyagent et écrivent depuis la Laponie finlandaise.',
    },
    {
      title: 'Membre de #LaplandVibes',
      body: '23+ sites jumeaux. Un seul écosystème, une seule source.',
    },
  ],
  newsletter: {
    kicker: 'La newsletter #LaplandVibes',
    titleItalic: 'Attrapez les offres',
    titleRest: "avant qu'elles ne disparaissent.",
    lead:
      "Tarifs de dernière minute en Laponie, baisses de fin de saison sur les chalets et fenêtres de soleil de minuit que vous risqueriez de manquer.",
    benefits: [
      {
        title: 'Vrais tarifs partenaires',
        body: "Tarifs en direct au moment du clic. Aucun pourcentage inventé.",
      },
      {
        title: 'Baisses de dernière minute',
        body: 'Nuits de chalet sous le plancher, semaines de ski qui se remplissent, créneaux husky hors saison.',
      },
      {
        title: 'Été et soleil de minuit',
        body: 'La fenêtre de 32 jours à partir du 6 juin, autre saison, autres offres.',
      },
      {
        title: 'Uniquement quand ça compte',
        body: 'Une synthèse, pas un déluge. Lien de désabonnement dans chaque envoi.',
      },
    ],
    placeholder: 'Votre adresse e-mail',
    cta: 'Recevoir les offres',
    sending: 'Envoi…',
    okTitle: 'Vous êtes sur la liste.',
    okBody: "L'e-mail de bienvenue arrive, vérifiez votre boîte de réception.",
    fineprint: 'Uniquement lorsqu\'il y a vraiment quelque chose à signaler. Désabonnement en un clic. Nous ne partageons jamais votre adresse.',
    error: "Impossible de s'inscrire pour le moment. Veuillez réessayer dans un instant.",
  },
  hotelsPage: {
    eyebrow: 'Hôtels & chalets',
    h1Italic: 'Hôtels en Laponie',
    h1: 'tarifs en direct, ce soir.',
    sub:
      "Igloos de verre sous la ceinture aurorale, hôtels au pied des pistes à Levi, lodges en pleine nature à Ylläs, hôtels familiaux à Rovaniemi. Comparez les tarifs de ce soir sur Hotels.com.",
    seoTitle: 'Offres hôtels Laponie, Igloos de verre, pistes, chalets',
    seoDesc:
      'Tarifs Hotels.com en direct pour igloos de verre, séjours ski-in, hôtels familiaux et lodges en pleine nature à travers la Laponie finlandaise.',
    bottomTitle: 'Vous ne voyez pas votre destination ?',
    bottomLead: 'Recherchez n\'importe quelle ville de Laponie directement sur Hotels.com.',
    bottomCta: 'Voir tous les hôtels de Laponie →',
  },
  activitiesPage: {
    eyebrow: 'Activités',
    h1Italic: 'Activités en Laponie',
    h1: 'disponibilité en temps réel.',
    sub:
      "Safaris en husky, chasses aux aurores, expéditions en motoneige, visites de fermes de rennes, pêche sur glace. Disponibilité en direct sur GetYourGuide, sans faux compte à rebours ni pourcentage inventé.",
    seoTitle: 'Offres activités Laponie, Husky, aurore boréale, motoneige',
    seoDesc:
      'Tarifs GetYourGuide en direct sur safaris husky, chasses aux aurores, motoneige, fermes de rennes et pêche sur glace en Laponie finlandaise.',
    bottomTitle: 'Parcourir le catalogue complet de la Laponie',
    bottomLead: '900+ excursions, sorties à la journée et aventures de plusieurs jours sur GetYourGuide.',
    bottomCta: 'Toutes les activités de Laponie →',
  },
  flightsPage: {
    eyebrow: 'Vols',
    h1Italic: 'Vols pour la Laponie',
    h1: 'tarifs Trip.com en direct.',
    sub:
      "Helsinki vers toutes les portes d'entrée de Laponie, pré-remplis et datés. Cliquez pour accéder aux vrais tarifs Finnair et Norwegian.",
    seoTitle: 'Vols pour la Laponie, Offres Trip.com depuis Helsinki',
    seoDesc:
      "Tarifs vols Trip.com en direct : Helsinki vers Rovaniemi, Kittilä, Ivalo, Kuusamo et Kemi. Vols directs Finnair et Norwegian, pré-remplis, prêts à réserver.",
    bottomTitle: 'Vous voyagez depuis hors de Finlande ?',
    bottomLead: "Recherchez n'importe quel point de départ vers un aéroport de Laponie sur Trip.com.",
    bottomCta: 'Ouvrir la recherche de vols Trip.com →',
  },
  carsPage: {
    eyebrow: 'Location de voitures',
    h1Italic: 'Voitures prêtes pour l\'hiver',
    h1: 'tarifs partenaires en direct.',
    sub:
      "Pneus cloutés, 4x4, kilométrage libre pour chasser les aurores. Prise en charge dans tous les aéroports de Laponie, comparez sur EconomyBookings.",
    seoTitle: 'Location voiture Laponie, Pneus cloutés, 4x4, aéroport',
    seoDesc:
      'Tarifs EconomyBookings en direct sur la location de voitures aux aéroports de Rovaniemi, Kittilä, Ivalo et Kuusamo. Pneus cloutés inclus.',
    bottomTitle: 'Prise en charge à Helsinki ou retour en aller simple ?',
    bottomLead: 'EconomyBookings prend en charge les locations en aller simple entre la plupart des aéroports finlandais.',
    bottomCta: 'Ouvrir EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Forfaits',
    h1Italic: 'Composez votre',
    h1: 'voyage en Laponie.',
    sub:
      "Nous ne vendons pas de forfaits fermés. Nous sélectionnons les briques, vols, hébergement, journée husky, sortie aurore, que vous réservez séparément aux tarifs partenaires du jour. Pas de marge d'intermédiaire.",
    seoTitle: 'Offres forfaits Laponie, Aurores, famille, week-end',
    seoDesc:
      "Inspirations d'itinéraires de plusieurs jours en Laponie : semaine aurores à Saariselkä, vacances en famille à Rovaniemi, escapades de week-end.",
    curatedTitle: 'Inspirations d\'itinéraires sélectionnées',
    pairTitle: 'À combiner avec votre hébergement',
    pairLead: 'Les modules que la plupart des voyageurs ajoutent à un séjour de 4 à 7 nuits en Laponie.',
  },
  summerPage: {
    eyebrow: 'Soleil de minuit · 6 juin – 7 juillet',
    h1Italic: "L'été en Laponie",
    h1: "c'est l'offre cachée.",
    sub:
      "32 jours sans coucher de soleil. Chalets au bord du lac à une fraction des tarifs de décembre. Pic de randonnée fin août, air pur, pas de moustiques, ruska doré.",
    seoTitle: 'Offres été Laponie, Soleil de minuit & randonnée',
    seoDesc:
      '32 jours de soleil de minuit en Laponie finlandaise (6 juin – 7 juillet). Chalets, randonnée dans le parc Pallas-Yllästunturi et séjours au bord du lac.',
    offersTitle: 'Offres été, tarifs partenaires en direct',
    offersFallback: 'Les offres estivales sont en cours de sélection, revenez bientôt.',
    reasonsTitle: 'Trois vraies raisons pour lesquelles l\'été coûte moins cher',
    reasons: [
      {
        title: 'La demande chute en mai',
        body: "Fin de la saison des aurores, fermeture des stations de ski. Des chalets pleins en février se libèrent à la semaine.",
      },
      {
        title: 'Toute la Laponie est à vous',
        body: 'Mêmes collines, mêmes lacs, mêmes étendues sauvages, sans la marge des voyages organisés.',
      },
      {
        title: 'Lumière sans fin',
        body: 'Vous pouvez randonner à minuit, nager à 2 h du matin. Chaque journée s\'étire.',
      },
    ],
    cta: 'Trouver une semaine d\'été →',
  },
  faq: {
    eyebrow: 'Bon à savoir',
    title: 'Offres en Laponie, vos questions, nos réponses.',
    lead: 'Des réponses honnêtes sur le moment où partir, quand réserver et à quoi vous attendre. Aucun prix inventé, aucune fausse urgence.',
    items: [
      {
        q: 'Quelle est la période la moins chère pour visiter la Laponie ?',
        a: 'La fin du printemps et l’été, de mai à août environ, sont les périodes les plus calmes et les plus abordables. La saison des aurores est terminée et les stations de ski sont fermées, si bien que les chalets au bord du lac, complets en février, restent vides. En hiver, les semaines de moyenne saison (de mi-mars à mi-avril) sont moins chères que les pics de Noël et des vacances de février, avec une neige abondante et des journées plus longues.',
      },
      {
        q: 'Combien de temps à l’avance faut-il réserver un voyage en Laponie ?',
        a: 'Cela dépend de la saison. Noël et le Nouvel An sont les plus tendus : les igloos de verre et les chambres familiales du village du père Noël affichent souvent complet dès la fin août. La saison des aurores (de novembre à mars environ) est plus calme, mais les week-ends prisés se remplissent tôt. Le printemps, l’été et l’automne nécessitent rarement plusieurs mois d’anticipation. Les vols au départ d’Helsinki sont généralement les moins chers réservés quelques semaines à l’avance, hors pics de Noël, de Pâques et des vacances de février.',
      },
      {
        q: 'Les offres de dernière minute en Laponie en valent-elles la peine ?',
        a: 'Souvent oui, en dehors des quelques périodes de pointe. Lorsqu’un chalet, une place en traîneau à chiens ou une chasse aux aurores dispose de places invendues à l’approche de la date, les partenaires les libèrent au tarif en temps réel, et les excursions aurores et husky acceptent souvent les réservations jusqu’à environ 24 heures avant. Les exceptions sont Noël, le Nouvel An, Pâques (Pääsiäinen) et les vacances scolaires de février, où la demande est forte et où attendre n’aide guère.',
      },
      {
        q: 'Que comprend un forfait typique en Laponie ?',
        a: 'Cela varie selon le prestataire : lisez toujours ce qui est inclus. Un forfait courant associe quelques nuits d’hébergement à une ou deux activités, un safari en husky, une chasse aux aurores ou une excursion en motoneige, et parfois les transferts aéroport. Sur LaplandDeals, nous ne vendons pas de forfaits fermés : nous sélectionnons les éléments (vols, hébergements, activités, location de voiture) et vous réservez chacun au tarif en temps réel du partenaire, sans frais d’intermédiaire.',
      },
      {
        q: 'Comment trouver de vraies réductions en Laponie ?',
        a: 'Comparez le tarif en temps réel du partenaire au prix habituel de l’hébergement ou du prestataire, plutôt que de vous fier à un pourcentage annoncé. Voyagez en moyenne saison ou en été, logez un peu à l’écart des stations les plus fréquentées et réservez les activités directement sur des plateformes de confiance. Chaque prix sur LaplandDeals renvoie directement au tarif actuel du partenaire, nous n’inventons jamais de pourcentages ni de comptes à rebours factices.',
      },
    ],
  },
  related: {
    eyebrow: 'Où aller ensuite',
    title: 'Plus du réseau #LaplandVibes.',
    lead: 'Des sites jumeaux qui approfondissent un aspect du voyage en Laponie. Chacun s’ouvre dans un nouvel onglet.',
    links: [
      { anchor: 'offres d’hôtels et forfaits', blurb: 'Igloos de verre, suites sous les aurores boréales et complexes familiaux dans toute la Laponie finlandaise.' },
      { anchor: 'offres sur les activités et safaris', blurb: 'Safaris en husky, chasses aux aurores, excursions en motoneige et fermes de rennes avec disponibilité en temps réel.' },
      { anchor: 'circuits tout compris', blurb: 'Itinéraires guidés de plusieurs jours qui réunissent hébergements, transferts et activités.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ITALIAN (Italiano, forma cortese "Lei")
// ─────────────────────────────────────────────────────────────────────────────
const it: SectionCopy = {
  nav: {
    hotels: 'Hotel',
    activities: 'Attività',
    flights: 'Voli',
    cars: 'Autonoleggio',
    packages: 'Pacchetti',
    summer: 'Estate',
    tonightsCta: 'Offerte stanotte',
  },
  hero: {
    eyebrow: 'Selezionato · Di stagione · Stagione delle aurore',
    h1Line1Italic: 'Le offerte last minute',
    h1Line1Bold: '',
    h1Line2: 'più economiche della Lapponia.',
    lead:
      "Selezione discreta di offerte last-minute per la Lapponia finlandese, notti in igloo di vetro sotto l'aurora, safari con husky, voli per Rovaniemi, noleggio auto 4x4 invernali. Tariffe partner in tempo reale; non inventiamo mai percentuali di sconto.",
    primary: 'Hotel stanotte',
    secondary: 'Tour delle aurore',
    eyebrowSummer: 'Selezionato · Di stagione · Sole di mezzanotte',
    leadSummer:
      "Selezione discreta di offerte per la Lapponia finlandese, baite sotto il sole di mezzanotte, trekking e SUP, crociere sui laghi, voli per Rovaniemi, noleggio auto estivo. Tariffe partner in tempo reale; non inventiamo mai percentuali di sconto.",
    secondarySummer: 'Sole di mezzanotte',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Tariffe partner in tempo reale',
    leadRest:
      ' · aggiornate ad ogni clic. Non inventiamo percentuali, i partner mostrano la tariffa di oggi.',
    cta: 'Hotel stanotte →',
  },
  pulse: {
    eyebrow: 'Polso di oggi',
    titleItalic: 'Cosa',
    titleRest: 'sta succedendo in Lapponia adesso.',
    lead:
      'Fatti stagionali concreti, niente conti alla rovescia inventati. Aggiorniamo non appena la situazione cambia.',
    items: [
      {
        when: 'Proprio adesso',
        title: "Sole di mezzanotte, le tariffe più basse dell'anno",
        body: "Fino a fine luglio il sole tramonta a malapena. Le baite sul lago restano ben sotto i prezzi invernali e gli stessi fjell esauriti a febbraio sono deserti. Il miglior rapporto qualità-prezzo dell'anno.",
      },
      {
        when: 'Da adesso ad agosto',
        title: 'Stagione di trekking e acqua',
        body: "Il Pallas-Yllästunturi e i fjell orientali sono asciutti e aperti. Giornate lunghe per trekking, SUP e nuotate nel lago. Le zanzare si attenuano nel corso di agosto; per fine giugno portate una retina da testa.",
      },
      {
        when: '5–15 set.',
        title: "Ruska: il foliage autunnale al culmine, in fretta",
        body: "La betulla nana diventa oro in circa tre giorni. Le baite sono ancora accessibili e l'aria è la più pulita d'Europa (WMO). Con le notti che si fanno più buie torna anche l'aurora boreale.",
      },
      {
        when: 'Natale 2026',
        title: 'Già molto prenotato',
        body: "Gli igloo di vetro e le camere familiari del Villaggio di Babbo Natale chiudono alle prenotazioni di solito a fine agosto. Cene di Natale e slot per le slitte di renne: in genere esauriti entro ottobre.",
      },
      {
        when: 'Fascia ottimale per le tariffe',
        title: "4-8 settimane prima da Helsinki",
        body: "I voli A/R Finnair e Norwegian HEL→Lapponia scendono nella fascia 89-129 € se prenotati 4-8 settimane prima, esclusi i picchi di Natale, Pasqua e febbraio.",
      },
      {
        when: 'Da settembre',
        title: "Riparte la stagione dell'aurora boreale",
        body: "La finestra attiva va all'incirca da metà settembre a inizio aprile. Saariselkä, Inari e Utsjoki hanno i tassi di aurora visibile più alti. Le cacce si cancellano spesso fino a 24 h prima, quindi sono facili da aggiungere all'ultimo.",
      },
    ],
  },
  sections: {
    pickEyebrow: 'Selezione della redazione',
    pickTitle: 'Selezionate con discrezione per la stagione che verrà.',
    pickLead:
      "Posti che vale la pena consigliare a un amico. Ogni scheda collega alla tariffa partner di oggi.",
    pickCta: 'Tutti gli hotel',

    categoriesEyebrow: 'Sfoglia per categoria',
    categoriesTitle: 'Trovi l\'offerta Lapponia che fa per Lei.',

    lastMinEyebrow: 'Finestra last-minute',
    lastMinTitle: 'Parte nelle prossime due settimane?',
    lastMinLead:
      "Notti in baita, slot husky e cacce all'aurora che spesso hanno aperture last-minute. Disponibilità partner in tempo reale, aggiornata ad ogni clic.",

    summerEyebrow: 'Sole di mezzanotte · 6 giugno – 7 luglio',
    summerTitle: "L'estate in Lapponia è l'offerta nascosta.",
    summerLead:
      "32 giorni in cui il sole non tramonta. Baite sul lago a una frazione delle tariffe di dicembre. Picco trekking fine agosto, aria pulita, niente zanzare, ruska dorato.",
    summerCta: "Sfoglia l'estate",

    everythingEyebrow: 'Tutto',
    everythingTitle: 'Il catalogo di oggi.',
  },
  tiles: [
    { label: 'Hotel & baite', hint: 'Igloo di vetro · A bordo pista · Lodge nella natura' },
    { label: 'Attività', hint: 'Husky · Aurora · Motoslitta · Renne' },
    { label: 'Voli', hint: 'Helsinki per Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Autonoleggio', hint: '4x4 · Gomme chiodate · Ritiro in aeroporto' },
    { label: 'Pacchetti', hint: 'Settimana aurora · Famiglie · Weekend' },
    { label: 'Estate', hint: 'Sole di mezzanotte · Trekking · Baite sul lago' },
  ],
  card: {
    livePrices: 'Prezzi in tempo reale',
    seeDeals: 'Vedi offerte',
    browse: 'Esplora',
    flags: {
      'last-minute': 'Last minute',
      'end-of-season': 'Fine stagione',
      summer: 'Sole di mezzanotte',
      package: 'Più giorni',
      'editor-pick': 'Scelta della redazione',
    },
  },
  trust: [
    {
      title: 'Selezione onesta',
      body: 'Tariffe partner in tempo reale. Mai percentuali inventate o falsi conti alla rovescia.',
    },
    {
      title: 'Rivisto dai locali',
      body: 'Selezionato da persone che viaggiano e scrivono dalla Lapponia finlandese.',
    },
    {
      title: 'Parte di #LaplandVibes',
      body: '23+ siti gemelli. Un solo ecosistema, una sola fonte.',
    },
  ],
  newsletter: {
    kicker: 'La newsletter #LaplandVibes',
    titleItalic: 'Cogli le offerte',
    titleRest: 'prima che spariscano.',
    lead:
      "Prezzi last-minute della Lapponia, ribassi di fine stagione sulle baite e finestre del sole di mezzanotte che altrimenti perderebbe.",
    benefits: [
      {
        title: 'Tariffe partner reali',
        body: 'Tariffe in tempo reale al momento del clic. Nessuna percentuale inventata.',
      },
      {
        title: 'Ribassi last-minute',
        body: 'Notti in baita sotto soglia, settimane di sci che si riempiono, slot husky fuori stagione.',
      },
      {
        title: 'Estate e sole di mezzanotte',
        body: 'La finestra di 32 giorni dal 6 giugno, stagione diversa, offerte diverse.',
      },
      {
        title: 'Solo quando conta',
        body: 'Un riepilogo, non un torrente. Link di disiscrizione in ogni invio.',
      },
    ],
    placeholder: 'Il Suo indirizzo e-mail',
    cta: 'Ricevi le offerte',
    sending: 'Invio in corso…',
    okTitle: 'È nella lista.',
    okBody: 'L\'e-mail di benvenuto è in arrivo, controlli la Sua casella di posta.',
    fineprint: 'Solo quando c\'è davvero qualcosa che vale la pena segnalare. Disiscrizione in un clic. Non condividiamo mai il Suo indirizzo.',
    error: 'Impossibile iscrivere ora. Riprovi tra poco.',
  },
  hotelsPage: {
    eyebrow: 'Hotel & baite',
    h1Italic: 'Hotel in Lapponia',
    h1: 'tariffe in tempo reale, stanotte.',
    sub:
      "Igloo di vetro sotto la fascia aurorale, hotel a bordo pista a Levi, lodge nella natura a Ylläs, hotel per famiglie a Rovaniemi. Confronti le tariffe di stanotte su Hotels.com.",
    seoTitle: 'Offerte hotel Lapponia, Igloo di vetro, pista, baite',
    seoDesc:
      'Tariffe Hotels.com in tempo reale per igloo di vetro, soggiorni ski-in, hotel per famiglie e lodge nella natura in tutta la Lapponia finlandese.',
    bottomTitle: 'Non trova la Sua destinazione?',
    bottomLead: 'Cerchi qualsiasi località della Lapponia direttamente su Hotels.com.',
    bottomCta: 'Sfoglia tutti gli hotel della Lapponia →',
  },
  activitiesPage: {
    eyebrow: 'Attività',
    h1Italic: 'Attività in Lapponia',
    h1: 'disponibilità in tempo reale.',
    sub:
      "Safari con husky, cacce all'aurora, spedizioni in motoslitta, visite a fattorie di renne, pesca sul ghiaccio. Disponibilità in tempo reale su GetYourGuide, niente timer falsi, niente percentuali inventate.",
    seoTitle: 'Offerte attività Lapponia, Husky, aurora, motoslitta',
    seoDesc:
      "Tariffe GetYourGuide in tempo reale su safari husky, cacce all'aurora, motoslitte, fattorie di renne e pesca sul ghiaccio in Lapponia finlandese.",
    bottomTitle: 'Sfogli il catalogo completo della Lapponia',
    bottomLead: '900+ tour, escursioni giornaliere e avventure di più giorni su GetYourGuide.',
    bottomCta: 'Tutte le attività in Lapponia →',
  },
  flightsPage: {
    eyebrow: 'Voli',
    h1Italic: 'Voli per la Lapponia',
    h1: 'tariffe Trip.com in tempo reale.',
    sub:
      "Helsinki verso ogni porta della Lapponia, già compilati e con date. Clicchi per le tariffe reali di Finnair e Norwegian.",
    seoTitle: 'Voli per la Lapponia, Offerte Trip.com da Helsinki',
    seoDesc:
      'Tariffe voli Trip.com in tempo reale: Helsinki per Rovaniemi, Kittilä, Ivalo, Kuusamo e Kemi. Voli diretti Finnair e Norwegian.',
    bottomTitle: 'Parte da fuori della Finlandia?',
    bottomLead: 'Cerchi qualsiasi origine verso qualsiasi aeroporto della Lapponia su Trip.com.',
    bottomCta: 'Apri la ricerca voli Trip.com →',
  },
  carsPage: {
    eyebrow: 'Autonoleggio',
    h1Italic: 'Auto pronte per l\'inverno',
    h1: 'tariffe partner in tempo reale.',
    sub:
      "Gomme chiodate, 4x4, chilometraggio libero per inseguire l'aurora. Ritiro in ogni aeroporto della Lapponia, confronti su EconomyBookings.",
    seoTitle: 'Offerte autonoleggio Lapponia, Gomme chiodate, 4x4',
    seoDesc:
      "Tariffe EconomyBookings in tempo reale sull'autonoleggio negli aeroporti di Rovaniemi, Kittilä, Ivalo e Kuusamo. Gomme chiodate incluse per la guida invernale.",
    bottomTitle: 'Ritiro a Helsinki o riconsegna in altra città?',
    bottomLead: 'EconomyBookings supporta noleggi a senso unico tra la maggior parte degli aeroporti finlandesi.',
    bottomCta: 'Apri EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Pacchetti',
    h1Italic: 'Componga il Suo',
    h1: 'viaggio in Lapponia.',
    sub:
      "Non vendiamo pacchetti chiusi. Selezioniamo i moduli, voli, alloggio, giornata husky, tour aurora, e Lei li prenota separatamente alle tariffe partner in tempo reale. Nessuna provvigione di intermediario.",
    seoTitle: 'Offerte pacchetti Lapponia, Settimana aurora, weekend',
    seoDesc:
      'Ispirazioni di itinerario di più giorni in Lapponia: settimana aurora a Saariselkä, vacanza in famiglia a Rovaniemi, weekend. Ogni elemento si prenota a parte.',
    curatedTitle: 'Ispirazioni di itinerario selezionate',
    pairTitle: 'Da abbinare al Suo alloggio',
    pairLead: 'I moduli che la maggior parte dei viaggiatori aggiunge a un soggiorno di 4-7 notti in Lapponia.',
  },
  summerPage: {
    eyebrow: 'Sole di mezzanotte · 6 giugno – 7 luglio',
    h1Italic: "L'estate in Lapponia",
    h1: "è l'offerta nascosta.",
    sub:
      "32 giorni in cui il sole non tramonta. Baite sul lago a una frazione delle tariffe di dicembre. Picco trekking fine agosto, aria pulita, niente zanzare, ruska dorato.",
    seoTitle: 'Offerte estate Lapponia, Sole di mezzanotte e trekking',
    seoDesc:
      '32 giorni di sole di mezzanotte in Lapponia finlandese (6 giugno – 7 luglio). Baite, trekking nel parco Pallas-Yllästunturi e alloggi estivi sul lago.',
    offersTitle: 'Offerte estate, tariffe partner in tempo reale',
    offersFallback: "Stiamo selezionando le offerte estive, torni a trovarci.",
    reasonsTitle: 'Tre veri motivi per cui l\'estate costa meno',
    reasons: [
      {
        title: 'La domanda cala a maggio',
        body: "Finisce la stagione dell'aurora, chiudono gli impianti sciistici. Baite piene a febbraio si liberano per intere settimane.",
      },
      {
        title: 'Tutta la Lapponia è Sua',
        body: 'Le stesse colline, gli stessi laghi, la stessa natura selvaggia, senza la maggiorazione dei viaggi organizzati.',
      },
      {
        title: 'Luce infinita',
        body: 'Può fare trekking a mezzanotte, nuotare alle 2 del mattino. Ogni giornata si allunga.',
      },
    ],
    cta: 'Cerca una settimana estiva →',
  },
  faq: {
    eyebrow: 'Buono a sapersi',
    title: 'Offerte in Lapponia, le tue domande, le nostre risposte.',
    lead: 'Risposte oneste su quando partire, quando prenotare e cosa aspettarsi. Nessun prezzo inventato, nessuna falsa urgenza.',
    items: [
      {
        q: 'Qual è il periodo più economico per visitare la Lapponia?',
        a: 'La tarda primavera e l’estate, all’incirca da maggio ad agosto, sono il periodo più tranquillo ed economico. La stagione dell’aurora è finita e gli impianti sciistici sono chiusi, così le baite in riva al lago che a febbraio erano al completo restano vuote. All’interno dell’inverno, le settimane di media stagione (da metà marzo a metà aprile) costano meno dei picchi di Natale e delle vacanze di febbraio, con neve abbondante e giornate più lunghe.',
      },
      {
        q: 'Con quanto anticipo conviene prenotare un viaggio in Lapponia?',
        a: 'Dipende dalla stagione. Natale e Capodanno sono i periodi più tirati: gli igloo di vetro e le camere familiari del Villaggio di Babbo Natale spesso esauriscono già a fine agosto. La stagione dell’aurora (all’incirca da novembre a marzo) è più tranquilla, ma i weekend più richiesti si riempiono presto. Primavera, estate e autunno raramente richiedono mesi di anticipo. I voli da Helsinki sono di solito più economici se prenotati con qualche settimana di margine, al di fuori dei picchi di Natale, Pasqua e delle vacanze di febbraio.',
      },
      {
        q: 'Le offerte last-minute per la Lapponia valgono la pena?',
        a: 'Spesso sì, al di fuori dei pochi periodi di picco. Quando una baita, un posto in slitta trainata dagli husky o una caccia all’aurora hanno spazio invenduto a ridosso della data, i partner lo rilasciano alla tariffa in tempo reale, e le escursioni di aurora e husky accettano spesso prenotazioni fino a circa 24 ore prima. Le eccezioni sono Natale, Capodanno, Pasqua (Pääsiäinen) e le vacanze scolastiche di febbraio, quando la domanda è alta e aspettare raramente aiuta.',
      },
      {
        q: 'Cosa include un tipico pacchetto per la Lapponia?',
        a: 'Varia da operatore a operatore, quindi leggi sempre cosa è incluso. Un pacchetto comune abbina alcune notti di soggiorno a una o due attività, un safari con gli husky, una caccia all’aurora o un’escursione in motoslitta, e a volte i trasferimenti dall’aeroporto. Su LaplandDeals non vendiamo pacchetti chiusi: selezioniamo gli elementi (voli, soggiorni, attività, noleggio auto) e tu prenoti ciascuno alla tariffa in tempo reale del partner, senza commissioni di intermediazione.',
      },
      {
        q: 'Come si trovano sconti autentici per la Lapponia?',
        a: 'Confronta la tariffa in tempo reale del partner con il prezzo abituale della struttura o dell’operatore, invece di fidarti di una percentuale in evidenza. Viaggia in media stagione o in estate, soggiorna un po’ fuori dai centri più affollati e prenota le attività direttamente su piattaforme affidabili. Ogni prezzo su LaplandDeals rimanda direttamente alla tariffa attuale del partner: non inventiamo mai percentuali né mostriamo conti alla rovescia falsi.',
      },
    ],
  },
  related: {
    eyebrow: 'Dove andare poi',
    title: 'Altro dalla rete #LaplandVibes.',
    lead: 'Siti gemelli che approfondiscono un aspetto del viaggio in Lapponia. Ognuno si apre in una nuova scheda.',
    links: [
      { anchor: 'offerte hotel e pacchetti', blurb: 'Igloo di vetro, suite sotto l’aurora boreale e resort per famiglie in tutta la Lapponia finlandese.' },
      { anchor: 'offerte su attività e safari', blurb: 'Safari con gli husky, cacce all’aurora, escursioni in motoslitta e fattorie di renne con disponibilità in tempo reale.' },
      { anchor: 'pacchetti tour tutto incluso', blurb: 'Itinerari guidati di più giorni che uniscono soggiorni, trasferimenti e attività.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DUTCH (Nederlands, beleefdheidsvorm "u")
// ─────────────────────────────────────────────────────────────────────────────
const nl: SectionCopy = {
  nav: {
    hotels: 'Hotels',
    activities: 'Activiteiten',
    flights: 'Vluchten',
    cars: 'Autoverhuur',
    packages: 'Pakketten',
    summer: 'Zomer',
    tonightsCta: 'Aanbiedingen vannacht',
  },
  hero: {
    eyebrow: 'Geselecteerd · Nu in het seizoen · Noorderlichtseizoen',
    h1Line1Italic: 'De goedkoopste last-minute',
    h1Line1Bold: '',
    h1Line2: 'deals van Lapland.',
    lead:
      "Rustige selectie van last-minute aanbiedingen voor Fins Lapland, glazen-iglo-overnachtingen onder het noorderlicht, husky-safari's, vluchten naar Rovaniemi, 4x4-winterautoverhuur. Live partnerprijzen; we verzinnen nooit kortingspercentages.",
    primary: 'Hotels vannacht',
    secondary: 'Noorderlichttochten',
    eyebrowSummer: 'Geselecteerd · Nu in het seizoen · Middernachtszon',
    leadSummer:
      "Rustige selectie van aanbiedingen voor Fins Lapland, hutten onder de middernachtszon, wandelen en suppen, meercruises, vluchten naar Rovaniemi, zomerautoverhuur. Live partnerprijzen; we verzinnen nooit kortingspercentages.",
    secondarySummer: 'Middernachtszon',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Live partnerprijzen',
    leadRest:
      ' · ververst bij elke klik. We verzinnen nooit kortingen, partners tonen het tarief van vandaag.',
    cta: 'Hotels vannacht →',
  },
  pulse: {
    eyebrow: 'Pols van vandaag',
    titleItalic: 'Wat',
    titleRest: 'er nu in Lapland gebeurt.',
    lead:
      "Concrete seizoensfeiten, geen verzonnen aftellers. We werken het bij zodra de situatie verandert.",
    items: [
      {
        when: 'Nu',
        title: 'Middernachtzon, de laagste tarieven van het jaar',
        body: 'Tot eind juli gaat de zon nauwelijks onder. Hutten aan het meer liggen ruim onder de winterprijzen, en dezelfde fjells die in februari uitverkocht waren, zijn nu stil. Het beste prijsmoment van het jaar.',
      },
      {
        when: 'Nu tot en met augustus',
        title: 'Wandel- en waterseizoen',
        body: 'Pallas-Yllästunturi en de oostelijke fjells zijn droog en open. Lange dagen om te wandelen, te suppen en in het meer te zwemmen. De muggen nemen in de loop van augustus af; neem voor eind juni een hoofdnetje mee.',
      },
      {
        when: '5–15 sept.',
        title: 'Ruska: herfstkleuren pieken razendsnel',
        body: "De dwergberk kleurt in zo'n drie dagen goudgeel. Hutten zijn nog betaalbaar en de lucht is de schoonste van Europa (WMO). Naarmate de nachten donkerder worden, keert ook het noorderlicht terug.",
      },
      {
        when: 'Kerst 2026',
        title: 'Al druk geboekt',
        body: "Glazen iglo's en familiekamers in het Kerstmandorp sluiten meestal eind augustus voor boekingen. Kerstavond-diners en rendierslede-slots: doorgaans weg vóór oktober.",
      },
      {
        when: 'Beste tariefvenster',
        title: '4-8 weken vooraf vanuit Helsinki',
        body: 'Finnair- en Norwegian-retourvluchten HEL→Lapland zakken naar € 89-129 als je 4-8 weken vooraf boekt, buiten de pieken van Kerst, Pasen en de februarivakantie.',
      },
      {
        when: 'Vanaf september',
        title: 'Het noorderlichtseizoen begint weer',
        body: 'Het actieve venster loopt ruwweg van half september tot begin april. Saariselkä, Inari en Utsjoki hebben de hoogste kans op zichtbaar noorderlicht. Een jacht wordt meestal tot 24 u vooraf geannuleerd, dus je voegt hem makkelijk last-minute toe.',
      },
    ],
  },
  sections: {
    pickEyebrow: 'Keuze van de redactie',
    pickTitle: 'Rustig geselecteerd voor het komende seizoen.',
    pickLead:
      "Plekken die u zou aanraden aan een vriend. Elke kaart linkt naar het partnertarief van vandaag.",
    pickCta: 'Alle hotels',

    categoriesEyebrow: 'Blader op categorie',
    categoriesTitle: 'Vind uw type Lapland-aanbieding.',

    lastMinEyebrow: 'Last-minute venster',
    lastMinTitle: 'Vertrekt u binnen twee weken?',
    lastMinLead:
      "Hutnachten, husky-slots en noorderlicht-jachten die vaak last-minute openingen hebben. Live partnerbeschikbaarheid, ververst bij elke klik.",

    summerEyebrow: 'Middernachtszon · 6 juni – 7 juli',
    summerTitle: "De zomer in Lapland is de verborgen aanbieding.",
    summerLead:
      "32 dagen zonder zonsondergang. Hutten aan het meer voor een fractie van de decembertarieven. Wandelpiek eind augustus, schone lucht, geen muggen, gouden ruska.",
    summerCta: 'Bekijk zomer',

    everythingEyebrow: 'Alles',
    everythingTitle: 'De catalogus van vandaag.',
  },
  tiles: [
    { label: 'Hotels & hutten', hint: "Glazen iglo's · Aan de piste · Wildernislodges" },
    { label: 'Activiteiten', hint: 'Husky · Noorderlicht · Sneeuwscooter · Rendier' },
    { label: 'Vluchten', hint: 'Helsinki naar Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Autoverhuur', hint: '4x4 · Spijkerbanden · Ophalen op de luchthaven' },
    { label: 'Pakketten', hint: 'Noorderlicht-week · Gezinsvakanties · Weekenduitjes' },
    { label: 'Zomer', hint: 'Middernachtszon · Wandelen · Hutten aan het meer' },
  ],
  card: {
    livePrices: 'Live prijzen',
    seeDeals: 'Bekijk aanbiedingen',
    browse: 'Bekijken',
    flags: {
      'last-minute': 'Last minute',
      'end-of-season': 'Einde seizoen',
      summer: 'Middernachtszon',
      package: 'Meerdaags',
      'editor-pick': 'Keuze van de redactie',
    },
  },
  trust: [
    {
      title: 'Eerlijke selectie',
      body: 'Live partnerprijzen. Nooit verzonnen percentages of valse aftellers.',
    },
    {
      title: 'Beoordeeld door lokale mensen',
      body: 'Geselecteerd door mensen die reizen en schrijven vanuit Fins Lapland.',
    },
    {
      title: 'Onderdeel van #LaplandVibes',
      body: '23+ zustersites. Eén ecosysteem, één bron van waarheid.',
    },
  ],
  newsletter: {
    kicker: 'De #LaplandVibes-nieuwsbrief',
    titleItalic: 'Pak de aanbiedingen',
    titleRest: 'voordat ze weg zijn.',
    lead:
      "Last-minute Lapland-prijzen, eindseizoenskortingen op hutten en venstervolledige middernachtszon die u anders zou missen.",
    benefits: [
      {
        title: 'Echte partnerprijzen',
        body: 'Live tarieven op het moment dat u klikt. Geen verzonnen percentages.',
      },
      {
        title: 'Last-minute prijsdalingen',
        body: 'Hutnachten onder de bodem, vollopende skiweken, husky-slots buiten het seizoen.',
      },
      {
        title: 'Zomer en middernachtszon',
        body: 'Het venster van 32 dagen vanaf 6 juni, ander seizoen, andere aanbiedingen.',
      },
      {
        title: 'Wekelijkse samenvatting',
        body: 'Een samenvatting, geen stortvloed. Uitschrijflink in elke verzending.',
      },
    ],
    placeholder: 'Uw e-mailadres',
    cta: 'Ontvang de aanbiedingen',
    sending: 'Versturen…',
    okTitle: 'U staat op de lijst.',
    okBody: 'De welkomstmail is onderweg, controleer uw inbox.',
    fineprint: 'Alleen wanneer er echt iets te melden is. Met één klik uit te schrijven. Wij delen uw adres nooit.',
    error: 'Inschrijven lukt nu niet. Probeer het zo opnieuw.',
  },
  hotelsPage: {
    eyebrow: 'Hotels & hutten',
    h1Italic: 'Lapland-hotels',
    h1: 'live prijzen, vannacht.',
    sub:
      "Glazen iglo's onder de noorderlicht-band, hotels aan de piste in Levi, wildernislodges in Ylläs, gezinshotels in Rovaniemi. Vergelijk de tarieven van vannacht op Hotels.com.",
    seoTitle: "Lapland-hotelaanbiedingen, Glazen iglo's, piste, hutten",
    seoDesc:
      "Live Hotels.com-prijzen voor glazen iglo's, ski-in-verblijven, gezinshotels en wildernislodges in heel Fins Lapland. Last-minute en eindseizoens-hutnachten.",
    bottomTitle: 'Ziet u uw bestemming niet?',
    bottomLead: 'Zoek elke Lapland-stad direct op Hotels.com.',
    bottomCta: 'Alle Lapland-hotels bekijken →',
  },
  activitiesPage: {
    eyebrow: 'Activiteiten',
    h1Italic: 'Lapland-activiteiten',
    h1: 'realtime beschikbaarheid.',
    sub:
      "Husky-safari's, noorderlicht-jachten, sneeuwscooter-expedities, rendierbedrijven, ijsvissen. Live beschikbaarheid op GetYourGuide, geen valse timers, geen verzonnen percentages.",
    seoTitle: 'Lapland-activiteiten, Husky, noorderlicht, sneeuwscooter',
    seoDesc:
      "Live GetYourGuide-prijzen voor husky-safari's, noorderlicht-jachten, sneeuwscootertours, rendierbedrijven en ijsvissen in heel Fins Lapland. Last-minute slots.",
    bottomTitle: 'Blader door de volledige Lapland-catalogus',
    bottomLead: '900+ tours, dagtrips en meerdaagse avonturen op GetYourGuide.',
    bottomCta: 'Alle Lapland-activiteiten →',
  },
  flightsPage: {
    eyebrow: 'Vluchten',
    h1Italic: 'Vluchten naar Lapland',
    h1: 'live Trip.com-tarieven.',
    sub:
      "Helsinki naar elke Lapland-luchthaven, vooraf ingevuld en gedateerd. Klik door naar echte Finnair- en Norwegian-tarieven.",
    seoTitle: 'Vluchten naar Lapland, Trip.com-deals vanuit Helsinki',
    seoDesc:
      'Live Trip.com-vluchtprijzen: Helsinki naar Rovaniemi, Kittilä, Ivalo, Kuusamo en Kemi. Directe Finnair- en Norwegian-tarieven, vooraf ingevuld.',
    bottomTitle: 'Reist u van buiten Finland?',
    bottomLead: 'Zoek elke oorsprong naar elke Lapland-luchthaven op Trip.com.',
    bottomCta: 'Open Trip.com vluchtenzoekopdracht →',
  },
  carsPage: {
    eyebrow: 'Autoverhuur',
    h1Italic: "Winterklare auto's",
    h1: 'live partnerprijzen.',
    sub:
      "Spijkerbanden, 4x4, vrij bereik voor noorderlicht-jachten. Ophalen op elke Lapland-luchthaven, vergelijk op EconomyBookings.",
    seoTitle: 'Lapland-autoverhuur, Spijkerbanden, 4x4, luchthaven',
    seoDesc:
      "Live EconomyBookings-prijzen voor autoverhuur op de luchthavens van Rovaniemi, Kittilä, Ivalo en Kuusamo. Spijkerbanden inbegrepen voor winterrijden.",
    bottomTitle: 'Helsinki ophalen of enkele reis inleveren?',
    bottomLead: 'EconomyBookings ondersteunt enkele-reis huur tussen de meeste Finse luchthavens.',
    bottomCta: 'Open EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Pakketten',
    h1Italic: 'Stel uw eigen',
    h1: 'Lapland-reis samen.',
    sub:
      "We verkopen geen vaste pakketten. We selecteren de bouwstenen, vluchten, verblijf, husky-dag, noorderlicht-tour, die u apart boekt tegen de live partnertarieven. Geen tussenmarge.",
    seoTitle: 'Lapland-pakketten, Noorderlicht-week, gezin, weekend',
    seoDesc:
      'Meerdaagse Lapland-reisideeën: noorderlicht-week in Saariselkä, gezinsuitje in Rovaniemi, weekenduitjes. Elk onderdeel apart geboekt tegen het live tarief.',
    curatedTitle: 'Geselecteerde reisideeën',
    pairTitle: 'Te combineren met uw verblijf',
    pairLead: 'De modules die de meeste reizigers toevoegen aan een 4-7-daags Lapland-verblijf.',
  },
  summerPage: {
    eyebrow: 'Middernachtszon · 6 juni – 7 juli',
    h1Italic: 'De zomer in Lapland',
    h1: 'is de verborgen aanbieding.',
    sub:
      "32 dagen zonder zonsondergang. Hutten aan het meer voor een fractie van de decembertarieven. Wandelpiek eind augustus, schone lucht, geen muggen, gouden ruska.",
    seoTitle: 'Lapland-zomeraanbiedingen, Middernachtszon, wandelen',
    seoDesc:
      '32 dagen middernachtszon in Fins Lapland (6 juni – 7 juli). Hutaanbiedingen onder de middernachtszon, wandelen in Pallas-Yllästunturi en zomerverblijven.',
    offersTitle: 'Zomeraanbiedingen, live partnerprijzen',
    offersFallback: "We selecteren de zomeraanbiedingen, kom binnenkort terug.",
    reasonsTitle: 'Drie echte redenen waarom de zomer minder kost',
    reasons: [
      {
        title: 'De vraag valt in mei terug',
        body: "Het noorderlicht-seizoen eindigt, skiresorts sluiten. Hutten die in februari vol zaten, komen weekenlang vrij.",
      },
      {
        title: 'Heel Lapland is van u',
        body: 'Dezelfde heuvels, meren, wildernis, zonder de marge van georganiseerde reizen.',
      },
      {
        title: 'Eindeloos daglicht',
        body: 'U kunt om middernacht wandelen, om 2 uur \'s nachts zwemmen. Elke dag rekt op.',
      },
    ],
    cta: 'Zoek een zomerweek →',
  },
  faq: {
    eyebrow: 'Goed om te weten',
    title: 'Lapland-aanbiedingen, uw vragen beantwoord.',
    lead: 'Eerlijke antwoorden over wanneer u gaat, wanneer u boekt en wat u kunt verwachten. Geen verzonnen prijzen, geen nep-urgentie.',
    items: [
      {
        q: 'Wanneer is de goedkoopste tijd om Lapland te bezoeken?',
        a: 'Het late voorjaar en de zomer, grofweg van mei tot augustus, zijn het rustigst en het voordeligst. Het noorderlichtseizoen is voorbij en de skigebieden zijn gesloten, zodat hutten aan het meer die in februari volgeboekt waren nu leegstaan. Binnen de winter zijn de tussenseizoensweken (half maart tot half april) goedkoper dan de pieken rond Kerst en de februarivakantie, met volop sneeuw en langere dagen.',
      },
      {
        q: 'Hoe ver van tevoren moet ik een Lapland-reis boeken?',
        a: 'Dat hangt van het seizoen af. Kerst en Oud en Nieuw zijn het krapst: glasiglo’s en gezinskamers in het Kerstmandorp zitten vaak al eind augustus vol. Het noorderlichtseizoen (ongeveer november tot maart) is rustiger, maar populaire weekenden raken vroeg gevuld. Voor lente, zomer en herfst zijn maanden vooruitboeken zelden nodig. Vluchten vanuit Helsinki zijn doorgaans het goedkoopst als u enkele weken van tevoren boekt, buiten de pieken van Kerst, Pasen en de februarivakantie.',
      },
      {
        q: 'Zijn last-minute Lapland-aanbiedingen de moeite waard?',
        a: 'Vaak wel, buiten de paar piekperiodes. Wanneer een hut, een husky-plek of een noorderlichttocht vlak voor de datum nog onverkochte ruimte heeft, geven partners die vrij tegen de live prijs, en noorderlicht- en huskytochten nemen vaak tot ongeveer 24 uur van tevoren nog boekingen aan. De uitzonderingen zijn Kerst, Oud en Nieuw, Pasen (Pääsiäinen) en de februarivakantie, wanneer de vraag hoog is en wachten zelden helpt.',
      },
      {
        q: 'Wat zit er in een typisch Lapland-pakket?',
        a: 'Dat verschilt per aanbieder, dus lees altijd wat is inbegrepen. Een veelvoorkomend pakket combineert enkele overnachtingen met een of twee activiteiten, een husky-safari, een noorderlichttocht of een sneeuwscootertocht, en soms luchthaventransfers. Op LaplandDeals verkopen wij geen vaste pakketten: wij stellen de bouwstenen samen (vluchten, verblijven, activiteiten, autohuur) en u boekt elk afzonderlijk tegen de live prijs van de partner, zonder bemiddelingskosten.',
      },
      {
        q: 'Hoe vind ik echte kortingen voor Lapland?',
        a: 'Vergelijk de live prijs van de partner met het gewone tarief van de accommodatie of aanbieder, in plaats van te vertrouwen op een opvallend percentage. Reis in het tussenseizoen of in de zomer, verblijf wat buiten de drukste oorden en boek activiteiten rechtstreeks via betrouwbare platforms. Elke prijs op LaplandDeals linkt direct naar het actuele tarief van de partner, wij verzinnen nooit percentages en tonen geen valse aftelklokken.',
      },
    ],
  },
  related: {
    eyebrow: 'Waarheen daarna',
    title: 'Meer uit het #LaplandVibes-netwerk.',
    lead: 'Zustersites die dieper ingaan op één onderdeel van een Lapland-reis. Elke link opent in een nieuw tabblad.',
    links: [
      { anchor: 'hotelaanbiedingen & pakketten', blurb: 'Glasiglo’s, noorderlichtsuites en gezinsresorts door heel Fins Lapland.' },
      { anchor: 'aanbiedingen voor activiteiten & safari’s', blurb: 'Husky-safari’s, noorderlichttochten, sneeuwscootertochten en rendierboerderijen met live beschikbaarheid.' },
      { anchor: 'all-inclusive rondreizen', blurb: 'Meerdaagse begeleide routes die verblijven, transfers en activiteiten samenbrengen.' },
    ],
  },
};

export const COPY: Record<Lang, SectionCopy> = { en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl };

/** Build the FooterDict the shared <Footer> component expects, in the given lang. */
export function footerDict(lang: Lang) {
  if (lang === 'en') {
    return {
      networkBadge: 'Finnish Lapland Network',
      tagline: 'The definitive digital home for Finnish Lapland travel.',
      groups: { stay: 'Stay', eatDrink: 'Eat & Drink', do: 'Do', explore: 'Explore', essentials: 'Essentials' },
      travelGuideKicker: 'Lapland Travel Guide',
      about: {
        eyebrow: 'About LaplandVibes',
        body: 'The definitive guide to Finnish Lapland, from the revontulet to the midnight sun. Curated experiences, insider tips, and the practical basics for your Arctic trip.',
        badge: 'Independently maintained · sources cited',
      },
      spottedError: { title: 'Spotted an Error?', body: "See something that needs fixing? Tell us, we'll correct it immediately.", cta: 'Report an Error →' },
      partner: { title: 'Partner With Us', body: 'Advertise or collaborate across 27 Lapland sites.', cta: 'Get in Touch →' },
      press: { title: 'Press & Media', body: 'Editorial partnerships and press kits.', cta: 'Press Enquiries →' },
      affiliate: 'This site contains affiliate links. If you book through these links, LaplandVibes may receive a commission at no extra cost to you.',
      copyright: '© {{year}} #LaplandVibes, Part of the #LaplandVibes Network',
      websiteBy: 'Website by Yrityspaketit.fi',
      legal: { privacy: 'Privacy Policy', cookie: 'Cookie Policy', terms: 'Terms of Use', contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Hotel Deals',
        staysCabins: 'Stays & Hutten',
        whereToStay: 'Where to Stay',
        familyFriendly: 'Family Friendly',
        localFood: 'Local Food',
        fineDining: 'Fine Dining',
        barsPubs: 'Bars & Pubs',
        activities: 'Activities',
        huskySafaris: 'Husky Safaris',
        skiResorts: 'Ski Resorts',
        snowmobileTours: 'Snowmobile Tours',
        spaWellness: 'Spa & Wellness',
        nightlife: 'Nightlife',
        natureParks: 'Nature & Parks',
        travelGuide: 'Travel Guide',
        christmas: 'Christmas in Lapland',
        giftsSouvenirs: 'Gifts & Souvenirs',
        travelBlog: 'Travel Blog',
        dealsOffers: 'Deals & Offers',
        transport: 'Transport',
        carRental: 'Car Rental',
        workInLapland: 'Work in Lapland',
      },
    }
  }
  if (lang === 'de') {
    return {
      networkBadge: 'Finnisch-Lappland-Netzwerk',
      tagline: 'Das umfassende digitale Zuhause für Reisen in Finnisch-Lappland.',
      groups: { stay: 'Unterkunft', eatDrink: 'Essen & Trinken', do: 'Aktivitäten', explore: 'Entdecken', essentials: 'Wesentliches' },
      travelGuideKicker: 'Lappland-Reiseführer',
      about: {
        eyebrow: 'Über LaplandVibes',
        body: 'Der umfassende Reiseführer zu Finnisch-Lappland, von den Nordlichtern bis zur Mitternachtssonne. Kuratierte Erlebnisse, Insider-Tipps und alles, was Sie für die Planung Ihres arktischen Abenteuers brauchen.',
        badge: 'Unabhängig gepflegt · Quellen zitiert',
      },
      spottedError: { title: 'Fehler entdeckt?', body: 'Sehen Sie etwas, das korrigiert werden muss? Sagen Sie uns Bescheid, wir korrigieren es sofort.', cta: 'Fehler melden →' },
      partner: { title: 'Mit uns kooperieren', body: 'Werbung oder Zusammenarbeit über 27 Lappland-Websites hinweg.', cta: 'Kontakt aufnehmen →' },
      press: { title: 'Presse & Medien', body: 'Redaktionelle Partnerschaften und Pressemappen.', cta: 'Presseanfragen →' },
      affiliate: 'Diese Website enthält Partnerlinks. Wenn Sie über diese Links buchen, erhält LaplandVibes möglicherweise eine Provision ohne Mehrkosten für Sie.',
      copyright: '© {{year}} #LaplandVibes, Teil des #LaplandVibes-Netzwerks',
      websiteBy: 'Website von Yrityspaketit.fi',
      legal: { privacy: 'Datenschutz', cookie: 'Cookie-Richtlinie', terms: 'Nutzungsbedingungen', contact: 'Kontakt' },
      siteLabels: {
        hotelDeals: 'Hotelangebote',
        staysCabins: 'Unterkünfte & Hütten',
        whereToStay: 'Wo übernachten',
        familyFriendly: 'Familienfreundlich',
        localFood: 'Lokale Küche',
        fineDining: 'Gehobene Küche',
        barsPubs: 'Bars & Pubs',
        activities: 'Aktivitäten',
        huskySafaris: 'Husky-Safaris',
        skiResorts: 'Skigebiete',
        snowmobileTours: 'Schneemobil-Touren',
        spaWellness: 'Spa & Wellness',
        nightlife: 'Nachtleben',
        natureParks: 'Natur & Parks',
        travelGuide: 'Reiseführer',
        christmas: 'Weihnachten in Lappland',
        giftsSouvenirs: 'Geschenke & Souvenirs',
        travelBlog: 'Reiseblog',
        dealsOffers: 'Angebote',
        transport: 'Transport',
        carRental: 'Mietwagen',
        workInLapland: 'Arbeiten in Lappland',
      },
    }
  }
  if (lang === 'ja') {
    return {
      networkBadge: 'フィンランド・ラップランドのネットワーク',
      tagline: 'フィンランド・ラップランド旅行の決定版デジタルガイド。',
      groups: { stay: '泊まる', eatDrink: '食事と飲み物', do: 'アクティビティ', explore: '探検する', essentials: '基本情報' },
      travelGuideKicker: 'ラップランド旅行ガイド',
      about: {
        eyebrow: 'LaplandVibesについて',
        body: 'フィンランド・ラップランドの決定版ガイド, オーロラから白夜まで。厳選された体験、インサイダーの情報、北極の冒険を計画するために必要なすべて。',
        badge: '独立運営 · 出典明記',
      },
      spottedError: { title: '誤りを見つけた場合', body: '修正が必要なものに気づきましたか?ご連絡ください、すぐに修正いたします。', cta: '誤りを報告 →' },
      partner: { title: 'パートナーシップ', body: '21以上のラップランド関連サイトでの広告や提携。', cta: 'お問い合わせ →' },
      press: { title: 'プレス・メディア', body: '編集パートナーシップとプレスキット。', cta: 'プレスのお問い合わせ →' },
      affiliate: 'このサイトにはアフィリエイトリンクが含まれます。リンク経由でご予約いただいた場合、追加費用なしでLaplandVibesに手数料が支払われることがあります。',
      copyright: '© {{year}} #LaplandVibes、#LaplandVibesネットワークの一部',
      websiteBy: 'ウェブサイト制作: Yrityspaketit.fi',
      legal: { privacy: 'プライバシーポリシー', cookie: 'クッキーポリシー', terms: '利用規約', contact: 'お問い合わせ' },
      siteLabels: {
        hotelDeals: 'ホテルのお得な情報',
        staysCabins: '宿泊施設とコテージ',
        whereToStay: '宿泊場所',
        familyFriendly: '家族向け',
        localFood: '地元の料理',
        fineDining: 'ファインダイニング',
        barsPubs: 'バーとパブ',
        activities: 'アクティビティ',
        huskySafaris: 'ハスキーサファリ',
        skiResorts: 'スキーリゾート',
        snowmobileTours: 'スノーモービルツアー',
        spaWellness: 'スパとウェルネス',
        nightlife: 'ナイトライフ',
        natureParks: '自然と国立公園',
        travelGuide: '旅行ガイド',
        christmas: 'ラップランドのクリスマス',
        giftsSouvenirs: 'ギフトとお土産',
        travelBlog: '旅行ブログ',
        dealsOffers: 'お得な情報',
        transport: '交通',
        carRental: 'レンタカー',
        workInLapland: 'ラップランドで働く',
      },
    }
  }
  if (lang === 'es') {
    return {
      networkBadge: 'Red de la Laponia finlandesa',
      tagline: 'La guía digital definitiva para viajar por la Laponia finlandesa.',
      groups: { stay: 'Dormir', eatDrink: 'Comer y beber', do: 'Hacer', explore: 'Explorar', essentials: 'Esenciales' },
      travelGuideKicker: 'Guía de viajes de Laponia',
      about: {
        eyebrow: 'Sobre LaplandVibes',
        body: 'La guía definitiva de la Laponia finlandesa, desde las auroras boreales hasta el sol de medianoche. Experiencias seleccionadas, consejos de iniciado y todo lo que necesita para planear su aventura ártica.',
        badge: 'Mantenido de forma independiente · fuentes citadas',
      },
      spottedError: { title: '¿Vio un error?', body: '¿Algo que haya que corregir? Avísenos, lo corregiremos enseguida.', cta: 'Reportar un error →' },
      partner: { title: 'Colabore con nosotros', body: 'Anuncie o colabore en 27 sitios sobre Laponia.', cta: 'Contactar →' },
      press: { title: 'Prensa y medios', body: 'Colaboraciones editoriales y kits de prensa.', cta: 'Consultas de prensa →' },
      affiliate: 'Este sitio contiene enlaces de afiliados. Si usted reserva a través de estos enlaces, LaplandVibes puede recibir una comisión sin coste adicional para usted.',
      copyright: '© {{year}} #LaplandVibes, Parte de la red #LaplandVibes',
      websiteBy: 'Sitio web de Yrityspaketit.fi',
      legal: { privacy: 'Política de privacidad', cookie: 'Política de cookies', terms: 'Términos de uso', contact: 'Contacto' },
      siteLabels: {
        hotelDeals: 'Ofertas de hoteles',
        staysCabins: 'Alojamientos y cabañas',
        whereToStay: 'Dónde alojarse',
        familyFriendly: 'En familia',
        localFood: 'Cocina local',
        fineDining: 'Alta cocina',
        barsPubs: 'Bares y pubs',
        activities: 'Actividades',
        huskySafaris: 'Safaris en husky',
        skiResorts: 'Estaciones de esquí',
        snowmobileTours: 'Tours en motonieve',
        spaWellness: 'Spa y bienestar',
        nightlife: 'Vida nocturna',
        natureParks: 'Naturaleza y parques',
        travelGuide: 'Guía de viaje',
        christmas: 'Navidad en Laponia',
        giftsSouvenirs: 'Regalos y recuerdos',
        travelBlog: 'Blog de viajes',
        dealsOffers: 'Ofertas',
        transport: 'Transporte',
        carRental: 'Alquiler de coches',
        workInLapland: 'Trabajar en Laponia',
      },
    }
  }
  if (lang === 'pt-BR') {
    return {
      networkBadge: 'Rede da Lapônia finlandesa',
      tagline: 'O guia digital definitivo para viajar pela Lapônia finlandesa.',
      groups: { stay: 'Hospedagem', eatDrink: 'Comer e beber', do: 'O que fazer', explore: 'Explorar', essentials: 'Essenciais' },
      travelGuideKicker: 'Guia de viagem da Lapônia',
      about: {
        eyebrow: 'Sobre o LaplandVibes',
        body: 'O guia definitivo da Lapônia finlandesa, da aurora boreal ao sol da meia-noite. Experiências selecionadas, dicas de quem conhece e o básico para sua viagem ao Ártico.',
        badge: 'Mantido de forma independente · fontes citadas',
      },
      spottedError: { title: 'Viu um erro?', body: 'Algo que precisa ser corrigido? Conte para a gente, corrigimos na hora.', cta: 'Reportar um erro →' },
      partner: { title: 'Parceria com a gente', body: 'Anuncie ou colabore em 27 sites sobre a Lapônia.', cta: 'Entrar em contato →' },
      press: { title: 'Imprensa e mídia', body: 'Parcerias editoriais e kits de imprensa.', cta: 'Contato de imprensa →' },
      affiliate: 'Este site contém links de afiliados. Se você reservar por meio destes links, o LaplandVibes pode receber uma comissão sem custo adicional para você.',
      copyright: '© {{year}} #LaplandVibes, Parte da rede #LaplandVibes',
      websiteBy: 'Site por Yrityspaketit.fi',
      legal: { privacy: 'Política de privacidade', cookie: 'Política de cookies', terms: 'Termos de uso', contact: 'Contato' },
      siteLabels: {
        hotelDeals: 'Ofertas de hotéis',
        staysCabins: 'Hospedagens e cabanas',
        whereToStay: 'Onde ficar',
        familyFriendly: 'Para famílias',
        localFood: 'Cozinha local',
        fineDining: 'Alta gastronomia',
        barsPubs: 'Bares e pubs',
        activities: 'Atividades',
        huskySafaris: 'Safáris com huskies',
        skiResorts: 'Estações de esqui',
        snowmobileTours: 'Passeios de snowmobile',
        spaWellness: 'Spa e bem-estar',
        nightlife: 'Vida noturna',
        natureParks: 'Natureza e parques',
        travelGuide: 'Guia de viagem',
        christmas: 'Natal na Lapônia',
        giftsSouvenirs: 'Presentes e lembranças',
        travelBlog: 'Blog de viagem',
        dealsOffers: 'Ofertas',
        transport: 'Transporte',
        carRental: 'Aluguel de carros',
        workInLapland: 'Trabalhar na Lapônia',
      },
    }
  }
  if (lang === 'zh-CN') {
    return {
      networkBadge: '芬兰拉普兰网络',
      tagline: '芬兰拉普兰旅游的权威数字指南。',
      groups: { stay: '住宿', eatDrink: '餐饮', do: '体验', explore: '探索', essentials: '实用信息' },
      travelGuideKicker: '拉普兰旅游指南',
      about: {
        eyebrow: '关于 LaplandVibes',
        body: '芬兰拉普兰的权威指南, 从北极光到午夜阳光。精选体验、内行贴士,以及规划北极之旅所需的一切。',
        badge: '独立运营 · 注明出处',
      },
      spottedError: { title: '发现错误?', body: '看到需要修正的内容?请告诉我们、我们会立即更正。', cta: '报告错误 →' },
      partner: { title: '合作机会', body: '在超过27个拉普兰相关网站上投放广告或开展合作。', cta: '联系我们 →' },
      press: { title: '媒体与新闻', body: '编辑合作与媒体资料包。', cta: '媒体咨询 →' },
      affiliate: '本网站包含联盟链接。如您通过这些链接预订,LaplandVibes 可能会获得佣金,您无需支付额外费用。',
      copyright: '© {{year}} #LaplandVibes，#LaplandVibes 网络的一部分',
      websiteBy: '网站制作:Yrityspaketit.fi',
      legal: { privacy: '隐私政策', cookie: 'Cookie 政策', terms: '使用条款', contact: '联系方式' },
      siteLabels: {
        hotelDeals: '酒店优惠',
        staysCabins: '住宿与小屋',
        whereToStay: '住宿选择',
        familyFriendly: '亲子游',
        localFood: '当地美食',
        fineDining: '精致餐饮',
        barsPubs: '酒吧',
        activities: '活动',
        huskySafaris: '哈士奇雪橇之旅',
        skiResorts: '滑雪胜地',
        snowmobileTours: '雪地摩托之旅',
        spaWellness: '水疗与养生',
        nightlife: '夜生活',
        natureParks: '自然与国家公园',
        travelGuide: '旅行指南',
        christmas: '拉普兰圣诞',
        giftsSouvenirs: '礼物与纪念品',
        travelBlog: '旅行博客',
        dealsOffers: '优惠',
        transport: '交通',
        carRental: '汽车租赁',
        workInLapland: '在拉普兰工作',
      },
    }
  }
  if (lang === 'ko') {
    return {
      networkBadge: '핀란드 라플란드 네트워크',
      tagline: '핀란드 라플란드 여행의 결정판 디지털 가이드.',
      groups: { stay: '숙박', eatDrink: '식음료', do: '액티비티', explore: '탐험', essentials: '필수 정보' },
      travelGuideKicker: '라플란드 여행 가이드',
      about: {
        eyebrow: 'LaplandVibes 소개',
        body: '핀란드 라플란드의 결정판 가이드, 오로라부터 백야까지. 엄선된 경험, 현지인 팁, 북극 모험을 계획하는 데 필요한 모든 것.',
        badge: '독립 운영 · 출처 명시',
      },
      spottedError: { title: '오류를 발견하셨나요?', body: '수정이 필요한 부분을 보셨나요? 알려주세요、즉시 수정하겠습니다.', cta: '오류 신고 →' },
      partner: { title: '파트너십', body: '21개 이상의 라플란드 관련 사이트에서 광고와 협업.', cta: '문의하기 →' },
      press: { title: '언론 및 미디어', body: '편집 파트너십 및 보도자료 키트.', cta: '언론 문의 →' },
      affiliate: '이 사이트에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 예약하시면 추가 비용 없이 LaplandVibes가 수수료를 받을 수 있습니다.',
      copyright: '© {{year}} #LaplandVibes, #LaplandVibes 네트워크의 일부',
      websiteBy: '웹사이트 제작: Yrityspaketit.fi',
      legal: { privacy: '개인정보처리방침', cookie: '쿠키 정책', terms: '이용약관', contact: '연락처' },
      siteLabels: {
        hotelDeals: '호텔 특가',
        staysCabins: '숙소와 캐빈',
        whereToStay: '숙소 찾기',
        familyFriendly: '가족 여행',
        localFood: '현지 음식',
        fineDining: '파인 다이닝',
        barsPubs: '바와 펍',
        activities: '액티비티',
        huskySafaris: '허스키 사파리',
        skiResorts: '스키 리조트',
        snowmobileTours: '스노모빌 투어',
        spaWellness: '스파와 웰니스',
        nightlife: '나이트라이프',
        natureParks: '자연과 국립공원',
        travelGuide: '여행 가이드',
        christmas: '라플란드의 크리스마스',
        giftsSouvenirs: '선물과 기념품',
        travelBlog: '여행 블로그',
        dealsOffers: '특가와 프로모션',
        transport: '교통',
        carRental: '렌터카',
        workInLapland: '라플란드에서 일하기',
      },
    }
  }
  if (lang === 'fr') {
    return {
      networkBadge: 'Réseau Laponie finlandaise',
      tagline: 'Le guide numérique de référence pour voyager en Laponie finlandaise.',
      groups: { stay: 'Dormir', eatDrink: 'Manger & boire', do: 'À faire', explore: 'Explorer', essentials: 'Essentiels' },
      travelGuideKicker: 'Guide de voyage en Laponie',
      about: {
        eyebrow: 'À propos de LaplandVibes',
        body: "Le guide de référence sur la Laponie finlandaise, de l'aurore boréale au soleil de minuit. Expériences sélectionnées, conseils d'initiés et tout ce qu'il faut pour préparer votre aventure arctique.",
        badge: 'Édité de façon indépendante · sources citées',
      },
      spottedError: { title: 'Vous avez repéré une erreur ?', body: "Quelque chose à corriger ? Dites-le-nous, nous rectifions immédiatement.", cta: 'Signaler une erreur →' },
      partner: { title: 'Travailler avec nous', body: 'Publicité ou collaborations sur 27 sites consacrés à la Laponie.', cta: 'Nous contacter →' },
      press: { title: 'Presse et médias', body: 'Partenariats éditoriaux et kits presse.', cta: 'Demandes presse →' },
      affiliate: "Ce site contient des liens d'affiliation. Si vous réservez via ces liens, LaplandVibes peut recevoir une commission sans frais supplémentaires pour vous.",
      copyright: '© {{year}} #LaplandVibes, Membre du réseau #LaplandVibes',
      websiteBy: 'Site réalisé par Yrityspaketit.fi',
      legal: { privacy: 'Politique de confidentialité', cookie: 'Politique des cookies', terms: "Conditions d'utilisation", contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Offres hôtelières',
        staysCabins: 'Séjours et chalets',
        whereToStay: 'Où loger',
        familyFriendly: 'En famille',
        localFood: 'Cuisine locale',
        fineDining: 'Gastronomie',
        barsPubs: 'Bars et pubs',
        activities: 'Activités',
        huskySafaris: 'Safaris en huskies',
        skiResorts: 'Stations de ski',
        snowmobileTours: 'Sorties en motoneige',
        spaWellness: 'Spa et bien-être',
        nightlife: 'Vie nocturne',
        natureParks: 'Nature et parcs',
        travelGuide: 'Guide de voyage',
        christmas: 'Noël en Laponie',
        giftsSouvenirs: 'Cadeaux et souvenirs',
        travelBlog: 'Blog de voyage',
        dealsOffers: 'Offres et promotions',
        transport: 'Transport',
        carRental: 'Location de voiture',
        workInLapland: 'Travailler en Laponie',
      },
    }
  }
  if (lang === 'it') {
    return {
      networkBadge: 'Network Lapponia finlandese',
      tagline: 'La guida digitale di riferimento per viaggiare nella Lapponia finlandese.',
      groups: { stay: 'Dormire', eatDrink: 'Mangiare e bere', do: 'Da fare', explore: 'Esplorare', essentials: 'Essenziali' },
      travelGuideKicker: 'Guida di viaggio della Lapponia',
      about: {
        eyebrow: 'Su LaplandVibes',
        body: "La guida di riferimento sulla Lapponia finlandese, dall'aurora boreale al sole di mezzanotte. Esperienze selezionate, consigli da insider e tutto il necessario per pianificare la Sua avventura artica.",
        badge: 'Gestita in modo indipendente · fonti citate',
      },
      spottedError: { title: 'Ha visto un errore?', body: 'Qualcosa da correggere? Ce lo segnali, interveniamo subito.', cta: 'Segnala un errore →' },
      partner: { title: 'Collabori con noi', body: 'Pubblicità o collaborazioni su 27 siti dedicati alla Lapponia.', cta: 'Contatti →' },
      press: { title: 'Stampa e media', body: 'Collaborazioni editoriali e cartelle stampa.', cta: 'Richieste stampa →' },
      affiliate: 'Questo sito contiene link di affiliazione. Se prenota tramite questi link, LaplandVibes può ricevere una commissione senza costi aggiuntivi per Lei.',
      copyright: '© {{year}} #LaplandVibes, Parte del network #LaplandVibes',
      websiteBy: 'Sito realizzato da Yrityspaketit.fi',
      legal: { privacy: 'Privacy policy', cookie: 'Cookie policy', terms: "Condizioni d'uso", contact: 'Contatti' },
      siteLabels: {
        hotelDeals: 'Offerte hotel',
        staysCabins: 'Alloggi e chalet',
        whereToStay: 'Dove dormire',
        familyFriendly: 'In famiglia',
        localFood: 'Cucina locale',
        fineDining: 'Alta cucina',
        barsPubs: 'Bar e pub',
        activities: 'Attività',
        huskySafaris: 'Safari con i husky',
        skiResorts: 'Stazioni sciistiche',
        snowmobileTours: 'Tour in motoslitta',
        spaWellness: 'Spa e benessere',
        nightlife: 'Vita notturna',
        natureParks: 'Natura e parchi',
        travelGuide: 'Guida di viaggio',
        christmas: 'Natale in Lapponia',
        giftsSouvenirs: 'Regali e souvenir',
        travelBlog: 'Blog di viaggio',
        dealsOffers: 'Offerte e promozioni',
        transport: 'Trasporti',
        carRental: 'Autonoleggio',
        workInLapland: 'Lavorare in Lapponia',
      },
    }
  }
  if (lang === 'nl') {
    return {
      networkBadge: 'Fins-Lapland-netwerk',
      tagline: 'De toonaangevende digitale gids voor reizen door Fins Lapland.',
      groups: { stay: 'Verblijven', eatDrink: 'Eten & drinken', do: 'Te doen', explore: 'Verkennen', essentials: 'Essentieel' },
      travelGuideKicker: 'Lapland-reisgids',
      about: {
        eyebrow: 'Over LaplandVibes',
        body: 'De toonaangevende gids voor Fins Lapland, van het noorderlicht tot de middernachtszon. Geselecteerde ervaringen, insidertips en de praktische basis voor uw Arctische reis.',
        badge: 'Onafhankelijk beheerd · bronnen vermeld',
      },
      spottedError: { title: 'Een fout gezien?', body: 'Iets dat aangepast moet worden? Laat het ons weten, we corrigeren het meteen.', cta: 'Fout melden →' },
      partner: { title: 'Samenwerken met ons', body: 'Adverteer of werk samen op meer dan 21 Lapland-sites.', cta: 'Neem contact op →' },
      press: { title: 'Pers en media', body: 'Redactionele samenwerkingen en perskits.', cta: 'Persaanvragen →' },
      affiliate: 'Deze site bevat affiliate-links. Als u via deze links boekt, kan LaplandVibes een commissie ontvangen zonder extra kosten voor u.',
      copyright: '© {{year}} #LaplandVibes, Onderdeel van het #LaplandVibes-netwerk',
      websiteBy: 'Website door Yrityspaketit.fi',
      legal: { privacy: 'Privacybeleid', cookie: 'Cookiebeleid', terms: 'Gebruiksvoorwaarden', contact: 'Contact' },
      siteLabels: {
        hotelDeals: 'Hoteldeals',
        staysCabins: 'Verblijven en hutten',
        whereToStay: 'Waar te verblijven',
        familyFriendly: 'Gezinsvriendelijk',
        localFood: 'Lokale keuken',
        fineDining: 'Fine dining',
        barsPubs: 'Bars en pubs',
        activities: 'Activiteiten',
        huskySafaris: "Husky-safari's",
        skiResorts: 'Skigebieden',
        snowmobileTours: 'Sneeuwscootertochten',
        spaWellness: 'Spa en wellness',
        nightlife: 'Nachtleven',
        natureParks: 'Natuur en parken',
        travelGuide: 'Reisgids',
        christmas: 'Kerstmis in Lapland',
        giftsSouvenirs: 'Cadeaus en souvenirs',
        travelBlog: 'Reisblog',
        dealsOffers: 'Deals en aanbiedingen',
        transport: 'Vervoer',
        carRental: 'Autoverhuur',
        workInLapland: 'Werken in Lapland',
      },
    }
  }
  // fi
  return {
    networkBadge: 'Suomen Lapin verkosto',
    tagline: 'Suomen Lapin matkailun digitaalinen koti.',
    groups: { stay: 'Majoitu', eatDrink: 'Syö & juo', do: 'Tekemistä', explore: 'Tutki', essentials: 'Perustiedot' },
    travelGuideKicker: 'Lapin matkaopas',
    about: {
      eyebrow: 'Tietoa LaplandVibesistä',
      body: 'Suomen Lapin matkaopas, revontulista keskiyön aurinkoon. Käsin valittuja kohteita, käytännön vinkkejä ja avoimet lähteet.',
      badge: 'Riippumaton · lähteet näkyvillä',
    },
    spottedError: { title: 'Huomasitko virheen?', body: 'Näetkö jotain mikä pitäisi korjata? Kerro meille, korjaamme sen heti.', cta: 'Ilmoita virheestä →' },
    partner: { title: 'Yhteistyö kanssamme', body: 'Mainosta tai tee yhteistyötä yli 21 Lappi-sivustolla.', cta: 'Ota yhteyttä →' },
    press: { title: 'Media ja lehdistö', body: 'Toimitusyhteistyö ja lehdistömateriaalit.', cta: 'Lehdistöyhteydet →' },
    affiliate: 'Tämä sivusto sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, LaplandVibes voi saada provision ilman lisäkustannuksia sinulle.',
    copyright: '© {{year}} #LaplandVibes, Osa #LaplandVibes-verkostoa',
    websiteBy: 'Sivuston toteutus: Yrityspaketit.fi',
    legal: { privacy: 'Tietosuojaseloste', cookie: 'Evästekäytäntö', terms: 'Käyttöehdot', contact: 'Yhteystiedot' },
    siteLabels: {
      hotelDeals: 'Hotellitarjoukset',
      staysCabins: 'Majoitukset ja mökit',
      whereToStay: 'Missä yöpyä',
      familyFriendly: 'Perheille',
      localFood: 'Paikallinen ruoka',
      fineDining: 'Hienot ravintolat',
      barsPubs: 'Baarit ja pubit',
      activities: 'Aktiviteetit',
      huskySafaris: 'Huskysafarit',
      skiResorts: 'Hiihtokeskukset',
      snowmobileTours: 'Moottorikelkkasafarit',
      spaWellness: 'Spa ja hyvinvointi',
      nightlife: 'Yöelämä',
      natureParks: 'Luonto ja kansallispuistot',
      travelGuide: 'Matkaopas',
      christmas: 'Joulu Lapissa',
      giftsSouvenirs: 'Lahjat ja matkamuistot',
      travelBlog: 'Matkablogi',
      dealsOffers: 'Tarjoukset',
      transport: 'Liikenne',
      carRental: 'Autovuokraus',
      workInLapland: 'Töihin Lappiin',
    },
  }
}
