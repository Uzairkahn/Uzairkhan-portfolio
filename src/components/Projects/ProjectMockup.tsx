"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Boxes, Brain, Smartphone } from "lucide-react";
import { jetbrainsMono } from "@/lib/fonts";
import { useMousePosition } from "@/hooks/useMousePosition";
import type { ProjectCategory } from "@/data/projects";

const categoryIcons: Record<ProjectCategory, typeof Layers> = {
  fullstack: Layers,
  webapp: Boxes,
  ai: Brain,
  mobile: Smartphone,
};

interface ProjectMockupProps {
  title: string;
  accent: [string, string];
  categoryIcon: ProjectCategory;
  chips: string[];
  coverImage?: string;
}

/**
 * Browser-chrome style screenshot frame. Renders a real cover image
 * when one exists at `coverImage`; if the file is missing or fails to
 * load, falls back to the illustrated icon placeholder automatically —
 * so dropping a screenshot into /public/images/projects/<slug>/cover.*
 * is the only step needed to upgrade a card.
 */
export default function ProjectMockup({ title, accent, categoryIcon, chips, coverImage }: ProjectMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(containerRef);
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = categoryIcons[categoryIcon];
  const [from, to] = accent;
  const showImage = Boolean(coverImage) && !imageFailed;

  return (
    <div ref={containerRef} className="group relative w-full">
      {/* Ambient glow behind the frame */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        aria-hidden="true"
      />

      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background: `radial-gradient(320px circle at ${mouse.x}% ${mouse.y}%, ${from}22, transparent 70%)`,
        }}
      />

      {/* Gradient border wrapper */}
      <div
        className="relative rounded-3xl p-[1px]"
        style={{ background: `linear-gradient(135deg, ${from}55, transparent 40%, ${to}55)` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0B0F1D]/80 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span
              className={`ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-[10px] text-white/40 ${jetbrainsMono.className}`}
            >
              {title.split("—")[0].trim().toLowerCase().replace(/\s+/g, "-")}.app
            </span>
          </div>

          {/* Screen body */}
          <div
            className="relative flex aspect-[16/11] w-full items-center justify-center overflow-hidden"
            style={{ background: `linear-gradient(155deg, ${from}1a, #05070E 65%)` }}
          >
            {showImage ? (
              <Image
                src={coverImage as string}
                alt={`${title} screenshot`}
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <>
                {/* subtle grid */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                  style={{ color: from }}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </motion.div>

                <span
                  className={`absolute bottom-5 text-[10px] tracking-widest text-white/25 ${jetbrainsMono.className}`}
                >
                  PRODUCT SCREENSHOT — REPLACE
                </span>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Floating tech chips around the frame */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-8 hidden rounded-full border border-white/10 bg-[#0B0F1D]/90 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-md sm:block"
      >
        {chips[0]}
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -right-4 bottom-10 hidden rounded-full border border-white/10 bg-[#0B0F1D]/90 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-md sm:block"
      >
        {chips[1]}
      </motion.div>
    </div>
  );
}
