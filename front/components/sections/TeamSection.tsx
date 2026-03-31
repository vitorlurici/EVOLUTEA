import { Button } from "@/components/ui/Button"

const TEAM = [
  {
    name: "Dra. Carolina Mendes",
    role: "Neuropediatra",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Amanda Silva",
    role: "Fonoaudióloga Especialista",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lucas Fernandes",
    role: "Psicólogo Infantil",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Juliana Costa",
    role: "Terapeuta Ocupacional",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  }
]

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossa Equipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profissionais apaixonados, altamente capacitados e prontos para caminhar ao lado de sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {TEAM.map((member, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center">{member.name}</h3>
              <p className="text-primary font-medium text-sm text-center">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" size="lg" className="px-10 py-6 text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform">
            Quero ajuda para meu filho
          </Button>
        </div>
      </div>
    </section>
  )
}
