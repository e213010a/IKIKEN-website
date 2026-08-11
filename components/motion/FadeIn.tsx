"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import clsx from "clsx";
import { duration, easing } from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** Fraction of the element that must enter the viewport to trigger the animation.
   * Tall, variable-height content (e.g. a long article) can exceed the viewport enough
   * that a high fraction is never satisfied, so the fade-in would never fire. */
  amount?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={clsx("min-w-0", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: duration.base, delay, ease: easing.out }}
    >
      {children}
    </motion.div>
  );
}
