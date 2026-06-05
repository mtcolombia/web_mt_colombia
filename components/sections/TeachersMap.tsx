'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import { type Teacher } from '@/lib/schemas'

interface TeachersMapProps {
  teachers: Teacher[]
}

// Coordenadas y zoom para centrar Colombia
const COLOMBIA_CENTER: [number, number] = [4.5709, -74.2973]
const COLOMBIA_ZOOM = 6

// SVG del marcador personalizado (dorado, estilo del proyecto)
function markerSvg(count: number) {
  return `
    <div style="
      position:relative;
      width:40px;
      height:48px;
      cursor:pointer;
      filter:drop-shadow(0 3px 8px rgba(15,42,68,0.30));
    ">
      <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="48">
        <path d="M20 0C9 0 0 9 0 20C0 33 20 48 20 48C20 48 40 33 40 20C40 9 31 0 20 0Z"
              fill="#C9A85D"/>
        <circle cx="20" cy="20" r="12" fill="#0F2A44"/>
        <text x="20" y="25" text-anchor="middle"
              font-family="system-ui,sans-serif"
              font-size="11" font-weight="700"
              fill="#C9A85D">${count}</text>
      </svg>
    </div>
  `
}

export function TeachersMap({ teachers }: TeachersMapProps) {
  const mapRef    = useRef<HTMLDivElement>(null)
  const mapInst   = useRef<import('leaflet').Map | null>(null)

  useEffect(() => {
    if (!mapRef.current) return

    let aborted = false

    import('leaflet').then((L) => {
      // Si el efecto fue limpiado antes de que el import resolviera, salir
      if (aborted) return
      // Si el contenedor ya tiene un mapa Leaflet activo, reutilizarlo o salir
      if (mapInst.current) return

      // Corregir rutas de íconos default (bug conocido de Leaflet + Webpack)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current!, {
        center:          COLOMBIA_CENTER,
        zoom:            COLOMBIA_ZOOM,
        zoomControl:     true,
        scrollWheelZoom: false,
        attributionControl: true,
      })
      mapInst.current = map

      // Tiles OpenStreetMap — sin API key
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map)

      // Agrupar profesores por ciudad
      const byCity = new Map<string, { lat: number; lng: number; teachers: Teacher[] }>()

      for (const t of teachers) {
        if (t.lat == null || t.lng == null || !t.city) continue
        if (!byCity.has(t.city)) {
          byCity.set(t.city, { lat: t.lat, lng: t.lng, teachers: [] })
        }
        byCity.get(t.city)!.teachers.push(t)
      }

      // Crear marcador por ciudad
      byCity.forEach(({ lat, lng, teachers: cityTeachers }, city) => {
        const icon = L.divIcon({
          html:        markerSvg(cityTeachers.length),
          className:   '',
          iconSize:    [40, 48],
          iconAnchor:  [20, 48],
          popupAnchor: [0, -50],
        })

        const teacherRows = cityTeachers
          .map((t) => {
            const initials = t.name.split(' ').slice(0, 2).map((w) => w[0]).join('')
            return `
              <div style="
                display:flex;
                align-items:center;
                gap:10px;
                padding:8px 0;
                border-bottom:1px solid rgba(15,42,68,0.07);
              ">
                <div style="
                  width:36px;height:36px;border-radius:50%;
                  background:#F5F1E8;border:1.5px solid rgba(201,168,93,0.4);
                  display:flex;align-items:center;justify-content:center;
                  font-family:system-ui,sans-serif;font-size:11px;font-weight:700;
                  color:#0F2A44;flex-shrink:0;
                  overflow:hidden;
                ">
                  ${t.photo ? `<img src="${t.photo}" alt="${t.name}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentNode.innerText='${initials}'" />` : initials}
                </div>
                <div style="min-width:0;">
                  <p style="margin:0;font-family:system-ui,sans-serif;font-size:13px;font-weight:600;color:#0F2A44;line-height:1.2;">${t.name}</p>
                  ${t.role ? `<p style="margin:2px 0 0 0;font-family:system-ui,sans-serif;font-size:11px;color:#0F2A44;opacity:0.6;">${t.role}</p>` : ''}
                </div>
              </div>
            `
          })
          .join('')

        const popupContent = `
          <div style="min-width:220px;padding:4px 0;">
            <p style="
              margin:0 0 10px 0;
              font-family:system-ui,sans-serif;
              font-size:11px;font-weight:700;
              color:#C9A85D;text-transform:uppercase;letter-spacing:0.1em;
            ">${city}</p>
            ${teacherRows}
          </div>
        `

        L.marker([lat, lng], { icon })
          .addTo(map)
          .bindPopup(popupContent, {
            maxWidth:  280,
            className: 'mt-map-popup',
          })
      })
    })

    return () => {
      aborted = true
      mapInst.current?.remove()
      mapInst.current = null
    }
  }, [teachers])

  return (
    <div
      ref={mapRef}
      className="w-full rounded-[20px] overflow-hidden shadow-[0_16px_48px_rgba(15,42,68,0.15)]"
      style={{ height: '480px' }}
      aria-label="Mapa de profesores de Meditación Trascendental en Colombia"
    />
  )
}
