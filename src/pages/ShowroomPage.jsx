import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import sealion from "../assets/bydsealion.jpg";
import seal from "../assets/seal.png";
import dolphin from "../assets/dol.jpg";
import atto from "../assets/atto.jpg";
import dol from "../assets/dolphine1.jpeg";

const showroomCars = [
  { name: "Sealion 7", image: sealion, link: "/sealion" },
  { name: "Seal", image: seal, link: "/seal" },
  { name: "M6", image: dolphin, link: "/m6" },
  { name: "Atto 3", image: atto, link: "/atto3" },
  { name: "Dolphin", image: dol, link: "/dolphin" }
];

export default function ShowroomPage() {
  return (
    <section id="showroom" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Showroom Mobil Listrik BYD
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {showroomCars.map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-2xl rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Gambar */}
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Konten (dengan center) */}
              <div className="p-5 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {car.name}
                </h3>
                <Link
                  to={car.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Lihat Detail <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
