"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CONTACT_FORM_CONFIG } from "@/constants/ContactInfo";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    consentimento: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: CONTACT_FORM_CONFIG.messages.success,
        });
        setFormData({
          nome: "",
          email: "",
          mensagem: "",
          consentimento: false,
        });
      } else {
        setMessage({
          type: "error",
          text: data.message || CONTACT_FORM_CONFIG.messages.error,
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: CONTACT_FORM_CONFIG.messages.error,
      });
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#e8f1fa] via-[#f0f5fb] to-[#ffffff] py-12 md:py-16 lg:py-24 overflow-hidden min-h-screen">

      <div className="absolute top-0 left-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/images/Contact.png"
          alt="Contact - YourSelf Pilates"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Empty left column for spacing on large screens */}
          <div className="hidden lg:block"></div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full order-1 lg:order-2 flex flex-col justify-start h-full pt-24"
          >

            {/* Heading */}
            <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
              <p className="text-[#88a9c3] text-sm md:text-base mb-2 font-normal">
                Schedule a visit or get in touch.
              </p>
              <h1 className="text-[#15467d] text-4xl md:text-5xl lg:text-6xl leading-tight font-accent">
                Contact
              </h1>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Nome */}
                <div>
                  <Input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder={CONTACT_FORM_CONFIG.fields.nome.placeholder}
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-0 pb-3 pt-2 border-0 border-b-2 border-[#c8d4e0] rounded-none focus:border-transparent focus:ring-0 text-[#3b3d42] text-base placeholder:text-[#8b9daf]"
                  />
                </div>

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={CONTACT_FORM_CONFIG.fields.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-0 pb-3 pt-2 border-0 border-b-2 border-[#c8d4e0] rounded-none focus:border-transparent focus:ring-0 text-[#3b3d42] text-base placeholder:text-[#8b9daf]"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    placeholder={CONTACT_FORM_CONFIG.fields.mensagem.placeholder}
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-0 pb-3 pt-2 border-0 border-b-2 border-[#c8d4e0] rounded-none focus:border-transparent focus:ring-0 text-[#3b3d42] text-base placeholder:text-[#8b9daf] resize-none"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    name="consentimento"
                    id="consentimento"
                    checked={formData.consentimento}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 rounded accent-[#15467d] border-[#15467d] focus:ring-[#15467d]"
                  />

                  <label
                    htmlFor="consentimento"
                    className="text-sm text-[#88a9c3] leading-relaxed cursor-pointer"
                  >
                    I accept the{" "}
                    <Link href="/termos-e-condicoes" className="text-[#88a9c3]">
                      terms and conditions
                    </Link>{" "}
                    and the{" "}
                    <Link href="/politica-de-privacidade" className="text-[#88a9c3]">
                      privacy policy
                    </Link>
                    .
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-40 h-12 rounded-[29px] text-base bg-[#15467d] text-white hover:bg-[#15467d] focus:bg-[#15467d] active:bg-[#15467d] transition-none"
                  size="lg"
                >
                  {loading ? "Sending..." : "To send"}
                </Button>
                
                {/* Success/Error Message */}
                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-sm ${message.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                  >
                    {message.text}
                  </motion.div>
                )}

              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
