import { services } from '../data'

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-400 text-[11px] font-semibold tracking-widest uppercase mb-3 block">
            Lo que ofrecemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Nuestros <span className="text-blue-400">Servicios</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Soluciones integrales para que tu hogar y negocio funcionen con
            tecnología de punta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/5 bg-linear-to-b from-white/3 to-transparent p-7 sm:p-8 hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.08),transparent_60%)]" />
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-5 group-hover:border-blue-400/50 group-hover:bg-blue-600/15 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2.5 group-hover:text-blue-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-5">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-600/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
