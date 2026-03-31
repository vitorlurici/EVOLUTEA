"use client"
import { useRef, useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setHasStarted(true)
    }
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Conheça a nossa essência</h2>
          <p className="text-gray-600 text-lg">
            Descubra por que dezenas de famílias escolhem o método EvoluTEA todos os dias.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-primary border-4 border-white transition-all group">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            controls={hasStarted}
            preload="metadata"
            onPlay={() => setHasStarted(true)}
          >
            {/* Adding #t=0.1 extracts the first frame to use as the thumbnail poster automatically on most browsers */}
            <source src="/intro.mp4#t=0.1" type="video/mp4" />
            Seu navegador não suporta a visualização de vídeos. Por favor, atualize seu navegador ou baixe o vídeo diretamente.
          </video>

          {!hasStarted && (
            <div 
              className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/10 hover:bg-black/30 transition-colors"
              onClick={handlePlay}
            >
              <div className="relative z-10 w-24 h-24 bg-accent/90 backdrop-blur-md rounded-full flex items-center justify-center pl-2 group-hover:scale-110 group-hover:bg-accent transition-all shadow-xl border-2 border-white/20">
                <Play className="w-12 h-12 text-white fill-current drop-shadow-md" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
