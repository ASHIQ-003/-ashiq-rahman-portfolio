import Section from "./Section";
import { IconArrowUpRight } from "./icons.jsx";
import { startup } from "../content";

export default function StartupSection() {
  return (
    <Section id="startup" className="border-t border-border/60">
      
      {/* Editorial Header */}
      <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-label">Currently Building</h2>
          <div className="mt-4 flex items-center gap-3">
            <img src="/queuefree-logo.png" alt="QueueFree" className="h-7 w-auto object-contain sm:h-8" />
            <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink">
              {startup.role}
            </span>
          </div>
        </div>
      </div>



      {/* Thesis Section: 2 Column Layout */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-12 sm:mt-24 lg:grid-cols-[1fr_2fr] lg:gap-20">
        
        {/* Left Column: Title & Stats */}
        <div>
          <h3 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {startup.thesisTitle}
          </h3>
          
          <div className="mt-10 flex flex-col gap-5 border-l border-border pl-5">
            {startup.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-ink-muted">
                  {stat.label}
                </p>
                <p className="mt-1 font-mono text-sm font-medium text-ink">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: The Essay / Thesis */}
        <div className="flex flex-col items-start">
          <div className="prose prose-zinc prose-p:leading-relaxed prose-p:text-ink/80 prose-p:text-lg sm:prose-p:text-[19px]">
            {startup.thesisBody.map((paragraph, idx) => (
              <p key={idx} className={idx > 0 ? "mt-6" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
          
          <a
            href={startup.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-12 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-all hover:border-ink/40 hover:text-ink/70"
          >
            Visit QueueFree
            <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

    </Section>
  );
}
