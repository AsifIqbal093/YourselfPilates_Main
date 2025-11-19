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
      name: "Prazos e Condições de Entrega",
      href: "/prazos-e-condicoes-de-entrega",
    },
    {
      name: "Resolução de Litígios",
      href: "https://justica.gov.pt/Resolucao-de-litigios",
      external: true,
    },
  ];

  return (
    <footer className="relative min-h-[400px] bg-gradient-to-r from-[#d9e4ee] to-[#c9d7e4] pt-24 pb-12">
      <div className="mx-auto max-w-[1600px] px-0">
        <div className="mb-24 flex flex-col items-start justify-between gap-10 px-4 md:flex-row md:px-6 lg:px-8">
          <div className="flex-shrink-0 flex-grow-0 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/123.png"
                alt="YourSelf Pilates"
                width={278}
                height={75}
                className="h-auto w-full max-w-[278px] -translate-x-16 transition-transform duration-500 ease-in-out hover:translate-x-1"
              />
            </Link>
            <nav className="mt-10 flex flex-col space-y-3 text-right md:ml-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary w-fit text-2xl font-normal text-[#15467d] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="ml-160 flex flex-shrink-0 justify-start gap-16 text-[#15467d] md:gap-24">
            <div className="flex flex-shrink-0 flex-col space-y-4 pt-10 text-left">
              <h3 className="text-base font-semibold">Atendimento</h3>
              <h3 className="mt-8 text-base leading-snug font-semibold md:mt-10">
                Horário e <br /> Localização
              </h3>
            </div>
          </div>

          <div className="flex flex-shrink-0 flex-col items-start space-y-4 pt-10 text-left">
            <div className="flex flex-col items-center justify-start space-y-1">
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-4 w-4 shrink-0 text-[#15467d]" />
                <span
                  className="text-lg font-normal tracking-wide"
                  style={{ color: "#15467d" }}
                >
                  927&nbsp;078&nbsp;842
                </span>
              </div>
              <span className="ml-6 text-xs" style={{ color: "#15467d" }}>
                (Chamada para a rede móvel nacional)
              </span>
            </div>

            <div
              className="font-large mt-8 space-y-4 text-left text-base md:mt-10"
              style={{ color: "#15467d" }}
            >
              <div className="leading-snug">
                <p>Segunda a Sábado</p>
                <p>das 8h às 20h</p>
              </div>
              <div className="leading-snug">
                <p>Rua Diário de Notícias nº 09, 2500-107</p>
                <p>Caldas da Rainha</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 px-4 pt-6 md:flex-row md:items-end md:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-normal text-[#15467d]">
              Redes Sociais
            </span>
            <a
              href="https://www.instagram.com/yourselfpilates/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#15467d] text-white transition hover:opacity-80"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-right md:items-end">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-center md:justify-end md:text-right">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs whitespace-nowrap text-[#15467d] transition hover:opacity-80"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs whitespace-nowrap text-[#15467d] transition hover:opacity-80"
                    >
                      {link.name}
                    </Link>
                  )}
                  {/* Separator pipe */}
                  {index < legalLinks.length - 1 && (
                    <span className="mx-0 hidden text-[#15467d]/50 md:inline">
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Copyright */}
            <div className="mt-1">
              <p className="text-xs text-[#15467d] md:text-sm">
                © {currentYear} – All rights Reserved. Powered by:{" "}
                <a
                  href="https://oonify.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-[#15467d] transition hover:opacity-80"
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
