"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Brand Introduction Section
 * Two-column layout with logo and company description
 */
const BrandIntroduction = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column - Logo */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="flex justify-center md:justify-start"
					>
						<Image
							src="/images/Logo.png"
							alt="YourSelf Pilates"
							width={303}
							height={56}
							className="w-auto h-auto max-w-[250px] md:max-w-[303px]"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="space-y-6 max-w-[455px] mx-auto md:mx-0"
					>
						<p className="text-[#104c88] font-normal text-[17px] leading-relaxed font-sans">
							Na Yourself Pilates, acreditamos na liberdade de ensinar ao seu
							estilo, com qualidade e estrutura de excelência. Um espaço pensado
							para quem quer oferecer mais, com flexibilidade e total controle
							sobre o seu próprio trabalho.
						</p>

						<Link
							href="/sobre"
							className="inline-block text-lg text-[#88a9c3] font-normal underline decoration-2 underline-offset-4 hover:text-primary hover:decoration-primary transition-all duration-200 group"
						>
							Saber mais sobre a YourSelf
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default BrandIntroduction;
