"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ACCESS_CONDITIONS } from "@/constants/PackagesData";
import { pt } from "date-fns/locale";

/**
 * PackageBookingForm Component
 * Simple booking form with calendar for package pages
 * Matches the design with ghost inputs, calendar, and access conditions
 */
const PackageBookingForm = ({ packageData }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    contacto: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateSelect = (dates) => {
    // Limit selection to package sessions
    if (Array.isArray(dates)) {
      setSelectedDates(dates.slice(0, packageData.sessions));
    }
  };

  const calculateTotal = () => {
    const sessionsBooked = selectedDates.length;
    return sessionsBooked * packageData.pricePerSession;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", {
      ...formData,
      dates: selectedDates,
      package: packageData.slug,
      total: calculateTotal(),
    });
  };

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Package Title Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#15467d] md:text-4xl">
          {packageData.title}
        </h1>
      </div>

      {/* Form Section */}
      <div className="rounded-lg bg-[#f5f8fa] p-8 shadow-sm md:p-12">
        {/* Subheading */}
        <h2 className="mb-6 text-center text-2xl font-light text-[#a8bfcf] md:text-3xl">
          Agenda as datas e horas
        </h2>

        {/* Description */}
        <p className="mb-4 text-center text-base text-[#5a8db8]">
          {packageData.description}
        </p>

        {/* Price */}
        <p className="mb-8 text-center text-base font-semibold text-[#15467d]">
          Preço: {packageData.pricePerSession}€/sessão
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="nome" className="sr-only">
              Nome
            </label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="border-gray-300 bg-white text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Contact Input */}
          <div>
            <label htmlFor="contacto" className="sr-only">
              Contacto
            </label>
            <Input
              id="contacto"
              name="contacto"
              type="tel"
              placeholder="Contacto"
              value={formData.contacto}
              onChange={handleInputChange}
              required
              className="border-gray-300 bg-white text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-gray-300 bg-white text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Calendar */}
          <div className="flex justify-center">
            <Calendar
              mode="multiple"
              selected={selectedDates}
              onSelect={handleDateSelect}
              locale={pt}
              className="rounded-md border bg-white"
              disabled={(date) => date < new Date()}
            />
          </div>

          {/* Price Total */}
          <div className="text-center">
            <p className="text-lg font-semibold text-[#15467d]">Preço total:</p>
            <p className="text-3xl font-bold text-[#15467d]">
              € {calculateTotal()}
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="rounded-full border-2 border-[#15467d] bg-transparent px-12 py-6 text-base font-semibold tracking-wide text-[#15467d] uppercase transition-all hover:bg-[#15467d] hover:text-white"
            >
              Agendar o Espaço
            </Button>
          </div>
        </form>
      </div>

      {/* Access Conditions */}
      <div className="mt-12">
        <h3 className="mb-6 text-center text-2xl font-bold text-[#15467d]">
          Condições de acesso
        </h3>

        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          {ACCESS_CONDITIONS.map((condition) => (
            <div key={condition.id} className="flex gap-3">
              <span className="font-bold text-[#15467d]">{condition.id}.</span>
              <p>
                {condition.highlight ? (
                  <>
                    {condition.text.split(condition.highlight)[0]}
                    <span className="font-semibold">{condition.highlight}</span>
                    {condition.text.split(condition.highlight)[1]}
                  </>
                ) : (
                  condition.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageBookingForm;
