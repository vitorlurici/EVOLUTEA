"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana S.",
    role: "Mãe do Lucas",
    text: "Desde que começamos o acompanhamento, o Lucas teve saltos enormes de desenvolvimento. O suporte fez toda a diferença em nossa rotina.",
    initials: "MS",
  },
  {
    id: 2,
    name: "Carlos T.",
    role: "Pai da Beatriz",
    text: "Encontrar profissionais que realmente entendem do assunto e acolhem a família foi a melhor coisa que nos aconteceu. A Beatriz está muito mais confiante.",
    initials: "CT",
  },
  {
    id: 3,
    name: "Ana P.",
    role: "Mãe do Theo",
    text: "O Theo começou a falar muito mais e a interagir na escola. Sou imensamente grata pela dedicação da equipe.",
    initials: "AP",
  },
  {
    id: 4,
    name: "Roberto F.",
    role: "Pai do João",
    text: "Evolução visível a cada semana! Nós finalmente nos sentimos confortáveis para lidar com os desafios do dia a dia.",
    initials: "RF",
  }
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Quem já evoluiu com a gente</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias reais de famílias que confiaram em nosso trabalho.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-2 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="w-[300px] md:w-[350px] shrink-0 snap-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex text-accent mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic grow">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-primary font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
