import { useState } from "react";
import Section from "./Section";
import { site } from "../content";

const linkClass =
  "font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:decoration-brand";

const INTENT_OPTIONS = [
  "Partnership or collaboration",
  "Feedback on QueueFree",
  "Investor inquiry",
  "Press or media",
  "Technical question",
  "Other",
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value.trim(),
          email: form.email.value.trim(),
          subject: form.subject.value.trim(),
          message: form.message.value.trim(),
        })
      });
      
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="border-t border-border/80">
      <h2 className="section-label">Let's connect</h2>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted">
        If you're building in healthcare, working on something interesting, or want to discuss what QueueFree is solving — reach out. Fastest on email at{" "}
        <a href={`mailto:${site.email}`} className={linkClass}>
          {site.email}
        </a>
        . Also on{" "}
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          LinkedIn
        </a>
        {" "}and{" "}
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
          <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            disabled={status === "sending"}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none ring-brand/20 transition-shadow focus:ring-2 disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Your Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={status === "sending"}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none ring-brand/20 transition-shadow focus:ring-2 disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Reason for reaching out
          </label>
          <select
            id="contact-subject"
            name="subject"
            disabled={status === "sending"}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none ring-brand/20 transition-shadow focus:ring-2 disabled:opacity-60"
          >
            <option value="">Select one…</option>
            {INTENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            disabled={status === "sending"}
            className="mt-2 w-full resize-y rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none ring-brand/20 transition-shadow focus:ring-2 disabled:opacity-60"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="btn-primary sm:px-10 disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : status === "sent" ? "✓ Sent!" : "Send message"}
          </button>

          {status === "error" && (
            <p className="text-xs text-red-500" role="alert">
              Something went wrong. Email me at{" "}
              <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
            </p>
          )}

          {status === "sent" && (
            <p className="text-xs text-ink-muted" role="status">
              Message sent successfully!
            </p>
          )}
        </div>
      </form>
    </Section>
  );
}
