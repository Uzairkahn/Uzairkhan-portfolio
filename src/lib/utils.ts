import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely, resolving conflicting utility classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shared focus-visible ring, used on every interactive element so
 * keyboard navigation has a consistent, visible indicator against
 * the dark theme.
 */
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4C7CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070E]";