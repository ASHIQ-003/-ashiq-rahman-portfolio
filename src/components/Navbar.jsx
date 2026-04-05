import { useEffect, useState } from "react";
import { navLinks, site } from "../content";

export default function Navbar({ dark, onToggleDark, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[border-color,background-color] duration-300 ${
        scrolled
          ? "border-border/90 bg-surface/85 shadow-sm backdrop-blur-lg backdrop-saturate-150"
          : "border-transparent bg-surface/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="group flex flex-shrink-0 items-center gap-3.5 text-sm font-semibold tracking-tight text-ink transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-brand-fg shadow-sm ring-1 ring-ink/5">
            AR
          </span>
          <span className="hidden sm:inline">
            {site.name.split(" ")[0]}
            <span className="font-medium text-ink-muted">{" Rahman"}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navLinks.map((l) => {
            const active = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-brand/10 font-semibold text-brand ring-1 ring-brand/20"
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="btn-cv hidden px-4 py-2 text-xs sm:inline-flex sm:text-sm"
          >
            Download CV
          </a>
          <button
            type="button"
            onClick={onToggleDark}
            className="btn-secondary px-3 py-2 text-xs sm:text-sm"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            className="btn-secondary p-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div id="mobile-nav" className="border-t border-border bg-surface/95 px-4 py-4 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-0.5">
            {navLinks.map((l) => {
              const active = activeSection === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm ${
                    active ? "bg-brand/10 font-semibold text-brand" : "text-ink-muted hover:bg-surface-muted"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-brand hover:bg-surface-muted"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
