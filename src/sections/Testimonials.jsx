import { MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import TestimonialCarousel, { CarouselArrows } from '../components/TestimonialCarousel'
import { useCarousel } from '../hooks/useCarousel'
import { SHOW_SAMPLE_NOTICE, shareCard, testimonials, testimonialsIntro } from '../data/testimonials'
import { waLink } from '../data/site'

export default function Testimonials() {
  const c = useCarousel(testimonials.length)

  return (
    <section id="testimonios" className="relative overflow-hidden bg-ink py-16 sm:py-24">
      <div className="container-x">
        
        {/* ===== CONTENEDOR PRINCIPAL / CARD COLOR CREMA ===== */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FDFBF7] p-8 text-slate-900 shadow-2xl border border-amber-900/10 sm:p-12 lg:p-16">
          
          {/* Cabecera de la sección */}
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[44rem]">
              <Reveal variant="left">
                <p className="eyebrow text-sky-brand">{testimonialsIntro.eyebrow}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-h2 mt-6 text-navy-800">{testimonialsIntro.title}</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed text-slate-500">{testimonialsIntro.description}</p>
              </Reveal>
            </div>
            <Reveal variant="right" delay={250} className="hidden shrink-0 sm:block">
              <CarouselArrows onPrev={c.prev} onNext={c.next} />
            </Reveal>
          </div>

          {/* Grilla principal del carrusel y tarjeta de experiencia */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.9fr_1fr] lg:items-stretch lg:gap-7">
            <Reveal variant="up" delay={100} className="min-w-0">
              <TestimonialCarousel items={testimonials} c={c} />
            </Reveal>

            {/* Tarjeta "Tu experiencia" */}
            <Reveal variant="right" delay={250} className="lg:pb-12">
              <aside className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-sm sm:rounded-[2rem] sm:p-9">
                <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-sky-brand/15">
                  <span className="absolute inset-0 animate-spinSlow rounded-full border border-dashed border-sky-brand/25" />
                </span>
                <p className="eyebrow text-[0.7rem] text-sky-brand">{shareCard.eyebrow}</p>
                <h3 className="mt-5 max-w-[16rem] font-display text-[1.45rem] font-bold leading-[1.2] tracking-[-0.03em] text-navy-800">{shareCard.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-500">{shareCard.description}</p>

                <a
                  href={waLink(shareCard.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-shine mt-10 inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-navy-800 px-6 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900 lg:mt-auto"
                >
                  <MessageCircle size={18} aria-hidden="true" className="relative z-[2] transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative z-[2]">{shareCard.cta}</span>
                </a>
              </aside>
            </Reveal>
          </div>

          {SHOW_SAMPLE_NOTICE && (
            <p className="mt-5 text-[0.82rem] text-slate-400">{testimonialsIntro.sampleNotice}</p>
          )}

        </div>
        {/* ===== FIN CARD CREMA ===== */}

      </div>
    </section>
  )
}