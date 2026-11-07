import Button from '../components/Button'
import Reveal from '../components/Reveal'
import TreatmentCard from '../components/TreatmentCard'
import { treatments, treatmentsIntro } from '../data/treatments'
import { waLink } from '../data/site'

export default function Treatments() {
  return (
    <section
      id="tratamientos"
      className="relative isolate overflow-hidden py-20 sm:py-28"
      style={{ backgroundImage: 'radial-gradient(900px 500px at 85% 0%, rgba(37,211,208,0.12), transparent 70%), linear-gradient(180deg, #0f2a52 0%, #11335c 55%, #0f2d54 100%)' }}
    >
      <div aria-hidden="true" className="bg-grid-dark grid-drift absolute inset-0 -z-10" />

      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[48rem]">
            <Reveal variant="left">
              <p className="eyebrow text-teal-brand">{treatmentsIntro.eyebrow}</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-h2 mt-6 text-white">{treatmentsIntro.title}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-[38rem] text-[1.1rem] leading-relaxed text-slate-300">{treatmentsIntro.description}</p>
            </Reveal>
          </div>
          <Reveal variant="right" delay={250}>
            <Button href="#reservas" variant="outline" size="lg" caps>{treatmentsIntro.cta}</Button>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {treatments.map((t, i) => (
            <Reveal as="li" key={t.id} delay={(i % 3) * 110} className="h-full">
              <TreatmentCard item={t} index={i} ctaLabel={treatmentsIntro.cardCta} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 text-center">
          <p className="text-[0.98rem] text-slate-300">
            {treatmentsIntro.footerNote.before}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-brand underline-offset-4 hover:underline">
              {treatmentsIntro.footerNote.link}
            </a>
            {treatmentsIntro.footerNote.after}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
