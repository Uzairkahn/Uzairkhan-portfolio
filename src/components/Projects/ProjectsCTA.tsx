"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";
import { spaceGrotesk } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import { socialLinks } from "@/data/navigation";

export default function ProjectsCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0F1D]/60 px-8 py-16 text-center backdrop-blur-xl sm:px-16"
    >
      {/* Aurora glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#4C7CFF]/20 to-[#9D5CFF]/20 blur-[110px]" />
      </div>

      <div className="relative">
        <motion.h3
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className={`text-3xl font-semibold tracking-tight text-white sm:text-4xl ${spaceGrotesk.className}`}
        >
          Interested in seeing more?
        </motion.h3>

        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto mt-4 max-w-md text-[15px] text-white/55"
        >
          Explore additional software engineering projects, mobile applications,
          and AI solutions on my GitHub.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
          >
            <AiFillGithub size={16} />
            View GitHub
          </a>
          <a
            href={socialLinks.email}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}