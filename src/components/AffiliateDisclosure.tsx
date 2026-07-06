import { Info } from 'lucide-react';
import { useLang, type Lang } from '../i18n/useLang';

/**
 * AffiliateDisclosure — short FI/EN(+11-lang) consumer-protection notice that
 * must render on every surface carrying affiliate CTAs (LV brand rule). Placed
 * under partner-ad units and at the foot of monetised pillar pages.
 *
 * Plain, human, neutral wording per the CONFIRMED VOICE rule (no AI-poetry).
 */

const TEXT: Record<Lang, string> = {
  en: 'Some links here are partner links. If you book through them, LaplandDeals may earn a commission — the price you pay stays the same.',
  fi: 'Osa linkeistä on kumppanilinkkejä. Jos varaat niiden kautta, LaplandDeals voi saada pienen provision. Sinulle hinta pysyy samana.',
  de: 'Einige Links hier sind Partnerlinks. Wenn Sie darüber buchen, kann LaplandDeals eine Provision erhalten. Für Sie bleibt der Preis gleich.',
  ja: 'このページの一部のリンクはパートナーリンクです。そこから予約された場合、LaplandDealsが手数料を受け取ることがあります。お客様の支払う価格は変わりません。',
  es: 'Algunos enlaces son de socios. Si reservas a través de ellos, LaplandDeals puede recibir una comisión. El precio que pagas no cambia.',
  'pt-BR': 'Alguns links aqui são de parceiros. Se você reservar por eles, a LaplandDeals pode receber uma comissão. O preço que você paga continua o mesmo.',
  'zh-CN': '本页部分链接为合作伙伴链接。若您通过这些链接预订，LaplandDeals 可能获得佣金，您支付的价格不变。',
  ko: '이 페이지의 일부 링크는 파트너 링크입니다. 이를 통해 예약하시면 LaplandDeals가 수수료를 받을 수 있으며, 고객님이 지불하는 가격은 동일합니다.',
  fr: 'Certains liens ici sont des liens partenaires. Si vous réservez via ces liens, LaplandDeals peut percevoir une commission. Le prix que vous payez reste le même.',
  it: 'Alcuni link in questa pagina sono link di partner. Se prenoti tramite questi, LaplandDeals può ricevere una commissione. Il prezzo che paghi resta invariato.',
  nl: 'Sommige links hier zijn partnerlinks. Als je via deze links boekt, kan LaplandDeals een commissie ontvangen. De prijs die je betaalt blijft gelijk.',
};

interface Props {
  /** 'inline' = compact one-liner under an ad; 'block' = framed strip on pages. */
  variant?: 'inline' | 'block';
  className?: string;
}

export default function AffiliateDisclosure({ variant = 'inline', className = '' }: Props) {
  const lang = useLang();
  const text = TEXT[lang] ?? TEXT.en;

  if (variant === 'inline') {
    return (
      <p className={`flex items-start gap-1.5 text-ink-mute text-[11px] leading-snug ${className}`}>
        <Info className="w-3 h-3 shrink-0 mt-px opacity-70" aria-hidden="true" />
        <span>{text}</span>
      </p>
    );
  }

  return (
    <div
      className={`flex items-start gap-2.5 rounded-lg border border-line bg-cream-2/60 px-4 py-3 text-ink-soft text-[12px] leading-relaxed ${className}`}
    >
      <Info className="w-4 h-4 shrink-0 mt-0.5 text-ink-mute" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}
