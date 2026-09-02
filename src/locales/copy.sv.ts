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
      'Frisläppta hotellnätter, osålda platser på husky- och skoterturer, billiga paket och lediga stugor, allt på ett ställe. Ett klick tar dig direkt till partnerns aktuella pris.',
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
        body: 'Glasigloor och familjerum i Santa Claus Village stänger oftast för bokning i slutet av augusti. Julaftonsmiddagar och renslädsturer brukar vara slutsålda i oktober.',
      },
      {
        when: 'Rätt läge för biljetter',
        title: '4–8 veckor innan från Helsingfors',
        body: 'Tur och retur Helsingfors–Lappland med Finnair och Norwegian hamnar i spannet 89–129 € när du bokar 4–8 veckor i förväg, utanför topparna vid jul, påsk och februari.',
      },
      {
        when: 'Från slutet av augusti',
        title: 'Norrskenssäsongen börjar igen',
        body: 'Det aktiva fönstret varar ungefär från slutet av augusti till början av april. Saariselkä, Inari och Utsjoki har de högsta chanserna att se norrsken. Turerna kan oftast avbokas fram till 24 h innan, så de är lätta att lägga till sent.',
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
      'I 32 dygn går solen aldrig ner. Stugor vid sjön för en bråkdel av decemberpriserna. Vandringen kulminerar i slutet av augusti, ren luft, inga myggor, guldgul ruska.',
    summerCta: 'Bläddra bland sommaren',

    everythingEyebrow: 'Allt',
    everythingTitle: 'Dagens katalog.',
  },
  tiles: [
    { label: 'Hotell & stugor', hint: 'Glasigloor · Vid backen · Vildmarkslodger' },
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
      body: '27+ systersajter. Ett ekosystem, en sanningskälla.',
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
    okTitle: 'Nästan klart.',
    okBody: 'Bekräfta din prenumeration i mejlet vi just skickade.',
    fineprint: 'Bara när det finns något värt att flagga för. Avprenumerera med ett klick. Vi delar aldrig din adress.',
    error: 'Kunde inte prenumerera just nu. Försök igen om en stund.',
  },
  hotelsPage: {
    eyebrow: 'Hotell & stugor',
    h1Italic: 'Lapplands hotell',
    h1: 'priser i realtid, i kväll.',
    sub:
      'Glasigloor under norrskensbältet, boende vid backen i Levi, vildmarkslodger i Ylläs, familjehotell i Rovaniemi. Jämför kvällens priser i realtid.',
    seoTitle: 'Hotellerbjudanden i Lappland: glasigloor, vid backen, vildmarksstugor',
    seoDesc:
      'Priser i realtid på glasigloor, ski-in-boende, familjehotell och vildmarkslodger i finska Lappland. Stugnätter i sista minuten och i slutet av säsongen.',
    bottomTitle: 'Ser du inte ditt resmål?',
    bottomLead: 'Sök vilken ort som helst i Lappland direkt på Trip.com.',
    bottomCta: 'Bläddra bland alla hotell i Lappland →',
  },
  activitiesPage: {
    eyebrow: 'Aktiviteter',
    h1Italic: 'Aktiviteter i Lappland',
    h1: 'tillgänglighet i realtid.',
    sub:
      'Huskysafarier, norrskensturer, skoterexpeditioner, besök på rengårdar, pimpelfiske. Tillgänglighet i realtid på GetYourGuide, inga falska nedräkningar, ingen påhittad procent.',
    seoTitle: 'Aktivitetserbjudanden i Lappland: husky, norrsken, skoter m.m.',
    seoDesc:
      'GetYourGuide-priser i realtid på huskysafarier, norrskensturer, skoterturer, rengårdar och pimpelfiske i finska Lappland. Platser i sista minuten.',
    bottomTitle: 'Bläddra i hela Lappland-katalogen',
    bottomLead: '900+ turer, dagsturer och flerdagarsäventyr på GetYourGuide.',
    bottomCta: 'Alla aktiviteter i Lappland →',
  },
  flightsPage: {
    introTitle: 'Vilken flygplats i Lappland du faktiskt bör flyga till',
    introP1: 'Det finns fyra praktiska portar från Helsingfors, och den rätta avgörs av var du sover, inte av biljettpriset. Rovaniemi betjänar staden själv, Ounasvaara och den östliga vägen. Kittilä är den korta transfern till Levi och Ylläs. Ivalo täcker Saariselkä och Enare, längst i norr. Kuusamo är den för Ruka.',
    introP2: 'Själva flygningen tar runt en och en halv timme, så ett billigare pris till fel flygplats kan kosta dig två timmar landsväg i andra änden. Priserna hämtas live från partnern i stället för att lagras, och rutterna flygs av Finnair och Norwegian.',
    eyebrow: 'Flyg',
    h1Italic: 'Flyg till Lappland',
    h1: 'Trip.com-priser i realtid.',
    sub:
      'Helsingfors till varje port till Lappland, förifyllt och daterat. Klicka vidare till Finnairs och Norwegians riktiga priser.',
    seoTitle: 'Flyg till Lappland: Trip.com-priser i realtid',
    seoDesc:
      'Trip.com-flygpriser i realtid: Helsingfors till Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) och Kemi. Direktflyg med Finnair och Norwegian, förifyllda.',
    bottomTitle: 'Reser du från utanför Finland?',
    bottomLead: 'Sök vilken avreseort som helst till valfri flygplats i Lappland på Trip.com.',
    bottomCta: 'Öppna Trip.com flygsök →',
  },
  carsPage: {
    introTitle: 'Vad en hyrbil i Lappland faktiskt måste ha',
    introP1: 'Två saker avgör om en bil fungerar här uppe, och ingen av dem är märket på huven: däcken och markfrigången. Vinterbilar från flygplatserna i Lappland är utrustade för förhållandena, dubbade där uthyraren anger det, så det meningsfulla valet är storleken. En liten bil räcker på huvudvägarna mellan orterna; en fyrhjulsdriven tjänar in sitt pris på oplogade sidovägar och stuginfarter.',
    introP2: 'Upphämtning sker i Rovaniemi, Kittilä, Ivalo och Kuusamo, vilket täcker alla portar på flygsidan, och enkelresa mellan de flesta finska flygplatser går att ordna om du vill flyga in och ut från olika orter. Priserna hämtas live från partnern, så det du ser är dagens pris och inte en gammal skärmbild.',
    eyebrow: 'Biluthyrning',
    h1Italic: 'Vintersäkra bilar',
    h1: 'partnerns priser i realtid.',
    sub:
      'Dubbdäck, fyrhjulsdrift, räckvidd nog för norrskensjakt. Upphämtning på varje flygplats i Lappland, jämför på EconomyBookings.',
    seoTitle: 'Biluthyrning i Lappland: dubbdäck, fyrhjulsdrift, flygplats',
    seoDesc:
      'EconomyBookings-priser i realtid på biluthyrning från flygplatserna i Rovaniemi, Kittilä, Ivalo och Kuusamo (Ruka). Dubbdäck ingår för vinterkörning.',
    bottomTitle: 'Upphämtning i Helsingfors eller enkelresa?',
    bottomLead: 'EconomyBookings stöder enkelresor mellan de flesta finska flygplatser.',
    bottomCta: 'Öppna EconomyBookings →',
  },
  packagesPage: {
    introTitle: 'Varför vi inte säljer ett färdigt paket',
    introP1: 'En paketerad Lapplandsvecka buntar ihop flyg, hotell och två aktiviteter bakom ett pris, och det är i bunten marginalen gömmer sig. Vi listar samma byggstenar var för sig: flyget, boendet, hunddagen, norrskenskvällen. Du bokar var och en till partnerns livepris, och ingen lägger på ett eget lager.',
    introP2: 'De flesta resor landar på fyra till sju nätter, vilket räcker till två eller tre stora aktiviteter plus den vädermarginal som norrskensjakt kräver. Bygg utifrån boendet: sängen avgör vilken flygplats som är rätt och vilka aktiviteter som ligger inom räckhåll, inte tvärtom.',
    eyebrow: 'Paket',
    h1Italic: 'Bygg din egen',
    h1: 'Lapplandsresa.',
    sub:
      'Vi säljer inga färdiga paket. Vi väljer ut byggstenarna, flyg, boende, huskydagar, norrskensturer, och du bokar varje del till partnerns pris i realtid. Ingen mellanhandsavgift.',
    seoTitle: 'Paketerbjudanden i Lappland: norrskensvecka, familjeresor, weekender',
    seoDesc:
      'Idéer för flerdagarsresor i Lappland: norrskensvecka i Saariselkä, familjeresor i Rovaniemi, weekendresor. Varje del bokas separat till partnerns priser i realtid.',
    curatedTitle: 'Utvalda reseidéer',
    pairTitle: 'Kombinera dessa med ditt boende',
    pairLead: 'Byggstenarna som de flesta resenärer staplar till en 4–7 nätters Lapplandsresa.',
  },
  summerPage: {
    introTitle: 'Argumenten för att åka på sommaren',
    introP1: 'Under 32 dagar, från 6 juni till 7 juli, går solen inte ner i nordligaste Lappland, och det förändrar vad en dag är och inte bara hur den ser ut. Du kan starta en vandring klockan nio på kvällen och komma tillbaka i dagsljus. Efterfrågan faller i maj när norrskenssäsongen tar slut och liftarna stannar, så samma sjönära stugor som var fullbokade i februari har tomma veckor.',
    introP2: 'Slutet av augusti är det andra fönstret: vandringen är som bäst, myggen är borta, och ruskan färgar fjällen före första snön. Ta med en sovmask och se ljuset som skälet att åka, inte som ett problem att hantera.',
    eyebrow: 'Midnattssol · 6 juni – 7 juli',
    h1Italic: 'Sommaren i Lappland',
    h1: 'är det dolda fyndet.',
    sub:
      'I 32 dygn går solen aldrig ner. Stugor vid sjön för en bråkdel av decemberpriserna. Vandringen kulminerar i slutet av augusti, ren luft, inga myggor, guldgul ruska.',
    seoTitle: 'Sommarerbjudanden i Lappland: boende i midnattssol och vandring',
    seoDesc:
      'I 32 dygn går solen aldrig ner i finska Lappland (6 juni – 7 juli). Stugerbjudanden i midnattssol, vandring i Pallas-Yllästunturi, sommarboende vid sjön för en bråkdel av vinterpriserna.',
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
    title: 'Lapplandserbjudanden: dina frågor, besvarade.',
    lead: 'Ärliga svar om tajming, bokningsfönster och vad du kan vänta dig. Inga påhittade priser, ingen falsk brådska.',
    items: [
      {
        q: 'När är det billigast att besöka Lappland?',
        a: 'Sen vår och sommar, ungefär maj till augusti, är lugnast och mest prisvärda. Norrskenssäsongen är slut och skidorterna har stängt, så stugor vid sjön som var slutsålda i februari står tomma. Inom vintern är mellansäsongsveckorna (mitten av mars till mitten av april) billigare än topparna vid jul och sportlovet, samtidigt som snötäcket är som djupast och dagarna längre.',
      },
      {
        q: 'Hur långt i förväg bör jag boka en Lapplandsresa?',
        a: 'Det beror på säsongen. Jul och nyår är tajtast: glasigloor och familjerum i Santa Claus Village stänger ofta för bokning i slutet av augusti. Norrskenssäsongen (ungefär november till mars) är lugnare, men populära helger fylls tidigt. Vår, sommar och höst kräver sällan flera månaders framförhållning. Flyg från Helsingfors brukar vara billigast bokat några veckor i förväg, utanför topparna vid jul, påsk och sportlovet.',
      },
      {
        q: 'Är sista minuten-erbjudanden i Lappland värda det?',
        a: 'Ofta, ja, utanför de få topparna. När en stuga, huskyplats eller norrskenstur har osålda platser nära datumet släpper partnern dem till priset i realtid, och norrskens- och huskyturer tar ofta emot bokningar fram till cirka 24 timmar innan. Undantagen är jul, nyår, påsk (pääsiäinen) och sportlovet, när efterfrågan är hög och det sällan lönar sig att vänta.',
      },
      {
        q: 'Vad ingår i ett typiskt Lappland-paket?',
        a: 'Det varierar mellan arrangörer, så läs alltid vad som ingår. Ett vanligt paket kombinerar några nätters boende med en eller två aktiviteter, en huskysafari, en norrskenstur eller en skotertur, och ibland flygplatstransfer. På LaplandDeals säljer vi inga färdiga paket; vi väljer ut byggstenarna (flyg, boende, aktiviteter, biluthyrning) så att du bokar varje del till partnerns pris i realtid utan mellanhandsavgift.',
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
      { anchor: 'hotellerbjudanden & paket', blurb: 'Glasigloor, norrskenssviter och familjeresorter i finska Lappland.' },
      { anchor: 'erbjudanden på aktiviteter & safarier', blurb: 'Huskysafarier, norrskensturer, skoterturer och rengårdar med tillgänglighet i realtid.' },
      { anchor: 'all-inclusive-turpaket', blurb: 'Guidade flerdagarsupplägg som syr ihop boende, transfer och aktiviteter.' },
    ],
  },
}

export default sv
