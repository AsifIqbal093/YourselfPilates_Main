"use client";

import React from "react";
import { motion } from "framer-motion";
import { LocationDotIcon } from "@/components/icons/CustomIcons";
import { CONTACT_INFO } from "@/constants/ContactInfo";

/**
 * Contact Location Section
 * Displays Google Maps embed and address information
 */
const ContactLocation = () => {
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
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl space-y-8"
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-3"
          >
            <LocationDotIcon className="text-primary h-6 w-6" />
            <h2 className="text-secondary text-center text-2xl font-normal md:text-3xl">
              {CONTACT_INFO.address.label}
            </h2>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            variants={itemVariants}
            className="h-[400px] w-full overflow-hidden rounded-[26px] shadow-lg md:h-[500px]"
          >
            <iframe
              src={CONTACT_INFO.maps.embedUrl}
              title={CONTACT_INFO.maps.label}
              aria-label={CONTACT_INFO.maps.label}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Address Text */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-secondary text-xl font-normal md:text-2xl">
              {CONTACT_INFO.address.fullAddress}
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocation;
