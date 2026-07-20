"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

/**
 * Lightweight in-page video player for projects that only have a demo
 * recording (no live deployment). Autoplays on open, closes on
 * backdrop click, Escape, or the close button.
 */
export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} demo video`}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-[70] w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1D] shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <span className="truncate text-sm font-medium text-white/70">{title} — Demo</span>
              <button
                onClick={onClose}
                aria-label="Close video"
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white",
                  focusRing
                )}
              >
                <X size={15} />
              </button>
            </div>
            <video
              key={videoUrl}
              src={videoUrl}
              controls
              autoPlay
              className="aspect-video w-full bg-black"
            >
              Your browser doesn&apos;t support embedded video.
            </video>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
