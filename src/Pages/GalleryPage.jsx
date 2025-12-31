import React from "react";
import { images } from "../Constants/indexGallery";
import Title from "../Components/Title";

const GalleryPage = () => {
  return (
    <section className="p-5 md:p-10 mt-32">
      <Title
        subtitle="What Happens Here"
        title="LET'S SEE GALLERY HERE."
        align="center"
        animate={true}
      />
      <div
        className="
          columns-2 
          sm:columns-2 
          md:columns-3 
          lg:columns-3 
          gap-5 lg:gap-8
        "
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`gallery-${index}`}
            className="
              w-full 
              mb-5 
              rounded-xl 
              object-cover
              break-inside-avoid
              hover:scale-[1.02]
              transition-transform duration-300
            "
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
