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
          HERO PRINCIPAL (Con video de fondo cargado en public/videos/mt-hero-banner.mp4)
      ───────────────────────────────────────── */}
      <HeroPrimary />

      {/* ─────────────────────────────────────────
          1. ¿QUÉ LA HACE DIFERENTE? — Técnica y Contraste (Fondo Beige)
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 lg:order-first">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              La técnica
            </p>
            <h2 className="text-4xl md:text-5xl text-azul-profundo">¿Qué la hace diferente?</h2>
            <blockquote className="border-l-[3px] border-[#8a6e2d] pl-5">
              <p className="font-display text-xl md:text-2xl text-azul-profundo/85 italic leading-relaxed">
                "Es una técnica natural, sin esfuerzo y científicamente validada para
                nutrir todos los aspectos de la vida."
              </p>
            </blockquote>
            <p className="font-sans text-azul-profundo/70 leading-relaxed">
              A diferencia de las técnicas de concentración o control mental, la MT permite
              que la mente se aquiete de forma espontánea. No se requiere guía continua,
              música ni visualización. Es universal y accesible a cualquier persona.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-sans text-azul-profundo/85">
              <span className="flex items-center gap-1.5 select-none">
                ⏱️ 20 min · 2 veces al día
              </span>
              <span className="flex items-center gap-1.5 select-none">
                ✨ Sin experiencia previa
              </span>
              <span className="flex items-center gap-1.5 select-none">
                🌐 Universal — sin creencias
              </span>
            </div>
          </div>

          {/* Imagen: sujeto meditativo en alta montaña */}
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
          2. UN ENFOQUE BASADO EN EVIDENCIA CIENTÍFICA — Gráficos y Académico (Fondo Blanco)
      ───────────────────────────────────────── */}
      <section id="meditacion-trascendental" className="section-y bg-white overflow-hidden scroll-mt-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full">
            <GraphCarousel />
          </div>

          <div className="space-y-6">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              Ciencia aplicada al desarrollo humano
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Un enfoque basado en evidencia científica
            </h2>
            <p className="font-sans text-azul-profundo/70 text-lg leading-relaxed">
              En un contexto donde el estrés crónico impacta la salud y el desempeño,
              la MT ofrece un enfoque basado en evidencia científica para restablecer
              el equilibrio fisiológico y potenciar el rendimiento humano.
            </p>
            <ul className="space-y-3">
              {[
                { emoji: '🧠', text: 'Mayor coherencia cerebral, indicador de funcionamiento más integrado' },
                { emoji: '💧', text: 'Reducción de cortisol y marcadores de estrés' },
                { emoji: '🌙', text: 'Mejora en la calidad del sueño y recuperación fisiológica' },
                { emoji: '📈', text: 'Incremento de la capacidad cognitiva, creatividad y enfoque' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 font-sans text-[14px] text-azul-profundo/80">
                  <span className="text-[18px] shrink-0 select-none leading-none mt-0.5">{item.emoji}</span>
                  <span>{item.text}</span>
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
          3. RESPALDO CIENTÍFICO — Dr. Fred Travis (Fondo Blanco, unificado con sección superior)
      ───────────────────────────────────────── */}
      <section className="pb-20 lg:pb-28 pt-0 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="font-sans text-azul-profundo/70 text-lg leading-relaxed">
                Universal y accesible: La Meditación Trascendental no pertenece a ninguna
                religión, filosofía ni estilo de vida en particular. Es un método universal,
                apto para cualquier persona, en cualquier cultura. Por ello, más de seis
                millones de personas en el mundo la han integrado en su vida cotidiana.
              </p>
              <div className="pt-2">
                <Button
                  href={`${routes.contacto}#formulario`}
                  className="gap-2 group bg-[#007cc2] hover:bg-[#2fa0dd] text-white shadow-md border-0"
                >
                  Agenda introductoria gratuita
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <VideoEmbed
              videoId="ACkpjtQgQh4"
              title="Ondas cerebrales — Dr. Fred Travis"
              className="shadow-[0_24px_64px_rgba(15,42,68,0.18)] rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. UNA HERRAMIENTA EFECTIVA PARA DISMINUIR EL ESTRÉS — (Fondo Azul Tayrona)
      ───────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#071421] via-[#0B1F33] to-[#071421] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/images/hero/tayrona.jpg" alt="" fill
            className="object-cover opacity-[0.06] scale-105" sizes="100vw" />
        </div>
        <div className="relative container-site section-y">
          <div className="max-w-3xl mb-16">
            <p className="text-white/80 font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Estrés y salud
            </p>
            <h2 className="text-white text-4xl md:text-5xl leading-tight mb-6">
              Una herramienta efectiva para disminuir el estrés
            </h2>
            <p className="font-sans text-white/85 text-lg leading-relaxed">
              El estrés crónico es uno de los principales factores que afectan la salud,
              la felicidad y el rendimiento en la vida moderna. La investigación científica
              ha demostrado que la MT reduce el estrés de manera efectiva y sostenible.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <VideoEmbed
              videoId="H5oQBPJaFpA"
              title="Una herramienta efectiva para disminuir el estrés"
              className="shadow-[0_24px_64px_rgba(0,0,0,0.40)] rounded-[20px]"
            />
            
            <div className="space-y-8 lg:pl-4">
              <div className="space-y-6">
                
                {/* Beneficio 1 */}
                <div className="flex gap-4 items-start">
                  <div className="text-white shrink-0 mt-1 select-none">
                    <Moon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-white text-lg mb-1">
                      Descanso profundo y restauración
                    </h3>
                    <p className="font-sans text-white/75 text-sm leading-relaxed">
                      La práctica regular crea un estado de descanso profundo que supera al del
                      sueño ordinario, liberando la tensión acumulada capa por capa de forma natural.
                    </p>
                  </div>
                </div>

                {/* Beneficio 2 */}
                <div className="flex gap-4 items-start">
                  <div className="text-white shrink-0 mt-1 select-none">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-white text-lg mb-1">
                      Integración simple y sin esfuerzo
                    </h3>
                    <p className="font-sans text-white/75 text-sm leading-relaxed">
                      No exige cambios en tu estilo de vida. Se integra de forma orgánica en cualquier rutina,
                      dedicando tan solo 20 minutos dos veces al día.
                    </p>
                  </div>
                </div>

              </div>

              {/* Botón de Balance */}
              <div className="pt-2">
                <Button
                  href={`${routes.contacto}#formulario`}
                  variant="light"
                  className="group gap-2 text-sm px-6 py-3.5"
                >
                  Quiero asistir a una charla informativa
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. FRASE DE CONFIRMACIÓN / EXPERIENCIA DIRECTA (Fondo Blanco)
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
