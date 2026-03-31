"use client";

import Link from "next/link";
import Image from "next/image";
import { User, EyeOff } from "lucide-react";
import { AuthSlidingPanel } from "@/components/auth/AuthSlidingPanel";

export default function LoginPage() {
  const LoginForm = ({ type }: { type: "responsavel" | "terapeuta" }) => (
    <div className="w-full max-w-sm flex flex-col items-center">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image src="/logo.svg" alt="EvoluTEA Logo" width={80} height={80} priority />
      </div>

      <h1 className="text-2xl font-bold mb-1 font-sans text-center">Bem-vindo(a) de volta</h1>
      <p className="text-sm text-gray-500 mb-8 text-center">Por favor, coloque suas informações</p>

      {type === "terapeuta" && (
        <p className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">Acesso Terapeuta</p>
      )}

      <form className="w-full flex flex-col gap-4">
        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between mt-2 mb-6 text-xs text-gray-500">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
            Lembrar de mim
          </label>
          <a href="#" className="hover:text-primary transition-colors">Esqueceu a senha?</a>
        </div>

        <button
          type="button"
          className="w-full py-3 bg-secondary text-white rounded-full font-semibold hover:bg-secondary-dark transition-colors cursor-pointer"
        >
          Entrar
        </button>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 mx-4 text-xs text-gray-400">ou</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <button
          type="button"
          className="w-12 h-12 mx-auto rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
        >
          {/* External Google SVG or Text */}
          <span className="font-bold text-lg text-gray-600">G</span>
        </button>

        <p className="text-center text-xs text-gray-500 mt-6">
          Não tem uma conta? <Link href="/cadastro" className="text-primary font-semibold hover:underline">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );

  return (
    <AuthSlidingPanel
      leftForm={<LoginForm type="terapeuta" />}
      rightForm={<LoginForm type="responsavel" />}
      leftOverlayTitle="Olá, Responsável!"
      leftOverlayText="Acesse sua conta para acompanhar o desenvolvimento da criança."
      leftOverlayButtonText="Entrar como terapeuta"
      rightOverlayTitle="Olá, Terapeuta!"
      rightOverlayText="Acesse sua conta para gerenciar seus pacientes."
      rightOverlayButtonText="Entrar como responsável"
    />
  );
}
