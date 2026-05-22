import Section from "./Section";
import { foundersNote } from "../content";

export default function FoundersNote() {
  return (
    <Section className="border-t border-border/80 py-14 sm:py-20">
      <blockquote className="relative overflow-hidden rounded-2xl border border-border bg-surface-muted/50 shadow-card">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand via-brand/60 to-transparent" aria-hidden />
        <div className="px-6 py-9 pl-8 sm:px-10 sm:py-10">
          <p className="section-label">{foundersNote.title}</p>
          <p className="mt-6 font-display text-lg italic leading-relaxed text-ink sm:text-xl">
            "{foundersNote.body}"
          </p>
          <footer className="mt-6 text-sm font-semibold text-ink-muted">— Ashiq Rahman, Founder & CTO @ QueueFree</footer>
        </div>
      </blockquote>
    </Section>
  );
}
