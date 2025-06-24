// src/pages/ContactPage.jsx
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className=" bg-black text-white px-4 sm:px-8 py-12 flex items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 max-w-7xl mx-auto w-full">
        {/* Kontak Info */}
        <div className="lg:w-1/2 text-center lg:text-left">
         <h2 className="text-4xl font-bold text-white mb-3">Kontak</h2>
          <p className="text-sm sm:text-base mb-6">
            Tertarik dengan BYD ? Hubungi <strong>Khadafi Rafsanjani</strong> untuk info lebih lanjut dan jadwalkan test drive!
          </p>
          <a
            href="https://wa.me/62811931804?text=Halo,%20saya%20tertarik%20dengan%20BYD%20%20%F0%9F%9A%97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 text-sm rounded-md hover:bg-green-600 transition"
          >
            <FaPhoneAlt /> WhatsApp Sales
          </a>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-300">
            <strong>PT BIPO TEKNOLOGI OTOMOTIF</strong><br />
            Raya Pasar Minggu KM.18 Blok. 18.1 RT.0<br />
            Pasar Minggu, Pasar Minggu Kota ADM<br />
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
          ></iframe>
        </div>
      </div>
    </section>
  );
}
