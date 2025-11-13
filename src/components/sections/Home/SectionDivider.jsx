"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Kodchasan } from "next/font/google";

/**
 * Section Divider Component
 * Centered divider with Y logo icon and section title
 *
 * @param {string} title - Section title
 * @param {string} subtitle - Optional subtitle
 */

const kodchasan = Kodchasan({
	subsets: ["latin"],
	weight: ["200", "300", "400"], // use 200 or 300 for thin/light style
	variable: "--font-accent",
});

const SectionDivider = ({ title, subtitle }) => {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center text-center space-y-6"
				>
					{/* Large Y Logo Icon */}
					<div className="text-accent" style={{ color: "var(--color-accent)" }}>
						<Image
							src="/images/Ylogo.png"
							alt="Y logo"
							width={72}
							height={72}
						/>
					</div>

					{/* Section Title */}
					<h1
						className={`${kodchasan.className} text-5xl font-light`}
						style={{ color: "#88a9c3" }}
					>
						{title}
					</h1>

					{/* Optional Subtitle */}
					{subtitle && (
						<p className="text-muted text-base md:text-lg max-w-xl">
							{subtitle}
						</p>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default SectionDivider;
