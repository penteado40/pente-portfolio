"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Anchor that pulls slightly toward the cursor. Static under reduced motion. */
export function MagneticButton({ href, children, className }: MagneticButtonProps) {
  const reduce = useReducedMotionSafe();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (reduce) {
    return (
      <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className={className}>
        {children}
      </a>
    );
  }

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.3);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
