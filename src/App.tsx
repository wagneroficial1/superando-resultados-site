import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ferramentas from './pages/Ferramentas'
import Recursos from './pages/Recursos'
import Videos from './pages/Videos'
import Laboratorio from './pages/Laboratorio'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Treinamento from './pages/Treinamento'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/treinamento" element={<Treinamento />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
