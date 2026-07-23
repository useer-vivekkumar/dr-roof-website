type RoofDividerProps = {
  direction?: "down" | "up";
  color?: string;
  height?: number;
};

/**
 * Signature section divider: a row of gable roof peaks, tracing the
 * silhouette of a shingled roofline. Used instead of a plain hairline
 * between major sections to keep the roofing subject present throughout
 * the page rather than only in the hero.
 */
export default function RoofDivider({
  direction = "down",
  color = "#F7F5F1",
  height = 56,
}: RoofDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={direction === "down" ? "roofline-down" : "roofline-up"}
      style={{ height, backgroundColor: color }}
    />
  );
}
