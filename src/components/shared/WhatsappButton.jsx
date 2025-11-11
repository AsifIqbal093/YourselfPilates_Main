"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "+351927078842"; // Portugal country code + phone number
  const defaultMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais informações sobre os serviços de Pilates."
  );

  useEffect(() => {
    // Show button after a small delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2} />

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 px-4 py-2 bg-white text-secondary text-sm font-medium rounded-lg shadow-lg whitespace-nowrap transition-all duration-200 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          Fale Connosco no WhatsApp
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
        </div>
      </button>
    </div>
  );
};

export default WhatsappButton;
