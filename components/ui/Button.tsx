import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Variantes de botón — Manual de Marca MT Colombia
 *
 * primary   → azul-profundo bg + texto blanco  (fondos claros: blanco, beige)
 * light     → blanco bg + texto azul-profundo  (fondos oscuros: hero, CTABand)
 * secondary → borde azul-claro + texto azul-profundo (acción secundaria)
 *
 * Dorado NO se usa en botones. Se reserva para acentos visuales (iconos,
 * subrayados, badges) según el manual de marca.
 */
type ButtonVariant = 'primary' | 'light' | 'secondary'

interface ButtonProps {
  children:   React.ReactNode
  variant?:   ButtonVariant
  href?:      string
  onClick?:   () => void
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
  className?: string
  external?:  boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-[8px] font-sans font-semibold ' +
  'text-[15px] leading-none px-7 py-3.5 transition-all duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul-claro ' +
  'disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<ButtonVariant, string> = {
  // Fondo azul acción (#6FA8DC) — para fondos claros (blanco, beige)
  primary:
    'bg-azul-accion text-white hover:bg-azul-accion/85 active:scale-[0.99] shadow-sm',

  // Fondo blanco — para fondos oscuros (hero con overlay, CTABand)
  light:
    'bg-white text-azul-profundo hover:bg-white/90 active:scale-[0.99] shadow-sm',

  // Contorno azul claro — acción secundaria
  secondary:
    'border-[1.5px] border-azul-claro text-azul-texto bg-transparent hover:bg-azul-claro/10',
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled,
  className,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
