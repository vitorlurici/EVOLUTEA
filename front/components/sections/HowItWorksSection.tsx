import { ClipboardCheck, Target, HeartHandshake, TrendingUp } from "lucide-react"

const STEPS = [
  {
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
    title: "Avaliação Inicial",
    description: "Compreendemos o perfil único da criança e as necessidades familiares."
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Plano Personalizado",
    description: "Criamos metas específicas focadas no desenvolvimento e autonomia."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-white" />,
    title: "Acompanhamento Contínuo",
    description: "Suporte constante e orientação prática para os pais no dia a dia."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Evolução e Adaptação",
    description: "Revisão de progressos e ajuste de estratégias conforme o avanço."
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Como funciona na prática</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um método claro, acolhedor e focado no que realmente importa: o desenvolvimento da criança.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-1 bg-[#89B5C4]/30 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-[90px] h-[90px] rounded-full bg-primary flex items-center justify-center mb-6 shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300 group-hover:bg-secondary">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 w-full">
                  <div className="text-accent font-bold mb-2">Etapa {index + 1}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
