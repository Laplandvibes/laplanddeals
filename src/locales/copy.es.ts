import type { SectionCopy } from './types'

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
    eyebrow: 'Last minute · Ofertas baratas · Temporada de auroras',
    h1Line1Italic: 'Las ofertas last minute',
    h1Line1Bold: '',
    h1Line2: 'más baratas de Laponia.',
    lead:
      'Noches de hotel liberadas, plazas libres en safaris de huskies y motos de nieve, paquetes baratos y cabañas disponibles, todo en un solo sitio. Un clic te lleva directo al precio actual del socio.',
    primary: 'Ofertas de hotel para esta noche',
    secondary: 'Tours de auroras baratos',
    eyebrowSummer: 'Last minute · Ofertas baratas · Sol de medianoche',
    leadSummer:
      'La temporada más barata del año: cabañas bajo el sol de medianoche por menos que en invierno, plazas libres en actividades, vuelos a Rovaniemi y coches de verano. Un clic te lleva directo al precio actual del socio.',
    secondarySummer: 'Ofertas de sol de medianoche',
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
    okTitle: 'Ya casi.',
    okBody: 'Confirma tu suscripción desde el correo que acabamos de enviarte.',
    fineprint: 'Solo cuando hay algo que merece la pena. Baja en un clic. Nunca compartimos su dirección.',
    error: 'No se ha podido suscribir ahora mismo. Inténtelo de nuevo en un momento.',
  },
  hotelsPage: {
    eyebrow: 'Hoteles y cabañas',
    h1Italic: 'Hoteles de Laponia',
    h1: 'precios reales, esta noche.',
    sub:
      'Iglús de cristal bajo el cinturón de auroras, alojamientos junto a las pistas en Levi, lodges salvajes en Ylläs, hoteles familiares en Rovaniemi. Compare las tarifas de esta noche en tiempo real.',
    seoTitle: 'Ofertas de hoteles en Laponia, Iglús de cristal y cabañas',
    seoDesc:
      'Precios en directo para iglús de cristal, alojamientos ski-in, hoteles familiares y lodges salvajes en la Laponia finlandesa.',
    bottomTitle: '¿No ve su destino?',
    bottomLead: 'Busque cualquier pueblo de Laponia directamente en Trip.com.',
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
      'Precios reales de vuelos en Trip.com: Helsinki a Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) y Kemi. Tarifas directas de Finnair y Norwegian.',
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
      'Precios en directo de EconomyBookings para alquiler de coches en los aeropuertos de Rovaniemi, Kittilä, Ivalo y Kuusamo (Ruka). Neumáticos con clavos incluidos.',
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

export default es
