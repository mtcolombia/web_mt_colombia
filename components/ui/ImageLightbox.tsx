'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ZoomOut } from 'lucide-react'

// 1. Componente wrapper para mantener la retrocompatibilidad en proyectos/page.tsx
interface ImageLightboxProps {
  src:       string
  alt:       string
  width:     number
  height:    number
  className?: string
}

export function ImageLightbox({ src, alt, width, height, className = '' }: ImageLightboxProps) {
  return (
    <div className={`group relative block w-full rounded-[16px] overflow-hidden cursor-zoom-in ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height}
        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
      />
      <div className="absolute inset-0 bg-azul-profundo/0 group-hover:bg-azul-profundo/10
                      transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200
                         w-10 h-10 rounded-full bg-white/90 flex items-center justify-center
                         shadow-lg">
          <ZoomIn size={18} className="text-azul-profundo" />
        </span>
      </div>
    </div>
  )
}

// 2. Componente Lightbox Global que se inyecta en layout.tsx
export function GlobalImageLightbox() {
  const [src, setSrc] = useState<string | null>(null)
  const [alt, setAlt] = useState<string>('')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const img = target.closest('img')
      if (!img) return

      // Evitar que se abra si el click es en logos, avatares pequeños, iconos o cabecera
      const isNavOrHeader = img.closest('header') || img.closest('nav') || img.closest('.logo')
      if (isNavOrHeader) return

      const rect = img.getBoundingClientRect()
      // Ignorar iconos e imágenes decorativas muy pequeñas (logos, flags, etc.)
      if (rect.width < 45 || rect.height < 45) return

      const srcAttr = img.getAttribute('src')
      if (!srcAttr) return

      e.preventDefault()
      e.stopPropagation()

      // Extraer URL original si es una imagen optimizada de Next.js
      let finalSrc = srcAttr
      try {
        const urlObj = new URL(srcAttr, window.location.href)
        const nextUrl = urlObj.searchParams.get('url')
        if (nextUrl) {
          finalSrc = nextUrl
        }
      } catch (err) {
        // Fallback al src normal si falla el parseo URL
      }

      setSrc(finalSrc)
      setAlt(img.getAttribute('alt') || '')
      setScale(1)
    }

    document.addEventListener('click', handleGlobalClick, { capture: true })
    return () => document.removeEventListener('click', handleGlobalClick, { capture: true })
  }, [])

  if (!src) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-azul-profundo/95 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={() => setSrc(null)}
    >
      {/* Botones de control flotantes */}
      <div className="absolute top-5 right-5 flex items-center gap-3 z-[310]">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setScale(s => Math.min(s + 0.25, 3))
          }}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur cursor-pointer transition-all duration-200"
          aria-label="Acercar"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setScale(s => Math.max(s - 0.25, 0.75))
          }}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur cursor-pointer transition-all duration-200"
          aria-label="Alejar"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={() => setSrc(null)}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur cursor-pointer transition-all duration-200"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>
      </div>

      {/* Contenedor de la Imagen */}
      <div
        className="relative max-w-[90vw] max-h-[80vh] transition-transform duration-300 ease-out select-none flex flex-col items-center"
        style={{ transform: `scale(${scale})` }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl pointer-events-none"
        />
        {alt && (
          <p className="mt-4 text-center text-xs font-sans text-white/80 max-w-xl mx-auto bg-white/5 border border-white/10 py-1.5 px-4 rounded-full backdrop-blur-sm">
            {alt}
          </p>
        )}
      </div>
    </div>
  )
}
