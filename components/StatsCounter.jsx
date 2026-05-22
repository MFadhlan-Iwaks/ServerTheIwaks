"use client";
import { useEffect, useRef, useState } from "react";

export default function StatsCounter({ value, suffix = "", prefix = "", duration = 1400, label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        obs.disconnect();

        const target = Number(value) || 0;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-num">{prefix}{display.toLocaleString("id-ID")}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
