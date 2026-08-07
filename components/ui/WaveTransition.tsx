"use client";

import { useId } from "react";
import clsx from "clsx";

type WaveTransitionProps = {
  className?: string;
  /** 波から下を塗りつぶす色。Tailwindのfill-*クラスなどをclassNameで指定 */
  fillClassName?: string;
  /** 波の境界線の色。Tailwindのtext-*クラスなどをclassNameで指定(strokeはcurrentColor) */
  strokeClassName?: string;
  /** Containerのpadding/max-widthを無視してビューポート全幅に広げる */
  fullBleed?: boolean;
  /** 塗りつぶしの上に、上から下へフェードするteal系グラデーションを重ねる */
  gradientOverlay?: boolean;
};

const HUMP_WIDTH = 100;
const VIEW_HEIGHT = 60;
const WAVE_Y = 20;

function buildCrestPath(humps: number) {
  const viewWidth = humps * HUMP_WIDTH;
  let d = `M0,${WAVE_Y} Q25,0 50,${WAVE_Y}`;
  for (let x = HUMP_WIDTH; x <= viewWidth; x += HUMP_WIDTH / 2) {
    d += ` T${x},${WAVE_Y}`;
  }
  return d;
}

function Track({
  humps,
  responsiveClassName,
  fillClassName,
  strokeClassName,
  gradientOverlay,
  gradientId,
}: {
  humps: number;
  responsiveClassName: string;
  fillClassName: string;
  strokeClassName?: string;
  gradientOverlay?: boolean;
  gradientId: string;
}) {
  const viewWidth = humps * HUMP_WIDTH;
  const crestPath = buildCrestPath(humps);
  const fillPath = `${crestPath} L${viewWidth},${VIEW_HEIGHT} L0,${VIEW_HEIGHT} Z`;

  return (
    <div className={clsx("overflow-hidden", responsiveClassName)}>
      <div className="flex w-[200%]" style={{ animation: "wave-scroll 16s linear infinite" }}>
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox={`0 0 ${viewWidth} ${VIEW_HEIGHT}`}
            className="h-16 w-1/2 sm:h-20"
            preserveAspectRatio="none"
          >
            {gradientOverlay && (
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(32,199,181,0.18)" />
                  <stop offset="100%" stopColor="rgba(32,199,181,0.14)" />
                </linearGradient>
              </defs>
            )}
            <path d={fillPath} className={fillClassName} />
            {gradientOverlay && <path d={fillPath} fill={`url(#${gradientId})`} />}
            {strokeClassName && (
              <path
                d={crestPath}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className={strokeClassName}
              />
            )}
          </svg>
        ))}
      </div>
    </div>
  );
}

export function WaveTransition({
  className,
  fillClassName = "fill-white",
  strokeClassName,
  fullBleed,
  gradientOverlay,
}: WaveTransitionProps) {
  const idBase = useId();

  return (
    <div
      className={clsx(fullBleed && "relative left-1/2 w-screen -translate-x-1/2", className)}
      aria-hidden
    >
      <Track
        humps={4}
        responsiveClassName="sm:hidden"
        fillClassName={fillClassName}
        strokeClassName={strokeClassName}
        gradientOverlay={gradientOverlay}
        gradientId={`wave-gradient-mobile-${idBase}`}
      />
      <Track
        humps={8}
        responsiveClassName="hidden sm:block"
        fillClassName={fillClassName}
        strokeClassName={strokeClassName}
        gradientOverlay={gradientOverlay}
        gradientId={`wave-gradient-desktop-${idBase}`}
      />
    </div>
  );
}
