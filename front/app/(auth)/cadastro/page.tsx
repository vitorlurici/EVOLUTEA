"use client";

import Link from "next/link";
import Image from "next/image";
import { AuthSlidingPanel } from "@/components/auth/AuthSlidingPanel";

export default function RegisterPage() {
  const RegisterForm = ({ type }: { type: "responsavel" | "terapeuta" }) => (
    <div className="w-full max-w-md flex flex-col items-center">
      {/* Logo */}
      <div className="mb-4 flex justify-center">
        <Image src="/logo.svg" alt="EvoluTEA Logo" width={80} height={80} priority />
      </div>

      <h1 className="text-xl font-bold mb-1 font-sans text-center">
        Cadastro do {type === "responsavel" ? "Responsável" : "Terapeuta"}
      </h1>
      <p className="text-xs text-gray-500 mb-6 text-center">Por favor, preencha os campos para prosseguir</p>

      <form className="w-full flex flex-col gap-3">
        <div>
          <label className="block text-[10px] text-gray-600 ml-2 mb-1">Nome Completo</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>

        {type === "responsavel" ? (
          <div>
            <label className="block text-[10px] text-gray-600 ml-2 mb-1">CPF</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
        ) : (
          <div>
            <label className="block text-[10px] text-gray-600 ml-2 mb-1">CRP</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
        )}

        <div className="flex gap-3">
          <div className="w-1/2">
            <label className="block text-[10px] text-gray-600 ml-2 mb-1">Data de nascimento</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm bg-white"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-[10px] text-gray-600 ml-2 mb-1">Sexo</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] text-gray-600 ml-2 mb-1">Telefone principal (WhatsApp)</label>
          <input
            type="tel"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>

        <div>
          <label className="block text-[10px] text-gray-600 ml-2 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>

        <div>
          <label className="block text-[10px] text-gray-600 ml-2 mb-1">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>

        <div>
          <label className="block text-[10px] text-gray-600 ml-2 mb-1">Confirmar senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>

        <div className="text-center mt-2 mb-4">
          <p className="text-[10px] text-gray-500">
            Li e concordo com os <a href="#" className="text-primary font-bold">termos</a> da plataforma
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="w-48 py-2 bg-secondary text-white rounded-full font-semibold hover:bg-secondary-dark transition-colors cursor-pointer"
          >
            Prosseguir
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-2">
          Já tem uma conta? <Link href="/login" className="text-primary font-semibold hover:underline">Entre</Link>
        </p>
      </form>
    </div>
  );

  return (
    <AuthSlidingPanel
      leftForm={<RegisterForm type="terapeuta" />}
      rightForm={<RegisterForm type="responsavel" />}
      leftOverlayTitle="Bem-vindo(a)!"
      leftOverlayText="Junte-se à nós para acompanhar o desenvolvimento da criança."
      leftOverlayButtonText="Cadastrar como Terapeuta"
      rightOverlayTitle="Bem-vindo(a)!"
      rightOverlayText="Ofereça o melhor acompanhamento aos seus pacientes com nossa plataforma."
      rightOverlayButtonText="Cadastrar como Responsável"
    />
  );
}
