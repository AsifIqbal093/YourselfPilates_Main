"use client";

import React from "react";
import { Clock, MapPin } from "lucide-react";

const Availibility = () => {
  return (
    <div className="flex flex-col gap-20 px-4 md:flex-row md:justify-center md:gap-40 lg:gap-60">
      {/* Horário */}
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
        <Clock className="h-6 w-6 text-[#8faac1] md:mr-6 lg:mr-10" />

        <div>
          <h3 className="font-accent text-3xl font-light text-[#8faac1] md:text-5xl">
            Horário
          </h3>
          <p className="mt-2 text-[15px] leading-5 font-normal text-[#104c88] md:mt-4">
            Segunda a Sábado <br />
            das 8h às 20h
          </p>
        </div>
      </div>

      {/* Localização */}
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
        <MapPin className="h-6 w-6 text-[#8faac1] md:mr-6 lg:mr-10" />

        <div>
          <h3 className="font-accent text-3xl font-light text-[#8faac1] md:text-5xl">
            Localização
          </h3>
          <p className="mt-2 text-[15px] leading-5 font-normal text-[#104c88] md:mt-4">
            Rua Diário de Notícias nº 09,
            <br />
            2500-107 Caldas da Rainha
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-2 inline-block text-[18px] font-normal text-[#8faac1] underline md:mt-4"
          >
            Ver mapa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Availibility;
