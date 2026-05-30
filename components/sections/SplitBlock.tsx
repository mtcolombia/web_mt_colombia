import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SplitBlockProps {
  imageSrc:     string
  imageAlt:     string
  imageRight?:  boolean       // por defecto imagen a la izquierda
  children:     React.ReactNode
  bg?:          'white' | 'beige'
  className?:   string
}

/**
 * Bloque split 50/50 imagen + texto.
 * Alterna el lado de la imagen entre bloques consecutivos con imageRight.
 * En móvil: imagen arriba, texto abajo (apila verticalmente).
 */
export function SplitBlock({
  imageSrc,
  imageAlt,
  imageRight = false,
  children,
  bg = 'white',
  className,
}: SplitBlockProps) {
  return (
    <section
      className={cn(
        'section-y',
        bg === 'beige' ? 'bg-beige' : 'bg-white',
        className,
      )}
    >
      <div
        className={cn(
          'container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
          imageRight && 'lg:[&>*:first-child]:order-last',
        )}
      >
        {/* Imagen */}
        <div className="relative h-72 sm:h-96 lg:h-full min-h-[400px] rounded-[var(--radius-img)] overflow-hidden shadow-card">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center">
          {children}
        </div>
      </div>
    </section>
  )
}
