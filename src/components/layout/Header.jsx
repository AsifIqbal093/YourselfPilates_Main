"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const isMobile = useMediaQuery("(max-width: 1024px)");
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`absolute top-3 left-8 right-12 z-50 transition-all duration-200 ${
				isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
			}`}
		>
			<div className="w-full px-6 lg:px-12">
				<div className="flex items-center justify-between py-4">
					<motion.div
						style={{
							display: "inline-block",
							transformOrigin: "bottom left", 
						}}
						whileHover={{
							transform: "skewX(-12deg)", 
						}}
						transition={{ duration: 1.0, ease: "easeOut" }}
					>
						<Image
							src="/images/Logo.png"
							alt="YourSelf Pilates"
							width={200}
							height={60}
							className="h-12 md:h-12 w-auto"
							priority
						/>
					</motion.div>

					{!isMobile && (
						<div className="flex items-center space-x-8">
							<nav className="flex items-center space-x-9 text-[19px] text-[#15467d] font-normal">
								{[
									{ href: "/agendar", label: "Agendar Espaço" },
									{ href: "/sobre", label: "Sobre" },
									{ href: "/contactos", label: "Contactos" },
								].map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={`hover:text-[#5380A6] ${
											pathname === link.href
												? "text-[#5380A6] font-semibold underline"
												: "text-[#15467d]"
										}`}
									>
										{link.label}
									</Link>
								))}
							</nav>

							<a
								href="tel:927078842"
								className="flex items-center justify-center space-x-2 bg-[#f3f6f9] rounded-2xl py-4.5 px-4 hover:scale-[1.10] transition-all duration-2000"
							>
								<PhoneCall className="w-5 h-5 text-[#88a9c3]" />
								<div className="flex flex-col items-center leading-none text-center">
									<span className="text-[18px] font-medium text-[#23498d]">
										927 078 842
									</span>
									<span className="text-[10px] text-[#15467d] mt-0.5">
										(Chamada para a rede móvel nacional)
									</span>
								</div>
							</a>
						</div>
					)}

					{isMobile && <MobileMenu />}
				</div>
			</div>
		</header>
	);
};

export default Header;
