import { INSTAGRAM } from '../data'

export default function Gallery() {
  return (
    <section id="trabajo" className="py-20 md:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-400 text-[11px] font-semibold tracking-widest uppercase mb-3 block">
            Proyectos reales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Nuestro <span className="text-blue-400">Trabajo</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Instalaciones reales, resultados reales. Cada proyecto es único y
            lo hacemos con dedicación.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-2xl border border-white/5 bg-linear-to-br from-gray-800/50 to-gray-900/80 overflow-hidden flex flex-col items-center justify-center gap-2 text-gray-600 hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-3xl opacity-30 group-hover:opacity-50 transition-opacity relative">
                📸
              </span>
              <span className="text-xs sm:text-sm relative">Foto {i + 1}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Síguenos en{' '}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            @domotica_y_soporte
          </a>{' '}
          para ver más proyectos
        </p>
      </div>
    </section>
  )
}
