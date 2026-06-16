import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Reports the user's reduced-motion preference, defaulting to `false` during
 * SSR and the initial client render so the two match. Updates to the real
 * value right after hydration.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
