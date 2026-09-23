import type { NewsletterPopupCopy } from '../shared/NewsletterPopup';

/**
 * laplanddeals.com: uutiskirjepopupin oma teksti.
 *
 * Vesa 23.9.2026: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie
 * kaikille". Kuva, lomake, nappi ja #LAPLAND-merkki pysyvät verkoston yhteisinä.
 * Teksti = sivun oma aihe lukijan näkökulmasta, 12 kielellä natiivina.
 * 🔴 Ei hälytyksiä, ei lähetystahtia, ei "ensimmäisenä" (9.8.2026 lupauspurku):
 * uutiskirje lähtee vain kun on kerrottavaa. Otsikko tulee jaetusta komponentista.
 */
export const POPUP_COPY: NewsletterPopupCopy = {
  en: {
    description: 'Founder of LaplandVibes. A good deal takes you to the right place at the right time. I tell you what to book when, and where to find a good price.',
  },
  fi: {
    description: 'LaplandVibesin perustaja. Hyvä tarjous vie oikeaan paikkaan oikeaan aikaan. Kerron, mitä kannattaa varata milloinkin ja mistä hyvän hinnan löytää.',
  },
  de: {
    description: 'Gründer von LaplandVibes. Ein gutes Angebot bringt Sie zur richtigen Zeit an den richtigen Ort. Ich sage Ihnen, was Sie wann buchen sollten und wo Sie einen guten Preis finden.',
  },
  ja: {
    description: 'LaplandVibes創業者。本当にお得な情報は、ぴったりの場所へ、ちょうどいい時期に導いてくれます。何をいつ予約するとよいか、お手頃な料金がどこで見つかるかをお伝えします。',
  },
  es: {
    description: 'Fundador de LaplandVibes. Una buena oferta lleva al lugar indicado en el momento justo. Le digo qué conviene reservar y cuándo, y dónde encontrar un buen precio.',
  },
  'pt-BR': {
    description: 'Fundador do LaplandVibes. Uma boa oferta leva você ao lugar certo na hora certa. Mostro o que compensa reservar em cada época do ano e onde encontrar um bom preço.',
  },
  'zh-CN': {
    description: 'LaplandVibes创始人。好优惠能带你在对的时间去到对的地方。什么时候该订什么、在哪里能找到好价格，我会告诉你。',
  },
  ko: {
    description: 'LaplandVibes 창립자. 좋은 특가는 딱 맞는 때에 딱 맞는 곳으로 데려다줍니다. 언제 무엇을 예약할지, 좋은 가격은 어디서 찾을 수 있는지 알려드립니다.',
  },
  fr: {
    description: 'Fondateur de LaplandVibes. Un bon plan, c\'est celui qui vous emmène au bon endroit, au bon moment. Je vous dis quoi réserver et quand, et où dénicher un prix intéressant.',
  },
  it: {
    description: 'Fondatore di LaplandVibes. Una buona offerta porta nel posto giusto al momento giusto. Le dico cosa conviene prenotare e quando, e dove trovare un buon prezzo.',
  },
  nl: {
    description: 'Oprichter van LaplandVibes. Een goede aanbieding brengt u op het juiste moment naar de juiste plek. Ik vertel u wat u wanneer boekt en waar u een scherpe prijs vindt.',
  },
  sv: {
    description: 'Grundare av LaplandVibes. Ett bra erbjudande tar dig till rätt plats vid rätt tid. Jag visar vad det lönar sig att boka och när, och var du hittar ett bra pris.',
  },
};
