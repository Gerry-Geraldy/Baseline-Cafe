import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../../Constants/indexHome";

const fade = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.7, ease: "easeIn" } },
};

const Testimony = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 px-6 bg-white text-[#222]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Minimal Black Quote Icon */}
        <Quote
          size={48}
          className="mx-auto text-[#111] opacity-90 drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]"
        />

        {/* Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={fade}
            initial="hidden"
            animate="show"
            exit="exit"
            className="mt-8"
          >
            <p className="text-[#444] italic leading-relaxed text-xl tracking-wide font-light">
              {testimonials[current].text}
            </p>

            {/* Author */}
            <p className="mt-8 text-[#222] tracking-[0.20em] font-serif text-sm">
              {testimonials[current].author}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots – Black & Gray */}
        <div className="flex justify-center gap-4 mt-10">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === current
                  ? "bg-black scale-110 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                  : "bg-[#cfcfcf] hover:bg-[#bfbfbf]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
