import Link from "next/link";

export const metadata = {
  title: "404 — Kesasar | the IWAKS",
  description: "Halaman yang kamu cari nggak ada. Balik ke beranda yuk!",
};

export default function NotFound() {
  return (
    <main className="bg-pattern min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1b4332]/85 pointer-events-none" />

      <i className="fa-solid fa-cube ornament o1" aria-hidden="true"></i>
      <i className="fa-solid fa-diamond ornament o2" aria-hidden="true"></i>

      <div className="relative max-w-xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 mb-6">
          <i className="fa-solid fa-map-location-dot text-4xl text-yellow-300" aria-hidden="true"></i>
        </div>

        <h1 className="font-heading font-black text-6xl sm:text-7xl mb-3 drop-shadow-lg">
          <span className="hero-accent">404</span>
        </h1>
        <p className="text-2xl font-bold mb-3 drop-shadow">
          Wah, kayaknya kamu kesasar!
        </p>
        <p className="text-green-50/90 max-w-md mx-auto mb-8">
          Halaman yang kamu cari nggak ada di dunia <strong>the IWAKS</strong>.
          Mungkin udah di-mining sama warga, atau memang belum dibangun.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="no-underline">
            <button className="press-effect bg-mc-grass hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-green-500/30 transition transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
              <i className="fa-solid fa-house"></i> Balik ke Beranda
            </button>
          </Link>
          <a
            href="https://discord.gg/CHpsH4j2fA"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <button className="press-effect bg-[#5865F2] hover:bg-[#4752c4] text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-[rgba(88,101,242,0.30)] transition transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
              <i className="fa-brands fa-discord"></i> Tanya di Discord
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
