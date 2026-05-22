import Section from "./Section";
import { projects } from "../content";
import { IconArrowUpRight } from "./icons.jsx";

export default function Projects() {
  return (
    <Section id="projects" className="border-t border-border/60">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-16">
        <div>
          <h2 className="section-label">Other Builds</h2>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((p) => (
          <div key={p.id} className="group grid gap-8 sm:grid-cols-[1fr_1.5fr] items-start">
            
            {/* Image / Thumbnail */}
            <div className="overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-inset ring-ink/5">
              {p.imageSrc && (
                <img
                  src={p.imageSrc}
                  alt={`${p.title} preview`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] grayscale-[10%] group-hover:grayscale-0"
                />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink">{p.title}</h3>
                <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink/70">
                  {p.status}
                </span>
              </div>
              
              <p className="mt-4 text-base leading-relaxed text-ink/80 max-w-lg">
                {p.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-ink-muted"
                  >
                    {t} {t !== p.tech[p.tech.length - 1] && <span className="opacity-40 px-1">·</span>}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ink/70"
                >
                  Live Demo
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  View Code
                </a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </Section>
  );
}
