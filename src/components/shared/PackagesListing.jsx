"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { fetchPacks } from "@/lib/api";

const PackagesListing = ({ title, subtitle } = {}) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPacks = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedPacks = await fetchPacks();
        setPackages(fetchedPacks);
      } catch (err) {
        console.error("Failed to load packs:", err);
        setError("Erro ao carregar os packs. Por favor, tente novamente.");
        setPackages([]);
      } finally {
        setLoading(false);
      }
    };

    loadPacks();
  }, []);
  return (
    <section className="pt-0 pb-20">
      <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
        {title && (
          <h2 className="font-accent mt-20 mb-10 text-5xl font-normal text-[#88a9c3]">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mx-auto mb-12 max-w-3xl font-normal text-sky-900 sm:text-lg md:text-lg">
            {subtitle}
          </p>
        )}

        {error && (
          <div className="mx-auto mb-8 max-w-2xl rounded-lg bg-red-50 p-4 text-red-800">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-sky-900">A carregar packs...</p>
          </div>
        ) : packages.length === 0 ? (
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-sky-900">
              Nenhum pack disponível no momento.
            </p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.id || pkg.name}
                className="flex h-full w-full flex-col overflow-hidden rounded-3xl border-none bg-gradient-to-b from-sky-900/30 via-[#f1f5f8] to-white p-0 shadow-none"
              >
                <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-gray-200">
                  {pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                      onError={(e) => {
                        console.error("Image failed to load:", pkg.image);
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
                      Sem imagem
                    </div>
                  )}
                </div>

                <CardContent className="flex flex-1 flex-col p-6 text-left font-sans">
                  <h3 className="mb-3 font-sans text-2xl font-bold text-sky-900">
                    {pkg.name}
                  </h3>
                  <p className="mb-3 flex-1 font-sans text-base font-normal text-sky-900">
                    {pkg.description}
                  </p>
                  <p className="mb-6 font-mono text-lg font-semibold text-sky-900">
                    {pkg.price}
                  </p>

                  <div className="mt-auto flex flex-col items-start gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full rounded-full bg-sky-900 px-6 py-2 text-base font-medium text-white normal-case sm:w-auto">
                          Agendar
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <div className="flex flex-col items-center justify-center py-6">
                          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle2 className="h-12 w-12 text-green-600" />
                          </div>
                          <DialogHeader className="text-center">
                            <DialogTitle className="mb-2 text-2xl font-semibold text-sky-900">
                              Subscrição Realizada!
                            </DialogTitle>
                            <p className="text-base font-normal text-sky-700">
                              A sua subscrição foi processada com sucesso. Obrigado!
                            </p>
                          </DialogHeader>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-2 border-sky-900 px-6 py-2 text-base font-medium text-sky-900 normal-case sm:w-auto"
                  >
                    <Link href="/agendar-espaco">Saber Mais</Link>
                  </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesListing;
