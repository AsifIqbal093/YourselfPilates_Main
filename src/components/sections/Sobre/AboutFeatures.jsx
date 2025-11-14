"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrophyIcon,
  WifiIcon,
  BuildingIcon,
  AmenitiesIcon,
  YLogoIcon,
} from "@/components/icons/CustomIcons";
import { ABOUT_FEATURES } from "@/constants/AboutContent";

/**
 * About Features Section
 * 4 icon boxes showing what the space offers
 */
const AboutFeatures = () => {
  // Icon mapping
  const iconMap = {
    trophy: TrophyIcon,
    wifi: WifiIcon,
    building: BuildingIcon,
    amenities: AmenitiesIcon,
  };

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
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header with Y Logo Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 space-y-6"
        >
          {/* Y Logo Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#88a9c3]/10">
              <YLogoIcon className="w-10 h-10 md:w-12 md:h-12 text-[#88a9c3] opacity-60" />
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-[#15467d] text-3xl md:text-4xl lg:text-5xl font-semibold">
            {ABOUT_FEATURES.sectionTitle}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {ABOUT_FEATURES.features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[26px] p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Icon with circular background */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-[#88a9c3]/10">
                    <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-[#15467d]" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-[#15467d] text-lg md:text-xl font-semibold leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[#3b3d42] text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFeatures;
