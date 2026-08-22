import type { SectionCopy } from './types'

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
    eyebrow: 'Last Minute · Günstige Deals · Polarlicht-Saison',
    h1Line1Italic: 'Lapplands günstigste',
    h1Line1Bold: '',
    h1Line2: 'Last-Minute-Deals.',
    lead:
      'Frei gewordene Hotelnächte, unverkaufte Husky- und Schneemobilplätze, günstige Pakete und freie Hütten, alles an einem Ort. Ein Klick führt direkt zum aktuellen Preis des Partners.',
    primary: 'Hotel-Deals heute Abend',
    secondary: 'Günstige Polarlicht-Touren',
    eyebrowSummer: 'Last Minute · Günstige Deals · Mitternachtssonne',
    leadSummer:
      'Die günstigste Saison des Jahres: Mitternachtssonnen-Hütten unter Winterpreisen, freie Aktivitätsplätze, Flüge nach Rovaniemi und Sommer-Mietwagen. Ein Klick führt direkt zum aktuellen Preis des Partners.',
    secondarySummer: 'Mitternachtssonnen-Deals',
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
    okTitle: 'Fast geschafft.',
    okBody: 'Bestätigen Sie Ihr Abo über die E-Mail, die wir Ihnen gerade geschickt haben.',
    fineprint: 'Wir senden nur, wenn es neue Angebote gibt. Abmeldung mit einem Klick. Wir geben Ihre Adresse nicht weiter.',
    error: 'Anmeldung gerade nicht möglich. Bitte versuchen Sie es in einem Moment erneut.',
  },
  hotelsPage: {
    eyebrow: 'Hotels & Hütten',
    h1Italic: 'Hotels in Lappland',
    h1: 'Live-Preise für heute Abend.',
    sub:
      'Glas-Iglus im Polarlichtgürtel, pistennahe Häuser in Levi, Wildnis-Lodges in Ylläs, Familienhotels in Rovaniemi. Vergleichen Sie die heutigen Raten in Echtzeit.',
    seoTitle: 'Lappland Hotelangebote, Glas-Iglus, Pistennah, Hütten',
    seoDesc:
      'Live-Preise für Glas-Iglus, Ski-in-Unterkünfte, Familienhotels und Wildnis-Lodges in Finnisch-Lappland. Last-Minute- und Saisonende-Hütten.',
    bottomTitle: 'Ihr Reiseziel nicht dabei?',
    bottomLead: 'Suchen Sie jeden Ort in Lappland direkt auf Trip.com.',
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
      'Live-Flugpreise von Trip.com: Helsinki nach Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) und Kemi. Direktflüge mit Finnair und Norwegian, vorausgefüllt, buchbar.',
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
      'EconomyBookings Live-Preise für Mietwagen an den Flughäfen Rovaniemi, Kittilä, Ivalo und Kuusamo (Ruka). Spikereifen für die Winterfahrt inklusive.',
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

export default de
