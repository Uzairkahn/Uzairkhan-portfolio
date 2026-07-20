"use client";

import { useCallback } from "react";

/**
 * Smoothly scrolls the window back to the top. Respects the user's
 * reduced-motion preference by falling back to an instant jump.
 */
export function useScrollToTop() {
  return useCallback(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, []);
}