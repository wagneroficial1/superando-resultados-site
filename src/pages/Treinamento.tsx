import { ArrowRight, Users, Play, TrendingUp, Target, Clapperboard, ImageIcon, BrainCircuit, PenTool, DollarSign, BookOpen, Sparkles } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'

export default function Treinamento() {
  return (
    <div className="pt-20">
      <SEO
        title="Treinamento para Criadores"
        description="Aprenda a criar vídeos melhores, thumbnails mais chamativas e usar ferramentas de IA para acelerar sua produção de conteúdo no YouTube."
        path="/treinamento"
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
            Treinamento para Criadores de Conteúdo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-[slide-up_0.8s_ease]">
            Treinamento para Criadores que Querem{' '}
            <span className="gradient-text">Crescer no YouTube</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-[slide-up_1s_ease]">
            Aprenda a criar vídeos melhores, thumbnails mais chamativas e usar ferramentas de IA para acelerar sua produção de conteúdo.
          </p>

          <div className="flex items-center justify-center animate-[slide-up_1.2s_ease]">
            <a
              href="https://pay.kiwify.com.br/74e3nB1"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Quero fazer o treinamento
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Para quem é esse treinamento */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Para quem é esse <span className="gradient-text">treinamento</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Se você se encaixa em algum desses perfis, esse treinamento foi feito para você.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Criadores iniciantes', description: 'Quem está começando no YouTube e quer aprender do jeito certo desde o início.' },
              { icon: Play, title: 'Canais dark', description: 'Criadores de canais sem aparecer que querem escalar produção com qualidade.' },
              { icon: Clapperboard, title: 'Produtores de conteúdo', description: 'Quem já produz mas quer melhorar a qualidade e a consistência dos vídeos.' },
              { icon: Target, title: 'Quem quer evoluir', description: 'Criadores que querem melhorar edição, thumbnails, roteiro, IA e estratégia.' },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 glow-card text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* O que você vai aprender */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              O que você vai <span className="gradient-text">aprender</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conteúdo prático e direto ao ponto para transformar sua produção de conteúdo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Estratégia para canais no YouTube', description: 'Posicionamento, nicho, frequência e como o algoritmo funciona na prática.', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Clapperboard, title: 'Edição de vídeo', description: 'Técnicas de edição que prendem a atenção e aumentam a retenção do público.', gradient: 'from-purple-500 to-pink-500' },
              { icon: ImageIcon, title: 'Criação de thumbnails', description: 'Como criar thumbnails que geram cliques e se destacam no feed.', gradient: 'from-pink-500 to-orange-500' },
              { icon: BrainCircuit, title: 'Uso de ferramentas de IA', description: 'Ferramentas de IA para acelerar roteiro, edição, imagens e muito mais.', gradient: 'from-green-500 to-emerald-500' },
              { icon: PenTool, title: 'Roteiros e retenção', description: 'Estruturas de roteiro que mantêm o espectador assistindo até o final.', gradient: 'from-amber-500 to-orange-500' },
              { icon: DollarSign, title: 'Monetização e crescimento', description: 'Estratégias para monetizar seu canal e crescer de forma sustentável.', gradient: 'from-indigo-500 to-violet-500' },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-8 glow-card group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} opacity-80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Por que esse treinamento é diferente */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Por que esse treinamento é <span className="gradient-text">diferente</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nada de teoria sem aplicação. Aqui você aprende fazendo, com exemplos reais e ferramentas que funcionam.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 sm:p-12 glow-card">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Foco 100% prático e aplicável',
                'Direto ao ponto, sem enrolação',
                'Mentoria com os alunos ao vivo',
                'Acesso à comunidade dos alunos',
                'Estratégias para produzir com qualidade',
                'Agilidade na produção com IA',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={16} className="text-purple-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Módulos do treinamento */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Módulos do <span className="gradient-text">treinamento</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uma jornada completa do zero ao canal profissional, organizada em módulos práticos.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { number: '01', title: 'Fundamentos do YouTube', description: 'Entenda como a plataforma funciona, algoritmo, nicho e posicionamento.' },
              { number: '02', title: 'Roteiro e retenção', description: 'Estruturas de roteiro, ganchos, storytelling e técnicas de retenção.' },
              { number: '03', title: 'Edição de vídeo', description: 'Edição dinâmica, cortes, efeitos, ritmo e ferramentas profissionais.' },
              { number: '04', title: 'Thumbnails de alta conversão', description: 'Design, cores, tipografia e psicologia por trás de thumbnails que convertem.' },
              { number: '05', title: 'Ferramentas de IA para criadores', description: 'IA para roteiro, edição, imagens, voz e automação de processos.' },
              { number: '06', title: 'Publicação, análise e otimização', description: 'SEO, analytics, testes A/B e estratégias de crescimento contínuo.' },
            ].map((module) => (
              <div key={module.number} className="glass rounded-2xl p-6 glow-card flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{module.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{module.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
            ))}
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
              <BookOpen size={40} className="text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Comece a construir um canal mais <span className="gradient-text">profissional</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Use estratégia, edição, thumbnails e IA para transformar sua produção de conteúdo.
              </p>
              <a
                href="https://pay.kiwify.com.br/74e3nB1"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2"
              >
                Entrar para o treinamento
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
