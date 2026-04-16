export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 z-50">
      {/* Lingkaran Animasi Berputar */}
      <div className="w-16 h-16 border-4 border-green-200 border-t-green-700 rounded-full animate-spin"></div>
      
      {/* Teks Berkedip */}
      <p className="mt-6 text-green-800 font-medium animate-pulse tracking-wide">
        Memuat data...
      </p>
    </div>
  );
}