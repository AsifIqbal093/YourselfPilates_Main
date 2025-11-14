"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "@/components/icons/CustomIcons";
import { CONTACT_INFO } from "@/constants/ContactInfo";

/**
 * Contact Info Section
 * Displays phone and email contact information in icon boxes
 */
const ContactInfo = () => {
  // Email Icon Component
  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52.926"
      height="40.326"
      viewBox="0 0 52.926 40.326"
      className="w-12 h-12"
    >
      <path
        d="M47.295,0H5.635A5.444,5.444,0,0,0,0,5.234v31.78a3.248,3.248,0,0,0,2.157,3l.161.064a3.7,3.7,0,0,0,3.813-.7l5.228-4.856a8.342,8.342,0,0,1,5.663-2.176H47.294a5.443,5.443,0,0,0,5.632-5.231V5.235A5.443,5.443,0,0,0,47.295,0M40.548,22.127H10.892V19.153H40.548a1.487,1.487,0,0,1,0,2.974m0-9.885H10.892V9.268H40.548a1.487,1.487,0,0,1,0,2.974"
        fill="#88a9c3"
      />
    </svg>
  );

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
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-1 max-w-5xl mx-auto">

          {/* Phone Contact Box */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-[17px] p-8 w-100 "
          >
            <a
              href={`tel:${CONTACT_INFO.phone.formatted}`}
              className="flex items-start space-x-6 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center">
                  <PhoneIcon className="w-full h-full text-[#88a9c3] " />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-secondary mb-3 ">
                  {CONTACT_INFO.phone.label}
                </h3>
                <p className="text-lg font-medium text-secondary mb-1">
                  {CONTACT_INFO.phone.number}
                </p>
                <p className="text-xs text-gray-600">
                  {CONTACT_INFO.phone.note}
                </p>
              </div>
            </a>
          </motion.div>

          {/* Email Contact Box */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-[17px] p-8 w-100 "
          >
            <a
              href={`mailto:${CONTACT_INFO.email.address}`}
              className="flex items-start space-x-6 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center">
                  <EmailIcon />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-secondary mb-3 ">
                  {CONTACT_INFO.email.label}
                </h3>
                <p className="text-lg font-medium text-secondary break-all g">
                  {CONTACT_INFO.email.address}
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
