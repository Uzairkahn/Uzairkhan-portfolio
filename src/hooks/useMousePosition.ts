"use client";

import { useEffect, useState, type RefObject } from "react";

interface Position {
  x: number;
  y: number;
}

/**
 * Tracks mouse position as a percentage relative to a container element.
 * Used to drive the mouse-glow effect in the hero illustration.
 */
export function useMousePosition(ref: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<Position>({ x: 50, y: 30 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    };

    node.addEventListener("mousemove", handleMouseMove);
    return () => node.removeEventListener("mousemove", handleMouseMove);
  }, [ref]);

  return position;
}