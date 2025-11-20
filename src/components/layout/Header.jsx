"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-transparent ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        {/* Mobile */}
        <div className="flex flex-col items-start space-y-4 py-4 md:hidden">
          <div className="flex w-full justify-center">
            <Link href="/home">
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
                  className="h-12 w-auto"
                  priority
                />
              </motion.div>
            </Link>
          </div>

          <div className="flex w-full justify-center">
            <a
              href="tel:927078842"
              className="flex items-center justify-center space-x-2 rounded-2xl bg-[rgba(232,233,239,0.5)] px-4 py-4 transition-all duration-200 hover:scale-105"
            >
              <PhoneCall className="h-5 w-5 text-[#88a9c3]" />
              <div className="flex flex-col text-center leading-none">
                <span className="text-[18px] font-medium text-[#23498d]">
                  927 078 842
                </span>
                <span className="mt-0.5 text-[10px] text-[#15467d]">
                  (Chamada para a rede móvel nacional)
                </span>
              </div>
            </a>
          </div>

          <div className="flex w-full justify-start">
            <MobileMenu />
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden flex-col items-center space-y-4 py-6 md:flex lg:hidden">
          <Link href="/home">
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
                className="h-12 w-auto"
                priority
              />
            </motion.div>
          </Link>

          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            <Navigation />
            <a
              href="tel:927078842"
              className="flex items-center justify-center space-x-2 rounded-2xl bg-[rgba(232,233,239,0.5)] px-4 py-4 transition-all duration-200 hover:scale-105"
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
        </div>

        {/* Desktop */}
        <div className="hidden items-center justify-between py-4 lg:flex">
          <Link href="/home">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
