import fs from 'fs'
import path from 'path'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { updateContactStatus } from '@/app/actions/contact'
import type { ContactSubmission } from '@/lib/schemas'

export const metadata = { title: 'Contactos · Admin' }

const STATUS_LABELS = {
  nuevo:      { label: 'Nuevo',      cls: 'bg-dorado/15 text-dorado' },
  revisado:   { label: 'Revisado',   cls: 'bg-azul-claro/10 text-azul-claro' },
  contactado: { label: 'Contactado', cls: 'bg-green-100 text-green-700' },
}

export default function AdminContactosPage() {
  const submissions: ContactSubmission[] = (() => {
    try {
      return JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data', 'contacts.json'), 'utf-8'),
      ) as ContactSubmission[]
    } catch { return [] }
  })().sort((a, b) => b.receivedAt.localeCompare(a.receivedAt))

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl text-azul-profundo">Agendamientos de contacto</h1>
        <p className="font-sans text-sm text-azul-profundo/50 mt-0.5">
          {submissions.length} total · {submissions.filter(s => s.status === 'nuevo').length} nuevos
        </p>
      </div>

      {submissions.length === 0 ? (
        <div className="bg-white rounded-xl shadow-card p-10 text-center">
          <Mail size={28} className="text-azul-profundo/20 mx-auto mb-3" />
          <p className="font-sans text-sm text-azul-profundo/40">Sin solicitudes aún.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {submissions.map((s) => {
            const { label, cls } = STATUS_LABELS[s.status]
            return (
              <div key={s.id} className="bg-white rounded-xl shadow-card p-5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-sans font-semibold text-azul-profundo">{s.name}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-sans text-azul-profundo/50">
                      <span className="flex items-center gap-1"><Mail size={11} />{s.email}</span>
                      <span className="flex items-center gap-1"><Phone size={11} />{s.phone}</span>
                      {s.city && <span className="flex items-center gap-1"><MapPin size={11} />{s.city}</span>}
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {new Date(s.receivedAt).toLocaleString('es-CO', {
                          dateStyle: 'medium', timeStyle: 'short',
                        })}
                      </span>
                    </div>
                    {s.message && (
                      <p className="mt-2 text-sm font-serif text-azul-profundo/70 bg-beige/60 rounded-lg px-3 py-2">
                        {s.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-xs font-sans font-semibold px-2.5 py-1 rounded-full ${cls}`}>
                      {label}
                    </span>
                    <form action={updateContactStatus.bind(null, s.id,
                      s.status === 'nuevo' ? 'revisado' : s.status === 'revisado' ? 'contactado' : 'nuevo')}>
                      <button
                        type="submit"
                        className="text-xs font-sans text-azul-profundo/50 hover:text-azul-claro
                                   border border-azul-profundo/15 rounded-lg px-3 py-1.5 transition-colors"
                      >
                        {s.status === 'nuevo' ? 'Marcar revisado' :
                         s.status === 'revisado' ? 'Marcar contactado' : 'Resetear'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
