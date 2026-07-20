"use client";

import { useState } from "react";
import Image from "next/image";
import { jetbrainsMono } from "@/lib/fonts";

// Drop a replacement photo at this exact path to update the site —
// no code changes needed. Supports whatever the file at that path is;
// if it's missing, the illustrated placeholder below renders instead.
const PROFILE_SRC = "/images/profile/profile.png";

export default function ProfileImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/30">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="10" r="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 17l5-5 3 3 3-3.5 5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span className={`text-xs tracking-widest ${jetbrainsMono.className}`}>YOUR PHOTO HERE</span>
      </div>
    );
  }

  return (
    <Image
      src={PROFILE_SRC}
      alt="Uzair Khan"
      fill
      sizes="(min-width: 1024px) 384px, 320px"
      className="object-cover object-[center_18%] scale-[1.12]"
      priority
      onError={() => setFailed(true)}
    />
  );
}