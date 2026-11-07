import { ArrowRight } from 'lucide-react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import VideoFrame from '../components/VideoFrame'
import { about } from '../data/about'

export default function About() {
  return (
    <section id="nosotros" className="bg-grid-light relative overflow-hidden bg-mist py-16 sm:py-24">
      <div className="container-x">
        <div className="relative rounded-[2rem] border border-white bg-white px-6 py-10 shadow-[0_40px_90px_-50px_rgba(15,42,82,0.35)] sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* ---------- Texto ---------- */}
            <div>
              <Reveal variant="left">
                <p className="eyebrow text-sky-brand">{about.eyebrow}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-h2 mt-6 text-navy-800">{about.title}</h2>
              </Reveal>
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={200 + i * 100}>
                  <p className={`max-w-[34rem] text-[1.08rem] leading-[1.75] text-slate-500 ${i === 0 ? 'mt-8' : 'mt-5'}`}>{p}</p>
                </Reveal>
              ))}

              <Reveal variant="scale" delay={350} className="my-9 h-px origin-left bg-slate-200/80" />

              <ul className="space-y-6">
                {about.features.map((f, i) => (
                  <Reveal as="li" key={f.title} variant="left" delay={i * 120} className="group flex items-start gap-5">
                    <span className="flex h-[3.4rem] w-[3.4rem] shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-mist text-sky-brand transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-sky-brand group-hover:text-white">
                      <Icon name={f.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.1rem] font-bold tracking-tight text-navy-800">{f.title}</h3>
                      <p className="mt-1 max-w-[26rem] text-[0.98rem] leading-relaxed text-slate-500">{f.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={200} className="mt-10">
                <a href={about.link.href} className="group inline-flex items-center gap-2 text-[1.02rem] font-semibold text-sky-brand">
                  <span className="bg-gradient-to-r from-sky-brand to-sky-brand bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                    {about.link.label}
                  </span>
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Reveal>
            </div>

            {/* ---------- Video en marco azul + cuadro azul debajo ---------- */}
            <div className="relative mx-auto w-full max-w-[40rem] lg:max-w-none">
              <Reveal variant="scale" delay={150}>
                <VideoFrame src={about.video.src} poster={about.video.poster} title={about.video.title} />
              </Reveal>

              <Reveal variant="pop" delay={600} className="mt-10 w-full">
                <div className="flex items-center gap-4 rounded-2xl bg-navy-800 px-6 py-5 shadow-[0_26px_60px_-26px_rgba(15,42,82,0.9)]">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span aria-hidden="true" className="absolute inset-0 animate-pulseRing rounded-full bg-teal-brand" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-teal-brand" />
                  </span>
                  <p className="font-display text-[1.05rem] font-semibold leading-snug tracking-tight text-white sm:text-[1.2rem]">{about.quote}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}