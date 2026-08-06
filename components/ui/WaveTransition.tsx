type WaveTransitionProps = {
  className?: string;
  /** 波から下を塗りつぶす色。Tailwindのfill-*クラスなどをclassNameで指定 */
  fillClassName?: string;
  /** 波の境界線の色。Tailwindのtext-*クラスなどをclassNameで指定(strokeはcurrentColor) */
  strokeClassName?: string;
};

const HUMPS = 8;
const HUMP_WIDTH = 100;
const VIEW_WIDTH = HUMPS * HUMP_WIDTH;
const VIEW_HEIGHT = 60;
const WAVE_Y = 20;

function buildCrestPath() {
  let d = `M0,${WAVE_Y} Q25,0 50,${WAVE_Y}`;
  for (let x = HUMP_WIDTH; x <= VIEW_WIDTH; x += HUMP_WIDTH / 2) {
    d += ` T${x},${WAVE_Y}`;
  }
  return d;
}

const CREST_PATH = buildCrestPath();
const FILL_PATH = `${CREST_PATH} L${VIEW_WIDTH},${VIEW_HEIGHT} L0,${VIEW_HEIGHT} Z`;

export function WaveTransition({
  className,
  fillClassName = "fill-white",
  strokeClassName = "text-teal-500/50",
}: WaveTransitionProps) {
  return (
    <div className={className} aria-hidden>
      <div className="overflow-hidden">
        <div className="flex w-[200%]" style={{ animation: "wave-scroll 16s linear infinite" }}>
          <svg
            viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
            className="h-16 w-1/2 sm:h-20"
            preserveAspectRatio="none"
          >
            <path d={FILL_PATH} className={fillClassName} />
            <path
              d={CREST_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className={strokeClassName}
            />
          </svg>
          <svg
            viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
            className="h-16 w-1/2 sm:h-20"
            preserveAspectRatio="none"
          >
            <path d={FILL_PATH} className={fillClassName} />
            <path
              d={CREST_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className={strokeClassName}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
