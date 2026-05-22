"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "iwaks-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("cream");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial = saved === "mewah" ? "mewah" : "cream";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const applyTheme = (t) => {
    if (t === "mewah") document.body.dataset.theme = "mewah";
    else delete document.body.dataset.theme;
  };

  const toggle = () => {
    const next = theme === "mewah" ? "cream" : "mewah";
    setTheme(next);
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  };

  const isMewah = theme === "mewah";
  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle press-effect"
      aria-label={isMewah ? "Switch to cream theme" : "Switch to mewah theme"}
      title={isMewah ? "Tema Cream" : "Tema Mewah"}
    >
      <i className={isMewah ? "fa-solid fa-sun" : "fa-solid fa-moon"} aria-hidden="true"></i>
    </button>
  );
}
