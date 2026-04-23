"use client"; 
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useState, use } from "react"; 

const dataProduk: Record<string, { 
  title: string; 
  tagline: string;
  deskripsi: string; 
  keunggulan: string[];
  images: string[]; 
}> = {
  "kelapa-sawit": {
    title: "Kelapa Sawit (CPO & Kernel)",
    tagline: "Emas Hijau Indonesia untuk Dunia",
    deskripsi: "PTPN IV mengelola perkebunan kelapa sawit dengan praktik berkelanjutan. Produk utama kami meliputi Crude Palm Oil (CPO) dan Palm Kernel (PK) dengan standar kualitas tinggi yang memenuhi kebutuhan industri pangan dan energi global.",
    keunggulan: ["Sertifikasi RSPO & ISPO", "Kadar FFA Rendah", "Pengolahan Modern", "Ramah Lingkungan"],
    images: ["/sawit.jpeg",] 
  },
  "teh": {
    title: "Teh Premium",
    tagline: "Kesegaran dari Dataran Tinggi Sumatera",
    deskripsi: "Dihasilkan dari pucuk teh pilihan di perkebunan dataran tinggi yang sejuk. Teh PTPN IV memiliki cita rasa yang khas, aroma yang kuat, dan warna seduhan yang jernih, menjadikannya pilihan utama bagi penikmat teh sejati.",
    keunggulan: ["Tanpa Bahan Kimia", "Dipetik Manual", "Aroma Khas Ortodoks", "Kualitas Ekspor"],
    images: ["/teh.jpg", "/teh2.jpg"] 
  }
};

// 2. Fungsi Komponen Utama 
export default function DetailProduk({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const item = dataProduk[slug] || { 
    title: "Produk Tidak Ditemukan", 
    tagline: "", 
    deskripsi: "Silakan kembali ke halaman utama.", 
    keunggulan: [], 
    images: [] 
  };

  // 3. Logika Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? item.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === item.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <div className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
          {item.images.length > 0 && (
            <Image 
              src={item.images[currentIndex]} 
              alt="Background"
              fill
              className="object-cover z-0 blur-sm scale-110 opacity-30 transition-all duration-500" 
              priority
            />
          )}
          <div className="absolute inset-0 bg-green-950 z-10 opacity-80" /> 
          <div className="relative z-20 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">{item.title}</h1>
            <p className="text-xl md:text-2xl font-light italic text-green-100">{item.tagline}</p>
          </div>
        </div>

        {/* KONTEN UTAMA */}
        <div className="container mx-auto py-16 px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Teks Penjelasan */}
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Deskripsi Produk</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">{item.deskripsi}</p>
              
              <h3 className="text-xl font-bold text-green-800 mb-4">Keunggulan Utama:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.keunggulan.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm transition hover:shadow-md hover:-translate-y-1">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLIDER GAMBAR */}
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
               {item.images.length > 0 ? (
                  <>
                    <Image 
                      src={item.images[currentIndex]} 
                      alt={`${item.title} ${currentIndex + 1}`} 
                      fill 
                      className="object-cover object-center transition-all duration-500" 
                      sizes="(max-width: 768px) 100vw, 50vw" 
                    />
                    
                    {/* Tombol Kiri */}
                    <button 
                      onClick={prevSlide}
                      className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition opacity-100 md:opacity-0 group-hover:opacity-100 z-10"
                    >
                      &#10094; {/* Simbol Panah Kiri */}
                    </button>

                    {/* Tombol Kanan */}
                    <button 
                      onClick={nextSlide}
                      className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition opacity-100 md:opacity-0 group-hover:opacity-100 z-10"
                    >
                      &#10095; {/* Simbol Panah Kanan */}
                    </button>

                    {/* Titik-titik Navigasi (Dots) di bawah */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {item.images.map((_, slideIndex) => (
                        <button
                          key={slideIndex}
                          onClick={() => setCurrentIndex(slideIndex)}
                          className={`w-3 h-3 rounded-full transition-all ${currentIndex === slideIndex ? "bg-white scale-125" : "bg-white/50"}`}
                        />
                      ))}
                    </div>
                  </>
               ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic font-medium bg-gray-100">
                    [ Gambar {item.title} tidak tersedia ]
                  </div>
               )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}