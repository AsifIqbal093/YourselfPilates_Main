"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const LocationPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-8 w-8 text-[#15467d]"
    fill="currentColor"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const SquareClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-8 w-8"
  >
    {/* Define a mask for the hands */}
    <mask id="hands-mask">
      {/* Full opaque (white) rectangle = visible */}
      <rect x="0" y="0" width="24" height="24" fill="white" />
      {/* Hands cut out = transparent */}
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="7"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="12"
        x2="15"
        y2="14"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </mask>

    {/* Blue square using mask */}
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      fill="#15467d"
      mask="url(#hands-mask)"
    />
  </svg>
);

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
    <section className="relative w-full overflow-visible pb-40 md:pb-48">
      {/* Hero Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[500px] md:h-[700px] lg:h-[800px]"
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

        <div className="absolute right-0 -bottom-20 left-0 px-4 md:-bottom-24 md:px-8 lg:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
          >
            {/* Location Card */}
            <Card
              className="relative min-h-[180px] overflow-hidden border-none bg-cover bg-center shadow-lg md:min-h-[220px] lg:min-h-[260px]"
              style={{ backgroundImage: "url('/images/5.jpg')" }}
            >
              <div className="absolute inset-0 bg-[#90adc4]/90" />

              <CardContent className="relative mt-9 flex items-center gap-4 p-6">
                <div className="mb-19 flex h-12 w-12 shrink-0 items-center justify-center">
                  <LocationPinIcon />
                </div>
                <div className="text-left">
                  <p className="font-heading text-lg font-medium text-white md:text-xl lg:text-2xl">
                    Localizado
                  </p>
                  <p className="font-heading text-base font-medium text-white md:text-lg lg:text-2xl">
                    no centro das
                  </p>
                  <p className="font-heading text-base font-medium text-white md:text-lg lg:text-2xl">
                    Caldas da Rainha
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card
              className="relative overflow-hidden border-none bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('/images/On/5.png')" }}
            >
              <div className="absolute inset-0 bg-[#90adc4]/90" />

              <CardContent className="relative mt-9 flex items-center gap-4 p-6">
                <div className="mb-19 flex h-12 w-12 shrink-0 items-center justify-center">
                  <SquareClockIcon />{" "}
                </div>
                <div className="text-left">
                  <p className="font-heading text-lg font-medium text-white md:text-xl lg:text-2xl">
                    Disponível de
                  </p>
                  <p className="font-heading text-lg font-medium text-white md:text-xl lg:text-2xl">
                    Segunda a Sábado
                  </p>
                  <p className="font-heading text-lg font-medium text-white md:text-xl lg:text-2xl">
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
