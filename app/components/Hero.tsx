import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg" 
          alt="Gedung PTPN IV"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> 
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase drop-shadow-2xl mb-4 md:mb-6 leading-tight">
          VISI PTPN IV
        </h1>
        <p className="text-base md:text-xl text-gray-200 font-light leading-relaxed md:leading-loose drop-shadow-md">
          Menjadi perusahaan agribisnis nasional yang unggul dan berdaya saing kelas dunia 
          serta berkontribusi secara berkesinambungan bagi kemajuan bangsa.
        </p>
      </div>
      {/* ------------------------------ */}
      
    </section>
  );
}