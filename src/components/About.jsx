import Section from "./Section";
import { about } from "../content";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-2xl">
        <h2 className="section-label">About</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink sm:text-xl">
          {about.bio}
        </p>
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-ink">Core skills</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-surface-muted/80 px-3.5 py-1.5 text-sm font-medium text-ink shadow-sm transition-shadow hover:shadow-card"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
