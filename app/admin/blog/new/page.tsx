import { BlogArticleForm } from '../BlogArticleForm'

export const metadata = { title: 'Nuevo artículo · Admin' }

export default function NewArticlePage() {
  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl text-azul-profundo mb-6">Nuevo artículo</h1>
      <BlogArticleForm />
    </div>
  )
}
