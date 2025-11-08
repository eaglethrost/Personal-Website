interface SectionProps {
  id: string;
  children: React.ReactNode;
  minHeight?: "screen" | "60vh" | "65vh" | "70vh" | "80vh";
  tallScreenMinHeight?: "70vh" | "80vh";
  gradientFrom: "backgroundDark" | "backgroundLight";
  gradientTo: "backgroundDark" | "backgroundLight";
  padding?: "py-6" | "pt-6 pb-10" | "py-0";
  className?: string;
  contentClassName?: string;
  dataName?: string;
  flex?: boolean;
}

export default function Section({
  id,
  children,
  minHeight = "screen",
  tallScreenMinHeight,
  gradientFrom,
  gradientTo,
  padding = "py-6",
  className = "",
  contentClassName = "w-content mx-auto",
  dataName,
  flex = false,
}: SectionProps) {
  const minHeightClass =
    minHeight === "screen" ? "min-h-screen" : `min-h-[${minHeight}]`;

  const tallScreenClass = tallScreenMinHeight
    ? `tall-screen:min-h-[${tallScreenMinHeight}]`
    : "";

  // Map gradient colors to Tailwind classes
  const gradientFromClass =
    gradientFrom === "backgroundDark"
      ? "from-backgroundDark"
      : "from-backgroundLight";
  const gradientToClass =
    gradientTo === "backgroundDark"
      ? "to-backgroundDark"
      : "to-backgroundLight";

  const flexClass = flex ? "flex flex-col" : "";

  return (
    <section
      id={id}
      className={`${minHeightClass} ${tallScreenClass} bg-gradient-to-b ${gradientFromClass} ${gradientToClass} w-full ${padding} ${flexClass} ${className}`}
      data-name={dataName}
    >
      <div className={contentClassName}>{children}</div>
    </section>
  );
}
