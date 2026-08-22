import type { SectionCopy } from './types'

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
    eyebrow: 'Last minute · Bons plans · Saison des aurores',
    h1Line1Italic: 'Les offres last minute',
    h1Line1Bold: '',
    h1Line2: 'les moins chères de Laponie.',
    lead:
      'Nuits d\'hôtel libérées, places restantes en safari en traîneau de huskies et motoneige, forfaits pas chers et chalets disponibles, le tout au même endroit. Un clic vous amène directement au prix actuel du partenaire.',
    primary: 'Offres d\'hôtel pour ce soir',
    secondary: 'Tours aurores pas chers',
    eyebrowSummer: 'Last minute · Bons plans · Soleil de minuit',
    leadSummer:
      'La saison la moins chère de l\'année : chalets sous le soleil de minuit en dessous des prix d\'hiver, places d\'activités libres, vols pour Rovaniemi et voitures d\'été. Un clic vous amène directement au prix actuel du partenaire.',
    secondarySummer: 'Offres soleil de minuit',
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
    okTitle: 'Presque fini.',
    okBody: 'Confirmez votre inscription depuis l\'e-mail que nous venons de vous envoyer.',
    fineprint: 'Uniquement lorsqu\'il y a vraiment quelque chose à signaler. Désabonnement en un clic. Nous ne partageons jamais votre adresse.',
    error: "Impossible de s'inscrire pour le moment. Veuillez réessayer dans un instant.",
  },
  hotelsPage: {
    eyebrow: 'Hôtels & chalets',
    h1Italic: 'Hôtels en Laponie',
    h1: 'tarifs en direct, ce soir.',
    sub:
      "Igloos de verre sous la ceinture aurorale, hôtels au pied des pistes à Levi, lodges en pleine nature à Ylläs, hôtels familiaux à Rovaniemi. Comparez les tarifs de ce soir en temps réel.",
    seoTitle: 'Offres hôtels Laponie, Igloos de verre, pistes, chalets',
    seoDesc:
      'Tarifs en direct pour igloos de verre, séjours ski-in, hôtels familiaux et lodges en pleine nature à travers la Laponie finlandaise.',
    bottomTitle: 'Vous ne voyez pas votre destination ?',
    bottomLead: 'Recherchez n\'importe quelle ville de Laponie directement sur Trip.com.',
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
      "Tarifs vols Trip.com en direct : Helsinki vers Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) et Kemi. Vols directs Finnair et Norwegian, pré-remplis.",
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
      'Tarifs EconomyBookings en direct sur la location de voitures aux aéroports de Rovaniemi, Kittilä, Ivalo et Kuusamo (Ruka). Pneus cloutés inclus.',
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

export default fr
