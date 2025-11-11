"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MobileMenu = () => {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 text-primary hover:bg-primary/10"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-md p-0">
        {/* Header */}
        <SheetHeader className="p-6 pb-4 text-left border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-medium text-secondary">
              Menu
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted hover:text-secondary"
              >
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center py-3 px-4 rounded-lg text-base font-normal
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-white font-medium"
                        : "text-secondary hover:bg-primary/10 hover:text-primary"
                    }
                  `}
                >
                  {item.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <Separator className="mx-6" />

        {/* Contact Information */}
        <div className="p-6 space-y-4">
          <h3 className="text-sm font-medium text-secondary">
            Informações de Contacto
          </h3>

          {/* Phone */}
          <a
            href="tel:927078842"
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors duration-200">
                927 078 842
              </span>
              <span className="text-xs text-muted">
                Chamada para rede móvel nacional
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@yourselfpilates.pt"
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors duration-200">
                Email
              </span>
              <span className="text-xs text-muted">
                info@yourselfpilates.pt
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start space-x-3 p-3 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-secondary">
                Localização
              </span>
              <span className="text-xs text-muted">
                Caldas da Rainha, Portugal
              </span>
            </div>
          </div>
        </div>

        <Separator className="mx-6" />

        {/* CTA Button */}
        <div className="p-6">
          <SheetClose asChild>
            <Button asChild className="w-full rounded-2xl">
              <Link href="/agendar-espaco">Agendar Agora</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
