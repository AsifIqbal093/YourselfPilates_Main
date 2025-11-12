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
    <section className="relative bg-secondary py-20 md:py-32 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-accent uppercase tracking-wider text-sm font-semibold">
              Comece Hoje
            </p>
            <h2 className="text-white font-normal text-3xl md:text-5xl leading-tight">
              Transforme o seu trabalho como instrutor de Pilates
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Tenha acesso a um espaço profissional, totalmente equipado, sem
              compromissos fixos. A liberdade que procura para ensinar ao seu
              estilo.
            </p>
          </motion.div>

          {/* Right Column - CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 md:justify-end"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-button hover:opacity-90 rounded-2xl text-base px-8 py-6"
            >
              <Link href="/agendar-espaco">Agendar Espaço</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary rounded-2xl text-base px-8 py-6"
            >
              <Link href="/sobre">Saber Mais</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
};

export default FinalCTA;
