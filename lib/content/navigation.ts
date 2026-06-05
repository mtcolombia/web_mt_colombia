import { type Nav } from '@/lib/schemas'
import { routes } from '@/lib/routes'

/** Navegación principal — 8 enlaces del manual */
export const mainNav: Nav = [
  { label: 'Inicio',                    href: routes.home },
  { label: 'Meditación Trascendental',  href: routes.mt },
  { label: 'Nosotros',                  href: routes.nosotros },
  { label: 'Programas y Tecnologías',   href: routes.programas },
  { label: 'Proyectos',                 href: routes.proyectos },
  { label: 'Actividades',               href: routes.actividades },
  { label: 'Blog',                      href: routes.blog },
  { label: 'Contacto',                  href: routes.contacto },
]

/** Datos de contacto rápido — footer y página Contacto */
export const contactInfo = {
  whatsappOficina:  { number: '573152155586', label: '315 215 55 86' },
  whatsappBusiness: { number: '573126742612', label: '312 674 26 12' },
  email:            'meditaciontrascendental1917@gmail.com',
} as const

/** Redes sociales */
export const socialLinks = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/meditaciontrascendentalcol',
    icon: 'Facebook',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/meditacion_trascendental_col',
    icon: 'Instagram',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@meditaciontrascendentalcol5205',
    icon: 'Youtube',
  },
] as const

/** Enlaces institucionales externos */
export const institutionalLinks = [
  { label: 'MIU',           url: 'https://miu.edu' },
  { label: 'Maharishi Veda', url: 'https://maharishiveda.com' },
] as const
