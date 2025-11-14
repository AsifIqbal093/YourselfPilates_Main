"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Brand Introduction Section
 * Two-column layout with logo and company description
 */
const BrandIntroduction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Column - Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <Image
              src="/images/Logo.png"
              alt="YourSelf Pilates"
              width={303}
              height={56}
              className="h-auto w-auto max-w-[250px] md:max-w-[303px]"
            />
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[455px] space-y-6 md:mx-0"
          >
            <p className="text-secondary text-base leading-relaxed">
              Na Yourself Pilates, acreditamos na liberdade de ensinar ao seu
              estilo, com qualidade e estrutura de excelência. Um espaço pensado
              para quem quer oferecer mais, com flexibilidade e total controle
              sobre o seu próprio trabalho.
            </p>

            {/* CTA Link */}
            <Link
              href="/sobre"
              className="text-secondary hover:text-primary hover:decoration-primary group inline-block text-lg font-normal underline decoration-2 underline-offset-4 transition-all duration-200"
            >
              Saber mais sobre a YourSelf
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroduction;
