"use client";
import { useEffect, useRef, useState } from "react";

import MemberCard from "../components/MemberCard";
import CommandCard from "../components/CommandCard";
import SectionWrapper from "../components/SectionWrapper";
import ScrollProgress from "../components/ScrollProgress";
import SectionNav from "../components/SectionNav";
import HeroParallax from "../components/HeroParallax";
import ScrollToTop from "../components/ScrollToTop";
import ThemeToggle from "../components/ThemeToggle";
import Toast, { showToast } from "../components/Toast";
import StatsCounter from "../components/StatsCounter";
import EventCalendar from "../components/EventCalendar";
import Leaderboard from "../components/Leaderboard";
import { membersData } from "../data/members";
import { commandsData } from "../data/commands";
import { galleryData } from "../data/gallery";
import { rulesData } from "../data/rules";
import { eventsData } from "../data/events";
import { leaderboardData, leaderboardCategories } from "../data/leaderboard";

const HERO_PIXELS = [
  { left: "7%",  top: "78%", size: 11, dur: 4.4, delay: 0.0 },
  { left: "16%", top: "68%", size: 7,  dur: 5.6, delay: 0.8 },
  { left: "29%", top: "82%", size: 9,  dur: 4.9, delay: 1.5 },
  { left: "43%", top: "88%", size: 13, dur: 5.2, delay: 0.3 },
  { left: "57%", top: "74%", size: 8,  dur: 4.7, delay: 1.1 },
  { left: "68%", top: "84%", size: 10, dur: 5.8, delay: 0.6 },
  { left: "79%", top: "70%", size: 7,  dur: 4.3, delay: 1.9 },
  { left: "89%", top: "80%", size: 12, dur: 5.1, delay: 0.4 },
  { left: "22%", top: "90%", size: 6,  dur: 6.0, delay: 2.2 },
  { left: "52%", top: "92%", size: 8,  dur: 4.6, delay: 0.9 },
];

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#galeri", label: "Galeri" },
  { href: "#event", label: "Event" },
  { href: "#aturan", label: "Aturan" },
  { href: "#command", label: "Command" },
  { href: "#leaderboard", label: "Ranking" },
  { href: "#warga", label: "Warga" },
];

