"use client"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { ArrowRight, RotateCcw } from "lucide-react"

const QUESTIONS = [
  {
    id: 1,
    text: "P: Você já notou que seu filho tem dificuldade para manter contato visual ao ser chamado?",
    options: [
      { id: "a", text: "Sim, quase sempre" },
      { id: "b", text: "Às vezes, dependendo do momento" },
      { id: "c", text: "Não, ele mantém contato visual normalmente" }
    ]
  },
  {
    id: 2,
    text: "P: Como é o processo de fala ou comunicação?",
    options: [
      { id: "a", text: "Não fala ou usa pouquíssimas palavras" },
      { id: "b", text: "Fala, mas tem dificuldade em manter uma interação" },
      { id: "c", text: "Fala e interage socialmente com facilidade" }
    ]
  },
  {
    id: 3,
    text: "P: Como ele costuma reagir em ambientes muito barulhentos ou com muitas pessoas?",
    options: [
      { id: "a", text: "Fica muito irritado, chora ou tapa os ouvidos" },
      { id: "b", text: "Fica um pouco desconfortável, mas logo se adapta" },
      { id: "c", text: "Não demonstra incômodo com barulhos ou pessoas" }
    ]
  }
]

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }))
    
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  return (
    <section className="py-24 bg-[#EAF2F4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Entenda os sinais</h2>
          <p className="text-gray-600">
            Responda este rápido questionário para nos ajudar a entender melhor o momento do seu filho. 
            Lembrando que isso <strong className="font-bold">não</strong> substitui um diagnóstico médico.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
          {!showResult ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-bold text-accent uppercase tracking-wider">
                  Pergunta {currentStep + 1} de {QUESTIONS.length}
                </span>
                <div className="flex gap-1">
                  {QUESTIONS.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 rounded-full transition-all duration-300 ${i <= currentStep ? 'w-8 bg-accent' : 'w-2 bg-gray-200'}`} 
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-tight">
                {QUESTIONS[currentStep].text}
              </h3>

              <div className="space-y-4">
                {QUESTIONS[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="w-full text-left p-5 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all text-gray-700 font-medium group flex items-center justify-between"
                  >
                    {option.text}
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💙</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Obrigado por compartilhar!
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cada criança é única e tem seu próprio tempo. No entanto, notar precocemente os sinais é o primeiro e mais importante passo para oferecer o suporte adequado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" href="https://wa.me/5511999999999" className="font-bold w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                  Falar com especialista agora
                </Button>
                <Button variant="outline" onClick={resetQuiz} className="gap-2 w-full sm:w-auto">
                  <RotateCcw className="w-4 h-4" /> Refazer teste
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
