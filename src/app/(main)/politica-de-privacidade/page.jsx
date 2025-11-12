import React from "react";
import Link from "next/link";
import { PRIVACY_POLICY } from "@/constants/PrivacyPolicy";

/**
 * Privacy Policy Page - Política de Privacidade
 * Simple, clean layout matching WordPress theme
 */
const PoliticaDePrivacidade = () => {
  // Render content based on type
  const renderContent = (content) => {
    switch (content.type) {
      case "heading":
        return (
          <h3 className="text-base font-semibold text-[#3b3d42] mt-4 mb-2">
            {content.text}
          </h3>
        );
      case "subheading":
        return (
          <h4 className="text-sm font-semibold text-[#3b3d42] mt-3 mb-1.5">
            {content.text}
          </h4>
        );
      case "paragraph":
        return (
          <p className="text-[#3b3d42] text-[13px] leading-[1.8] mb-2.5">
            {content.text}
          </p>
        );
      case "list":
        return (
          <ul className="space-y-1 mb-2.5 text-[#3b3d42] text-[13px] ml-6">
            {content.items.map((item, idx) => (
              <li
                key={idx}
                className="leading-[1.8]"
                style={{
                  listStyleType: "none",
                  textIndent: "-1em",
                  paddingLeft: "1em",
                }}
              >
                <span>- {item}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-normal text-[#3b3d42] mb-2">
            POLÍTICA DE PRIVACIDADE
          </h1>
          <p className="text-[13px] text-[#666]">
            Última atualização: {PRIVACY_POLICY.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <article className="space-y-6">
          {PRIVACY_POLICY.sections.map((section) => (
            <section key={section.id} className="space-y-2">
              {/* Section Title */}
              <h2 className="text-base font-semibold text-[#3b3d42]">
                {section.title}
              </h2>

              {/* Section Content */}
              <div className="space-y-2">
                {section.content.map((content, idx) => (
                  <div key={idx}>{renderContent(content)}</div>
                ))}
              </div>
            </section>
          ))}
        </article>

        {/* Footer Contact */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-[13px] text-[#3b3d42] mb-3">
            <strong>Para questões relacionadas com privacidade:</strong>
          </p>
          <p className="text-[13px] text-[#3b3d42] mb-1.5">
            Email:{" "}
            <a
              href="mailto:info@yourselfpilates.pt"
              className="text-[#398ffc] hover:underline"
            >
              info@yourselfpilates.pt
            </a>
          </p>
          <p className="text-[13px] text-[#3b3d42] mb-1.5">
            Telefone:{" "}
            <a href="tel:927078842" className="text-[#398ffc] hover:underline">
              927 078 842
            </a>
          </p>
          <p className="text-[13px] text-[#666] mb-3">
            Rua Diário de Notícias nº 09, 2500-107 Caldas da Rainha
          </p>
          <p className="text-[13px] text-[#3b3d42]">
            <strong>CNPD</strong> - Comissão Nacional de Proteção de Dados:{" "}
            <a
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#398ffc] hover:underline"
            >
              www.cnpd.pt
            </a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contactos"
            className="text-[13px] text-[#398ffc] hover:underline"
          >
            Contactar-nos
          </Link>
          <span className="text-[#666]">|</span>
          <Link href="/" className="text-[13px] text-[#398ffc] hover:underline">
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PoliticaDePrivacidade;
