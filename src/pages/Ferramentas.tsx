import { useState } from 'react'
import { ExternalLink, Video, Image, Mic, Zap, Search, MonitorPlay, Code, Music } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'

const categories = ['Todas', 'Vídeo IA', 'Imagem IA', 'Voz IA', 'Automação', 'Pesquisa', 'Thumbnail IA', 'Vibe Coding', 'Música / Áudio']

const categoryIcons: Record<string, React.ElementType> = {
  'Vídeo IA': Video,
  'Imagem IA': Image,
  'Voz IA': Mic,
  'Automação': Zap,
  'Pesquisa': Search,
  'Thumbnail IA': MonitorPlay,
  'Vibe Coding': Code,
  'Música / Áudio': Music,
}

const tools = [
  {
  name: 'Virathumb',
    description: 'Ferramenta de IA focada em criar thumbnails mais chamativas e otimizadas para aumentar o CTR de vídeos no YouTube.',
    category: 'Thumbnail IA',
    gradient: 'from-rose-500 to-pink-500',
    url: 'https://virathumb.com/?via=supres',
  },
  {
    name: 'Verdent',
    description: 'Plataforma de IA para criar sites, apps e projetos digitais completos usando linguagem natural, Plan Mode e Agent Mode.',
    category: 'Vibe Coding',
    gradient: 'from-green-500 to-emerald-500',
    url: 'https://www.verdent.ai/?id=701090',
  },
  {
    name: 'Epidemic Sound',
    description: 'Biblioteca profissional de músicas e efeitos sonoros para criadores de conteúdo, vídeos no YouTube, teste Grátis de 30 dias.',
    category: 'Música / Áudio',
    gradient: 'from-yellow-500 to-orange-500',
    url: 'https://share.epidemicsound.com/i3ouua',
  },
  {
    name: 'MagicLight',
    description: 'Ferramenta de Inteligência Artificial para criação e edição de vídeos com recursos visuais avançados para criadores de conteúdo.',
    category: 'Vídeo IA',
    gradient: 'from-sky-500 to-blue-600',
    url: 'https://www.magiclight.ai/pt/?code=spmgxc3',
  },
  {
    name: 'ElevenLabs',
    description: 'Síntese de voz ultra-realista com clonagem vocal. Narração profissional com IA.',
    category: 'Voz IA',
    gradient: 'from-indigo-500 to-violet-500',
    url: 'https://try.elevenlabs.io/bgii1180vjpy',
  },
  {
    name: 'ChatGPT',
    description: 'Assistente IA para roteiros, ideias, títulos e otimização de conteúdo.',
    category: 'Pesquisa',
    gradient: 'from-emerald-500 to-teal-500',
    url: 'https://chatgpt.com/',
  },
  {
    name: 'Google AI Studio',
    description: 'Acesso gratuito à API do Gemini 2.5 Pro/Flash. Contexto de 1 milhão de tokens. Limite de taxa de 15 RPM. Sem custo.',
    category: 'Voz IA',
    gradient: 'from-teal-500 to-green-500',
    url: 'https://aistudio.google.com/apps',
  },
  
  {
    name: 'Meta AI',
    description: 'Plataforma completa de geração de imagens e vídeos com modelos especializados.',
    category: 'Imagem IA',
    gradient: 'from-orange-500 to-red-500',
    url: 'https://meta.ai',
  },
  {
    name: 'Google Flow',
    description: 'Modelo Imagen do NAno Banana2 e vídeos com Veo3.1. Plano gratuito com conta do Google.',
    category: 'Imagem e Vídeo IA',
    gradient: 'from-cyan-500 to-blue-500',
    url: 'https://labs.google/fx/pt/tools/flow',
  },
  {
    name: 'Google NotebookLM',
    description: 'Podcasts gerados automaticamente, análise de fontes, 100 cadernos gratuitos.',
    category: 'Automação',
    gradient: 'from-amber-500 to-orange-500',
    url: 'https://notebooklm.google.com/notebook/719b76f8-f499-4f5c-b1e7-b243f58e744e?addSource=true',
  },
    {
    name: 'Google ImageFX',
    description: 'Modelo Imagen do Google. Plano gratuito generoso com conta do Google.',
    category: 'Imagem IA',
    gradient: 'from-cyan-500 to-blue-500',
    url: 'https://labs.google/fx/pt',
  },
  {
    name: 'Runway ML',
    description: 'Geração e edição de vídeos com IA avançada. Crie conteúdo visual impressionante em minutos.',
    category: 'Vídeo IA',
    gradient: 'from-cyan-500 to-blue-500',
    url: 'https://runwayml.com/',
  },
  {
    name: 'HeyGen',
    description: 'Crie vídeos com avatares IA realistas. Perfeito para conteúdo educacional e marketing.',
    category: 'Vídeo IA',
    gradient: 'from-blue-600 to-indigo-500',
  },
  {
    name: 'Midjourney',
    description: 'Geração de imagens artísticas de alta qualidade. Ideal para thumbnails e arte de canal.',
    category: 'Imagem IA',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Leonardo AI',
    description: 'Plataforma completa de geração de imagens com modelos especializados.',
    category: 'Imagem IA',
    gradient: 'from-violet-500 to-purple-600',
  },
]

export default function Ferramentas() {
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filteredTools = activeCategory === 'Todas'
    ? tools
    : tools.filter((t) => t.category === activeCategory)

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Ferramentas IA"
        description="Curadoria das melhores ferramentas de Inteligência Artificial para criadores de conteúdo no YouTube. Vídeo, imagem, voz, automação e pesquisa."
        path="/ferramentas"
      />
      <div className="max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Ferramentas <span className="gradient-text">Recomendadas</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Curadoria das melhores ferramentas de IA para criadores de conteúdo no YouTube.
            </p>
          </div>
        </Section>

        {/* Category Filter */}
        <Section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'gradient-btn text-white'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Section>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => {
            const Icon = categoryIcons[tool.category] || Zap
            return (
              <Section key={tool.name}>
                <div
                  className="glass rounded-2xl p-6 glow-card h-full flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full glass text-purple-300 font-medium">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {tool.description}
                  </p>
                  <button
                    onClick={() => {
                      if (tool.url) window.open(tool.url, '_blank')
                    }}
                    className="w-full py-3 rounded-xl glass hover:bg-purple-500/20 transition-all text-sm font-semibold flex items-center justify-center gap-2 text-purple-300"
                  >
                    Acessar Ferramenta
                    <ExternalLink size={14} />
                  </button>
                </div>
              </Section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
