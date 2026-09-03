import type { SectionCopy } from './types'

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
      ' · one click opens the partner’s page showing their current rate. We never invent percentages or run fake countdowns.',
    cta: "Tonight's hotels →",
  },
  pulse: {
    eyebrow: "Today's pulse",
    titleItalic: 'What’s',
    titleRest: 'happening in Lapland right now.',
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
        body: 'Finnair and Norwegian Helsinki–Lapland round-trips drop into the €89–129 band when booked 4–8 weeks ahead, outside the Christmas, Easter and February half-term peaks.',
      },
      {
        when: 'From late August',
        title: 'Aurora season starts again',
        body: 'The active window runs roughly from late August to early April. Saariselkä, Inari and Utsjoki have the highest visible-aurora rates. Hunts can usually be cancelled up to 24 hours before, so they are easy to add late.',
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
      '32 days the sun never sets. Lakeside cabins at a fraction of December rates. Hiking peaks in late August, clean air, no mosquitoes, ruska gold.',
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
      body: '27+ sister sites. One ecosystem, one source of truth.',
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
    okTitle: 'Almost there.',
    okBody: 'Confirm your subscription from the email we just sent you.',
    fineprint: 'Only when there is something worth flagging. Unsubscribe in one click. We never share your address.',
    error: 'Could not subscribe right now. Please try again in a moment.',
  },
  hotelsPage: {
    eyebrow: 'Hotels & Cabins',
    h1Italic: 'Lapland hotels',
    h1: 'live prices, tonight.',
    sub:
      "Glass igloos under the aurora belt, slope-side properties on Levi, wilderness lodges in Ylläs, family hotels in Rovaniemi. Compare tonight's live rates.",
    seoTitle: 'Lapland Hotel Deals, Glass Igloos, Slope-Side, Wilderness Cabins',
    seoDesc:
      'Live prices for glass igloos, ski-in stays, family hotels and wilderness lodges across Finnish Lapland. Last-minute and end-of-season cabin nights.',
    bottomTitle: "Don't see your destination?",
    bottomLead: 'Search any Lapland town directly on Trip.com.',
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
    introTitle: 'Which Lapland airport you should actually fly into',
    introP1: 'There are four practical gateways from Helsinki, and the right one is decided by where you sleep, not by the fare. Rovaniemi serves the city itself, Ounasvaara and the eastern road. Kittilä is the short transfer for Levi and Ylläs. Ivalo covers Saariselkä and Inari, the far north. Kuusamo is the one for Ruka.',
    introP2: 'The flight itself is about an hour and a half, so a cheaper fare into the wrong airport can cost you two hours of road at the other end. Fares here are pulled live from the partner rather than stored, and the routes are flown by Finnair and Norwegian.',
    eyebrow: 'Flights',
    h1Italic: 'Flights to Lapland',
    h1: 'live Trip.com fares.',
    sub:
      'Helsinki to every Lapland gateway, pre-filled and dated. Click through to real Finnair and Norwegian rates.',
    seoTitle: 'Flights to Lapland, Live Trip.com Deals on Helsinki Routes',
    seoDesc:
      'Live Trip.com flight prices: Helsinki to Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) and Kemi. Direct Finnair and Norwegian fares, pre-filled, ready to book.',
    bottomTitle: 'Travelling from outside Finland?',
    bottomLead: 'Search any origin to any Lapland airport on Trip.com.',
    bottomCta: 'Open Trip.com flight search →',
  },
  carsPage: {
    introTitle: 'What a Lapland rental actually needs to have',
    introP1: 'Two things decide whether a car works up here, and neither is the badge on the bonnet: tyres and ground clearance. Winter rentals from the Lapland airports come fitted for the conditions, studded where the operator specifies it, so the meaningful choice is size. A small car is fine on the main roads between towns; a 4WD earns its price on unploughed side roads and cabin driveways.',
    introP2: 'Pickup is at Rovaniemi, Kittilä, Ivalo and Kuusamo, which covers every gateway on the flights page, and one-way rentals run between most Finnish airports if you want to fly in and out of different towns. Prices come live from the partner, so what you see is today\'s rate rather than an old screenshot.',
    eyebrow: 'Car hire',
    h1Italic: 'Winter-ready cars',
    h1: 'live partner prices.',
    sub:
      'Studded tyres, 4WD, free aurora-chasing range. Pickup at every Lapland airport, compare on EconomyBookings.',
    seoTitle: 'Car Rental → Car Hire (footer link only — this hero string needs no change)',
    seoDesc:
      'Live EconomyBookings prices on car hire from Rovaniemi, Kittilä, Ivalo and Kuusamo (Ruka) airports. Studded tyres included for winter driving.',
    bottomTitle: 'Helsinki pickup or one-way drop-off?',
    bottomLead: 'EconomyBookings supports one-way rentals between most Finnish airports.',
    bottomCta: 'Open EconomyBookings →',
  },
  packagesPage: {
    introTitle: 'Why we do not sell a sealed package',
    introP1: 'A packaged Lapland week bundles a flight, a hotel and two activities behind one price, and the bundle is where the margin hides. We list the same building blocks separately: the flight, the stay, the husky day, the aurora evening. You book each at the partner\'s live rate, and nobody adds a layer on top.',
    introP2: 'Most trips settle at four to seven nights, which is long enough for two or three big activities plus the weather flexibility that aurora hunting needs. Build from the stay outwards: the bed decides which airport is right and which activities are within reach, not the other way round.',
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
    introTitle: 'The case for going in summer',
    introP1: 'For 32 days, from 6 June to 7 July, the sun does not set in the far north, and that changes what a day is rather than just how it looks. You can start a hike at nine in the evening and finish in daylight. Demand collapses in May when aurora season ends and the lifts stop, so the same lakeside cabins that were solid in February have empty weeks.',
    introP2: 'Late August is the other window: the hiking is at its best, the mosquitoes have gone, and ruska turns the fells before the first snow. Bring a sleep mask, and treat the light as the reason to come rather than something to work around.',
    eyebrow: 'Midnight sun · June 6 – July 7',
    h1Italic: 'Summer in Lapland',
    h1: 'is the secret deal.',
    sub:
      '32 days the sun never sets. Lakeside cabins at a fraction of December rates. Hiking peaks in late August, clean air, no mosquitoes, ruska gold.',
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
        a: 'Late spring and summer, roughly May to August, are the quietest and most affordable. Aurora season has ended and the ski resorts have closed, so lakeside cabins that sold out in February sit empty. Within winter, the shoulder weeks (mid-March to mid-April) are cheaper than the Christmas and February half-term peaks and still have full snow cover and longer daylight.',
      },
      {
        q: 'How far in advance should I book a Lapland trip?',
        a: 'It depends on the season. Christmas and New Year are the tightest: glass igloos and Santa Claus Village family rooms often close to bookings by late August. Aurora season (roughly November to March) is calmer but popular weekends fill early. Spring, summer and autumn rarely need months of lead time. Flights from Helsinki tend to be cheapest booked a few weeks ahead, outside the Christmas, Easter and February-break peaks.',
      },
      {
        q: 'Are last-minute Lapland deals worth it?',
        a: 'Often, yes, outside the few peak windows. When a cabin, husky slot or aurora hunt has unsold space close to the date, partners release it at the live rate, and aurora and husky tours frequently take bookings up to about 24 hours before. The exceptions are Christmas, New Year, Easter and the February school holiday, when demand is high and waiting rarely helps.',
      },
      {
        q: "What's included in a typical Lapland package deal?",
        a: 'It varies by operator, so always read the inclusions. A common bundle pairs a few nights of accommodation with one or two activities, a husky safari, an aurora hunt or a snowmobile tour, and sometimes airport transfers. On LaplandDeals we do not sell fixed packages; we curate the building blocks (flights, stays, activities, car hire) so you book each at the partner’s live price with no middleman fee.',
      },
      {
        q: 'How can I find genuine Lapland discounts?',
        a: 'Compare the live partner price against the property or operator’s normal rate rather than trusting a headline percentage. Travel in the shoulder or summer seasons, stay slightly outside the busiest resorts, and book activities directly through trusted platforms. Every price on LaplandDeals links straight to the partner’s current rate — we never invent percentages or run fake countdowns.',
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

export default en
