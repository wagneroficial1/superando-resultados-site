import { useState } from 'react'
import { Send, Mail, Video, Camera, CheckCircle } from 'lucide-react'
import Section from '../components/Section'
import SEO from '../components/SEO'

// Telegram icon SVG component
function TelegramIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const data = new FormData()
    data.append('nome', formData.name)
    data.append('email', formData.email)
    data.append('assunto', formData.subject)
    data.append('mensagem', formData.message)
  
    data.append(
      '_subject',
      'Nova mensagem enviada pelo site Superando Resultados'
    )
  
    data.append('_captcha', 'false')
    data.append('_template', 'table')
  
    await fetch('https://formsubmit.co/superandoresultados@gmail.com', {
      method: 'POST',
      body: data,
    })
  
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Contato"
        description="Entre em contato com o Superando Resultados. Parcerias, colaborações e oportunidades de negócio."
        path="/contato"
      />
      <div className="max-w-6xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Parcerias, colaborações e oportunidades de negócio. Vamos conversar!
            </p>
          </div>
        </Section>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <Section className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-6">Envie sua mensagem</h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-400 text-sm">Retornaremos em até 48 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Nome</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Assunto</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                      placeholder="Assunto da mensagem"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Mensagem</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                      placeholder="Descreva sua proposta ou mensagem..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-btn py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </Section>

          {/* Contact Info */}
          <Section className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 glow-card">
                <h3 className="font-bold mb-4">Email</h3>
                <a href="mailto:emailcanaldefato@gmail.com" className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors">
                  <Mail size={20} />
                  <span className="text-sm">emailcanaldefato@gmail.com</span>
                </a>
              </div>

              <div className="glass rounded-2xl p-6 glow-card">
                <h3 className="font-bold mb-4">Redes Sociais</h3>
                <div className="space-y-3">
                  <a href="https://www.youtube.com/@superandoresultados" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Video size={20} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">YouTube</p>
                      <p className="text-xs text-gray-500">@superandoresultados</p>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/superandoresultados" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                      <Camera size={20} className="text-pink-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Instagram</p>
                      <p className="text-xs text-gray-500">@superandoresultados</p>
                    </div>
                  </a>
                  <a href="https://t.me/superandoresultados" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <TelegramIcon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Telegram</p>
                      <p className="text-xs text-gray-500">@superandoresultados</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 glow-card">
                <h3 className="font-bold mb-2">Parcerias</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Estamos abertos a parcerias com marcas e ferramentas de IA. 
                  Entre em contato para discutir oportunidades de colaboração.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
