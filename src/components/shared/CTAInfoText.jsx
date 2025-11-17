"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTAInfoText = () => {
  return (
    <div className="flex justify-center bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mt-25 mb-25 flex items-center gap-4">
        <Link
          href="/contactos"
          className="mt-25 mb-25 flex cursor-pointer items-center gap-4"
        >
          <div className="relative h-10 w-10">
            <Image
              src="/icons/DarkLogo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <p className="md:text-1xl text-lg font-normal text-[#15467d] underline sm:text-xl">
            Gostava de agendar uma visita ou entrar em contacto
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CTAInfoText;
