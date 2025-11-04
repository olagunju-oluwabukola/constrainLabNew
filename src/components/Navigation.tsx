import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/constrainlab.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  const navItems = [
    { label: "Innovations", href: "#innovations" },
    { label: "Journey", href: "#journey" },
    { label: "Founder", href: "#founder" },
    { label: "Partners", href: "#partners" },
    { label: "Network", href: "#network" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 40);

      // Detect background brightness under the navbar
      const section = document.elementFromPoint(window.innerWidth / 2, 80);
      const bgColor = window.getComputedStyle(section || document.body).backgroundColor;
      const [r, g, b] = bgColor.match(/\d+/g)?.map(Number) || [0, 0, 0];
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      setIsOnLightSection(brightness > 180);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOnLightSection ? "text-slate-900" : "text-white"
      }`}
    >
      <div className="mx-auto w-[95%] md:max-w-7xl mt-4 rounded-2xl backdrop-blur-xl shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-blue-950 to-blue-800 border-white/20">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 leading-none">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img
                src={logo}
                alt="Constrainlab logo"
                className="invert brightness-0 w-full h-full object-contain mt-2 md:mt-3"
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide leading-none transition-colors duration-300 text-white">
              ConstrainLab
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium relative group transition-all duration-200 ${
                  isOnLightSection
                    ? "text-blue-900/80 hover:text-blue-700"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    isOnLightSection
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "bg-gradient-to-r from-purple-400 to-indigo-400"
                  } group-hover:w-full transition-all duration-300`}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <a href="#network">
              <Button className="px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white text-blue-950 font-bold text-sm hover:bg-blue-900 hover:text-white">
                Join Network
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full transition-all duration-200 text-white" // stays white always
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div
            className={`lg:hidden animate-fade-in bg-gradient-to-br from-blue-950 to-blue-800`}
          >
            <div className="px-8 py-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10`}
                  onClick={() => setIsOpen(false)} // ✅ closes nav when clicked
                >
                  {item.label}
                </a>
              ))}
              <a href="#network" onClick={() => setIsOpen(false)}>
                <Button className="w-full font-semibold py-3 rounded-full shadow-lg mt-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
                  Join Network
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
