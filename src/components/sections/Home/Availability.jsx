"use client";

import React from "react";
import { Clock, MapPin } from "lucide-react";

const Availibility = () => {
  return (
    <div className="flex flex-col justify-center gap-[120px] md:flex-row">
      {/* Horário */}
      <div className="flex flex-col items-center gap-3 text-center md:-mt-[40px] md:mr-[110px] md:-ml-[50px] md:flex md:flex-row md:items-center md:gap-4 md:text-left">
        <Clock className="h-6 w-6 text-[#8faac1] md:mr-10 md:mb-[22px]" />

        <div>
          <h3 className="font-accent text-3xl font-light text-[#8faac1] md:text-5xl">
            Horário
          </h3>

          <p className="mt-3 text-[15px] leading-5 font-normal text-[#104c88] md:mt-8">
            Segunda a Sábado <br />
            das 8h às 20h
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 text-center md:mt-[150px] md:mr-[30px] md:-ml-[20px] md:flex md:flex-row md:items-center md:gap-4 md:text-left">
        <MapPin className="h-6 w-6 text-[#8faac1] md:mr-10 md:mb-[50px]" />

        <div>
          <h3 className="font-accent text-3xl font-light text-[#8faac1] md:text-5xl">
            Localização
          </h3>

          <p className="mt-3 text-[15px] leading-5 font-normal text-[#104c88] md:mt-8">
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
            className="mt-3 inline-block text-[18px] font-normal text-[#8faac1] underline md:mt-7 md:mb-20"
          >
            Ver mapa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Availibility;
