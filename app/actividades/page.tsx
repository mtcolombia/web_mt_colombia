import type { Metadata } from 'next'
import Image from 'next/image'
import { CalendarDays, Users, Home, ArrowRight, Sparkles, MapPin, Clock } from 'lucide-react'
import { HeroSecondary } from '@/components/sections/HeroSecondary'
import { CTABand }       from '@/components/sections/CTABand'
import { Button }        from '@/components/ui/Button'
import { routes }        from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Actividades',
  description:
    'Centro de Meditación Trascendental Colombia en Bogotá. Cursos, retiros, jornadas grupales y formación personalizada.',
}

const activities = [
  {
    n: '01',
    icon: <Users size={20} />,
    title: 'Formación personalizada',
    body: 'Cursos personalizados adaptados a cada persona: instrucción individual guiada, seguimiento de la práctica correcta y verificación de los mecanismos correctos de la Meditación Trascendental.',
  },
  {
    n: '02',
    icon: <Sparkles size={20} />,
    title: 'Técnicas Avanzadas y Tecnologías Védicas',
    body: 'Para quienes desean profundizar: Técnicas Avanzadas de MT, conocimiento védico aplicado y programas de desarrollo de la conciencia. Mayor estabilidad interna, expansión del potencial mental y refinamiento mente-cuerpo.',
  },
  {
    n: '03',
    icon: <CalendarDays size={20} />,
    title: 'Jornadas de bienestar (cada 15 días)',
    body: 'Los meditadores se reúnen periódicamente en el Centro MT Bogotá: verificación de mecanismos, resolución de dudas, práctica grupal, ejercicios de integración neuromuscular, sesiones de yoga, aromaterapia y técnicas de respiración.',
  },
  {
    n: '04',
    icon: <Home size={20} />,
    title: 'Seguimiento continuo',
    body: 'Acompañamiento de por vida por parte de tu instructor. Verificación periódica y ajuste de la práctica. Los instructores también atienden por WhatsApp y videollamada.',
  },
]

