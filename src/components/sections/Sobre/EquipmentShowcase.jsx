"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_EQUIPMENT } from "@/constants/AboutContent";

/**
 * Equipment Showcase Section
 * Grid layout with images on top and text below
 */
const EquipmentShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#88a9c3] text-3xl md:text-4xl lg:text-5xl font-normal">
            Discover our equipment
          </h2>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto"
        >
          {ABOUT_EQUIPMENT.equipment.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg bg-white">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3 text-center md:text-left">
                <h3 className="text-[#88a9c3] text-2xl md:text-3xl font-normal">
                  {item.name}
                </h3>
                <p className="text-[#5a7a94] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;
