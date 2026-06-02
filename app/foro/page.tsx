import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { HeroSecondary } from '@/components/sections/HeroSecondary'
import { CTABand } from '@/components/sections/CTABand'
import { QuestionForm } from './QuestionForm'
import type { ForumQuestion } from '@/lib/schemas'
import { formatDate } from '@/lib/utils'
import { MessageSquare, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Foro Q&A',
  description:
    'Foro de preguntas y respuestas sobre Meditación Trascendental. Consulta tus dudas de forma abierta y directa.',
}

function getAnsweredQuestions(): ForumQuestion[] {
  try {
    const list = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'forum.json'), 'utf-8'),
    ) as ForumQuestion[]
    return list
      .filter((q) => q.published && q.answer)
      .sort((a, b) => new Date(b.answeredAt || b.createdAt).getTime() - new Date(a.answeredAt || a.createdAt).getTime())
  } catch {
    return []
  }
}

export default function ForoPage() {
  const answeredList = getAnsweredQuestions()

  return (
    <>
      {/* Hero Secondary */}
      <HeroSecondary
        title="Foro de Preguntas Abiertas"
        subtitle="Respuestas claras y profundas sobre la práctica de la Meditación Trascendental."
        breadcrumbs={[{ label: 'Foro' }]}
        imageSrc="/images/hero-blog.jpeg"
      />

      {/* Main Section */}
      <section className="section-y bg-beige/35">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Left/Main Column - Q&A List */}
            <div className="lg:col-span-2 space-y-8">
              <div className="border-b border-azul-profundo/10 pb-4">
                <h2 className="text-2xl md:text-3xl text-azul-profundo font-display">Preguntas Respondidas</h2>
                <p className="font-sans text-sm text-azul-profundo/50 mt-1">
                  Explora las explicaciones del maestro a las dudas de la comunidad.
                </p>
              </div>

              {answeredList.length === 0 ? (
                <div className="bg-white rounded-2xl border border-azul-profundo/[0.06] p-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-azul-claro/10 flex items-center justify-center text-azul-claro mx-auto">
                    <MessageSquare size={22} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans font-bold text-azul-profundo text-base">No hay preguntas publicadas aún</p>
                    <p className="font-sans text-xs text-azul-profundo/45 max-w-sm mx-auto leading-relaxed">
                      Sé el primero en enviar una pregunta al maestro utilizando el formulario a tu derecha. Una vez respondida, aparecerá aquí.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {answeredList.map((q) => (
                    <article
                      key={q.id}
                      className="bg-white rounded-2xl border border-azul-profundo/[0.05] p-6 md:p-8
                                 shadow-[0_8px_30px_rgb(15,42,68,0.03)] hover:shadow-[0_16px_40px_rgb(15,42,68,0.06)]
                                 transition-all duration-300 space-y-5"
                    >
                      <div className="flex items-center gap-3 text-xs font-sans text-azul-profundo/45">
                        <span className="font-bold text-dorado bg-dorado/10 px-2.5 py-0.5 rounded-full">
                          Pregunta de {q.authorName || 'Anónimo'}
                        </span>
                        {q.answeredAt && (
                          <>
                            <span>•</span>
                            <span>Respondida: {formatDate(q.answeredAt)}</span>
                          </>
                        )}
                      </div>

                      {/* Question Content */}
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-dorado/5 border border-dorado/10 flex items-center justify-center text-dorado shrink-0 mt-1">
                          <HelpCircle size={16} />
                        </div>
                        <h3 className="font-serif text-lg text-azul-profundo leading-relaxed font-semibold italic">
                          "{q.question}"
                        </h3>
                      </div>

                      {/* Answer Content */}
                      <div className="bg-beige/40 rounded-xl p-5 md:p-6 border border-azul-profundo/[0.02] flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-azul-claro/10 flex items-center justify-center text-azul-claro shrink-0 mt-0.5">
                          <MessageSquare size={14} className="fill-azul-claro" />
                        </div>
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-dorado">
                            Respuesta del Maestro
                          </p>
                          <p className="font-sans text-sm md:text-base text-azul-profundo/85 leading-relaxed whitespace-pre-line">
                            {q.answer}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Right/Sidebar Column - Question Form */}
            <div className="lg:sticky lg:top-24">
              <QuestionForm />
            </div>

          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
