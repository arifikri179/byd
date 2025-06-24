import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Home,
  Car,
  Star,
  Phone,
} from "lucide-react";
import byd from "../assets/bydlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  const toggleDropdown = () => {
    setActiveDropdown(activeDropdown === "showroom" ? null : "showroom");
  };

  const routeMap = {
    "Seal": "/seal",
    "M6": "/m6",
    "Atto-3": "/atto3",
    "Dolphin": "/dolphin",
  };

  const handleLinkClick = (targetId, navigateToSection = false) => {
    setActiveDropdown(null);

    if (navigateToSection) {
      setTimeout(() => {
        if (location.pathname !== "/") {
          navigate(`/#${targetId}`);
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
      setMenuOpen(false);
    } else {
      const path = routeMap[targetId];
      if (path) {
        navigate(path);
      }
      setMenuOpen(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="backdrop-blur-lg bg-white/70 border-b border-white/30 fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 font-[Inter]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={byd}
            alt="BYD Logo"
            className="h-10 md:h-12 transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-base font-medium tracking-wide items-center">
          <Link
            to="/"
            onClick={() => handleLinkClick("home", true)}
            className={`flex items-center gap-1 relative transition duration-300 hover:text-blue-600 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform ${
              isActive("/") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            <Home size={18} /> Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 relative transition hover:text-blue-600"
            >
              <Car size={18} /> Showroom
              {activeDropdown === "showroom" ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            <div
              className={`absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md shadow-2xl rounded-xl py-2 w-48 z-50 transition-all duration-300 ${
                activeDropdown === "showroom"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link
                to="/sealion"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <Car size={16} /> Sealion 7
              </Link>
              {["Seal", "M6", "Atto-3", "Dolphin"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleLinkClick(item)}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <Car size={16} /> {item.replace(/-/g, " ")}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/#review"
            onClick={() => handleLinkClick("review", true)}
            className="flex items-center gap-1 relative transition hover:text-blue-600 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform"
          >
            <Star size={18} /> Review
          </Link>

          <Link
            to="/#contact"
            onClick={() => handleLinkClick("contact", true)}
            className="flex items-center gap-1 relative transition hover:text-blue-600 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform"
          >
            <Phone size={18} /> Kontak
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded bg-black text-white hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isVisible && (
        <div
          className={`md:hidden fixed top-[60px] left-0 right-0 z-40 bg-white/90 backdrop-blur-md px-4 py-4 text-gray-800 space-y-3 shadow-lg rounded-b-xl transition-all duration-300 ease-in-out transform ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <button
            onClick={() => handleLinkClick("home", true)}
            className="flex items-center gap-2 w-full text-left hover:text-blue-600"
          >
            <Home size={18} /> Home
          </button>

          <div>
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full hover:text-blue-600"
            >
              <div className="flex items-center gap-2">
                <Car size={18} /> Showroom
              </div>
              {activeDropdown === "showroom" ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {activeDropdown === "showroom" && (
              <div className="mt-2 pl-2 space-y-1">
                <Link
                  to="/sealion"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-blue-600 px-2 py-1 rounded"
                >
                  <Car size={16} /> Sealion 7
                </Link>
                {["Seal", "M6", "Atto-3", "Dolphin"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleLinkClick(item)}
                    className="flex items-center gap-2 w-full text-left hover:text-blue-600 px-2 py-1 rounded"
                  >
                    <Car size={16} /> {item.replace(/-/g, " ")}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick("review", true)}
            className="flex items-center gap-2 w-full text-left hover:text-blue-600"
          >
            <Star size={18} /> Review
          </button>

          <button
            onClick={() => handleLinkClick("contact", true)}
            className="flex items-center gap-2 w-full text-left hover:text-blue-600"
          >
            <Phone size={18} /> Kontak
          </button>
        </div>
      )}
    </nav>
  );
}
