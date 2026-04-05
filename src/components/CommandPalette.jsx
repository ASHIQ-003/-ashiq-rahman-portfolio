import { useState, useEffect, useRef } from "react";
import { site } from "../content";

const COMMANDS = [
  { id: "projects", title: "Go to Projects", action: () => window.location.href = "#projects" },
  { id: "startup", title: "Go to Startup (QueueFree)", action: () => window.location.href = "#startup" },
  { id: "contact", title: "Contact Me", action: () => window.location.href = "#contact" },
  { id: "github", title: "Open GitHub", action: () => window.open(site.links.github, "_blank") },
  { id: "linkedin", title: "Open LinkedIn", action: () => window.open(site.links.linkedin, "_blank") },
  { id: "resume", title: "Download Resume", action: () => {
      const a = document.createElement('a');
      a.href = "/resume.pdf";
      a.download = "resume.pdf";
      a.click();
    } 
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center bg-ink/40 p-4 pt-[15vh] backdrop-blur-sm sm:p-6"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div className="animate-modal-in w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
        <div className="flex items-center border-b border-border px-4">
          <svg className="h-5 w-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            className="w-full bg-transparent px-4 py-4 text-sm text-ink outline-none placeholder:text-ink-muted/60"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="hidden rounded border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-medium text-ink-muted sm:block">
            ESC
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            <ul className="space-y-1">
              {filteredCommands.map((cmd) => (
                <li key={cmd.id}>
                  <button
                    onClick={() => {
                      cmd.action();
                      setOpen(false);
                    }}
                    className="flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm text-ink transition-colors hover:bg-brand/10 hover:text-brand"
                  >
                    {cmd.title}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-8 text-center text-sm text-ink-muted">No commands found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
