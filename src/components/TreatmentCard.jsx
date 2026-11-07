import { ArrowUpRight } from 'lucide-react'
import Icon from './Icon'
import { waLink } from '../data/site'

// Tarjeta de tratamiento. Al pasar el mouse: sube, la foto hace zoom, el ícono se llena y la línea se expande.
export default function TreatmentCard({ item, index, ctaLabel }) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-30px_rgba(37,211,208,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-800">
        <img
          src={item.image.src}
          alt={item.image.alt}
          width="800"
          height="600"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink/75 font-display text-[0.8rem] font-bold tracking-wider text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-brand group-hover:text-ink">
          {number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-sky-brand transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-sky-brand group-hover:text-white">
            <Icon name={item.icon} size={19} />
          </span>
          <h3 className="font-display text-[1.3rem] font-bold tracking-[-0.03em] text-navy-800">{item.title}</h3>
        </div>
        <p className="mt-4 text-[0.95rem] font-medium leading-snug text-sky-brand">{item.subtitle}</p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-500">{item.description}</p>

        <div className="mt-auto pt-7">
          <span aria-hidden="true" className="block h-px w-24 bg-slate-200 transition-all duration-700 group-hover:w-full group-hover:bg-sky-brand" />
          {/* TODO: conectar a tu flujo real. Por ahora abre WhatsApp con un mensaje sobre este tratamiento. */}
          <a
            href={waLink(`Hola, quisiera consultar sobre ${item.title.toLowerCase()} en Odontodiza.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ctaLabel} sobre ${item.title} por WhatsApp`}
            className="mt-5 inline-flex items-center gap-1.5 font-semibold text-navy-800 transition-colors hover:text-sky-brand"
          >
            {ctaLabel}
            <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  )
}
