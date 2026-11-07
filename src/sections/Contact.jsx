import { Clock, MapPin, MessageCircle, Navigation } from 'lucide-react'
import Button from '../components/Button'
import { FacebookIcon, InstagramIcon } from '../components/BrandIcons'
import MapEmbed from '../components/MapEmbed'
import Reveal from '../components/Reveal'
import { contactSection as t } from '../data/contact'
import { contact, mapsDirectionsUrl, mapsOpenUrl, schedule, waLink } from '../data/site'

const social = 'flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-navy-800 transition-all duration-300 hover:-translate-y-1 hover:border-sky-brand hover:bg-sky-brand hover:text-white'

export default function Contact() {
  return (
    <section id="contacto" className="bg-grid-light relative overflow-hidden bg-mist py-16 sm:py-24">
      <div className="container-x">
        <Reveal variant="left">
          <p className="eyebrow text-sky-brand">{t.eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-h2 mt-6 text-navy-800">{t.title}</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-[36rem] text-[1.08rem] leading-relaxed text-slate-500">{t.description}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-8">
          <div className="space-y-4">
            <Reveal variant="left">
              <div className="flex items-start gap-5 rounded-3xl border border-slate-200/70 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_50px_-30px_rgba(15,42,82,0.4)] sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-sky-brand"><MapPin size={22} aria-hidden="true" /></span>
                <div>
                  <h3 className="font-display text-[1.1rem] font-bold text-navy-800">{t.addressLabel}</h3>
                  <address className="mt-2 space-y-0.5 text-[0.98rem] not-italic leading-relaxed text-slate-500">
                    {contact.addressLines.map((l) => <p key={l}>{l}</p>)}
                  </address>
                </div>
              </div>
            </Reveal>
            <Reveal variant="left" delay={100}>
              <div className="flex items-start gap-5 rounded-3xl bg-navy-800 p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(15,42,82,0.8)] sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-brand"><Clock size={22} aria-hidden="true" /></span>
                <div>
                  <h3 className="font-display text-[1.1rem] font-bold">{t.scheduleLabel}</h3>
                  <p className="mt-2 text-[0.98rem] text-slate-200">{schedule.full}</p>
                  <p className="text-[0.9rem] text-slate-400">{schedule.closed}</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="left" delay={200}>
              <div className="flex items-start gap-5 rounded-3xl border border-slate-200/70 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_50px_-30px_rgba(15,42,82,0.4)] sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-sky-brand"><MessageCircle size={22} aria-hidden="true" /></span>
                <div>
                  <h3 className="font-display text-[1.1rem] font-bold text-navy-800">{t.whatsappLabel}</h3>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[1.05rem] font-semibold text-sky-brand hover:underline">{contact.phoneDisplay}</a>
                  <p className="text-[0.9rem] text-slate-400">{t.whatsappSub}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250} className="flex flex-col gap-3 sm:flex-row">
              <Button href={mapsDirectionsUrl} variant="blue" size="lg" icon={Navigation} className="sm:flex-1">{t.directionsCta}</Button>
              <Button href={waLink()} variant="outlineLight" size="lg" icon={MessageCircle} className="sm:flex-1">{t.whatsappCta}</Button>
            </Reveal>

            <Reveal delay={300} className="flex items-center gap-3 pt-1">
              <a href={contact.facebookUrl} aria-label="Facebook de Odontodiza" className={social}><FacebookIcon size={19} /></a>
              <a href={contact.instagramUrl} aria-label="Instagram de Odontodiza" className={social}><InstagramIcon size={19} /></a>
              <a href={mapsOpenUrl} target="_blank" rel="noopener noreferrer" className="ml-1 text-[0.95rem] font-medium text-slate-400 transition-colors hover:text-sky-brand">{t.mapsLink}</a>
            </Reveal>
          </div>

          <Reveal variant="right" delay={150} className="min-h-0">
            <MapEmbed />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
