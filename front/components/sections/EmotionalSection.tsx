export function EmotionalSection() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542037104853-ff741c96e3b8?auto=format&fit=crop&w=1920&q=80')",
          backgroundColor: "#2A4860", // Fallback
          backgroundPosition: "center 30%"
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/40 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-lg font-serif italic">
          &quot;Sabemos que cada criança é única — e cada avanço, por menor que pareça, é uma grande conquista.&quot;
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8 opacity-80" />
        <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
          Estamos aqui para celebrar cada pequeno passo com você e sua família.
        </p>
      </div>
    </section>
  )
}
