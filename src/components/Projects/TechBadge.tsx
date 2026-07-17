"use client";

import { motion } from "framer-motion";
import { jetbrainsMono } from "@/lib/fonts";

interface TechBadgeProps {
  label: string;
  index: number;
}

export default function TechBadge({ label, index }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.3)" }}
      className={`rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-md transition-colors ${jetbrainsMono.className}`}
    >
      {label}
    </motion.span>
  );
}