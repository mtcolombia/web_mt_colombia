import type { Metadata } from 'next'
import Image from 'next/image'
import { Brain, Droplets, Moon, TrendingUp, Clock, ArrowRight } from 'lucide-react'
import { HeroPrimary }    from '@/components/sections/HeroPrimary'
import { CTABand }        from '@/components/sections/CTABand'
import { VideoEmbed }     from '@/components/sections/VideoEmbed'
import { Button }         from '@/components/ui/Button'
import { routes }         from '@/lib/routes'
import { GraphCarousel }  from '@/components/sections/GraphCarousel'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Meditación Trascendental en Colombia — técnica natural, sin esfuerzo, científicamente validada para reducir el estrés y desarrollar el pleno potencial humano.',
}

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          HERO PRINCIPAL
      ───────────────────────────────────────── */}
      <HeroPrimary />

      {/* ─────────────────────────────────────────
          STATS + VIDEO — una sola sección, un viewport
      ───────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col bg-white">

        {/* Fondos combinados */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/images/arboles-cielo.jpg" alt="" fill
            className="object-cover opacity-[0.14]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/60" />
        </div>

        <div className="relative flex flex-col flex-1">

          {/* Bloque superior: stats + manifiesto */}
          <div className="container-site pt-14 md:pt-20 pb-8">
            <div className="grid grid-cols-3 divide-x divide-azul-claro/25 mb-10">
              {[
                { n: '800+', label: 'estudios científicos publicados' },
                { n: '6 M+', label: 'practicantes en el mundo' },
                { n: '50+',  label: 'años de investigación rigurosa' },
              ].map((s) => (
                <div key={s.n} className="text-center px-4 md:px-10">
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl text-azul-texto leading-none mb-2">
                    {s.n}
                  </p>
                  <p className="text-[11px] md:text-[13px] font-sans text-azul-texto/50 tracking-wide uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-display text-xl md:text-2xl lg:text-3xl text-azul-texto/85 leading-snug">
                Una tecnología natural, sin esfuerzo y científicamente validada para
                desarrollar el pleno potencial humano.
              </p>
            </div>
          </div>

          {/* Divisor */}
          <div className="container-site">
            <div className="border-t border-azul-profundo/[0.07]" />
          </div>

          {/* Bloque inferior: video */}
          <div className="flex-1 container-site py-8 flex flex-col justify-center">
            <div className="max-w-xl mx-auto text-center mb-6">
              <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-2">
                Una invitación
              </p>
              <h2 className="text-3xl md:text-4xl mb-3">A la experiencia directa</h2>
              <p className="font-sans text-azul-texto/60 text-base">
                El verdadero valor de esta práctica se confirma en la experiencia directa,
                no en las palabras.
              </p>
            </div>
            <VideoEmbed
              videoId="NDFULc52ZYg"
              title="Introducción a la Meditación Trascendental por el Dr. Tony Nader"
              className="max-w-3xl mx-auto shadow-[0_24px_80px_rgba(15,42,68,0.16)] rounded-[20px]"
            />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          HERRAMIENTA EFECTIVA PARA EL ESTRÉS — Subida de posición
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige overflow-hidden border-t border-azul-profundo/[0.04]">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Estrés y salud
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Una herramienta efectiva para disminuir el estrés
            </h2>
            <p className="font-sans text-azul-texto/70 text-lg leading-relaxed">
              El estrés crónico es uno de los principales factores que afectan la salud,
              la felicidad y el rendimiento en la vida moderna. La investigación científica
              ha demostrado que la MT reduce el estrés de manera efectiva y sostenible.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <VideoEmbed
              videoId="H5oQBPJaFpA"
              title="Una herramienta efectiva para disminuir el estrés"
              className="shadow-[0_24px_64px_rgba(15,42,68,0.18)] rounded-[20px]"
            />
            <div className="space-y-5">
              <GraphCarousel />
              <div className="space-y-3 font-sans text-azul-texto/70 leading-relaxed text-sm">
                <p>
                  La práctica regular crea un estado de descanso profundo que supera al del
                  sueño ordinario, liberando la tensión acumulada capa por capa.
                </p>
                <p>
                  No exige cambios en el estilo de vida. Se integra en cualquier rutina,
                  con tan solo 20 minutos dos veces al día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SPLIT — CIENCIA APLICADA
      ───────────────────────────────────────── */}
      <section id="meditacion-trascendental" className="section-y bg-white overflow-hidden scroll-mt-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[500px] lg:h-[620px] rounded-[20px] overflow-hidden
                          shadow-[0_32px_80px_rgba(15,42,68,0.18)]">
            <Image
              src="/images/home-ciencia-aplicada.jpeg"
              alt="Meditación Trascendental — práctica personal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2.5
                            bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg">
              <Clock size={16} className="text-[#8a6e2d]" />
              <span className="text-sm font-sans font-semibold text-azul-texto">
                20 min · 2 veces al día
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              Ciencia aplicada al desarrollo humano
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Un enfoque basado en evidencia científica
            </h2>
            <p className="font-sans text-azul-texto/70 text-lg leading-relaxed">
              En un contexto donde el estrés crónico impacta la salud y el desempeño,
              la MT ofrece un enfoque basado en evidencia científica para restablecer
              el equilibrio fisiológico y potenciar el rendimiento humano.
            </p>
            <ul className="space-y-3">
              {[
                { icon: <Brain size={16} />,     text: 'Mayor coherencia cerebral, indicador de funcionamiento más integrado' },
                { icon: <Droplets size={16} />,  text: 'Reducción de cortisol y marcadores de estrés' },
                { icon: <Moon size={16} />,       text: 'Mejora en la calidad del sueño y recuperación fisiológica' },
                { icon: <TrendingUp size={16} />, text: 'Incremento de la capacidad cognitiva, creatividad y enfoque' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] text-azul-texto/80">
                  <span className="w-6 h-6 rounded-full bg-[#8a6e2d]/10 flex items-center justify-center text-[#8a6e2d] shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button href={routes.mt} variant="secondary" className="group gap-2">
                Conoce la evidencia científica
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          ¿QUÉ LA HACE DIFERENTE? — Imagen desplazada a la derecha
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 lg:order-first">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              La técnica
            </p>
            <h2 className="text-4xl md:text-5xl text-azul-profundo">¿Qué la hace diferente?</h2>
            <blockquote className="border-l-[3px] border-[#8a6e2d] pl-5">
              <p className="font-display text-xl md:text-2xl text-azul-texto/85 italic leading-relaxed">
                "Es una técnica natural, sin esfuerzo y científicamente validada para
                nutrir todos los aspectos de la vida."
              </p>
            </blockquote>
            <p className="font-sans text-azul-texto/70 leading-relaxed">
              A diferencia de las técnicas de concentración o control mental, la MT permite
              que la mente se aquiete de forma espontánea. No se requiere guía continua,
              música ni visualización. Es universal y accesible a cualquier persona.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="chip">
                <Clock size={12} className="text-[#8a6e2d]" />
                20 min · 2 veces al día
              </span>
              <span className="chip">Sin experiencia previa</span>
              <span className="chip">Universal — sin creencias</span>
            </div>
          </div>

          {/* Imagen: sujeto desplazado a la derecha del encuadre */}
          <div className="relative h-[520px] lg:h-[680px] rounded-[20px] overflow-hidden
                          shadow-[0_32px_80px_rgba(15,42,68,0.20)]">
            <Image
              src="/images/home-que-la-hace-diferente.jpeg"
              alt="Hombre meditando bajo el cielo abierto"
              fill
              className="object-cover object-[30%_center]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/40 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          NEUROCIENCIA + VIDEO — Respaldo Científico que inspira
      ───────────────────────────────────────── */}
      <section className="relative bg-azul-accion overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/images/hero/tayrona.jpg" alt="" fill
            className="object-cover opacity-[0.10] scale-105" sizes="100vw" />
          <div className="absolute inset-0 bg-white/15" />
        </div>
        <div className="relative container-site section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-white">
              <p className="text-white/80 font-sans font-semibold text-xs tracking-[0.15em] uppercase">
                La neurociencia lo confirma
              </p>
              <h2 className="text-white text-4xl md:text-5xl">
                Respaldo científico que inspira confianza
              </h2>
              <p className="font-sans text-white leading-relaxed">
                Universal y accesible: La Meditación Trascendental no pertenece a ninguna
                religión, filosofía ni estilo de vida en particular. Es un método universal,
                apto para cualquier persona, en cualquier cultura. Por ello, más de seis
                millones de personas en el mundo la han integrado en su vida cotidiana.
              </p>
              <Button
                href={`${routes.contacto}#formulario`}
                variant="secondary"
                className="gap-2 group border-white text-white hover:bg-white/10"
              >
                Agenda introductoria gratuita
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <VideoEmbed
              videoId="ACkpjtQgQh4"
              title="Ondas cerebrales — Dr. Fred Travis"
              className="shadow-[0_32px_80px_rgba(15,42,68,0.22)]"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FRASE DE CONFIRMACIÓN / EXPERIENCIA DIRECTA
      ───────────────────────────────────────── */}
      <section className="bg-white py-20 text-center border-t border-azul-profundo/[0.04]">
        <div className="container-site max-w-3xl">
          <blockquote className="space-y-4">
            <p className="font-display text-2xl md:text-3xl text-azul-profundo leading-relaxed italic">
              "El verdadero valor de esta práctica se confirma en la experiencia directa."
            </p>
          </blockquote>
        </div>
      </section>

      <CTABand
        title="Descubre cómo la Meditación Trascendental puede transformar tu vida"
        subtitle="Únete a la charla informativa gratuita y virtual. Sin costo, sin experiencia previa."
      />
    </>
  )
}
