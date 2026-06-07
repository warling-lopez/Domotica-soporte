import { useState, useEffect } from 'react'
import { WHATSAPP } from '../data'

const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'trabajo', label: 'Trabajo' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-gray-200/60 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-xl shadow-gray-300/30' : 'bg-white/70'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-600/30 select-none">
            <img src="/Domo&Soporte.png" alt="D&S" />
          </div>
          <span className="font-semibold tracking-tight text-sm sm:text-base text-gray-900">
            <span className="text-blue-600 font-bold">Domótica</span> & <span className="font-serif">Soportes</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="capitalize hover:text-gray-900 transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-600/20"
          >
            Contáctanos
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.25 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-1.75' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-1.75' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/98 border-t border-gray-200`}
      >
        <div className="px-5 py-5 flex flex-col gap-1">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-gray-600 hover:text-gray-900 transition-colors py-2.5 text-sm border-b border-gray-200 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-blue-600 hover:bg-blue-500 transition-all px-4 py-3 rounded-xl text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            💬 Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
