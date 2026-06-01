/**
 * Slides de investigación científica — compartidos entre Home y MT.
 * Archivo .tsx porque contiene JSX (iconos + imágenes de Next.js).
 */
import Image from 'next/image'
import { Brain, Sun, Moon, Leaf, Scale, Shield } from 'lucide-react'
import type { SliderSlide } from '@/components/sections/Slider'

// ─── Beneficios documentados ───────────────────────────────────────────────
export const benefits = [
  {
    n: '01', icon: <Sun size={20} />,
    title: 'Mayor energía y vitalidad',
    body: 'El descanso profundo generado durante la práctica supera al del sueño ordinario, liberando fatiga acumulada y aumentando la energía disponible.',
  },
  {
    n: '02', icon: <Moon size={20} />,
    title: 'Calidad del sueño mejorada',
    body: 'Reducción del insomnio y mejora profunda de la fase de descanso reparador, documentadas en estudios clínicos controlados.',
  },
  {
    n: '03', icon: <Brain size={20} />,
    title: 'Coherencia cerebral global',
    body: 'El único estado de sincronización alfa en todo el córtex documentado por la neurociencia. Mayor claridad, rendimiento y creatividad.',
  },
  {
    n: '04', icon: <Shield size={20} />,
    title: 'Reducción del estrés crónico',
    body: 'Disminución sostenida de cortisol y normalización del sistema nervioso autónomo — la raíz de la mayoría de enfermedades modernas.',
  },
  {
    n: '05', icon: <Scale size={20} />,
    title: 'Mayor estabilidad emocional',
    body: 'Menor reactividad, mejor regulación emocional y mayor resiliencia ante los desafíos cotidianos, interpersonales y profesionales.',
  },
  {
    n: '06', icon: <Leaf size={20} />,
    title: 'Ralentización del envejecimiento',
    body: 'Marcadores biológicos como la longitud de los telómeros muestran una edad fisiológica significativamente menor en practicantes de largo plazo.',
  },
]

// ─── Evidencia científica por área ────────────────────────────────────────
const evidenceAreas = [
  {
    title: 'Salud cardiovascular',
    body: 'Ensayos publicados en el American Journal of Hypertension y revisiones en Advances in Integrative Medicine muestran reducciones significativas de presión arterial. La American Heart Association la incluye entre las intervenciones no farmacológicas con mayor evidencia para la hipertensión.',
    img: '/images/mt-graficos/01-percepcion-memoria.jpg',
  },
  {
    title: 'Manejo del estrés, ansiedad y depresión',
    body: 'Un metaanálisis publicado en The Permanente Journal reporta reducciones del 40–55% en síntomas de ansiedad. La MT mejora la regulación del sistema nervioso autónomo, reduciendo el predominio del sistema simpático.',
    img: '/images/mt-graficos/02-descanso-profundo.jpg',
  },
  {
    title: 'Salud integral y prevención',
    body: 'Los estudios documentan reducción de marcadores inflamatorios (IL-6, TNF-α), regulación del cortisol y ralentización de factores epigenéticos asociados al envejecimiento prematuro.',
    img: '/images/mt-graficos/03-reversion-envejecimiento.jpg',
  },
  {
    title: 'Función cognitiva, inteligencia y creatividad',
    body: 'La práctica genera ondas alfa de alta amplitud sincronizadas en todo el córtex — el único estado de coherencia cerebral global documentado. Se asocia con mayor claridad mental, rendimiento cognitivo y creatividad medible.',
    img: '/images/mt-graficos/04-wa.jpeg',
  },
  {
    title: 'Impacto en el comportamiento social',
    body: 'Los practicantes reportan menor reactividad al estrés interpersonal, mejor comunicación y mayor empatía. Los estudios poblacionales (Efecto Maharishi) muestran reducción de indicadores de violencia cuando un porcentaje crítico de la población practica.',
    img: '/images/mt-graficos/05-wa.jpeg',
  },
]

// ─── Slides: slide 1 beneficios + slides 2-6 evidencia por área ───────────
export const researchSlides: SliderSlide[] = [
  {
    id: 'slide-beneficios',
    content: (
      <div className="h-full flex flex-col justify-center overflow-y-auto">
        <div className="container-site py-6">
          <div className="divide-y divide-white/[0.07]">
            {benefits.map((b) => (
              <div
                key={b.n}
                className="grid grid-cols-[3rem_2rem_1fr] md:grid-cols-[4rem_2.5rem_1fr_2fr]
                           gap-x-4 md:gap-x-8 items-center py-4 md:py-5"
              >
                <span className="font-display text-xl md:text-2xl text-dorado/40 select-none">{b.n}</span>
                <span className="text-dorado/70">{b.icon}</span>
                <h3 className="font-sans font-semibold text-[14px] md:text-[16px] text-white">{b.title}</h3>
                <p className="hidden md:block font-sans text-[13px] text-white/55 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  ...evidenceAreas.map((area, i) => ({
    id: `slide-evidencia-${i}`,
    content: (
      <div className="h-full flex flex-col justify-center overflow-y-auto">
        <div className="container-site py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
                Evidencia científica por área
              </p>
              <h2 className="text-2xl md:text-3xl text-white">{area.title}</h2>
              <p className="font-sans text-white/65 leading-relaxed text-sm md:text-base">{area.body}</p>
            </div>
            <div className="relative h-[200px] md:h-[280px] rounded-[16px] overflow-hidden
                            shadow-[0_16px_48px_rgba(0,0,0,0.40)]">
              <Image
                src={area.img}
                alt={area.title}
                fill
                className="object-contain bg-white/5 p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  })),
]

// ─── Versión LIGHT para el Home (fondo blanco, texto azul) ────────────────
export const researchSlidesLight: SliderSlide[] = [
  {
    id: 'slide-beneficios-light',
    content: (
      <div className="h-full flex flex-col justify-center overflow-y-auto">
        <div className="container-site py-6">
          <div className="divide-y divide-azul-profundo/[0.07]">
            {benefits.map((b) => (
              <div
                key={b.n}
                className="grid grid-cols-[3rem_2rem_1fr] md:grid-cols-[4rem_2.5rem_1fr_2fr]
                           gap-x-4 md:gap-x-8 items-center py-4 md:py-5"
              >
                <span className="font-display text-xl md:text-2xl text-dorado/50 select-none">{b.n}</span>
                <span className="text-dorado/80">{b.icon}</span>
                <h3 className="font-sans font-semibold text-[14px] md:text-[16px] text-azul-profundo">{b.title}</h3>
                <p className="hidden md:block font-sans text-[13px] text-azul-profundo/60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  ...evidenceAreas.map((area, i) => ({
    id: `slide-evidencia-light-${i}`,
    content: (
      <div className="h-full flex flex-col justify-center overflow-y-auto">
        <div className="container-site py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
                Evidencia científica por área
              </p>
              <h2 className="text-2xl md:text-3xl text-azul-profundo">{area.title}</h2>
              <p className="font-sans text-azul-profundo/65 leading-relaxed text-sm md:text-base">{area.body}</p>
            </div>
            <div className="relative h-[200px] md:h-[280px] rounded-[16px] overflow-hidden
                            shadow-[0_8px_32px_rgba(15,42,68,0.12)] bg-white">
              <Image
                src={area.img}
                alt={area.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  })),
]
