import { useReveal } from "../hooks/useReveal";

export default function Section({ id, children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
