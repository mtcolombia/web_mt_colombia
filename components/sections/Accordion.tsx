'use client'

/**
 * Accordion — desplegables con auto-apertura progresiva al scroll.
 *
 * • 'use client' para IntersectionObserver + estado React
 * • Cada item se abre automáticamente cuando entra al viewport
 *   (cascade escalonado: index × 140 ms si entran juntos)
 * • Click alterna manualmente (toggle)
 * • Animación: grid-rows 0fr → 1fr (transición de altura sin height fijo)
 * • Chevron rota 180° al abrir
 * • Progressive: sin JS los items están cerrados pero clikables
 */

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AccordionItem {
  title:   string
  content: React.ReactNode
}

interface AccordionProps {
  items:      AccordionItem[]
  className?: string
}

/* ── Item individual ──────────────────────────────────────────────────────── */
function Item({ item, index }: { item: AccordionItem; index: number }) {
  const [open, setOpen]     = useState(false)
  const rootRef             = useRef<HTMLDivElement>(null)
  const triggeredRef        = useRef(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true
          // Cascade: items que entran en ráfaga abren con pequeño escalonado
          const delay = index * 140
          setTimeout(() => setOpen(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={rootRef} className="border-b border-azul-claro/25">

      {/* ── Cabecera clickable ───────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4
                   py-5 text-left
                   font-sans font-semibold text-[16px] text-azul-profundo
                   hover:text-azul-claro transition-colors duration-150"
      >
        <span>{item.title}</span>
        <ChevronDown
          size={18}
          className={cn(
            'shrink-0 text-azul-profundo/35 transition-transform duration-300',
            open && 'rotate-180 text-dorado',
          )}
        />
      </button>

      {/* ── Contenido animado (grid-rows trick) ─────────── */}
      <div
        aria-hidden={!open}
        className={cn(
          'grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pt-0.5 font-serif text-[15px] text-azul-profundo/78 leading-[1.8]">
            {item.content}
          </div>
        </div>
      </div>

    </div>
  )
}

/* ── Contenedor principal ─────────────────────────────────────────────────── */
export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn(className)}>
      {items.map((item, i) => (
        <Item key={i} item={item} index={i} />
      ))}
    </div>
  )
}
