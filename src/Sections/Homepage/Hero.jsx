import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroImages } from "../../Constants/indexHome";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[100svh] md:h-screen w-full overflow-hidden"
      aria-label="Baseline Cafe Hero Section"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Baseline Cafe ambience background"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={index === 0 ? "high" : "auto"}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover will-change-[opacity]"
          />
        ))}
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40 will-change-[opacity]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Baseline Cafe
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mt-5 max-w-2xl opacity-95 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          A cozy space for conversations, slow mornings, and freshly brewed
          coffee. Discover the warm ambience and crafted flavors that define our
          café.
        </motion.p>

        <motion.a
          href="/about"
          className="
            mt-10 px-10 py-4 text-lg md:text-xl font-semibold rounded-full
            border border-white/80
            hover:bg-white hover:text-black transition duration-300
            shadow-lg
          "
          aria-label="Learn more about Baseline Cafe"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
        >
          Read More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
