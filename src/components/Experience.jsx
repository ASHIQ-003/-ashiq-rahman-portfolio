import Section from "./Section";
import { education, experience, buildingTowards } from "../content";

export default function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60 py-16 sm:py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Timeline Column */}
        <div>
          <h2 className="section-label">Timeline</h2>
          <ol className="relative mt-10 space-y-10 border-l border-border/50 pl-8">
            {experience.map((item, i) => (
              <li key={item.title} className="relative group">
                <span className="absolute -left-[37px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-border transition-colors group-hover:bg-ink" />
                <div className="flex flex-wrap items-baseline gap-3">
                  {item.period && (
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">{item.period}</span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-ink/80">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Roadmap Column */}
        <div>
          <h2 className="section-label">Roadmap</h2>
          <ul className="mt-10 space-y-6">
            {buildingTowards.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-border/40 pb-6"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/20" aria-hidden />
                <span className="text-base leading-relaxed text-ink/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Education — minimised to a stark footnote */}
      <div className="mt-20 border-t border-border/40 pt-6">
        {education.map((item) => (
          <div key={item.title} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
            <span className="font-semibold text-ink">{item.title}</span>
            <span className="opacity-50">/</span>
            <span>{item.detail}</span>
            <span className="opacity-50">/</span>
            <span>{item.period}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
