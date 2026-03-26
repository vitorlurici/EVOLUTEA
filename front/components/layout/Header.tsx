"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { LogIn } from "lucide-react"
import { playfairSC } from "@/lib/fonts"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className={`flex items-center text-white font-bold text-3xl tracking-tight ${playfairSC.className}`}>
              <img src="/logo.svg" alt="EVOLUTEA Logo" className="h-11 w-auto mr-2 object-contain" />
              EvoluTEA
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/90">
          <Link href="/" className="hover:text-white hover:underline underline-offset-4 decoration-2">
            Home
          </Link>
          <Link href="#o-que-e-autismo" className="hover:text-white transition-colors">
            O que é o autismo?
          </Link>
          <Link href="#nosso-proposito" className="hover:text-white transition-colors">
            Nosso propósito
          </Link>
        </nav>

        <div className="flex items-center">
          <Button href="/login" variant="secondary" className="gap-2 font-semibold">
            Iniciar Sessão <LogIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
