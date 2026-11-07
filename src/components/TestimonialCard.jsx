import { Quote } from 'lucide-react'

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('').replace('.', '').slice(0, 2).toUpperCase()
}

// Tarjeta de una reseña. Los elementos internos (.t-item) entran escalonados cuando la tarjeta está activa.
export default function TestimonialCard({ item, active }) {
  return (
    <article
      data-active={active}
      className="t-slide relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 sm:rounded-[2rem] sm:p-10 lg:p-12"
      style={{ backgroundImage: 'radial-gradient(520px 360px at 85% 0%, rgba(37,211,208,0.16), transparent 70%), linear-gradient(135deg, #0f2a52 0%, #11335c 60%, #14466c 100%)' }}
    >
      <div>
        <span className="t-item inline-flex rounded-full border border-teal-brand/40 px-4 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-teal-brand" style={{ '--i': 0 }}>
          {item.treatment}
        </span>
        <Quote size={44} strokeWidth={1.6} aria-hidden="true" className="t-item mt-8 fill-teal-brand/25 text-teal-brand" style={{ '--i': 1 }} />
        <h3 className="t-item mt-4 font-display text-[1.65rem] font-bold leading-[1.15] tracking-[-0.035em] text-white sm:text-[2.2rem]" style={{ '--i': 2 }}>
          {item.headline}
        </h3>
        <p className="t-item mt-5 max-w-[34rem] text-[1.02rem] leading-relaxed text-slate-300 sm:text-[1.08rem]" style={{ '--i': 3 }}>
          {item.text}
        </p>
      </div>

      <footer className="t-item mt-9 flex items-center gap-4 border-t border-white/10 pt-6" style={{ '--i': 4 }}>
        <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 font-display text-sm font-bold text-teal-brand">
          {initials(item.name)}
        </span>
        <p className="text-[0.95rem] text-slate-300">
          <span className="font-semibold text-white">{item.name}</span> · {item.place}
        </p>
      </footer>
    </article>
  )
}
