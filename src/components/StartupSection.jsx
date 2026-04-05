import Section from "./Section";
import { IconArrowUpRight } from "./icons.jsx";
import { startup } from "../content";

export default function StartupSection() {
  return (
    <Section id="startup" className="border-t border-border/80">
      <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-surface-muted/30 shadow-card">
        <div className="p-8 md:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">Startup</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {startup.title}
          </h2>
          <p className="mt-3 text-sm font-semibold text-ink-muted">{startup.role}</p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink sm:text-base">
            {startup.description}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted border-l-2 border-brand/40 pl-4">
            🚧 Currently in active development — launching soon.
          </p>
          <a
            href={startup.url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 gap-2"
          >
            Visit Website
            <IconArrowUpRight className="h-4 w-4 opacity-90" />
          </a>
        </div>
      </div>
    </Section>
  );
}
