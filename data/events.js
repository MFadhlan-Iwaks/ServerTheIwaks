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
      "Segera hadir! Pantau Discord untuk pengumuman tanggal dan detail lengkapnya.",
    date: "2026-12-31T23:59:00+07:00",
    category: "Boss Raid",
    status: "upcoming",
    rewards: "Segera diumumkan",
    coordinator: "Segera diumumkan",
    icon: "fa-solid fa-dragon",
    color: "from-red-500 to-orange-600",
    comingSoon: true,
  },
  {
    id: 2,
    title: "Sayembara Dekorasi Spawn S2",
    description:
      "Hias area spawn dengan sekreatif mungkin menggunakan bersama-sama!",
    date: "2026-05-25T09:00:00+07:00",
    category: "Build Contest",
    status: "upcoming",
    rewards: "tag builder",
    coordinator: "yepikazo",
    icon: "fa-solid fa-hammer",
    color: "from-amber-500 to-yellow-600",
  },
];
