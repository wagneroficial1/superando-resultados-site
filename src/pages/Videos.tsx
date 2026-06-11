import { useRef } from 'react'
import { Play, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'

interface Video {
  title: string
  videoId: string
  duration: string
  views: string
}

interface VideoCategory {
  title: string
  videos: Video[]
}

const videoCategories: VideoCategory[] = [
  {
    title: 'IA para YouTube',
    videos: [
      { title: 'Apenas 1 Prompt: Nova IA Cria, Edita e Posta Vídeos Longos no YouTube', videoId: '2qmbzjEmWXg', duration: '21:05', views: '13K' },
      { title: 'IA Cria Vídeos Longos com 1 Prompt, com Música e Narração Profissional', videoId: '8AyI0E6w7aA', duration: '20:32', views: '16K' },
      { title: 'Como Criar Sua Própria IA Para Crescer no YouTube (Sem Programar)', videoId: 'FOdOm6CjY9Y', duration: '22:08', views: '4.5K' },
      { title: 'Com 1 Prompt, Essa IA Cria um App que Faz Seu Canal no YouTube Crescer', videoId: 'Bq5cJNHsrZk', duration: '19:11', views: '4K' },
    ],
  },
  {
    title: 'Monetização',
    videos: [
      { title: 'ESSE VÍDEO VAI DESTRAVAR O CRESCIMENTO DO SEU CANAL EM 2024', videoId: '8WF88R33iIk', duration: '14:09', views: '23K' },
      { title: 'A MELHOR FORMA DE GANHAR DINHEIRO NO YOUTUBE EM 2024', videoId: 'JK0CW0ykif8', duration: '9:05', views: '11K' },
      { title: 'NICHOS LUCRATIVOS FEITOS COM IA PARA MONETIZAR RÁPIDO EM 2024', videoId: 'QlsHG61Scqw', duration: '23:48', views: '36K' },
      { title: 'APRENDA AS 4 ESTRATÉGIAS DE DANIEL PENIN PARA DOMINAR O ALGORITMO DO YOUTUBE', videoId: '5D1TpEt1k1k', duration: '8:55', views: '16K' },
    ],
  },
  {
    title: 'Canais Dark',
    videos: [
      { title: 'Melhores IAs Para Monetizar Canal Dark em 2025 (Baixe Grátis Guia Completo)', videoId: 'ayLKz4XM7YM', duration: '20:15', views: '3.2K' },
      { title: 'DOMINE O NOVO SEO PARA CRESCER O SEU CANAL DARK MAIS RÁPIDO', videoId: 'hQR53MMNPqU', duration: '20:15', views: '38K' },
      { title: 'ESSE NICHO DARK ESTÁ VIRALIZANDO E MONETIZANDO MUITO RÁPIDO NO YOUTUBE', videoId: 'vzJvWB2fiMk', duration: '20:40', views: '30K' },
      { title: 'CANAL DARK MONETIZA RÁPIDO FEITO COM IA E SIMPLES DE EDITAR', videoId: 'nSe5I4cVWzY', duration: '27:56', views: '235K' },
      { title: 'INÉDITO! CANAL DARK DE MÚSICA FEITO COM IA QUE MONETIZA MUNDIALMENTE', videoId: 'zmASiBqzUYE', duration: '17:24', views: '314K' },
    ],
  },
  {
    title: 'Ferramentas IA',
    videos: [
      { title: 'Essa IA Cria Vozes Profissionais e Músicas Livres de Direitos Autorais', videoId: 'NRW2Wk3SL5A', duration: '21:04', views: '374K' },
      { title: 'Adeus ElevenLabs? Grok Agora Gera Vozes Consistentes e GRÁTIS para Personagens', videoId: 'vFl3gHBFI08', duration: '19:02', views: '16K' },
      { title: 'APENAS 1 PROMPT: IA GRÁTIS CRIA VÍDEOS DE 10 MINUTOS SEM MARCA DÁGUA', videoId: 'KwLSki1-zOs', duration: '18:14', views: '81K' },
      { title: 'SEEDANCE 2 GRÁTIS: Crie Filmes ULTRA REALISTAS com Qualidade Absurda de Cinema', videoId: 'X5ygljkVQWk', duration: '16:32', views: '4.1K' },
    ],
  },
]

function VideoCarousel({ category }: { category: VideoCategory }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{category.title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {category.videos.map((video) => (
          <a
            key={video.videoId}
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[280px] sm:min-w-[320px] group cursor-pointer block"
          >
            <div className="relative aspect-video rounded-xl mb-3 overflow-hidden bg-gray-800">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-xs font-medium">
                {video.duration}
              </div>
            </div>
            <h3 className="font-semibold text-sm leading-tight group-hover:text-purple-400 transition-colors line-clamp-2">
              {video.title}
            </h3>
            <p className="text-gray-500 text-xs mt-1">{video.views} visualizações</p>
            <span className="inline-flex items-center gap-1.5 mt-2 text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
              <ExternalLink size={12} />
              Ver no YouTube
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Videos() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Central de Vídeos"
        description="Vídeos sobre Inteligência Artificial, YouTube, monetização, canais dark e ferramentas IA organizados por categorias."
        path="/videos"
      />
      <div className="max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Central de <span className="gradient-text">Vídeos</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conteúdo organizado por categorias para você aprender no seu ritmo.
            </p>
          </div>
        </Section>

        {/* Highlight CTA Section */}
        <Section>
          <div className="text-center mb-12 glass rounded-2xl p-8 sm:p-10">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Quer aprender mais sobre Inteligência Artificial, YouTube e criação de conteúdo?
            </p>
            <a
              href="https://www.youtube.com/@superandoresultados?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-btn px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
            >
              Inscreva-se no Canal
              <ExternalLink size={18} />
            </a>
          </div>
        </Section>

        {videoCategories.map((category) => (
          <Section key={category.title}>
            <VideoCarousel category={category} />
          </Section>
        ))}
      </div>
    </div>
  )
}
