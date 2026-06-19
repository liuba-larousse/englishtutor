type AsteriskProps = {
  color?: "lime" | "blue" | "ink";
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const COLORS: Record<NonNullable<AsteriskProps["color"]>, string> = {
  lime: "var(--lime)",
  blue: "var(--blue)",
  ink: "var(--ink)",
};

/** Signature 4-point sparkle/asterisk motif from the design sample. */
export default function Asterisk({
  color = "lime",
  size = 64,
  className,
  style,
}: AsteriskProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0 Z"
        fill={COLORS[color]}
      />
    </svg>
  );
}
