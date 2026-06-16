"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

// Tune these to adjust the feel:
const SIZE = 200;        // diameter in px
const BLUR = 30;         // blur radius in px
const SPRING = { stiffness: 120, damping: 22 }; // B feel; swap to {80, 20} for A

const DEV_ACCENT = "#4d9fff";
const AUDIO_ACCENT = "#e8743b";

function getAccentForPoint(x: number, y: number): string {
  const el = document.elementFromPoint(x, y);
  if (!el) return DEV_ACCENT;
  if (el.closest(".theme-audio")) return AUDIO_ACCENT;
  return DEV_ACCENT;
}

const noop = () => () => {};
const getFinePointer = () => window.matchMedia("(pointer: fine)").matches;
const getFinePointerServer = () => false;

export function CursorGlow() {
  const reduce = useReducedMotionSafe();
  const hasFinePointer = useSyncExternalStore(noop, getFinePointer, getFinePointerServer);
  const [active, setActive] = useState(false);
  const shownRef = useRef(false);
  const accentRef = useRef(DEV_ACCENT);
  const blobRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(-SIZE / 2);
  const rawY = useMotionValue(-SIZE / 2);
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  useEffect(() => {
    if (!hasFinePointer) return;

    function handleMove(e: MouseEvent) {
      rawX.set(e.clientX - SIZE / 2);
      rawY.set(e.clientY - SIZE / 2);

      const newAccent = getAccentForPoint(e.clientX, e.clientY);
      if (newAccent !== accentRef.current && blobRef.current) {
        accentRef.current = newAccent;
        animate(blobRef.current, { backgroundColor: newAccent }, { duration: 0.5 });
      }

      if (!shownRef.current) {
        shownRef.current = true;
        setActive(true);
      }
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [hasFinePointer, rawX, rawY]);

  if (reduce || !hasFinePointer) return null;

  // Single element — border-radius, filter, and mix-blend-mode must live on the
  // same node. Nesting them across parent/child causes browsers to create an
  // isolated compositing layer for the parent that squares off the blurred child.
  return (
    <motion.div
      ref={blobRef}
      aria-hidden
      style={{
        x,
        y,
        width: SIZE,
        height: SIZE,
        borderRadius: "9999px",
        backgroundColor: DEV_ACCENT,
        filter: `blur(${BLUR}px)`,
        mixBlendMode: "screen",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 0.35 : 0 }}
      transition={{ duration: 0.6 }}
      className="pointer-events-none fixed left-0 top-0 z-[2]"
    />
  );
}
