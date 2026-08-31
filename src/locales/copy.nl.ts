import type { SectionCopy } from './types'

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
    eyebrow: 'Last minute · Goedkope deals · Noorderlichtseizoen',
    h1Line1Italic: 'De goedkoopste last-minute',
    h1Line1Bold: '',
    h1Line2: 'deals van Lapland.',
    lead:
      'Vrijgekomen hotelnachten, onverkochte husky- en sneeuwscooterplekken, goedkope pakketten en vrije huisjes, alles op één plek. Eén klik brengt u rechtstreeks naar de actuele prijs van de partner.',
    primary: 'Hoteldeals voor vanavond',
    secondary: 'Goedkope noorderlichttours',
    eyebrowSummer: 'Last minute · Goedkope deals · Middernachtzon',
    leadSummer:
      'Het goedkoopste seizoen van het jaar: middernachtzon-huisjes onder winterprijzen, vrije activiteitenplekken, vluchten naar Rovaniemi en zomerhuurauto\'s. Eén klik brengt u rechtstreeks naar de actuele prijs van de partner.',
    secondarySummer: 'Middernachtzon-deals',
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
        body: 'Tot eind juli gaat de zon nauwelijks onder. Hutten aan het meer liggen ruim onder de winterprijzen, en dezelfde fjälls die in februari uitverkocht waren, zijn nu stil. Het beste prijsmoment van het jaar.',
      },
      {
        when: 'Nu tot en met augustus',
        title: 'Wandel- en waterseizoen',
        body: 'Pallas-Yllästunturi en de oostelijke fjälls zijn droog en open. Lange dagen om te wandelen, te suppen en in het meer te zwemmen. De muggen nemen in de loop van augustus af; neem voor eind juni een hoofdnetje mee.',
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
        body: 'Finnair- en Norwegian-retourvluchten HEL→Lapland zakken naar € 89-129 als u 4-8 weken vooraf boekt, buiten de pieken van Kerst, Pasen en de februarivakantie.',
      },
      {
        when: 'Vanaf eind augustus',
        title: 'Het noorderlichtseizoen begint weer',
        body: 'Het actieve venster loopt ruwweg van eind augustus tot begin april. Saariselkä, Inari en Utsjoki hebben de hoogste kans op zichtbaar noorderlicht. Een jacht wordt meestal tot 24 u vooraf geannuleerd, dus u voegt hem makkelijk last-minute toe.',
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
      body: '27+ zustersites. Eén ecosysteem, één bron van waarheid.',
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
    okTitle: 'Bijna klaar.',
    okBody: 'Bevestig uw aanmelding via de e-mail die we net hebben gestuurd.',
    fineprint: 'Alleen wanneer er echt iets te melden is. Met één klik uit te schrijven. Wij delen uw adres nooit.',
    error: 'Inschrijven lukt nu niet. Probeer het zo opnieuw.',
  },
  hotelsPage: {
    eyebrow: 'Hotels & hutten',
    h1Italic: 'Lapland-hotels',
    h1: 'live prijzen, vannacht.',
    sub:
      "Glazen iglo's onder de noorderlicht-band, hotels aan de piste in Levi, wildernislodges in Ylläs, gezinshotels in Rovaniemi. Vergelijk de tarieven van vannacht in realtime.",
    seoTitle: "Lapland-hotelaanbiedingen, Glazen iglo's, piste, hutten",
    seoDesc:
      "Live prijzen voor glazen iglo's, ski-in-verblijven, gezinshotels en wildernislodges in heel Fins Lapland. Last-minute en eindseizoens-hutnachten.",
    bottomTitle: 'Ziet u uw bestemming niet?',
    bottomLead: 'Zoek elke Lapland-stad direct op Trip.com.',
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
    introTitle: 'Naar welke Laplandse luchthaven u werkelijk moet vliegen',
    introP1: 'Vanuit Helsinki zijn er vier praktische poorten, en de juiste wordt bepaald door waar u slaapt, niet door de ticketprijs. Rovaniemi bedient de stad zelf, de Ounasvaara en de oostelijke route. Kittilä is de korte transfer naar Levi en Ylläs. Ivalo dekt Saariselkä en Inari, het verre noorden. Kuusamo is die voor Ruka.',
    introP2: 'De vlucht zelf duurt ongeveer anderhalf uur, dus een goedkoper ticket naar de verkeerde luchthaven kan u aan de andere kant twee uur weg kosten. De prijzen worden live bij de partner opgehaald in plaats van opgeslagen, en de routes worden gevlogen door Finnair en Norwegian.',
    eyebrow: 'Vluchten',
    h1Italic: 'Vluchten naar Lapland',
    h1: 'live Trip.com-tarieven.',
    sub:
      "Helsinki naar elke Lapland-luchthaven, vooraf ingevuld en gedateerd. Klik door naar echte Finnair- en Norwegian-tarieven.",
    seoTitle: 'Vluchten naar Lapland, Trip.com-deals vanuit Helsinki',
    seoDesc:
      'Live Trip.com-vluchtprijzen: Helsinki naar Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) en Kemi. Directe Finnair- en Norwegian-tarieven, vooraf ingevuld.',
    bottomTitle: 'Reist u van buiten Finland?',
    bottomLead: 'Zoek elke oorsprong naar elke Lapland-luchthaven op Trip.com.',
    bottomCta: 'Open Trip.com vluchtenzoekopdracht →',
  },
  carsPage: {
    introTitle: 'Wat een huurauto in Lapland echt moet hebben',
    introP1: 'Twee dingen bepalen of een auto hier bruikbaar is, en geen van beide is het merk op de motorkap: banden en bodemvrijheid. Winterauto\'s van de Laplandse luchthavens zijn uitgerust voor de omstandigheden, met spijkers waar de verhuurder dat aangeeft, dus de zinvolle keuze is de maat. Een kleine auto volstaat op de hoofdwegen tussen de plaatsen; een vierwielaandrijver verdient zijn prijs op ongeruimde zijwegen en hutopritten.',
    introP2: 'Ophalen kan in Rovaniemi, Kittilä, Ivalo en Kuusamo, waarmee alle luchthavens van de vluchtenpagina gedekt zijn, en eenrichtingshuur loopt tussen de meeste Finse luchthavens als u op verschillende plaatsen in- en uit wilt vliegen. De prijzen komen live van de partner, u ziet dus het tarief van vandaag en geen oude schermafbeelding.',
    eyebrow: 'Autoverhuur',
    h1Italic: "Winterklare auto's",
    h1: 'live partnerprijzen.',
    sub:
      "Spijkerbanden, 4x4, vrij bereik voor noorderlicht-jachten. Ophalen op elke Lapland-luchthaven, vergelijk op EconomyBookings.",
    seoTitle: 'Lapland-autoverhuur, Spijkerbanden, 4x4, luchthaven',
    seoDesc:
      "Live EconomyBookings-prijzen voor autoverhuur op de luchthavens van Rovaniemi, Kittilä, Ivalo en Kuusamo (Ruka). Spijkerbanden inbegrepen voor winterrijden.",
    bottomTitle: 'Helsinki ophalen of enkele reis inleveren?',
    bottomLead: 'EconomyBookings ondersteunt enkele-reis huur tussen de meeste Finse luchthavens.',
    bottomCta: 'Open EconomyBookings →',
  },
  packagesPage: {
    introTitle: 'Waarom wij geen kant-en-klaar pakket verkopen',
    introP1: 'Een verpakte Laplandweek bundelt een vlucht, een hotel en twee activiteiten achter één prijs, en in die bundel zit de marge verstopt. Wij zetten dezelfde bouwstenen los neer: de vlucht, het verblijf, de huskydag, de noorderlichtavond. U boekt elk tegen het livetarief van de partner, en niemand legt er een eigen laag overheen.',
    introP2: 'De meeste reizen komen uit op vier tot zeven nachten, genoeg voor twee of drie grote activiteiten plus de weersmarge die noorderlichtjacht vraagt. Bouw vanaf het verblijf naar buiten: het bed bepaalt welke luchthaven klopt en welke activiteiten binnen bereik liggen, niet andersom.',
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
    introTitle: 'Waarom u in de zomer zou gaan',
    introP1: '32 dagen lang, van 6 juni tot 7 juli, gaat de zon in het uiterste noorden niet onder, en dat verandert wat een dag is, niet alleen hoe die eruitziet. U kunt om negen uur \'s avonds aan een wandeling beginnen en bij daglicht terugkomen. In mei stort de vraag in wanneer het noorderlichtseizoen eindigt en de liften stilvallen, en dezelfde hutten aan het meer die in februari vol zaten hebben lege weken.',
    introP2: 'Eind augustus is het tweede venster: het wandelen is op zijn best, de muggen zijn weg, en de ruska kleurt de fjälls voor de eerste sneeuw. Neem een slaapmasker mee en zie het licht als de reden om te komen, niet als iets om omheen te werken.',
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
        a: 'Vaak wel, buiten de paar piekperiodes. Wanneer een hut, een husky-plek of een noorderlichttocht vlak voor de datum nog onverkochte ruimte heeft, geven partners die vrij tegen de live prijs, en noorderlicht- en huskytochten nemen vaak tot ongeveer 24 uur van tevoren nog boekingen aan. De uitzonderingen zijn Kerst, Oud en Nieuw, Pasen en de februarivakantie, wanneer de vraag hoog is en wachten zelden helpt.',
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

export default nl
