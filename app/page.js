"use client";
import { useState } from "react";

import MemberCard from "../components/MemberCard";
import CommandCard from "../components/CommandCard";
import { membersData } from "../data/members";
import { commandsData } from "../data/commands";
import { galleryData } from "../data/gallery";
import { rulesData } from "../data/rules";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#galeri", label: "Galeri" },
  { href: "#aturan", label: "Aturan" },
  { href: "#command", label: "Command" },
  { href: "#warga", label: "Warga" },
];

export default function Home() {
  const [copiedType, setCopiedType] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const javaIP = "basic2.raehost.com:19258";
  const bedrockIP = "basic2.raehost.com";
  const bedrockPort = "19258";

  const handleCopyIP = (text, type) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedType(type);
        setTimeout(() => setCopiedType(null), 2000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main className="bg-mc-bg text-gray-800 antialiased selection:bg-mc-grass selection:text-white min-h-screen">

      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <i className="fa-solid fa-cube text-mc-grass text-2xl"></i>
              <span className="font-heading font-black text-2xl tracking-tight text-gray-900">
                the <span className="text-mc-grass">IWAKS</span>
              </span>
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-mc-grass font-bold transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Discord button */}
            <div className="hidden md:flex">
              <a
                href="https://discord.gg/CHpsH4j2fA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-mc-grass hover:bg-green-600 text-white px-5 py-2 rounded-lg font-bold shadow-lg shadow-green-500/30 transition transform hover:-translate-y-0.5 flex items-center gap-2">
                  <i className="fa-brands fa-discord"></i> Join Discord
                </button>
              </a>
            </div>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-mc-grass hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 shadow-lg">
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
              <button className="w-full mt-2 bg-mc-grass hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1b4332]/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold tracking-wider">
              🟢 ONLINE (1.21.11)
            </span>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/80 backdrop-blur-sm border border-blue-300/50 text-sm font-bold tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <i className="fa-solid fa-mobile-screen-button mr-1"></i>{" "}
              CROSS-PLATFORM
            </span>
          </div>

          <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl mb-6 drop-shadow-lg">
            Bangun Dunia Bersama <br />{" "}
            <span className="text-yellow-300">the IWAKS</span>
          </h1>
          <p className="text-xl sm:text-2xl text-green-50 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Server survival vanilla yang santai, damai, dan berfokus pada
            kreativitas. Berdiri sejak <strong>Januari 2026</strong>. Bisa main
            bareng player Java dan Bedrock!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-between bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-xl">
              <div className="px-4 py-2 text-center sm:text-left w-full sm:w-auto">
                <span className="block text-xs font-black text-green-300 tracking-wider mb-1">
                  <i className="fa-brands fa-java mr-1"></i> JAVA EDITION
                </span>
                <span className="font-mono text-lg font-bold">{javaIP}</span>
              </div>
              <button
                onClick={() => handleCopyIP(javaIP, "java")}
                className={`w-full sm:w-auto px-4 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 mt-2 sm:mt-0 ${copiedType === "java" ? "bg-green-100 text-green-600" : "bg-white text-mc-grass hover:bg-gray-100"}`}
              >
                <i className="fa-regular fa-copy"></i>{" "}
                <span>{copiedType === "java" ? "Tersalin!" : "Salin IP"}</span>
              </button>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-center justify-between bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-2 shadow-xl">
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
                className={`w-full sm:w-auto px-4 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 mt-2 sm:mt-0 ${copiedType === "bedrock" ? "bg-blue-100 text-blue-600" : "bg-white text-blue-600 hover:bg-gray-100"}`}
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

      {/* ===== GALERI ===== */}
      <section id="galeri" className="py-20 bg-mc-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Galeri Server
            </h2>
            <div className="w-24 h-1 bg-mc-grass mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sekilas pandang ke dalam dunia the IWAKS — dari bangunan megah hingga momen konyol yang sayang dilewatkan!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-md"
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
      </section>

      {/* ===== ATURAN SERVER ===== */}
      <section id="aturan" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Aturan Server
            </h2>
            <div className="w-24 h-1 bg-mc-grass mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Biar server tetap seru dan nyaman buat semua warga, tolong patuhi
              aturan berikut ya!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rulesData.map((rule, index) => (
              <div
                key={rule.id}
                className="flex gap-4 items-start bg-mc-bg rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg ${rule.color} flex items-center justify-center text-white font-black text-sm font-heading`}
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
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold transition flex items-center gap-2 mx-auto">
                <i className="fa-brands fa-discord"></i> Buka Discord
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== COMMAND ===== */}
      <section id="command" className="py-20 bg-mc-bg border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Panduan Command
            </h2>
            <div className="w-24 h-1 bg-mc-grass mx-auto rounded-full mb-4"></div>
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
      </section>

      {/* ===== WARGA ===== */}
      <section id="warga" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-12 text-center">
            Warga the IWAKS
          </h2>

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
