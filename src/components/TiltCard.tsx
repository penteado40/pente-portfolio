"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

/** Wraps media in a subtle pointer-tracked 3D tilt. Static under reduced motion. */
export function TiltCard({ children, className }: TiltCardProps) {
  const reduce = useReducedMotionSafe();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
