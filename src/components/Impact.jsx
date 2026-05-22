import Section from "./Section";
import { impact, site } from "../content";

export default function Impact() {
  return (
    <Section id="impact" className="border-t border-border/80">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <h2 className="section-label">{impact.headline}</h2>
          <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink sm:text-base">
            {impact.bullets.map((b) => (
              <li key={b} className="flex gap-3.5">
                <span
                  className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-[10px] font-bold text-brand"
                  aria-hidden
                >
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-md">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">At a glance</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {impact.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-surface-muted/60 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-card"
              >
                <p className="text-xl font-bold tracking-tight text-ink">{m.value}</p>
                <p className="mt-1.5 text-xs font-medium leading-snug text-ink-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder in build mode callout */}
      <div className="group mt-12 flex items-center gap-5 rounded-2xl border border-border bg-gradient-to-br from-surface-muted/80 to-surface-muted/30 p-5 shadow-sm transition-all duration-500 hover:border-brand/30 hover:shadow-lg sm:p-6 lg:max-w-xl">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand/20">
          <span className="text-xl">⚡</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Founder in build mode</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            Every system shipped on{" "}
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:decoration-brand"
            >
              GitHub
            </a>
            {" "}is live and functional. Products first — noise never.
          </p>
        </div>
      </div>
    </Section>
  );
}
