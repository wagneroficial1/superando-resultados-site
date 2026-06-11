import { useState } from 'react'
import { Download, CheckSquare, BookOpen, Palette, Workflow, X, CheckCircle } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'

const resources = [
  {
    title: 'Checklist para Vídeos Virais',
    description: 'Lista completa com todos os elementos que um vídeo precisa para ter potencial viral no YouTube.',
    icon: CheckSquare,
    gradient: 'from-blue-500 to-cyan-500',
    type: 'PDF',
    pages: '2 páginas',
    file: '/checklist-videos-virais.pdf',
  },
  {
    title: 'Guia de Ferramentas IA',
    description: 'Guia definitivo com as melhores ferramentas de IA organizadas por categoria e caso de uso.',
    icon: BookOpen,
    gradient: 'from-purple-500 to-pink-500',
    type: 'PDF',
    pages: '28 páginas',
    file: '/guia-ferramentas-ia.pdf',
  },
  {
    title: 'Checklist de Thumbnail',
    description: 'Elementos essenciais para criar thumbnails que geram cliques e aumentam o CTR.',
    icon: Palette,
    gradient: 'from-pink-500 to-rose-500',
    type: 'PDF',
    pages: '8 páginas',
    file: '/checklist-thumbnail.pdf',
  },
  {
    title: 'Fluxo de Produção com IA',
    description: 'Workflow completo de produção de vídeos utilizando ferramentas de IA em cada etapa.',
    icon: Workflow,
    gradient: 'from-orange-500 to-amber-500',
    type: 'PDF',
    pages: '16 páginas',
    file: '/fluxo-producao-com-ia.pdf',
  },
]

export default function Recursos() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(() => localStorage.getItem('resources_unlocked') === 'true')

  const openLeadModal = (file: string, title: string) => {
    if (isUnlocked) {
      window.open(file, '_blank')
      return
    }

    setSelectedFile(file)
    setSelectedTitle(title)
  }

  const closeModal = () => {
    setSelectedFile(null)
    setSelectedTitle('')
    setName('')
    setEmail('')
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedFile) return

    setIsLoading(true)

    const { error } = await supabase
      .from('leads')
      .upsert(
        {
          nome: name,
          email,
        },
        {
          onConflict: 'email',
        }
      )

    setIsLoading(false)

    if (error) {
      alert('Não foi possível liberar o material agora. Tente novamente.')
      return
    }

    localStorage.setItem('resources_unlocked', 'true')
    localStorage.setItem('lead_email', email)

    setIsUnlocked(true)
    window.open(selectedFile, '_blank')
    closeModal()
  }

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Recursos Gratuitos"
        description="Checklists, guias e fluxos de trabalho gratuitos para criadores de conteúdo que utilizam IA no YouTube."
        path="/recursos"
      />
      <div className="max-w-6xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Recursos <span className="gradient-text">Gratuitos</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Materiais exclusivos para acelerar seu crescimento no YouTube com IA.
            </p>
          </div>
        </Section>

        <div className="grid sm:grid-cols-2 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon
            return (
              <Section key={resource.title}>
                <div className="glass rounded-2xl p-8 glow-card h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center shrink-0`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{resource.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="px-2 py-0.5 rounded bg-white/5">{resource.type}</span>
                        <span>{resource.pages}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed flex-1 mb-6">
                    {resource.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => openLeadModal(resource.file, resource.title)}
                    className="w-full py-3 rounded-xl gradient-btn text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    {isUnlocked ? 'Baixar Agora' : 'Download Gratuito'}
                  </button>
                </div>
              </Section>
            )
          })}
        </div>

        <Section className="mt-16">
          <div className="glass rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Quer mais recursos exclusivos?
              </h2>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Cadastre-se uma única vez para acessar os materiais gratuitos atuais e futuros do Superando Resultados.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {selectedFile && !isUnlocked && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-strong rounded-2xl p-6 sm:p-8 w-full max-w-md relative">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-5">
              <CheckCircle size={26} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-2">Liberar material gratuito</h3>
            <p className="text-gray-400 text-sm mb-6">
              Informe seu nome e e-mail para acessar: <span className="text-purple-300">{selectedTitle}</span>
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full gradient-btn py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isLoading ? 'Liberando...' : 'Liberar Download'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Você receberá acesso aos materiais gratuitos atuais e futuros.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
