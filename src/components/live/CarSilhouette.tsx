/**
 * Side-view silhouette of a car class for the car-hire rows (Vesa 26.9.2026: "autojen
 * vuokrauksessa ei ole kuvia"). A drawn body shape, not a picture of a make: the comparison
 * rows are "Volkswagen Polo or similar", and a generated car photo invents plates and badges
 * (measured on laplandcarrental 14.9.), so the rule is an icon when there is no own photo.
 * One shape per body type (hatch, sedan, estate, SUV); mini is the hatch drawn shorter.
 */

type ClassKey = 'mini' | 'economy' | 'compact' | 'midsize' | 'estate' | 'suv';
type Shape = { body: string; glass: string[]; wheels: [number, number]; r: number; w: number };

// viewBox 0 0 64 26, wheels centred on y = 20, ground at 24.3, the car faces right.
const HATCH: Shape = {
  w: 64, r: 4.3, wheels: [14, 50],
  body: 'M3,20 L3,14 Q3,12.5 4.5,12 L9,7.5 Q10.5,6 13,5.8 L33,5.5 Q35.5,5.5 37.5,7 L44,11.2 L56,12.6 Q60.5,13.2 61,16 L61,20 Z',
  glass: ['M11,8.3 Q12,7.3 13.5,7.2 L22.5,7.2 L22.5,11.3 L8.5,11.3 Z', 'M24,7.2 L33,7.2 Q34.8,7.2 36.2,8.3 L40.5,11.3 L24,11.3 Z'],
};
const SHAPES: Record<ClassKey, Shape> = {
  mini: {
    w: 52, r: 4, wheels: [13, 40],
    body: 'M4,20 L4,14 Q4,12.5 5.5,12 L9.5,7.3 Q11,5.8 13.5,5.8 L27,5.6 Q29.5,5.6 31.5,7.2 L36.5,11.2 L45,12.5 Q49,13.2 49,16 L49,20 Z',
    glass: ['M11.5,8.2 Q12.4,7.3 13.8,7.3 L19.5,7.3 L19.5,11.2 L9.5,11.2 Z', 'M21,7.3 L27,7.3 Q28.8,7.3 30.2,8.4 L33.3,11.2 L21,11.2 Z'],
  },
  economy: HATCH,
  compact: HATCH,
  midsize: {
    w: 64, r: 4.3, wheels: [14, 50],
    body: 'M3,20 L3,14.5 Q3,12.8 5,12.5 L13,12 L19,6.5 Q20.6,5.4 23,5.4 L36,5.4 Q38.4,5.4 40,6.8 L45.5,11.4 L56,12.6 Q60.5,13.2 61,16 L61,20 Z',
    glass: ['M17.5,11.3 L21.2,7.6 Q22,7 23.2,7 L29,7 L29,11.3 Z', 'M30.5,7 L35.8,7 Q37.3,7 38.4,8 L42,11.3 L30.5,11.3 Z'],
  },
  estate: {
    w: 64, r: 4.3, wheels: [14, 50],
    body: 'M3,20 L3,13 Q3,11.5 4,10.2 L6.5,6.6 Q7.6,5.3 10,5.3 L37,5.3 Q39.4,5.3 41,6.8 L46,11.3 L56,12.6 Q60.5,13.2 61,16 L61,20 Z',
    glass: ['M7,10.8 L8.8,7.8 Q9.5,7 10.8,7 L22,7 L22,11.3 L7,11.3 Z', 'M23.5,7 L36.5,7 Q38,7 39,8 L42.5,11.3 L23.5,11.3 Z'],
  },
  suv: {
    w: 64, r: 5, wheels: [14, 50],
    body: 'M3,20 L3,9 Q3,4 7.5,4 L37,4 Q40,4 42,6 L46.5,10.2 L56,11.4 Q61,12 61,15.5 L61,20 Z',
    glass: ['M6,6 L22,6 L22,10 L6,10 Z', 'M23.5,6 L37,6 Q38.8,6 40,7.2 L43,10 L23.5,10 Z'],
  },
};

export default function CarSilhouette({ kind, className }: { kind: string; className?: string }) {
  const s = SHAPES[(kind in SHAPES ? kind : 'compact') as ClassKey];
  return (
    <svg viewBox="0 0 64 26" className={className} aria-hidden="true" focusable="false">
      <g transform={`translate(${(64 - s.w) / 2} 0)`}>
        <path d={s.body} fill="#0F172A" fillOpacity="0.85" />
        {s.glass.map((d) => <path key={d} d={d} fill="#DCE6F2" />)}
        {s.wheels.map((x) => (
          <g key={x}>
            <circle cx={x} cy={20} r={s.r} fill="#0F172A" />
            <circle cx={x} cy={20} r={s.r * 0.42} fill="#C7D2E0" />
          </g>
        ))}
      </g>
      <line x1="1" y1="24.4" x2="63" y2="24.4" stroke="#0F172A" strokeOpacity="0.15" strokeWidth="0.7" />
    </svg>
  );
}
