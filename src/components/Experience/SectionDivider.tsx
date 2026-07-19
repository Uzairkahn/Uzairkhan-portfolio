"use client";

import { motion } from "framer-motion";

/**
 * Aurora-glow divider used between Experience, Education, and
 * Achievements subsections to keep a premium sense of separation.
 */
export default function SectionDivider() {
  return (
    <div className="relative my-20 flex items-center justify-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] shadow-[0_0_16px_rgba(157,92,255,0.6)]"
      />
    </div>
  );
}