import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { buildAffiliateHref } from './AffiliateCTA';
import { trackAffiliateClick } from '../lib/analytics';
import { useLang } from '../i18n/useLang';

/**
 * Sembo UK's November 2026 discount code, for English readers only, under the
 * "bed tonight" town buttons (TonightStrip), which open sembo.co.uk in English.
 *
 * Source: Adtraction mail to info@ on 27.10.2026 ("Sembo UK - November code!",
 * unitedkingdom@adtraction.com), sent as an offer to promote: £30 off with code
 * ADTRACTIONUK, minimum booking £300, book 1–30 November 2026, travel any date
 * in November or December 2026.
 *
 * Why English only: the code works on sembo.co.uk, and that is where the Worker
 * sends English lodging clicks since 17.10.2026 (en_US and en_GB). Finnish,
 * Swedish and German readers land on sembo.fi/.se/.de and the other eight
 * languages on Trip.com, where the code does nothing. The button asks for
 * en_GB explicitly, so it stays on Sembo UK even if en_US is ever routed elsewhere.
 *
 * The window is UK time (GMT in November) and is decided at render: shown from
 * 1.11.2026 00:00 to 1.12.2026 00:00 with no deploy at either end. The
 * prerendered HTML carries only the crawlable body, never this block.
 *
 * Programme rule read from the Adtraction API on 30.10.2026: couponMarketing = 0,
 * i.e. Sembo UK does not take voucher-site partners. The code was sent to us to
 * promote, so it sits beside the stays it applies to rather than in a list of codes.
 */
const SEMBO_UK_CODE = 'ADTRACTIONUK';
const SHOW_FROM = Date.UTC(2026, 10, 1);
const SHOW_UNTIL = Date.UTC(2026, 11, 1);

function semboUkCodeLive(now = Date.now()): boolean {
  return now >= SHOW_FROM && now < SHOW_UNTIL;
}

export default function SemboUkCode({ surface, className = '' }: { surface: string; className?: string }) {
  const lang = useLang();
  const [copied, setCopied] = useState(false);
  if (lang !== 'en' || !semboUkCodeLive()) return null;

  const sid = `${surface}_sembo_code`;
  const url = new URL(buildAffiliateHref({ partner: 'hotels', sid, destination: 'Lapland, Finland', lang }));
  url.searchParams.set('locale', 'en_GB');
  const href = url.toString();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SEMBO_UK_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // No clipboard access: the code stays on screen as selectable text.
    }
  };

  return (
    <aside
      className={`card-frost grid gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_18.5rem] md:items-center md:gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] ${className}`}
      aria-labelledby={`${surface}-sembo-code-h3`}
    >
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <img src="/logos/sembo.png" alt="Sembo" width={300} height={100} loading="lazy" decoding="async" className="h-8 w-auto" />
          <span className="text-xs font-semibold text-deep-night/60">Partner offer</span>
        </div>
        <h3 id={`${surface}-sembo-code-h3`} className="mt-3 text-balance font-heading text-[1.75rem] leading-[1.05] text-deep-night sm:text-3xl lg:text-4xl">
          Lapland in November or December? £30 off at Sembo UK
        </h3>
        <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-snug text-deep-night/80 sm:text-[15px]">
          {[
            '£30 off a booking of £300 or more on sembo.co.uk',
            'Book from 1 to 30 November 2026',
            'Travel on any date in November or December 2026',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-finland-blue" aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-deep-night/70">The town buttons above also open sembo.co.uk. Same code, same terms.</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-deep-night/25 bg-[#F1F4F9] py-1.5 pl-4 pr-1.5">
          <span className="min-w-0">
            <span className="block text-[11px] font-medium text-deep-night/60">Enter this code at checkout</span>
            <span className="block select-all font-body text-lg font-bold tracking-wide text-deep-night">{SEMBO_UK_CODE}</span>
          </span>
          <button
            type="button"
            onClick={copy}
            data-umami-event="sembo_code_copy"
            data-umami-event-surface={surface}
            className="seg-btn inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border border-deep-night/25 bg-white px-4 text-sm font-semibold text-deep-night hover:border-deep-night"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <a
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener"
          onClick={() => trackAffiliateClick('lodging', sid, href)}
          className="btn-pink inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
        >
          Search Lapland stays on Sembo UK
        </a>
        <p className="text-xs leading-relaxed text-deep-night/60">Prices on sembo.co.uk are in British pounds (£). Offer and terms are set by Sembo UK.</p>
      </div>
    </aside>
  );
}
