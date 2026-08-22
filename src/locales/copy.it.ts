import type { SectionCopy } from './types'

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
    eyebrow: 'Last minute · Offerte convenienti · Stagione delle aurore',
    h1Line1Italic: 'Le offerte last minute',
    h1Line1Bold: '',
    h1Line2: 'più economiche della Lapponia.',
    lead:
      'Notti d\'hotel liberate, posti invenduti per husky e motoslitte, pacchetti economici e baite libere, tutto in un unico posto. Un clic ti porta dritto al prezzo attuale del partner.',
    primary: 'Offerte hotel per stasera',
    secondary: 'Tour aurora economici',
    eyebrowSummer: 'Last minute · Offerte convenienti · Sole di mezzanotte',
    leadSummer:
      'La stagione più economica dell\'anno: baite sotto il sole di mezzanotte a meno dei prezzi invernali, posti liberi nelle attività, voli per Rovaniemi e auto estive. Un clic ti porta dritto al prezzo attuale del partner.',
    secondarySummer: 'Offerte sole di mezzanotte',
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
    okTitle: 'Ci siamo quasi.',
    okBody: 'Conferma l\'iscrizione dall\'e-mail che ti abbiamo appena inviato.',
    fineprint: 'Solo quando c\'è davvero qualcosa che vale la pena segnalare. Disiscrizione in un clic. Non condividiamo mai il Suo indirizzo.',
    error: 'Impossibile iscrivere ora. Riprovi tra poco.',
  },
  hotelsPage: {
    eyebrow: 'Hotel & baite',
    h1Italic: 'Hotel in Lapponia',
    h1: 'tariffe in tempo reale, stanotte.',
    sub:
      "Igloo di vetro sotto la fascia aurorale, hotel a bordo pista a Levi, lodge nella natura a Ylläs, hotel per famiglie a Rovaniemi. Confronti le tariffe di stanotte in tempo reale.",
    seoTitle: 'Offerte hotel Lapponia, Igloo di vetro, pista, baite',
    seoDesc:
      'Tariffe in tempo reale per igloo di vetro, soggiorni ski-in, hotel per famiglie e lodge nella natura in tutta la Lapponia finlandese.',
    bottomTitle: 'Non trova la Sua destinazione?',
    bottomLead: 'Cerchi qualsiasi località della Lapponia direttamente su Trip.com.',
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
      "Tariffe GetYourGuide in tempo reale su safari con gli husky, cacce all'aurora, motoslitte, fattorie di renne e pesca sul ghiaccio in Lapponia finlandese.",
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
      'Tariffe voli Trip.com in tempo reale: Helsinki per Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) e Kemi. Voli diretti Finnair e Norwegian.',
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
      "Tariffe EconomyBookings in tempo reale sull'autonoleggio negli aeroporti di Rovaniemi, Kittilä, Ivalo e Kuusamo (Ruka). Gomme chiodate invernali incluse.",
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

export default it
