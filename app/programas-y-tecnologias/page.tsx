import type { Metadata } from 'next'
import Image from 'next/image'
import * as LucideIcons from 'lucide-react'
import { HeroSecondary } from '@/components/sections/HeroSecondary'
import { CTABand }       from '@/components/sections/CTABand'
import { VideoEmbed }    from '@/components/sections/VideoEmbed'
import { cn }            from '@/lib/utils'
import { programs }      from '@/lib/content/programs'

export const metadata: Metadata = {
  title: 'Programas y Tecnologías',
  description:
    'Catálogo completo de tecnologías védicas Maharishi: Gandharva Veda, Marmas, Yoga Maharishi, Técnicas Avanzadas de MT y Programa de Sidhis.',
}

function DynamicIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[name]
  if (!Icon) return null
  return <Icon size={size} />
}

export default function ProgramasPage() {
  return (
    <>
      <HeroSecondary
        title="Programas y Tecnologías"
        subtitle="Tecnologías védicas Maharishi para el bienestar integral"
        breadcrumbs={[{ label: 'Programas y Tecnologías' }]}
        imageSrc="/images/hero-programas.jpg"
      />

      {/* Índice de anclas */}
      <section className="section-y bg-beige">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl mb-10 text-center">Tecnologías disponibles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {programs.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-white rounded-[var(--radius-card)] p-4 text-center
                           shadow-card hover:shadow-lg hover:-translate-y-1
                           transition-all duration-200 text-sm font-sans font-medium text-azul-profundo"
              >
                {p.name.split('(')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Secciones de programa */}
      {programs.map((program, i) => {
        const imageRight = i % 2 !== 0
        const bg: 'white' | 'beige' = i % 2 === 0 ? 'white' : 'beige'
        const hasRealVideo = program.videoId && !program.videoId.startsWith('PLACEHOLDER')
        return (
          <section
            key={program.id}
            id={program.id}
            className={cn('section-y scroll-mt-20', bg === 'beige' ? 'bg-beige' : 'bg-white')}
          >
            <div
              className={cn(
                'container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
                imageRight && 'lg:[&>*:first-child]:order-last',
              )}
            >
              <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-[var(--radius-img)] overflow-hidden shadow-card bg-white mx-auto">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl mb-2 text-azul-profundo">{program.name}</h3>
                <p className="text-[#8a6e2d] font-sans font-medium mb-4">{program.tagline}</p>
                {program.description.split(/\n\s*\n/).map((paragraph, index) => (
                  <p key={index} className="font-serif text-azul-profundo mb-4 last:mb-6">
                    {paragraph.trim()}
                  </p>
                ))}

                <h4 className="font-sans font-semibold mb-3 text-azul-profundo">Beneficios</h4>
                <ul className="space-y-2.5">
                  {program.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 font-serif text-base text-azul-profundo leading-relaxed">
                      <span className="text-[#8a6e2d] shrink-0 mt-1">
                        <DynamicIcon name={b.icon} size={16} />
                      </span>
                      {b.text}
                    </li>
                  ))}
                </ul>

                {hasRealVideo && (
                  <div className="mt-8">
                    <VideoEmbed videoId={program.videoId!} title={program.name} />
                  </div>
                )}
              </div>
            </div>
          </section>
        )
      })}

      <CTABand title="¿Listo para comenzar?" />
    </>
  )
}
