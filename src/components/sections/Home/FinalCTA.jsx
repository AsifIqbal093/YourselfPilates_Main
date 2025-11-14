"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Final CTA Section
 * Dark background with compelling call-to-action
 */
const FinalCTA = () => {
	return (
		<section className="relative overflow-hidden bg-white">
			{" "}

			<div className="grid grid-cols-1 md:grid-cols-2">
				<div
					className="h-64 md:h-[500px] bg-cover bg-center"
					style={{ backgroundImage: 'url("/images/12.jpg")' }} 
				></div>
				<div
					className="h-64 md:h-[500px] bg-cover bg-center"
					style={{ backgroundImage: 'url("/images/5.jpg")' }} 
				></div>
			</div>
			<div className="bg-[#15467d] py-20 md:py-32 text-white relative z-10">
				{" "}
				<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
					<div className="flex flex-col md:flex-row justify-between items-center gap-8">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6 }}
							className="text-center md:text-left space-y-2 -ml-40"
						>
							<h2 className="text-white font-medium text-2xl md:text-5xl font-accent">
								I would like to get in touch.
							</h2>
							<p className="text-white text-[25px] font-accent">Or schedule a visit.</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Link href="/contact">
								<Button
									size="lg"
                  className="bg-gradient-to-l from-[#15467d] via-white to-white text-[#15467d] mr-40 rounded-full text-base px-8 py-4 w-40"
                  >
									Contact
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalCTA;
