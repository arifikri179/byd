import React, { useState, useEffect } from "react";
import bg1 from "../assets/seal1.jpg";
import bg2 from "../assets/seal2.jpg";
import { Car, Phone } from "lucide-react";

const backgrounds = [bg1, bg2];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setFade(true);
      }, 500); // waktu fade out
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6 pt-0 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-6 md:p-8 text-white animate-fade-in-up">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Selamat Datang di Showroom BYD
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
          Temukan mobil listrik impianmu dengan teknologi canggih dan desain futuristik.
        </p>

        {/* Tombol Showroom & Kontak */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4">
          <a
            href="#showroom"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-blue-400/40 w-[140px] sm:w-auto"
          >
            <Car size={16} /> Showroom
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-blue-400/40 w-[140px] sm:w-auto"
          >
            <Phone size={16} /> Kontak
          </a>
        </div>
      </div>
    </section>
  );
}
