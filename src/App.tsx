import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased">
      <Nav />
      <FloatingWhatsApp />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  )
}
