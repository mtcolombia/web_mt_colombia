'use client'

/**
 * Slider — componente canónico CSS + mínimo JS
 *
 * • CSS scroll-snap para el deslizamiento
 * • IntersectionObserver para trackear slide activo (dots)
 * • Arrows prev/next funcionales
 * • Reutilizable: pasa `slides` como array de ReactNode
 * • Background atmosférico opcional con opacidad configurable
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SliderSlide {
  id:      string
  content: React.ReactNode
}

interface SliderProps {
  slides:             SliderSlide[]
  id?:                string
  backgroundSrc?:     string
  backgroundOpacity?: number
  gradientFrom?:      string
  lightGradient?:     boolean
  darkBg?:            boolean
  fillHeight?:        boolean          // true → track ocupa todo el espacio disponible (requiere padre con altura definida)
  className?:         string
  slideClassName?:    string
}

export function Slider({
  slides,
  id,
  backgroundSrc,
  backgroundOpacity = 0.30,
  gradientFrom = 'beige',
  lightGradient = false,
  darkBg = false,
  fillHeight = false,
  className,
  slideClassName,
}: SliderProps) {
  const trackRef   = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  /* ── Sincronizar slide activo mediante scroll nativo (inmune a fraccionamiento por DPI) ── */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const width = track.clientWidth
      if (width === 0) return
      const idx = Math.round(track.scrollLeft / width)
      if (idx >= 0 && idx < slides.length) {
        setActive(idx)
      }
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    // Disparar una vez al montar para asegurar consistencia
    onScroll()

    return () => track.removeEventListener('scroll', onScroll)
  }, [slides.length])

  /* ── Navegar al índice ────────────────────────────────────────── */
  const goTo = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    const target = track.children[idx] as HTMLElement | undefined
    if (!target) return
    track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
  }, [])

  const prev = () => goTo(Math.max(0, active - 1))
  const next = () => goTo(Math.min(slides.length - 1, active + 1))

  return (
    <div id={id} className={cn('relative overflow-hidden', fillHeight && 'flex flex-col', className)}>

      {/* Fondo atmosférico */}
      {backgroundSrc && (
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <Image
            src={backgroundSrc}
            alt=""
            fill
            className="object-cover"
            style={{ opacity: backgroundOpacity }}
            sizes="100vw"
          />
          {/* Gradient — heavy (opaco) por defecto, light cuando lightGradient=true */}
          <div
            className="absolute inset-0"
            style={lightGradient ? {
              background: `linear-gradient(to bottom,
                color-mix(in srgb, var(--color-${gradientFrom}, #0F2A44) 75%, transparent) 0%,
                color-mix(in srgb, var(--color-${gradientFrom}, #0F2A44) 35%, transparent) 50%,
                color-mix(in srgb, var(--color-${gradientFrom}, #0F2A44) 75%, transparent) 100%)`,
            } : {
              background: `linear-gradient(to bottom,
                var(--color-${gradientFrom}, #F5F1E8) 0%,
                color-mix(in srgb, var(--color-${gradientFrom}, #F5F1E8) 85%, transparent) 50%,
                var(--color-${gradientFrom}, #F5F1E8) 100%)`,
            }}
          />
        </div>
      )}

      {/* Track scroll-snap */}
      <div
        ref={trackRef}
        className={cn(
          'relative flex overflow-x-scroll snap-x snap-mandatory scroll-smooth',
          '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
          fillHeight && 'flex-1 min-h-0',
        )}
      >
        {slides.map(({ id, content }) => (
          <div
            key={id}
            id={id}
            data-slide
            className={cn('w-full shrink-0 snap-start', fillHeight && 'h-full', slideClassName)}
          >
            {content}
          </div>
        ))}
      </div>

      {/* Barra de navegación — arrows + dots */}
      <div className={cn('relative flex items-center justify-center gap-5 py-5', fillHeight && 'shrink-0')}>

        {/* Flecha prev */}
        <button
          onClick={prev}
          disabled={active === 0}
          aria-label="Diapositiva anterior"
          className={cn(
            'w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold',
            'disabled:opacity-30 disabled:cursor-not-allowed transition-all',
            darkBg
              ? 'border-dorado/70 text-dorado hover:border-dorado hover:bg-dorado/20'
              : 'border-azul-profundo/25 text-azul-profundo/60 hover:border-dorado hover:text-dorado',
          )}
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a diapositiva ${i + 1}`}
              className={cn(
                'rounded-full transition-all duration-300',
                i === active
                  ? 'w-6 h-3 bg-dorado shadow-[0_0_8px_rgba(184,134,11,0.7)]'
                  : cn(
                      'w-3 h-3',
                      darkBg
                        ? 'bg-white/40 hover:bg-dorado/70'
                        : 'bg-azul-profundo/20 hover:bg-dorado/50',
                    ),
              )}
            />
          ))}
        </div>

        {/* Flecha next */}
        <button
          onClick={next}
          disabled={active === slides.length - 1}
          aria-label="Diapositiva siguiente"
          className={cn(
            'w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold',
            'disabled:opacity-30 disabled:cursor-not-allowed transition-all',
            darkBg
              ? 'border-dorado/70 text-dorado hover:border-dorado hover:bg-dorado/20'
              : 'border-azul-profundo/25 text-azul-profundo/60 hover:border-dorado hover:text-dorado',
          )}
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>

      </div>
    </div>
  )
}
