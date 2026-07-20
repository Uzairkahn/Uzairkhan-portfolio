import type { LucideIcon } from "lucide-react";
import { Layers, Brain, Smartphone, Sparkles } from "lucide-react";

export interface WhyCard {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: [string, string];
}

// Every point here is backed by something visible elsewhere in the
// portfolio (Projects, Skills, Experience) — no generic claims.
export const whyCards: WhyCard[] = [
  {
    icon: Layers,
    title: "Full Stack Engineering",
    description:
      "Built scalable web applications using modern technologies and real-world development practices — from REST APIs and MongoDB data modeling to production deployments.",
    accent: ["#4C7CFF", "#38BDF8"],
  },
  {
    icon: Brain,
    title: "AI & Intelligent Solutions",
    description:
      "Hands-on experience integrating AI technologies into practical software — speech processing, summarization, and transformer-based NLP pipelines.",
    accent: ["#9D5CFF", "#FF6FD8"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Hands-on Android and Flutter development with Firebase integration, covering authentication, Firestore, and cross-platform architecture.",
    accent: ["#22D3A5", "#4C7CFF"],
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description:
      "Passionate about learning modern technologies and continuously improving engineering skills — from new frameworks to AI tooling and system design.",
    accent: ["#FF9F5C", "#9D5CFF"],
  },
];