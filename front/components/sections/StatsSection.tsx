"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / (duration * 1000), 1)
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(from + (to - from) * easeProgress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-white tabular-nums tracking-tighter">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Counter from={0} to={850} suffix="+" />
            <p className="text-xl text-white/90 mt-4 font-medium">Famílias atendidas</p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Counter from={0} to={95} suffix="%" />
            <p className="text-xl text-white/90 mt-4 font-medium">Taxa de evolução nos primeiros meses</p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <Counter from={0} to={24} suffix="/7" />
            <p className="text-xl text-white/90 mt-4 font-medium">Suporte para os pais</p>
          </div>
        </div>
      </div>
    </section>
  )
}
