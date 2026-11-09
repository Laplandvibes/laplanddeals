import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CheckCircle, Tag, Bell, Clock, Sun, Mail } from 'lucide-react';
import { trackNewsletterSignup } from '../lib/analytics';
import { useLang, type Lang } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import FounderByline from '../shared/FounderByline';
import { localePath } from '../shared/Legal/localePath';

// Uutiskirjeen kieliohje sivun kielestä (ei <html lang>:sta, joka on esirenderöinnissä aina 'en').
// Kirjeitä lähtee vain suomeksi ja englanniksi, joten fi/en-sivulla ohje toistaisi itsestäänselvää
// eikä näy. Vesa 1.11.2026: "kuinka monta kertaa lukee sähköpostiosoite" (sama kuin skiresorts 92e9878).
const NL_LANG_NOTICE: Record<string, string> = {
  de: 'Die Newsletter werden auf Englisch versendet.', ja: 'ニュースレターは英語でお届けします。',
  es: 'Los boletines se envían en inglés.', pt: 'As newsletters são enviadas em inglês.', zh: '订阅邮件以英语发送。',
  ko: '뉴스레터는 영어로 발송됩니다.', fr: 'Les newsletters sont envoyées en anglais.', it: 'Le newsletter sono inviate in inglese.',
  nl: 'De nieuwsbrieven zijn in het Engels.', sv: 'Nyhetsbreven skickas på engelska.',
};
const NL_EMAIL_LABEL: Record<string, string> = {
  en: 'Email address', fi: 'Sähköpostiosoite', de: 'E-Mail-Adresse', ja: 'メールアドレス',
  es: 'Correo electrónico', pt: 'E-mail', zh: '电子邮箱', ko: '이메일 주소',
  fr: 'Adresse e-mail', it: 'Indirizzo e-mail', nl: 'E-mailadres', sv: 'E-postadress',
};
// Esimerkkiosoite kentän taustalle (4.11.2026): näyttää muodon, ei toista otsikkoa.
const NL_EMAIL_EXAMPLE: Record<string, string> = {
  en: 'name@example.com', fi: 'nimi@esimerkki.fi', de: 'name@beispiel.de', ja: 'name@example.com',
  es: 'nombre@ejemplo.es', pt: 'nome@exemplo.com.br', zh: 'name@example.com', ko: 'name@example.com',
  fr: 'nom@exemple.fr', it: 'nome@esempio.it', nl: 'naam@voorbeeld.nl', sv: 'namn@exempel.se',
};
const nlLang = (l?: string): string => {
  const x = (l || 'en').toLowerCase();
  return x === 'br' ? 'pt' : x === 'cn' ? 'zh' : x === 'kr' ? 'ko' : x === 'jp' ? 'ja' : x.split('-')[0];
};

/**
 * [LV-FUNNEL 2026-08-21] Lomakesuppilon eventit Umamiin — paikallinen apuri,
 * ei jaettua importtia (vendoroitu sync on refresh-only). Ei saa koskaan
 * rikkoa lomaketta. Standardi: memory _procedural/lv_form_funnel_events.md.
 */
