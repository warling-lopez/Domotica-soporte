import { steps } from '../data'

export default function Process() {
  return (
    <section
      id="proceso"
      className="py-20 md:py-28 px-5 sm:px-6 border-y border-white/5 bg-white/[1.5%]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-400 text-[11px] font-semibold tracking-widest uppercase mb-3 block">
            Simple y transparente
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Cómo <span className="text-blue-400">Trabajamos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Un proceso simple y transparente, de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group rounded-2xl border border-white/5 bg-gray-950/50 p-6 sm:p-7 hover:border-blue-500/20 hover:bg-gray-950/80 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black text-sm mb-4 group-hover:border-blue-400/40 group-hover:bg-blue-600/15 transition-all">
                {step.n}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
