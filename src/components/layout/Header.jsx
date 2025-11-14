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
			className={`absolute top-3 left-8 right-12 z-50 transition-all duration-200 ${
				isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
			}`}
		>
			<div className="w-full px-6 lg:px-12">
				<div className="flex items-center justify-between py-4">
				<Link href="/home" className="cursor-pointer">
					<motion.div
						style={{
							display: "inline-block",
							transformOrigin: "bottom left", 
						}}
						whileHover={{
							transform: "skewX(-12deg)", 
						}}
						transition={{ duration: 1.0, ease: "easeOut" }}
					>
						<Image
							src="/images/Logo.png"
							alt="YourSelf Pilates"
							width={200}
							height={60}
							className="h-12 md:h-12 w-auto"
							priority
						/>
					</motion.div>
				</Link>

          {!isMobile && (
            <div className="flex items-center space-x-8">
              <Navigation />

              <a
                href="tel:927078842"
                className="flex items-center justify-center space-x-2 bg-[#f3f6f9] rounded-2xl py-4.5 px-4 hover:scale-[1.10] transition-all duration-2000"
              >
                <PhoneCall className="w-5 h-5 text-[#88a9c3]" />
                <div className="flex flex-col items-center leading-none text-center">
                  <span className="text-[18px] font-medium text-[#23498d]">
                    927 078 842
                  </span>
                  <span className="text-[10px] text-[#15467d] mt-0.5">
                    (Chamada para a rede móvel nacional)
                  </span>
                </div>
              </a>
            </div>
          )}

          {isMobile && <MobileMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
