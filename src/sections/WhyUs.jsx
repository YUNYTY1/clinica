import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { why } from '../data/why'
import { waLink } from '../data/site'

const INTERVAL = 4800

export default function WhyUs() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ref, inView] = useInView({ once: false, threshold: 0.35 })
  const reduced = usePrefersReducedMotion()
  const auto = inView && !paused && !reduced

  // El ítem destacado rota solo cuando la sección está visible; se detiene al pasar el mouse o enfocar.
  useEffect(() => {
    if (!auto) return undefined
    const t = setTimeout(() => setActive((a) => (a + 1) % why.items.length), INTERVAL)
    return () => clearTimeout(t)
  }, [auto, active])

  return (
    <section id="por-que-elegirnos" className="bg-white py-14 sm:py-20">
      <div className="container-x">
        <div className="rounded-[2rem] border border-slate-200/70 bg-mist px-5 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div ref={ref} className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div className="lg:py-3">
              <Reveal variant="left">
                <p className="eyebrow text-sky-brand">{why.eyebrow}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-h2 mt-6 max-w-[30rem] text-navy-800">{why.title}</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 max-w-[30rem] text-[1.08rem] leading-[1.75] text-slate-500">{why.description}</p>
              </Reveal>
              <Reveal delay={300} className="mt-9">
                <Button href={waLink()} variant="dark" size="lg" icon={MessageCircle}>{why.cta}</Button>
              </Reveal>
            </div>

            <ul
              className="space-y-3.5"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              {why.items.map((item, i) => {
                const isActive = i === active
                return (
                  <Reveal as="li" key={item.title} variant="right" delay={i * 100}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`relative flex w-full items-start gap-5 overflow-hidden rounded-[1.4rem] border p-5 text-left transition-all duration-500 sm:p-6 ${
                        isActive
                          ? 'border-slate-200/80 bg-white shadow-[0_30px_60px_-34px_rgba(15,42,82,0.45)] sm:-translate-x-2'
                          : 'border-transparent bg-white/55 hover:bg-white/90'
                      }`}
                    >
                      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${isActive ? 'rotate-0 bg-navy-800 text-teal-brand' : 'bg-mist text-sky-brand'}`}>
                        <Icon name={item.icon} size={22} />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-baseline gap-3">
                          <span className="font-display text-[0.78rem] font-semibold tracking-[0.12em] text-sky-brand/60">{String(i + 1).padStart(2, '0')}</span>
                          <span className="font-display text-[1.2rem] font-bold tracking-[-0.03em] text-navy-800">{item.title}</span>
                        </span>
                        <span className="mt-1.5 block text-[0.97rem] leading-relaxed text-slate-500">{item.text}</span>
                      </span>
                      {isActive && !reduced && (
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-slate-100">
                          <span
                            key={`${active}-${auto}`}
                            className="block h-full origin-left bg-teal-brand"
                            style={{ animation: `progressFill ${INTERVAL}ms linear forwards`, animationPlayState: auto ? 'running' : 'paused' }}
                          />
                        </span>
                      )}
                    </button>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
