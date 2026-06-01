'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

interface ImageLightboxProps {
  src:       string
  alt:       string
  width:     number
  height:    number
  className?: string
}

export function ImageLightbox({ src, alt, width, height, className = '' }: ImageLightboxProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Imagen clickeable */}
      <button
        onClick={() => setOpen(true)}
        aria-label={`Ampliar: ${alt}`}
        className={`group relative block w-full rounded-[16px] overflow-hidden cursor-zoom-in ${className}`}
      >
        <Image src={src} alt={alt} width={width} height={height}
          className="w-full h-auto object-contain" />
        <div className="absolute inset-0 bg-azul-profundo/0 group-hover:bg-azul-profundo/10
                        transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity
                           w-10 h-10 rounded-full bg-white/90 flex items-center justify-center
                           shadow-lg">
            <ZoomIn size={18} className="text-azul-profundo" />
          </span>
        </div>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-azul-profundo/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20
                       flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-auto rounded-[16px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto object-contain bg-white rounded-[16px]"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
