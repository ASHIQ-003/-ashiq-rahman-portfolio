import Section from "./Section";
import { education, experience } from "../content";

export default function Experience() {
  return (
    <Section className="border-t border-border/80 py-14 sm:py-18">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Education Column */}
        <div>
          <h2 className="section-label flex items-center gap-2 text-brand">
            <span className="text-sm">🎓</span> Education
          </h2>
          <ol className="relative mt-8 space-y-6 border-l border-border pl-8 sm:pl-10">
            <span
              className="absolute -left-px top-0 h-24 w-px bg-gradient-to-b from-brand to-transparent"
              aria-hidden
            />
            {education.map((item) => (
              <li key={item.title} className="relative transition-all duration-300 hover:translate-x-1">
                <span className="absolute -left-[21px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-brand bg-surface shadow-sm sm:-left-[25px]" />
                <div className="flex flex-wrap items-baseline gap-3">
                  {item.period && (
                    <span className="text-[11px] font-medium text-ink-muted">{item.period}</span>
                  )}
                </div>
                <h3 className="mt-1.5 font-semibold text-ink leading-snug">{item.title}</h3>
                <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                {item.focus && (
                  <p className="mt-3 text-xs font-medium text-ink-muted/90 border-l-2 border-brand/40 pl-3">
                    {item.focus}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Experience Column */}
        <div>
          <h2 className="section-label flex items-center gap-2 text-brand">
            <span className="text-sm">💼</span> Experience
          </h2>
          <ol className="relative mt-8 space-y-6 border-l border-border pl-8 sm:pl-10">
            <span
              className="absolute -left-px top-0 h-24 w-px bg-gradient-to-b from-brand to-transparent"
              aria-hidden
            />
            {experience.map((item, i) => (
              <li key={item.title} className="relative transition-all duration-300 hover:translate-x-1">
                <span className="absolute -left-[21px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-brand bg-surface shadow-sm sm:-left-[25px]" />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="mb-1 inline-block text-[11px] font-bold uppercase tracking-widest text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.period && (
                    <span className="text-[11px] font-medium text-ink-muted">{item.period}</span>
                  )}
                </div>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
