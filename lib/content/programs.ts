import { type Program } from '@/lib/schemas'

export const programs: Program[] = [
  {
    id: 'gandharva-veda',
    name: 'Terapia de Sonido (Gandharva Veda)',
    tagline: 'Sincroniza tu fisiología con los ritmos de la naturaleza',
    description:
      'La música védica del Gandharva Veda utiliza ragas y melodías antiguas para armonizar el cuerpo y la mente con los ciclos naturales del día. Su efecto profundo y gradual genera estados de calma sostenida sin esfuerzo.',
    benefits: [
      { text: 'Estados de calma profunda',         icon: 'Waves' },
      { text: 'Reduce estrés y ansiedad',           icon: 'ShieldCheck' },
      { text: 'Claridad y equilibrio emocional',    icon: 'Scale' },
      { text: 'Descanso reparador',                 icon: 'Moon' },
      { text: 'Armonización del sistema nervioso',  icon: 'Activity' },
    ],
    image: '/images/programs/terapia-sonido.jpeg',
  },
  {
    id: 'marmas',
    name: 'Terapia de Marmas',
    tagline: 'Puntos de energía vital del Ayurveda',
    description:
      'Técnica ayurvédica que estimula suavemente los 107 puntos marma del cuerpo con presión precisa y aceites herbales. Cada marma corresponde a intersecciones de nervios, vasos y tejidos con alta sensibilidad fisiológica.',
    benefits: [
      { text: 'Libera tensiones acumuladas',        icon: 'Zap' },
      { text: 'Relajación profunda',                icon: 'Wind' },
      { text: 'Mejora circulación y vitalidad',     icon: 'Heart' },
      { text: 'Equilibrio cuerpo-mente',            icon: 'Scale' },
      { text: 'Bienestar integral',                 icon: 'Sparkles' },
    ],
    image: '/images/programs/marmas.jpg',
  },
  {
    id: 'luz-gemas',
    name: 'Terapia de Luz y Gemas',
    tagline: 'Armonía física, mental y emocional a través de la luz',
    description:
      'Combina la aplicación de luz, color y la vibración natural de las gemas para restablecer el equilibrio energético. Utilizada como complemento a la práctica de Meditación Trascendental.',
    benefits: [
      { text: 'Estabilidad emocional',              icon: 'Scale' },
      { text: 'Equilibrio de la energía personal',  icon: 'Sun' },
      { text: 'Calma y claridad mental',            icon: 'Moon' },
      { text: 'Complemento meditativo',             icon: 'Eye' },
      { text: 'Armonía integral',                   icon: 'Sparkles' },
    ],
    image: '/images/programs/luz-gemas.jpg',
  },
  {
    id: 'yoga-maharishi',
    name: 'Yoga Maharishi',
    tagline: 'Posturas suaves que integran cuerpo, mente y respiración',
    description:
      'Secuencia sistemática de asanas diseñada por Maharishi para ser universal y accesible. Combina postura, respiración consciente y relajación profunda para preparar la mente y el cuerpo para la meditación.',
    benefits: [
      { text: 'Mejora postura y flexibilidad',           icon: 'PersonStanding' },
      { text: 'Reduce tensión muscular',                 icon: 'Wind' },
      { text: 'Equilibrio emocional',                    icon: 'Scale' },
      { text: 'Disminuye el estrés',                     icon: 'ShieldCheck' },
      { text: 'Más energía e integración mente-cuerpo',  icon: 'Zap' },
    ],
    image: '/images/programs/yoga-maharishi.jpg',
  },
  {
    id: 'pranayama',
    name: 'Pranayama',
    tagline: 'Regula el prana y estabiliza el sistema nervioso',
    description:
      'Técnicas de respiración del conocimiento védico que regulan el prana (energía vital) y estabilizan el sistema nervioso autónomo. Se practican como preparación o complemento a la MT.',
    benefits: [
      { text: 'Disminuye la ansiedad',    icon: 'ShieldCheck' },
      { text: 'Claridad y concentración', icon: 'Brain' },
      { text: 'Equilibrio emocional',     icon: 'Scale' },
      { text: 'Mejora la oxigenación',    icon: 'Wind' },
      { text: 'Relajación profunda',      icon: 'Moon' },
    ],
    image: '/images/programs/pranayama.jpg',
  },
  {
    id: 'aromaterapia',
    name: 'Aromaterapia',
    tagline: 'Aceites esenciales naturales para el bienestar',
    description:
      'Aplicación de aceites esenciales naturales que influyen en el estado emocional y fisiológico a través del sistema olfativo. Complemento perfecto para crear ambientes de práctica y descanso profundo.',
    benefits: [
      { text: 'Relajación y bienestar emocional', icon: 'Sparkles' },
      { text: 'Manejo del estrés',                icon: 'ShieldCheck' },
      { text: 'Ambientes armónicos',              icon: 'Home' },
      { text: 'Mejor descanso',                   icon: 'Moon' },
      { text: 'Equilibrio y confort',             icon: 'Scale' },
    ],
    image: '/images/programs/aromaterapia.jpg',
  },
  {
    id: 'diagnostico-pulso',
    name: 'Diagnóstico del Pulso (Nadi Vigyan)',
    tagline: 'Visión integral del bienestar mediante el pulso',
    description:
      'Técnica ayurvédica de observación del pulso radial para identificar tendencias de desequilibrio en los doshas (biotipos) antes de que se manifiesten clínicamente. Ofrece recomendaciones personalizadas de estilo de vida.',
    benefits: [
      { text: 'Visión integral del bienestar',        icon: 'Eye' },
      { text: 'Recomendaciones personalizadas',       icon: 'ClipboardList' },
      { text: 'Prevención y autocuidado',             icon: 'ShieldCheck' },
      { text: 'Detección temprana de desequilibrios', icon: 'Activity' },
      { text: 'Conexión con el propio cuerpo',        icon: 'Heart' },
    ],
    image: '/images/programs/diagnostico-pulso.jpg',
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda Maharishi',
    tagline: 'La ciencia védica del bienestar integral',
    description:
      'El Ayurveda Maharishi es la más completa expresión de la medicina natural védica, revitalizada por Maharishi Mahesh Yogi. Integra dieta, rutinas diarias, hierbas y tratamientos personalizados según el biotipo individual (dosha) para restablecer el equilibrio profundo del organismo.',
    benefits: [
      { text: 'Equilibrio de doshas (biotipos)',          icon: 'Scale' },
      { text: 'Desintoxicación y rejuvenecimiento',       icon: 'Sparkles' },
      { text: 'Rutinas diarias alineadas con la naturaleza', icon: 'Sun' },
      { text: 'Nutrición y plantas medicinales personalizadas', icon: 'Leaf' },
      { text: 'Prevención y longevidad',                  icon: 'ShieldCheck' },
    ],
    image: '/images/programs/ayurveda.jpeg',
  },
  {
    id: 'jyotish-yagya',
    name: 'Jyotish y Yagya',
    tagline: 'Astrología védica y tecnologías de armonización',
    description:
      'El Jyotish (astrología védica) observa los ciclos naturales del cosmos para el autoconocimiento y la toma de decisiones conscientes. Los Yagyas son tecnologías de armonización basadas en el conocimiento védico.',
    benefits: [
      { text: 'Claridad y reflexión interior',    icon: 'Eye' },
      { text: 'Comprensión de ciclos personales', icon: 'RotateCw' },
      { text: 'Decisiones más conscientes',       icon: 'Brain' },
      { text: 'Desarrollo personal y espiritual', icon: 'TrendingUp' },
    ],
    image: '/images/programs/jyotish.jpeg',
  },
  {
    id: 'tecnicas-avanzadas',
    name: 'Técnicas Avanzadas de MT',
    tagline: 'Para practicantes con al menos 3 meses de práctica regular',
    description:
      'Desarrolladas por Maharishi Mahesh Yogi para acelerar la progresión hacia estados superiores de conciencia. Se imparten en sesiones individuales tras verificar una práctica correcta y estable de MT.',
    benefits: [
      { text: 'Mayor coherencia cerebral',                    icon: 'Brain' },
      { text: 'Experiencias más profundas de trascendencia',  icon: 'Sparkles' },
      { text: 'Mayor integración mente-cuerpo',               icon: 'Scale' },
      { text: 'Incremento de creatividad e inteligencia',     icon: 'TrendingUp' },
    ],
    image: '/images/programs/tecnicas-avanzadas.jpg',
  },
  {
    id: 'sidhis-mt',
    name: 'Programa de Sidhis MT',
    tagline: 'Tecnología avanzada para el máximo potencial creativo',
    description:
      'El Programa de Sidhis MT es la tecnología más avanzada de la conciencia desarrollada por Maharishi. Integra la experiencia de trascendencia con el pensamiento ordinario, generando estados de coherencia cerebral máxima y abriendo el pleno potencial humano.',
    benefits: [
      { text: 'Estados superiores de conciencia', icon: 'Sparkles' },
      { text: 'Mayor creatividad e intuición',    icon: 'Brain' },
      { text: 'Eficiencia mental y rendimiento',  icon: 'TrendingUp' },
      { text: 'Plenitud y realización personal',  icon: 'Heart' },
    ],
    image: '/images/programs/sidhis-mt.jpg',
    videoId: '5zyLbvXyZDY',
  },
]
