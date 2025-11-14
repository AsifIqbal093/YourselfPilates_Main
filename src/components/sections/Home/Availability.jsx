"use client";

import React from "react";
import { Clock, MapPin } from "lucide-react";

const Availibility = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center gap-120">
			<div className="flex items-center gap-4 -mt-40 -ml-50">
				<Clock className="w-6 h-6 text-[#8faac1] mb-22 mr-10" />
				<div>
					<h3 className="text-3xl md:text-5xl text-[#8faac1] font-light font-accent">
						Horário
					</h3>
					<p className="text-[15px] text-[#104c88] mt-8 leading-5 font-normal">
						Segunda a Sábado <br />
						das 8h às 20h
					</p>
				</div>
			</div>

			<div className="flex items-center gap-4 mt-28 -ml-20">
				<MapPin className="w-6 h-6 text-[#8faac1] mb-50 mr-10" />
				<div>
					<h3 className="text-3xl md:text-5xl text-[#8faac1] font-light font-accent">
						Localização
					</h3>
					<p className="text-[15px] text-[#104c88] mt-8  leading-5 font-normal">
						Rua Diário de Notícias nº 09,
						<br />
						2500-107 Caldas da Rainha
					</p>
					<a
						href="https://www.google.com/maps"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[18px] text-[#8faac1] underline mt-7 mb-20 inline-block font-normal"
					>
						Ver mapa
					</a>
				</div>
			</div>
		</div>
	);
};

export default Availibility;
