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
    h1Line1Italic: 'Halvat viime hetken',
    h1Line1Bold: '',
    h1Line2: 'diilit Lappiin.',
    lead:
      'Vapautuneet hotelliyöt, täyttymättömät husky- ja kelkkaretket, edulliset paketit ja vapaat mökit yhdessä paikassa. Klikkaus vie kumppanin sivulle, jossa näet ja varaat ajantasaisen hinnan.',
    primary: 'Illan hotellidiilit',
    secondary: 'Halvat revontuliretket',
    eyebrowSummer: 'Last minute · Vapautuneet paikat · Yötön yö',
    leadSummer:
      'Vuoden halvin kausi: yöttömän yön mökit talvihintoja halvemmalla, vapaat retkipaikat, lennot Rovaniemelle ja kesän vuokra-autot. Klikkaus vie kumppanin sivulle, jossa näet ja varaat ajantasaisen hinnan.',
    secondarySummer: 'Yötön yö -diilit',
    secondaryTo: '/activities',
    secondaryToSummer: '/summer',
  },
  flashBand: {
    leadBold: 'Suoraan kumppanin hinta',
    leadRest:
      ' · klikkaus vie kumppanin sivulle, jossa näet hinnan. Emme keksi prosentteja emmekä pyöritä tekaistuja lähtölaskentoja.',
    cta: 'Tämän illan hotellit →',
  },
  sections: {
    pickEyebrow: 'Toimituksen poiminta',
    pickTitle: 'Käsin valittu tulevalle kaudelle.',
    pickLead:
      'Paikat, joihin lähettäisimme ystävämme. Jokainen kortti vie suoraan kumppanin omaan hintaan.',
    pickCta: 'Kaikki hotellit',

    categoriesEyebrow: 'Selaa kategorian mukaan',
    categoriesTitle: 'Etsi tarjous omaan matkaasi.',

    lastMinEyebrow: 'Last-minute -ikkuna',
    lastMinTitle: 'Lähdössä parin viikon sisällä?',
    lastMinLead:
      'Mökkiöitä, huskypaikkoja ja revontulisafareita, joissa on usein vapaita paikkoja viime hetkellä. Vapaat paikat ja hinnan näet suoraan kumppanilta.',

    summerEyebrow: 'Yötön yö · 6.6.–7.7.',
    summerTitle: 'Lapin kesä on salainen tarjous.',
    summerLead:
      'Aurinko ei laske 32 vuorokauteen. Järvenrantamökit murto-osalla joulukuun hinnoista. Vaeltaminen parhaimmillaan elokuun lopussa, puhdas ilma, ei hyttysiä, ruskan kulta.',
    summerCta: 'Selaa kesää',

    everythingEyebrow: 'Kaikki',
    everythingTitle: 'Tämän päivän valikoima.',
  },
  tiles: [
    { label: 'Hotellit & mökit', hint: 'Lasi-iglut · Rinneläheiset · Erämaalodget' },
    { label: 'Aktiviteetit', hint: 'Husky · Revontulet · Moottorikelkka · Porot' },
    { label: 'Lennot', hint: 'Helsinki–Rovaniemi · Kittilä · Ivalo · Kuusamo' },
    { label: 'Autovuokraus', hint: '4WD · Talvirenkaat · Lentokenttänouto' },
    { label: 'Matkapaketit', hint: 'Revontuliviikko · Perheloma · Viikonloppureissu' },
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
      body: '27+ sisarsivustoa. Yksi ekosysteemi, yksi luotettava lähde.',
    },
  ],
  newsletter: {
    kicker: '#LaplandVibes-uutiskirje',
    titleItalic: 'Nappaa tarjoukset',
    titleRest: 'ennen kuin ne katoavat.',
    lead:
      'Last-minute-hintoja Lappiin, kauden lopun mökkihintojen pudotuksia ja yöttömän yön ikkunoita, jotka muuten menisivät ohi.',
    benefits: [
      {
        title: 'Aidot kumppanihinnat',
        body: 'Hinnan näet kumppanilta kun klikkaat. Ei keksittyjä prosentteja.',
      },
      {
        title: 'Last-minute-pudotukset',
        body: 'Mökkiöitä pohjahinnan alle, hiihtoviikkojen täyttöjä, hiljaisen kauden huskypaikkoja.',
      },
      {
        title: 'Kesä & yötön yö',
        body: '32 vuorokauden ikkuna 6.6. alkaen, eri kausi, eri tarjoukset.',
      },
      {
        title: 'Vain kun on asiaa',
        body: 'Kooste, ei tulvaa. Peruutuslinkki jokaisessa lähetyksessä.',
      },
    ],
    placeholder: 'Sähköpostiosoitteesi',
    cta: 'Liity listalle',
    sending: 'Lähetetään…',
    okTitle: 'Melkein valmista.',
    okBody: 'Käy vahvistamassa tilaus sähköpostiisi tulleesta viestistä.',
    fineprint: 'Lähetämme vain silloin kun on jotain oikeasti kerrottavaa. Peruutus yhdellä klikkauksella. Emme jaa osoitettasi.',
    error: 'Tilaaminen ei onnistunut juuri nyt. Yritä hetken päästä uudelleen.',
  },
  hotelsPage: {
    eyebrow: 'Hotellit & mökit',
    h1Italic: 'Lapin hotellit',
    h1: 'vapaat huoneet tänä iltana.',
    sub:
      'Lasi-iglut revontulivyöhykkeellä, rinneläheiset kohteet Levillä, erämaalodget Ylläksellä, perhehotellit Rovaniemellä. Vertaile tämän illan hintoja reaaliajassa.',
    seoTitle: 'Lapin hotellitarjoukset, lasi-iglut, rinne, mökit',
    seoDesc:
      'Ajantasaiset hinnat lasi-igluihin, rinneläheisiin majoituksiin, perhehotelleihin ja erämaalodgeihin Suomen Lapissa. Last-minute- ja kauden lopun mökkiöitä.',
    bottomTitle: 'Eikö kohdetta löytynyt?',
    bottomLead: 'Hae mitä tahansa Lapin paikkakuntaa suoraan Sembosta.',
    bottomCta: 'Selaa kaikkia Lapin hotelleja →',
  },
  activitiesPage: {
    eyebrow: 'Aktiviteetit',
    h1Italic: 'Lapin aktiviteetit',
    h1: 'reaaliaikainen saatavuus.',
    sub:
      'Huskysafarit, revontulisafarit, moottorikelkkaretket, porotilavierailut, pilkkiminen. Live-saatavuus GetYourGuidessa, ei valeajastimia, ei keksittyjä prosentteja.',
    seoTitle: 'Lapin aktiviteettitarjoukset, husky, revontulet, kelkka',
    seoDesc:
      'GetYourGuiden senhetkiset hinnat huskysafareihin, revontulisafareihin, moottorikelkkaretkiin, porotiloihin ja pilkkimiseen Suomen Lapissa. Last-minute-paikkoja.',
    bottomTitle: 'Selaa koko Lapin valikoimaa',
    bottomLead: '900+ retkeä, päiväreissua ja monipäiväistä seikkailua GetYourGuidessa.',
    bottomCta: 'Kaikki Lapin aktiviteetit →',
  },
  flightsPage: {
    introTitle: 'Mille Lapin kentälle kannattaa oikeasti lentää',
    introP1: 'Helsingistä on neljä käytännön porttia, ja oikean ratkaisee se, missä nukut, ei lipun hinta. Rovaniemi palvelee kaupunkia itseään, Ounasvaaraa ja itäistä tietä. Kittilä on lyhyt siirtymä Leville ja Ylläkselle. Ivalo kattaa Saariselän ja Inarin eli kaukaisen pohjoisen. Kuusamo on se, josta mennään Rukalle.',
    introP2: 'Itse lento kestää noin puolitoista tuntia, joten halvempi lippu väärälle kentälle voi maksaa kaksi tuntia maantietä toisessa päässä. Hinnat haetaan kumppanilta livenä eikä tallenneta, ja reittejä lentävät Finnair ja Norwegian.',
    eyebrow: 'Lennot',
    h1Italic: 'Lennot Lappiin',
    h1: 'Trip.comin hinnat livenä.',
    sub:
      'Helsinki jokaiselle Lapin lentokentälle, valmiiksi täytetty ja päivätty. Klikkaa avataksesi Finnairin ja Norwegianin todelliset hinnat.',
    seoTitle: 'Lennot Lappiin, Trip.comin live-tarjoukset Helsingistä',
    seoDesc:
      'Trip.comin hinnat suoraan: Helsinki–Rovaniemi, Kittilä, Ivalo, Kuusamo (Ruka) ja Kemi. Suorat Finnair- ja Norwegian-lennot valmiiksi täytettyinä.',
    bottomTitle: 'Matkustatko Suomen ulkopuolelta?',
    bottomLead: 'Hae mitä tahansa lähtöä mille tahansa Lapin lentokentälle Trip.comissa.',
    bottomCta: 'Avaa Trip.comin lentohaku →',
  },
  carsPage: {
    introTitle: 'Mitä lappilaisessa vuokra-autossa pitää oikeasti olla',
    introP1: 'Kaksi asiaa ratkaisee, toimiiko auto täällä, eikä kumpikaan ole merkki konepellillä: renkaat ja maavara. Lapin lentoasemilta vuokrattavat talviautot on varustettu olosuhteiden mukaan, nastoitettu siellä, missä vuokraamo niin ilmoittaa, joten ratkaiseva valinta on koko. Pieni auto riittää kaupunkien välisillä pääteillä; nelivetoisen hinta maksaa itsensä takaisin auraamattomilla sivuteillä ja mökkiteillä.',
    introP2: 'Nouto on Rovaniemellä, Kittilässä, Ivalossa ja Kuusamossa, mikä kattaa kaikki lentosivun portit, ja yhdensuuntainen vuokraus onnistuu useimpien Suomen lentoasemien välillä, jos haluat lentää sisään ja ulos eri kaupungeista. Hinnat tulevat kumppanilta livenä, joten näet tämän päivän hinnan etkä vanhaa kuvakaappausta.',
    eyebrow: 'Autovuokraus',
    h1Italic: 'Talvivalmiit autot',
    h1: 'kumppanin hinnat suoraan.',
    sub:
      'Talvirenkaat, 4WD, riittävä matka revontulijahtiin. Nouto jokaiselta Lapin lentokentältä, vertaile EconomyBookingsissa.',
    seoTitle: 'Lapin autovuokraus: nastarenkaat, neliveto, kenttänouto',
    seoDesc:
      'EconomyBookingsin senhetkiset hinnat autovuokraukseen Rovaniemen, Kittilän, Ivalon ja Kuusamon (Ruka) lentokentiltä. Talvirenkaat sisältyvät.',
    bottomTitle: 'Helsingin nouto vai yksisuuntainen palautus?',
    bottomLead: 'EconomyBookings tukee yksisuuntaisia vuokrauksia useimpien Suomen lentokenttien välillä.',
    bottomCta: 'Avaa EconomyBookings →',
  },
  packagesPage: {
    introTitle: 'Miksi emme myy valmista pakettia',
    introP1: 'Valmis Lapin viikko niputtaa lennon, hotellin ja kaksi ohjelmaa yhden hinnan taakse, ja juuri niputuksessa kate piilee. Me listaamme samat rakennuspalikat erikseen: lennon, majoituksen, huskypäivän, revontuli-illan. Varaat jokaisen kumppanin livehinnalla, eikä kukaan lisää päälle omaa kerrostaan.',
    introP2: 'Useimmat matkat ovat neljästä seitsemään yötä, mikä riittää kahteen tai kolmeen isoon ohjelmaan ja siihen säävaraan, jota revontulien jahtaaminen vaatii. Rakenna majoituksesta ulospäin: vuode ratkaisee, mikä lentokenttä on oikea ja mitkä ohjelmat ovat ulottuvilla, eikä toisin päin.',
    eyebrow: 'Matkapaketit',
    h1Italic: 'Rakenna oma',
    h1: 'Lapin reissusi.',
    sub:
      'Emme myy suljettuja paketteja. Kuratoimme palaset (lennot, majoitukset, huskypäivät, revontulisafarit), ja sinä varaat jokaisen kumppanin live-hinnalla. Ei välityspalkkiota.',
    seoTitle: 'Lapin matkapaketit, revontuliviikko, perheloma, viikonloppu',
    seoDesc:
      'Monipäiväisiä Lapin matkaideoita: revontuliviikko Saariselällä, perheloma Rovaniemellä, viikonloppukarkureissut. Jokainen varataan erikseen kumppanin hinnalla.',
    curatedTitle: 'Kuratoidut matkaideat',
    pairTitle: 'Yhdistä nämä majoitukseesi',
    pairLead: 'Palaset, jotka useimmat matkailijat kasaavat 4–7 yön Lapin matkaan.',
  },
  summerPage: {
    introTitle: 'Miksi kesällä kannattaa tulla',
    introP1: '32 päivän ajan, 6. kesäkuuta ja 7. heinäkuuta välillä, aurinko ei laske pohjoisimmassa Lapissa, ja se muuttaa sen, mitä päivä on, eikä vain sitä, miltä se näyttää. Voit lähteä vaellukselle yhdeksältä illalla ja palata päivänvalossa. Kysyntä romahtaa toukokuussa, kun revontulikausi loppuu ja hissit pysähtyvät, joten samoilla järvenrantamökeillä, jotka olivat täynnä helmikuussa, on tyhjiä viikkoja.',
    introP2: 'Elokuun loppu on toinen ikkuna: vaeltaminen on parhaimmillaan, hyttyset ovat menneet, ja ruska värittää tunturit ennen ensilunta. Ota unimaski mukaan ja pidä valoa syynä tulla, älä asiana, jota pitää kiertää.',
    eyebrow: 'Yötön yö · 6.6.–7.7.',
    h1Italic: 'Lapin kesä on',
    h1: 'salainen tarjous.',
    sub:
      'Aurinko ei laske 32 vuorokauteen. Järvenrantamökit murto-osalla joulukuun hinnoista. Vaeltaminen parhaimmillaan elokuun lopussa, puhdas ilma, ei hyttysiä, ruskan kulta.',
    seoTitle: 'Lapin kesätarjoukset, yöttömän yön majoitukset & vaellus',
    seoDesc:
      'Aurinko ei laske Suomen Lapissa 32 vuorokauteen (6.6.–7.7.). Yöttömän yön mökkialennukset, Pallas-Yllästunturin vaellukset, järvenrantakesä edullisesti.',
    offersTitle: 'Kesätarjoukset, kumppanin senhetkiset hinnat',
    offersFallback: 'Kesätarjoukset kuratoinnissa, palaa pian.',
    reasonsTitle: 'Kolme rehellistä syytä, miksi kesä on halvempi',
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
        body: 'Vaellat keskiyöllä. Uit kahdelta yöllä. Ehdit päivässä pidemmälle.',
      },
    ],
    cta: 'Etsi kesäviikko →',
  },
  // Live sections (2026-09-10): flights, cabins, cars, GYG widget, tonight strip.
  live: {
    "flights": {
      "eyebrow": "Live-hinnat · Travelpayouts",
      "title": "Halvimmat lennot Lappiin juuri nyt",
      "lead": "Travelpayoutsin välimuistin edullisin hinta jokaiselle Lapin kentälle Helsingistä sekä halvin lähtö seuraavan 14 päivän sisällä. Rivi avaa juuri sen hinnan.",
      "soon": "Seuraavat 14 päivää",
      "anyDate": "Halvin päivä",
      "oneWay": "yhteen suuntaan",
      "roundTrip": "meno-paluu",
      "from": "alk.",
      "checked": "Hinnat tarkistettu {time}",
      "all": "Kaikki lentotarjoukset"
    },
    "cabins": {
      "eyebrow": "Lomarengas · syöte päivittyy päivittäin",
      "title": "Lapin edullisimmat mökit tällä viikolla",
      "lead": "Aitoja mökkejä Lomarenkaan tuotesyötteestä viikkohinnan mukaan järjestettynä. Kuvat ja hinnat ovat Lomarenkaan omia.",
      "weekFrom": "viikko alk.",
      "guests": "hlö",
      "lastMinute": "Äkkilähdöt Lapin mökkeihin",
      "lastMinuteLead": "Lomarengas myy lähipäivien vapaat viikot alennettuun hintaan. Tämä linkki avaa sen suodattimen Lapin mökeille.",
      "view": "Katso mökki",
      "updated": "Syöte päivitetty {date}",
      "perWeek": "/viikko",
      "bedrooms": "mh",
      "starsLabel": "Lomarengas-laatuluokka"
    },
    "cars": {
      "eyebrow": "EconomyBookings · tarkistettu {date}",
      "title": "Vuokra-auto lentokentältä, oikeat kokonaishinnat",
      "lead": "Hinnat on poimittu vertailun tuloksista 4 päivän vuokralle veroineen. Rivi avaa saman haun samoilla päivillä.",
      "window": "Nouto {from}, palautus {to}",
      "total": "4 pv yhteensä",
      "operator": "Vuokraamo",
      "orSimilar": "tai vastaava",
      "auto": "Automaatti",
      "manual": "Manuaali",
      "cta": "Avaa tämä haku",
      "classNames": [
        "Pikkuauto",
        "Economy",
        "Compact",
        "Keskikoko",
        "Farmari",
        "SUV"
      ],
      "colAutoFirst": "Automaatit ensin",
      "airport": "Lentokenttä",
      "seats": "paikkaa",
      "days": "pv"
    },
    "activities": {
      "eyebrow": "GetYourGuide · vapaat paikat livenä",
      "title": "Retket, joihin mahtuu vielä",
      "lead": "Hinnat ja vapaat paikat tulevat suoraan GetYourGuidesta. Useimmat retket voi perua 24 tuntia ennen lähtöä.",
      "browse": "Kaikki Lapin retket GetYourGuidessa"
    },
    "tonight": {
      "eyebrow": "Tänä yönä",
      "title": "Yöpaikka tälle yölle",
      "lead": "Nappi avaa kumppanin haun tälle yölle, joten näet vain sen mitä on vielä vapaana.",
      "places": [
        "Levi",
        "Rovaniemi",
        "Saariselkä",
        "Ylläs",
        "Ruka",
        "Inari"
      ]
    },
    "sheet": {
      "kicker": "Live · lukuhetki joka rivillä",
      "h2": "Tänään Lapissa",
      "lead": "Jokainen rivi tällä arkilla on kumppanin oma hinta ja hetki, jolloin se luettiin. Mikään tässä ei ole arvio.",
      "note": "Hinnat luetaan kumppanien syötteistä ja sivuilta, ja ne muuttuvat ilman varoitusta; kumppanin sivu sanoo viimeisen sanan. Kuvat: Lomarengas. Lentohinnat ja yhtiöiden merkit: Travelpayouts. Autojen kokonaishinnat: EconomyBookings."
    },
    "list": {
      "sortBy": "Järjestä",
      "sortPrice": "Hinta",
      "sortDate": "Päivä",
      "sortStars": "Tähdet",
      "colCheapest": "Halvin ensin",
      "colSoonest": "Lähin lähtö ensin",
      "colBestStars": "Parhaat tähdet ensin",
      "showAll": "Näytä kaikki {n}",
      "openFare": "Avaa tämä hinta",
      "openSearch": "Avaa tämä haku",
      "seenAt": "{source}, luettu {d}",
      "photoCredit": "Kuvat: {source}",
      "empty": "Ei näytettävää juuri nyt."
    },
    "chart": {
      "h2": "Milloin lennot Lappiin ovat halvimmillaan?",
      "lead": "Yksi palkki jokaiselle lähtöpäivälle, jolle Travelpayoutsin välimuistissa on hinta Helsingistä, kolme kuukautta eteenpäin. Luettu {d}; hinnat muuttuvat tunneittain.",
      "cheapest": "Halvin päivä {d}: {p}",
      "priciest": "Kallein päivä {d}: {p}",
      "empty": "Tälle kentälle ei ole vielä välimuistissa hintoja.",
      "note": "Päivä ilman palkkia tarkoittaa vain, ettei välimuistissa ole hintaa, ei loppuunmyytyä päivää.",
      "airport": "Lentokenttä"
    }
  },
  faq: {
    eyebrow: 'Hyvä tietää',
    title: 'Lapin tarjoukset, vastauksia kysymyksiisi.',
    lead: 'Rehellisiä vastauksia ajoituksesta, varausajoista ja siitä, mitä on odotettavissa. Ei keksittyjä hintoja, ei tekokiirettä.',
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
        a: 'Usein kyllä, muutamaa ruuhka-aikaa lukuun ottamatta. Kun mökissä, huskypaikassa tai revontulisafarissa on myymätöntä tilaa lähellä päivämäärää, kumppanit vapauttavat sen live-hintaan, ja revontuli- ja huskyretket ottavat usein varauksia vielä noin 24 tuntia ennen lähtöä. Poikkeuksia ovat joulu, uusivuosi, pääsiäinen ja helmikuun koululoma, jolloin kysyntä on korkea eikä odottamisesta yleensä ole hyötyä.',
      },
      {
        q: 'Mitä tyypilliseen Lapin matkapakettiin kuuluu?',
        a: 'Se vaihtelee toimijoittain, joten lue aina, mitä hintaan sisältyy. Yleinen kokonaisuus yhdistää muutaman yön majoituksen yhteen tai kahteen aktiviteettiin (huskysafari, revontulisafari tai moottorikelkkaretki), ja joskus mukana on lentokenttäkuljetuksia. LaplandDealsissa emme myy valmiita pakettimatkoja: kuratoimme palaset (lennot, majoitukset, aktiviteetit, autovuokraus), ja sinä varaat jokaisen kumppanin live-hintaan ilman välityspalkkiota.',
      },
      {
        q: 'Miten löydän aitoja Lapin alennuksia?',
        a: 'Vertaa kumppanin live-hintaa kohteen tai toimijan normaaliin hintaan sen sijaan, että luottaisit otsikon prosenttilukuun. Matkusta väli- tai kesäkaudella, majoitu hieman vilkkaimpien keskusten ulkopuolelle ja varaa aktiviteetit suoraan luotettavilta alustoilta. Jokainen LaplandDealsin hinta linkkaa suoraan kumppanin senhetkiseen hintaan, emme keksi prosentteja emmekä pyöritä valeajastimia.',
      },
    ],
  },
  related: {
    eyebrow: 'Minne seuraavaksi',
    title: 'Lisää #LaplandVibes-verkostosta.',
    lead: 'Sisarsivustoja, jotka syventyvät yhteen Lapin matkan osa-alueeseen. Jokainen avautuu uuteen välilehteen.',
    links: [
      { anchor: 'hotellitarjoukset ja matkapaketit', blurb: 'Lasi-igluja, revontulisviittejä ja perhehotelleja eri puolilla Suomen Lappia.' },
      { anchor: 'aktiviteetti- ja safaritarjoukset', blurb: 'Huskysafarit, revontulisafarit, moottorikelkkaretket ja porotilat live-saatavuudella.' },
      { anchor: 'all inclusive -kiertomatkat', blurb: 'Monipäiväisiä opastettuja matkaohjelmia, jotka yhdistävät majoitukset, kuljetukset ja aktiviteetit.' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DEUTSCH, Siezen, Angebot/Rabatt/Last-Minute/Frühbucher/Sparen-Vokabular
// ─────────────────────────────────────────────────────────────────────────────

export default fi
