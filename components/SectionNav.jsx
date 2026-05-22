"use client";
import { useEffect, useState } from "react";

const NAV_SECTIONS = [
  { id: "beranda", label: "Beranda" },
  { id: "galeri",  label: "Galeri"  },
  { id: "event",   label: "Event"   },
  { id: "aturan",  label: "Aturan"  },
  { id: "command", label: "Command" },
  { id: "leaderboard", label: "Leaderboard" },
  { id: "warga",   label: "Warga"   },
];

export default function SectionNav() {
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    let raf = 0;
    const track = () => {
      raf = 0;
      const mid = window.scrollY + window.innerHeight * 0.45;
      let closest = NAV_SECTIONS[0].id;
      let minDist = Infinity;
      for (const s of NAV_SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const d = Math.abs(top - mid);
        if (d < minDist) { minDist = d; closest = s.id; }
      }
      setActive(closest);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(track);
    };
    track();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className="section-nav" aria-label="Navigasi section">
      {NAV_SECTIONS.map((s) => (
        <a
          key={s.id}
          href={"#" + s.id}
          data-label={s.label}
          aria-label={s.label}
          className={"snav-dot " + (active === s.id ? "active" : "")}
        />
      ))}
    </nav>
  );
}
