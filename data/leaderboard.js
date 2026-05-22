/**
 * Leaderboard data for the IWAKS server.
 *
 * ── Supabase-ready ──
 * Replace with a Supabase query when you have access:
 *
 *   const { data } = await supabase
 *     .from("player_stats")
 *     .select("*")
 *     .order("playtime", { ascending: false })
 *     .limit(10);
 *
 * The `skinUrl` helper below builds a Crafatar avatar URL from a
 * Minecraft username.  Crafatar is a free, public API — no key needed.
 */

const skinUrl = (username) =>
  `https://mc-heads.net/avatar/${username}/64`;

export const leaderboardCategories = [
  { key: "playtime", label: "Playtime", icon: "fa-solid fa-clock", suffix: " Jam" },
  { key: "mobKills", label: "Mob Kills", icon: "fa-solid fa-skull-crossbones", suffix: " Kills" },
  { key: "blocksMined", label: "Blocks Mined", icon: "fa-solid fa-cubes", suffix: " Blok" },
  { key: "deaths", label: "Deaths", icon: "fa-solid fa-skull", suffix: "x" },
];

export const leaderboardData = {
  playtime: [
    { rank: 1, username: "FelixKaslana", value: 342, avatar: skinUrl("FelixKaslana") },
    { rank: 2, username: "yepikazo",     value: 289, avatar: skinUrl("yepikazo") },
    { rank: 3, username: "AriefXXT",     value: 210, avatar: skinUrl("AriefXXT") },
    { rank: 4, username: "Shiend",       value: 185, avatar: skinUrl("Shiend") },
    { rank: 5, username: ".Saraaa4922",  value: 150, avatar: skinUrl(".Saraaa4922") },
    { rank: 6, username: "Myafasa",      value: 132, avatar: skinUrl("Myafasa") },
    { rank: 7, username: "farays21",     value: 98,  avatar: skinUrl("farays21") },
  ],
  mobKills: [
    { rank: 1, username: "AriefXXT",     value: 12450, avatar: skinUrl("AriefXXT") },
    { rank: 2, username: "FelixKaslana", value: 9800,  avatar: skinUrl("FelixKaslana") },
    { rank: 3, username: "Myafasa",      value: 8900,  avatar: skinUrl("Myafasa") },
    { rank: 4, username: "farays21",     value: 6200,  avatar: skinUrl("farays21") },
    { rank: 5, username: "yepikazo",     value: 5100,  avatar: skinUrl("yepikazo") },
    { rank: 6, username: ".Saraaa4922",  value: 4300,  avatar: skinUrl(".Saraaa4922") },
    { rank: 7, username: "Shiend",       value: 3100,  avatar: skinUrl("Shiend") },
  ],
  blocksMined: [
    { rank: 1, username: "Shiend",       value: 89200, avatar: skinUrl("Shiend") },
    { rank: 2, username: "FelixKaslana", value: 72400, avatar: skinUrl("FelixKaslana") },
    { rank: 3, username: "yepikazo",     value: 61500, avatar: skinUrl("yepikazo") },
    { rank: 4, username: "AriefXXT",     value: 54800, avatar: skinUrl("AriefXXT") },
    { rank: 5, username: "Myafasa",      value: 43200, avatar: skinUrl("Myafasa") },
    { rank: 6, username: ".Saraaa4922",  value: 38100, avatar: skinUrl(".Saraaa4922") },
    { rank: 7, username: "farays21",     value: 29700, avatar: skinUrl("farays21") },
  ],
  deaths: [
    { rank: 1, username: ".Saraaa4922",  value: 247, avatar: skinUrl(".Saraaa4922") },
    { rank: 2, username: "farays21",     value: 189, avatar: skinUrl("farays21") },
    { rank: 3, username: "Myafasa",      value: 156, avatar: skinUrl("Myafasa") },
    { rank: 4, username: "yepikazo",     value: 134, avatar: skinUrl("yepikazo") },
    { rank: 5, username: "AriefXXT",     value: 112, avatar: skinUrl("AriefXXT") },
    { rank: 6, username: "Shiend",       value: 89,  avatar: skinUrl("Shiend") },
    { rank: 7, username: "FelixKaslana", value: 67,  avatar: skinUrl("FelixKaslana") },
  ],
};
