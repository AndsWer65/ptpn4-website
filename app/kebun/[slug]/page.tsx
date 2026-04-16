import Navbar from "@/app/components/Navbar";


// Objek data lokasi kebun
const dataKebun: Record<string, { alamat: string; deskripsi: string }> = {
  "adolina": {
    alamat: "PTPN IV Kebun Adolina, Perbaungan, Serdang Bedagai",
    deskripsi: "Unit Adolina berfokus pada pengolahan kelapa sawit di wilayah Serdang Bedagai."
  },
  "bah-jambi": {
    alamat: "PTPN IV Kebun Bah Jambi, Simalungun",
    deskripsi: "Unit Bah Jambi merupakan salah satu sentra produksi sawit utama di Simalungun."
  },
  "dolok-ilir": {
    alamat: "PTPN IV Kebun Dolok Ilir, Simalungun",
    deskripsi: "Unit Dolok Ilir mengelola perkebunan sawit dengan standar berkelanjutan."
  }
};

export default async function DetailKebun({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const infoKebun = dataKebun[slug] || { alamat: "PTPN IV Medan", deskripsi: "Data unit belum tersedia." };
  
  // Encode alamat agar aman untuk URL
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(infoKebun.alamat)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-green-900 uppercase mb-6">Unit {slug.replace("-", " ")}</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Profil Unit</h2>
          <p className="text-gray-600 leading-relaxed">{infoKebun.deskripsi}</p>
        </div>

        {/* BAGIAN PETA */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-green-900 mb-4 px-2">Lokasi Unit</h2>
          <div className="w-full h-[450px] rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapUrl}
            ></iframe>
          </div>
          <p className="mt-4 text-sm text-gray-500 px-2 italic">Alamat: {infoKebun.alamat}</p>
        </div>
      </main>

    </div>
  );
}