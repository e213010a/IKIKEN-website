"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { duration, easing } from "@/lib/motion";

type FloatInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FloatIn({ children, className, delay = 0 }: FloatInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, x: 48, y: 48 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: duration.slower * 1.4, delay, ease: easing.out }}
    >
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: easing.inOut }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
