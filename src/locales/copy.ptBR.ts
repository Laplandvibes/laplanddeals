import type { SectionCopy } from './types'

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
    eyebrow: 'Last minute · Ofertas baratas · Temporada de auroras',
    h1Line1Italic: 'As ofertas de última hora',
    h1Line1Bold: '',
    h1Line2: 'mais baratas da Lapônia.',
    lead:
      'Diárias de hotel liberadas, vagas sobrando em safáris de husky e snowmobile, pacotes baratos e cabanas livres, tudo num lugar só. Um clique leva direto ao preço atual do parceiro.',
    primary: 'Ofertas de hotel para hoje',
    secondary: 'Passeios de aurora baratos',
    eyebrowSummer: 'Last minute · Ofertas baratas · Sol da meia-noite',
    leadSummer:
      'A temporada mais barata do ano: cabanas sob o sol da meia-noite por menos que no inverno, vagas em atividades, voos para Rovaniemi e carros de verão. Um clique leva direto ao preço atual do parceiro.',
    secondarySummer: 'Ofertas do sol da meia-noite',
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
        when: 'A partir do fim de agosto',
        title: 'A temporada de aurora recomeça',
        body: 'A janela ativa vai mais ou menos do fim de agosto ao início de abril. Saariselkä, Inari e Utsjoki têm as maiores taxas de aurora visível. As caças costumam ser canceladas até 24h antes, então é fácil adicionar de última hora.',
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
      body: 'Mais de 27 sites parceiros. Um ecossistema, uma única fonte da verdade.',
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
    okTitle: 'Quase lá.',
    okBody: 'Confirme sua inscrição no e-mail que acabamos de enviar.',
    fineprint: 'Só enviamos quando há algo que realmente vale a pena. Cancelamento em um clique. Nunca compartilhamos seu endereço.',
    error: 'Não foi possível inscrever agora. Tente novamente daqui a pouco.',
  },
  hotelsPage: {
    eyebrow: 'Hotéis e cabanas',
    h1Italic: 'Hotéis da Lapônia',
    h1: 'preços reais, hoje à noite.',
    sub:
      'Iglus de vidro sob o cinturão de aurora, acomodações ao pé da pista em Levi, lodges no meio da floresta em Ylläs, hotéis para a família em Rovaniemi. Compare as tarifas desta noite em tempo real.',
    seoTitle: 'Ofertas de hotéis na Lapônia, Iglus de vidro e cabanas',
    seoDesc:
      'Preços ao vivo para iglus de vidro, hospedagens ski-in, hotéis para a família e lodges selvagens em toda a Lapônia finlandesa.',
    bottomTitle: 'Não encontrou seu destino?',
    bottomLead: 'Busque qualquer cidade da Lapônia direto no Trip.com.',
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
    introTitle: 'Para qual aeroporto da Lapônia você deve realmente voar',
    introP1: 'De Helsinque há quatro portões práticos, e o certo é decidido por onde você dorme, não pelo preço da passagem. Rovaniemi atende a própria cidade, o Ounasvaara e a estrada do leste. Kittilä é o transfer curto para Levi e Ylläs. Ivalo cobre Saariselkä e Inari, o extremo norte. Kuusamo é o de Ruka.',
    introP2: 'O voo em si leva cerca de uma hora e meia, então uma passagem mais barata para o aeroporto errado pode custar duas horas de estrada do outro lado. As tarifas são puxadas ao vivo do parceiro em vez de armazenadas, e as rotas são operadas por Finnair e Norwegian.',
    eyebrow: 'Voos',
    h1Italic: 'Voos para a Lapônia',
    h1: 'tarifas reais do Trip.com.',
    sub:
      'De Helsinki para todo portão da Lapônia, com datas pré-preenchidas. Clique para ver tarifas reais da Finnair e da Norwegian.',
    seoTitle: 'Voos para a Lapônia, Ofertas do Trip.com de Helsinki',
    seoDesc:
      'Preços de voos em tempo real no Trip.com: Helsinki para Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) e Kemi. Tarifas diretas da Finnair e da Norwegian.',
    bottomTitle: 'Vindo de fora da Finlândia?',
    bottomLead: 'Busque qualquer origem para qualquer aeroporto da Lapônia no Trip.com.',
    bottomCta: 'Abrir a busca de voos no Trip.com →',
  },
  carsPage: {
    introTitle: 'O que um carro alugado na Lapônia precisa mesmo ter',
    introP1: 'Duas coisas decidem se um carro funciona aqui em cima, e nenhuma é o logo no capô: pneus e altura do solo. Os carros de inverno dos aeroportos da Lapônia vêm preparados para as condições, com cravos onde a locadora informa, então a escolha que importa é o tamanho. Um carro pequeno dá conta das estradas principais entre as cidades; um 4x4 justifica o preço nas secundárias sem limpeza de neve e nas entradas de cabana.',
    introP2: 'A retirada é em Rovaniemi, Kittilä, Ivalo e Kuusamo, o que cobre todos os portões da página de voos, e a locação de mão única funciona entre a maioria dos aeroportos finlandeses, caso você queira entrar e sair por cidades diferentes. Os preços vêm ao vivo do parceiro: você vê a tarifa de hoje, não um print antigo.',
    eyebrow: 'Aluguel de carro',
    h1Italic: 'Carros prontos para o inverno',
    h1: 'preços reais do parceiro.',
    sub:
      'Pneus com pinos, 4x4, autonomia livre para caçar aurora. Retirada em todos os aeroportos da Lapônia, compare no EconomyBookings.',
    seoTitle: 'Aluguel de carro na Lapônia, Pneus com pinos, 4x4',
    seoDesc:
      'Preços em tempo real no EconomyBookings para aluguel de carro nos aeroportos de Rovaniemi, Kittilä, Ivalo e Kuusamo (Ruka). Pneus com pinos inclusos.',
    bottomTitle: 'Retirar em Helsinki ou devolver em outro aeroporto?',
    bottomLead: 'O EconomyBookings aceita aluguel one-way entre a maioria dos aeroportos finlandeses.',
    bottomCta: 'Abrir o EconomyBookings →',
  },
  packagesPage: {
    introTitle: 'Por que não vendemos pacote fechado',
    introP1: 'Uma semana na Lapônia empacotada junta voo, hotel e duas atividades atrás de um preço só, e é no pacote que a margem se esconde. Nós listamos os mesmos blocos separadamente: o voo, a hospedagem, o dia de husky, a noite de aurora. Você reserva cada um pela tarifa ao vivo do parceiro, e ninguém acrescenta uma camada por cima.',
    introP2: 'A maioria das viagens se acomoda entre quatro e sete noites, o bastante para duas ou três atividades grandes mais a folga de clima que a caça à aurora exige. Construa a partir da hospedagem: é a cama que decide qual aeroporto faz sentido e quais atividades ficam ao alcance, não o contrário.',
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
    introTitle: 'O argumento para ir no verão',
    introP1: 'Durante 32 dias, de 6 de junho a 7 de julho, o sol não se põe no extremo norte, e isso muda o que é um dia, não apenas como ele parece. Dá para começar uma caminhada às nove da noite e voltar com luz. A procura despenca em maio, quando a temporada de aurora acaba e os teleféricos param: as mesmas cabanas à beira do lago que estavam lotadas em fevereiro têm semanas vazias.',
    introP2: 'O fim de agosto é a outra janela: a caminhada está no melhor momento, os mosquitos já foram, e o ruska tinge os fjälls antes da primeira neve. Leve uma máscara de dormir e trate a luz como o motivo para ir, não como algo a contornar.',
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
        a: 'Muitas vezes sim, fora dos poucos períodos de pico. Quando uma cabana, uma vaga de husky ou uma caça à aurora tem espaço não vendido perto da data, os parceiros a liberam pelo preço em tempo real, e os passeios de aurora e de husky frequentemente aceitam reservas até cerca de 24 horas antes. As exceções são Natal, Ano-Novo, Páscoa e as férias escolares de fevereiro, quando a procura é alta e esperar raramente ajuda.',
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

export default ptBR
