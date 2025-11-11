import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Agendar Espaço", href: "/agendar-espaco" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contactos", href: "/contactos" },
  ];

  const legalLinks = [
    { name: "Livro de Reclamações", href: "#" },
    { name: "Política de Privacidade", href: "/politica-de-privacidade" },
    { name: "Termos e Condições", href: "/termos-e-condicoes" },
    {
      name: "Resolução de Litígios",
      href: "https://justica.gov.pt/Resolucao-de-litigios",
      external: true,
    },
    {
      name: "Prazos e Condições de Entrega dos Produtos / Prestação de Serviços",
      href: "/prazos-e-condicoes-de-entrega-dos-produtos",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#88A9C310] to-[#88A9C350] pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo and Navigation */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-block transition-transform duration-200 hover:scale-[1.02]"
            >
              <Image
                src="/images/Logo.png"
                alt="YourSelf Pilates"
                width={278}
                height={75}
                className="h-auto w-48 md:w-56"
              />
            </Link>

            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary text-sm font-normal hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service/Phone */}
          <div className="space-y-4">
            <h3 className="text-secondary font-normal text-xl">Atendimento</h3>
            <a
              href="tel:927078842"
              className="group inline-flex items-start space-x-3 transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#15467d]/10 text-[#15467d] group-hover:bg-[#15467d] group-hover:text-white transition-all duration-200 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-secondary font-medium text-base leading-tight">
                  927 078 842
                </span>
                <span className="text-muted text-xs mt-1">
                  (Chamada para a rede móvel nacional)
                </span>
              </div>
            </a>
          </div>

          {/* Schedule and Location */}
          <div className="space-y-4">
            <h3 className="text-secondary font-normal text-xl">
              Horário e Localização
            </h3>
            <div className="space-y-3 text-sm text-secondary">
              <p className="leading-relaxed">
                Segunda a Sábado
                <br />
                das 8h às 20h
              </p>
              <p className="leading-relaxed">
                Rua Diário de Notícias nº 09,
                <br />
                2500-107 Caldas da Rainha
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-secondary font-normal text-xl">
              Redes Sociais
            </h3>
            <a
              href="https://www.instagram.com/yourselfpilates/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Legal Links - Desktop (Horizontal) */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
          {legalLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-xs hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-secondary text-xs hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )}
              {index < legalLinks.length - 1 && (
                <span className="text-muted">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Legal Links - Mobile (Vertical) */}
        <div className="flex md:hidden flex-col space-y-3 mb-6">
          {legalLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-sm hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary text-sm hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-secondary text-xs md:text-sm">
            © {currentYear} – All rights Reserved. Powered by:{" "}
            <a
              href="https://oonify.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <span className="font-medium text-[#15467d]">OONIFY</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
