"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BrandIntroduction from "@/components/sections/Home/BrandIntroduction";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import {
  LocationDotIcon,
  ChevronRightIcon,
} from "@/components/icons/CustomIcons";

const HeroSection = () => {
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
    <section className="bg-gradient-primary relative overflow-hidden py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:pr-8"
          >
            <motion.div
              variants={itemVariants}
              className="-ml-4 flex items-center space-x-3 md:-ml-6 lg:-ml-28"
            >
              <LocationDotIcon className="h-5 w-5" />
              <span className="font-display text-lg font-[100] text-[#88a9c3]">
                LOCALIZADO NAS CALDAS DA RAINHA
              </span>
            </motion.div>

            <motion.h1
              className="font-accent -ml-4 flex w-full md:-ml-6 lg:-ml-28"
              variants={itemVariants}
              style={{
                fontSize: "40px",
                fontWeight: "400",
                color: "#104c88ff",
                maxWidth: "500px",
                display: "-webkit-box",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              Cowork de Pilates <br />
              exclusivo para profissionais <br />
              em equipamentos
            </motion.h1>

            <motion.div variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="-ml-4 rounded-[29px] border-2 border-[#ffffff] bg-[#f6f9fb] text-[#ffffff] transition-colors duration-300 hover:bg-[#104c88] hover:text-white md:-ml-6 lg:-ml-28"
              >
                <Link
                  href="/agendar-espaco"
                  className="flex items-center space-x-2"
                >
                  <span>Agendar o Espaço</span>
                  <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-60 -ml-4 flex w-full items-center space-x-4 md:-ml-6 lg:-ml-58"
            >
              <div className="flex items-center space-x-2">
                <div className="h-[1px] w-[68px] bg-[#88a9c3]" />
                <span className="font-mono text-sm font-normal whitespace-nowrap text-[#15467d]">
                  Ou ligue para o
                </span>
              </div>

              <a
                href="tel:927078842"
                className="group inline-flex items-center transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="mr-3 flex flex-shrink-0 items-center justify-center text-[#15467d]">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="ml-9 text-xl leading-tight font-normal text-[#104c88] duration-200">
                    927 078 842
                  </span>
                  <span className="mt-1 font-mono text-xs font-normal text-[#104c88]">
                    (Chamada para a rede móvel nacional)
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex flex-col items-start gap-6 pt-12 sm:flex-row"
          >
            <div className="w-full flex-shrink-0 sm:w-1/2">
              <Image
                src="/images/15.jpg"
                alt="Yourself Pilates Studio Interior"
                width={400}
                height={500}
                className="rounded-[170px] shadow-xl"
                priority
              />
            </div>

            <div className="w-full flex-shrink-0 sm:w-auto">
              <Image
                src="/images/16.jpg"
                alt="Yourself Pilates Equipment"
                width={700}
                height={850}
                className="rounded-[100px] shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="bg-primary/5 absolute top-20 right-20 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-accent/5 absolute bottom-20 left-20 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <BrandIntroduction />
    </section>
  );
};

export default HeroSection;
