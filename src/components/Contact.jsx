import { useState } from "react";
import Section from "./Section";
import { site } from "../content";

const linkClass =
  "font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:decoration-brand";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const subject = form.subject.value.trim();
    const body = form.message.value.trim();
    const line = `From: ${name}\n\n${body}`;
    const mail = `mailto:${site.email}?subject=${encodeURIComponent(subject || "Portfolio inquiry")}&body=${encodeURIComponent(line)}`;
    window.location.href = mail;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <Section id="contact" className="border-t border-border/80">
      <h2 className="section-label">Contact</h2>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted">
        Tell me what you&rsquo;re building. I&rsquo;m fastest on email at{" "}
        <a href={`mailto:${site.email}`} className={linkClass}>
          {site.email}
        </a>
        . Also on{" "}
        <a href={site.links.github} target="_blank" rel="noreferrer" className={linkClass}>
          GitHub
        </a>
        ,{" "}
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          LinkedIn
        </a>
        , and{" "}
        <a href={site.links.startup} target="_blank" rel="noreferrer" className={linkClass}>
          QueueFree
        </a>
        .
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-lg space-y-5 rounded-2xl border border-border bg-surface-muted/40 p-6 shadow-sm backdrop-blur-sm sm:p-8"
      >
        <div>
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none ring-brand/20 transition-shadow focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none ring-brand/20 transition-shadow focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-2 w-full resize-y rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none ring-brand/20 transition-shadow focus:ring-2"
          />
        </div>
        <button type="submit" className="btn-primary w-full sm:w-auto sm:px-10">
          Send message
        </button>
        {sent && (
          <p className="text-xs text-ink-muted" role="status">
            Opening your email client… If nothing opens, copy {site.email}.
          </p>
        )}
      </form>
    </Section>
  );
}
