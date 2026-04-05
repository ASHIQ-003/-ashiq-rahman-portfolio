import { useEffect, useState } from "react";
import Section from "./Section";
import { projects } from "../content";
import { IconArrowUpRight } from "./icons.jsx";

function StatusBadge({ status }) {
  const live = status === "live";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted/90 px-2.5 py-1 text-xs font-semibold text-ink-muted shadow-sm">
      <span
        className={`h-2 w-2 rounded-full shadow-[0_0_0_3px_rgba(16,185,129,0.2)] ${live ? "bg-emerald-500" : "bg-stone-400 shadow-none"}`}
        aria-hidden
      />
      {live ? "Live" : "WIP"}
    </span>
  );
}

function ProblemLine({ text }) {
  return (
    <div className="mt-4 rounded-xl border border-border/70 bg-surface px-3.5 py-2.5">
      <p className="text-xs leading-relaxed text-ink-muted">
        <span className="font-bold uppercase tracking-wider text-ink">Problem · </span>
        {text}
      </p>
    </div>
  );
}

function ProofBlock({ proof, signals }) {
  return (
    <div className="mt-5 space-y-3 rounded-xl border border-border/80 bg-surface-muted/40 px-4 py-3">
      <dl className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-3 sm:gap-3">
        <div>
          <dt className="font-bold uppercase tracking-wider text-ink-muted/90">Status</dt>
          <dd className="mt-0.5 font-semibold text-ink">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              {proof.status}
            </span>
          </dd>
        </div>
        <div>
          <dt className="font-bold uppercase tracking-wider text-ink-muted/90">Type</dt>
          <dd className="mt-0.5 font-semibold text-ink">{proof.type}</dd>
        </div>
        <div>
          <dt className="font-bold uppercase tracking-wider text-ink-muted/90">Host</dt>
          <dd className="mt-0.5 font-semibold text-ink">{proof.host}</dd>
        </div>
      </dl>
      <ul className="flex flex-wrap gap-2 border-t border-border/60 pt-3">
        {signals.map((s) => (
          <li
            key={s}
            className="rounded-md bg-surface px-2 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-border/80"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Section id="projects" className="border-t border-border/80">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-label">Featured projects</h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
            Shipped systems with public demos—each card shows deployment proof, not just screenshots.
          </p>
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-ink-muted/80">
          Proof on every build
        </p>
      </div>

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.id}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_8px_30px_-6px_rgba(13,116,110,0.25)] sm:p-7"
          >
            {p.imageSrc && (
              <img
                src={p.imageSrc}
                alt={`${p.title} preview`}
                className="mb-6 w-full rounded-xl border border-border/50 object-cover shadow-sm transition-colors duration-500 group-hover:border-brand/40"
              />
            )}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">{p.title}</h3>
              <StatusBadge status={p.status} />
            </div>
            {p.problem && <ProblemLine text={p.problem} />}
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{p.description}</p>
            <ProofBlock proof={p.proof} signals={p.signals} />
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-surface-muted px-2.5 py-1 text-xs font-semibold text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/80 pt-6">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex-1 sm:flex-none"
              >
                Live Demo
                <IconArrowUpRight className="h-4 w-4 opacity-90" />
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex-1 sm:flex-none"
              >
                View Code
              </a>
              <button
                type="button"
                onClick={() => setOpen(p)}
                className="btn-ghost border-transparent text-ink-muted hover:text-ink"
              >
                Details
              </button>
            </div>
          </li>
        ))}
      </ul>

      {open && (
        <div
          className="animate-backdrop-in fixed inset-0 z-[100] flex items-end justify-center bg-ink/45 p-4 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <div className="animate-modal-in max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border bg-surface shadow-2xl sm:rounded-2xl">
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-border/80 bg-surface/95 px-5 py-4 backdrop-blur-md sm:px-6">
              <div>
                <p className="section-label text-[10px]">Project</p>
                <h2 id="project-modal-title" className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                  {open.title}
                </h2>
                <div className="mt-3">
                  <StatusBadge status={open.status} />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-5 py-5 sm:px-6">
              {open.problem && <ProblemLine text={open.problem} />}
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{open.description}</p>
              <div className="mt-6">
                <ProofBlock proof={open.proof} signals={open.signals} />
              </div>
              <h3 className="mt-8 text-xs font-bold uppercase tracking-wider text-ink-muted">Features</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {open.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-xs font-bold uppercase tracking-wider text-ink-muted">Tech</h3>
              <p className="mt-3 text-sm font-medium text-ink">{open.tech.join(" · ")}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href={open.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={open.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
