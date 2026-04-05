/** Realistic SaaS-style dashboard mock — swap for `startup.imageSrc` when you have a screenshot */
export default function QueueIllustration() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-[#0f1419] shadow-2xl ring-1 ring-white/10"
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#121a22] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex max-w-[min(100%,280px)] flex-1 items-center gap-2 rounded-md bg-black/30 px-3 py-1 text-[10px] text-white/50">
          <svg className="h-3 w-3 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="truncate">app.queuefree.health / dashboard</span>
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-36 shrink-0 flex-col gap-3 border-r border-white/10 bg-[#0c1016] p-3 sm:flex">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/20 text-[10px] font-bold text-teal-300">
              QF
            </div>
            <div className="text-[10px] font-semibold leading-tight text-white/90">
              QueueFree
            </div>
          </div>
          <nav className="flex flex-col gap-1 text-[10px] font-medium text-white/45">
            <span className="rounded-md bg-white/10 px-2 py-1.5 text-white">Overview</span>
            <span className="rounded-md px-2 py-1.5 hover:bg-white/5">Live queue</span>
            <span className="rounded-md px-2 py-1.5 hover:bg-white/5">Patients</span>
            <span className="rounded-md px-2 py-1.5 hover:bg-white/5">Insights</span>
          </nav>
          <div className="mt-auto rounded-lg border border-white/10 bg-white/[0.03] p-2 text-[9px] text-white/40">
            Uptime
            <span className="mt-1 block text-[11px] font-semibold text-emerald-400">99.9%</span>
          </div>
        </aside>

        <div className="min-w-0 flex-1 bg-gradient-to-b from-[#0f1419] to-[#0a0e13] p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                Operations
              </p>
              <p className="text-sm font-semibold text-white">Live patient flow</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-md bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                Live
              </span>
              <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50">
                Last sync · 2m
              </span>
            </div>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2">
            {[
              { k: "Avg. wait", v: "18m", d: "↓ 12%" },
              { k: "In queue", v: "24", d: "Stable" },
              { k: "SLA", v: "98%", d: "On track" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 shadow-inner"
              >
                <p className="text-[9px] font-medium text-white/45">{x.k}</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-white">{x.v}</p>
                <p className="text-[9px] text-teal-300/90">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1016]">
            <div className="grid grid-cols-[1fr_0.7fr_0.9fr] gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-white/45">
              <span>Patient</span>
              <span>Est. wait</span>
              <span>Status</span>
            </div>
            {[
              ["A. Khan", "12m", "In progress"],
              ["R. Patel", "22m", "Queued"],
              ["S. Ali", "7m", "Called"],
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_0.7fr_0.9fr] items-center gap-2 border-b border-white/5 px-3 py-2.5 text-[10px] text-white/85 last:border-0"
              >
                <span className="truncate font-medium">{row[0]}</span>
                <span className="tabular-nums text-white/60">{row[1]}</span>
                <span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white/80">
                    {row[2]}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex gap-2">
            <div className="h-16 flex-1 rounded-lg bg-gradient-to-t from-teal-500/20 to-transparent ring-1 ring-inset ring-white/10" />
            <div className="hidden h-16 w-24 rounded-lg bg-white/[0.04] ring-1 ring-white/10 sm:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
