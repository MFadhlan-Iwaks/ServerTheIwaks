"use client";
import { useEffect, useRef, useState } from 'react';

export default function MemberCard({ name, skinPath, role, quote, colorTheme, roleIcon, joinDate, favoriteBlock, description }) {
  const canvasRef = useRef(null);
  
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let viewer;
    let isMounted = true;

    import('skinview3d').then((skinview3d) => {
      if (!canvasRef.current || !isMounted) return;
      
      viewer = new skinview3d.SkinViewer({
        canvas: canvasRef.current,
        width: 140,
        height: 180,
      });
      
      viewer.animation = new skinview3d.IdleAnimation();
      viewer.background = null; 
      
      if (skinPath) {
        viewer.loadSkin(skinPath).catch(err => {
          console.warn(`Gambar skin tidak ditemukan untuk ${name}: ${skinPath}`);
        });
      }
    }).catch(err => console.error("Gagal meload 3D Viewer", err));

    return () => {
      isMounted = false;
      if (viewer) viewer.dispose();
    };
  }, [skinPath]);

  return (
    <div 
      className="relative w-full h-[400px] cursor-pointer group" 
      style={{ perspective: '1000px' }} // Memberikan kedalaman efek 3D
      onClick={() => setIsFlipped(!isFlipped)} // Balik kartu saat diklik
    >
      <div 
        className="w-full h-full transition-transform duration-700 ease-in-out relative"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className={`absolute w-full h-full bg-white rounded-2xl p-6 text-center border-b-4 ${colorTheme.border} shadow-sm group-hover:shadow-lg flex flex-col items-center justify-between`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`absolute top-0 right-0 ${colorTheme.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10`}>
            {roleIcon && <i className={`${roleIcon} mr-1`}></i>} {role}
          </div>
          
          <div className="flex-1 flex items-end justify-center pt-2 group-hover:-translate-y-2 transition duration-300">
            <canvas ref={canvasRef} className="drop-shadow-xl" title="Klik untuk lihat profil belakang!"></canvas>
          </div>
          
          <div className="mt-4">
            <h3 className="font-heading font-bold text-lg text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500 italic mt-1">"{quote}"</p>
          </div>
          
          <div className="mt-3 text-xs font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Klik untuk balik kartu <i className="fa-solid fa-rotate ml-1"></i>
          </div>
        </div>

        
        <div 
          className={`absolute w-full h-full bg-white rounded-2xl p-6 text-left border-b-4 ${colorTheme.border} shadow-sm flex flex-col`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <h3 className="font-heading font-bold text-xl text-gray-900 leading-tight border-b-2 pb-3 mb-4 border-gray-100">
            Profil {name}
          </h3>

          <div className="flex-1 space-y-4 overflow-y-auto pr-1 text-gray-700">
            <div className="flex gap-3 items-start">
              <i className="fa-solid fa-calendar-days text-gray-400 w-4 mt-1"></i> 
              <div>
                <strong className="block text-gray-900 text-xs">Bergabung</strong>
                <span className="text-xs">{joinDate}</span>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <i className="fa-solid fa-cube text-gray-400 w-4 mt-1"></i> 
              <div>
                <strong className="block text-gray-900 text-xs">Blok Favorit</strong>
                <span className="text-xs">{favoriteBlock}</span>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <i className="fa-solid fa-circle-info text-gray-400 w-4 mt-1"></i> 
              <div>
                <strong className="block text-gray-900 text-xs">Tentang Warga</strong>
                <span className="text-xs leading-relaxed">{description}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-xs font-bold text-gray-400 border-t border-gray-100 pt-3">
            <i className="fa-solid fa-rotate-left mr-1"></i> Klik untuk tutup profil
          </div>
        </div>
        
      </div>
    </div>
  );
}