export default function Home() {
  const [copiedType, setCopiedType] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [cubeBurst, setCubeBurst] = useState(false);
  const cubeClicksRef = useRef(0);
  const cubeResetTimer = useRef(null);

  useEffect(() => {
    let raf = 0;
    const track = () => {
      raf = 0;
      const mid = window.scrollY + window.innerHeight * 0.4;
      let closest = "beranda";
      let minDist = Infinity;
      for (const { href } of navLinks) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const d = Math.abs(top - mid);
        if (d < minDist) { minDist = d; closest = id; }
      }
      setActiveSection(closest);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(track); };
    track();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const javaIP = "basic2.raehost.com:19258";
  const bedrockIP = "basic2.raehost.com";
  const bedrockPort = "19258";

  const handleCopyIP = (text, type) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedType(type);
        showToast(`IP ${type === "java" ? "Java" : "Bedrock"} tersalin!`);
        setTimeout(() => setCopiedType(null), 2000);
      })
      .catch((err) => console.error(err));
  };

  const handleCubeClick = (e) => {
    e.preventDefault();
    cubeClicksRef.current += 1;
    if (cubeResetTimer.current) clearTimeout(cubeResetTimer.current);
    cubeResetTimer.current = setTimeout(() => { cubeClicksRef.current = 0; }, 1500);
    if (cubeClicksRef.current >= 5) {
      cubeClicksRef.current = 0;
      setCubeBurst(true);
      showToast("✨ Easter egg ditemukan! Kamu warga sejati.", "fa-solid fa-sparkles");
      setTimeout(() => setCubeBurst(false), 900);
    }
  };

  return (
    <main className="bg-mc-bg text-gray-800 antialiased selection:bg-mc-grass selection:text-white min-h-screen">

      <ScrollProgress />
      <SectionNav />
      <HeroParallax />
      <ScrollToTop />
      <Toast />

      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="#beranda"
              onClick={handleCubeClick}
              className="brand-wrap shrink-0 flex items-center gap-2 no-underline relative"
            >
              <span className={`brand-cube text-mc-grass text-2xl ${cubeBurst ? "cube-spin" : ""}`}>
                <i className="fa-solid fa-cube"></i>
                {cubeBurst && (
                  <span className="cube-burst" aria-hidden="true">
                    <i className="fa-solid fa-leaf" style={{ "--bx": "-32px", "--by": "-24px" }}></i>
                    <i className="fa-solid fa-diamond" style={{ "--bx": "32px", "--by": "-24px" }}></i>
                    <i className="fa-solid fa-cube" style={{ "--bx": "-32px", "--by": "24px" }}></i>
                    <i className="fa-solid fa-star" style={{ "--bx": "32px", "--by": "24px" }}></i>
                    <i className="fa-solid fa-circle" style={{ "--bx": "0px", "--by": "-40px" }}></i>
                  </span>
                )}
              </span>
              <span className="font-heading font-black text-2xl tracking-tight text-gray-900">
                the <span className="text-mc-grass">IWAKS</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex space-x-7">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link-anim text-gray-600 hover:text-mc-grass font-bold transition ${isActive ? "text-mc-grass active" : ""}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop Discord button + Theme toggle */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://discord.gg/CHpsH4j2fA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="press-effect bg-[#5865F2] hover:bg-[#4752c4] text-white px-5 py-2 rounded-lg font-bold shadow-lg shadow-[rgba(88,101,242,0.30)] transition transform hover:-translate-y-0.5 flex items-center gap-2">
                  <i className="fa-brands fa-discord"></i> Join Discord
                </button>
              </a>
            </div>

            {/* Mobile theme toggle + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="press-effect p-2 rounded-lg text-gray-600 hover:text-mc-grass hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="mobile-menu-anim md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-mc-grass font-bold py-2.5 px-3 rounded-lg hover:bg-gray-50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/CHpsH4j2fA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full mt-2 bg-[#5865F2] hover:bg-[#4752c4] text-white px-5 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2">
                <i className="fa-brands fa-discord"></i> Join Discord
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section
        id="beranda"
        className="relative bg-pattern text-white py-24 sm:py-32 overflow-hidden"
      >
        {/* pixel particles rising from the ground */}
        {HERO_PIXELS.map((p, i) => (
          <span
            key={i}
            className="hero-pixel"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.dur + "s",
              animationDelay: p.delay + "s",
            }}
          />
        ))}
        {/* floating ornaments */}
        <i className="fa-solid fa-cube ornament o1" aria-hidden="true"></i>
        <i className="fa-solid fa-diamond ornament o2" aria-hidden="true"></i>
        <i className="fa-solid fa-tree ornament o3" aria-hidden="true"></i>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1b4332]/80 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-badges flex justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold tracking-wider">
              <span className="dot-online" aria-hidden="true"></span> ONLINE (1.21.11)
            </span>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/80 backdrop-blur-sm border border-blue-300/50 text-sm font-bold tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <i className="fa-solid fa-mobile-screen-button mr-1"></i>{" "}
              CROSS-PLATFORM
            </span>
          </div>

          <h1 className="hero-h1 font-heading font-black text-5xl sm:text-6xl md:text-7xl mb-6 drop-shadow-lg">
            Bangun Dunia Bersama <br />{" "}
            <span className="hero-accent">the IWAKS</span>
          </h1>
          <p className="hero-sub-p text-xl sm:text-2xl text-green-50 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Server survival vanilla yang santai, damai, dan berfokus pada
            kreativitas. Berdiri sejak <strong>Januari 2026</strong>. Bisa main
            bareng player Java dan Bedrock!
          </p>

          <div className="hero-ip-row flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <div className="ip-card-hero flex-1 flex flex-col sm:flex-row items-center justify-between bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-xl">
              <div className="px-4 py-2 text-center sm:text-left w-full sm:w-auto">
                <span className="block text-xs font-black text-green-300 tracking-wider mb-1">
                  <i className="fa-brands fa-java mr-1"></i> JAVA EDITION
                </span>
                <span className="font-mono text-lg font-bold">{javaIP}</span>
              </div>
              <button
                onClick={() => handleCopyIP(javaIP, "java")}
                className={`press-effect w-full sm:w-auto px-4 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 mt-2 sm:mt-0 ${copiedType === "java" ? "bg-green-100 text-green-600" : "bg-white text-mc-grass hover:bg-gray-100"}`}
              >
                <i className="fa-regular fa-copy"></i>{" "}
                <span>{copiedType === "java" ? "Tersalin!" : "Salin IP"}</span>
              </button>
            </div>

            <div className="ip-card-hero flex-1 flex flex-col sm:flex-row items-center justify-between bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-xl">
              <div className="px-4 py-2 text-center sm:text-left w-full sm:w-auto">
                <span className="block text-xs font-black text-blue-300 tracking-wider mb-1">
                  <i className="fa-solid fa-mobile-screen mr-1"></i> BEDROCK
                  EDITION
                </span>
                <span className="font-mono text-base font-bold">
                  IP: {bedrockIP} <br className="hidden sm:block md:hidden" />{" "}
                  Port: {bedrockPort}
                </span>
              </div>
              <button
                onClick={() => handleCopyIP(bedrockIP, "bedrock")}
                className={`press-effect w-full sm:w-auto px-4 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 mt-2 sm:mt-0 ${copiedType === "bedrock" ? "bg-blue-100 text-blue-600" : "bg-white text-blue-600 hover:bg-gray-100"}`}
              >
                <i className="fa-regular fa-copy"></i>{" "}
                <span>
                  {copiedType === "bedrock" ? "Tersalin!" : "Salin IP"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section id="stats" className="py-16 bg-mc-bg section-fade-into-white">
       <SectionWrapper>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCounter value={membersData.length} suffix="+" label="Warga Aktif" />
            <StatsCounter value={commandsData.reduce((n, c) => n + c.list.length, 0)} label="Command" />
            <StatsCounter value={rulesData.length} label="Aturan Server" />
            <StatsCounter value={99} suffix="%" label="Uptime" />
          </div>
        </div>
       </SectionWrapper>
      </section>

      {/* ===== GALERI ===== */}
      <section id="galeri" className="py-20 bg-mc-bg">
       <SectionWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Galeri Server
            </h2>
            <div className="divider-shimmer mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sekilas pandang ke dalam dunia the IWAKS dari bangunan megah hingga momen konyol yang sayang dilewatkan!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-lg transition-shadow duration-500"
                style={{ aspectRatio: "16/9" }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${item.gradient} text-white`}
                  >
                    <i className={`${item.icon} text-5xl opacity-50 mb-3`}></i>
                    <span className="text-sm font-bold opacity-60 tracking-wider">
                      FOTO SEGERA HADIR
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <p className="text-white font-heading font-bold text-lg leading-tight">
                      {item.title}
                    </p>
                    <p className="text-gray-300 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            <i className="fa-solid fa-circle-info mr-1"></i>
            Punya screenshot keren? Kirim ke Discord buat masuk galeri!
          </p>
        </div>
       </SectionWrapper>
      </section>

      {/* ===== EVENT KALENDER ===== */}
      <section id="event" className="py-20 bg-white border-y border-gray-100">
       <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Jadwal Event
            </h2>
            <div className="divider-shimmer mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jangan sampai ketinggalan event seru dari server the IWAKS!
              Pantau jadwal dan bersiaplah untuk ikutan.
            </p>
          </div>
          <EventCalendar events={eventsData} />
        </div>
       </SectionWrapper>
      </section>

      {/* ===== ATURAN SERVER ===== */}
      <section id="aturan" className="py-20 bg-white border-y border-gray-100 section-fade-into-cream">
       <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Aturan Server
            </h2>
            <div className="divider-shimmer mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Biar server tetap seru dan nyaman buat semua warga, tolong patuhi
              aturan berikut ya!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rulesData.map((rule, index) => (
              <div
                key={rule.id}
                className="rule-tile flex gap-4 items-start bg-mc-bg rounded-xl p-5 border border-gray-100 shadow-warm hover:shadow-warm-md transition-shadow duration-300"
              >
                <div
                  className={`rule-num-anim shrink-0 w-10 h-10 rounded-lg ${rule.color} flex items-center justify-center text-white font-black text-sm font-heading`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`${rule.icon} text-gray-400 text-sm`}></i>
                    <h3 className="font-heading font-bold text-gray-900">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-mc-bg rounded-2xl p-6 border border-dashed border-gray-200">
            <i className="fa-brands fa-discord text-indigo-500 text-2xl mb-2 block"></i>
            <p className="font-bold text-gray-700">Ada pertanyaan soal aturan?</p>
            <p className="text-gray-500 text-sm mt-1 mb-4">
              Hubungi admin langsung lewat server Discord kami.
            </p>
            <a
              href="https://discord.gg/CHpsH4j2fA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="press-effect bg-[#5865F2] hover:bg-[#4752c4] text-white px-6 py-2 rounded-lg font-bold transition flex items-center gap-2 mx-auto">
                <i className="fa-brands fa-discord"></i> Buka Discord
              </button>
            </a>
          </div>
        </div>
       </SectionWrapper>
      </section>

      {/* ===== COMMAND ===== */}
      <section id="command" className="py-20 bg-mc-bg border-y border-gray-100 section-fade-into-white">
       <SectionWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Panduan Command
            </h2>
            <div className="divider-shimmer mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menggunakan plugin Essentials untuk mempermudah
              petualanganmu. Klik pada kartu di bawah ini untuk melihat daftar
              command lengkapnya!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {commandsData.map((cmd) => (
              <CommandCard
                key={cmd.id}
                title={cmd.title}
                icon={cmd.icon}
                theme={cmd.theme}
                shortDesc={cmd.shortDesc}
                list={cmd.list}
              />
            ))}
          </div>
        </div>
       </SectionWrapper>
      </section>

      {/* ===== LEADERBOARD ===== */}
      <section id="leaderboard" className="py-20 bg-white border-y border-gray-100">
       <SectionWrapper>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Papan Peringkat
            </h2>
            <div className="divider-shimmer mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Siapa yang paling rajin di server? Cek statistik warga the IWAKS di sini!
            </p>
          </div>
          <Leaderboard categories={leaderboardCategories} data={leaderboardData} />
        </div>
       </SectionWrapper>
      </section>

      {/* ===== WARGA ===== */}
      <section id="warga" className="py-20 bg-white relative">
       <SectionWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Warga the IWAKS
            </h2>
            <div className="divider-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membersData.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                skinPath={member.skinPath}
                role={member.role}
                quote={member.quote}
                colorTheme={member.colorTheme}
                roleIcon={member.roleIcon}
                joinDate={member.joinDate}
                favoriteBlock={member.favoriteBlock}
                description={member.description}
              />
            ))}
          </div>
        </div>
       </SectionWrapper>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t-4 border-mc-grass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2026 Server the IWAKS. All rights reserved.</p>
          <p>Berdiri sejak Januari 2026</p>
        </div>
      </footer>
    </main>
  );
}
