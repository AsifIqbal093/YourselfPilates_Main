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
    { name: "Termos e Condições", href: "/termo-e-condicoes" },
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
    <footer className="relative bg-gradient-to-r from-[#d9e4ee] to-[#c9d7e4] pt-24 pb-12 min-h-[400px]">
      <div className="mx-auto max-w-[1600px] px-0">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-10 px-4 md:px-6 lg:px-8">
          
          <div className="space-y-6 flex-shrink-0 flex-grow-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo.png"
                alt="YourSelf Pilates"
                width={278}
                height={75}
                className="h-auto w-full max-w-[278px]"
              />
            </Link>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary w-fit text-lg font-normal text-[#15467d] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex justify-end text-[#15467d] gap-16 md:gap-24 md:ml-auto flex-shrink-0">
            
            <div className="flex flex-col space-y-4 pt-10 text-right flex-shrink-0">
              <h3 className="text-base font-semibold">Atendimento</h3>
              <h3 className="text-base leading-snug font-semibold mt-8 md:mt-10">
                Horário e <br /> Localização
              </h3>
            </div>

            <div className="flex flex-col space-y-4 pt-10 text-left items-start flex-shrink-0">
              
              <div className="flex flex-col items-start justify-start space-y-1">
                <div className="flex items-center space-x-2">
                    <PhoneCall className="h-4 w-4 shrink-0 text-[#15467d]" />
                    <span className="text-base font-semibold tracking-wide">
                        927&nbsp;078&nbsp;842
                    </span>
                </div>
                <span className="text-xs ml-6">
                    (Chamada para a rede móvel nacional)
                </span>
              </div>

              <div className="space-y-4 text-sm mt-8 md:mt-10">
                <div className="leading-snug">
                    <p >Segunda a Sábado</p>
                    <p>das 8h às 20h</p>
                </div>
                <div className="leading-snug">
                    <p>Rua Diário de Notícias nº 09, 2500-107</p>
                    <p>Caldas da Rainha</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end px-4 md:px-6 lg:px-8">
          
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

          <div className="flex flex-col items-center md:items-end gap-2 text-right">
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1 text-center md:text-right">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#15467d] transition hover:opacity-80 whitespace-nowrap"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs text-[#15467d] transition hover:opacity-80 whitespace-nowrap"
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