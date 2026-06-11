import { Target, Lightbulb, Rocket, Award, Users, Zap } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'

const milestones = [
  { year: '2019', title: 'Início da Jornada', description: 'Primeiro vídeo publicado sobre marketing digital e crescimento no YouTube.', icon: Rocket },
  { year: '2020', title: 'Foco em IA', description: 'Pivotamos para conteúdo sobre inteligência artificial aplicada à criação de conteúdo.', icon: Lightbulb },
  { year: '2021', title: '50K Inscritos', description: 'Alcançamos a marca de 50 mil inscritos com conteúdo sobre ferramentas IA.', icon: Users },
  { year: '2022', title: 'Comunidade Ativa', description: 'Lançamento da comunidade exclusiva para criadores que utilizam IA.', icon: Zap },
  { year: '2023', title: '100K Inscritos', description: 'Placa de prata do YouTube e reconhecimento como referência em IA para criadores.', icon: Award },
  { year: '2024', title: 'Plataforma SR', description: 'Lançamento da plataforma Superando Resultados com ferramentas e recursos exclusivos.', icon: Target },
]

export default function Sobre() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Sobre"
        description="Conheça a história e missão do Superando Resultados. Democratizando o uso de IA para criadores de conteúdo no YouTube."
        path="/sobre"
      />
      <div className="max-w-6xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Sobre o <span className="gradient-text">Superando Resultados</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conheça nossa história e missão de democratizar o uso de IA para criadores de conteúdo.
            </p>
          </div>
        </Section>

        {/* Mission Section */}
        <Section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 glow-card">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <Target size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-400 leading-relaxed">
                Capacitar criadores de conteúdo com as melhores ferramentas e estratégias de inteligência artificial, 
                tornando a tecnologia acessível para todos que desejam crescer no YouTube e nas plataformas digitais.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-card">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                <Lightbulb size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Especialização</h2>
              <p className="text-gray-400 leading-relaxed">
                Somos especializados na interseção entre inteligência artificial e criação de conteúdo. 
                Testamos, analisamos e ensinamos como utilizar as ferramentas mais avançadas do mercado 
                para maximizar resultados com eficiência.
              </p>
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossa <span className="gradient-text">Trajetória</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isLeft = index % 2 === 0

                return (
                  <Section key={milestone.year}>
                    <div className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        <div className={`glass rounded-2xl p-6 glow-card inline-block ${isLeft ? 'md:ml-auto' : ''}`}>
                          <span className="text-sm font-bold text-purple-400">{milestone.year}</span>
                          <h3 className="text-lg font-bold mt-1 mb-2">{milestone.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center z-10 shadow-lg shadow-purple-500/20">
                        <Icon size={16} className="text-white" />
                      </div>

                      {/* Spacer for other side */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </Section>
                )
              })}
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
