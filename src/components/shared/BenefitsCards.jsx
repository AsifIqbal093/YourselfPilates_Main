"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/shared/FeatureCard";

const BenefitsCards = () => {
  const benefits = [
    {
      title: "Low Initial Cost",
      description:
        "Aluguer flexível por hora, sem compromissos mensais fixos. Pague apenas pelo tempo que utiliza e maximize o seu investimento.",
      logo: "/icons/LightLogo.png",
      image: "/images/WhyYourself/1.jpg",
      accent: true,
      overlayColor: "#5d8fb6ff",
      textColor: "white",
    },
    {
      title: "Total focus on the student.",
      description:
        "Processo simples e rápido. Agende online em poucos cliques e comece a utilizar o espaço imediatamente, sem papelada desnecessária.",
      logo: "/icons/DarkLogo.png",
      image: "/images/WhyYourself/2.jpg",
      accent: false,
      overlayColor: "white",
      textColor: "#15467d",
    },
    {
      title: "Total Professional Environment",
      description:
        "Use o espaço sempre que precisar. Horários totalmente flexíveis e adaptados à sua rotina.",
      logo: "/icons/DarkLogo.png",
      image: "/images/WhyYourself/3.jpg",
      accent: true,
      overlayColor: "white",
      textColor: "#15467d",
    },
    {
      title: "Networking",
      description:
        "Estrutura moderna, limpa e equipada para oferecer a melhor experiência aos seus clientes.",
      logo: "/icons/LightLogo.png",
      image: "/images/WhyYourself/1.jpg",
      accent: false,
      overlayColor: "#5d8fb6ff",
      textColor: "white",
    },
    {
      title: "Flexible Hours",
      description:
        "Equipe pronta para ajudar você em tudo que precisar, garantindo uma experiência sem preocupações.",
      logo: "/icons/LightLogo.png",
      image: "/images/WhyYourself/5.jpg",
      accent: true,
      overlayColor: "#5d8fb6ff",
      textColor: "white",
    },
    {
      title: "Finances under control",
      description:
        "Espaços em áreas estratégicas, fáceis de acessar e próximas aos principais pontos da cidade.",
      logo: "/icons/DarkLogo.png",
      image: "/images/WhyYourself/6.png",
      accent: false,
      overlayColor: "white",
      textColor: "#15467d",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="font-accent mb-9 text-center text-5xl font-light">
          <span className="text-[#88a9c3]">Porquê a </span>
          <span className="font-light text-[#0f3660]">YourSelf </span>
          <span className="text-[#88a9c3]">?</span>
        </h1>

        <Link
          href="/contactos"
          className="group mb-16 inline-block text-lg font-normal text-[#88a9c3] underline decoration-2 underline-offset-4 transition-all duration-200"
        >
          Saber mais sobre a YourSelf
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-[1200px] grid-cols-1 justify-items-center gap-x-4 gap-y-10 md:grid-cols-2"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                className="w-full md:w-[550px]"
                title={benefit.title}
                description={benefit.description}
                icon={
                  <Image
                    src={benefit.logo}
                    alt={benefit.title}
                    width={40}
                    height={40}
                    style={{ width: "auto", height: "auto" }}
                  />
                }
                image={benefit.image}
                accent={benefit.accent}
                overlayColor={benefit.overlayColor}
                textColor={benefit.textColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsCards;
