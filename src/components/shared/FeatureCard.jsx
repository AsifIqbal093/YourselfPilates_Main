"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  title,
  description,
  icon,
  image,
  accent = false,
  overlayColor,
  textColor = "#15467d",
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
        "group relative h-[378px] overflow-hidden rounded-[26px] p-8 md:p-10",
        "flex flex-col justify-end",
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
            style={{ opacity: 0.3 }}
          />
          <div
            className={cn("absolute inset-0")}
            style={{
              backgroundColor: overlayColor ? overlayColor : "#5d8fb6ff",
              opacity: 0.35,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div
        className="relative z-10 max-w-[352px] space-y-4"
        style={{ bottom: "4rem", color: textColor }}
      >
        {icon && (
          <div
            className="flex h-12 w-12 items-center justify-center"
            style={{ color: textColor }}
          >
            {icon}
          </div>
        )}

        <h3
          className="text-3xl leading-tight font-semibold"
          style={{ color: textColor }}
        >
          {title}
        </h3>

        {description && (
          <p
            className="text-base leading-relaxed opacity-90"
            style={{ color: textColor }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Decorative Element */}
      <div
        className={cn(
          "absolute -right-12 -bottom-12 h-48 w-48 rounded-full opacity-10",
          "transition-transform duration-500 group-hover:scale-110",
          accent ? "bg-white" : "bg-primary"
        )}
      />
    </motion.div>
  );
};

export default FeatureCard;