export default function ActividadesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <HeroSecondary
        title="Actividades"
        subtitle="Centro de Meditación Trascendental Colombia — Bogotá"
        breadcrumbs={[{ label: 'Actividades' }]}
        imageSrc="/images/hero-actividades.jpg"
      />

      {/* ─── INTRO — Centro en Bogotá ─── */}
      <section className="section-y bg-white overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase">
              El Centro
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Programa de Coherencia Social en Bogotá
            </h2>
            <p className="font-sans text-azul-profundo/70 leading-relaxed text-lg">
              Infraestructura especializada en Bogotá con capacidad para 40 participantes.
              Espacios diseñados para la instrucción personalizada y la práctica grupal.
              Instructores certificados presentes en varias ciudades del país.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="chip">40 participantes</span>
              <span className="chip"><MapPin size={12} className="text-dorado" />Bogotá, D.C.</span>
              <span className="chip">Virtual disponible</span>
            </div>
            <div className="space-y-4 pt-2">
              <div className="font-sans text-azul-profundo/70 leading-relaxed text-sm space-y-2">
                <p className="font-semibold text-azul-profundo text-base">
                  Centro de Meditación Trascendental Colombia
                </p>
                <p className="text-dorado font-medium text-xs tracking-wide uppercase">
                  Formación, práctica y desarrollo integral de la conciencia.
                </p>
                <p>
                  El Centro de Meditación Trascendental en Colombia ofrece un enfoque estructurado
                  y profesional para el desarrollo del pleno potencial humano, integrando la
                  Técnica de Meditación Trascendental (MT) con tecnologías védicas complementarias
                  orientadas al bienestar, la salud y el rendimiento integral.
                </p>
              </div>
              <Button href={`${routes.contacto}#formulario`} variant="secondary" className="group gap-2">
                Reserva tu charla informativa
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative h-[460px] lg:h-[540px] rounded-[20px] overflow-hidden
                          shadow-[0_32px_80px_rgba(15,42,68,0.18)]">
            <Image
              src="/images/actividades-coherencia.jpg"
              alt="Programa de Coherencia Social en Bogotá"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/30 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* ─── FORMACIÓN PERSONALIZADA — Lista editorial ─── */}
      <section className="section-y bg-beige">
        <div className="container-site">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6
                          mb-16 pb-10 border-b border-azul-profundo/10">
            <div>
              <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Programa
              </p>
              <h2 className="text-4xl md:text-5xl">Formación personalizada</h2>
            </div>
            <p className="font-sans text-azul-profundo/50 text-sm max-w-xs leading-relaxed md:text-right">
              Todas las actividades están diseñadas para apoyar una práctica personal
              sólida y duradera.
            </p>
          </div>

          <div className="divide-y divide-azul-profundo/[0.07]">
            {activities.map((a) => (
              <div
                key={a.n}
                className="group grid grid-cols-[3rem_2rem_1fr] md:grid-cols-[4rem_2.5rem_1fr_2fr]
                           gap-x-4 md:gap-x-8 items-center py-6 md:py-8
                           -mx-4 px-4 md:-mx-6 md:px-6
                           hover:bg-azul-profundo/[0.025] transition-colors rounded-xl"
              >
                <span className="font-display text-2xl md:text-3xl text-dorado/35
                                 group-hover:text-dorado/70 transition-colors select-none">
                  {a.n}
                </span>
                <span className="text-dorado/70 group-hover:text-dorado transition-colors">
                  {a.icon}
                </span>
                <h3 className="font-sans font-semibold text-[16px] md:text-[18px] text-azul-profundo">
                  {a.title}
                </h3>
                <p className="hidden md:block font-sans text-[14px] text-azul-profundo/55 leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CURSOS DE RESIDENCIA — Card especial ─── */}
      <section className="section-y bg-white overflow-hidden">
        <div className="container-site">

          <div className="mb-12 pb-10 border-b border-azul-profundo/10">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
              Experiencia inmersiva
            </p>
            <h2 className="text-4xl md:text-5xl">Cursos de residencia</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Galería de 4 imágenes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: '/images/hero-actividades.jpg',       alt: 'Retiro de residencia' },
                { src: '/images/actividades-residencia-2.jpg', alt: 'Curso de residencia' },
                { src: '/images/equipo-lago.jpg',             alt: 'Equipo en entorno natural' },
                { src: '/images/actividades-residencia-3.jpg', alt: 'Curso de residencia 3' },
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(15,42,68,0.14)]"
                  style={{ paddingBottom: '75%' }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {/* Contenido */}
            <div className="space-y-6">
              <p className="font-sans text-azul-profundo/70 leading-relaxed">
                Se realizan en diferentes lugares de Colombia, generalmente durante fines de semana,
                en entornos propicios para el descanso y la introspección.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-azul-profundo/60 uppercase
                                 tracking-widest mb-3 pb-2 border-b border-azul-profundo/10">
                    Características
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      'Programa estructurado e intensivo',
                      'Alternancia entre práctica y descanso',
                      'Acompañamiento especializado',
                    ].map((c) => (
                      <li key={c} className="flex items-center gap-3 font-sans text-sm text-azul-profundo/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-dorado shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-sm text-azul-profundo/60 uppercase
                                 tracking-widest mb-3 pb-2 border-b border-azul-profundo/10">
                    Beneficios
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      'Descanso profundo acumulado',
                      'Liberación de estrés más arraigado',
                      'Mayor claridad mental y concentración',
                      'Experiencia estable de la práctica MT',
                    ].map((b) => (
                      <li key={b} className="flex items-center gap-3 font-sans text-sm text-azul-profundo/75">
                        <span className="w-4 h-4 rounded-full bg-dorado/15 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Clock size={14} className="text-dorado" />
                <span className="font-sans text-sm text-azul-profundo/55">Fines de semana · Entornos naturales de Colombia</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTABand
        title="Empieza esta semana"
        subtitle="La charla informativa es gratuita, virtual y sin compromiso. Dura 90 minutos."
        imageSrc="/images/atardecer-oceano.jpg"
        imageOpacity={0.22}
      />
    </>
  )
}
