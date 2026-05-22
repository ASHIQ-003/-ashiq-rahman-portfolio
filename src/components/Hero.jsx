import { useEffect, useState } from "react";
import { site } from "../content";

const ROLES = [
  "Founder & CTO @ QueueFree",
  "Healthcare Tech Builder",
  "Full-Stack Systems Engineer",
  "AI-Powered Product Builder",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="typewriter-text">
      {displayed}
      <span className="typewriter-cursor" aria-hidden>|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-24"
    >

      {/* Founder status badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Founder · Actively Building QueueFree
      </div>

      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Text column */}
        <div className="flex-1">
          <p className="animate-fade-in animate-delay-fix text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Founder · Builder · Systems Engineer
          </p>
          <h1 className="animate-fade-in-delay-1 animate-delay-fix mt-4 font-display text-hero font-semibold text-ink">
            {site.name}
          </h1>
          <p className="animate-fade-in-delay-2 animate-delay-fix mt-3 text-lg font-medium text-brand sm:text-xl min-h-[1.75rem]">
            <Typewriter />
          </p>
          <p className="animate-fade-in-delay-3 animate-delay-fix mt-4 max-w-xl text-base leading-relaxed text-ink/90">
            {site.tagline}
          </p>
          <p className="animate-fade-in-delay-4 animate-delay-fix mt-4 max-w-2xl border-l-2 border-brand/40 pl-4 text-sm font-medium leading-relaxed text-ink-muted sm:text-[15px]">
            {site.heroFocus}
          </p>
          <div className="animate-fade-in-delay-5 animate-delay-fix mt-10 flex flex-wrap gap-2.5">
            <a href="#startup" className="btn-primary min-w-[8.5rem] shadow-glow">
              See QueueFree
            </a>
            <a href="#projects" className="btn-secondary min-w-[8.5rem]">
              View Projects
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile photo — minimal, sharp, no heavy glows */}
        <div className="animate-fade-in animate-delay-fix shrink-0 self-center sm:self-start sm:pt-2 group">
          <div className="relative h-40 w-40 sm:h-52 sm:w-52 overflow-hidden rounded-[2rem] bg-surface-muted transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <img
              src="/profile.jpeg"
              alt="Ashiq Rahman"
              className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
              style={{ objectPosition: 'top' }}
            />
            {/* Very subtle inner ring for depth */}
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-ink/5" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
