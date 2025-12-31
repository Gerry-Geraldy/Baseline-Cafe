// components/home/ProductHighlights.jsx
import { productItems } from "../../Constants/indexHome";
import { motion } from "framer-motion";
import Title from "../../Components/Title";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeSide = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
});

const ProductHighlights = () => {
  const leftItems = productItems.slice(0, 3);
  const rightItems = productItems.slice(3, 6);

  return (
    <section className="py-24 px-6 md:px-16 lg:px-28 max-w-screen-2xl mx-auto">
      {/* REUSABLE TITLE */}
      <Title
        subtitle="What Happens Here"
        title="COFFEE BUILD YOUR BASE."
        align="center"
        animate={true}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
        {/* LEFT ITEMS */}
        <motion.div
          className="flex flex-col gap-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.25 }}
        >
          {leftItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeSide("right")}
              className="flex items-center justify-between gap-8 md:flex-row flex-col text-center md:text-right"
            >
              <div className="md:order-1 order-2">
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-gray-600 text-base max-w-sm mt-1">
                  {item.desc}
                </p>
              </div>

              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 opacity-90 md:order-2 order-1 mx-auto md:mx-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CENTER CUP */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/coffee_cup.png"
            alt="Coffee Cup"
            className="w-72 md:w-96 lg:w-[420px] xl:w-[480px] select-none"
          />
        </motion.div>

        {/* RIGHT ITEMS */}
        <motion.div
          className="flex flex-col gap-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.25 }}
        >
          {rightItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeSide("left")}
              className="flex items-center justify-between gap-8 md:flex-row flex-col md:text-left text-center"
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 opacity-90 md:order-1 order-1 mx-auto md:mx-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <div className="md:order-2 order-2">
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-gray-600 text-base max-w-sm mt-1 md:ml-auto">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHighlights;
