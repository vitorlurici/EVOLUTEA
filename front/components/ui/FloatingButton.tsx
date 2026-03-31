"use client"
import { MessageCircle } from "lucide-react"

export function FloatingButton() {
  return (
    <button 
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="Falar conosco no WhatsApp"
      onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-3 font-semibold group-hover:pr-2">
        Fale conosco
      </span>
    </button>
  )
}
