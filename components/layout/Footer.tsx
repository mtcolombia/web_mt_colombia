import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, MessageCircle, Mail, ExternalLink } from 'lucide-react'
import { mainNav } from '@/lib/content/navigation'
import { contactInfo, socialLinks, institutionalLinks } from '@/lib/content/navigation'
import { routes } from '@/lib/routes'
import { whatsappLink } from '@/lib/utils'

const SOCIAL_ICONS = { Facebook, Instagram, Youtube } as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-azul-profundo text-white">
      <div className="container-site py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Logo + frase */}
          <div className="space-y-4">
            <Link href={routes.home} className="flex items-center gap-3">
              <Image
                src="/images/logo-arbol-dorado.png"
                alt="Fundación Maharishi de Colombia"
                width={40}
                height={40}
                className="h-10 w-10 object-contain rounded-full bg-white p-0.5"
              />
              <span className="font-display text-sm font-semibold text-white leading-tight">
                Meditación<br/>Trascendental
              </span>
            </Link>
            <p className="text-sm font-sans text-white/90 leading-relaxed max-w-[200px]">
              Desarrollo del pleno potencial humano a través de la Meditación Trascendental.
            </p>
          </div>

          {/* Col 2 — Navegación */}
          <nav aria-label="Navegación del footer">
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-dorado mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-sans text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Contacto */}
          <div>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-dorado mb-4">
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink(contactInfo.whatsappOficina.number, 'Hola, me interesa información sobre Meditación Trascendental')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-sans text-white/90 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="text-dorado shrink-0" />
                  {contactInfo.whatsappOficina.label}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(contactInfo.whatsappBusiness.number)}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-sans text-white/90 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="text-dorado shrink-0" />
                  {contactInfo.whatsappBusiness.label}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm font-sans text-white/90 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-dorado shrink-0" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Redes */}
          <div>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-dorado mb-4">
              Síguenos
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link) => {
                const Icon = SOCIAL_ICONS[link.icon as keyof typeof SOCIAL_ICONS]
                return (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"
                     aria-label={link.platform}
                     className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                                text-white/70 hover:text-white hover:border-dorado transition-all">
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
            <p className="text-xs font-sans font-semibold tracking-widest uppercase text-dorado mb-3">
              Institucional
            </p>
            <ul className="space-y-2">
              {institutionalLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1.5 text-sm font-sans text-white/90 hover:text-white transition-colors">
                    <ExternalLink size={13} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between
                        items-center gap-3 text-xs font-sans text-white/90">
          <p>© {year} Fundación Maharishi de Colombia</p>
          <p>Entidad sin ánimo de lucro · Colombia</p>
        </div>

      </div>
    </footer>
  )
}
