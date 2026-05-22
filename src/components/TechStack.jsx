import Section from "./Section";
import { techStack } from "../content";

export default function TechStack() {
  return (
    <Section id="stack" className="border-t border-border/80">
      <h2 className="section-label">{techStack.title}</h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
        {techStack.subtitle}
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {techStack.groups.map((g) => (
          <div
            key={g.name}
            className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:border-brand/20 hover:shadow-card-hover"
          >
            <h3 className="text-sm font-bold text-ink">{g.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-surface-muted px-3 py-1.5 text-sm font-medium text-ink-muted transition-colors group-hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
