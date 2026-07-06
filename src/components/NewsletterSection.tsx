import { useState, type FormEvent } from 'react';
import { CheckCircle, Tag, Bell, Clock, Sun } from 'lucide-react';
import { trackNewsletterSignup } from '../lib/analytics';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

const ICONS = [Tag, Clock, Sun, Bell];

export default function NewsletterSection() {
  const lang = useLang();
  const c = COPY[lang].newsletter;

  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || state === 'sending') return;
    setState('sending');
    setErrMsg('');
    try {
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/send-welcome-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ email, source: 'laplanddeals-section' }),
        });
        if (!res.ok && res.status !== 409) {
          throw new Error(`Subscription failed (${res.status})`);
        }
      }
      trackNewsletterSignup('laplanddeals-section');
      setState('ok');
      setEmail('');
    } catch (err) {
      setState('err');
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  return (
    <section className="relative bg-finland-blue overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.35),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-ivory/65 text-[11px] uppercase tracking-[0.28em] mb-5">{c.kicker}</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ivory mb-5 leading-[1.05]">
            <span className="italic font-light">{c.titleItalic}</span>
            <br />
            {c.titleRest}
          </h2>
          <p className="text-ivory/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {c.lead}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14">
          {c.benefits.map((b, i) => {
            const Icon = ICONS[i] || Tag;
            return (
              <div key={b.title} className="rounded-lg bg-ivory/[0.06] backdrop-blur-sm border border-ivory/15 p-5">
                <Icon className="w-5 h-5 text-ivory mb-3" />
                <p className="font-heading text-base font-medium text-ivory mb-1">{b.title}</p>
                <p className="text-ivory/70 text-[13px] leading-snug">{b.body}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-xl mx-auto">
          {state === 'ok' ? (
            <div className="flex items-center gap-3 bg-ivory/10 backdrop-blur-sm border border-ivory/25 rounded-full px-6 py-4">
              <CheckCircle className="w-6 h-6 text-ivory shrink-0" />
              <div>
                <p className="text-ivory font-bold">{c.okTitle}</p>
                <p className="text-ivory/75 text-sm">{c.okBody}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={c.placeholder}
                aria-label={c.placeholder}
                required
                disabled={state === 'sending'}
                className="flex-1 bg-ivory text-deep-night placeholder:text-deep-night/50 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-4 focus:ring-ivory/30 transition-shadow"
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="bg-vibe-pink hover:bg-vibe-pink-2 text-ivory font-bold uppercase tracking-[0.1em] text-sm px-8 py-4 rounded-full transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {state === 'sending' ? c.sending : c.cta}
              </button>
            </form>
          )}

          {state === 'err' && (
            <p className="text-ivory text-sm mt-3 text-center bg-flash-red/40 rounded-lg py-2 px-4">
              {errMsg || c.error}
            </p>
          )}

          <p className="text-ivory/65 text-xs sm:text-sm mt-4 text-center">
            {c.fineprint}
          </p>
        </div>
      </div>
    </section>
  );
}
