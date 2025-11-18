"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 transition-all duration-200 ${isMobile ? "relative" : "absolute top-3 right-12 left-8"} ${isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="w-full px-6 lg:px-12">
        {isMobile ? (
          <div className="flex flex-col items-center space-y-4 py-4">
            {/* Logo */}
            <Link href="/home" className="cursor-pointer">
              <motion.div
                style={{
                  display: "inline-block",
                  transformOrigin: "bottom left",
                }}
                whileHover={{ transform: "skewX(-12deg)" }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <Image
                  src="/images/Logo.png"
                  alt="YourSelf Pilates"
                  width={200}
                  height={60}
                  className="h-12 w-auto md:h-12"
                  priority
                />
              </motion.div>
            </Link>

            {/* Phone Call Box */}
            <a
              href="tel:927078842"
              className="flex items-center justify-center space-x-2 rounded-2xl bg-[rgba(232,233,239,0.5)] px-4 py-4.5 transition-all duration-200 hover:scale-110"
            >
              <PhoneCall className="h-5 w-5 text-[#88a9c3]" />
              <div className="flex flex-col items-center text-center leading-none">
                <span className="text-[18px] font-medium text-[#23498d]">
                  927 078 842
                </span>
                <span className="mt-0.5 text-[10px] text-[#15467d]">
                  (Chamada para a rede móvel nacional)
                </span>
              </div>
            </a>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        ) : (
          <div className="flex items-center justify-between py-4">
            <Link href="/home" className="cursor-pointer">
              <motion.div
                style={{
                  display: "inline-block",
                  transformOrigin: "bottom left",
                }}
                whileHover={{ transform: "skewX(-12deg)" }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <Image
                  src="/images/Logo.png"
                  alt="YourSelf Pilates"
                  width={200}
                  height={60}
                  className="h-12 w-auto md:h-12"
                  priority
                />
              </motion.div>
            </Link>

            <div className="flex items-center space-x-8">
              <Navigation />
              <a
                href="tel:927078842"
                className="flex items-center justify-center space-x-2 rounded-2xl bg-[rgba(232,233,239,0.5)] px-4 py-4.5 transition-all duration-200 hover:scale-110"
              >
                <PhoneCall className="h-5 w-5 text-[#88a9c3]" />
                <div className="flex flex-col items-center text-center leading-none">
                  <span className="text-[18px] font-medium text-[#23498d]">
                    927 078 842
                  </span>
                  <span className="mt-0.5 text-[10px] text-[#15467d]">
                    (Chamada para a rede móvel nacional)
                  </span>
                </div>
              </a>
            </div>

            <MobileMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
