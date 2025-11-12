import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Instagram } from "lucide-react";

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
    <footer className="bg-gradient-to-r from-[#d9e4ee] to-[#c9d7e4] pt-12 pb-6 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-4 md:space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo.png"
                alt="YourSelf Pilates"
                width={278}
                height={75}
                className="h-auto w-full max-w-[278px]"
              />
            </Link>
            <nav className="flex flex-col space-y-2 md:space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#15467d] text-base font-normal hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-end sm:space-x-16 space-y-6 sm:space-y-0 text-[#15467d] pr-0 sm:pr-8">
            <div className="flex flex-col space-y-4 sm:space-y-8 min-w-[160px] text-center sm:text-right">
              <h3 className="font-semibold text-base">Atendimento</h3>
              <h3 className="font-semibold text-base leading-snug">
                Horário e <br /> Localização
              </h3>
            </div>

            {/* Right Content */}
            <div className="flex flex-col space-y-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-3">
                <PhoneCall className="w-4 h-4 shrink-0 text-[#15467d]" />
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-base tracking-wide">
                    927&nbsp;078&nbsp;842
                  </span>
                  <span className="text-xs">
                    (Chamada para a rede móvel nacional)
                  </span>
                </div>
              </div>

              {/* Horário + Endereço */}
              <div className="text-sm space-y-2">
                <p>
                  Segunda a Sábado <br />
                  das 8h às 20h
                </p>
                <p>
                  Rua Diário de Notícias nº 09, 2500-107 <br />Caldas da Rainha
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mt-8">
          {/* Redes Sociais */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-[#15467d] text-sm font-normal">Redes Sociais</span>
            <a
              href="https://www.instagram.com/yourselfpilates/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-full bg-[#15467d] text-white hover:opacity-80 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>


          <div className="flex flex-col md:items-end items-center gap-2 md:gap-0 mt-4 md:mt-0">
            {/* Legal Links */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-y-1 md:gap-y-0 gap-x-2 text-center md:text-right">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#15467d] text-xs hover:opacity-80 transition"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#15467d] text-xs hover:opacity-80 transition"
                    >
                      {link.name}
                    </Link>
                  )}
                  {index < legalLinks.length - 1 && (
                    <span className="hidden md:inline text-[#15467d]/50 mx-1">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>


            <div className="text-right mt-2">
              <p className="text-[#15467d] text-xs md:text-sm">
                © {currentYear} – All rights Reserved. Powered by:{" "}
                <a
                  href="https://oonify.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-[#15467d] hover:opacity-80 transition"
                >
                  OONIFY
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
