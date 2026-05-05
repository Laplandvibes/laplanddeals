import { useState, type FormEvent } from 'react';
import { Mail, CheckCircle, Tag, Bell, Clock, Sun } from 'lucide-react';
import { trackNewsletterSignup } from '../lib/analytics';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

const benefits = [
  { icon: Tag,   title: 'Real partner prices',  body: 'Live rates pulled the moment you click. No invented percentages.' },
  { icon: Clock, title: 'Last-minute drops',    body: 'Cabin nights below floor, ski-week fills, off-peak husky slots.' },
  { icon: Sun,   title: 'Summer & midnight sun', body: 'The 32-day window from June 6 — different season, different deals.' },
  { icon: Bell,  title: 'One email a week',     body: 'Roundup, not a torrent. Unsubscribe link on every send.' },
];

export default function NewsletterSection() {
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
    <section className="relative bg-gradient-to-br from-vibe-pink to-vibe-pink-2 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.35),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
            <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-snow" />
          </div>
          <p className="text-snow/85 text-xs uppercase tracking-[0.2em] mb-3">The #LaplandVibes newsletter</p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl tracking-wide text-snow mb-4">
            Catch the deals before they go
          </h2>
          <p className="text-snow/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            One email a week. Last-minute Lapland prices, end-of-season cabin drops, midnight-sun windows you'd otherwise miss.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 sm:p-5">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-snow mb-2 sm:mb-3" />
              <p className="font-heading text-base sm:text-lg tracking-wide text-snow mb-1">{title}</p>
              <p className="text-snow/80 text-xs sm:text-sm leading-snug">{body}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          {state === 'ok' ? (
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-5 py-4">
              <CheckCircle className="w-6 h-6 text-snow shrink-0" />
              <div>
                <p className="text-snow font-bold">You're on the list.</p>
                <p className="text-snow/80 text-sm">Welcome email is on its way — check your inbox.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={state === 'sending'}
                className="flex-1 bg-white text-deep-night placeholder:text-deep-night/40 rounded-xl px-5 py-3.5 text-base focus:outline-none focus:ring-4 focus:ring-snow/40 transition-shadow"
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="bg-deep-night hover:bg-deep-night-2 text-snow font-bold px-7 py-3.5 rounded-xl transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {state === 'sending' ? 'Sending…' : 'Get the deals'}
              </button>
            </form>
          )}

          {state === 'err' && (
            <p className="text-snow text-sm mt-3 text-center bg-flash-red/40 rounded-lg py-2 px-4">
              {errMsg || 'Could not subscribe right now. Please try again in a moment.'}
            </p>
          )}

          <p className="text-snow/70 text-xs sm:text-sm mt-4 text-center">
            One email per week. Unsubscribe in one click. We never share your address.
          </p>
        </div>
      </div>
    </section>
  );
}
