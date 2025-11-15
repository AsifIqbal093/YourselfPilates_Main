import React from "react";
import HeroSection from "@/components/sections/Home/HeroSection";
// import BrandIntroduction from "@/components/sections/Home/BrandIntroduction";
import SectionDivider from "@/components/shared/SectionDivider";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import ImageCarousel from "@/components/shared/ImageCarousel";
import PackagesListing from "@/components/sections/Home/PackagesListing";
import BenefitsCards from "@/components/sections/Home/BenefitsCards";
import FinalCTA from "@/components/sections/Home/FinalCTA";
import Availibility from "@/components/sections/Home/Availability";

/**
 * Home Page - YourSelf Pilates
 * Complete landing page with all sections
 */
export const metadata = {
  title: "YourSelf Pilates | Cowork de Pilates nas Caldas da Rainha",
  description:
    "Cowork de Pilates exclusivo para profissionais em equipamentos. Espaço totalmente equipado com aparelhos premium, internet, ar condicionado e mais. Caldas da Rainha.",
  keywords:
    "pilates, cowork, caldas da rainha, estúdio pilates, aluguer espaço pilates, equipamentos pilates",
};

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Main landing with CTAs and images */}
      <HeroSection />

      {/* Brand Introduction - Logo and company description */}
      {/* <BrandIntroduction /> */}

      {/* Section Divider - "O seu studio de Pilates" */}
      <SectionDivider title="O seu studio de Pilates" />

      {/* Features Grid - 6 feature boxes */}
      <FeaturesGrid />

      {/* Image Carousel - Studio photos */}
      <ImageCarousel />

      {/* Packages Listing - 3 pricing cards */}
      <PackagesListing />

      {/* Benefits Cards - 2 large benefit cards */}
      <BenefitsCards />

      <Availibility />
      {/* Final CTA - Dark section with call to action */}
      <FinalCTA />
    </main>
  );
};

export default HomePage;
