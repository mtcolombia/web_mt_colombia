import { type Teacher } from '@/lib/schemas'

/**
 * Equipo docente certificado.
 * [CONTENIDO PENDIENTE]: solicitar fotos actualizadas, fondo claro, alta resolución.
 */
export const teachers: Teacher[] = [
  {
    name:  'María Teresa Acosta',
    role:  'Directora Nacional · Instructora certificada MT',
    photo: '/images/teachers/maria-teresa-acosta.jpg',
    tag:   'directivo',
  },
  {
    name:  'Carolina Quintana',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/carolina-quintana.jpg',
    tag:   'directivo',
  },
  {
    name:  'Giovanni Vega',
    role:  'Instructor certificado MT',
    photo: '/images/teachers/giovanni-vega.jpg',
    tag:   'instructor',
  },
  {
    name:  'Leonor Rodríguez',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/leonor-rodriguez.jpg',
    tag:   'instructor',
  },
]
