import { WHATSAPP, stats } from '../data'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 md:pt-44 pb-20 md:pb-28 px-5 sm:px-6"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 max-w-full rounded-full bg-blue-600/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.1),transparent_65%)]"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-300 text-[11px] sm:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7 border border-blue-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Control, Instalación y Conectividad
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-balance">
          Control total{' '}
          <span className="bg-linear-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            en tus manos
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Instalamos cámaras, automatizamos hogares y mantenemos tus equipos.
          Todo lo que necesitas para vivir y trabajar más conectado, seguro y
          tranquilo.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all px-7 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl shadow-blue-600/25"
          >
            Solicitar cotización gratis
          </a>
          <a
            href="#servicios"
            className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all px-7 py-4 rounded-xl font-semibold text-base sm:text-lg text-gray-200"
          >
            Ver servicios →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto rounded-2xl border border-white/8 bg-white/2 divide-x divide-white/8 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="px-3 sm:px-6 py-6">
              <div className="text-2xl sm:text-4xl font-black bg-linear-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-gray-500 text-[11px] sm:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
