import { WHATSAPP, PHONE } from '../data'

export default function CTA() {
  return (
    <section id="contacto" className="py-20 md:py-28 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-linear-to-br from-blue-600/15 via-gray-900/80 to-gray-950 px-6 sm:px-12 py-12 sm:py-16 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 max-w-full rounded-full bg-blue-500/20 blur-[100px]"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-9 max-w-lg mx-auto">
              Escríbenos o llámanos y te damos una cotización sin costo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 active:scale-95 transition-all px-7 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-xl shadow-green-600/25"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href={PHONE}
                className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all px-7 py-4 rounded-xl font-semibold text-base sm:text-lg text-gray-200 flex items-center justify-center gap-2"
              >
                <span>📞</span> (809) 967-6585
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
