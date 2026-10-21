type ShoeProps = {
  color?: string;
  className?: string;
};

// Ilustrasi sepatu sederhana bergaya outline tebal (neobrutalism).
// Warna outline memakai style agar var() tetap bekerja (atribut SVG tidak mendukung var()).
export function Shoe({ color = "#ffd93d", className }: ShoeProps) {
  const ink = { stroke: "var(--ink)" } as const;

  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <path
        d="M12 84 L12 42 Q12 32 24 34 L62 42 Q82 46 96 32 Q106 24 118 32 L152 60 Q190 68 190 88 L190 92 Q190 102 180 102 L22 102 Q12 102 12 92 Z"
        fill={color}
        strokeWidth="5"
        strokeLinejoin="round"
        style={{ ...ink, transition: "fill 0.35s ease" }}
      />
      <path
        d="M12 92 L190 92 L190 102 Q190 110 180 110 L22 110 Q12 110 12 102 Z"
        fill="var(--surface)"
        strokeWidth="5"
        strokeLinejoin="round"
        style={ink}
      />
      <path
        d="M98 36 L106 52 M110 40 L118 56 M86 40 L94 56"
        strokeWidth="5"
        strokeLinecap="round"
        style={ink}
      />
      <path
        d="M30 60 L58 66"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        style={ink}
      />
    </svg>
  );
}
