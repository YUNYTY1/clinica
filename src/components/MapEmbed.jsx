import { useState } from 'react'
import { contactSection } from '../data/contact'
import { mapsEmbedUrl } from '../data/site'

// Mapa de Google. Hasta que se hace clic el scroll de la página no queda "atrapado" por el mapa.
export default function MapEmbed() {
  const [active, setActive] = useState(false)
  return (
    <div className="relative h-[24rem] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-100 shadow-[0_30px_70px_-40px_rgba(15,42,82,0.5)] sm:h-[30rem] sm:rounded-[2rem] lg:h-full lg:min-h-[34rem]" onMouseLeave={() => setActive(false)}>
      <iframe
        title="Mapa de ubicación de Clínica Dental Odontodiza en Ate, Lima"
        src={mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={`h-full w-full border-0 ${active ? '' : 'pointer-events-none'}`}
      />
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={contactSection.mapHint}
          className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/40 via-transparent to-transparent pb-6 transition-opacity hover:from-ink/55"
        >
          <span className="rounded-full bg-ink/85 px-5 py-2.5 text-[0.88rem] font-medium text-white backdrop-blur-md">{contactSection.mapHint}</span>
        </button>
      )}
    </div>
  )
}
