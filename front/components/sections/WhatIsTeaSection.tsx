import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import Image from "next/image"

export function WhatIsTeaSection() {
  return (
    <section id="o-que-e-autismo" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            O que é Transtorno do Espectro Autista (TEA)?
          </h2>
          <p className="text-lg text-gray-600">
            O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento que afeta principalmente a comunicação, a interação social e o comportamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <Card className="border-0 shadow-lg rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-[240px] w-full">
              <img
                src="/cards/communication.jpg"
                alt="Criança aprendendo comunicação"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Comunicação</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Uma curiosidade interessante: nem toda criança com <strong className="text-primary font-bold">TEA</strong> tem dificuldade de falar, algumas, inclusive, desenvolvem linguagem normalmente, mas têm dificuldade em usar a comunicação de forma social.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border-0 shadow-lg rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-[240px] w-full">
              <img
                src="/cards/stats.png"
                alt="Criança brincando com blocos"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Estatísticas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Você sabia que <strong className="text-primary font-bold">1 a cada 30-40 crianças</strong> no mundo nasce dentro do espectro autista?
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="border-0 shadow-lg rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-[240px] w-full">
              <img
                src="/cards/help-child.png"
                alt="Mãe e filho interagem"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Como ajudar crianças com TEA</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manter rotina, usar comunicação simples e recursos visuais facilita o entendimento. Respeitar o tempo da criança e reforçar conquistas ajuda no desenvolvimento. Ambiente tranquilo e apoio profissional fazem <strong className="text-primary font-bold">grande diferença</strong>.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button href="#apoio" variant="secondary" size="lg" className="px-10 text-lg shadow-md hover:shadow-lg transition-shadow">
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  )
}
