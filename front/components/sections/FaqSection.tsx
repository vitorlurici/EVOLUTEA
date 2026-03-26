"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    question: "Tem acompanhamento profissional?",
    answer: "Sim, oferecemos suporte contínuo de profissionais especializados que entendem profundamente o desenvolvimento infantil e o TEA."
  },
  {
    question: "Serve para qualquer idade?",
    answer: "Nosso método é especialmente desenhado para a primeira infância, focando na intervenção precoce, mas temos estratégias adaptáveis para diferentes faixas etárias."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Cada criança tem seu próprio ritmo. Algumas famílias notam melhoras significativas na comunicação em poucas semanas, mas o foco é sempre o desenvolvimento sustentável a longo prazo."
  },
  {
    question: "É gratuito ou pago?",
    answer: "Oferecemos materiais gratuitos iniciais (como nosso guia de comunicação), mas o acompanhamento personalizado e as trilhas completas fazem parte de nossos planos premium pagos."
  },
  {
    question: "Como o método é aplicado no dia a dia?",
    answer: "Ensinamos estratégias simples para você incluir na rotina da família: hora das refeições, banho, brincadeiras. Assim o aprendizado acontece naturalmente."
  },
  {
    question: "Preciso ter conhecimento prévio?",
    answer: "Não! Explicamos tudo de forma simples, direta e acolhedora. O material foi feito exatamente para pais que estão começando a entender o TEA."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o acompanhamento, funcionamento e como podemos ajudar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-100">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="bg-white">
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0", { "rotate-180": isOpen })} />
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-gray-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
