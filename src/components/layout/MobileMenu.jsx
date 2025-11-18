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
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="h-10 w-10 text-[#88a9c3]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <nav className="fixed top-[210px] right-0 left-0 z-50 flex w-full flex-col bg-white shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-heading px-6 py-4 text-[20px] transition-colors duration-200 ${
                pathname === item.href ? "text-[#b2c7d8]" : "text-[#23498d]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
