import { WHATSAPP } from '../data'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-green-500 hover:bg-green-400 active:scale-95 transition-all flex items-center justify-center text-2xl shadow-2xl shadow-green-500/40"
    >
      💬
    </a>
  )
}
