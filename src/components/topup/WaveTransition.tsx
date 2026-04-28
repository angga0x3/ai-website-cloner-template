export function WaveTransition() {
  return (
    <div className="relative -mb-1 w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        className="block w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160 C120,200 240,240 480,200 C720,160 840,80 1080,120 C1200,140 1320,180 1440,160 L1440,320 L0,320 Z"
          fill="#35205a"
        />
        <path
          d="M0,200 C180,260 360,220 540,240 C720,260 900,200 1080,220 C1200,230 1320,250 1440,240 L1440,320 L0,320 Z"
          fill="#2d1850"
          opacity="0.7"
        />
        <path
          d="M0,260 C240,280 480,250 720,270 C960,290 1200,260 1440,280 L1440,320 L0,320 Z"
          fill="#251445"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
