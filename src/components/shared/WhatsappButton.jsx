"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const WhatsappButtonWithDialog = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [open, setOpen] = useState(false);
	const [animate, setAnimate] = useState(false); // for animation
	const buttonRef = useRef(null);

	const whatsappNumber = "+351927078842";
	const defaultMessage = encodeURIComponent(
		"Olá! Gostaria de saber mais informações sobre os serviços de Pilates."
	);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 1000);
		return () => clearTimeout(timer);
	}, []);

	const handleWhatsAppContact = () => {
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
		window.open(whatsappUrl, "_blank", "noopener,noreferrer");
	};

	const handleOpen = () => {
		setOpen(true);
		setAnimate(true);
	};

	const handleClose = () => {
		setAnimate(false); // trigger slide-down
		setTimeout(() => setOpen(false), 300); // keep DOM for animation duration
	};

	return (
		<div className="fixed bottom-6 right-6 z-50" ref={buttonRef}>
			<Dialog
				open={open}
				onOpenChange={(value) => (value ? handleOpen() : handleClose())}
			>
				<DialogTrigger asChild>
					<button
						className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg transition-all duration-300"
						aria-label="Contact us on WhatsApp"
					>
						<img
							src="/icons/whatsapp.svg"
							alt="WhatsApp"
							className="w-10 h-10 md:w-12 md:h-12"
						/>
					</button>
				</DialogTrigger>

				{/* Always render, but animate in/out */}
				<div
					className={`absolute bottom-[70px] right-0 w-80 bg-background rounded-lg border p-6 shadow-lg transform transition-all duration-500 ${
						animate ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
					} pointer-events-${animate ? "auto" : "none"}`}
				>
					<button
						onClick={handleClose}
						className="absolute top-2 right-2 text-gray-300 hover:text-gray-500 text-xl font-bold"
						aria-label="Close"
					>
						×
					</button>
					<DialogHeader>
						<img
							src="/images/Logo.png"
							alt="Logo"
							className="w-65 mx-auto mb-4"
						/>
					</DialogHeader>

					<div className="-mx-6 mb-2">
						<img
							src="/images/Chat.png"
							alt="Chat Illustration"
							className="w-full object-cover"
						/>
					</div>
					<Button
						onClick={handleWhatsAppContact}
						className="mx-auto w-full bg-[#25D366] text-white flex items-center justify-center rounded-full lowercase"
						size="sm"
					>
						<img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
						Contacte-nos!
					</Button>

					<p className="text-center text-sm text-muted-foreground mt-2">
						🟢 Online |{" "}
						<a
							href="/politica-de-privacidade"
							className="text-red-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							Política de Privacidade
						</a>
					</p>
				</div>
			</Dialog>
		</div>
	);
};

export default WhatsappButtonWithDialog;
