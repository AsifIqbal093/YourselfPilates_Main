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
    <footer className="relative bg-gradient-to-r from-[#d9e4ee] to-[#c9d7e4] pt-12 pb-6">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Top Section */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
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
                  className="hover:text-primary w-fit text-base font-normal text-[#15467d] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col justify-center space-y-6 pr-0 text-[#15467d] sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-16 sm:pr-8">
            <div className="flex min-w-[160px] flex-col space-y-4 text-center sm:space-y-8 sm:text-right">
              <h3 className="text-base font-semibold">Atendimento</h3>
              <h3 className="text-base leading-snug font-semibold">
                Horário e <br /> Localização
              </h3>
            </div>

            {/* Right Content */}
            <div className="flex flex-col space-y-6 text-center sm:text-left">
              <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:items-start sm:justify-start sm:space-y-0 sm:space-x-3">
                <PhoneCall className="h-4 w-4 shrink-0 text-[#15467d]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-semibold tracking-wide">
                    927&nbsp;078&nbsp;842
                  </span>
                  <span className="text-xs">
                    (Chamada para a rede móvel nacional)
                  </span>
                </div>
              </div>

              {/* Horário + Endereço */}
              <div className="space-y-2 text-sm">
                <p>
                  Segunda a Sábado <br />
                  das 8h às 20h
                </p>
                <p>
                  Rua Diário de Notícias nº 09, 2500-107 <br />
                  Caldas da Rainha
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          {/* Redes Sociais */}
          <div className="flex items-center justify-center space-x-2 md:justify-start">
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

          <div className="mt-4 flex flex-col items-center gap-2 md:mt-0 md:items-end md:gap-0">
            {/* Legal Links */}
            <div className="flex flex-col items-center justify-center gap-x-2 gap-y-1 text-center md:flex-row md:items-end md:justify-end md:gap-y-0 md:text-right">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#15467d] transition hover:opacity-80"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs text-[#15467d] transition hover:opacity-80"
                    >
                      {link.name}
                    </Link>
                  )}
                  {index < legalLinks.length - 1 && (
                    <span className="mx-1 hidden text-[#15467d]/50 md:inline">
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-2 text-right">
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
