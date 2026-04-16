import Navbar from "@/app/components/Navbar";

// 1. Data Produk 
const dataProduk: Record<string, { 
  title: string; 
  tagline: string;
  deskripsi: string; 
  keunggulan: string[];
  image: string;
}> = {
  "kelapa-sawit": {
    title: "Kelapa Sawit (CPO & Kernel)",
    tagline: "Emas Hijau Indonesia untuk Dunia",
    deskripsi: "PTPN IV mengelola perkebunan kelapa sawit dengan praktik berkelanjutan. Produk utama kami meliputi Crude Palm Oil (CPO) dan Palm Kernel (PK) dengan standar kualitas tinggi yang memenuhi kebutuhan industri pangan dan energi global.",
    keunggulan: ["Sertifikasi RSPO & ISPO", "Kadar FFA Rendah", "Pengolahan Modern", "Ramah Lingkungan"],
    image: "/sawit.jpg" 
  },
  "teh": {
    title: "Teh Premium",
    tagline: "Kesegaran dari Dataran Tinggi Sumatera",
    deskripsi: "Dihasilkan dari pucuk teh pilihan di perkebunan dataran tinggi yang sejuk. Teh PTPN IV memiliki cita rasa yang khas, aroma yang kuat, dan warna seduhan yang jernih, menjadikannya pilihan utama bagi penikmat teh sejati.",
    keunggulan: ["Tanpa Bahan Kimia", "Dipetik Manual", "Aroma Khas Ortodoks", "Kualitas Ekspor"],
    image: "/teh.jpg" 
  }
};

// 2. Fungsi Komponen Utama 
export default async function DetailProduk({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Jika URL tidak cocok dengan sawit/teh, tampilkan fallback
  const item = dataProduk[slug] || { 
    title: "Produk Tidak Ditemukan", 
    tagline: "", 
    deskripsi: "Silakan kembali ke halaman utama.", 
    keunggulan: [], 
    image: "" 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION PRODUK */}
        <div className="relative h-[50vh] flex items-center justify-center text-white">
          {/* Warna Hijau Gelap sebagai Background */}
          <div className="absolute inset-0 bg-green-900 z-0" /> 
          
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
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {item.deskripsi}
              </p>
              
              <h3 className="text-xl font-bold text-green-800 mb-4">Keunggulan Utama:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.keunggulan.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder untuk Gambar Produk (Kotak Abu-abu) */}
            <div className="relative h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-xl border-8 border-white">
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic font-medium bg-gray-100">
                 [ Area Foto: {item.title} ]
               </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}