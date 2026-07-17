import type { SkillIconName } from "@/data/skills";
import { JSX } from "react/jsx-runtime";

const paths: Record<SkillIconName, JSX.Element> = {
  frontend: (
    <path
      d="M4 6l-3 6 3 6M20 6l3 6-3 6M14 4l-4 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  backend: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M4 5.5V12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5.5M4 12v6.5c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </>
  ),
  tools: (
    <path
      d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.83 2.83a1.5 1.5 0 01-2.12-2.12L14.7 6.3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="9.5" cy="11" r="1" fill="currentColor" />
      <circle cx="14.5" cy="11" r="1" fill="currentColor" />
      <path d="M9 15h6M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
};

export default function SkillIcon({ name, className }: { name: SkillIconName; className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className={className}>
      {paths[name]}
    </svg>
  );
}