import React from "react";
import AboutHero from "@/components/sections/Sobre/AboutHero";
import AboutIntro from "@/components/sections/Sobre/AboutIntro";
import AboutFeatures from "@/components/sections/Sobre/AboutFeatures";
import EquipmentShowcase from "@/components/sections/Sobre/EquipmentShowcase";
import BenefitsGrid from "@/components/sections/Sobre/BenefitsGrid";
import ContactLocation from "@/components/sections/Contactos/ContactLocation";
import ContactSocial from "@/components/sections/Contactos/ContactSocial";
import { ABOUT_SEO } from "@/constants/AboutContent";

export const metadata = {
  title: ABOUT_SEO.title,
  description: ABOUT_SEO.description,
  keywords: ABOUT_SEO.keywords,
};

/**
 * About Page (Sobre)
 * Complete page showcasing YourSelf Pilates story, features, equipment, and benefits
 */
const SobrePage = () => {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutIntro />
      <AboutFeatures />
      <EquipmentShowcase />
      <BenefitsGrid />
      <ContactLocation />
      <ContactSocial />
    </main>
  );
};

export default SobrePage;
