/** Segmented control chip on the ice tile: selected = night pill, never pink. */
export function segClass(active: boolean): string {
  return `seg-btn min-h-9 rounded-full px-3.5 py-1.5 text-sm font-semibold ${
    active ? 'bg-deep-night text-snow' : 'bg-white border border-deep-night/12 text-deep-night/75 hover:border-deep-night/40'
  }`;
}
