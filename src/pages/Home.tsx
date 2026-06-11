import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Users, Eye, Clock, Wrench } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'
import { useInView, useCountUp } from '../hooks/useAnimations'

function MetricCard({ icon: Icon, value, suffix, label }: { icon: React.ElementType; value: number; suffix: string; label: string }) {
  const { ref, isInView } = useInView(0.3)
  const count = useCountUp(value, 2000, isInView)

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center glow-card">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
        <Icon size={24} className="text-purple-400" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="pt-20">
      <SEO
        title="Superando Resultados - Domine o YouTube com IA"
        description="Ferramentas, estratégias e recursos de Inteligência Artificial para criadores de conteúdo que desejam acelerar seus resultados no YouTube."
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-300 mb-8 animate-[fade-in_0.6s_ease]">
            <Sparkles size={16} className="text-purple-400" />
            Plataforma de IA para Criadores de Conteúdo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-[slide-up_0.8s_ease]">
            Domine o Algoritmo do YouTube com{' '}
            <span className="gradient-text">Inteligência Artificial</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-[slide-up_1s_ease]">
            Ferramentas, estratégias e recursos para criadores que desejam acelerar seus resultados utilizando IA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slide-up_1.2s_ease]">
            <Link
              to="/ferramentas"
              className="gradient-btn px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Explorar Ferramentas
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/recursos"
              className="px-8 py-4 rounded-xl text-base font-semibold glass hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Recursos Gratuitos
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Números que <span className="gradient-text">comprovam</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Anos de experiência ajudando criadores a crescerem com inteligência artificial.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <MetricCard icon={Users} value={193} suffix="K+" label="Inscritos no canal" />
            <MetricCard icon={Eye} value={9.5} suffix="M+" label="Visualizações acumuladas" />
            <MetricCard icon={Clock} value={320} suffix="+" label="Vídeos públicados" />
            <MetricCard icon={Wrench} value={720} suffix="+" label="Alunos do treinamento" />
          </div>
        </div>
      </Section>

      {/* Features Preview */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ferramentas IA',
                description: 'Curadoria das melhores ferramentas de IA para criadores de conteúdo.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Laboratório IA',
                description: 'Ferramentas exclusivas em desenvolvimento para acelerar sua produção.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Recursos Gratuitos',
                description: 'Checklists, guias e fluxos de trabalho para otimizar seus resultados.',
                gradient: 'from-pink-500 to-orange-500',
              },
            ].map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-8 glow-card group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Sparkles size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
