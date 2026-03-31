import Link from "next/link"
import { playfairSC } from "@/lib/fonts"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className={`inline-flex items-center text-white font-bold text-3xl tracking-tight ${playfairSC.className} hover:opacity-90 transition-opacity`}>
              <img src="/logo.svg" alt="EVOLUTEA Logo" className="h-11 w-auto mr-2 object-contain filter brightness-0 invert" />
              EvoluTEA
            </Link>
            <nav className="flex flex-col gap-3 mt-4 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="#o-que-e-autismo" className="hover:text-white transition-colors">O que é o autismo?</Link>
              <Link href="#nosso-proposito" className="hover:text-white transition-colors">Nosso propósito</Link>
            </nav>
          </div>
          
          <div className="flex flex-col gap-4 md:pt-12">
            <nav className="flex flex-col gap-3 text-sm text-white/80">
              <Link href="/termos" className="hover:text-white transition-colors">Termos de uso</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
              <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
              <Link href="/lgpd" className="hover:text-white transition-colors">Canal LGPD</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 md:pt-12 md:items-end justify-end text-sm text-white/60">
            <p>© 2026 EvoluTea</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
