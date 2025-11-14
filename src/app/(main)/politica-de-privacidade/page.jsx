"use client";

import React from "react";
import Link from "next/link";
import { PRIVACY_POLICY } from "@/constants/PrivacyPolicy";

const PoliticaDePrivacidade = () => {
	const renderContent = (content) => {
		switch (content.type) {
			case "heading":
				return (
					<h3 className="text-[18px] font-normal text-[#15467d] mt-6 mb-3 font-heading">
						{content.text}
					</h3>
				);

			case "subheading":
				return (
					<h4 className="text-[16px] font-semibold text-[#15467d] mt-4 mb-2">
						{content.text}
					</h4>
				);

			case "paragraph":
				return (
					<p className="text-[18px] leading-[1.9] text-[#15467d] mb-3 font-heading">
						{content.text}
					</p>
				);

			case "list":
				return (
					<ul className="space-y-1 mb-4 text-[18px] text-[#15467d] leading-[1.9] ml-6 font-heading">
						{content.items.map((item, idx) => (
							<li
								key={idx}
								className="leading-[1.9]"
								style={{
									listStyleType: "none",
									textIndent: "-1em",
									paddingLeft: "1em",
								}}
							>
								– {item}
							</li>
						))}
					</ul>
				);

			default:
				return null;
		}
	};

	return (
		<main className="min-h-screen bg-white pt-32 pb-20">
			<div className="container mx-auto px-4 md:px-6 max-w-6xl">
				<h1 className="text-4xl md:text-5xl font-light text-[#88a9c3] mb-6 font-accent">
					POLÍTICA DE PRIVACIDADE
				</h1>

				<article>
					{PRIVACY_POLICY.sections.map((section) => (
						<section key={section.id} className="mb-10">
							<div>
								{section.content.map((content, idx) => (
									<div key={idx}>{renderContent(content)}</div>
								))}
							</div>
						</section>
					))}
				</article>
			</div>
		</main>
	);
};

export default PoliticaDePrivacidade;
