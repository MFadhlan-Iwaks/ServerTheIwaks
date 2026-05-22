"use client";
import { useEffect, useState } from "react";

let nextId = 1;

export function showToast(message, icon = "fa-solid fa-circle-check") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("iwaks:toast", { detail: { message, icon } }));
}

export default function Toast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const onToast = (e) => {
      const id = nextId++;
      const { message, icon } = e.detail || {};
      setToasts((t) => [...t, { id, message, icon }]);
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, 2700);
    };
    window.addEventListener("iwaks:toast", onToast);
    return () => window.removeEventListener("iwaks:toast", onToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="toast-stack" aria-live="polite" aria-atomic="true">
      {toasts.map((t) => (
        <div key={t.id} className="toast" role="status">
          <i className={t.icon} aria-hidden="true"></i>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
