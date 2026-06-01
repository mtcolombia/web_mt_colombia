'use client'
/**
 * MobileNav — Panel lateral deslizante para móvil.
 * Único componente client en el header (necesita estado de open/close).
 */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { type Nav } from '@/lib/schemas'
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/Button'

interface MobileNavProps {
  nav: Nav
}

export function MobileNav({ nav }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Bloquea scroll del body cuando el panel está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="lg:hidden p-2 text-azul-profundo focus:outline-none"
      >
        <Menu size={24} strokeWidth={1.5} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-azul-profundo/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Panel lateral */}
      <aside
        className={[
          'fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl lg:hidden',
          'flex flex-col px-6 py-8 gap-6',
          'transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0 visible pointer-events-auto' : 'translate-x-full invisible pointer-events-none',
        ].join(' ')}
        aria-label="Menú principal"
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
          className="self-end p-1 text-azul-profundo focus:outline-none"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <nav>
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 pl-3 border-l-2 text-base font-sans font-medium transition-colors
                               ${isActive 
                                 ? 'border-dorado text-dorado bg-dorado/[0.04]' 
                                 : 'border-transparent text-azul-profundo hover:text-dorado'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-auto">
          <Button href={routes.contacto} variant="primary" className="w-full text-center">
            Aprende Meditación Trascendental
          </Button>
        </div>
      </aside>
    </>
  )
}
