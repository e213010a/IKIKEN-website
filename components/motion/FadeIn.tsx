"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { duration, easing } from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function FadeIn({ children, className, delay = 0, y = 28, once = true }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration: duration.base, delay, ease: easing.out }}
    >
      {children}
    </motion.div>
  );
}
