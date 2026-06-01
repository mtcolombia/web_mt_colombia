'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface TestimonialCardProps {
  name:    string
  role:    string
  img:     string
  videoId: string
}

export function TestimonialCard({ name, role, img, videoId }: TestimonialCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="group">
      {/* Contenedor aspect-square (1:1) — aspect nativo de los recursos estáticos 1080x1080 */}
      <div className="relative aspect-square rounded-[16px] overflow-hidden
                      shadow-[0_8px_32px_rgba(15,42,68,0.14)]">
 
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            {/* Gradiente inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/70 via-transparent to-transparent" />

            {/* Botón play */}
            <button
              onClick={() => setPlaying(true)}
              aria-label={`Ver testimonio de ${name}`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="w-12 h-12 rounded-full bg-white/15 border border-white/50
                               flex items-center justify-center backdrop-blur-sm
                               group-hover:bg-dorado/85 group-hover:border-dorado
                               transition-all duration-300">
                <Play size={18} className="text-white fill-white ml-0.5" />
              </span>
            </button>

            {/* Nombre y rol */}
            <div className="absolute bottom-0 inset-x-0 p-3 pointer-events-none">
              <p className="font-sans font-semibold text-white text-[13px] leading-snug">
                {name}
              </p>
              <p className="font-sans text-white/60 text-[11px] mt-0.5 leading-tight">
                {role}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
