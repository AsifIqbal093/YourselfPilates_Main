"use client";

import React from "react";
import { motion } from "framer-motion";
import IconBox from "@/components/shared/IconBox";
import {
  QualityBadgeIcon,
  WifiIcon,
  FloorPlanIcon,
  TvIcon,
  AirConditioningIcon,
  SecurityCameraIcon,
} from "@/components/icons/CustomIcons";

/**
 * Features Grid Section
 * 6-column grid showcasing studio features with icons
 */
const FeaturesGrid = () => {
  const features = [
    {
      icon: <QualityBadgeIcon />,
      title: "Equipamentos de Qualidade Premium",
      description: "que garantem uma melhor experiência",
    },
    {
      icon: <WifiIcon />,
      title: "Internet",
      description: "própria, segura e rápida",
    },
    {
      icon: <FloorPlanIcon />,
      title: "Espaço com 80M2",
      description: "mobilado e pronto a utilizar",
    },
    {
      icon: <TvIcon />,
      title: "Smart TV",
      description: "para complementar as suas aulas",
    },
    {
      icon: <AirConditioningIcon />,
      title: "Ar Condicionado",
      description: "para controlar a temperatura do ambiente",
    },
    {
      icon: <SecurityCameraIcon />,
      title: "Vídeovigilância",
      description: "para garantir a sua segurança e dos seus clientes",
    },
  ];

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6"
        >
          {features.map((feature, index) => (
            <IconBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
