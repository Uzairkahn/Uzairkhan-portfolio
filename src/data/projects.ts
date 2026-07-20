export type ProjectCategory = "fullstack" | "webapp" | "ai" | "mobile";

export interface Project {
  slug: string;
  title: string;
  categoryLabel: string;
  categoryIcon: ProjectCategory;
  overview: string;
  problem: string;
  highlights: string[];
  features: string[];
  stack: string[];
  outcome: string;
  /** Real public repository URL. Omit if not yet public — the GitHub
   *  button only renders when this is set, so no dead links appear. */
  github?: string;
  /** Real, working live deployment. Takes priority over videoUrl. */
  demoUrl?: string;
  /** Fallback demo video, used only when demoUrl is not available. */
  videoUrl?: string;
  /** Path under /public. Falls back to an illustrated placeholder
   *  automatically if the file doesn't exist yet. */
  coverImage?: string;
  accent: [string, string]; // gradient pair, unique per project but within brand family
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    slug: "loka",
    title: "Loka — Local Marketplace & Community Services Platform",
    categoryLabel: "Full Stack Software Engineering",
    categoryIcon: "fullstack",
    overview:
      "Designed and developed a production-ready marketplace platform that enables users to buy, sell, and offer local services through a secure, scalable, modern web application.",
    problem:
      "Traditional community marketplaces often lack integrated service management, secure authentication, and real-time communication. Loka combines all of these into a single scalable platform.",
    highlights: [
      "JWT authentication with role-based access control",
      "Cloudinary media management for listings",
      "Socket.io real-time messaging",
      "REST API architecture with MongoDB relationships",
      "End-to-end booking workflow",
      "CI-friendly deployment pipeline across Vercel and Render",
    ],
    features: [
      "Secure Authentication",
      "Product Listings",
      "Service Listings",
      "Image Upload",
      "Booking System",
      "Favorites",
      "Notifications",
      "Reviews & Ratings",
      "Real-time Messaging",
      "Admin Dashboard",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "React Query",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Socket.io",
      "Cloudinary",
      "Multer",
      "Vercel",
      "Render",
      "MongoDB Atlas",
    ],
    outcome:
      "Deployed to production with the frontend on Vercel and backend on Render, backed by MongoDB Atlas — fully functional across booking, messaging, and admin workflows.",
    github: "https://github.com/Uzairkahn/loka-marketplace",
    demoUrl: "https://loka-marketplace-tau.vercel.app/",
    coverImage: "/images/projects/loka/cover.png",
    accent: ["#4C7CFF", "#9D5CFF"],
    flagship: true,
  },
  {
    slug: "vendorhub",
    title: "VendorHub — Vendor Quotation Management System",
    categoryLabel: "Full Stack Application",
    categoryIcon: "webapp",
    overview:
      "Developed a vendor quotation management platform that simplifies vendor onboarding, quotation workflows, proposal comparison, and day-to-day business operations.",
    problem:
      "Businesses often struggle with manual quotation handling and scattered vendor tracking. VendorHub digitizes the entire quotation lifecycle in one place.",
    highlights: [
      "REST APIs with clean CRUD architecture",
      "Vendor management with structured onboarding",
      "Side-by-side proposal comparison logic",
      "Dashboard analytics for quotation activity",
      "Form validation across every workflow",
      "Deployed and load-tested across two platforms",
    ],
    features: [
      "Vendor CRUD",
      "Quotation Management",
      "Dashboard Analytics",
      "Proposal Comparison",
      "Search",
      "Filtering",
      "Status Management",
      "Responsive UI",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "JavaScript", "Vercel", "Render"],
    outcome:
      "Delivered a fully functional CRUD platform deployed on Vercel and Render, streamlining vendor quotation management end to end.",
    demoUrl: "https://vendorhub-quotation-management-syst.vercel.app",
    coverImage: "/images/projects/vendorhub/cover.png",
    github: "https://github.com/Uzairkahn/vendorhub-quotation-management-system",
    accent: ["#38BDF8", "#4C7CFF"],
  },
  {
    slug: "ai-inclusive-learning",
    title: "AI-Powered Inclusive Learning Assistant",
    categoryLabel: "Artificial Intelligence",
    categoryIcon: "ai",
    overview:
      "Built an AI-powered accessibility platform that makes educational content easier to consume through speech recognition, summarization, translation, and intelligent document processing.",
    problem:
      "Educational content isn't equally accessible to every learner. This system combines multiple AI models into one platform to close that gap.",
    highlights: [
      "Transformer-based NLP pipelines",
      "Speech processing with Whisper",
      "REST APIs connecting model inference to the frontend",
      "Document parsing and extraction pipeline",
      "Multi-model AI integration in a single service layer",
    ],
    features: [
      "Speech-to-Text",
      "Text-to-Speech",
      "Summarization",
      "Translation",
      "File Upload",
      "Dashboard Analytics",
      "Document Extraction",
    ],
    stack: ["Python", "Flask", "Transformers", "Whisper", "gTTS", "SQLite"],
    outcome:
      "Completed as a final year project, successfully integrating multiple AI models — speech, summarization, and translation — into a single accessible platform.",
    videoUrl: "/images/videos/projects/kidemy-demo.mp4",
    coverImage: "/images/projects/kidemy/cover.png",
    github: "https://github.com/Uzairkahn/inclusive-learning-assistant",
    accent: ["#9D5CFF", "#FF6FD8"],
  },
  {
    slug: "qr-vault",
    title: "QR Vault",
    categoryLabel: "Flutter Development",
    categoryIcon: "mobile",
    overview:
      "Developed a Flutter application for generating, scanning, and securely managing QR codes with Firebase-powered authentication and cloud storage.",
    problem:
      "Provides a secure, cross-platform QR management solution with persistent history and cloud synchronization, rather than a disposable one-off scan.",
    highlights: [
      "Firebase Authentication integration",
      "Cloud Firestore for persistent, synced history",
      "Cross-platform architecture from a single codebase",
      "Clean, mobile-first UI built with Flutter widgets",
    ],
    features: ["QR Generator", "QR Scanner", "Authentication", "Scan History", "Cloud Firestore Sync"],
    stack: ["Flutter", "Firebase", "Dart"],
    outcome:
      "Built as a cross-platform mobile app with Firebase-backed cloud sync and authentication, running consistently across Android and iOS.",
    videoUrl: "/images/videos/projects/qrvault-demo.mp4",
    coverImage: "/images/projects/qrvault/cover.jpeg",
    github: "https://github.com/Uzairkahn/qr-vault-flutter",
    accent: ["#22D3A5", "#4C7CFF"],
  },
];
