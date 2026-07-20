"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { fadeUp } from "@/lib/motion";
import { cn, focusRing } from "@/lib/utils";
import { contactMethods } from "@/data/contact";
import { socialLinks } from "@/data/navigation";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05070E] px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[460px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4C7CFF]/12 to-[#9D5CFF]/12 blur-[130px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.span
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-md ${jetbrainsMono.className}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#9D5CFF]" />
          Contact
        </motion.span>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className={`mx-auto mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl ${spaceGrotesk.className}`}
        >
          Let&apos;s Build Something{" "}
          <span className="bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] bg-clip-text text-transparent">
            Amazing Together
          </span>
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55"
        >
          I&apos;m always excited to collaborate on software engineering,
          full-stack development, AI-powered applications, and mobile
          solutions.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mt-9"
        >
          <a
            href={socialLinks.resume}
            download
            className={cn(
              "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF] px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105",
              focusRing
            )}
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, i) => (
            <ContactCard key={method.id} method={method} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}