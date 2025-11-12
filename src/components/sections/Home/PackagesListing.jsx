"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckIcon } from "@/components/icons/CustomIcons";

/**
 * Packages Listing Section
 * 3-column grid with pricing packages
 */
const PackagesListing = () => {
  const packages = [
    {
      name: "Uma Sessão",
      price: "22€",
      per: "por sessão",
      description: "Pack de 1 hora, para maior flexibilidade de horários",
      features: [
        "1 sessão de 1 hora",
        "Escolha o dia e hora",
        "Equipamento premium",
        "Internet incluída",
      ],
      image: "/images/07.png",
      link: "/packs/uma-sessao",
      popular: false,
    },
    {
      name: "Quatro Aulas",
      price: "20€",
      per: "por sessão",
      description:
        "Pack de 4 horas, pode escolher o dia e hora que desejar até um limite de 4 aulas",
      features: [
        "4 sessões de 1 hora",
        "Validade: 1 mês",
        "Flexibilidade de horários",
        "Equipamento premium",
        "Melhor relação qualidade-preço",
      ],
      image: "/images/08.png",
      link: "/packs/quatro-aulas",
      popular: true,
    },
    {
      name: "Oito Aulas",
      price: "18€",
      per: "por sessão",
      description:
        "Pack de 8 horas, pode escolher o dia e hora que desejar até um limite de 8 aulas",
      features: [
        "8 sessões de 1 hora",
        "Validade: 2 meses",
        "Melhor valor",
        "Equipamento premium",
        "Máxima economia",
      ],
      image: "/images/10.png",
      link: "/packs/oito-aulas",
      popular: false,
    },
  ];

  // Stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-center text-2xl md:text-4xl font-normal mb-12 md:mb-16"
        >
          Agendar o espaço
        </motion.h2>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-button text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  Popular
                </div>
              )}

              <Card
                className={`
                  h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                  ${
                    pkg.popular
                      ? "border-2 border-primary shadow-xl"
                      : "border border-border"
                  }
                `}
              >
                {/* Package Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {pkg.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  {/* Price */}
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">
                      {pkg.price}
                    </div>
                    <div className="text-muted text-sm mt-1">{pkg.per}</div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary text-sm text-center leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-secondary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    asChild
                    className={`
                      w-full rounded-2xl
                      ${
                        pkg.popular ? "bg-gradient-button hover:opacity-90" : ""
                      }
                    `}
                    size="lg"
                  >
                    <Link href={pkg.link}>Ver Pack</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesListing;
