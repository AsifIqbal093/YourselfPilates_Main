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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              className="w-auto h-auto max-w-[250px] md:max-w-[303px]"
            />
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-[455px] mx-auto md:mx-0"
          >
            <p className="text-secondary text-base leading-relaxed">
              Na <strong>Yourself Pilates</strong>, acreditamos na liberdade de
              ensinar ao seu estilo. Oferecemos um espaço totalmente equipado
              com aparelhos de qualidade premium, onde profissionais de Pilates
              podem desenvolver o seu trabalho de forma autónoma e flexível.
            </p>
            <p className="text-secondary text-base leading-relaxed">
              Um ambiente profissional, sem compromissos fixos, ideal para quem
              valoriza a independência e a qualidade no ensino de Pilates.
            </p>

            {/* CTA Link */}
            <Link
              href="/sobre"
              className="inline-block text-lg text-secondary font-normal underline decoration-2 underline-offset-4 hover:text-primary hover:decoration-primary transition-all duration-200 group"
            >
              Saber mais sobre a YourSelf
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroduction;
