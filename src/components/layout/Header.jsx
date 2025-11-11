"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform duration-200 hover:scale-[1.02]"
          >
            <Image
              src="/images/Logo.png"
              alt="YourSelf Pilates"
              width={177}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              <Navigation />

              {/* Phone Number */}
              <a
                href="tel:927078842"
                className="group flex items-center space-x-3 transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-secondary leading-none">
                    927 078 842
                  </span>
                  <span className="text-[10px] text-muted mt-0.5 leading-none">
                    (Call to the national mobile network)
                  </span>
                </div>
              </a>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && <MobileMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
