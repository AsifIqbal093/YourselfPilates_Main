"use client";

import React from "react";
import { Clock, MapPin } from "lucide-react";

const Availibility = () => {
  return (
    <div className="flex flex-col justify-center gap-120 md:flex-row">
      <div className="-mt-40 -ml-50 flex items-center gap-4">
        <Clock className="mr-10 mb-22 h-6 w-6 text-[#8faac1]" />
        <div>
          <h3 className="font-accent text-3xl font-light text-[#8faac1] md:text-5xl">
            Horário
          </h3>
          <p className="mt-8 text-[15px] leading-5 font-normal text-[#104c88]">
            Segunda a Sábado <br />
            das 8h às 20h
          </p>
        </div>
      </div>

      <div className="mt-28 -ml-20 flex items-center gap-4">
        <MapPin className="mr-10 mb-50 h-6 w-6 text-[#8faac1]" />
        <div>
          <h3 className="font-accent text-3xl font-light text-[#8faac1] md:text-5xl">
            Localização
          </h3>
          <p className="mt-8 text-[15px] leading-5 font-normal text-[#104c88]">
            Rua Diário de Notícias nº 09,
            <br />
            2500-107 Caldas da Rainha
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 mb-20 inline-block text-[18px] font-normal text-[#8faac1] underline"
          >
            Ver mapa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Availibility;
