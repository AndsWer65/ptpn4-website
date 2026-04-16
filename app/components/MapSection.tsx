export default function MapSection({ address }: { address: string }) {
  // Mengonversi alamat menjadi format yang dimengerti Google Maps URL
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-green-900 mb-6">Lokasi Unit</h2>
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
        ></iframe>
      </div>
    </section>
  );
}