"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Final CTA Section
 * Dark background with compelling call-to-action
 */
const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="h-64 bg-cover bg-center md:h-[500px]"
          style={{ backgroundImage: 'url("/images/12.jpg")' }}
        ></div>
        <div
          className="h-64 bg-cover bg-center md:h-[500px]"
          style={{ backgroundImage: 'url("/images/5.jpg")' }}
        ></div>
      </div>
      <div className="relative z-10 bg-[#15467d] py-20 text-white md:py-32">
        {" "}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="-ml-40 space-y-2 text-center md:text-left"
            >
              <h2 className="font-accent text-2xl font-medium text-white md:text-5xl">
                I would like to get in touch.
              </h2>
              <p className="font-accent text-[25px] text-white">
                Or schedule a visit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-12 w-40 rounded-full bg-gradient-to-l from-[#94b0c9] via-white to-white px-10 py-4 text-base font-semibold text-[#15467d] shadow-md transition-all duration-300 ease-in-out hover:border hover:border-white hover:text-white hover:opacity-80 hover:shadow-lg"
                >
                  Contact
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
