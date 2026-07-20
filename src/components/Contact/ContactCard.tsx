"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import type { IconType } from "react-icons";
import { scaleIn } from "@/lib/motion";
import { cn, focusRing } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useMousePosition } from "@/hooks/useMousePosition";
import type { ContactMethod } from "@/data/contact";

const icons: Record<ContactMethod["id"], IconType> = {
  email: Mail,
  github: AiFillGithub,
  linkedin: AiFillLinkedin,
  location: MapPin,
};

interface ContactCardProps {
  method: ContactMethod;
  index: number;
}

/**
 * Root is always a <div> (fixes a ref-type mismatch from reusing one
 * ref across button/a/div root elements). Interactivity is handled by
 * a transparent, z-raised overlay control — a "stretched link" pattern
 * that keeps a single semantic, keyboard-reachable element per card.
 */
export default function ContactCard({ method, index }: ContactCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(containerRef);
  const { copied, copy } = useCopyToClipboard();
  const Icon = icons[method.id];

  return (
    <motion.div
      ref={containerRef}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={scaleIn}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D]/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background: `radial-gradient(220px circle at ${mouse.x}% ${mouse.y}%, rgba(76,124,255,0.14), transparent 70%)`,
        }}
      />

      {method.copyable && (
        <button
          onClick={() => copy(method.value)}
          aria-label={`Copy ${method.label.toLowerCase()} to clipboard`}
          className={cn("absolute inset-0 z-10 rounded-2xl", focusRing)}
        />
      )}
      {method.href && !method.copyable && (
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${method.label.toLowerCase()}`}
          className={cn("absolute inset-0 z-10 rounded-2xl", focusRing)}
        />
      )}

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#4C7CFF] transition-colors duration-300 group-hover:text-[#9D5CFF]">
        <Icon size={20} strokeWidth={1.75} />
      </div>

      <p className="relative mt-4 text-xs tracking-widest text-white/40">{method.label.toUpperCase()}</p>
      <p className="relative mt-1 truncate text-sm font-medium text-white/85">{method.value}</p>

      {method.copyable && (
        <span className="relative mt-3 inline-flex items-center gap-1.5 text-xs text-white/40">
          {copied ? (
            <>
              <Check size={13} className="text-[#28C840]" /> Copied
            </>
          ) : (
            <>
              <Copy size={13} /> Click to copy
            </>
          )}
        </span>
      )}
      {method.href && !method.copyable && (
        <span className="relative mt-3 inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors group-hover:text-white/60">
          Visit <ArrowUpRight size={13} />
        </span>
      )}
    </motion.div>
  );
}