"use client";

import { MoreHorizontal } from "lucide-react";

export default function DashboardPage() {
  const sessions = [
    { time: "08:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
    { time: "09:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
    { time: "10:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
    { time: "11:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
    { time: "13:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
    { time: "14:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
    { time: "15:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
    { time: "16:30", name: "Miguel Silva", type: "Terapia individual", status: "Confirmada" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 pb-8">
      {/* Title Area */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white border border-gray-200"></div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Olá, Dra. Fulana</h1>
          <p className="text-sm text-gray-500">Essas são as informações principais para seu atendimento</p>
        </div>
      </div>

      {/* Top Cards Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border-b-4 border-[#2E5A84] p-6 h-32 flex flex-col justify-center">
          <h3 className="text-gray-500 text-sm font-medium">Pacientes Ativos</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border-b-4 border-[#22C55E] p-6 h-32 flex flex-col justify-center">
          <h3 className="text-gray-500 text-sm font-medium">Sessões Realizadas Mês</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">48</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border-b-4 border-[#EAB308] p-6 h-32 flex flex-col justify-center">
          <h3 className="text-gray-500 text-sm font-medium">Avaliações Pendentes</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">3</p>
        </div>
      </div>

      {/* Agenda/Sessoes Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main Agenda) */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Sessões de Hoje</h2>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="w-5 h-5"/>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-4">
            {sessions.map((session, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-500 w-12">{session.time}</span>
                  <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">{session.name}</h4>
                    <p className="text-xs text-gray-500">{session.type} • {session.status}</p>
                  </div>
                </div>
                <button className="px-4 py-1.5 bg-[#4B739B] text-white text-xs font-semibold rounded-full hover:bg-primary transition-colors">
                  Abrir sessão
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Other Stats/Lists) */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 flex-1 min-h-[300px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Avisos</h2>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <MoreHorizontal className="w-5 h-5"/>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Nenhum aviso no momento.
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 flex-1 min-h-[300px]">
             <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Próximos passos</h2>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <MoreHorizontal className="w-5 h-5"/>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Terminar avaliação inicial de "Miguel Silva".
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
