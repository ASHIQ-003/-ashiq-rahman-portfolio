import { useEffect, useState } from "react";

export function useActiveSection(ids, offset = 96) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const resolve = () => {
      const y = window.scrollY + offset;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (top <= y) current = id;
      }
      setActive(current);
    };

    resolve();
    window.addEventListener("scroll", resolve, { passive: true });
    window.addEventListener("resize", resolve);
    return () => {
      window.removeEventListener("scroll", resolve);
      window.removeEventListener("resize", resolve);
    };
  }, [ids, offset]);

  return active;
}
