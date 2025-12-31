import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { storiesData } from "../../Constants/indexHome";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturedSections = () => {
  return (
    <section className="py-24 bg-white mx-auto">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {storiesData.map((item, index) => (
          <motion.div
            key={index}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`
              relative h-[300px] md:h-[340px]
              flex flex-col justify-between overflow-hidden
              rounded-xl transition-all duration-300 hover:scale-[1.02]
              ${item.bg ? item.bg : "bg-[#111]"} 
              ${item.type === "image" ? "p-0" : "p-8"}
            `}
          >
            {/* IMAGE BLOCK */}
            {item.type === "image" && (
              <>
                <img
                  src={item.img}
                  alt="coffee"
                  className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
                />

                {/* Subtle matte overlay */}
                <div className="absolute inset-0  from-black/50 via-black/25 to-transparent"></div>
              </>
            )}

            {/* TEXT CARD */}
            {item.type === "text" && (
              <>
                <div>
                  <h3 className="font-semibold text-2xl text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-3 leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>

                <button className="text-sm mt-6 flex items-center gap-2 font-bold text-white group">
                  READ MORE
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </>
            )}

            {/* LOGO BLOCK */}
            {item.type === "logo" && (
              <div className="flex flex-col items-center justify-center text-gray-200 h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24 mb-4 opacity-80 text-gray-200"
                >
                  <path d="M18 8h1a3 3 0 010 6h-1v1a5 5 0 01-5 5H9a5 5 0 01-5-5V8h14zm1 4a1 1 0 000-2h-1v2h1zM6 4h2v2H6V4zm4 0h2v2h-2V4zm-4 3h2v2H6V7zm4 0h2v2h-2V7z" />
                </svg>

                <p className="uppercase tracking-widest text-xs opacity-70">
                  {item.subtitle}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSections;
