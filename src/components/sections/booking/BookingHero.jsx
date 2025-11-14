"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

/**
 * Booking Hero Section
 * Full-width hero banner with overlay quote and info cards at the bottom
 */
const BookingHero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[500px] md:h-[600px] lg:h-[650px]"
      >
        <Image
          src="/images/yourself-pilates-booking-page.jpg"
          alt="Agendar Espaço - Yourself Pilates Studio"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        {/* Quote Text Overlay - Left Side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          className="absolute top-1/4 left-8 max-w-md md:left-16 lg:left-24"
        >
          <p className="text-secondary text-2xl leading-relaxed font-light md:text-3xl lg:text-4xl">
            &ldquo;Um velho habilidade e um jovem mentoria com um jovem&rdquo;
          </p>
        </motion.div>

        {/* Info Cards Overlay - Bottom */}
        <div className="absolute right-0 bottom-8 left-0 px-4 md:bottom-12 md:px-8 lg:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
          >
            {/* Location Card */}
            <Card className="border-none bg-[#88a9c3]/80 shadow-lg backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/30">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white md:text-base">
                    Localizado
                  </p>
                  <p className="text-sm text-white/90">no centro das</p>
                  <p className="text-base font-semibold text-white md:text-lg">
                    Caldas da Rainha
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-none bg-[#88a9c3]/80 shadow-lg backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/30">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white md:text-base">
                    Disponível de
                  </p>
                  <p className="text-base font-semibold text-white md:text-lg">
                    Segunda a Sábado
                  </p>
                  <p className="text-base font-semibold text-white md:text-lg">
                    das 8h às 20h
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BookingHero;
