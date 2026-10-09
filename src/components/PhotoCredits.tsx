import Units from './live/Units';
import { OFFER_PHOTOS } from '../data/offerPhotos';
import { useLang } from '../i18n/useLang';
import { COPY } from '../locales/copy';

export type PhotoCreditItem = { key: string; label: string };

/**
 * One credit line per page for every Commons / Flickr photograph shown on it (cards, tiles, hero).
 * The cards are links, so the credit cannot sit inside them (no link in a link): it is listed here,
 * grouped by author and licence ("Husky Safaris, Reindeer Sleigh & Farms: …, CC BY 2.0"), each title
 * linking to the file page and each licence to its deed (CC BY / BY-SA §3(a)). A cropped file says so
 * (CC BY §3(a)(1)(B)). Receipts live in data/offerPhotos.ts.
 */
export default function PhotoCredits({ items, className = '' }: { items: PhotoCreditItem[]; className?: string }) {
  const lang = useLang();
  const prefix = COPY[lang].live.list.photoCredit;
  const cropped = COPY[lang].live.tonight.cropped;
  const seen = new Set<string>();
  const groups: { author: string; license: string; licenseUrl: string; cropped: boolean; rows: { key: string; label: string; fileUrl: string }[] }[] = [];
  for (const it of items) {
    if (seen.has(it.key)) continue;
    seen.add(it.key);
    const p = OFFER_PHOTOS[it.key];
    if (!p) continue;
    const g = groups.find((x) => x.author === p.author && x.license === p.license && x.cropped === !!p.cropped);
    const row = { key: it.key, label: it.label, fileUrl: p.fileUrl };
    if (g) g.rows.push(row);
    else groups.push({ author: p.author, license: p.license, licenseUrl: p.licenseUrl, cropped: !!p.cropped, rows: [row] });
  }
  if (!groups.length) return null;
  const [before, after] = prefix.split('{source}');
  const link = 'lv-tap underline decoration-ink/30 hover:text-ink';
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 text-sm leading-relaxed text-ink-soft ${className}`} data-photo-credits>
      <Units
        wrap
        items={groups.map((g, i) => (
          <span key={g.author + g.license + g.cropped}>
            {i === 0 && before}
            {g.rows.map((row, k) => (
              <span key={row.key}>{k > 0 && ', '}<a href={row.fileUrl} target="_blank" rel="noopener" className={link}>{row.label}</a></span>
            ))}
            : {g.author},{' '}
            <a href={g.licenseUrl} target="_blank" rel="license noopener" className={`${link} whitespace-nowrap`}>{g.license}</a>
            {g.cropped && ` (${cropped})`}
            {i === groups.length - 1 && after}
          </span>
        ))}
      />
    </div>
  );
}
