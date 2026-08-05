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
};

export function Reveal({ children, className, stagger = 0.12, once = true }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={clsx("min-w-0", className)}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
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
