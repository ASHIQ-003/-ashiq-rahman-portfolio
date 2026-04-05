import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Impact from "./components/Impact.jsx";
import TechStack from "./components/TechStack.jsx";
import FoundersNote from "./components/FoundersNote.jsx";
import StartupSection from "./components/StartupSection.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import { navSpyIds } from "./content.js";
import { useActiveSection } from "./hooks/useActiveSection.js";

const STORAGE_KEY = "portfolio-theme";

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${width}%` }} aria-hidden />;
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const activeSection = useActiveSection(navSpyIds);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0f0e0e" : "#fcfcfb");
  }, [dark]);

  return (
    <div className="relative min-h-screen text-ink">
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 page-radial" aria-hidden />
      <div className="pointer-events-none fixed inset-0 page-grid opacity-[0.65] dark:opacity-40" aria-hidden />
      <div className="relative">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-16 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-fg opacity-0 transition-all focus:translate-y-0 focus:opacity-100 focus:outline-none"
        >
          Skip to content
        </a>
        <Navbar
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
          activeSection={activeSection}
        />
        <main id="main">
          <Hero />
          <About />
          <Impact />
          <TechStack />
          <FoundersNote />
          <StartupSection />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <CommandPalette />
      </div>
    </div>
  );
}
