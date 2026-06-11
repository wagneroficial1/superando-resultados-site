import { Link } from 'react-router-dom'
import { Video, Camera, Mail, ArrowUp } from 'lucide-react'

// Telegram icon SVG component
function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/10 bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                SR
              </div>
              <span className="font-bold text-lg">Superando Resultados</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Domine o algoritmo do YouTube com Inteligência Artificial. Ferramentas, estratégias e recursos para criadores.
            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@superandoresultados" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                <Video size={18} />
              </a>
              <a href="https://www.instagram.com/superandoresultados" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                <Camera size={18} />
              </a>
              <a href="https://t.me/superandoresultados" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                <TelegramIcon size={18} />
              </a>
              <a href="mailto:emailcanaldefato@gmail.com" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Navegação</h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/ferramentas', label: 'Ferramentas' },
                { path: '/recursos', label: 'Recursos' },
                { path: '/videos', label: 'Central de Vídeos' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Plataforma</h4>
            <ul className="space-y-2">
              {[
                { path: '/laboratorio', label: 'Laboratório IA' },
                { path: '/sobre', label: 'Sobre Nós' },
                { path: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba dicas semanais sobre IA e YouTube.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-lg glass text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
              />
              <button type="submit" className="gradient-btn px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                Assinar
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Superando Resultados. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
