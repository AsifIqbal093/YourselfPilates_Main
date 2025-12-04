"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { authApi } from "@/lib/api";
import { storeAuthData } from "@/lib/auth";

const LoginModal = ({ open, onOpenChange, onLogin }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const authData = await authApi.login(formData.email, formData.password);
            storeAuthData(authData);
            onLogin?.(authData);
            resetAndClose();
        } catch (err) {
            setError(
                err.message || "Erro ao fazer login. Por favor, tente novamente."
            );
        } finally {
            setLoading(false);
        }
    };

    const resetAndClose = () => {
        setFormData({ email: "", password: "" });
        setError("");
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-[#15467d]">
                        Login
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-600">
                        Entre com o seu email e palavra-passe para aceder à sua conta.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="rounded-md border border-red-200 bg-red-50 p-3">
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}

                    <FormField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />

                    <FormField
                        id="password"
                        name="password"
                        type="password"
                        label="Palavra-passe"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />

                    <DialogFooter className="flex-col gap-2 sm:flex-row sm:justify-end">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={resetAndClose}
                            disabled={loading}
                            className="w-full rounded-full border-2 border-[#15467d] px-6 py-2 text-base font-normal text-[#15467d] transition-all duration-200 hover:border-[#88a9c3] hover:bg-[#88a9c3] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full bg-[#398ffc] px-6 py-2 text-base font-normal text-white transition-all duration-200 hover:bg-[#2878dc] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                        >
                            {loading ? "A entrar..." : "Entrar"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

const FormField = ({
    id,
    name,
    type,
    label,
    placeholder,
    value,
    onChange,
    disabled,
    required,
}) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-sm font-medium text-[#15467d]">
            {label}
        </label>
        <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className="h-12 w-full border-2 border-[#c8d4e0] bg-white text-base text-[#3b3d42] placeholder:text-[#8b9daf] focus:border-[#88a9c3] focus:ring-2 focus:ring-[#88a9c3]/20 disabled:cursor-not-allowed disabled:opacity-50"
        />
    </div>
);

export default LoginModal;
