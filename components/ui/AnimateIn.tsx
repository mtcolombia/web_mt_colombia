'use client'

/**
 * AnimateIn — kit de animaciones de entrada ligero y reutilizable
 *
 * • Progressive enhancement: sin JS el elemento es visible (sin opacidad 0)
 * • Con JS: data-ready se activa en mount → elemento oculto
 *           data-visible se activa cuando entra al viewport → transición a visible
 * • Variantes: fade-up | fade-in | scale-in | fade-left | fade-right
 * • Delay: 0–5 × 100 ms
 * • once=true: deja de observar tras primera aparición (default)
 *
 * Uso en grid/flex: pasar las clases de layout al className, el <div>
 * se convierte en el item del grid y los hijos lo llenan con h-full.
 */

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export type AnimVariant = 'fade-up' | 'fade-in' | 'scale-in' | 'fade-left' | 'fade-right'

interface AnimateInProps {
  children:   React.ReactNode
  variant?:   AnimVariant
  delay?:     0 | 1 | 2 | 3 | 4 | 5   // × 100 ms
  once?:      boolean
  threshold?: number                    // 0–1, default 0.15
  className?: string
}

export function AnimateIn({
  children,
  variant   = 'fade-up',
  delay     = 0,
  once      = true,
  threshold = 0.15,
  className,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Activa el estado inicial oculto sólo cuando JS está disponible
    el.setAttribute('data-ready', 'true')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', 'true')
          if (once) observer.disconnect()
        } else if (!once) {
          el.removeAttribute('data-visible')
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  return (
    <div
      ref={ref}
      data-anim={variant}
      data-delay={delay > 0 ? delay : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  )
}
