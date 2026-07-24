import type { SectionCopy } from './types'

// SWEDISH (sv) — du-form, plain natural Swedish, no filler.
// Prices "189 €", decimal comma, lowercase months, Finnish place names verbatim
// (Levi/Ylläs/Saariselkä/Rovaniemi/Inari), Helsingfors exonym.

const sv: SectionCopy = {
  nav: {
    hotels: 'Hotell',
    activities: 'Aktiviteter',
    flights: 'Flyg',
    cars: 'Bilar',
    packages: 'Paket',
    summer: 'Sommar',
    tonightsCta: 'Kvällens erbjudanden',
  },
  hero: {
    eyebrow: 'Last minute · Billiga erbjudanden · Norrskenssäsong',
    h1Line1Italic: 'Lapplands billigaste',
    h1Line1Bold: '',
    h1Line2: 'sista minuten-erbjudanden.',
    lead:
      'Frigjorda hotellnätter, osålda platser på husky- och skoterturer, billiga paket och lediga stugor, allt på ett ställe. Ett klick tar dig direkt till partnerns aktuella pris.',
    primary: 'Kvällens hotellerbjudanden',
    secondary: 'Billiga norrskensturer',
    eyebrowSummer: 'Last minute · Billiga erbjudanden · Midnattssol',
    leadSummer:
      'Årets billigaste säsong: stugor i midnattssol under vinterpriser, lediga aktivitetsplatser, flyg till Rovaniemi och biluthyrning för sommaren. Ett klick tar dig direkt till partnerns aktuella pris.',
    secondarySummer: 'Erbjudanden i midnattssol',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Partnerns eget pris',
    leadRest:
      ' · ett klick öppnar partnersidan med deras aktuella pris. Vi hittar aldrig på procent eller kör falska nedräkningar.',
    cta: 'Kvällens hotell →',
  },
  pulse: {
    eyebrow: 'Dagens läge',
    titleItalic: 'Vad som',
    titleRest: 'händer i Lappland just nu.',
    lead:
      'Konkreta säsongsfakta, inga påhittade nedräkningar. Vi uppdaterar det här så fort läget ändras.',
    items: [
      {
        when: 'Just nu',
        title: 'Midnattssol, årets lägsta priser',
        body: 'Under juli går solen knappt ner. Stugor vid sjön ligger klart under vinterpriser, och samma fjäll som var slutsålda i februari står tomma. Årets bästa prisläge.',
      },
      {
        when: 'Nu till augusti',
        title: 'Vandrings- och vattensäsong',
        body: 'Pallas-Yllästunturi och de östra fjällen är torra och öppna. Långa dagar för vandring, SUP och bad i sjöar. Myggen avtar under augusti; ta med myggnät för slutet av juni.',
      },
      {
        when: '5–15 september',
        title: 'Ruskan: höstfärgerna kulminerar snabbt',
        body: 'Dvärgbjörken blir guldgul på ungefär tre dagar. Stugorna är fortfarande prisvärda och luften är den renaste i Europa (WMO). Norrskenet återvänder också när nätterna mörknar.',
      },
      {
        when: 'Julen 2026',
        title: 'Fylls redan upp',
        body: 'Glasiglos och familjerum i Santa Claus Village stänger oftast för bokning i slutet av augusti. Julaftonsmiddagar och renslädsturer brukar vara borta i oktober.',
      },
      {
        when: 'Rätt läge för biljetter',
        title: '4–8 veckor innan från Helsingfors',
        body: 'Finnairs och Norwegians tur och retur Helsingfors→Lappland hamnar i spannet 89–129 € när du bokar 4–8 veckor i förväg, utanför topparna vid jul, påsk och februari.',
      },
      {
        when: 'Från september',
        title: 'Norrskenssäsongen börjar igen',
        body: 'Det aktiva fönstret varar ungefär från mitten av september till början av april. Saariselkä, Inari och Utsjoki har de högsta chanserna att se norrsken. Turerna avbokas oftast fram till 24 h innan, så de är lätta att lägga till sent.',
      },
    ],
  },
  sections: {
    pickEyebrow: 'Redaktionens val',
    pickTitle: 'Lugnt utvald för säsongen som kommer.',
    pickLead:
      'Ställen värda att tipsa en vän om. Varje kort länkar till partnerns aktuella pris just nu.',
    pickCta: 'Alla hotell',

    categoriesEyebrow: 'Bläddra efter kategori',
    categoriesTitle: 'Hitta din typ av Lappland-erbjudande.',

    lastMinEyebrow: 'Fönster för sista minuten',
    lastMinTitle: 'Reser du inom de närmaste två veckorna?',
    lastMinLead:
      'Stugnätter, huskyplatser och norrskensturer som ofta har platser kvar i sista stund. Partnerns tillgänglighet i realtid, uppdaterad vid varje klick.',

    summerEyebrow: 'Midnattssol · 6 juni – 7 juli',
    summerTitle: 'Sommaren i Lappland är det dolda fyndet.',
    summerLead:
      '32 dygn går solen aldrig ner. Stugor vid sjön för en bråkdel av decemberpriserna. Vandringen kulminerar i slutet av augusti, ren luft, inga myggor, guldgul ruska.',
    summerCta: 'Bläddra bland sommaren',

    everythingEyebrow: 'Allt',
    everythingTitle: 'Dagens katalog.',
  },
  tiles: [
    { label: 'Hotell & stugor', hint: 'Glasiglos · Vid backen · Vildmarkslodger' },
    { label: 'Aktiviteter', hint: 'Husky · Norrsken · Skoter · Ren' },
    { label: 'Flyg', hint: 'Helsingfors till Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Biluthyrning', hint: 'Fyrhjulsdrift · Dubbdäck · Upphämtning på flygplatsen' },
    { label: 'Paket', hint: 'Norrskensvecka · Familjeresor · Weekendresor' },
    { label: 'Sommar', hint: 'Midnattssol · Vandring · Stugor vid sjön' },
  ],
  card: {
    livePrices: 'Priser i realtid',
    seeDeals: 'Se erbjudanden',
    browse: 'Bläddra',
    flags: {
      'last-minute': 'Sista minuten',
      'end-of-season': 'Slutet av säsongen',
      summer: 'Midnattssol',
      package: 'Flera dagar',
      'editor-pick': 'Redaktionens val',
    },
  },
  trust: [
    {
      title: 'Ärlig kuratering',
      body: 'Partnerns priser i realtid. Aldrig påhittad procent eller falska nedräkningar.',
    },
    {
      title: 'Granskat av lokalbor',
      body: 'Utvalt av människor som reser och skriver från finska Lappland.',
    },
    {
      title: 'En del av #LaplandVibes',
      body: '23+ systersajter. Ett ekosystem, en sanningskälla.',
    },
  ],
  newsletter: {
    kicker: 'Nyhetsbrevet #LaplandVibes',
    titleItalic: 'Fånga erbjudandena',
    titleRest: 'innan de är borta.',
    lead:
      'Sista minuten-priser i Lappland, stugor som släpps i slutet av säsongen och midnattssolsfönster du annars skulle missa.',
    benefits: [
      {
        title: 'Partnerns riktiga priser',
        body: 'Priser i realtid som hämtas i samma stund du klickar. Ingen påhittad procent.',
      },
      {
        title: 'Släpp i sista stund',
        body: 'Stugnätter under golvpris, skidveckor som fylls, huskyplatser utanför högsäsong.',
      },
      {
        title: 'Sommar & midnattssol',
        body: 'Det 32 dagar långa fönstret från 6 juni, annan säsong, andra erbjudanden.',
      },
      {
        title: 'Bara när det är viktigt',
        body: 'En sammanfattning när det finns riktiga erbjudanden, inte en störtflod. Avprenumerationslänk i varje utskick.',
      },
    ],
    placeholder: 'Din e-postadress',
    cta: 'Få erbjudandena',
    sending: 'Skickar…',
    okTitle: 'Du är med på listan.',
    okBody: 'Välkomstmejlet är på väg, kolla din inkorg.',
    fineprint: 'Bara när det finns något värt att flagga för. Avprenumerera med ett klick. Vi delar aldrig din adress.',
    error: 'Kunde inte prenumerera just nu. Försök igen om en stund.',
  },
  hotelsPage: {
    eyebrow: 'Hotell & stugor',
    h1Italic: 'Lapplands hotell',
    h1: 'priser i realtid, i kväll.',
    sub:
      'Glasiglos under norrskensbältet, boende vid backen i Levi, vildmarkslodger i Ylläs, familjehotell i Rovaniemi. Jämför kvällens priser i realtid.',
    seoTitle: 'Lappland hotellerbjudanden, glasiglos, vid backen, vildmarksstugor',
    seoDesc:
      'Priser i realtid på glasiglos, ski-in-boende, familjehotell och vildmarkslodger i finska Lappland. Stugnätter i sista minuten och i slutet av säsongen.',
    bottomTitle: 'Ser du inte ditt resmål?',
    bottomLead: 'Sök vilken ort som helst i Lappland direkt på Trip.com.',
    bottomCta: 'Bläddra bland alla hotell i Lappland →',
  },
  activitiesPage: {
    eyebrow: 'Aktiviteter',
    h1Italic: 'Aktiviteter i Lappland',
    h1: 'tillgänglighet i realtid.',
    sub:
      'Huskysafarier, norrskensturer, skoterexpeditioner, besök på rengårdar, pimpelfiske. Tillgänglighet i realtid på GetYourGuide, inga falska timers, ingen påhittad procent.',
    seoTitle: 'Lappland aktivitetserbjudanden, husky, norrsken, skoter m.m.',
    seoDesc:
      'GetYourGuide-priser i realtid på huskysafarier, norrskensturer, skoterturer, rengårdar och pimpelfiske i finska Lappland. Platser i sista minuten.',
    bottomTitle: 'Bläddra i hela Lappland-katalogen',
    bottomLead: '900+ turer, dagsturer och flerdagarsäventyr på GetYourGuide.',
    bottomCta: 'Alla aktiviteter i Lappland →',
  },
  flightsPage: {
    eyebrow: 'Flyg',
    h1Italic: 'Flyg till Lappland',
    h1: 'Trip.com-priser i realtid.',
    sub:
      'Helsingfors till varje port till Lappland, förifyllt och daterat. Klicka vidare till Finnairs och Norwegians riktiga priser.',
    seoTitle: 'Flyg till Lappland, Trip.com-erbjudanden i realtid på Helsingforslinjer',
    seoDesc:
      'Trip.com-flygpriser i realtid: Helsingfors till Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) och Kemi. Direktflyg med Finnair och Norwegian, förifyllda.',
    bottomTitle: 'Reser du från utanför Finland?',
    bottomLead: 'Sök vilken avreseort som helst till valfri flygplats i Lappland på Trip.com.',
    bottomCta: 'Öppna Trip.com flygsök →',
  },
  carsPage: {
    eyebrow: 'Biluthyrning',
    h1Italic: 'Vintersäkra bilar',
    h1: 'partnerns priser i realtid.',
    sub:
      'Dubbdäck, fyrhjulsdrift, räckvidd nog för norrskensjakt. Upphämtning på varje flygplats i Lappland, jämför på EconomyBookings.',
    seoTitle: 'Lappland biluthyrning, dubbdäck, fyrhjulsdrift, upphämtning på flygplatsen',
    seoDesc:
      'EconomyBookings-priser i realtid på biluthyrning från flygplatserna i Rovaniemi, Kittilä, Ivalo och Kuusamo (Ruka). Dubbdäck ingår för vinterkörning.',
    bottomTitle: 'Upphämtning i Helsingfors eller enkelresa?',
    bottomLead: 'EconomyBookings stöder enkelresor mellan de flesta finska flygplatser.',
    bottomCta: 'Öppna EconomyBookings →',
  },
  packagesPage: {
    eyebrow: 'Paket',
    h1Italic: 'Bygg din egen',
    h1: 'Lapplandsresa.',
    sub:
      'Vi säljer inga färdiga paket. Vi väljer ut byggstenarna, flyg, boende, huskydagar, norrskensturer, och du bokar varje del till partnerns pris i realtid. Ingen mellanhandsavgift.',
    seoTitle: 'Lappland paketerbjudanden, norrskensvecka, familjeresor, weekender',
    seoDesc:
      'Idéer för flerdagarsresor i Lappland: norrskensvecka i Saariselkä, familjeresor i Rovaniemi, weekendresor. Varje del bokas separat till partnerns priser i realtid.',
    curatedTitle: 'Utvalda reseidéer',
    pairTitle: 'Kombinera dessa med ditt boende',
    pairLead: 'Byggstenarna som de flesta resenärer staplar till en 4–7 nätters Lapplandsresa.',
  },
  summerPage: {
    eyebrow: 'Midnattssol · 6 juni – 7 juli',
    h1Italic: 'Sommaren i Lappland',
    h1: 'är det dolda fyndet.',
    sub:
      '32 dygn går solen aldrig ner. Stugor vid sjön för en bråkdel av decemberpriserna. Vandringen kulminerar i slutet av augusti, ren luft, inga myggor, guldgul ruska.',
    seoTitle: 'Lappland sommarerbjudanden, boende i midnattssol och vandring',
    seoDesc:
      '32 dygn går solen aldrig ner i finska Lappland (6 juni – 7 juli). Stugerbjudanden i midnattssol, vandring i Pallas-Yllästunturi, sommarboende vid sjön för en bråkdel av vinterpriserna.',
    offersTitle: 'Sommarerbjudanden, partnerns priser i realtid',
    offersFallback: 'Sommarerbjudanden håller på att väljas ut, kom tillbaka snart.',
    reasonsTitle: 'Tre ärliga skäl till att sommaren är billigare',
    reasons: [
      {
        title: 'Efterfrågan sjunker i maj',
        body: 'Norrskenssäsongen tar slut, skidorterna stänger. Stugor som var fullbokade i februari har tomma veckor.',
      },
      {
        title: 'Lappland står vidöppet',
        body: 'Samma fjäll, samma sjöar, samma vildmark, utan påslaget för paketresor.',
      },
      {
        title: 'Dagsljuset är oändligt',
        body: 'Du vandrar vid midnatt. Du badar klockan 2 på natten. Du får en längre dag att resa på.',
      },
    ],
    cta: 'Hitta en sommarvecka →',
  },
  faq: {
    eyebrow: 'Bra att veta',
    title: 'Lappland-erbjudanden, dina frågor, besvarade.',
    lead: 'Ärliga svar om tajming, bokningsfönster och vad du kan vänta dig. Inga påhittade priser, ingen falsk brådska.',
    items: [
      {
        q: 'När är det billigast att besöka Lappland?',
        a: 'Sen vår och sommar, ungefär maj till augusti, är lugnast och mest prisvärt. Norrskenssäsongen är slut och skidorterna har stängt, så stugor vid sjön som var slutsålda i februari står tomma. Inom vintern är mellansäsongsveckorna (mitten av mars till mitten av april) billigare än topparna vid jul och februarilovet, samtidigt som snön är full och dagarna längre.',
      },
      {
        q: 'Hur långt i förväg bör jag boka en Lapplandsresa?',
        a: 'Det beror på säsongen. Jul och nyår är tightast: glasiglos och familjerum i Santa Claus Village stänger ofta för bokning i slutet av augusti. Norrskenssäsongen (ungefär november till mars) är lugnare, men populära helger fylls tidigt. Vår, sommar och höst kräver sällan flera månaders framförhållning. Flyg från Helsingfors brukar vara billigast bokat några veckor i förväg, utanför topparna vid jul, påsk och februarilovet.',
      },
      {
        q: 'Är sista minuten-erbjudanden i Lappland värda det?',
        a: 'Ofta, ja, utanför de få topparna. När en stuga, huskyplats eller norrskenstur har osålda platser nära datumet släpper partnern dem till priset i realtid, och norrskens- och huskyturer tar ofta emot bokningar fram till cirka 24 timmar innan. Undantagen är jul, nyår, påsk (pääsiäinen) och februarilovet, när efterfrågan är hög och det sällan lönar sig att vänta.',
      },
      {
        q: 'Vad ingår i ett typiskt Lappland-paket?',
        a: 'Det varierar mellan arrangörer, så läs alltid vad som ingår. Ett vanligt paket kombinerar några nätters boende med en eller två aktiviteter, en huskysafari, en norrskenstur eller en skoterresa, och ibland flygplatstransfer. På LaplandDeals säljer vi inga färdiga paket; vi väljer ut byggstenarna (flyg, boende, aktiviteter, biluthyrning) så att du bokar varje del till partnerns pris i realtid utan mellanhandsavgift.',
      },
      {
        q: 'Hur hittar jag äkta rabatter i Lappland?',
        a: 'Jämför partnerns pris i realtid med boendets eller arrangörens normalpris i stället för att lita på en procentsiffra i rubriken. Res under mellansäsong eller sommar, bo en bit utanför de mest populära orterna och boka aktiviteter direkt via pålitliga plattformar. Varje pris på LaplandDeals länkar direkt till partnerns aktuella pris, vi hittar aldrig på procent eller kör falska nedräkningar.',
      },
    ],
  },
  related: {
    eyebrow: 'Vart härnäst',
    title: 'Mer från nätverket #LaplandVibes.',
    lead: 'Systersajter som går djupare på ett hörn av en Lapplandsresa. Var och en öppnas i en ny flik.',
    links: [
      { anchor: 'hotellerbjudanden & paket', blurb: 'Glasiglos, norrskenssviter och familjeresorter i finska Lappland.' },
      { anchor: 'erbjudanden på aktiviteter & safarier', blurb: 'Huskysafarier, norrskensturer, skoterturer och rengårdar med tillgänglighet i realtid.' },
      { anchor: 'all-inclusive-turpaket', blurb: 'Guidade flerdagarsupplägg som syr ihop boende, transfer och aktiviteter.' },
    ],
  },
}

export default sv
