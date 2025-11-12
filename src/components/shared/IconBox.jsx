"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * IconBox Component
 * Used in Features Grid to display feature with icon, title, and description
 *
 * @param {ReactNode} icon - Icon component to display
 * @param {string} title - Feature title
 * @param {string} description - Feature description
 * @param {string} className - Additional CSS classes
 */
const IconBox = ({ icon, title, description, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col items-center text-center space-y-4 p-6",
        className
      )}
    >
      {/* Icon Container with circular background */}
      <div className="flex items-center justify-center mb-2">
        <div className="text-[#15467d]">{icon}</div>
      </div>

      {/* Title and Description */}
      <div className="space-y-2">
        <h3 className="text-secondary font-normal text-base md:text-lg leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-secondary text-sm md:text-base leading-relaxed opacity-80">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default IconBox;
