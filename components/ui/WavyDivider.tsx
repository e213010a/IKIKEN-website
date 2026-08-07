import clsx from "clsx";

type WavyDividerProps = {
  className?: string;
  /** Containerのpadding/max-widthを無視してビューポート全幅に広げる */
  fullBleed?: boolean;
};

const HUMP_WIDTH = 100;

function buildWavePath(humps: number) {
  const viewWidth = humps * HUMP_WIDTH;
  let d = "M0,20 Q25,0 50,20";
  for (let x = HUMP_WIDTH; x <= viewWidth; x += HUMP_WIDTH / 2) {
    d += ` T${x},20`;
  }
  return d;
}

function Track({ humps, responsiveClassName }: { humps: number; responsiveClassName: string }) {
  const viewWidth = humps * HUMP_WIDTH;
  const path = buildWavePath(humps);
  return (
    <div className={clsx("overflow-hidden", responsiveClassName)}>
      <div className="flex w-[200%]" style={{ animation: "wave-scroll 16s linear infinite" }}>
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox={`0 0 ${viewWidth} 40`}
            className="h-8 w-1/2 sm:h-10"
            preserveAspectRatio="none"
          >
            <path d={path} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export function WavyDivider({ className, fullBleed }: WavyDividerProps) {
  return (
    <div
      className={clsx(fullBleed && "relative left-1/2 w-screen -translate-x-1/2", className)}
      aria-hidden
    >
      <Track humps={4} responsiveClassName="sm:hidden" />
      <Track humps={8} responsiveClassName="hidden sm:block" />
    </div>
  );
}
