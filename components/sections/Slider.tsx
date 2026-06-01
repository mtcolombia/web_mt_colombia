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
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SliderSlide {
  id:      string
  content: React.ReactNode
}

interface SearchItem {
  title: string
  date?: string
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
  searchList?:        SearchItem[]     // buscador opcional
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
  searchList,
}: SliderProps) {
  const trackRef   = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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

        {/* Dots o Contador Numérico Inteligente */}
        {slides.length > 12 ? (
          <div className="flex items-center gap-2">
            <span className={cn(
              "font-sans text-[11px] font-bold tracking-widest px-4.5 py-1.5 rounded-full border shadow-sm select-none",
              darkBg 
                ? "border-white/10 text-white/80 bg-white/[0.03]" 
                : "border-azul-profundo/10 text-azul-profundo/70 bg-azul-profundo/[0.01]"
            )}>
              <span className="text-dorado">{active + 1}</span>
              <span className="opacity-30 px-2">/</span>
              <span>{slides.length}</span>
            </span>

            {searchList && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSearch(true);
                }}
                aria-label="Abrir buscador"
                className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center transition-all",
                  darkBg
                    ? "border-white/10 text-white/80 hover:border-dorado hover:text-dorado hover:bg-white/5"
                    : "border-azul-profundo/10 text-azul-profundo/60 hover:border-dorado hover:text-dorado hover:bg-azul-profundo/5"
                )}
              >
                <Search size={13} />
              </button>
            )}
          </div>
        ) : (
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
        )}

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

      {/* Drawer buscador interactivo */}
      {showSearch && searchList && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-azul-profundo/40 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setShowSearch(false)}
          />
          {/* Sliding Panel */}
          <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col z-10 transition-transform duration-300">
            {/* Header */}
            <div className="p-6 border-b border-azul-profundo/[0.08] flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-azul-profundo text-lg">
                  Índice de Noticias
                </h3>
                <p className="text-[11px] font-sans text-azul-profundo/45 font-medium uppercase tracking-wider">
                  Busca y navega de inmediato
                </p>
              </div>
              <button 
                onClick={() => setShowSearch(false)}
                className="p-2 rounded-full hover:bg-azul-profundo/5 text-azul-profundo/60 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 bg-beige/30 border-b border-azul-profundo/[0.04]">
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-azul-profundo/40" />
                <input
                  type="text"
                  placeholder="Buscar noticia por título o palabra..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-azul-profundo/10 bg-white font-sans text-sm text-azul-profundo placeholder:text-azul-profundo/30 focus:outline-none focus:border-dorado transition-colors"
                />
              </div>
            </div>

            {/* List with Scroll */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-azul-profundo/15 [&::-webkit-scrollbar-thumb]:rounded-full">
              {searchList
                .map((item, index) => ({ ...item, index }))
                .filter(item => 
                  item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
                  (item.date && item.date.includes(searchQuery))
                )
                .map((item) => (
                  <button
                    key={item.index}
                    onClick={() => {
                      goTo(item.index);
                      setShowSearch(false);
                    }}
                    className={cn(
                      "w-full text-left p-3.5 rounded-[16px] border transition-all duration-200 flex flex-col gap-1.5",
                      active === item.index
                        ? "border-dorado bg-dorado/[0.03] shadow-sm"
                        : "border-azul-profundo/[0.04] bg-white hover:border-azul-claro/20 hover:bg-azul-claro/[0.01]"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      {item.date && (
                        <span className="text-[10px] font-sans font-bold text-azul-claro uppercase tracking-wider">
                          {item.date}
                        </span>
                      )}
                      <span className={cn(
                        "text-[9px] font-sans font-bold px-2 py-0.5 rounded",
                        active === item.index
                          ? "bg-dorado/10 text-dorado"
                          : "bg-azul-profundo/5 text-azul-profundo/40"
                      )}>
                        Noticia {item.index + 1}
                      </span>
                    </div>
                    <h4 className="font-sans font-semibold text-azul-profundo text-sm leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                  </button>
                ))
              }
              
              {/* Empty state */}
              {searchList.filter(item => 
                item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
              ).length === 0 && (
                <div className="text-center py-12 space-y-2">
                  <p className="text-sm font-sans text-azul-profundo/40 font-medium">
                    No se encontraron noticias.
                  </p>
                  <p className="text-xs font-sans text-azul-profundo/30">
                    Prueba con otro término de búsqueda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
