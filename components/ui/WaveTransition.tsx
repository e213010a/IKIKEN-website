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
  strokeClassName,
  fullBleed,
  gradientOverlay,
}: WaveTransitionProps) {
  const gradientId = `wave-gradient-${useId()}`;

  return (
    <div
      className={clsx(fullBleed && "relative left-1/2 w-screen -translate-x-1/2", className)}
      aria-hidden
    >
      <div className="overflow-hidden">
        <div className="flex w-[200%]" style={{ animation: "wave-scroll 16s linear infinite" }}>
          {[0, 1].map((i) => (
            <svg
              key={i}
              viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
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
              <path d={FILL_PATH} className={fillClassName} />
              {gradientOverlay && <path d={FILL_PATH} fill={`url(#${gradientId})`} />}
              {strokeClassName && (
                <path
                  d={CREST_PATH}
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
    </div>
  );
}
