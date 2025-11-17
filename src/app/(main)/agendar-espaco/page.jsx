import React from "react";
import BookingHero from "@/components/sections/booking/BookingHero";
import AmenitiesGrid from "@/components/sections/booking/AmenitiesGrid";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import PackagesListing from "@/components/shared/PackagesListing";
import BookingIntro from "@/components/sections/booking/BookingIntro";
import PackageGrid from "@/components/sections/booking/PackageGrid";
import BookingCTA from "@/components/sections/booking/BookingCTA";

export const metadata = {
  title: "Agendar Espaço - Yourself Pilates",
  description:
    "Agende as suas aulas de acordo com a sua agenda e dos seus alunos, de forma flexível. Escolha um dos packs disponíveis.",
  icons: {
    icon: "/HeaderIcon.png",
  },
};

export default function AgendarEspacoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner Image & Info Cards */}
      <BookingHero />

      {/* Amenities Grid */}
      {/* <AmenitiesGrid /> */}
      <FeaturesGrid />
      <PackagesListing
        title="Agendar o espaço"
        subtitle="Agende as suas aulas de acordo com a sua agenda e dos seus alunos, de forma flexível.
        Fortaleça a relação com os seus alunos e garanta a fidelização de futuros alunos."
      />
      {/* Booking Introduction */}
      {/* <BookingIntro /> */}

      {/* Pricing Packages */}
      {/* <PackageGrid /> */}

      {/* Contact CTA */}
      <BookingCTA />
    </div>
  );
}
