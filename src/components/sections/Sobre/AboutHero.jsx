"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_INTRO } from "@/constants/AboutContent";

/**
 * About Hero Section
 * Features image collage with YourSelf Pilates branding matching WordPress layout
 */
const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full py-0 md:py-0 overflow-hidden bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-0"
      >
        {/* Row 1: Large hero image with text + Curved barrel image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Large image with text overlay */}
          <motion.div
            variants={imageVariants}
            className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden"
          >
            <Image
              src="/images/16.jpg"
              alt="YourSelf Pilates Equipment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start px-8 md:px-12 lg:px-16">
              <h1 className="text-[#d4b896] text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] leading-tight">
                YourSelf Pilates
              </h1>
            </div>
          </motion.div>

          {/* Curved barrel/equipment image */}
          <motion.div
            variants={imageVariants}
            className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden"
          >
            <Image
              src="/images/2.jpg"
              alt="Pilates Barrel Equipment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        {/* Row 2: Three equal images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <motion.div
            variants={imageVariants}
            className="relative h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden"
          >
            <Image
              src="/images/3.jpg"
              alt="Pilates Studio Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="relative h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden"
          >
            <Image
              src="/images/16.jpg"
              alt="Pilates Studio Equipment View"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="relative h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden"
          >
            <Image
              src="/images/2.jpg"
              alt="Pilates Reformer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Row 3: Image with logo overlay + Text content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image with logo overlay */}
          <motion.div
            variants={imageVariants}
            className="relative h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden bg-[#e8e8e8]"
          >
            <Image
              src="/images/15.jpg"
              alt="Pilates Session"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Logo Overlay - larger and more prominent */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 opacity-40">
                <Image
                  src="/images/Ylogo.png"
                  alt="YourSelf Logo"
                  fill
                  className="object-contain"
                  sizes="256px"
                />
              </div>
            </div>
          </motion.div>

          {/* Text content block */}
          <motion.div
            variants={imageVariants}
            className="relative h-[350px] md:h-[400px] lg:h-[450px] bg-white flex items-center justify-center px-8 md:px-12 lg:px-16"
          >
            <div className="max-w-xl">
              <p className="text-[#398ffc] text-base md:text-lg leading-relaxed">
                {ABOUT_INTRO.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
