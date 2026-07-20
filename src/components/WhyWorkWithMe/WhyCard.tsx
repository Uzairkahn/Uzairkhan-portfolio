"use client";

import { motion } from "framer-motion";
import { spaceGrotesk } from "@/lib/fonts";
import { scaleIn } from "@/lib/motion";
import type { WhyCard as WhyCardType } from "@/data/WhyWorkWithMe";

interface WhyCardProps {
  card: WhyCardType;
  index: number;
}

export default function WhyCard({ card, index }: WhyCardProps) {
  const { icon: Icon, title, description, accent } = card;
  const [from, to] = accent;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={scaleIn}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 sm:p-7"
    >
      {/* Gradient glow on hover */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      />

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5"
        style={{ color: from }}
      >
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3 className={`relative mt-5 text-lg font-semibold text-white ${spaceGrotesk.className}`}>
        {title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-white/55">{description}</p>

      {/* Bottom accent line, expands on hover */}
      <div
        className="relative mt-6 h-px w-8 transition-all duration-500 group-hover:w-16"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      />
    </motion.div>
  );
}