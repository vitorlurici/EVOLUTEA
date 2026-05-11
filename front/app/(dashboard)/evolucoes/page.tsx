"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Play } from "lucide-react";

export default function EvolucoesPage() {
  const [activeTab, setActiveTab] = useState("Progresso");

  const sessions = [
    {
      id: 1,
      title: "Sessão 1 - Habilidade de Comunicação",
      progress: 80,
      status: "good", // green border
      expanded: false,
    },
    {
      id: 2,
      title: "Sessão 2 - Explorando Emoções",
      progress: 90,
      status: "good",
      expanded: true, // we will explicitly render content for demo
      avanco: "Seu filho evoluiu no uso do PECS, aumentando os pedidos feitos com sucesso, o que mostra melhor comunicação, menos frustração e mais autonomia. Além disso, atingiu 90% de acerto no emparelhamento cognitivo, indicando avanço no reconhecimento de padrões — uma base importante para o aprendizado futuro.",
      atencao: "Seu filho evoluiu no uso do PECS, aumentando os pedidos feitos com sucesso, o que mostra melhor comunicação, menos frustração e mais autonomia. Além disso, atingiu 90% de acerto no emparelhamento cognitivo, indicando avanço no reconhecimento de padrões — uma base importante para o aprendizado futuro.",
    },
    {
      id: 3,
      title: "Sessão 3 - Desenvolvendo Habilidades Sociais",
      progress: 60, // drawn as black bar in mockup
      status: "neutral", // black border
      expanded: false,
    },
    {
      id: 4,
      title: "Sessão 4 - Estimulando Autonomia e Organização",
      progress: 70,
      status: "good",
      expanded: false,
    },
    {
      id: 5,
      title: "Sessão 5 - Mundo Sensorial",
      progress: 10,
      status: "bad", // red border
      expanded: false,
    },
    {
      id: 6,
      title: "Sessão 6 - Reforço Positivo",
      progress: 10,
      status: "bad",
      expanded: false,
    },
    {
      id: 7,
      title: "Sessão 7 - Jogos de Imitação",
      progress: 10,
      status: "bad",
      expanded: false,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-8 pt-4">
      {/* Top Tabs */}
      <div className="flex justify-center">
        <div className="bg-[#355979] text-white flex rounded-b-2xl shadow-md overflow-hidden px-6 pb-2 pt-6 shrink-0">
          {["Evolução", "Progresso", "Atividades"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 text-sm font-medium transition-colors relative ${
                activeTab === tab ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-white rounded-t-md"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start mt-4">
        {/* Left Filter Sidebar */}
        <div className="w-64 bg-white p-6 rounded-2xl shadow-sm shrink-0">
          <h3 className="text-gray-700 font-semibold mb-6">Filtrar por</h3>
          
          <div className="space-y-6">
            <div className="relative">
              <select className="w-full appearance-none border border-gray-300 rounded-full py-2 px-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary/50 bg-white">
                <option>Período</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div>
              <button className="w-full border border-gray-300 rounded-full py-2 px-4 text-sm text-gray-700 bg-white mb-4">
                Status
              </button>
              <div className="space-y-3 px-2">
                {["Agendada", "Realizada", "Cancelada", "Faltou"].map((st) => (
                  <label key={st} className="flex items-center gap-3 cursor-pointer">
                    <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center">
                      <input type="checkbox" className="opacity-0 absolute" />
                    </div>
                    <span className="text-xs text-gray-600">{st}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="relative">
              <select className="w-full appearance-none border border-gray-300 rounded-full py-2 px-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary/50 bg-white">
                <option>Tipo</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="flex-1 space-y-4">
          {sessions.map((session) => (
            <div 
              key={session.id} 
              className="bg-white rounded-2xl shadow-sm p-4 relative overflow-hidden"
            >
              {/* Colored left bar */}
              <div className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-md ${
                session.status === 'good' ? 'bg-[#22C55E]' :
                session.status === 'bad' ? 'bg-[#EF4444]' : 'bg-[#1F2937]'
              }`}></div>

              <div className="pl-6 pr-2 flex flex-col gap-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800 text-sm">{session.title}</h4>
                  
                  <div className="flex items-center gap-8">
                    {/* Progress Bar Component */}
                    <div className="w-32 h-3 rounded-full border border-gray-300 overflow-hidden flex p-0.5 relative">
                       <div 
                        className={`h-full rounded-full ${
                          session.status === 'good' ? 'bg-[#22C55E]' :
                          session.status === 'bad' ? 'bg-transparent' : 'bg-[#1F2937]'
                        }`} 
                        style={{ width: `${session.progress}%` }}
                       ></div>
                    </div>

                    <button className="text-gray-800 hover:text-black">
                      {session.expanded ? (
                        <ChevronDown className="w-6 h-6" />
                      ) : (
                        <Play className="w-5 h-5 fill-transparent" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {session.expanded && session.avanco && (
                  <div className="text-xs pt-2">
                    <p className="font-semibold text-[#22C55E] mb-1 text-sm">O que avançou hoje.</p>
                    <p className="text-gray-800 mb-4 leading-relaxed">{session.avanco}</p>

                    <p className="font-semibold text-[#EF4444] mb-1 text-sm">O que precisa de atenção.</p>
                    <p className="text-gray-800 leading-relaxed">{session.atencao}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
