import Section from "./Section";
import { testimonials } from "../content";

export default function Testimonials() {
  // Don't render if all testimonials are still placeholders
  const real = testimonials.filter((t) => !t.author.toLowerCase().includes("add a real"));
  if (real.length === 0) return null;

  return (
    <Section className="border-t border-border/80">
      <h2 className="section-label">What people say</h2>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {real.map((t) => (
          <li
            key={t.author}
            className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card sm:p-7"
          >
            {/* Large decorative quote mark */}
            <span
              className="absolute right-5 top-4 font-display text-6xl leading-none text-brand/10 select-none"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="text-sm leading-relaxed text-ink/90">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand">
                {t.author
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-xs text-ink-muted">{t.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
