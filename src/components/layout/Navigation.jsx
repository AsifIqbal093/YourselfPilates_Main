"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              relative text-sm font-normal transition-colors duration-200
              ${
                isActive
                  ? "text-secondary font-medium"
                  : "text-muted hover:text-secondary"
              }
              after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary
              after:transition-all after:duration-200
              ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
            `}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
