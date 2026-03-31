export function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-3xl font-bold text-primary text-center mb-4">
          O Poder da Evolução
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Veja como o acompanhamento adequado pode transformar a vida da criança e da família.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
          
          {/* Decorative Divider in Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gray-100 -translate-x-1/2 z-0 rounded-full" />

          {/* Before */}
          <div className="relative z-10 bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-6">
              Antes
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Dificuldade na Interação</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span className="text-gray-600 text-sm">Pouco ou nenhum contato visual</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span className="text-gray-600 text-sm">Atraso na fala ou dificuldade em se comunicar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span className="text-gray-600 text-sm">Isolamento e pouca resposta ao ser chamado</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="relative z-10 bg-white p-8 rounded-3xl shadow-[0_4px_24px_-4px_rgba(137,181,196,0.2)] border border-[#89B5C4]/20 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#89B5C4]/20 text-[#2A4860] font-bold text-sm mb-6">
              Depois
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Conexão e Desenvolvimento</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-gray-600 text-sm">Melhora significativa no contato visual</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-gray-600 text-sm">Iniciativa para se expressar e interagir</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-gray-600 text-sm">Maior autonomia e segurança no dia a dia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
