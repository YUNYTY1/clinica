import { useEffect, useState } from 'react'
import { contact, waLink } from '../data/site'
import { WhatsAppIcon } from './BrandIcons'

// Botón flotante de WhatsApp. En celular se reduce a solo el ícono.
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp para reservar"
      className={`group fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full bg-gradient-to-b from-[#2ee07a] to-[#1fbd5f] p-2 shadow-[0_18px_40px_-12px_rgba(31,189,95,0.75)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_22px_46px_-10px_rgba(31,189,95,0.9)] sm:bottom-6 sm:right-6 sm:pr-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'
      }`}
    >
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/25 text-ink sm:h-[3.25rem] sm:w-[3.25rem]">
        <span aria-hidden="true" className="absolute inset-0 animate-pulseRing rounded-full bg-white/60" />
        <WhatsAppIcon size={26} className="relative animate-waWiggle" />
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-[1.05rem] font-bold text-[#0b2a18]">{contact.whatsappFloatingLabel}</span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#0b2a18]/70">{contact.whatsappFloatingSub}</span>
      </span>
    </a>
  )
}
