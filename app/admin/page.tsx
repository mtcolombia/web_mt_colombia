import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { FileText, Quote, Mail, MessageSquare, ArrowRight } from 'lucide-react'
import type { BlogArticle } from '@/lib/schemas'
import type { Testimonial } from '@/lib/schemas'
import type { ContactSubmission } from '@/lib/schemas'
import type { ForumQuestion } from '@/lib/schemas'

function readJSON<T>(file: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), file), 'utf-8')) as T
  } catch { return fallback }
}

export default function AdminDashboard() {
  const articles  = readJSON<BlogArticle[]>('public/data/blog.json', [])
  const testimonials = readJSON<Testimonial[]>('public/data/testimonials.json', [])
  const contacts  = readJSON<ContactSubmission[]>('data/contacts.json', [])
  const forum     = readJSON<ForumQuestion[]>('public/data/forum.json', [])
  
  const newContacts = contacts.filter(c => c.status === 'nuevo').length
  const pendingQuestions = forum.filter(q => !q.answer).length

  const cards = [
    { href: '/admin/blog',        icon: FileText,      label: 'Artículos',    count: articles.length,     badge: null },
    { href: '/admin/testimonios', icon: Quote,         label: 'Testimonios',  count: testimonials.length, badge: null },
    { href: '/admin/foro',        icon: MessageSquare, label: 'Foro (Q&A)',   count: forum.length,        badge: pendingQuestions || null },
    { href: '/admin/contactos',   icon: Mail,          label: 'Contactos',    count: contacts.length,     badge: newContacts || null },
  ]

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl text-azul-profundo mb-2">Dashboard</h1>
      <p className="font-sans text-sm text-azul-profundo/50 mb-8">
        Gestión de contenido del sitio web de la Fundación Maharishi de Colombia.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(({ href, icon: Icon, label, count, badge }) => (
          <Link
            key={href}
            href={href}
            className="group bg-white rounded-xl p-5 shadow-card hover:shadow-md transition-shadow
                       flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-azul-claro/10 flex items-center justify-center">
                <Icon size={20} className="text-azul-claro" />
              </div>
              {badge && (
                <span className="text-xs font-sans font-semibold bg-dorado/20 text-dorado
                                 px-2 py-0.5 rounded-full">
                  {badge} nuevo{badge > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <div>
              <p className="text-2xl font-sans font-semibold text-azul-profundo">{count}</p>
              <p className="text-xs font-sans text-azul-profundo/50 mt-0.5">{label}</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-sans font-semibold text-azul-claro
                             group-hover:gap-2 transition-all">
              Gestionar <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
