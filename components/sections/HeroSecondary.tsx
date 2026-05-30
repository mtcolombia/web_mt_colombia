import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { routes } from '@/lib/routes'

interface Breadcrumb {
  label: string
  href?: string
}

interface HeroSecondaryProps {
  title:       string
  subtitle?:   string
  breadcrumbs: Breadcrumb[]
  imageSrc?:   string
  videoSrc?:   string
}

/**
 * Hero secundario — páginas interiores (40–50 vh).
 * Banda con imagen/video de fondo, overlay azul y breadcrumb.
 */
export function HeroSecondary({
  title,
  subtitle,
  breadcrumbs,
  imageSrc = '/images/hero-secondary-default.jpg',
  videoSrc,
}: HeroSecondaryProps) {
  return (
    <section
      className="relative flex items-center min-h-[45vh] bg-azul-profundo overflow-hidden"
      style={videoSrc ? undefined : {
        backgroundImage:    `url(${imageSrc})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Video de fondo */}
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-azul-profundo/65" />

      <div className="relative container-site py-20 text-white">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm font-sans text-white/60">
            <li>
              <Link href={routes.home} className="hover:text-white transition-colors">
                Inicio
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight size={14} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-white/80 font-sans text-lg max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
