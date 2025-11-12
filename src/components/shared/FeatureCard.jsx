"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * FeatureCard Component
 * Large card with background image used in Benefits section
 *
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {ReactNode} icon - Icon component
 * @param {string} image - Image path (optional)
 * @param {boolean} accent - Use accent color scheme
 * @param {string} className - Additional CSS classes
 */
const FeatureCard = ({
  title,
  description,
  icon,
  image,
  accent = false,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative min-h-[378px] rounded-[26px] p-8 md:p-10 overflow-hidden group",
        "flex flex-col justify-end",
        accent ? "bg-gradient-button" : "bg-secondary",
        className
      )}
    >
      {/* Background Image with Overlay */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className={cn(
              "absolute inset-0",
              accent
                ? "bg-gradient-to-br from-primary/80 to-accent/70"
                : "bg-secondary/80"
            )}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 space-y-4 text-white max-w-[352px]">
        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center text-white">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-3xl font-semibold leading-tight">{title}</h3>

        {/* Description */}
        {description && (
          <p className="text-base leading-relaxed opacity-90">{description}</p>
        )}
      </div>

      {/* Decorative Element */}
      <div
        className={cn(
          "absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-10",
          "transition-transform duration-500 group-hover:scale-110",
          accent ? "bg-white" : "bg-primary"
        )}
      />
    </motion.div>
  );
};

export default FeatureCard;
