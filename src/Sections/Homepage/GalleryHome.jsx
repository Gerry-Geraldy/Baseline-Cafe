import React from "react";
import { galleryImages } from "../../Constants/indexHome";

const GalleryHome = () => {
  return (
    <section className=" max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1.3fr_1fr] gap-4">
        {/* LEFT */}
        <div className="relative w-full h-[260px] md:h-[620px] group overflow-hidden rounded-sm">
          <img
            src={galleryImages.left.src}
            alt={galleryImages.left.name}
            className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition duration-500"
          />
          <div
            className="absolute inset-0 bg-black/40 
            opacity-100 md:opacity-0 md:group-hover:opacity-100
            flex items-center justify-center transition-all duration-300"
          >
            <p className="text-white text-3xl font-semibold tracking-wide">
              {galleryImages.left.name}
            </p>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="relative w-full h-[260px] md:h-[620px] group overflow-hidden rounded-sm">
          <img
            src={galleryImages.middle.src}
            alt={galleryImages.middle.name}
            className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition duration-500"
          />
          <div
            className="absolute inset-0 bg-black/40 
            opacity-100 md:opacity-0 md:group-hover:opacity-100
            flex items-center justify-center transition-all duration-300"
          >
            <p className="text-white text-3xl font-semibold tracking-wide">
              {galleryImages.middle.name}
            </p>
          </div>
        </div>

        {/* RIGHT (2 images) */}
        <div className="grid grid-rows-2 gap-6">
          {galleryImages.right.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-[260px] md:h-[300px] group overflow-hidden rounded-sm"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition duration-500"
              />
              <div
                className="absolute inset-0 bg-black/40 
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                flex items-center justify-center transition-all duration-300"
              >
                <p className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                  {img.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;
