export const site = {
  name: "Ashiq Rahman",
  title: "Founder & CTO @ QueueFree",
  tagline: "Building systems that solve real problems — from idea to production.",
  heroFocus: "QueueFree exists because hospitals lose hours every day to broken queue management. We're fixing that.",
  email: "sashiqrahman003@gmail.com",
  links: {
    startup: "https://queuefreehealth.com/",
    linkedin: "https://www.linkedin.com/in/ashiq-rahman-48a550314",
    github: "https://github.com/ASHIQ-003",
  },
};

export const about = {
  bio: "QueueFree exists to solve a real operational problem in healthcare — patients wait too long because the systems managing them are broken. As Founder & CTO, I lead all engineering and product decisions: system architecture, backend APIs, frontend, and cloud infrastructure. We build end-to-end and ship fast — because the problem is real and the window to fix it is now.",
  toolsLabel: "What we build with",
  skills: [
    "Python",
    "React",
    "Flask / FastAPI",
    "PostgreSQL",
    "Supabase",
    "TypeScript",
    "REST APIs",
    "Vercel",
    "System Design",
    "AI Pipelines",
  ],
};

export const impact = {
  headline: "Shipped & operating",
  bullets: [
    "Founded QueueFree — a live healthcare SaaS platform managing patient flow in real time",
    "Designed and deployed a multi-tenant AI Security SOC WAF with real-time threat detection",
    "Shipped an AI OS Interface — a production-grade system UI, live and publicly accessible",
    "Full ownership across every layer: architecture, API, UI, database, and cloud deployment",
    "Every system live, functional, and publicly accessible — built to production standard",
  ],
  metrics: [
    { label: "Live deployed systems", value: "3+" },
    { label: "Healthcare startup founded", value: "1" },
    { label: "Founding team", value: "Small" },
    { label: "Years building", value: "3+" },
  ],
};

export const foundersNote = {
  title: "Why we build",
  body: "We build because problems in the real world don't fix themselves. QueueFree started with a simple observation — hospitals waste hours daily on something software can solve. That's enough reason to build. Execution matters more than permission.",
};

export const techStack = {
  title: "The stack",
  subtitle: "Tools we reach for when shipping end-to-end — from interface to infrastructure.",
  groups: [
    { name: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
    { name: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML / CSS"] },
    { name: "Backend", items: ["Flask", "FastAPI", "REST APIs", "PostgreSQL", "SQLite"] },
    { name: "AI / Automation", items: ["ML Pipelines", "Threat Detection", "AI-assisted workflows"] },
    { name: "Cloud & Infrastructure", items: ["Vercel", "Supabase", "Git", "GitHub"] },
  ],
};

export const startup = {
  title: "QueueFree",
  role: "Founder & CTO",

  thesisTitle: "The thesis behind QueueFree",
  thesisBody: [
    "I've spent a lot of time watching how hospitals operate. The medical care is often world-class, but the operational infrastructure is broken. Patients wait for hours with zero visibility into when they will be seen. Doctors are overwhelmed by chaotic queues they can't control.",
    "QueueFree is my answer to that. It's a real-time platform that gives every clinic full visibility into their patient flow, and every patient a predictable wait time. It replaces clipboards and shouting with a silent, synchronized system.",
    "I built the entire stack from the ground up: the real-time database schema, the doctor-side interface, the admin analytics, and the cloud deployment. The goal isn't just to sell software—it's to eliminate preventable waiting in healthcare."
  ],

  stats: [
    { label: "Target Market", value: "India, then Global" },
    { label: "Status", value: "Deployed" },
    { label: "Founded", value: "2025" }
  ],

  url: "https://queuefreehealth.com/",
  imageSrc: "/queuefree-banner.png",
  figureCaption: "QueueFree — Live platform architecture.",
};

export const projects = [
  {
    id: "ai-os",
    title: "AI OS Interface",
    status: "live",
    problem:
      "Most tools don't pair a structured system surface with intuitive, interactive AI workflows — friction gets in the way of real use.",
    description:
      "A production AI-powered system interface with structured UI and interactive components. Built and deployed on Vercel.",
    proof: {
      status: "Live",
      type: "Full-stack system",
      host: "Vercel",
    },
    signals: ["Live system", "Deployed on Vercel", "End-to-end build"],
    features: [
      "Interactive UI",
      "Smooth transitions",
      "System-style interface design",
    ],
    tech: ["React", "Tailwind CSS"],
    demo: "https://ai-os-ui.vercel.app",
    repo: "https://github.com/ASHIQ-003/ai-os.git",
    imageSrc: "/ai-os-preview.png",
  },
  {
    id: "ai-security",
    title: "AI Security SOC WAF",
    status: "live",
    problem:
      "Raw logs and alerts rarely explain behaviour — security teams need real-time threat signals and clear context to respond fast.",
    description:
      "A production-grade Web Application Firewall with AI-driven threat detection, real-time request analysis, and a SOC-style dashboard for security monitoring.",
    proof: {
      status: "Live",
      type: "Full-stack system",
      host: "Vercel",
    },
    signals: ["Live system", "Deployed on Vercel", "Multi-tenant SaaS architecture"],
    features: [
      "Real-time threat detection",
      "SOC-style analytics dashboard",
      "API key-based auth & project isolation",
      "PostgreSQL-backed log persistence",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "Supabase", "REST APIs"],
    demo: "https://aisecuritysystem.vercel.app/",
    repo: "https://github.com/ASHIQ-003/ai_security_system.git",
    imageSrc: "/AI Security SOC WAF-preview.png",
  },
];

export const education = [
  {
    title: "B.Tech — Computer Science Engineering (AI & Data Science)",
    period: "2024 – 2028",
    detail: "Hindustan Institute of Technology and Science, Chennai",
  },
];

export const experience = [
  {
    title: "Founder & CTO — QueueFree",
    period: "2025 – Present",
    detail: "Leading all engineering and product at QueueFree — a healthcare SaaS platform built to replace broken hospital queue systems. Responsible for system architecture, backend, frontend, cloud deployment, and product direction.",
  },
  {
    title: "Independent Systems Engineer",
    period: "2025 – Present",
    detail: "Designed and shipped two production systems: an AI Security SOC WAF (multi-tenant SaaS, PostgreSQL, Supabase, Flask, Vercel) and an AI OS Interface (React, Tailwind). Both live and publicly accessible.",
  },
];

export const buildingTowards = [
  "2026 — Pilot launch with clinics in Chennai",
  "2026 — Admin-facing analytics dashboard v1",
  "2026 — Offline-first mobile interface for frontline staff",
  "2026 — Automated appointment routing with predictive wait times",
];

export const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#impact", label: "Impact", id: "impact" },
  { href: "#stack", label: "Stack", id: "stack" },
  { href: "#startup", label: "QueueFree", id: "startup" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Timeline", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const testimonials = [];

export const navSpyIds = navLinks.map((l) => l.id);
