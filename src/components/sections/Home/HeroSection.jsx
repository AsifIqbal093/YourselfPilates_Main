"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LocationDotIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "@/components/icons/CustomIcons";

/**
 * Hero Section - Home Page
 * Main landing section with location badge, heading, CTAs, and overlapping images
 */
const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative bg-gradient-primary py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:pr-8"
          >
            {/* Location Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              <LocationDotIcon className="w-5 h-5 text-accent" />
              <span className="text-secondary text-lg font-normal">
                Localizado nas Caldas da Rainha
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-secondary font-normal leading-[1.4] max-w-[740px]"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
              }}
            >
              Cowork de Pilates exclusivo para profissionais em equipamentos
            </motion.h1>

            {/* Primary CTA Button */}
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="rounded-[29px] group">
                <Link
                  href="/agendar-espaco"
                  className="flex items-center space-x-2"
                >
                  <span>Agendar o Espaço</span>
                  <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Divider Section */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 py-4"
            >
              <div className="w-[68px] h-[1px] bg-primary" />
              <span className="text-secondary text-sm font-normal whitespace-nowrap">
                Ou ligue para o
              </span>
            </motion.div>

            {/* Phone CTA Button */}
            <motion.div variants={itemVariants}>
              <a
                href="tel:927078842"
                className="group inline-flex items-start space-x-4 transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#15467d]/10 text-[#15467d] group-hover:bg-[#15467d] group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-secondary font-normal text-xl leading-tight group-hover:text-primary transition-colors duration-200">
                    927 078 842
                  </span>
                  <span className="text-muted text-xs mt-1">
                    (Chamada para a rede móvel nacional)
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] md:h-[600px] lg:h-[700px]"
          >
            {/* Portrait Image (Small - Behind) */}
            <div className="absolute left-0 lg:left-4 top-0 w-[45%] h-[80%] z-10">
              <div className="relative w-full h-full rounded-[140px] overflow-hidden shadow-xl">
                <Image
                  src="/images/1.jpg"
                  alt="Yourself Pilates Studio Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  priority
                />
              </div>
            </div>

            {/* Square Image (Large - Front) */}
            <div className="absolute right-0 top-[10%] lg:top-[15%] w-[65%] h-[75%] z-20">
              <div className="relative w-full h-full rounded-[140px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/2.jpg"
                  alt="Yourself Pilates Equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 65vw, (max-width: 1024px) 45vw, 35vw"
                  priority
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-accent/10 blur-xl" />
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
