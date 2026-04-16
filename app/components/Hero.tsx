import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center">
      
      {/* Background Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background Kantor PTPN IV"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Teks Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-bold mb-2 text-white drop-shadow-2xl uppercase">Visi PTPN IV</h1>
        <p className="text-2xl font-light text-gray-200 tracking-widest drop-shadow-lg">Menjadi perusahaan agribisnis nasional yang unggul dan berdaya saing kelas dunia serta berkontribusi secara berkesinambungan bagi kemajuan bangsa.</p>
      </div>

    </section>
  );
}