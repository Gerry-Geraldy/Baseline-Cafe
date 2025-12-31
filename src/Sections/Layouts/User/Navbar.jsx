import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navLinks } from "../../../Constants/indexHome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      const nowDesktop = window.innerWidth >= 768;
      setIsDesktop(nowDesktop);

      if (nowDesktop) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHome || !isDesktop) return;

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, isDesktop]);

  // Navbar style logic
  const navbarStyle = isHome
    ? isDesktop
      ? scrolled
        ? "bg-white/90 backdrop-blur-md"
        : "bg-transparent"
      : "bg-white/90 backdrop-blur-md"
    : "bg-white/90 backdrop-blur-md";

  const textColor = isHome
    ? isDesktop
      ? scrolled
        ? "text-gray-900"
        : "text-white"
      : "text-gray-900"
    : "text-gray-900";

  return (
    <nav
      className={`w-full z-50 top-0 left-0 fixed transition-all duration-300 ${navbarStyle}`}
    >
      <div className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`w-10 h-10 ${textColor}`}
          >
            <path d="M18 8h1a3 3 0 010 6h-1v1a5 5 0 01-5 5H9a5 5 0 01-5-5V8h14zm1 4a1 1 0 000-2h-1v2h1zM6 4h2v2H6V4zm4 0h2v2h-2V4zm-4 3h2v2H6V7zm4 0h2v2h-2V7z" />
          </svg>
          <span className={`text-2xl tracking-wide font-semibold ${textColor}`}>
            Baseline
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${textColor} hover:opacity-70 transition`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a
            href="/book"
            className={`px-6 py-3 rounded-lg text-base font-semibold transition
              ${
                isHome && isDesktop && !scrolled
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-[6px]"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-7 h-[3px] rounded transition-all duration-300 
              ${textColor === "text-gray-900" ? "bg-gray-900" : "bg-white"}
              ${
                isOpen &&
                (i === 0
                  ? "rotate-45 translate-y-[9px]"
                  : i === 1
                  ? "opacity-0"
                  : "-rotate-45 -translate-y-[9px]")
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white 
        ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-7 py-6 gap-5 text-gray-900 text-lg font-medium">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-600"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/book"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-3 rounded-lg text-center bg-black text-white text-lg font-semibold hover:bg-gray-800 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
