"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** 正の値で下方向、負の値で上方向へ移動する量(px) */
  offset?: number;
};

export function Parallax({ children, className, offset = 80 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={prefersReducedMotion ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
