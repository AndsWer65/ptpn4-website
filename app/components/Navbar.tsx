"use client"; // Wajib ditambahkan agar kita bisa menggunakan interaksi klik (useState)

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // State untuk membuka/menutup menu utama di Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State untuk membuka/menutup sub-menu (dropdown) di Mobile
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 bg-[#c4f4d4]/90 backdrop-blur-md px-6 md:px-12 py-3 flex justify-between items-center relative z-50 shadow-sm">
      
      {/* SEKSI LOGO */}
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <div className="relative w-32 h-12 md:w-40 md:h-16"> 
          <Image 
            src="/logo.png" 
            alt="Logo PTPN IV" 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-right md:object-center"
            style={{
                    objectPosition: typeof window !== "undefined" && window.innerWidth < 768 ? "85% 50%" : "50% 50%",
            }}
            priority 
          />
        </div>
      </Link>

      {/* (HANYA MUNCUL DI MOBILE) */}
      <button 
        className="md:hidden text-green-900 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {/* Ikon SVG Garis Tiga / Silang */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* TAMPILAN DESKTOP */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Dropdown Produk Desktop */}
        <div className="relative group flex items-center h-full">
          <button className="flex items-center space-x-1 text-green-900 font-semibold py-4">
            <span>Produk</span>
            <span className="text-xs">▼</span>
          </button>
          <div className="absolute left-0 top-[90%] w-48 bg-white border border-gray-200 rounded-md shadow-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[60]">
            <ul className="py-2 text-gray-700 font-medium text-sm">
              <li className="px-4 py-2 hover:bg-green-100 hover:text-green-800"><Link href="/produk/kelapa-sawit" className="block w-full">Kelapa Sawit</Link></li>
              <li className="px-4 py-2 hover:bg-green-100 hover:text-green-800"><Link href="/produk/teh" className="block w-full">Teh</Link></li>
            </ul>
          </div>
        </div>

        {/* Dropdown Kebun Desktop */}
        <div className="relative group flex items-center h-full">
          <button className="flex items-center space-x-1 text-green-900 font-semibold py-4">
            <span>Kebun</span>
            <span className="text-xs">▼</span>
          </button>
          <div className="absolute right-0 top-[90%] w-48 bg-white border border-gray-200 rounded-md shadow-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[60]">
            <ul className="py-2 text-gray-700 font-medium text-sm">
              <li className="px-4 py-2 hover:bg-green-100 hover:text-green-800"><Link href="/kebun/adolina" className="block w-full">Kebun Adolina</Link></li>
              <li className="px-4 py-2 hover:bg-green-100 hover:text-green-800"><Link href="/kebun/bah-jambi" className="block w-full">Kebun Bah Jambi</Link></li>
              <li className="px-4 py-2 hover:bg-green-100 hover:text-green-800"><Link href="/kebun/dolok-ilir" className="block w-full">Kebun Dolok Ilir</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* TAMPILAN MOBILE MENU*/}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col md:hidden z-50">
          
          {/* Produk Mobile */}
          <div className="border-b border-gray-100">
            <button 
              className="w-full flex justify-between items-center px-6 py-4 text-green-900 font-semibold"
              onClick={() => toggleMobileDropdown('produk')}
            >
              <span>Produk</span>
              <span className="text-xs">{activeMobileDropdown === 'produk' ? '▲' : '▼'}</span>
            </button>
            {activeMobileDropdown === 'produk' && (
              <ul className="bg-gray-50 px-6 py-2 text-gray-700 text-sm">
                <li className="py-2 border-b border-gray-200"><Link href="/produk/kelapa-sawit" onClick={() => setIsMobileMenuOpen(false)}>Kelapa Sawit</Link></li>
                <li className="py-2"><Link href="/produk/teh" onClick={() => setIsMobileMenuOpen(false)}>Teh</Link></li>
              </ul>
            )}
          </div>

          {/* Kebun Mobile */}
          <div className="border-b border-gray-100">
            <button 
              className="w-full flex justify-between items-center px-6 py-4 text-green-900 font-semibold"
              onClick={() => toggleMobileDropdown('kebun')}
            >
              <span>Kebun</span>
              <span className="text-xs">{activeMobileDropdown === 'kebun' ? '▲' : '▼'}</span>
            </button>
            {activeMobileDropdown === 'kebun' && (
              <ul className="bg-gray-50 px-6 py-2 text-gray-700 text-sm">
                <li className="py-2 border-b border-gray-200"><Link href="/kebun/adolina" onClick={() => setIsMobileMenuOpen(false)}>Kebun Adolina</Link></li>
                <li className="py-2 border-b border-gray-200"><Link href="/kebun/bah-jambi" onClick={() => setIsMobileMenuOpen(false)}>Kebun Bah Jambi</Link></li>
                <li className="py-2"><Link href="/kebun/dolok-ilir" onClick={() => setIsMobileMenuOpen(false)}>Kebun Dolok Ilir</Link></li>
              </ul>
            )}
          </div>

        </div>
      )}
    </nav>
  );
}