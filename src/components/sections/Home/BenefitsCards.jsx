"use client";

import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/shared/FeatureCard";
import { MoneyIcon, DocumentCheckIcon } from "@/components/icons/CustomIcons";

/**
 * Benefits Cards Section
 * 2 large cards showcasing key benefits
 */
const BenefitsCards = () => {
  const benefits = [
    {
      title: "Baixo Custo",
      description:
        "Aluguer flexível por hora, sem compromissos mensais fixos. Pague apenas pelo tempo que utiliza e maximize o seu investimento.",
      icon: <MoneyIcon className="w-12 h-12" />,
      image: "/images/04.png",
      accent: true,
    },
    {
      title: "Sem Burocracia",
      description:
        "Processo simples e rápido. Agende online em poucos cliques e comece a utilizar o espaço imediatamente, sem papelada desnecessária.",
      icon: <DocumentCheckIcon className="w-12 h-12" />,
      image: "/images/06.png",
      accent: false,
    },
  ];

  // Stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                image={benefit.image}
                accent={benefit.accent}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsCards;