function track(event: string, data?: Record<string, unknown>) {
  try {
    (window as unknown as { umami?: { track: (e: string, d?: unknown) => void } }).umami?.track(event, data);
  } catch { /* ignore */ }
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

const ICONS = [Tag, Clock, Sun, Bell];

// Consent + age confirmation strings. Kept here (not in locales/copy.*) so the
// whole opt-in lives in one file; keyed by the same Lang codes as COPY.
const CONSENT: Record<Lang, { consent: string; privacy: string }> = {
  en: {
    consent: 'Yes, send the LaplandVibes newsletter (travel tips, seasonal updates and offers) to this email address. I confirm I am 18 or over.',
    privacy: 'Privacy Policy',
  },
  fi: {
    consent: 'LaplandVibes saa lähettää minulle uutiskirjettä (matkailuvinkkejä, sesonkitietoa ja tarjouksia) antamaani sähköpostiosoitteeseen. Olen täyttänyt 18 vuotta.',
    privacy: 'Tietosuojaseloste',
  },
  de: {
    consent: 'Ja, LaplandVibes darf mir den Newsletter mit Reisetipps, Saisoninfos und Angeboten an diese E-Mail-Adresse senden. Ich bin mindestens 18 Jahre alt.',
    privacy: 'Datenschutzerklärung',
  },
  ja: {
    consent: '入力したメールアドレス宛に、LaplandVibesがニュースレター（旅のヒント、シーズン情報、キャンペーン情報）を送ることに同意します。私は18歳以上です。',
    privacy: 'プライバシーポリシー',
  },
  es: {
    consent: 'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    consent: 'Aceito receber a newsletter do LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
    privacy: 'Política de Privacidade',
  },
  'zh-CN': {
    consent: '我同意 LaplandVibes 向我填写的邮箱发送订阅邮件，内容包括拉普兰旅行建议、季节资讯和优惠信息，并确认本人已年满18周岁。',
    privacy: '隐私政策',
  },
  ko: {
    consent: '입력한 이메일 주소로 LaplandVibes가 보내는 여행 팁·시즌 정보·프로모션 소식 뉴스레터 수신에 동의하며, 만 18세 이상임을 확인합니다.',
    privacy: '개인정보처리방침',
  },
  fr: {
    consent: "J'accepte de recevoir la newsletter LaplandVibes (conseils voyage, infos saisonnières, offres) à cette adresse e-mail et je confirme avoir 18 ans ou plus.",
    privacy: 'Politique de confidentialité',
  },
  it: {
    consent: "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    consent: 'Ja, LaplandVibes mag de nieuwsbrief met reistips, seizoensinfo en aanbiedingen naar dit e-mailadres sturen. Ik ben 18 jaar of ouder.',
    privacy: 'Privacyverklaring',
  },
  sv: {
    consent: 'Ja, jag vill ha nyhetsbrevet från LaplandVibes med restips, säsongsinfo och erbjudanden till min e-postadress. Jag är minst 18 år.',
    privacy: 'Integritetspolicy',
  },
};

export default function NewsletterSection() {
  const lang = useLang();
  const c = COPY[lang].newsletter;
  const cc = CONSENT[lang] ?? CONSENT.en;

  const [email, setEmail] = useState('');
  const [consented, setConsented] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [errMsg, setErrMsg] = useState('');
  // [LV-FUNNEL] Koko suppilo view -> start -> blocked/submit -> success|error.
  // submit/success lisattiin vasta kun lahetys oli oikeasti korjattu ja
  // todennettu livesta (84cf60c + tama commit); aiemmin ne olisivat
  // valehdelleet suppiloon lomakkeesta joka ei lahettanyt mitaan.
  // Standardi: memory _procedural/lv_form_funnel_events.md.
  const funnelData = { surface: 'inline', lang };
  const sectionRef = useRef<HTMLElement | null>(null);
  const startTracked = useRef(false);
  // nl_blocked kerran per submit-yritys: natiivi invalid laukeaa per kentta.
  const blockedTracked = useRef(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        track('nl_view', funnelData);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const trackStart = () => {
    if (startTracked.current) return;
    startTracked.current = true;
    track('nl_start', funnelData);
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !consented || state === 'sending') {
      if (state !== 'sending') {
        track('nl_blocked', { ...funnelData, reason: !email ? 'email' : 'consent' });
      }
      return;
    }
    // Missing build-time config must FAIL, never fake success: the previous
    // `if (env) { fetch }` variant compiled the whole fetch away when .env
    // was absent (21.8.2026 night patrol: success UI, zero requests). This is
    // a guard-haara, so it emits nl_blocked — nl_submit means the request
    // really left, and must never fire for a build that cannot send.
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      track('nl_blocked', { ...funnelData, reason: 'config' });
      setState('err');
      setErrMsg('Subscription is temporarily unavailable');
      return;
    }
    setState('sending');
    setErrMsg('');
    track('nl_submit', funnelData);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-welcome-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          email,
          source: 'laplanddeals-section',
          // Segmentointikentat: ilman naita palvelin joutuu paattelemaan
          // sivuston source-tagista eika kielta/kanavaa saa lainkaan.
          // `channel` on sama arvo kuin suppilon `surface` (standardi).
          site: 'laplanddeals',
          language: lang,
          channel: 'inline',
          consent: true,
          ageConfirmed: true,
          consentText: cc.consent,
        }),
      });
      // Jo-tilaaja tulee 200:lla + { alreadySubscribed: true } — EI 409:lla,
      // joten tila luetaan bodysta. Virhebody sisaltaa { error }.
      const data: { error?: string; alreadySubscribed?: boolean } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `Subscription failed (${res.status})`);
      }
      trackNewsletterSignup('laplanddeals-section');
      track('nl_success', data.alreadySubscribed ? { ...funnelData, already: true } : funnelData);
      setState('ok');
      setEmail('');
    } catch (err) {
      setState('err');
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong');
      track('nl_error', funnelData);
    }
  }

  // 🔴 Verkoston uutiskirjepalkki on PINKKI (CLAUDE.md: "Newsletter:
  // bg-gradient-to-br from-vibe-pink to-pink-600 — only non-dark section").
  // Tämä sivusto oli 12.9.2026 asti verkoston ainoa sininen palkki, ja otsikko
  // ajoi Bebasille keinokursiivin + font-lightin, jota yhdelläkään muulla
  // sivustolla ei ole (Vesa: "miksi täällä on eri fontti ja tyyli kun muualla?
  // ja miksi tässä on tällänen paska tausta?"). Gradientti on sama kuin
  // hubissa ja jaetussa NewsletterInlinessä.
  return (
    <section className="relative overflow-hidden" ref={sectionRef} style={{ background: 'linear-gradient(160deg, #DB2777 0%, #BE185D 58%, #9D174D 100%)' }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(70% 90% at 50% -10%, rgba(255,255,255,0.15) 0%, transparent 55%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-white/85 text-[11px] font-bold uppercase tracking-[0.28em] mb-5">{c.kicker}</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white mb-5 leading-[1.05] text-balance" style={{ textShadow: '0 2px 22px rgba(74,4,38,0.6)' }}>
            {/* 🔴 <br /> ei tuota välilyöntiä tekstisisältöön: ilman tätä väliä
                otsikon saavutettava nimi on kaksi sanaa kiinni toisissaan.
                Ruudulla ei muutu mikään. Sama korjaus kuin
                laplandcarrental/PageHero.tsx (7.9.2026). */}
            {c.titleItalic}{' '}
            <br />
            {c.titleRest}
          </h2>
          <p className="text-white text-base sm:text-lg max-w-2xl mx-auto max-lg:w-fit max-lg:text-left leading-relaxed" style={{ textShadow: '0 1px 10px rgba(74,4,38,0.45)' }}>
            {c.lead}
          </p>
        </div>

        {/* Tabletti sai neljä ~190 px saraketta, joissa teksti oli 4–5 rivissä
            (Vesa 12.9.: "tabletissa varsinkin tosi huono"). Kaksi saraketta
            660–1023 px:ssä, neljä vasta kun ne mahtuvat. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14">
          {c.benefits.map((b, i) => {
            const Icon = ICONS[i] || Tag;
            return (
              <div key={b.title} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 p-5">
                <Icon className="w-5 h-5 text-white mb-3" />
                <p className="font-heading text-base tracking-wide text-white mb-1">{b.title}</p>
                <p className="text-white/85 text-[13px] leading-snug">{b.body}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-xl mx-auto">
          {state === 'ok' ? (
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-6 py-4">
              <CheckCircle className="w-6 h-6 text-white shrink-0" />
              <div>
                <p className="text-white font-bold">{c.okTitle}</p>
                <p className="text-white/85 text-sm">{c.okBody}</p>
              </div>
            </div>
          ) : (
            <>
            <><FounderByline tone="pink" />
            {/* 4.11.2026 (Vesa: kenttä "leijuu" eikä "anna esimerkkiä taustalle"): Codexin 28.10. tumma laatikko pois, otsikko kentän yllä, kenttä ja nappi samalla rivillä, esimerkkiosoite kentässä. */}
            <form onSubmit={onSubmit}
              onInvalidCapture={(e) => {
                // Natiivi required-validointi esti lahetyksen. Laukeaa per
                // kentta, joten vaimennetaan 400 ms:ksi -> yksi nl_blocked
                // per submit-yritys.
                if (blockedTracked.current) return;
                blockedTracked.current = true;
                window.setTimeout(() => { blockedTracked.current = false; }, 400);
                const t = e.target as HTMLInputElement;
                track('nl_blocked', { ...funnelData, reason: t.type === 'checkbox' ? 'consent' : 'email' });
              }}
              className="max-w-lg mx-auto text-left"
            >
              <label htmlFor="nl-inline-email" className="block text-white font-semibold text-sm mb-2">
                {NL_EMAIL_LABEL[nlLang(lang)] ?? NL_EMAIL_LABEL.en}
              </label>
              {NL_LANG_NOTICE[nlLang(lang)] && (
                <p id="nl-inline-email-lang" className="text-white text-[13px] leading-relaxed -mt-1 mb-2">
                  {NL_LANG_NOTICE[nlLang(lang)]}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 min-w-0">
                  <Mail aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    id="nl-inline-email"
                    aria-describedby={NL_LANG_NOTICE[nlLang(lang)] ? 'nl-inline-email-lang' : undefined} autoComplete="email"
                    type="email"
                    value={email}
                    placeholder={NL_EMAIL_EXAMPLE[nlLang(lang)] ?? NL_EMAIL_EXAMPLE.en}
                    onFocus={trackStart}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={state === 'sending'}
                    className="w-full h-14 bg-white text-slate-900 border border-white rounded-full pl-11 pr-4 text-base placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="h-14 shrink-0 bg-deep-night hover:bg-[#1E293B] text-white font-bold uppercase tracking-[0.1em] text-sm px-7 rounded-full shadow-lg transition-colors whitespace-nowrap inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {state === 'sending' ? c.sending : c.cta}
                </button>
              </div>
              <label className="mt-4 flex items-start gap-3 px-1 text-white text-xs sm:text-[13px] leading-snug cursor-pointer">
                <input
                  type="checkbox"
                  checked={consented}
                  onFocus={trackStart}
                  onChange={(e) => setConsented(e.target.checked)}
                  required
                  disabled={state === 'sending'}
                  className="mt-0.5 w-4 h-4 shrink-0 accent-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <span>
                  {cc.consent}{' '}
                  <a
                    href={localePath('/privacy', lang)}
                    target="_blank"
                    rel="noopener"
                    className="font-semibold text-white underline underline-offset-2"
                  >
                    {cc.privacy}
                  </a>
                </span>
              </label>
            </form></>
            </>
          )}

          {state === 'err' && (
            <p className="text-white text-sm mt-3 text-center bg-black/25 rounded-lg py-2 px-4">
              {errMsg || c.error}
            </p>
          )}

          <p className="text-white/80 text-xs sm:text-sm mt-4 text-center">
            {c.fineprint}
          </p>
        </div>
      </div>
    </section>
  );
}
