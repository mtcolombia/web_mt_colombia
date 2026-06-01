'use client'

/**
 * HeroPrimary — Hero de portada con carrusel de 4 locaciones colombianas.
 *
 * Tipografía corregida (manual de marca):
 *   H1 impacto  → font-sans  (Poppins Bold)   — geométrico, alta legibilidad
 *   Subtítulo   → font-display italic (Playfair) — elegancia editorial
 *
 * Overlay asimétrico:
 *   Izquierda muy oscuro → texto perfecto
 *   Derecha casi transparente → la foto de Colombia brilla
 *
 * Sin librerías externas. CSS scroll-snap + mínimo React para arrows/dots/autoplay.
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { routes } from '@/lib/routes'

interface HeroSlide {
  src:      string
  location: string
  alt:      string
}

const slides: HeroSlide[] = [
  { src: '/images/hero/1.jpeg', location: 'Colombia', alt: 'Paisaje de Colombia' },
  { src: '/images/hero/2.jpeg', location: 'Bogotá', alt: 'Vista panorámica de Bogotá' },
  { src: '/images/hero/3.jpeg', location: 'Valle del Cocora', alt: 'Palmas de cera en el Valle del Cocora' },
  { src: '/images/hero/4.jpeg', location: 'Parque Tayrona', alt: 'Costa del Parque Tayrona' },
]

export function HeroPrimary() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const target = (index + slides.length) % slides.length
    track.scrollTo({ left: target * track.clientWidth, behavior: 'smooth' })
    setCurrent(target)
  }, [])

  /* Autoplay 7 s */
  useEffect(() => {
    const id = setInterval(() => goTo(current + 1), 7000)
    return () => clearInterval(id)
  }, [current, goTo])

  /* Sync dot con scroll manual */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth)
      setCurrent(idx)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-[92vh] min-h-[600px] overflow-hidden bg-azul-profundo">

      {/* ── Slides ───────────────────────────────────────────────── */}
      <div ref={trackRef} className="carousel-track absolute inset-0">
        {slides.map((slide, i) => (
          <div key={i} className="carousel-item relative h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Gradiente asimétrico: izquierda opaco → derecha limpia */}
            <div className="absolute inset-0
              bg-[linear-gradient(to_right,_rgba(15,42,68,0.92)_0%,_rgba(15,42,68,0.70)_35%,_rgba(15,42,68,0.30)_60%,_rgba(15,42,68,0.08)_100%)]" />

            {/* Vignette inferior leve para contraste de badges */}
            <div className="absolute inset-0
              bg-[linear-gradient(to_top,_rgba(15,42,68,0.55)_0%,_transparent_30%)]" />
          </div>
        ))}
      </div>

      {/* ── Contenido principal ─────────────────────────────────── */}
      <div className="relative h-full flex items-center z-10">
        <div className="container-site w-full">
          <div className="max-w-[640px]">

            {/* Eyebrow — Poppins small caps con línea decorativa */}
            <div className="flex items-center gap-3 mb-9">
              <span className="w-7 h-px bg-dorado flex-shrink-0" aria-hidden="true" />
              <p className="font-sans text-dorado font-semibold text-xs tracking-[0.24em] uppercase">
                Fundación Maharishi de Colombia
              </p>
            </div>

            {/* H1 — POPPINS bold, impacto tipográfico */}
            <h1
              className="font-sans font-bold text-white leading-none
                         [font-size:clamp(2.5rem,7.5vw,4.8rem)]
                         [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]
                         mb-6"
            >
              La paz interior <br />
              <span className="text-azul-claro">el nuevo éxito.</span>
            </h1>

            {/* Subtítulo — PLAYFAIR itálico, elegancia editorial */}
            <p
              className="font-display italic text-white/80 leading-relaxed mb-10
                         [font-size:clamp(1.05rem,2.2vw,1.35rem)]
                         [text-shadow:0_1px_14px_rgba(0,0,0,0.30)]
                         max-w-[520px]"
            >
              Una tecnología natural, sin esfuerzo y científicamente validada
              para optimizar el funcionamiento cerebral y mejorar tu calidad de vida.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={`${routes.contacto}#formulario`}
                variant="light"
                className="text-sm md:text-base px-8 py-3.5 font-sans font-semibold"
              >
                Aprende Meditación Trascendental
              </Button>
              <a
                href="/#meditacion-trascendental"
                className="group flex items-center gap-2 font-sans text-sm font-medium
                           text-white/70 hover:text-white transition-colors"
              >
                Conoce la ciencia
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Badge de localización — derecha inferior ────────────── */}
      <div className="absolute bottom-10 right-8 z-10
                      flex items-center gap-2
                      bg-white/[0.08] backdrop-blur-md
                      border border-white/[0.14] rounded-full
                      px-4 py-2 shadow-[0_2px_12px_rgba(0,0,0,0.20)]">
        <MapPin size={11} className="text-dorado shrink-0" />
        <span className="font-sans text-white/80 text-xs tracking-[0.16em] uppercase">
          {slides[current].location}
        </span>
      </div>

      {/* ── Dots indicadores ─────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={[
              'h-1.5 rounded-full transition-all duration-300',
              i === current ? 'w-8 bg-dorado' : 'w-2 bg-white/35 hover:bg-white/60',
            ].join(' ')}
          />
        ))}
      </div>

      {/* ── Flechas de navegación ────────────────────────────────── */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Slide anterior"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10
                   w-11 h-11 rounded-full
                   border border-white/[0.18] bg-white/[0.07] backdrop-blur-sm
                   flex items-center justify-center text-white/70
                   hover:border-dorado hover:text-dorado
                   transition-all duration-200"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Slide siguiente"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10
                   w-11 h-11 rounded-full
                   border border-white/[0.18] bg-white/[0.07] backdrop-blur-sm
                   flex items-center justify-center text-white/70
                   hover:border-dorado hover:text-dorado
                   transition-all duration-200"
      >
        <ChevronRight size={18} />
      </button>

    </section>
  )
}
