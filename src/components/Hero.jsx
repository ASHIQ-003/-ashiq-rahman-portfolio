import { useEffect, useState } from "react";
import { site } from "../content";

const ROLES = [
  "Founder & CTO @ QueueFree",
  "AI Systems Developer",
  "Full-Stack Engineer",
  "Healthcare Tech Builder",
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
      className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20"
    >
      <div className="absolute -left-4 top-24 hidden h-24 w-px bg-gradient-to-b from-brand/50 to-transparent md:block" aria-hidden />

      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Text column */}
        <div className="flex-1">
          <p className="animate-fade-in animate-delay-fix text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Founder · Builder · AI Developer
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
            <a href="#projects" className="btn-primary min-w-[8.5rem] shadow-glow">
              View Projects
            </a>
            <a href="#startup" className="btn-secondary min-w-[8.5rem]">
              Explore Startup
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn
            </a>
            <a href="/resume.pdf" download className="btn-cv sm:hidden">
              Download CV
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="animate-fade-in animate-delay-fix shrink-0 self-center sm:self-start sm:pt-2 group cursor-pointer">
          <div className="relative h-36 w-36 sm:h-48 sm:w-48 transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-brand/50 via-brand/20 to-transparent blur-md opacity-60 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="relative h-full w-full rounded-full border-2 border-brand/30 bg-brand/5 overflow-hidden shadow-lg transition-all duration-500 group-hover:border-brand/60 group-hover:shadow-[0_0_25px_-5px_rgba(var(--brand),0.4)]">
              <img
                src="/profile.jsx.jpeg"
                alt="Ashiq Rahman"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
