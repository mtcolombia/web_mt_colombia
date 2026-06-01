import fs from 'fs'
import path from 'path'
import { Trash2 } from 'lucide-react'
import { deleteTestimonial } from '@/app/actions/testimonials'
import { TestimonialForm } from './TestimonialForm'
import type { Testimonial } from '@/lib/schemas'

export const metadata = { title: 'Testimonios · Admin' }

export default function AdminTestimoniosPage() {
  const list: Testimonial[] = (() => {
    try {
      return JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'testimonials.json'), 'utf-8'),
      ) as Testimonial[]
    } catch { return [] }
  })()

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl text-azul-profundo mb-6">Testimonios</h1>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h2 className="text-sm font-sans font-semibold text-azul-profundo mb-4">Nuevo testimonio</h2>
        <TestimonialForm />
      </div>

      {/* List */}
      {list.length === 0 ? (
        <p className="font-sans text-sm text-azul-profundo/40 text-center py-8">
          No hay testimonios aún.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {list.map((t) => (
            <div key={t.id} className="bg-white rounded-xl shadow-card p-4 flex items-start gap-4">
              {t.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-sans font-semibold text-azul-profundo text-sm">{t.name}</p>
                <p className="text-xs text-azul-profundo/50 font-sans">{t.title}</p>
                {t.videoId && (
                  <p className="text-xs text-azul-claro font-sans mt-0.5">
                    YouTube: {t.videoId}
                  </p>
                )}
                <p className="text-sm font-serif text-azul-profundo/70 mt-1 line-clamp-2">{t.quote}</p>
              </div>
              <form action={deleteTestimonial.bind(null, t.id)}>
                <button
                  type="submit"
                  className="p-1.5 rounded-md text-azul-profundo/30 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
                >
                  <Trash2 size={15} />
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
