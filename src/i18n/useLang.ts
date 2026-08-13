import { useLocation } from 'react-router-dom';

export type Lang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';

export const LANG_PREFIX: Record<Lang, string> = {
  en: '',
  fi: 'fi',
  de: 'de',
  ja: 'ja',
  es: 'es',
  'pt-BR': 'br',
  'zh-CN': 'cn',
  ko: 'kr',
  fr: 'fr',
  it: 'it',
  nl: 'nl',
  sv: 'sv',
};

export function useLang(): Lang {
  const { pathname } = useLocation();
  if (pathname === '/fi' || pathname.startsWith('/fi/')) return 'fi';
  if (pathname === '/de' || pathname.startsWith('/de/')) return 'de';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/br' || pathname.startsWith('/br/')) return 'pt-BR';
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'zh-CN';
  if (pathname === '/kr' || pathname.startsWith('/kr/')) return 'ko';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/it' || pathname.startsWith('/it/')) return 'it';
  if (pathname === '/nl' || pathname.startsWith('/nl/')) return 'nl';
  if (pathname === '/sv' || pathname.startsWith('/sv/')) return 'sv';
  return 'en';
}

export function useLocalePath() {
  const lang = useLang();
  return (path: string): string => {
    if (lang === 'en') return path;
    const prefix = `/${LANG_PREFIX[lang]}`;
    if (path === '/') return prefix;
    return `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
  };
}

export function useHtmlLang(): 'en-US' | 'fi-FI' | 'de-DE' | 'ja-JP' | 'es-ES' | 'pt-BR' | 'zh-CN' | 'ko-KR' | 'fr-FR' | 'it-IT' | 'nl-NL' | 'sv-SE' {
  const lang = useLang();
  if (lang === 'fi') return 'fi-FI';
  if (lang === 'de') return 'de-DE';
  if (lang === 'ja') return 'ja-JP';
  if (lang === 'es') return 'es-ES';
  if (lang === 'pt-BR') return 'pt-BR';
  if (lang === 'zh-CN') return 'zh-CN';
  if (lang === 'ko') return 'ko-KR';
  if (lang === 'fr') return 'fr-FR';
  if (lang === 'it') return 'it-IT';
  if (lang === 'nl') return 'nl-NL';
  if (lang === 'sv') return 'sv-SE';
  return 'en-US';
}

// Strips EVERY leading locale segment, not just the first, and knows the
// code-form prefixes (pt-BR, zh-CN, ko) as well as the short URL forms.
//
// 2026-08-13: Google still has stacked-prefix URLs indexed from an older build —
// /br/pt-BR/activities/ (5 näyttöä), /cn/ko/flights/ (57), /cn/pt-BR/flights/ (48),
// mitattu GSC:stä. Current code only ever emits the short form, so nothing new is
// minted from scratch. But stripping only the FIRST segment meant that a visitor
// landing on one of those stale URLs and switching language produced a brand new
// junk URL (/br/pt-BR/… + switch to fi → /fi/pt-BR/…). The bug re-seeded itself
// from its own indexed output, which is why the URL space kept growing.
const LOCALE_RUN = /^(?:\/(?:pt-BR|zh-CN|fi|de|ja|es|br|cn|kr|ko|fr|it|nl|sv))+(?=\/|$)/i;

export function stripLocale(path: string): string {
  return path.replace(LOCALE_RUN, '') || '/';
}

export function pick<T>(
  lang: Lang,
  en: T, fi: T, de?: T, ja?: T, es?: T, ptBR?: T, zhCN?: T,
  ko?: T, fr?: T, it?: T, nl?: T, sv?: T,
): T {
  if (lang === 'fi') return fi;
  if (lang === 'de') return de !== undefined ? de : en;
  if (lang === 'ja') return ja !== undefined ? ja : en;
  if (lang === 'es') return es !== undefined ? es : en;
  if (lang === 'pt-BR') return ptBR !== undefined ? ptBR : en;
  if (lang === 'zh-CN') return zhCN !== undefined ? zhCN : en;
  if (lang === 'ko') return ko !== undefined ? ko : en;
  if (lang === 'fr') return fr !== undefined ? fr : en;
  if (lang === 'it') return it !== undefined ? it : en;
  if (lang === 'nl') return nl !== undefined ? nl : en;
  if (lang === 'sv') return sv !== undefined ? sv : en;
  return en;
}
