import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { routes } from '@/lib/routes'

interface CTABandProps {
  title?:        string
  subtitle?:     string
  cta?:          string
  href?:         string
  /** URL de imagen de fondo paisajística opcional */
  imageSrc?:     string
  /** Opacidad de la imagen (0–1). Por defecto 0.20 */
  imageOpacity?: number
}

/**
 * Banda CTA — fondo azul profundo, texto blanco.
 * Acepta imagen de fondo paisajística opcional.
 * Usa variante "light" (blanco) para que el botón contraste.
 */
export function CTABand({
  title        = 'Descubre la Meditación Trascendental',
  subtitle     = 'Únete a la charla informativa gratuita y virtual. Sin compromiso, sin experiencia previa.',
  cta          = 'Aprende Meditación Trascendental',
  href         = `${routes.contacto}#formulario`,
  imageSrc,
  imageOpacity = 0.20,
}: CTABandProps) {
  return (
    <section className="relative bg-azul-profundo text-white overflow-hidden section-y">
      {imageSrc && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            style={{ opacity: imageOpacity }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-azul-profundo/65" />
        </div>
      )}
      <div className="relative container-site text-center prose-width">
        <h2 className="text-white text-3xl md:text-4xl mb-4">{title}</h2>
        {subtitle && (
          <p className="text-white/75 font-sans mb-8 text-lg">{subtitle}</p>
        )}
        <Button href={href} variant="light" className="text-base px-10 py-4">
          {cta}
        </Button>
      </div>
    </section>
  )
}
