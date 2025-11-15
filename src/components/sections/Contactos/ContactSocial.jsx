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
  <section className="bg-[#edf2f6] py-12 md:py-16" style={{ fontFamily: 'var(--font-accent)' }}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-4xl flex items-center justify-between"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-normal text-[#15467d]">
            Visite as nossas redes sociais
          </h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-end"
        >
          <a
            href={CONTACT_INFO.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label={CONTACT_INFO.social.instagram.label}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#15467d] shadow-lg transition-transform duration-300 hover:scale-110 md:h-10 md:w-10">
              <InstagramIcon className="text-white group-hover:text-white h-4 w-4 md:h-4 md:w-4 transition-colors duration-300" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
};

export default ContactSocial;
