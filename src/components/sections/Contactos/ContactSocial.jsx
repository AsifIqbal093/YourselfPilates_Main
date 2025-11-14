"use client";

import React from "react";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons/CustomIcons";
import { CONTACT_INFO } from "@/constants/ContactInfo";

/**
 * Contact Social Section
 * Displays social media links
 */
const ContactSocial = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="bg-gradient-to-br from-[#15467d] to-[#398ffc] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl space-y-8 text-center"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-normal text-white md:text-3xl">
              Visite as nossas redes sociais
            </h2>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <a
              href={CONTACT_INFO.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={CONTACT_INFO.social.instagram.label}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 hover:scale-110 md:h-20 md:w-20">
                <InstagramIcon className="text-primary group-hover:text-accent h-8 w-8 transition-colors duration-300 md:h-10 md:w-10" />
              </div>
            </a>
          </motion.div>

          {/* Social Handle (Optional) */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-white/90">
              {CONTACT_INFO.social.instagram.handle}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSocial;
