export function TopLeftFrame() {
  return (
    <div
      className="absolute left-0 top-8 size-[100px] lg:size-[120px] z-20 hidden lg:block"
      data-name="Top Left Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 120 128"
      >
        <title>Top left decorative frame</title>
        <g id="Top Left Frame">
          <line
            id="Line 1"
            stroke="var(--stroke-0, #302D97)"
            strokeWidth="8"
            x2="120"
            y1="4"
            y2="4"
          />
          <line
            id="Line 2"
            stroke="var(--stroke-0, #302D97)"
            strokeWidth="8"
            x1="4"
            x2="4"
            y1="128"
            y2="8"
          />
        </g>
      </svg>
    </div>
  );
}

export function BottomRightFrame() {
  return (
    <div
      className="absolute right-0 bottom-0 size-[100px] lg:size-[120px] z-20 hidden lg:block"
      data-name="Bottom Right Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 120 125"
      >
        <title>Bottom right decorative frame</title>
        <g id="Bottom Right Frame">
          <line
            id="Line 3"
            stroke="var(--stroke-0, #302D97)"
            strokeWidth="8"
            x2="120"
            y1="121"
            y2="121"
          />
          <line
            id="Line 4"
            stroke="var(--stroke-0, #302D97)"
            strokeWidth="8"
            x1="116"
            x2="116"
            y1="120"
            y2="3.30565e-08"
          />
        </g>
      </svg>
    </div>
  );
}
