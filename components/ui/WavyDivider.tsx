import clsx from "clsx";

type WavyDividerProps = {
  className?: string;
  /** Containerのpadding/max-widthを無視してビューポート全幅に広げる */
  fullBleed?: boolean;
};

const HUMPS = 8;
const HUMP_WIDTH = 100;
const VIEW_WIDTH = HUMPS * HUMP_WIDTH;

function buildWavePath() {
  let d = "M0,20 Q25,0 50,20";
  for (let x = HUMP_WIDTH; x <= VIEW_WIDTH; x += HUMP_WIDTH / 2) {
    d += ` T${x},20`;
  }
  return d;
}

const WAVE_PATH = buildWavePath();

export function WavyDivider({ className, fullBleed }: WavyDividerProps) {
  return (
    <div
      className={clsx(fullBleed && "relative left-1/2 w-screen -translate-x-1/2", className)}
      aria-hidden
    >
      <div className="overflow-hidden">
        <div className="flex w-[200%]" style={{ animation: "wave-scroll 16s linear infinite" }}>
          <svg
            viewBox={`0 0 ${VIEW_WIDTH} 40`}
            className="h-8 w-1/2 sm:h-10"
            preserveAspectRatio="none"
          >
            <path d={WAVE_PATH} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <svg
            viewBox={`0 0 ${VIEW_WIDTH} 40`}
            className="h-8 w-1/2 sm:h-10"
            preserveAspectRatio="none"
          >
            <path d={WAVE_PATH} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
