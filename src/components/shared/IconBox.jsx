"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const IconBox = ({ icon, title, description, className }) => {
	const isImage = typeof icon === "string";

	return (
		<motion.div
			initial={false}
			animate={false}
			transition={false}
			className={cn(
				"flex flex-col items-center text-center space-y-10 p-6",
				className
			)}
		>

			<div className="flex items-center justify-center mb-2 w-32 h-32 rounded-full bg-[#f3f6f9]">
				{isImage ? (
					<Image
						src={icon}
						alt={title}
						width={60}
						height={60}
						className="object-contain w-16 h-16"
					/>
				) : (
					<div className="text-[#15467d] text-4xl">{icon}</div>
				)}
			</div>

			<div className="flex flex-col justify-center space-y-1 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
				<h3 className="text-[#15467d] font-semibold text-sm leading-tight">
					{title}
				</h3>
				{description && (
					<p className="text-[#15467d] text-sm md:text-base leading-relaxed opacity-80">
						{description}
					</p>
				)}
			</div>
		</motion.div>
	);
};

export default IconBox;
