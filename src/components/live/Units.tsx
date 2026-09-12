/**
 * A " · " chain rendered as nowrap units, the dot travelling with the item
 * after it. A line can then break only BETWEEN items, never leaving a dot
 * alone at a line edge (Vesa 12.9.2026: "miten nuo bulletpointit menee ihan
 * pieleen"). Used for row facts, date sub-lines, list footnotes and the sheet
 * note; the layout gate refuses any bare separator outside a nowrap unit.
 */
export default function Units({ text }: { text: string }) {
  const parts = text.split(/\s*[·・]\s*/).filter(Boolean);
  // No separator → ordinary wrapping text. A single nowrap unit would be a
  // 300-character line (the sheet note did exactly that, measured 12.9.).
  if (parts.length < 2) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && ' '}
          <span className="whitespace-nowrap">
            {i > 0 && <span aria-hidden="true" className="mr-1">·</span>}
            {part}
          </span>
        </span>
      ))}
    </>
  );
}
