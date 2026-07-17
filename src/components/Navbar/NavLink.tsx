"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

/**
 * Single navbar link with a shared animated underline indicator.
 * The underline slides between links using Framer Motion's layoutId.
 */
export default function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-1 py-2 text-sm font-medium transition-colors duration-300",
        isActive ? "text-white" : "text-white/60 hover:text-white/90"
      )}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-active-underline"
          className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#4C7CFF] to-[#9D5CFF]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  );
}