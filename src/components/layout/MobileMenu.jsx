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
          className="text-primary hover:bg-primary/10 h-10 w-10"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full p-0 sm:max-w-md">
        {/* Header */}
        <SheetHeader className="border-b p-6 pb-4 text-left">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-secondary text-xl font-medium">
              Menu
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted hover:text-secondary h-8 w-8"
              >
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1 p-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center rounded-lg px-4 py-3 text-base font-normal transition-all duration-200 ${
                    isActive
                      ? "bg-primary font-medium text-white"
                      : "text-secondary hover:bg-primary/10 hover:text-primary"
                  } `}
                >
                  {item.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <Separator className="mx-6" />

        {/* Contact Information */}
        <div className="space-y-4 p-6">
          <h3 className="text-secondary text-sm font-medium">
            Informações de Contacto
          </h3>

          {/* Phone */}
          <a
            href="tel:927078842"
            className="hover:bg-primary/5 group flex items-start space-x-3 rounded-lg p-3 transition-colors duration-200"
          >
            <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 group-hover:text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-secondary group-hover:text-primary text-sm font-medium transition-colors duration-200">
                927 078 842
              </span>
              <span className="text-muted text-xs">
                Chamada para rede móvel nacional
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@yourselfpilates.pt"
            className="hover:bg-primary/5 group flex items-start space-x-3 rounded-lg p-3 transition-colors duration-200"
          >
            <div className="bg-primary/10 text-primary group-hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 group-hover:text-white">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-secondary group-hover:text-primary text-sm font-medium transition-colors duration-200">
                Email
              </span>
              <span className="text-muted text-xs">
                info@yourselfpilates.pt
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start space-x-3 rounded-lg p-3">
            <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-secondary text-sm font-medium">
                Localização
              </span>
              <span className="text-muted text-xs">
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
