"use client";
import { useState, useEffect } from "react";

/**
 * Countdown hook — returns { days, hours, minutes, seconds } until `targetDate`.
 * Returns null once the date has passed.
 */
function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - Date.now();
      if (diff <= 0) return null;
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

/* ── Small countdown pill used inside the featured card ──────────────── */
function CountdownDisplay({ targetDate }) {
  const t = useCountdown(targetDate);
  if (!t) return <span className="text-xs font-bold opacity-70">Event sudah lewat</span>;

  const units = [
    { v: t.days, l: "Hari" },
    { v: t.hours, l: "Jam" },
    { v: t.minutes, l: "Min" },
    { v: t.seconds, l: "Det" },
  ];

  return (
    <div className="flex gap-2">
      {units.map((u) => (
        <div key={u.l} className="countdown-cell">
          <span className="countdown-num">{String(u.v).padStart(2, "0")}</span>
          <span className="countdown-label">{u.l}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Status badge (upcoming / active / completed) ────────────────────── */
function StatusBadge({ status }) {
  const map = {
    upcoming:  { text: "Akan Datang", cls: "event-badge-upcoming" },
    active:    { text: "Sedang Berlangsung", cls: "event-badge-active" },
    completed: { text: "Selesai", cls: "event-badge-completed" },
  };
  const s = map[status] || map.upcoming;
  return (
    <span className={`event-badge ${s.cls}`}>
      {status === "active" && <span className="dot-online" style={{ marginRight: 4, width: 6, height: 6 }} />}
      {s.text}
    </span>
  );
}

/* ── Single event card ───────────────────────────────────────────────── */
function EventCard({ event, isFeatured = false }) {
  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = dateObj.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  if (isFeatured) {
    return (
      <div className={`event-featured bg-gradient-to-br ${event.color} rounded-2xl p-6 sm:p-8 text-white shadow-warm-lg relative overflow-hidden`}>
        {/* Decorative bg icon */}
        <i className={`${event.icon} absolute -right-6 -bottom-6 text-[120px] opacity-[0.08] pointer-events-none`} />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {event.comingSoon ? (
              <span className="event-badge bg-white/25 text-white border border-white/40 backdrop-blur-sm">
                <i className="fa-solid fa-hourglass-half mr-1.5" />
                Segera Hadir
              </span>
            ) : (
              <StatusBadge status={event.status} />
            )}
            <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
              <i className="fa-solid fa-tag mr-1" />{event.category}
            </span>
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl mb-2 drop-shadow-md">
            {event.title}
          </h3>
          <p className="text-white/85 text-sm sm:text-base mb-5 max-w-xl leading-relaxed">
            {event.description}
          </p>

          {event.comingSoon ? (
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-4 py-3">
              <i className="fa-solid fa-bullhorn text-2xl" />
              <div>
                <p className="font-heading font-bold text-base sm:text-lg leading-tight">
                  Segera Hadir
                </p>
                <p className="text-white/80 text-xs sm:text-sm">
                  Nantikan pengumuman lengkapnya di Discord!
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-end gap-5">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <i className="fa-regular fa-calendar w-4 text-center" />
                  <span className="font-bold">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <i className="fa-regular fa-clock w-4 text-center" />
                  <span className="font-bold">{formattedTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-gift w-4 text-center" />
                  <span>{event.rewards}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-user-tie w-4 text-center" />
                  <span>Koordinator: <strong>{event.coordinator}</strong></span>
                </div>
              </div>

              {event.status === "upcoming" && (
                <div className="shrink-0">
                  <p className="text-xs font-bold uppercase tracking-wider mb-2 text-white/70">
                    Dimulai dalam
                  </p>
                  <CountdownDisplay targetDate={event.date} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  /* Non-featured: compact card */
  return (
    <div className="event-card bg-white rounded-xl border border-gray-100 shadow-warm hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      {/* Colored top accent */}
      <div className={`h-1.5 bg-gradient-to-r ${event.color}`} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center text-white text-sm`}>
              <i className={event.icon} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-gray-900 leading-tight">{event.title}</h4>
              <span className="text-xs text-gray-500">{event.category}</span>
            </div>
          </div>
          <StatusBadge status={event.status} />
        </div>

        <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{event.description}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          <span><i className="fa-regular fa-calendar mr-1" />{formattedDate}</span>
          <span><i className="fa-regular fa-clock mr-1" />{formattedTime}</span>
        </div>

        {event.rewards && (
          <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-2 text-xs text-gray-500">
            <i className="fa-solid fa-gift text-amber-400" />
            <span>{event.rewards}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────────── */
export default function EventCalendar({ events }) {
  const [filter, setFilter] = useState("all");

  // Sort: active first, then upcoming (nearest first), then completed
  const sorted = [...events].sort((a, b) => {
    const order = { active: 0, upcoming: 1, completed: 2 };
    if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
    return new Date(a.date) - new Date(b.date);
  });

  const featured =
    sorted.find((e) => e.comingSoon) ||
    sorted.find((e) => e.status === "active" || e.status === "upcoming");
  const rest = sorted.filter((e) => e !== featured);

  const filters = [
    { key: "all", label: "Semua" },
    { key: "upcoming", label: "Akan Datang" },
    { key: "completed", label: "Selesai" },
  ];

  const displayed = filter === "all" ? rest : rest.filter((e) => e.status === filter);

  return (
    <div>
      {/* Featured event with countdown */}
      {featured && <EventCard event={featured} isFeatured />}

      {/* Filter tabs */}
      <div className="flex gap-2 mt-8 mb-6 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`press-effect px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
              filter === f.key
                ? "bg-mc-grass text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Event grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayed.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>

      {displayed.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <i className="fa-solid fa-calendar-xmark text-4xl mb-3 block" />
          <p className="font-bold">Belum ada event di kategori ini.</p>
        </div>
      )}
    </div>
  );
}
