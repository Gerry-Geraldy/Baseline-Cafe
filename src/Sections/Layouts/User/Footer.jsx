import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        relative 
        text-white
        overflow-visible
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-9 md:px-14 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* OPENING HOURS */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">
              OPENING HOURS
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday</span>
                <span className="text-[#c4a57f] font-semibold">CLOSED</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>08:30 – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>08:30 – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>08:30 – 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday *</span>
                <span>08:30 – 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday *</span>
                <span>09:00 – 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>09:00 – 20:00</span>
              </li>
            </ul>
          </div>

          {/* LATEST JOURNAL */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">
              FROM THE JOURNAL
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "A EUROPEAN APPROACH TO SPECIALTY COFFEE",
                "DESIGNING SPACES FOR SLOW MOMENTS",
                "WHY WE ROAST IN SMALL BATCHES",
                "COFFEE, COMMUNITY & CULTURE",
              ].map((title, idx) => (
                <li key={idx}>
                  <p className="font-semibold hover:text-[#c4a57f] duration-200">
                    {title}
                  </p>
                  <span className="text-[#c4a57f] text-xs">12.03.2024</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">
              CONTACT
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#c4a57f] duration-200 cursor-pointer">
                hello@baselinecoffee.eu
              </li>
              <li>+44 20 7946 0821</li>
              <li>47 Clerkenwell Road</li>
              <li>London EC1M 5RS</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-3 tracking-wide">
              SUBSCRIBE
            </h3>

            <div className="flex items-center bg-white/15 rounded-lg overflow-hidden h-12">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  bg-transparent h-full flex-1 px-2 
                  placeholder-gray-300 text-sm 
                  outline-none text-white
                "
              />
              <button
                className="
                  bg-[#c4a57f] hover:bg-[#b8956e] 
                  h-full px-5 flex items-center justify-center 
                  text-black font-bold
                  transition-colors duration-200
                "
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* LOCATIONS */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">
              LOCATIONS
            </h3>

            <p className="font-semibold mb-1 text-sm">
              BASELINE COFFEE – LONDON
            </p>
            <p className="text-sm text-gray-300 mb-4">
              47 Clerkenwell Road <br />
              London EC1M 5RS
            </p>

            <p className="font-semibold mb-1 text-sm">
              BASELINE COFFEE – BERLIN
            </p>
            <p className="text-sm text-gray-300">
              Linienstraße 112 <br />
              10115 Berlin
            </p>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 border-t border-white/20 pt-6 text-sm">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Baseline Coffee. All rights reserved.
          </p>

          <div className="flex gap-6 text-xl">
            <Facebook className="cursor-pointer hover:text-[#c4a57f]" size={22} />
            <Twitter className="cursor-pointer hover:text-[#c4a57f]" size={22} />
            <Instagram className="cursor-pointer hover:text-[#c4a57f]" size={22} />
            <Linkedin className="cursor-pointer hover:text-[#c4a57f]" size={22} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
