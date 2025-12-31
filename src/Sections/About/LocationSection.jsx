const LocationSection = () => {
  return (
    <section className="w-full py-10 px-6 lg:px-20 my-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-start">
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <p className="uppercase tracking-[3px] text-[12px] text-gray-500 font-medium">
            @baselinecafe • Industrial Space
          </p>

          <h2 className="text-4xl font-bold text-gray-950 leading-tight">
            Baseline Café
            <span className="block mt-1">Lokasi & Karakteristik</span>
          </h2>

          <p className="text-[18px] text-gray-950 leading-relaxed">
            Baseline Café menghadirkan nuansa industrial modern yang tegas dan
            elegan. Beton ekspos, besi hitam, dan pencahayaan warm menjadi
            identitas utama yang menciptakan atmosfer hangat namun tetap bold.
          </p>

          <p className="text-[17px] text-gray-500 leading-relaxed">
            Setiap sudut dirancang untuk menampilkan keindahan material raw —
            menghadirkan karakter ruang yang otentik, kuat, dan penuh estetika.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl z-[2]" />

          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1600"
            alt="industrial cafe"
            className="
    w-full h-[480px] object-cover rounded-xl shadow-2xl 
    ring-1 ring-white/10
  "
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h3 className="text-[32px] font-serif text-gray-950 leading-tight">
            Apa yang Membuat Baseline Café Unik?
          </h3>

          <div className="space-y-4 text-gray-950 text-[17px] leading-relaxed">
            <p>
              Interior Baseline Café memadukan metal mesh, pipa-pipa ekspose,
              dan lampu tungsten yang memberikan kesan industrial yang kuat dan
              modern.
            </p>

            <p>
              Kombinasi beton kasar dan sentuhan warm lighting menciptakan
              ambience yang nyaman—cocok untuk bekerja, nongkrong, maupun waktu
              santai.
            </p>

            <p>
              Setiap detail dirancang agar fotogenik dan estetik, menjadikan
              Baseline Café sebagai destinasi ideal untuk pecinta kopi dan gaya
              hidup urban.
            </p>
          </div>

          <button
            className="
              px-8 py-3.5 
              bg-gray-950 
              text-white
              font-medium
              rounded-full 
              shadow-md
              hover:bg-gray-900 
              hover:shadow-lg
              transition-all 
              duration-300
              tracking-wide
            "
          >
            Lihat Detail Lokasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
