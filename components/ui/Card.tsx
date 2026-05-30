import { cn } from '@/lib/utils'

interface CardProps {
  children:  React.ReactNode
  bg?:       'white' | 'beige'
  className?: string
}

/** Tarjeta base del Design System */
export function Card({ children, bg = 'white', className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-card)] p-6 shadow-card',
        bg === 'beige' ? 'bg-beige' : 'bg-white',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Tarjeta de beneficio — icono + título + descripción */
export function BenefitCard({
  icon,
  title,
  description,
  bg = 'white',
}: {
  icon:         React.ReactNode
  title:        string
  description?: string
  bg?:          'white' | 'beige'
}) {
  return (
    <Card bg={bg} className="flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl bg-dorado/10 flex items-center justify-center text-dorado">
        {icon}
      </div>
      <h4 className="font-sans font-semibold text-azul-profundo">{title}</h4>
      {description && (
        <p className="text-sm font-serif text-azul-profundo/75">{description}</p>
      )}
    </Card>
  )
}
