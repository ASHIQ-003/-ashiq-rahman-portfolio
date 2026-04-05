export const site = {
  name: "Ashiq Rahman",
  title: "Founder & CTO @ QueueFree | AI Systems Developer",
  tagline: "Building intelligent systems and real-world AI products.",
  /** One line under the hero — signals active work */
  heroFocus: "Currently building QueueFree to improve healthcare systems.",
  email: "sashiqrahman003@gmail.com",
  links: {
    startup: "https://queuefreehealth.com/",
    linkedin: "https://www.linkedin.com/in/ashiq-rahman-48a550314",
    github: "https://github.com/ASHIQ-003",
  },
};

export const about = {
  bio: "I'm the Founder & CTO of QueueFree — a healthcare platform built to cut patient waiting times using intelligent queuing and real-time flow management. I ship full-stack AI systems end-to-end, from model to interface to deployment.",
  skills: [
    "AI / Machine Learning",
    "Python",
    "React",
    "Flask / FastAPI",
    "PostgreSQL",
    "System Design",
    "Web Development",
    "REST APIs",
  ],
};

export const impact = {
  headline: "Results & impact",
  bullets: [
    "Founded QueueFree — a live healthcare platform reducing patient wait times",
    "Built and deployed 3 live AI-powered systems end-to-end",
    "Architected an AI Security SOC WAF with real-time threat detection",
    "Shipped production-grade full-stack apps from model to UI to cloud",
  ],
  metrics: [
    { label: "Live deployed systems", value: "3+" },
    { label: "Healthcare startup founded", value: "1" },
    { label: "Product delivery", value: "End-to-end" },
  ],
};

export const foundersNote = {
  title: "Founder's note",
  body: "I focus on building systems that move from ideas to real-world use — where interfaces, data, and execution come together.",
};

export const techStack = {
  title: "Tech stack",
  groups: [
    { name: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
    { name: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML / CSS"] },
    { name: "Backend", items: ["Flask", "FastAPI", "REST APIs", "PostgreSQL", "SQLite"] },
    { name: "AI / ML", items: ["Machine Learning", "AI Pipelines", "Threat Detection"] },
    { name: "Cloud & Tools", items: ["Vercel", "Supabase", "Git", "GitHub"] },
  ],
};

export const startup = {
  title: "QueueFree",
  role: "Founder & CTO",
  description:
    "QueueFree is a healthcare-focused platform designed to reduce waiting times and improve patient flow through smart technology.",
  url: "https://queuefreehealth.com/",
  /** Replace this file in /public with your latest production capture anytime */
  imageSrc: "/queuefree-screenshot.png",
  figureCaption:
    "QueueFree — product dashboard. Update this image when you ship new UI.",
};

export const projects = [
  {
    id: "ai-os",
    title: "AI OS Interface",
    status: "live",
    problem:
      "Most tools don’t pair a structured system surface with intuitive, interactive AI workflows — friction gets in the way of real use.",
    description:
      "A modern AI-powered system interface with structured UI and interactive components.",
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
      "Raw logs and alerts rarely explain behavior — security teams need real-time threat signals and clear context to respond fast.",
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
    title: "B.Tech in Computer Science Engineering (AI & Data Science)",
    period: "2024 – 2028",
    detail: "Hindustan Institute of Technology and Science, Chennai",
    focus: "Relevant Focus: AI systems, software development, and real-world applications",
  },
];

export const experience = [
  {
    title: "Founder & CTO — QueueFree",
    period: "2025 – Present",
    detail: "Building a healthcare platform focused on reducing patient wait times through intelligent queue management. Leading product development, system design, and deployment.",
  },
  {
    title: "Project Development",
    period: "2026 – Present",
    detail: "Built and deployed AI-based systems including an AI OS Interface and an AI Security System, focusing on end-to-end development from frontend to backend.",
  },
];

export const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#impact", label: "Impact", id: "impact" },
  { href: "#stack", label: "Stack", id: "stack" },
  { href: "#startup", label: "QueueFree", id: "startup" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const navSpyIds = navLinks.map((l) => l.id);
