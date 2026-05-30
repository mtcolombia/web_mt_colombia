import Link from 'next/link'
import Image from 'next/image'
import { mainNav } from '@/lib/content/navigation'
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/Button'
import { MobileNav } from './MobileNav'

/**
 * Header sticky:
 * [Sello — borde izq]   [Nav centrado — 12.5px]   [CTA compacto | hamburguesa]
 *
 * El logo/sello está pegado al borde de pantalla (pl-4 lg:pl-8).
 * Sin texto de marca junto al sello — elimina títulos competidores.
 */
export function Header() {
  const desktopNav = mainNav.filter((item) => item.href !== routes.home)

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-azul-profundo/[0.07]">
      <div className="flex items-center h-16">

        {/* ── Sello — pegado al borde izquierdo ─── */}
        <Link
          href={routes.home}
          className="pl-4 md:pl-6 lg:pl-8 pr-4 shrink-0 flex items-center group"
          aria-label="Inicio — Meditación Trascendental Colombia"
        >
          <Image
            src="/images/logo-sello.jpg"
            alt="Fundación Maharishi de Colombia"
            width={38}
            height={38}
            priority
            className="h-[38px] w-[38px] rounded-full object-cover
                       ring-1 ring-azul-profundo/10 group-hover:ring-dorado/50
                       transition-all duration-300"
          />
        </Link>

        {/* ── Nav centrado + CTA ────────────────── */}
        <div className="flex-1 flex items-center justify-between min-w-0 pr-4 md:pr-6 lg:pr-8">

          <nav
            className="hidden lg:flex items-center flex-1 justify-center"
            aria-label="Navegación principal"
          >
            {desktopNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2.5 py-1.5 text-[12.5px] font-sans font-medium
                           text-azul-profundo/75 hover:text-azul-profundo
                           transition-colors whitespace-nowrap group/link"
              >
                {item.label}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-dorado
                                 origin-left scale-x-0 group-hover/link:scale-x-100
                                 transition-transform duration-200" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              href={`${routes.contacto}#formulario`}
              className="hidden lg:inline-flex text-[11px] tracking-wide px-4 py-2 whitespace-nowrap"
            >
              Aprende MT
            </Button>
            <MobileNav nav={mainNav} />
          </div>

        </div>
      </div>
    </header>
  )
}
