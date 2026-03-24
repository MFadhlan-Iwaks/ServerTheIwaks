export const commandsData = [
  {
    id: "warp",
    title: "Warp System",
    icon: "fa-solid fa-location-dot",
    theme: { bg: "bg-blue-100", text: "text-blue-600" },
    shortDesc: "Sistem teleportasi instan ke area publik server.",
    list: [
      { cmd: "/warp [nama]", detail: "Teleportasi ke warp yang sudah disediakan." },
      { cmd: "/setwarp [nama]", detail: "Membuat warp baru di lokasimu berdiri (Khusus Admin/Owner)." },
      { cmd: "/delwarp [nama]", detail: "Menghapus warp yang sudah ada (Khusus Admin/Owner)." },
      { cmd: "/warps", detail: "Melihat daftar semua warp yang tersedia." }
    ]
  },
  {
    id: "tpa",
    title: "TPA System",
    icon: "fa-solid fa-people-arrows",
    theme: { bg: "bg-purple-100", text: "text-purple-600" },
    shortDesc: "Sistem teleportasi antar pemain.",
    list: [
      { cmd: "/tpa [player]", detail: "Mengirim permintaan teleportasi ke pemain lain." },
      { cmd: "/tpaccept", detail: "Menerima permintaan teleportasi." },
      { cmd: "/tpdeny", detail: "Menolak permintaan teleportasi." },
      { cmd: "/tpahere [player]", detail: "Meminta pemain lain untuk teleport ke lokasimu." }
    ]
  },
  {
    id: "home",
    title: "Home System",
    icon: "fa-solid fa-house",
    theme: { bg: "bg-green-100", text: "text-green-600" },
    shortDesc: "Fitur untuk menyimpan dan kembali ke markasmu.",
    list: [
      { cmd: "/sethome [nama]", detail: "Menyimpan titik lokasimu saat ini sebagai rumah." },
      { cmd: "/home [nama]", detail: "Teleportasi secara instan ke rumahmu." },
      { cmd: "/delhome [nama]", detail: "Menghapus lokasi rumah yang sudah disimpan." },
      { cmd: "/homes", detail: "Melihat daftar semua rumah yang kamu miliki." }
    ]
  },
  {
    id: "sit",
    title: "Pose & Interaksi",
    icon: "fa-solid fa-chair",
    theme: { bg: "bg-amber-100", text: "text-amber-600" },
    shortDesc: "Fitur roleplay untuk duduk dan berbaring.",
    list: [
      { cmd: "/sit", detail: "Karaktermu akan duduk di atas blok tempatmu berdiri." },
      { cmd: "/lay", detail: "Karaktermu akan tiduran telentang." },
      { cmd: "/crawl", detail: "Karaktermu akan merangkak di tanah." },
      { cmd: "/spin", detail: "Karaktermu akan berputar-putar di tempat." }
    ]
  },
  {
    id: "back",
    title: "Back System",
    icon: "fa-solid fa-clock-rotate-left",
    theme: { bg: "bg-red-100", text: "text-red-600" },
    shortDesc: "Sistem penyelamat saat kamu salah langkah.",
    list: [
      { cmd: "/back", detail: "Kembali ke lokasi terakhir SEBELUM kamu mati atau sebelum kamu melakukan teleport." }
    ]
  }
];