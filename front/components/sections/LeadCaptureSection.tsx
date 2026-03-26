"use client"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { BookOpen, CheckCircle2 } from "lucide-react"

export function LeadCaptureSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Future API integration
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Baixe um guia gratuito sobre autismo
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              &quot;Guia: 5 formas de estimular a comunicação no TEA.&quot; Preencha o formulário abaixo para receber o material exclusivo diretamente no seu e-mail.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">Guia enviado com sucesso! Verifique seu e-mail.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-gray-900"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow bg-accent hover:bg-accent-hover text-white">
                  Receber meu Guia Gratuito
                </Button>
              </form>
            )}
            <p className="text-xs text-gray-400 mt-4 text-center">Nós também odiamos spam. Seus dados estão seguros.</p>
          </div>
          
          <div className="hidden md:block bg-gray-100 relative">
            <img 
              src="https://images.unsplash.com/photo-1549635031-64157fa552b7?auto=format&fit=crop&w=800&q=80" 
              alt="Mãe lendo com a filha" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  )
}
