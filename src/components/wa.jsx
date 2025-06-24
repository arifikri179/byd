import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import salesAvatar from "../assets/img_avatar.png"; // Ganti dengan path foto sales kamu

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "62811931804"; // Ganti dengan nomor WhatsApp kamu
  const options = [
 
    { label: "Test Drive", message: "Halo, saya ingin mendaftar untuk test drive mobil." },
   
   
    { label: "Promo dan Diskon", message: "Halo, apakah ada promo atau diskon untuk mobil saat ini?" },
   
    { label: "Simulasi Kredit", message: "Halo, saya membutuhkan simulasi kredit, Bisa dibantu." },
    { label: "Trade In", message: "Halo, bagaimana proses trade-in mobil lama saya?" }
  ];
  
  const handleSendMessage = (msg) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] font-sans">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center gap-3 relative">
            <img
              src={salesAvatar}
              alt="Sales Khadafi"
              className="w-10 h-10 rounded-full border border-white"
            />
            <div>
              <div className="font-bold text-sm">Khadafi Rafsanjani</div>
              <div className="text-xs">Sales BYD</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Bubble & Options */}
          <div className="p-4 bg-gray-50 space-y-4">
          <div className="bg-white rounded-lg shadow-sm px-4 py-3 text-sm text-gray-700 w-fit max-w-[90%]">
            Selamat datang, saya <strong>Khadafi Rafsanjani</strong> dari BYD. Apa yang bisa saya bantu untuk Anda?
         </div>


            {/* Instruction Text */}
            <p className="text-sm text-gray-600">Silakan pilih apa yang ingin Anda konsultasikan:</p>

            {/* Options */}
            <div className="space-y-2">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(opt.message)}
                  className="w-full text-left px-4 py-2 text-sm bg-white hover:bg-gray-100 border rounded-lg shadow-sm transition"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
