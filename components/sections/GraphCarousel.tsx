'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const graphs = [
  { src: '/images/mt-graficos/nivel-activo-mente.jpg', alt: 'Nivel activo de la mente y trascendencia sin esfuerzo' },
  { src: '/images/mt-graficos/campo-unificado-conciencia.jpg', alt: 'Campo Unificado de las leyes físicas y Conciencia Pura' },
  { src: '/images/mt-graficos/01-percepcion-memoria.jpg', alt: 'Mejora de la percepción y memoria' },
  { src: '/images/mt-graficos/02-descanso-profundo.jpg',  alt: 'Indicadores fisiológicos de descanso profundo' },
  { src: '/images/mt-graficos/03-reversion-envejecimiento.jpg', alt: 'Reversión del envejecimiento biológico' },
  { src: '/images/mt-graficos/disminucion-depresion.jpg', alt: 'Disminución de la depresión en estudiantes' },
  { src: '/images/mt-graficos/relaciones-laborales.jpg', alt: 'Mejora de las relaciones laborales y personales' },
  { src: '/images/mt-graficos/rendimiento-trabajo.jpg', alt: 'Mejoras del rendimiento en el trabajo' },
  { src: '/images/home-stress-grafico.jpg', alt: 'Gráfico científico de reducción de ansiedad y estrés' },
]

interface GraphCarouselProps {
  className?: string
}

export function GraphCarousel({ className = '' }: GraphCarouselProps) {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => Math.max(0, i - 1))
  const next = () => setActive((i) => Math.min(graphs.length - 1, i + 1))

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Imagen activa */}
      <div className="relative rounded-[16px] overflow-hidden bg-white
                      shadow-[0_8px_32px_rgba(15,42,68,0.10)] border border-azul-profundo/[0.06]">
        <Image
          key={active}
          src={graphs[active].src}
          alt={graphs[active].alt}
          width={600}
          height={400}
          className="w-full h-auto object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={prev}
          disabled={active === 0}
          aria-label="Gráfico anterior"
          className="w-8 h-8 rounded-full border border-azul-profundo/20 flex items-center justify-center
                     text-azul-profundo/50 hover:border-dorado hover:text-dorado
                     disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={15} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {graphs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Gráfico ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === active
                  ? 'w-4 h-2 bg-dorado'
                  : 'w-2 h-2 bg-azul-profundo/20 hover:bg-dorado/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={active === graphs.length - 1}
          aria-label="Gráfico siguiente"
          className="w-8 h-8 rounded-full border border-azul-profundo/20 flex items-center justify-center
                     text-azul-profundo/50 hover:border-dorado hover:text-dorado
                     disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Contador */}
      <p className="text-center font-sans text-xs text-azul-profundo/40">
        {active + 1} / {graphs.length}
      </p>
    </div>
  )
}
