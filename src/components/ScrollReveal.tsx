"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Fades and slides content in as it enters the viewport. Collapses to a static render under reduced motion. */
export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const reduce = useReducedMotionSafe();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
