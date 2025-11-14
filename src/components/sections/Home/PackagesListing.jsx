"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PackagesListing = () => {
	const packages = [
		{
			name: "1 sessão hora/aula",
			description: "Pack de 1 hora, para maior flexibilidade de horários.",
			price: "Preço: 22€/sessão",
			image: "/images/3.jpg",
			link: "/packs/uma-sessao",
		},
		{
			name: "Pack de 4 horas/aula",
			description:
				"Pack de 4 horas, pode escolher o dia e hora que desejar até um limite de 4 aulas.",
			price: "Preço: 20€/sessão",
			image: "/images/1.jpg",
			link: "/packs/quatro-aulas",
		},
		{
			name: "Pack de 8 horas/aula",
			description:
				"Pack de 8 horas, pode escolher o dia e hora que desejar até um limite de 8 aulas.",
			price: "Preço: 18€/sessão",
			image: "/images/2.jpg",
			link: "/packs/oito-aulas",
		},
	];

	return (
		<section className="pt-0 pb-20 bg-[#f8fbff]">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
				<h2 className="text-5xl font-medium mb-12 mt-20 font-accent text-[#88a9c3]">
					Agendar o espaço
				</h2>

				{/* Compact Grid Layout */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px] justify-center max-w-6xl mx-auto">
					{packages.map((pkg, index) => (
						<Card
							key={index}
							className="bg-[#f1f5f8] rounded-3xl shadow-md overflow-hidden w-[340px] md:w-[350px] p-0"
						>
							{/* Image */}
							<div className="relative w-full h-[300px] overflow-hidden">
								<Image
									src={pkg.image}
									alt={pkg.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
							</div>

							<CardContent className="p-6 flex flex-col text-left font-sans">
								<h3 className="text-2xl font-bold text-sky-900 mb-3 font-sans">
									{pkg.name}
								</h3>
								<p className="text-sky-900 font-normal text-base mb-3 font-sans">
									{pkg.description}
								</p>
								<p className="text-sky-900 font-semibold text-lg mb-6 font-mono">
									{pkg.price}
								</p>

								<div className="flex flex-col items-start gap-3 mt-auto">
									<Button
										asChild
										className="bg-sky-900 text-white rounded-full py-2 px-6 text-base font-medium w-auto normal-case"
									>
										<Link href={pkg.link}>Agendar</Link>
									</Button>

									<Button
										variant="outline"
										className="border-2 border-sky-900 text-sky-900 rounded-full py-2 px-6 text-base font-medium w-auto normal-case"
									>
										Saber Mais
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default PackagesListing;
