"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

// Tune these to adjust the feel:
const SIZE = 200;        // diameter in px — smaller than before
const BLUR = 30;         // blur radius in px — less diffuse
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

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="pointer-events-none fixed left-0 top-0 z-[2] mix-blend-screen"
    >
      <div
        ref={blobRef}
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: "9999px",
          backgroundColor: DEV_ACCENT,
          opacity: 0.35,
          filter: `blur(${BLUR}px)`,
        }}
      />
    </motion.div>
  );
}
