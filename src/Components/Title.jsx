// components/common/Title.jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Title = ({
  subtitle,
  title,
  align = "center",
  animate = true,
  accent = true,
}) => {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  const Wrapper = animate ? motion.div : "div";

  return (
    <Wrapper
      className={`flex flex-col gap-3 mb-16 ${alignment}`}
      variants={fadeUp}
      initial={animate ? "hidden" : ""}
      whileInView={animate ? "show" : ""}
      viewport={animate ? { once: true, amount: 0.3 } : {}}
    >
      {/* Decorative Accent Line */}
      {accent && <div className="w-10 h-[3px] bg-gray-950 rounded-full"></div>}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm md:text-base text-gray-500 tracking-wider uppercase">
          {subtitle}
        </p>
      )}

      {/* Title */}
      {title && (
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-b from-black to-neutral-700 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
    </Wrapper>
  );
};

export default Title;
