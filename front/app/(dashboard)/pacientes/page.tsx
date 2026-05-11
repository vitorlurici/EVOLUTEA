"use client";

import { Search, ChevronDown, Bell } from "lucide-react";

export default function PacientesPage() {
  const patients = Array(8).fill({
    name: "Miguel Silva",
    age: "7 anos",
    type: "Terapia individual",
    lastSession: "Há 2 dias\n02/04/2026",
    nextSession: "Hoje as 08:00",
    status: "Em avaliação",
  });

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 pb-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Meus pacientes</h1>
        <p className="text-sm text-gray-500">Lista dos pacientes sob seu cuidado</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-6">
        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Buscar paciente..."
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#E6F0F9] text-[#2E5A84] rounded-full text-xs font-semibold hover:bg-blue-100 transition-colors">
              Próxima sessão <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#E6F0F9] text-[#2E5A84] rounded-full text-xs font-semibold hover:bg-blue-100 transition-colors">
              Pendências <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#E6F0F9] text-[#2E5A84] rounded-full text-xs font-semibold hover:bg-blue-100 transition-colors">
              Status <ChevronDown className="w-3 h-3" />
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-700 mx-2">
              Limpar
            </button>
            <button className="px-6 py-2 bg-[#355979] text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-[#2A4860] transition-colors">
              Registrar Paciente
            </button>
          </div>
        </div>

        {/* Patients Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-4 px-4 font-semibold text-gray-600 text-sm w-[30%]">Paciente ▲</th>
                <th className="py-4 px-4 font-semibold text-gray-600 text-sm">Última sessão ▲</th>
                <th className="py-4 px-4 font-semibold text-gray-600 text-sm">Próxima sessão ▲</th>
                <th className="py-4 px-4 font-semibold text-gray-600 text-sm">Status</th>
                <th className="py-4 px-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {patients.map((patient, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{patient.name}, <span className="font-normal text-gray-500">{patient.age}</span></p>
                        <p className="text-xs text-gray-500">{patient.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 whitespace-pre-line">
                    <p className="text-sm text-gray-700 whitespace-pre-line">{patient.lastSession}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-700">{patient.nextSession}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-700">{patient.status}</p>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="px-6 py-2 bg-[#355979] text-white rounded-xl text-sm font-semibold hover:bg-[#2A4860] transition-colors">
                      Ver paciente
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
