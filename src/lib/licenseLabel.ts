import type { Lang } from '../i18n/useLang';

/**
 * Kuvakrediitin lisenssinimi lukijan kielellä (gate:a11y-nimet 24.10.2026). Vain "Public domain" on kuvaus
 * ja käännetään verkoston yhteisellä sanastolla; CC-lisenssien nimet (CC BY-SA 4.0, CC0) ovat nimiä ja
 * näytetään sellaisinaan.
 */
const PUBLIC_DOMAIN: Record<Lang, string> = {
  en: 'Public domain',
  fi: 'Tekijänoikeuksista vapaa',
  sv: 'Allmän egendom',
  de: 'Gemeinfrei',
  es: 'Dominio público',
  fr: 'Domaine public',
  it: 'Pubblico dominio',
  nl: 'Publiek domein',
  'pt-BR': 'Domínio público',
  ja: 'パブリックドメイン',
  ko: '퍼블릭 도메인',
  'zh-CN': '公有领域',
};

export function licenseLabel(license: string, lang: Lang): string {
  return /^public domain$/i.test(license.trim()) ? PUBLIC_DOMAIN[lang] : license;
}
