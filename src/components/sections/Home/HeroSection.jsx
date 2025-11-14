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
    <section className="relative bg-gradient-primary py-16 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:pr-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3 -ml-4 md:-ml-6 lg:-ml-28"
            >
              <LocationDotIcon className="w-5 h-5" />
              <span className=" text-lg font-[100] text-[#88a9c3] font-display">
              LOCALIZADO NAS CALDAS DA RAINHA
              </span>
            </motion.div>

            <motion.h1
              className="flex w-full -ml-4 md:-ml-6 lg:-ml-28 font-accent"
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
                className="rounded-[29px] border-2 border-[#ffffff] text-[#ffffff] bg-[#f6f9fb] hover:bg-[#104c88] hover:text-white transition-colors duration-300 -ml-4 md:-ml-6 lg:-ml-28"
              >
                <Link
                  href="/agendar-espaco"
                  className="flex items-center space-x-2"
                >
                  <span>Agendar o Espaço</span>
                  <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex w-full mt-60 -ml-4 md:-ml-6 lg:-ml-58 items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-[68px] h-[1px] bg-[#88a9c3]" />
                <span className="text-[#15467d] text-sm font-normal whitespace-nowrap font-mono">
                  Ou ligue para o
                </span>
              </div>

              <a
                href="tel:927078842"
                className="group inline-flex items-center transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center text-[#15467d] mr-3 flex-shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="ml-9 font-normal text-xl leading-tight duration-200 text-[#104c88]">
                    927 078 842
                  </span>
                  <span className="text-xs font-normal mt-1 text-[#104c88] font-mono">
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
            className="relative flex flex-col sm:flex-row items-start gap-6 pt-12"
          >
            <div className="w-full sm:w-1/2 flex-shrink-0">
              <Image
                src="/images/15.jpg"
                alt="Yourself Pilates Studio Interior"
                width={400}
                height={500}
                className="rounded-[170px] shadow-xl"
                priority
              />
            </div>

            <div className="w-full sm:w-auto flex-shrink-0">
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

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <BrandIntroduction />
    </section>
  );
};

export default HeroSection;
