import fs from 'fs'
import path from 'path'
import { Trash2, MessageSquare, CheckCircle, Clock } from 'lucide-react'
import { deleteForumQuestion } from '@/app/actions/forum'
import { AnswerForm } from './AnswerForm'
import type { ForumQuestion } from '@/lib/schemas'
import { formatDate } from '@/lib/utils'

export const metadata = { title: 'Foro · Admin' }

function getForumQuestions(): ForumQuestion[] {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'forum.json'), 'utf-8'),
    ) as ForumQuestion[]
  } catch {
    return []
  }
}

export default function AdminForoPage() {
  const list = getForumQuestions().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  const pending = list.filter((q) => !q.answer)
  const answered = list.filter((q) => q.answer)

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl text-azul-profundo font-semibold mb-1">Moderación del Foro (Q&A)</h1>
          <p className="font-sans text-sm text-azul-profundo/50">
            Responde preguntas abiertas de la comunidad. Las preguntas respondidas se publicarán automáticamente en el foro.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* ─── PENDIENTES DE RESPONDER ─── */}
        <div>
          <h2 className="flex items-center gap-2 text-base font-sans font-semibold text-azul-profundo mb-4 border-b border-azul-profundo/10 pb-2">
            <Clock size={16} className="text-dorado" />
            Preguntas pendientes ({pending.length})
          </h2>

          {pending.length === 0 ? (
            <p className="font-sans text-sm text-azul-profundo/40 bg-white rounded-xl py-8 text-center border border-azul-profundo/[0.05]">
              No hay preguntas pendientes. ¡Todo al día!
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {pending.map((q) => (
                <div key={q.id} className="bg-white rounded-xl shadow-card p-6 border border-azul-profundo/[0.04] flex flex-col md:flex-row gap-6 justify-between items-start">
                  <div className="flex-1 space-y-3 min-w-0">
                    <div className="flex items-center gap-3 text-xs font-sans text-azul-profundo/50">
                      <span className="font-bold text-dorado bg-dorado/10 px-2 py-0.5 rounded">
                        De: {q.authorName || 'Anónimo'}
                      </span>
                      <span>•</span>
                      <span>{formatDate(q.createdAt)}</span>
                    </div>
                    <p className="font-serif text-base text-azul-profundo leading-relaxed">
                      "{q.question}"
                    </p>

                    <div className="pt-2">
                      <AnswerForm questionId={q.id} />
                    </div>
                  </div>

                  <form action={deleteForumQuestion.bind(null, q.id)} className="self-end md:self-start">
                    <button
                      type="submit"
                      title="Eliminar pregunta"
                      className="p-2 rounded-lg text-azul-profundo/30 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0 border border-transparent hover:border-red-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── RESPONDIDAS Y PUBLICADAS ─── */}
        <div>
          <h2 className="flex items-center gap-2 text-base font-sans font-semibold text-azul-profundo mb-4 border-b border-azul-profundo/10 pb-2">
            <CheckCircle size={16} className="text-green-600" />
            Preguntas respondidas y publicadas ({answered.length})
          </h2>

          {answered.length === 0 ? (
            <p className="font-sans text-sm text-azul-profundo/40 bg-white rounded-xl py-8 text-center border border-azul-profundo/[0.05]">
              No hay preguntas respondidas todavía.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {answered.map((q) => (
                <div key={q.id} className="bg-white rounded-xl shadow-card p-6 border border-azul-profundo/[0.04] flex flex-col md:flex-row gap-6 justify-between items-start">
                  <div className="flex-1 space-y-4 min-w-0">
                    <div className="flex items-center gap-3 text-xs font-sans text-azul-profundo/50">
                      <span className="font-semibold text-azul-claro bg-azul-claro/10 px-2 py-0.5 rounded">
                        De: {q.authorName || 'Anónimo'}
                      </span>
                      <span>•</span>
                      <span>Creada: {formatDate(q.createdAt)}</span>
                      {q.answeredAt && (
                        <>
                          <span>•</span>
                          <span className="text-green-600 font-medium">
                            Respondida: {formatDate(q.answeredAt)}
                          </span>
                        </>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-azul-profundo/40">Pregunta</p>
                      <p className="font-serif text-base text-azul-profundo leading-relaxed italic">
                        "{q.question}"
                      </p>
                    </div>

                    <div className="bg-beige/40 rounded-lg p-4 border border-azul-profundo/[0.02] space-y-1">
                      <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-dorado">Respuesta del Maestro</p>
                      <p className="font-sans text-sm text-azul-profundo/85 leading-relaxed">
                        {q.answer}
                      </p>
                    </div>
                  </div>

                  <form action={deleteForumQuestion.bind(null, q.id)} className="self-end md:self-start">
                    <button
                      type="submit"
                      title="Eliminar del foro"
                      className="p-2 rounded-lg text-azul-profundo/30 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0 border border-transparent hover:border-red-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
