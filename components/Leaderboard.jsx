"use client";
import { useState } from "react";

/* ── Podium card for top-3 players ───────────────────────────────────── */
function PodiumCard({ player, place, suffix }) {
  const config = {
    1: {
      height: "h-28",
      ring: "ring-amber-400",
      bg: "from-amber-400 to-yellow-500",
      badge: "bg-amber-400",
      icon: "fa-solid fa-crown",
      size: "w-20 h-20",
      order: "order-2",
      label: "Juara 1",
    },
    2: {
      height: "h-20",
      ring: "ring-gray-300",
      bg: "from-gray-300 to-gray-400",
      badge: "bg-gray-400",
      icon: "fa-solid fa-medal",
      size: "w-16 h-16",
      order: "order-1",
      label: "Juara 2",
    },
    3: {
      height: "h-14",
      ring: "ring-amber-700",
      bg: "from-amber-600 to-amber-800",
      badge: "bg-amber-700",
      icon: "fa-solid fa-award",
      size: "w-16 h-16",
      order: "order-3",
      label: "Juara 3",
    },
  };

  const c = config[place];

  return (
    <div className={`podium-slot flex flex-col items-center ${c.order}`}>
      {/* Avatar */}
      <div className="relative mb-2">
        <div className={`${c.size} rounded-xl ring-4 ${c.ring} overflow-hidden shadow-warm-lg bg-gray-100`}>
          <img
            src={player.avatar}
            alt={player.username}
            className="w-full h-full object-cover pixelated"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add("podium-fallback");
            }}
          />
        </div>
        {/* Place badge */}
        <div className={`absolute -top-2 -right-2 w-7 h-7 ${c.badge} rounded-full flex items-center justify-center text-white text-xs shadow-md`}>
          <i className={c.icon} />
        </div>
      </div>

      {/* Name */}
      <p className="font-heading font-bold text-sm text-gray-900 text-center leading-tight mb-0.5 max-w-[100px] truncate">
        {player.username}
      </p>

      {/* Value */}
      <p className="text-xs font-bold text-mc-grass">
        {player.value.toLocaleString("id-ID")}{suffix}
      </p>

      {/* Podium bar */}
      <div className={`podium-bar ${c.height} w-20 sm:w-24 bg-gradient-to-t ${c.bg} rounded-t-xl mt-2 flex items-center justify-center`}>
        <span className="text-white font-heading font-black text-2xl drop-shadow-md">
          {place}
        </span>
      </div>
    </div>
  );
}

/* ── Table row for rank 4+ ───────────────────────────────────────────── */
function RankRow({ player, suffix }) {
  return (
    <div className="lb-row flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
      {/* Rank */}
      <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center font-heading font-black text-sm text-gray-500">
        {player.rank}
      </span>

      {/* Avatar */}
      <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-100 shrink-0 shadow-warm">
        <img
          src={player.avatar}
          alt={player.username}
          className="w-full h-full object-cover pixelated"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Name */}
      <span className="flex-1 font-bold text-gray-800 text-sm truncate">
        {player.username}
      </span>

      {/* Value */}
      <span className="font-heading font-bold text-sm text-mc-grass tabular-nums">
        {player.value.toLocaleString("id-ID")}{suffix}
      </span>
    </div>
  );
}

/* ── Main Leaderboard component ──────────────────────────────────────── */
export default function Leaderboard({ categories, data }) {
  const [activeTab, setActiveTab] = useState(categories[0].key);
  const currentCat = categories.find((c) => c.key === activeTab) || categories[0];
  const players = data[activeTab] || [];
  const top3 = players.slice(0, 3);
  const rest = players.slice(3);

  return (
    <div>
      {/* Category tab switcher */}
      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key)}
            className={`press-effect px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === cat.key
                ? "bg-mc-grass text-white shadow-lg shadow-mc-grass/25"
                : "bg-white text-gray-600 border border-gray-100 shadow-warm hover:shadow-warm-md hover:-translate-y-0.5"
            }`}
          >
            <i className={cat.icon} />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Podium — top 3 */}
      {top3.length >= 3 && (
        <div className="flex justify-center items-end gap-3 sm:gap-6 mb-8">
          {[top3[1], top3[0], top3[2]].map((p, i) => (
            <PodiumCard
              key={p.username}
              player={p}
              place={[2, 1, 3][i]}
              suffix={currentCat.suffix}
            />
          ))}
        </div>
      )}

      {/* Remaining ranks */}
      {rest.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-warm divide-y divide-gray-50 overflow-hidden">
          {rest.map((p) => (
            <RankRow key={p.username} player={p} suffix={currentCat.suffix} />
          ))}
        </div>
      )}

      {/* Data source note */}
      <p className="text-center text-gray-400 text-xs mt-6">
        <i className="fa-solid fa-circle-info mr-1" />
        Data diperbarui secara berkala oleh admin server.
      </p>
    </div>
  );
}
