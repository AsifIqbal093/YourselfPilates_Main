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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CheckCircle2, CreditCard, Smartphone, Building2 } from "lucide-react";
import { fetchPacks, subscriptionsApi } from "@/lib/api";
import { isAuthenticated, onAuthChange } from "@/lib/auth";
import LoginModal from "./LoginModal";

const PAYMENT_METHODS = [
  {
    id: "multibanco",
    name: "MultiBanco",
    icon: Building2,
    requiresPhone: false,
  },
  {
    id: "mbway",
    name: "MB WAY",
    icon: Smartphone,
    requiresPhone: true,
  },
  {
    id: "creditcard",
    name: "Cartão de Crédito",
    icon: CreditCard,
    requiresPhone: false,
  },
];

const PackagesListing = ({ title, subtitle } = {}) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [successType, setSuccessType] = useState(null); // 'email' or 'redirect'

  useEffect(() => {
    setAuthenticated(isAuthenticated());
    const unsubscribe = onAuthChange((isAuth) => {
      setAuthenticated(isAuth);
    });
    return unsubscribe;
  }, []);

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

  const handleSubscribe = async () => {
    if (!selectedPackage || !selectedPaymentMethod) return;

    // Validate phone number for MBWAY
    if (selectedPaymentMethod === "mbway" && !phoneNumber.trim()) {
      setError("Por favor, insira o número de telefone para MB WAY.");
      return;
    }

    setSubscribing(true);
    setError(null);
    try {
      let paymentData = { payment_method: selectedPaymentMethod };

      if (selectedPaymentMethod === "mbway") {
        const cleanPhone = phoneNumber.replace(/\D/g, "");
        paymentData.phone_number = `351#${cleanPhone}`;
      }

      const response = await subscriptionsApi.subscribe(selectedPackage.id, paymentData);
      setPaymentModalOpen(false);

      if (selectedPaymentMethod === "creditcard" && response.payment_details?.payment_url) {
        window.location.href = response.payment_details.payment_url;
        return;
      }

      setSuccessType("email");
      setSuccessModalOpen(true);
      resetPaymentState();
    } catch (err) {
      setError(err.message || "Erro ao processar subscrição. Por favor, tente novamente.");
    } finally {
      setSubscribing(false);
    }
  };

  const resetPaymentState = () => {
    setSelectedPaymentMethod(null);
    setPhoneNumber("");
  };

  const handleAgendarClick = (pkg) => {
    setSelectedPackage(pkg);
    setError(null);
    if (authenticated) {
      setPaymentModalOpen(true);
    } else {
      setLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setLoginModalOpen(false);
    if (selectedPackage) {
      setPaymentModalOpen(true);
    }
  };

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedPaymentMethod(methodId);
    setError(null);
    if (methodId !== "mbway") {
      setPhoneNumber("");
    }
  };

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
                    <Button
                      onClick={() => handleAgendarClick(pkg)}
                      className="w-full rounded-full bg-sky-900 px-6 py-2 text-base font-medium text-white normal-case sm:w-auto"
                    >
                      Agendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <LoginModal
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        onLogin={handleLoginSuccess}
      />

      <Dialog
        open={paymentModalOpen}
        onOpenChange={(open) => {
          setPaymentModalOpen(open);
          if (!open) resetPaymentState();
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-sky-900">
              Selecione o Método de Pagamento
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-3">
            {PAYMENT_METHODS.map((method) => {
              const Icon = method.icon;
              const isSelected = selectedPaymentMethod === method.id;

              return (
                <div key={method.id}>
                  <button
                    type="button"
                    onClick={() => handlePaymentMethodSelect(method.id)}
                    className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 transition-all ${isSelected
                      ? "border-sky-900 bg-sky-50"
                      : "border-gray-200 hover:border-sky-300 hover:bg-gray-50"
                      }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${isSelected ? "bg-sky-900 text-white" : "bg-gray-100 text-sky-900"
                      }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-lg font-medium ${isSelected ? "text-sky-900" : "text-gray-700"
                      }`}>
                      {method.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="ml-auto h-6 w-6 text-sky-900" />
                    )}
                  </button>

                  {method.id === "mbway" && isSelected && (
                    <div className="mt-3 pl-4">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Número de Telefone
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500">+351</span>
                        <Input
                          type="tel"
                          placeholder="912 345 678"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="flex-1"
                          maxLength={9}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">
              {error}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setPaymentModalOpen(false);
                resetPaymentState();
              }}
              className="flex-1 rounded-full"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSubscribe}
              disabled={!selectedPaymentMethod || subscribing || (selectedPaymentMethod === "mbway" && !phoneNumber.trim())}
              className="flex-1 rounded-full bg-sky-900 text-white hover:bg-sky-800 disabled:opacity-50"
            >
              {subscribing ? "A processar..." : "Confirmar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={successModalOpen} onOpenChange={(open) => {
        setSuccessModalOpen(open);
        if (!open) setSuccessType(null);
      }}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-6">
            <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${successType === "email" ? "bg-amber-100" : "bg-green-100"
              }`}>
              <CheckCircle2 className={`h-12 w-12 ${successType === "email" ? "text-amber-600" : "text-green-600"
                }`} />
            </div>
            <DialogHeader className="flex flex-col items-center text-center">
              <DialogTitle className="mb-2 text-center text-2xl font-semibold text-sky-900">
                {successType === "email" ? "Pagamento Pendente" : "Subscrição Realizada!"}
              </DialogTitle>
              <p className="text-center text-base font-normal text-sky-700">
                {successType === "email"
                  ? "Verifique o seu email para os detalhes de pagamento."
                  : "A sua subscrição foi processada com sucesso. Obrigado!"}
              </p>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PackagesListing;
