"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navigation Component
 * Desktop navigation menu with active state highlighting
 */
const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Agendar Espaço",
      href: "/agendar-espaco",
    },
    {
      name: "Sobre",
      href: "/sobre",
    },
    {
      name: "Contactos",
      href: "/contactos",
    },
  ];

  return (
    <nav className="flex items-center space-x-9 text-[19px] font-normal text-[#15467d]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-colors duration-200 hover:text-[#5380A6] ${
              isActive
                ? "font-semibold text-[#5380A6] underline"
                : "text-[#15467d]"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
