"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import clsx from "clsx";
import { fadeUp, staggerContainer } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  /** Fraction of the container that must enter the viewport to trigger the reveal.
   * Tall, variable-length lists (e.g. a grid with many items stacked to one column
   * on mobile) can exceed the viewport enough that a high fraction is never
   * satisfied, so the reveal would never fire. */
  amount?: number;
};

export function Reveal({
  children,
  className,
  stagger = 0.12,
  once = true,
  amount = 0.25,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={clsx("min-w-0", className)}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={clsx("min-w-0", className)} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
