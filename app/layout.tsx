import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins, Lora } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

/* ─────────────────────────────────────────────────────────────────────────────
   FUENTES — next/font elimina layout shift y cero peticiones externas en prod.
   Variable CSS inyectada en <html>; Tailwind @theme las referencia.
───────────────────────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-playfair',
  display:  'swap',
})

const poppins = Poppins({
  subsets:  ['latin'],
  weight:   ['400', '500', '600'],
  variable: '--font-poppins',
  display:  'swap',
})

const lora = Lora({
  subsets:  ['latin'],
  variable: '--font-lora',
  display:  'swap',
})

/* ─────────────────────────────────────────────────────────────────────────────
   METADATA BASE — heredada por todas las páginas; cada página puede extenderla.
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://meditaciontrascendental.co'), // ajustar dominio final
  title: {
    template: '%s · Meditación Trascendental Colombia',
    default:  'Meditación Trascendental Colombia · Fundación Maharishi',
  },
  description:
    'Aprende Meditación Trascendental en Colombia. Técnica natural, sin esfuerzo, científicamente validada. Fundación Maharishi de Colombia — instructores certificados internacionalmente.',
  keywords: [
    'Meditación Trascendental',
    'MT Colombia',
    'Fundación Maharishi',
    'meditación Bogotá',
    'reducción de estrés',
    'bienestar mental',
  ],
  openGraph: {
    type:   'website',
    locale: 'es_CO',
    siteName: 'Meditación Trascendental Colombia',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F2A44',
  width: 'device-width',
  initialScale: 1,
}

/* ─────────────────────────────────────────────────────────────────────────────
   ROOT LAYOUT — shell único: Header + {page} + Footer.
   Axioma de Suh: este es el único lugar donde vive el chrome global.
───────────────────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${poppins.variable} ${lora.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
