import { useState, useEffect, useRef } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import { hero } from '../data/hero'

// Máscaras para que la imagen se funda con el fondo oscuro (a la izquierda en escritorio, arriba en celular).
const fadeLeft = 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 14%, #000 34%)'
const fadeTop = 'linear-gradient(to bottom, transparent 0%, #000 38%)'

export default function Hero() {
  const rootRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Efecto para cambiar de imagen automáticamente cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hero.images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  // Parallax suave con el mouse: solo actualiza variables CSS (no re-renderiza).
  const onMouseMove = (e) => {
    const el = rootRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  const onMouseLeave = () => {
    rootRef.current?.style.setProperty('--mx', 0)
    rootRef.current?.style.setProperty('--my', 0)
  }

  return (
    <section
      id="inicio"
      ref={rootRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative isolate overflow-hidden bg-ink pt-[104px] sm:pt-[116px] lg:flex lg:min-h-[100svh] lg:items-center lg:pb-20"
      style={{
        backgroundImage:
          'radial-gradient(900px 520px at 12% 30%, rgba(14,86,128,0.55), transparent 70%), radial-gradient(700px 480px at 95% 100%, rgba(37,211,208,0.2), transparent 70%), linear-gradient(135deg, #061426 0%, #082440 45%, #0a3a5b 100%)',
      }}
    >
      <div aria-hidden="true" className="bg-grid-dark grid-drift absolute inset-0 -z-10 opacity-80" />

      {/* ---------- Carrusel de imágenes a la derecha (solo escritorio) ---------- */}
      <div
        className="fade-up absolute inset-y-0 right-0 hidden w-[44%] lg:block"
        style={{ '--d': '300ms', WebkitMaskImage: fadeLeft, maskImage: fadeLeft }}
      >
        <div className="parallax h-full w-full scale-110 relative overflow-hidden" style={{ '--px': -10 }}>
          {hero.images.map((imgObj, index) => (
            <img
              key={index}
              src={imgObj.src}
              alt={imgObj.alt}
              width="900"
              height="1100"
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/60 to-transparent z-20 pointer-events-none" />
      </div>

      <span aria-hidden="true" className="parallax pointer-events-none absolute bottom-20 right-[40%] z-0 hidden h-32 w-32 rounded-full border border-teal-brand/30 lg:block" style={{ '--px': -14 }}>
        <span className="absolute inset-0 animate-pulseRing rounded-full border border-teal-brand/40" />
      </span>

      {/* ---------- Texto ---------- */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="min-w-0 lg:max-w-[56%]">
          <div className="fade-up flex items-center gap-4" style={{ '--d': '100ms' }}>
            <span aria-hidden="true" className="line-grow h-px w-14 bg-teal-brand" style={{ '--d': '150ms' }} />
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-slate-300">{hero.eyebrow}</p>
          </div>

          <h1 className="mt-7 font-display text-[clamp(2.2rem,8vw,4.5rem)] font-extrabold leading-[0.97] tracking-[-0.045em] text-white lg:text-[min(5.8vw,11vh)] xl:text-[min(6.1vw,5.6rem,11vh)]">
            {hero.titleLines.map((line, i) => (
              <span key={line} className="mask-line">
                <span style={{ '--d': `${250 + i * 130}ms` }}>{line}</span>
              </span>
            ))}
            <span className="mask-line">
              <span style={{ '--d': `${250 + hero.titleLines.length * 130}ms` }}>
                <span className="whitespace-nowrap">
                  <span className="relative inline-block">
                    <span className="text-shine">{hero.titleAccent}</span>
                    <svg aria-hidden="true" viewBox="0 0 600 14" preserveAspectRatio="none" className="absolute -bottom-[0.02em] left-0 h-[0.1em] w-full overflow-visible">
                      <path d="M2 9 C 140 3, 420 2, 598 8" pathLength="1" fill="none" stroke="#1f9fa0" strokeWidth="5" strokeLinecap="round" className="draw-stroke" style={{ '--d': '1100ms' }} />
                    </svg>
                  </span>
                  <span className="text-white">.</span>
                </span>
              </span>
            </span>
          </h1>

          <p className="fade-up mt-10 max-w-[30rem] text-[1.1rem] leading-relaxed text-slate-300 sm:mt-14" style={{ '--d': '900ms' }}>
            {hero.description}
          </p>

          <div className="fade-up mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center" style={{ '--d': '1050ms' }}>
            <Button href="#reservas" size="lg" arrow>{hero.primaryCta}</Button>
            <Button href="#tratamientos" variant="outline" size="lg" arrow caps className="!gap-2 !px-3 !text-[0.64rem] !tracking-[0.06em] sm:!gap-2.5 sm:!px-7 sm:!text-[0.8rem] sm:!tracking-[0.14em]">
              {hero.secondaryCta}
            </Button>
          </div>

          <ul className="fade-up mt-12 hidden flex-wrap items-center gap-x-10 gap-y-3 border-t border-white/10 pt-6 text-[0.95rem] text-slate-400 md:flex" style={{ '--d': '1250ms' }}>
            {hero.infoItems.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <Icon name={item.icon} size={18} className="text-teal-brand" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Carrusel de imágenes en celular/tablet (debajo del texto) ---------- */}
      <div
        className="fade-up relative mt-12 aspect-[4/3] w-full sm:aspect-[16/10] lg:hidden overflow-hidden"
        style={{ '--d': '600ms', WebkitMaskImage: fadeTop, maskImage: fadeTop }}
      >
        {hero.images.map((imgObj, index) => (
          <img
            key={index}
            src={imgObj.src}
            alt={imgObj.alt}
            width="900"
            height="1100"
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>
    </section>
  )
}