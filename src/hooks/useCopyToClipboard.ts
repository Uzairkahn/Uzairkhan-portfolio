"use client";

import { useState, useCallback } from "react";

/**
 * Copies text to the clipboard and exposes a short-lived "copied"
 * state for UI feedback (e.g. swapping an icon for a checkmark).
 */
export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetDelay);
      } catch {
        setCopied(false);
      }
    },
    [resetDelay]
  );

  return { copied, copy };
}