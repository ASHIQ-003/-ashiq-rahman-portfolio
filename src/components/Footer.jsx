import { site } from "../content";

const links = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "QueueFree", href: site.links.startup },
  { label: "Email", href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/80 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <img src="/queuefree-logo.png" alt="QueueFree" className="h-8 w-auto object-contain" />
          </div>
          <p className="mt-2 text-sm text-ink-muted">© {new Date().getFullYear()} Ashiq Rahman · Founder & CTO @ QueueFree</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto") ? undefined : "noreferrer"}
              className="text-sm font-semibold text-ink-muted transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mt-8 text-center text-xs font-medium text-ink-muted">
        Founder operating page · Built with React & Tailwind · Deployed on Vercel.
      </p>
      <p className="mt-4 text-center text-xs text-ink-muted/80">© 2026 Ashiq Rahman · QueueFree. All rights reserved.</p>
    </footer>
  );
}
