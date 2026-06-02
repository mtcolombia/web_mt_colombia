'use client'

import { useState, useTransition } from 'react'
import { submitForumQuestion } from '@/app/actions/forum'
import { HelpCircle, CheckCircle, AlertCircle } from 'lucide-react'

export function QuestionForm() {
  const [authorName, setAuthorName] = useState('')
  const [question, setQuestion] = useState('')
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || isPending) return

    setResult(null)

    const formData = new FormData()
    formData.append('authorName', authorName)
    formData.append('question', question)

    startTransition(async () => {
      try {
        const res = await submitForumQuestion(null, formData)
        if (res?.success) {
          setResult({
            success: true,
            message: '¡Pregunta enviada con éxito! El maestro la revisará y la publicará una vez sea respondida.',
          })
          setAuthorName('')
          setQuestion('')
        } else {
          setResult({
            success: false,
            message: res?.error || 'Ocurrió un error al enviar tu pregunta. Por favor, intenta de nuevo.',
          })
        }
      } catch (err) {
        setResult({
          success: false,
          message: 'Error de red. Por favor, comprueba tu conexión.',
        })
      }
    })
  }

  return (
    <div className="bg-white rounded-2xl border border-azul-profundo/[0.06] p-6 md:p-8 shadow-[0_16px_48px_rgba(15,42,68,0.05)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-dorado/10 flex items-center justify-center text-dorado">
          <HelpCircle size={20} />
        </div>
        <div>
          <h3 className="font-sans font-bold text-azul-profundo text-lg">Haz tu pregunta</h3>
          <p className="text-[11px] font-sans text-azul-profundo/50">Abierto · Sin registro</p>
        </div>
      </div>

      {result && (
        <div className={`p-4 rounded-xl flex items-start gap-3 mb-6 font-sans text-xs ${
          result.success 
            ? 'bg-green-50 border border-green-100 text-green-800' 
            : 'bg-red-50 border border-red-100 text-red-800'
        }`}>
          {result.success ? (
            <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
          )}
          <p className="leading-relaxed">{result.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="authorName" className="block text-xs font-sans font-semibold text-azul-profundo/60 mb-1.5">
            Nombre / Alias (Opcional)
          </label>
          <input
            type="text"
            id="authorName"
            placeholder="Ej. Practicante o tu nombre (Dejar vacío para Anónimo)"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            disabled={isPending}
            className="w-full rounded-lg border border-azul-profundo/10 px-4 py-2.5 font-sans text-sm
                       text-azul-profundo placeholder:text-azul-profundo/30 focus:outline-none
                       focus:border-dorado disabled:opacity-50 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="question" className="block text-xs font-sans font-semibold text-azul-profundo/60 mb-1.5">
            Tu pregunta (Mínimo 10 caracteres)
          </label>
          <textarea
            id="question"
            placeholder="Escribe tu inquietud sobre la Meditación Trascendental, beneficios, técnica..."
            rows={5}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isPending}
            className="w-full rounded-lg border border-azul-profundo/10 p-4 font-sans text-sm
                       text-azul-profundo placeholder:text-azul-profundo/30 focus:outline-none
                       focus:border-dorado disabled:opacity-50 transition-colors resize-y"
            required
            minLength={10}
          />
        </div>

        <button
          type="submit"
          disabled={isPending || question.trim().length < 10}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-azul-accion text-white
                     font-sans font-semibold text-sm py-3 px-6 shadow-sm hover:bg-azul-accion/90
                     active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 cursor-pointer"
        >
          {isPending ? 'Enviando pregunta...' : 'Enviar pregunta al Maestro'}
        </button>
      </form>
    </div>
  )
}
