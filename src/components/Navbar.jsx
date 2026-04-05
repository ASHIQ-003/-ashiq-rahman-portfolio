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
          <kbd
            className="hidden cursor-pointer select-none items-center gap-1 rounded-lg border border-border bg-surface-muted px-2 py-1.5 text-[11px] font-semibold text-ink-muted transition-colors hover:border-brand/40 hover:text-brand md:flex"
            title="Command palette (Ctrl+K)"
            onClick={() => {
              const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true });
              window.dispatchEvent(event);
            }}
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            ⌘K
          </kbd>
          <button
            type="button"
            onClick={onToggleDark}
            className="btn-secondary p-2 text-xs sm:text-sm"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? (
              /* Sun icon */
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="5" />
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              /* Moon icon */
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
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
