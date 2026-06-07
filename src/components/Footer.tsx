import { WHATSAPP, INSTAGRAM, PHONE } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#inicio" className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-600/30 select-none">
                D&S
              </div>
              <span className="font-semibold tracking-tight">
                <span className="text-blue-400">Domótica</span> & Soportes
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Expertos en Control, Instalación y Conectividad · República
              Dominicana
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 text-sm">
            <div>
              <p className="text-white font-semibold mb-4">Servicios</p>
              <div className="flex flex-col gap-2.5 text-gray-400">
                <a href="#servicios" className="hover:text-white transition-colors">
                  Cámaras CCTV
                </a>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Domótica
                </a>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Mantenimiento TI
                </a>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Contáctanos</p>
              <div className="flex flex-col gap-2.5 text-gray-400">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a href={PHONE} className="hover:text-white transition-colors">
                  (809) 967-6585
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Domótica & Soportes. Todos los derechos reservados.</p>
          <a
            href={'http://grolow.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Esta pagina creada por <span className="font-semibold text-[#008f8b]">Grolow.com</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
