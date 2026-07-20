"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function BackToTop() {
  const scrollToTop = useScrollToTop();

  return (
    <motion.button
      onClick={scrollToTop}
      aria-label="Back to top"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:text-white",
        focusRing
      )}
    >
      <ArrowUp size={17} strokeWidth={1.75} />
    </motion.button>
  );
}