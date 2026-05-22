/**
 * Event data for the IWAKS server.
 *
 * ── Supabase-ready ──
 * When you have Supabase access, replace the static export below with a
 * fetch from your `events` table.  The shape of each object mirrors the
 * intended DB columns so migration is a one-liner:
 *
 *   import { createClient } from "@supabase/supabase-js";
 *   const supabase = createClient(URL, KEY);
 *   const { data } = await supabase.from("events").select("*").order("date");
 *   export const eventsData = data;
 */

export const eventsData = [
  {
    id: 1,
    title: "Perburuan Ender Dragon",
    description:
      "Bersiaplah dengan armor terbaikmu! Kita akan me-reset The End dan mengalahkan Naga bersama-sama untuk membuka Elytra hunting.",
    date: "2026-06-01T20:00:00+07:00",
    category: "Boss Raid",
    status: "upcoming",
    rewards: "Dragon Egg & Trophy Eksklusif",
    coordinator: "FelixKaslana",
    icon: "fa-solid fa-dragon",
    color: "from-red-500 to-orange-600",
  },
  {
    id: 2,
    title: "Sayembara Dekorasi Spawn S2",
    description:
      "Hias area spawn dengan sekreatif mungkin menggunakan tema Medieval. Pemenang ditentukan oleh voting warga!",
    date: "2026-06-07T14:00:00+07:00",
    category: "Build Contest",
    status: "upcoming",
    rewards: "1 Stack Diamond Block & Tag 'Master Builder'",
    coordinator: "yepikazo",
    icon: "fa-solid fa-hammer",
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: 3,
    title: "Turnamen PvP Antar Warga",
    description:
      "Bracket 1v1 di arena khusus. Gear disediakan panitia supaya adil. Siapa yang paling jago bertarung?",
    date: "2026-06-14T19:00:00+07:00",
    category: "PvP",
    status: "upcoming",
    rewards: "Custom Enchanted Sword & Bragging Rights",
    coordinator: "AriefXXT",
    icon: "fa-solid fa-khanda",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 4,
    title: "Malam Eksplorasi Deep Dark",
    description:
      "Tantangan komunitas: masuk ke Ancient City bareng-bareng tanpa satu pun mati. Bisa nggak?",
    date: "2026-05-18T21:00:00+07:00",
    category: "Adventure",
    status: "completed",
    rewards: "Echo Shard + Disc Fragment Set",
    coordinator: "Myafasa",
    icon: "fa-solid fa-dungeon",
    color: "from-indigo-600 to-purple-700",
  },
  {
    id: 5,
    title: "Lomba Kecepatan Mining",
    description:
      "Siapa yang bisa mengumpulkan paling banyak Diamond dalam 30 menit? Timer dimulai saat semua pemain siap.",
    date: "2026-06-21T15:00:00+07:00",
    category: "Race",
    status: "upcoming",
    rewards: "Netherite Ingot x5 & Custom Title",
    coordinator: "Shiend",
    icon: "fa-solid fa-gem",
    color: "from-cyan-500 to-blue-600",
  },
];
