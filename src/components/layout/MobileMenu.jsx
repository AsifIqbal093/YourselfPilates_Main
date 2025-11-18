"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Agendar Espaço", href: "/agendar-espaco" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contactos", href: "/contactos" },
  ];

  return (
    <div className="relative w-full">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="h-10 w-10 text-[#88a9c3]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="fixed top-[200px] right-4 left-0 z-50 flex w-full flex-col bg-white shadow-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // close menu on link click
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "font-heading text-[20px] text-[#b2c7d8]"
                    : "font-heading text-[20px] text-[#23498d]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
