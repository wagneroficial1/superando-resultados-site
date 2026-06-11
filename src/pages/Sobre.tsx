import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Eye, Video, Brain, Play, ImageIcon, Mic, Zap, Wrench, Code, TrendingUp, GraduationCap, DollarSign, Clapperboard, Target } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'
import { useInView, useCountUp } from '../hooks/useAnimations'

function StatCard({ value, suffix, label, gradient }: { value: number; suffix: string; label: string; gradient: string }) {
  const { ref, isInView } = useInView(0.3)
  const count = useCountUp(value, 2000, isInView)

  return (
    <div ref={ref} className="glass rounded-2xl p-8 text-center glow-card group">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} opacity-80 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
        <Sparkles size={28} className="text-white" />
      </div>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-3">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <p className="text-gray-400 text-base">{label}</p>
    </div>
  )
}

const specialties = [
  {
    title: 'YouTube Growth',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Play,
    items: [
      { label: 'Estratégia de Conteúdo', icon: TrendingUp },
      { label: 'CTR', icon: Target },
      { label: 'Retenção', icon: Eye },
      { label: 'Títulos', icon: Sparkles },
      { label: 'Thumbnails', icon: ImageIcon },
      { label: 'SEO para YouTube', icon: Play },
    ],
  },
  {
    title: 'Inteligência Artificial',
    gradient: 'from-purple-500 to-pink-500',
    icon: Brain,
    items: [
      { label: 'IA para Vídeos', icon: Video },
      { label: 'IA para Imagens', icon: ImageIcon },
      { label: 'IA para Voz', icon: Mic },
      { label: 'Automação', icon: Zap },
      { label: 'Ferramentas de IA', icon: Wrench },
      { label: 'Vibe Coding', icon: Code },
    ],
  },
  {
    title: 'Treinamentos',
    gradient: 'from-pink-500 to-orange-500',
    icon: GraduationCap,
    items: [
      { label: 'Crescimento no YouTube', icon: TrendingUp },
      { label: 'Edição de Vídeo', icon: Clapperboard },
      { label: 'Criação de Thumbnails', icon: ImageIcon },
      { label: 'Ferramentas de IA', icon: Wrench },
      { label: 'Monetização', icon: DollarSign },
      { label: 'Produção de Conteúdo', icon: Video },
    ],
  },
]

export default function Sobre() {
  return (
    <div className="pt-20">
      <SEO
        title="Sobre"
        description="Conheça o Superando Resultados. Ajudamos criadores de conteúdo a crescer no YouTube utilizando Inteligência Artificial, estratégias modernas e otimização de resultados."
        path="/sobre"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-300 mb-8 animate-[fade-in_0.6s_ease]">
            <Sparkles size={16} className="text-purple-400" />
            Quem Somos
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-[slide-up_0.8s_ease]">
            Sobre o{' '}
            <span className="gradient-text">Superando Resultados</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-[slide-up_1s_ease]">
            Ajudamos criadores de conteúdo a crescer no YouTube utilizando Inteligência Artificial, estratégias modernas de conteúdo, edição profissional e otimização de resultados.
          </p>
        </div>
      </section>

      {/* Estatísticas */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Números que <span className="gradient-text">comprovam</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Resultados reais construídos com consistência, estratégia e inteligência artificial.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard value={193000} suffix="+" label="Inscritos" gradient="from-blue-500 to-cyan-500" />
            <StatCard value={9580000} suffix="+" label="Visualizações" gradient="from-purple-500 to-pink-500" />
            <StatCard value={320} suffix="+" label="Vídeos Publicados" gradient="from-pink-500 to-orange-500" />
            <StatCard value={720} suffix="+" label="Alunos do Treinamento" gradient="from-green-500 to-emerald-500" />
          </div>
        </div>
      </Section>

      {/* Especialidades */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossa <span className="gradient-text">Especialidade</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Combinamos YouTube, Inteligência Artificial e educação para ajudar criadores a alcançar resultados reais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialties.map((specialty) => (
              <div key={specialty.title} className="glass rounded-2xl p-8 glow-card group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${specialty.gradient} opacity-80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <specialty.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-5">{specialty.title}</h3>
                <div className="space-y-3">
                  {specialty.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Missão */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossa <span className="gradient-text">Missão</span>
            </h2>
          </div>

          <div className="relative glass rounded-2xl p-8 sm:p-12 text-center overflow-hidden glow-card">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
                <Target size={32} className="text-white" />
              </div>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Democratizar o acesso às melhores estratégias de crescimento no YouTube e às ferramentas mais avançadas de Inteligência Artificial, ajudando criadores a produzir conteúdo de maior qualidade e alcançar resultados reais.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <Sparkles size={40} className="text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pronto para acelerar seus <span className="gradient-text">resultados</span>?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Conheça nossas ferramentas, recursos gratuitos e treinamento completo para criadores de conteúdo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/ferramentas"
                  className="gradient-btn px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Conhecer Ferramentas
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/treinamento"
                  className="px-8 py-4 rounded-xl text-base font-semibold glass hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Ver Treinamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
