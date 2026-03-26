import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import Image from "next/image"

export function SupportInfoSection() {
  return (
    <section className="py-20 bg-[#D3E4E8]"> {/* Similar to prototype light blue */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Informações de Apoio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <Card className="w-full border-0 shadow-sm rounded-3xl overflow-hidden mb-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-[200px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1611078816964-b816ba843ce1?auto=format&fit=crop&w=800&q=80" 
                  alt="Puzzle heart" 
                  className="object-cover w-full h-full"
                />
              </div>
            </Card>
            <h3 className="text-xl font-bold text-primary mb-3">Características do Autismo</h3>
            <p className="text-gray-700 text-sm mb-6 max-w-xs leading-relaxed">
              Entenda mais sobre a vida no espectro.
            </p>
            <Button variant="secondary" className="px-8 mt-auto shadow-sm">
              Leia mais
            </Button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <Card className="w-full border-0 shadow-sm rounded-3xl overflow-hidden mb-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-[200px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80" 
                  alt="Trabalho com crianças" 
                  className="object-cover w-full h-full"
                />
              </div>
            </Card>
            <h3 className="text-xl font-bold text-primary mb-3">Nosso trabalho</h3>
            <p className="text-gray-700 text-sm mb-6 max-w-xs leading-relaxed">
              Enquanto muitos não entendem o autismo, nós transformamos vidas todos os dias. Vem conhecer como.
            </p>
            <Button variant="secondary" className="px-8 mt-auto shadow-sm">
              Leia mais
            </Button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <Card className="w-full border-0 shadow-sm rounded-3xl overflow-hidden mb-6 group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-[200px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80" 
                  alt="Família" 
                  className="object-cover w-full h-full"
                />
              </div>
            </Card>
            <h3 className="text-xl font-bold text-primary mb-3">Perguntas e Respostas</h3>
            <p className="text-gray-700 text-sm mb-6 max-w-xs leading-relaxed">
              Veja a lista das principais dúvidas sobre o TEA.
            </p>
            <Button variant="secondary" className="px-8 mt-auto shadow-sm">
              Leia mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
