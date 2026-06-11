import { Download, CheckSquare, BookOpen, Palette, Workflow } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'

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
  },
  {
    title: 'Checklist de Thumbnail',
    description: 'Elementos essenciais para criar thumbnails que geram cliques e aumentam o CTR.',
    icon: Palette,
    gradient: 'from-pink-500 to-rose-500',
    type: 'PDF',
    pages: '8 páginas',
  },
  {
    title: 'Fluxo de Produção com IA',
    description: 'Workflow completo de produção de vídeos utilizando ferramentas de IA em cada etapa.',
    icon: Workflow,
    gradient: 'from-amber-500 to-orange-500',
    type: 'PDF',
    pages: '16 páginas',
  },
]

export default function Recursos() {
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
                  <button className="w-full py-3 rounded-xl gradient-btn text-sm font-semibold flex items-center justify-center gap-2">
                    <Download size={16} />
                    Download Gratuito
                  </button>
                </div>
              </Section>
            )
          })}
        </div>

        {/* CTA Section */}
        <Section className="mt-16">
          <div className="glass rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Quer mais recursos exclusivos?
              </h2>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Inscreva-se na newsletter e receba novos materiais toda semana diretamente no seu email.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-xl glass text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                />
                <button type="submit" className="gradient-btn px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
