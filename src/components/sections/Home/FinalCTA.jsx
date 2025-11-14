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
    <section className="bg-secondary relative overflow-hidden py-20 text-white md:py-32">
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">
              Comece Hoje
            </p>
            <h2 className="text-3xl leading-tight font-normal text-white md:text-5xl">
              Transforme o seu trabalho como instrutor de Pilates
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
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
            className="flex flex-col gap-4 md:flex-row md:justify-end"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-button rounded-2xl px-8 py-6 text-base hover:opacity-90"
            >
              <Link href="/agendar-espaco">Agendar Espaço</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:text-secondary rounded-2xl border-2 border-white px-8 py-6 text-base text-white hover:bg-white"
            >
              <Link href="/sobre">Saber Mais</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-accent/10 absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default FinalCTA;
