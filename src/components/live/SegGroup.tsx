import { segClass } from './seg';

/**
 * A segmented control on a tile: every segment the same width and height.
 *
 * feedback_mobile_uniform_grid (Vesa 6.9.2026): "valintalistan laatikot ovat
 * joko kaikki samanlaisia tai layout on väärä". The old control bar was a
 * run of natural-width pills ("Järjestä Hinta Automaatti Rovaniemi Kittilä
 * Ivalo 23.10. – 27.10. …") that wrapped into ragged lines on a phone and sat
 * in one undivided row on a tablet.
 *
 * Phone: a full-width grid with one equal column per option. From sm up: an
 * inline grid whose columns all take the widest label (fr tracks in an
 * intrinsically sized grid equalise to the largest contribution). A small
 * label above names the group. Measured labels, 12 languages: the longest
 * segment is 14 characters, so three equal columns fit a 343 px phone.
 */
export interface SegOption {
  key: string;
  label: string;
}

export default function SegGroup({
  label,
  options,
  value,
  onChange,
  className,
  min = '6.75rem',
}: {
  label: string;
  options: SegOption[];
  value: string;
  onChange: (key: string) => void;
  className?: string;
  /** Narrowest a segment may get before the group wraps to fewer columns. */
  min?: string;
}) {
  if (options.length === 0) return null;
  return (
    <div className={`min-w-0 ${className ?? ''}`} role="group" aria-label={label} data-seg-group>
      <span className="mb-1.5 block text-[11px] font-medium leading-none text-deep-night/55">{label}</span>
      {/* auto-fit, not a fixed column count: four airports at 319 px would be
          74 px each and "Rovaniemi" would be cut (measured 12.9.2026). The
          grid drops to as many equal columns as fit and wraps the rest — every
          segment still exactly the same width, which is the point. */}
      <div
        className="grid gap-1.5"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}), 1fr))` }}
      >
        {options.map((o) => (
          <button
            key={o.key}
            type="button"
            aria-pressed={value === o.key}
            className={`${segClass(value === o.key)} w-full px-2 text-center text-[13px] whitespace-nowrap sm:px-4 sm:text-sm`}
            onClick={() => onChange(o.key)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
