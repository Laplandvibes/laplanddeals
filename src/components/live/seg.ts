/** Segmented control chip on the ice tile: selected = night pill, never pink. */
export function segClass(active: boolean): string {
  // 44 px, ei 36: verkoston asetteluportti mittaa kosketuskohteen korkeuden
  // puhelimessa ja 36 px jaa alle rajan (12.9.2026, 10 loydosta tallta
  // sivustolta). Sama luku kuin rivien `.btn-pink`illa.
  return `seg-btn min-h-11 rounded-full px-3.5 py-2 text-sm font-semibold ${
    active ? 'bg-deep-night text-snow' : 'bg-white border border-deep-night/12 text-deep-night/75 hover:border-deep-night/40'
  }`;
}
