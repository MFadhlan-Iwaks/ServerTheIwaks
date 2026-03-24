"use client";
import { useState } from 'react';

export default function CommandCard({ title, icon, theme, shortDesc, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-mc-bg rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className={`w-12 h-12 ${theme.bg} ${theme.text} rounded-lg flex items-center justify-center text-xl`}>
            <i className={icon}></i>
          </div>
          <i className={`fa-solid fa-chevron-down text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
        </div>
        
        <h3 className="font-mono font-bold text-lg text-gray-900 mb-2">{title}</h3>
        
        <div className={`transition-all duration-300 ${isOpen ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
          <p className="text-gray-600 text-sm">{shortDesc}</p>
        </div>

        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden flex flex-col gap-3">
            {list.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                <code className="text-sm font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded block mb-1">
                  {item.cmd}
                </code>
                <p className="text-xs text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
