import type { SectionCopy } from './types'

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

export default fi
