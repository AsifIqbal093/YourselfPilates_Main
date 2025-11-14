"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FeatureCard from "@/components/shared/FeatureCard";

const BenefitsCards = () => {
  const benefits = [
    {
      title: "Low Initial Cost",
      description:
        "Aluguer flexível por hora, sem compromissos mensais fixos. Pague apenas pelo tempo que utiliza e maximize o seu investimento.",
      logo: "/images/WhiteLogo.png",
      image: "/images/04.png",
      accent: true,
      overlayColor: "#5d8fb6ff",
      textColor: "white",
    },
    {
      title: "Total focus on the student.",
      description:
        "Processo simples e rápido. Agende online em poucos cliques e comece a utilizar o espaço imediatamente, sem papelada desnecessária.",
      logo: "/images/DarkBlueLogo.png",
      image: "/images/06.png",
      accent: false,
      overlayColor: "white",
      textColor: "#15467d",
    },
    {
      title: "Total Professional Environment",
      description:
        "Use o espaço sempre que precisar. Horários totalmente flexíveis e adaptados à sua rotina.",
      logo: "/images/DarkBlueLogo.png",
      image: "/images/07.png",
      accent: true,
      overlayColor: "white",
      textColor: "#15467d",
    },
    {
      title: "Networking",
      description:
        "Estrutura moderna, limpa e equipada para oferecer a melhor experiência aos seus clientes.",
      logo: "/images/WhiteLogo.png",
      image: "/images/08.png",
      accent: false,
      overlayColor: "#5d8fb6ff",
      textColor: "white",
    },
    {
      title: "Flexible Hours",
      description:
        "Equipe pronta para ajudar você em tudo que precisar, garantindo uma experiência sem preocupações.",
      logo: "/images/WhiteLogo.png",
      image: "/images/07.png",
      accent: true,
      overlayColor: "#5d8fb6ff",
      textColor: "white",
    },
    {
      title: "Finances under control",
      description:
        "Espaços em áreas estratégicas, fáceis de acessar e próximas aos principais pontos da cidade.",
      logo: "/images/DarkBlueLogo.png",
      image: "/images/10.png",
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
    <section className="bg-gradient-primary py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2"
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
