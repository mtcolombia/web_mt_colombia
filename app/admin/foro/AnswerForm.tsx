'use client'

import { useState, useTransition } from 'react'
import { answerForumQuestion } from '@/app/actions/forum'
import { Send } from 'lucide-react'

interface AnswerFormProps {
  questionId: string
}

export function AnswerForm({ questionId }: AnswerFormProps) {
  const [answer, setAnswer] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!answer.trim() || isPending) return

    startTransition(async () => {
      try {
        await answerForumQuestion(questionId, answer)
        setAnswer('')
      } catch (err) {
        console.error('Error al responder pregunta:', err)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-2 w-full">
      <textarea
        placeholder="Escribe la respuesta del maestro aquí..."
        rows={3}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={isPending}
        className="w-full rounded-lg border border-azul-profundo/10 p-3 font-sans text-sm
                   text-azul-profundo placeholder:text-azul-profundo/30 focus:outline-none
                   focus:border-dorado disabled:opacity-50 transition-colors resize-y"
        required
      />
      <button
        type="submit"
        disabled={isPending || !answer.trim()}
        className="self-start inline-flex items-center gap-2 rounded-lg bg-azul-claro text-white
                   font-sans font-semibold text-xs py-2.5 px-4.5 shadow-sm hover:bg-azul-claro/90
                   active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200"
      >
        <Send size={12} />
        {isPending ? 'Enviando y publicando...' : 'Responder y publicar'}
      </button>
    </form>
  )
}
