"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ABOUT_INTRO } from "@/constants/AboutContent";

const OvalWrapper = ({ children, side = "left", className = "" }) => {
  const shape =
    side === "left"
      ? "rounded-r-[160px] rounded-l-[0px]"
      : "rounded-l-[160px] rounded-r-[0px]";

  return (
    <div className={`relative overflow-hidden ${shape} ${className}`}>
      {children}
    </div>
  );
};

const ScrollAnimatedImage = ({ children, side }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    side === "left" ? [-150, -350] : [150, 350] // moves more as user scrolls
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.div ref={ref} style={{ x, opacity }}>
      {children}
    </motion.div>
  );
};

const AboutHero = () => {
  return (
    <section className="relative mt-[100px] w-full overflow-hidden bg-white pt-10 pb-20">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-16">
        {/* LEFT */}
        <ScrollAnimatedImage side="left">
          <OvalWrapper
            side="left"
            className="h-[230px] w-[1200px] md:h-[280px] lg:h-[280px]"
          >
            <Image
              src="/images/On/1.jpg"
              alt="Neon Pilates Sign"
              fill
              className="object-cover"
            />
          </OvalWrapper>
        </ScrollAnimatedImage>

        <ScrollAnimatedImage side="right">
          <div className="relative w-full">
            <OvalWrapper
              side="right"
              className="absolute right-0 h-[280px] w-[1200px] translate-x-[-250px]"
            >
              <Image
                src="/images/On/2.png"
                alt="Pilates Wood Texture"
                fill
                className="object-cover"
              />
            </OvalWrapper>
          </div>
        </ScrollAnimatedImage>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-16">
        <ScrollAnimatedImage side="left">
          <OvalWrapper
            side="left"
            className="h-[230px] w-[900px] md:h-[250px] lg:h-[280px]"
          >
            <Image
              src="/images/On/3.png"
              alt="Small Pilates detail"
              fill
              className="object-cover"
            />
          </OvalWrapper>
        </ScrollAnimatedImage>

        <ScrollAnimatedImage side="right">
          <div className="relative w-full">
            <OvalWrapper
              side="right"
              className="absolute right-0 h-[280px] w-[1200px] translate-x-[-400px]"
            >
              <Image
                fill
                src="/images/On/4.jpg"
                alt="Pilates Wood Texture"
                className="object-cover"
              />
            </OvalWrapper>
          </div>
        </ScrollAnimatedImage>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-16">
        <ScrollAnimatedImage side="left">
          <OvalWrapper
            side="left"
            className="h-[230px] w-[1050px] md:h-[280px] lg:h-[300px]"
          >
            <Image
              src="/images/On/5.png"
              alt="Pilates full"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-gray-500/50 opacity-80">
              <div className="relative h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72">
                <Image
                  src="/images/On/yourself-pilates-header-logo@2x.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </OvalWrapper>
        </ScrollAnimatedImage>

        <div className="flex max-w-lg items-center">
          <p className="ml-10 text-[19px] font-normal text-[#15467d]">
            {ABOUT_INTRO.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
