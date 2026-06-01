import { type Teacher } from '@/lib/schemas'

export const teachers: Teacher[] = [
  // ── Directora Nacional ──────────────────────────────────────────────────
  {
    name:  'María Teresa Acosta',
    role:  'Directora Nacional',
    photo: '/images/teachers/maria-teresa-acosta.jpg',
    tag:   'directivo',
    phone: '310 810 6469',
    city:  'Bogotá',
    lat:   4.7109,
    lng:   -74.0721,
  },

  // ── Bogotá ──────────────────────────────────────────────────────────────
  {
    name:  'Carolina Quintana',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/carolina-quintana.jpg',
    tag:   'instructor',
    phone: '312 674 2612',
    city:  'Bogotá',
    lat:   4.7109,
    lng:   -74.0721,
  },
  {
    name:  'Giovanni Vega',
    role:  'Instructor certificado MT',
    photo: '/images/teachers/giovanni-vega.jpg',
    tag:   'instructor',
    phone: '316 419 6073',
    city:  'Bogotá',
    lat:   4.7109,
    lng:   -74.0721,
  },
  {
    name:  'Liz Angela García',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/liz-angela-garcia.jpg',
    tag:   'instructor',
    phone: '305 829 0031',
    city:  'Bogotá',
    lat:   4.7109,
    lng:   -74.0721,
  },
  {
    name:  'Claudia Chávez',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/claudia-chavez.jpg',
    tag:   'instructor',
    phone: '315 848 3907',
    city:  'Bogotá',
    lat:   4.7109,
    lng:   -74.0721,
  },

  // ── Medellín ─────────────────────────────────────────────────────────────
  {
    name:  'Carlos Alberto Muñoz',
    role:  'Instructor certificado MT',
    photo: '/images/teachers/carlos-munoz.jpg',
    tag:   'instructor',
    phone: '318 270 5410',
    city:  'Medellín',
    lat:   6.2442,
    lng:   -75.5812,
  },
  {
    name:  'Amparo Valle',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/amparo-valle.jpg',
    tag:   'instructor',
    phone: '301 203 1196',
    city:  'Medellín',
    lat:   6.2442,
    lng:   -75.5812,
  },

  // ── Bucaramanga ──────────────────────────────────────────────────────────
  {
    name:  'Briggite Vera',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/briggite-vera.jpg',
    tag:   'instructor',
    phone: '310 583 0658',
    city:  'Bucaramanga',
    lat:   7.1193,
    lng:   -73.1227,
  },
  {
    name:  'Mónica Tovar',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/monica-tovar.jpg',
    tag:   'instructor',
    phone: '315 677 2268',
    city:  'Bucaramanga',
    lat:   7.1193,
    lng:   -73.1227,
  },
  {
    name:  'Gloria Galvis',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/gloria-galvis.jpg',
    tag:   'instructor',
    phone: '316 309 2501',
    city:  'Bucaramanga',
    lat:   7.1193,
    lng:   -73.1227,
  },

  // ── Barichara ────────────────────────────────────────────────────────────
  {
    name:  'Leonor Rodríguez',
    role:  'Instructora certificada MT',
    photo: '/images/teachers/leonor-rodriguez.jpg',
    tag:   'instructor',
    phone: '315 292 5827',
    city:  'Barichara',
    lat:   6.6368,
    lng:   -73.2285,
  },
]

// Grupos por ciudad para el mapa
export const teacherCities = [
  { city: 'Bogotá',      lat: 4.7109,  lng: -74.0721 },
  { city: 'Medellín',    lat: 6.2442,  lng: -75.5812 },
  { city: 'Bucaramanga', lat: 7.1193,  lng: -73.1227 },
  { city: 'Barichara',   lat: 6.6368,  lng: -73.2285 },
]
