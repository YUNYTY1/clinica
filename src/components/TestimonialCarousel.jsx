import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'
import { AUTOPLAY_MS } from '../hooks/useCarousel'

const WINDOW = 7 // cantidad de indicadores visibles a la vez (con 20 reseñas no caben todos en celular)

// Parte visual del carrusel. El estado viene de useCarousel (prop "c").
export default function TestimonialCarousel({ items, c }) {
  const { index, count, playing, reduced, dragging, offset } = c

  // Ventana de indicadores centrada en la reseña actual
  const from = Math.max(0, Math.min(index - Math.floor(WINDOW / 2), count - WINDOW))
  const dots = Array.from({ length: Math.min(WINDOW, count) }, (_, k) => from + k)

  return (
    <div
      ref={c.wrapRef}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Reseñas de pacientes"
      className="flex min-w-0 flex-col"
      {...c.wrapperProps}
    >
      <div
        className="relative cursor-grab select-none overflow-hidden rounded-[1.75rem] active:cursor-grabbing sm:rounded-[2rem]"
        style={{ touchAction: 'pan-y' }}
        {...c.dragProps}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(${-index * 100}% + ${offset}px))`,
            transition: dragging ? 'none' : 'transform 0.9s cubic-bezier(0.65, 0, 0.2, 1)',
          }}
          aria-live={playing ? 'off' : 'polite'}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="min-h-[27rem] w-full shrink-0 sm:min-h-[25rem]"
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${count}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              <TestimonialCard item={item} active={i === index} />
            </div>
          ))}
        </div>

        {/* Barra de progreso del autoplay */}
        {!reduced && (
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
            <span
              key={index}
              className="block h-full origin-left bg-teal-brand"
              style={{ animation: `progressFill ${AUTOPLAY_MS}ms linear forwards`, animationPlayState: playing ? 'running' : 'paused' }}
            />
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center gap-5">
        <div className="flex items-center gap-2" role="tablist" aria-label="Elegir reseña">
          {dots.map((d) => (
            <button
              key={d}
              type="button"
              role="tab"
              aria-selected={d === index}
              aria-label={`Ir a la reseña ${d + 1}`}
              onClick={() => c.go(d)}
              className={`h-1.5 rounded-full transition-all duration-500 ${d === index ? 'w-12 bg-sky-brand' : 'w-5 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
        <p className="font-display text-sm font-semibold tabular-nums text-slate-400" aria-hidden="true">
          <span className="text-navy-800">{String(index + 1).padStart(2, '0')}</span> / {String(count).padStart(2, '0')}
        </p>
      </div>
    </div>
  )
}

export function CarouselArrows({ onPrev, onNext }) {
  const cls =
    'flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-brand hover:bg-sky-brand hover:text-white active:scale-95'
  return (
    <div className="flex gap-3">
      <button type="button" onClick={onPrev} aria-label="Reseña anterior" className={cls}><ChevronLeft size={20} aria-hidden="true" /></button>
      <button type="button" onClick={onNext} aria-label="Reseña siguiente" className={cls}><ChevronRight size={20} aria-hidden="true" /></button>
    </div>
  )
}
