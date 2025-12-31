import { Instagram, Phone, Mail } from "lucide-react";

const AboutHero = () => {
  return (
    <section
      className="
        relative w-full h-auto md:h-[60vh]
        flex items-center bg-white
        mt-24
        px-6 sm:px-10 lg:px-20 xl:px-28
      "
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            ABOUT US
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
            Welcome to Baseline Coffee, a neighbourhood café rooted in European
            coffee culture. Founded in 2024, we focus on thoughtfully sourced
            beans, handcrafted brews, and a calm space designed for everyday
            moments.
          </p>
        </div>

        <div className="md:text-right mt-6 md:mt-0">
          <h3 className="text-sm font-semibold text-gray-700 tracking-wide">
            VISIT US
          </h3>

          <p className="mt-3 text-gray-700">
            47 Clerkenwell Road
            <br />
            London EC1M 5RS, United Kingdom
          </p>

          <div className="flex md:justify-end gap-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              <Phone size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
