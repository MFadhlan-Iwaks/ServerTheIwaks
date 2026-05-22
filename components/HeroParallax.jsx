"use client";
import { useEffect } from "react";

export default function HeroParallax({ selector = ".bg-pattern", factor = 0.38 }) {
  useEffect(() => {
    const hero = document.querySelector(selector);
    if (!hero) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      hero.style.backgroundPositionY = -(window.scrollY * factor) + "px";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [selector, factor]);
  return null;
}
