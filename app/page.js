"use client";
import { useState } from 'react';
import MemberCard from '../components/MemberCard';
import { membersData } from '../data/members';

export default function Home() {
  const [copyText, setCopyText] = useState("Salin IP");
  const [isCopied, setIsCopied] = useState(false);
  
  const serverIP = "basic2.raehost.com:19258";

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP).then(() => {
      setCopyText("Tersalin!");
      setIsCopied(true);
      setTimeout(() => {
        setCopyText("Salin IP");
        setIsCopied(false);
      }, 2000);
    }).catch(err => console.error('Gagal menyalin text: ', err));
  };

  return (
    <main className="bg-mc-bg text-gray-800 antialiased selection:bg-mc-grass selection:text-white min-h-screen">
      
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <i className="fa-solid fa-cube text-mc-grass text-2xl"></i>
              <span className="font-heading font-black text-2xl tracking-tight text-gray-900">
                the <span className="text-mc-grass">IWAKS</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-600 hover:text-mc-grass font-bold transition">Beranda</a>
              <a href="#tentang" className="text-gray-600 hover:text-mc-grass font-bold transition">Tentang</a>
              <a href="#warga" className="text-gray-600 hover:text-mc-grass font-bold transition">Warga</a>
            </div>
            <div className="hidden md:flex">
              <button onClick={handleCopyIP} className="bg-mc-grass hover:bg-green-600 text-white px-5 py-2 rounded-lg font-bold shadow-lg shadow-green-500/30 transition transform hover:-translate-y-0.5 flex items-center gap-2">
                <i className="fa-solid fa-gamepad"></i> Main Sekarang
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="beranda" className="relative bg-pattern text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1b4332]/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold tracking-wider mb-4">
            🟢 SERVER ONLINE (1.21.11)
          </span>
          <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl mb-6 drop-shadow-lg">
            Bangun Dunia Bersama <br/> <span className="text-yellow-300">the IWAKS</span>
          </h1>
          <p className="text-xl sm:text-2xl text-green-50 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Server survival vanilla yang santai, damai, dan berfokus pada kreativitas membangun. Tempat yang tepat untuk melepas penat!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-1 shadow-xl">
              <div className="px-4 py-3 font-mono text-lg font-bold">
                {serverIP}
              </div>
              <button 
                onClick={handleCopyIP} 
                className={`px-4 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
                  isCopied ? 'bg-green-100 text-green-600' : 'bg-white text-mc-grass hover:bg-gray-100'
                }`}
              >
                <i className="fa-regular fa-copy"></i> <span>{copyText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="warga" className="py-20 bg-mc-bg relative">
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

      <footer className="bg-gray-900 text-gray-400 py-12 border-t-4 border-mc-grass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; 2026 Server the IWAKS. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
