"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PackagesListing = () => {
  const packages = [
    {
      name: "1 sessão hora/aula",
      description: "Pack de 1 hora, para maior flexibilidade de horários.",
      price: "Preço: 22€/sessão",
      image: "/images/3.jpg",
      link: "/packs/uma-sessao",
    },
    {
      name: "Pack de 4 horas/aula",
      description:
        "Pack de 4 horas, pode escolher o dia e hora que desejar até um limite de 4 aulas.",
      price: "Preço: 20€/sessão",
      image: "/images/1.jpg",
      link: "/packs/quatro-aulas",
    },
    {
      name: "Pack de 8 horas/aula",
      description:
        "Pack de 8 horas, pode escolher o dia e hora que desejar até um limite de 8 aulas.",
      price: "Preço: 18€/sessão",
      image: "/images/2.jpg",
      link: "/packs/oito-aulas",
    },
  ];

  return (
    <section className="bg-[#f8fbff] pt-0 pb-20">
      <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
        <h2 className="font-accent mt-20 mb-12 text-5xl font-medium text-[#88a9c3]">
          Agendar o espaço
        </h2>

        {/* Compact Grid Layout */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 justify-center gap-[2px] sm:grid-cols-2 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="w-[340px] overflow-hidden rounded-3xl bg-[#f1f5f8] p-0 shadow-md md:w-[350px]"
            >
              {/* Image */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <CardContent className="flex flex-col p-6 text-left font-sans">
                <h3 className="mb-3 font-sans text-2xl font-bold text-sky-900">
                  {pkg.name}
                </h3>
                <p className="mb-3 font-sans text-base font-normal text-sky-900">
                  {pkg.description}
                </p>
                <p className="mb-6 font-mono text-lg font-semibold text-sky-900">
                  {pkg.price}
                </p>

                <div className="mt-auto flex flex-col items-start gap-3">
                  <Button
                    asChild
                    className="w-auto rounded-full bg-sky-900 px-6 py-2 text-base font-medium text-white normal-case"
                  >
                    <Link href={pkg.link}>Agendar</Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-auto rounded-full border-2 border-sky-900 px-6 py-2 text-base font-medium text-sky-900 normal-case"
                  >
                    Saber Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesListing;
