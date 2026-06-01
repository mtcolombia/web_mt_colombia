'use client'
/**
 * VideoEmbed — YouTube con lazy loading nativo.
 * Sin espacio negro: aspect-ratio 16/9, objeto fill.
 * Carga el iframe solo al hacer click (optimiza LCP y CLS).
 */
import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { ytThumbnail } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface VideoEmbedProps {
  videoId?:   string
  videoSrc?:  string
  posterSrc?: string   // thumbnail para videos locales (.mp4)
  title:     string
  className?: string
}

export function VideoEmbed({ videoId, videoSrc, posterSrc, title, className }: VideoEmbedProps) {
  const [active, setActive] = useState(false)

  const finalVideoSrc = videoId 
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
    : videoSrc

  return (
    <div className={cn('video-responsive', className)}>
      {active ? (
        videoId ? (
          <iframe
            src={finalVideoSrc}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video
            src={finalVideoSrc}
            title={title}
            controls
            autoPlay
            className="w-full h-full"
          />
        )
      ) : (
        <button
          onClick={() => setActive(true)}
          aria-label={`Reproducir: ${title}`}
          className="absolute inset-0 w-full h-full group"
        >
          {/* Thumbnail — YouTube o poster local */}
          {(videoId || posterSrc) && (
            <Image
              src={videoId ? ytThumbnail(videoId) : posterSrc!}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          )}
          {/* Overlay + botón play dorado */}
          <div className="absolute inset-0 bg-azul-profundo/30 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full bg-dorado/90 flex items-center justify-center
                         shadow-lg group-hover:scale-110 transition-transform duration-200"
            >
              <Play size={28} fill="currentColor" className="text-azul-profundo ml-1" />
            </div>
          </div>
        </button>
      )}
    </div>
  )
}
