"use client"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SLIDES = [
  {
    id: 1,
    title: "Entenda o autismo",
    description: "Conheça os principais sintomas da condição e como tratá-la adequadamente.",
    image: "/banners/1.jpg",
    buttonText: "Saiba mais"
  },
  {
    id: 2,
    title: "Apoio à Família",
    description: "Descubra como nossa equipe especializada pode acolher e ajudar no desenvolvimento do seu filho.",
    image: "/banners/2.png",
    buttonText: "Nossos Serviços"
  },
  {
    id: 3,
    title: "Diagnóstico Precoce",
    description: "A detecção nos primeiros anos de vida é fundamental para proporcionar um melhor prognóstico.",
    image: "/banners/3.jpg",
    buttonText: "Avaliação Inicial"
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-[600px] w-full overflow-hidden flex items-center group">
      {/* Background Images with Crossfade */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundColor: "#355979" // Fallback
          }}
        />
      ))}

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-300" />

      {/* Slide Content */}
      <div className="container relative z-20 mx-auto px-12 md:px-16">
        <div className="max-w-xl text-white min-h-[200px] flex flex-col justify-center">
          <h1
            key={`title-${currentSlide}`}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-in slide-in-from-bottom-4 fade-in duration-700"
          >
            {SLIDES[currentSlide].title}
          </h1>
          <p
            key={`desc-${currentSlide}`}
            className="text-lg md:text-xl mb-8 text-white/90 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150 fill-mode-backwards"
          >
            {SLIDES[currentSlide].description}
          </p>
          <div
            key={`btn-${currentSlide}`}
            className="animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300 fill-mode-backwards"
          >
            <Button href="#o-que-e-autismo" variant="secondary" size="lg" className="font-semibold text-lg shadow-lg">
              {SLIDES[currentSlide].buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Centered Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-colors p-2 hidden md:block opacity-0 group-hover:opacity-100"
        aria-label="Voltar slide"
      >
        <ChevronLeft className="h-12 w-12 drop-shadow-lg" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white transition-colors p-2 hidden md:block opacity-0 group-hover:opacity-100"
        aria-label="Avançar slide"
      >
        <ChevronRight className="h-12 w-12 drop-shadow-lg" />
      </button>

      {/* Bottom Carousel Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-3">
        <div className="flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-accent" : "w-3 bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
