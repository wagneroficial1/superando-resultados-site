import { useState } from 'react'
import { Sparkles, TrendingUp, Wand2, BarChart3, Send, Loader2 } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'

function ContentGenerator() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const mockGenerate = () => {
    if (!input.trim()) return
    setIsGenerating(true)
    setOutput('')

    const mockOutput = `## Título Sugerido:\n"${input} - O Guia Definitivo para 2024"\n\n## Roteiro:\n\n**Hook (0-30s):**\nVocê sabia que 90% dos criadores não utilizam essa estratégia? Hoje vou te mostrar exatamente como...\n\n**Desenvolvimento:**\n1. Contexto e importância do tema\n2. Passo a passo prático\n3. Ferramentas recomendadas\n4. Erros comuns a evitar\n\n**CTA Final:**\nSe esse conteúdo te ajudou, deixe o like e se inscreva para mais dicas sobre IA e YouTube.`

    let i = 0
    const interval = setInterval(() => {
      setOutput(mockOutput.slice(0, i))
      i += 3
      if (i >= mockOutput.length) {
        setOutput(mockOutput)
        setIsGenerating(false)
        clearInterval(interval)
      }
    }, 20)
  }

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <Wand2 size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Gerador de Conteúdo IA</h3>
          <p className="text-gray-500 text-xs">Gere roteiros, títulos e ideias com IA</p>
        </div>
        <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
          Em desenvolvimento
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite o tema do seu vídeo..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            onKeyDown={(e) => e.key === 'Enter' && mockGenerate()}
          />
          <button
            onClick={mockGenerate}
            disabled={isGenerating}
            className="gradient-btn px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-semibold disabled:opacity-50"
          >
            {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </div>

        {output && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-h-64 overflow-y-auto">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

function GrowthSimulator() {
  const [subscribers] = useState(1000)
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  const data = months.map((_, i) => Math.floor(subscribers * Math.pow(1.15, i + 1)))

  const maxValue = Math.max(...data)

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
          <BarChart3 size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Simulador de Crescimento</h3>
          <p className="text-gray-500 text-xs">Projete o crescimento do seu canal</p>
        </div>
        <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
          Em desenvolvimento
        </span>
      </div>

      {/* Mock Chart */}
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-1 h-48 px-2">
          {data.map((value, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-purple-600 to-blue-500 transition-all duration-500 hover:from-purple-500 hover:to-blue-400 min-h-[4px]"
                style={{ height: `${(value / maxValue) * 100}%` }}
              />
              <span className="text-[10px] text-gray-500">{months[i]}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">{(data[11] / 1000).toFixed(1)}K</p>
            <p className="text-xs text-gray-500">Projeção 12 meses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">15%</p>
            <p className="text-xs text-gray-500">Crescimento mensal</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-400">435%</p>
            <p className="text-xs text-gray-500">Crescimento total</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Laboratorio() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Laboratório IA"
        description="Ferramentas exclusivas de Inteligência Artificial em desenvolvimento para criadores de conteúdo. Gerador de roteiros, simulador de crescimento e mais."
        path="/laboratorio"
      />
      <div className="max-w-6xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-300 mb-6">
              <Sparkles size={16} className="text-purple-400" />
              Ferramentas Exclusivas
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Laboratório de <span className="gradient-text">IA</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ferramentas inteligentes em desenvolvimento para revolucionar sua produção de conteúdo.
            </p>
          </div>
        </Section>

        <div className="grid lg:grid-cols-2 gap-6">
          <Section>
            <ContentGenerator />
          </Section>
          <Section>
            <GrowthSimulator />
          </Section>
        </div>

        {/* Coming Soon */}
        <Section className="mt-12">
          <div className="glass rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <TrendingUp size={48} className="text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Mais ferramentas em breve
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Estamos desenvolvendo um conjunto completo de ferramentas IA para criadores. 
                Analisador de SEO, gerador de thumbnails, otimizador de títulos e muito mais.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
