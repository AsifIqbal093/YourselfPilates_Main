"use client";

import React from "react";
import { motion } from "framer-motion";
import { YLogoIcon } from "@/components/icons/CustomIcons";

/**
 * Section Divider Component
 * Centered divider with Y logo icon and section title
 *
 * @param {string} title - Section title
 * @param {string} subtitle - Optional subtitle
 */
const SectionDivider = ({ title, subtitle }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {/* Large Y Logo Icon */}
          <div className="text-accent">
            <YLogoIcon className="w-18 h-18" />
          </div>

          {/* Section Title */}
          <h2 className="text-secondary font-normal text-2xl md:text-4xl leading-tight max-w-2xl">
            {title}
          </h2>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="text-muted text-base md:text-lg max-w-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionDivider;
