import React, { useState } from "react";
import {
  FaCarSide,
  FaBolt,
  FaShieldAlt,
  FaPhoneAlt,
  FaInfoCircle,
  FaDownload,
} from "react-icons/fa";
import M1 from "../assets/m6/1.jpg";
import M2 from "../assets/m6/2.jpg";

export default function m6page() {
  const [activeImage, setActiveImage] = useState(M1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    M1,
    M2,
  ];

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        {/* Image + Features Section */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 flex flex-col sm:flex-row justify-between items-center mt-10">
          {/* Gambar Utama */}
          <div className="mb-10 sm:mb-0 sm:w-1/2">
            <img
              src={activeImage}
              alt="M6 Dolphin"
              className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(activeImage)}
            />
            <div className="flex overflow-x-auto space-x-2 justify-center mb-6 mt-10">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Sealion ${index + 1}`}
                  className="w-15 h-12 object-cover rounded-lg cursor-pointer hover:opacity-75 transition"
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Harga Sealion */}
          <div className="sm:w-1/2 px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-5 text-center">
            Harga BYD M6
          </h2>

          <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 w-full overflow-x-auto">
  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 text-center">
    Varian & Jarak Tempuh
  </h3>

  <table className="w-full text-xs sm:text-base text-gray-700 border-collapse">
    <thead>
      <tr className="border-b text-gray-900 font-semibold text-center">
        <th className="py-2 px-4">Varian</th>
        <th className="py-2 px-4">Harga (Rp)</th>
        <th className="py-2 px-4">Jarak Tempuh</th>
      </tr>
    </thead>
    <tbody className="text-center">
      <tr className="border-b">
        <td className="py-3 px-4 font-medium">M6 STANDARD 7 SEATER</td>
        <td className="py-3 px-4 font-semibold">383.000.000</td>
        <td className="py-3 px-4 text-gray-500">420 km</td>
      </tr>
      <tr className="border-b">
        <td className="py-3 px-4 font-medium">M6 SUPERIOR 7 SEATER</td>
        <td className="py-3 px-4 font-semibold">423.000.000</td>
        <td className="py-3 px-4 text-gray-500">530 km</td>
      </tr>
      <tr className="border-b">
        <td className="py-3 px-4 font-medium">M6 SUPERIOR 6 SEATER</td>
        <td className="py-3 px-4 font-semibold">433.000.000</td>
        <td className="py-3 px-4 text-gray-500">Captain Seat</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

        </section>

        {/* Hubungi Kami Section */}
        <section className="mt-12 px-4 sm:px-8 py-12 bg-black text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
            {/* Kontak Info */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Kontak
              </h2>
              <p className="text-sm sm:text-base mb-6">
                Tertarik dengan BYD M6 ? Hubungi{" "}
                <strong>Khadafi Rafsanjani</strong> untuk info lebih lanjut atau
                jadwalkan test drive!
              </p>
              <a
                href="https://wa.me/62811931804?text=Halo,%20saya%20tertarik%20dengan%20BYD%20M6%20%F0%9F%9A%97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 text-sm rounded-md hover:bg-green-600 transition"
              >
                <FaPhoneAlt /> WhatsApp Sales
              </a>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
                <strong>PT BIPO TEKNOLOGI OTOMOTIF</strong>
                <br />
                Raya Pasar Minggu KM.18 Blok. 18.1 RT.0
                <br />
                Pasar Minggu, Pasar Minggu Kota ADM
                <br />
                Kota Jakarta Selatan
              </p>
            </div>

            {/* Google Maps */}
            <div className="lg:w-1/2 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.552655137675!2d106.70820364025651!3d-6.242694430023305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38c9e288eb9%3A0x423fed88e98c325a!2sBYD%20BIPO%20PASAR%20MINGGU!5e0!3m2!1sid!2sid!4v1746302592929!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Modal Image Viewer */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg w-full max-w-md sm:max-w-lg mx-4">
            {/* Tombol Simpan */}
            <a
              href={activeImage}
              download
              className="absolute top-2 left-2 text-gray-600 hover:text-blue-600 text-xl"
              title="Simpan Gambar"
            >
              <FaDownload />
            </a>

            {/* Gambar utama */}
            <img
              src={activeImage}
              alt="Sealion"
              className="w-full h-auto rounded-lg"
            />

            {/* Thumbnail dalam modal */}
            <div className="flex overflow-x-auto space-x-2 justify-center mt-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Sealion Modal ${index + 1}`}
                  className={`w-14 h-14 object-cover rounded-md cursor-pointer transition ${
                    activeImage === image ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>

            {/* Tombol Close */}
            <button
              className="absolute top-1 right-1 text-gray-700 hover:text-blue-600 text-3xl font-bold"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
