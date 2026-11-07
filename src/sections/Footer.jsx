import { ArrowUp, Clock, MapPin, MessageCircle } from 'lucide-react'
import Logo from '../components/Logo'
import { FacebookIcon, InstagramIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import { footer } from '../data/footer'
import { treatments } from '../data/treatments'
import { brand, contact, navLinks, schedule, waLink } from '../data/site'

const social = 'flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-teal-brand hover:bg-teal-brand hover:text-ink'
const link = 'inline-block text-[0.95rem] text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-teal-brand'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-slate-300" style={{ backgroundImage: 'radial-gradient(700px 420px at 90% 0%, rgba(37,211,208,0.12), transparent 70%)' }}>
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.85fr_1.2fr] lg:gap-10">
          <Reveal>
            <Logo size="lg" />
            <p className="mt-6 max-w-[19rem] text-[0.95rem] leading-relaxed text-slate-400">{brand.shortDescription} 🦷</p>
            <div className="mt-6 flex gap-3">
              <a href={contact.facebookUrl} aria-label="Facebook de Odontodiza" className={social}><FacebookIcon size={18} /></a>
              <a href={contact.instagramUrl} aria-label="Instagram de Odontodiza" className={social}><InstagramIcon size={18} /></a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">{footer.columns.nav}</h3>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((l) => (
                <li key={l.id}><a href={l.href} className={link}>{l.label}</a></li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">{footer.columns.treatments}</h3>
            <ul className="mt-6 space-y-3.5">
              {treatments.map((t) => (
                <li key={t.id}><a href="#tratamientos" className={link}>{t.title}</a></li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">{footer.columns.contact}</h3>
            <ul className="mt-6 space-y-5 text-[0.95rem] leading-relaxed">
              <li className="flex gap-3"><MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-teal-brand" /><span>{contact.addressOneLine}</span></li>
              <li className="flex gap-3">
                <Clock size={18} aria-hidden="true" className="mt-1 shrink-0 text-teal-brand" />
                <span>{schedule.full}<br /><span className="text-slate-500">{schedule.closed}</span></span>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={18} aria-hidden="true" className="mt-1 shrink-0 text-teal-brand" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition-colors hover:text-teal-brand">{contact.phoneDisplay}</a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-[0.88rem] text-slate-500 sm:flex-row sm:items-center">
          <p>{footer.rights}</p>
          <div className="flex items-center gap-5">
            <a href="#reservas" className="font-medium text-slate-300 transition-colors hover:text-teal-brand">{footer.bookLink}</a>
            <a href="#inicio" aria-label="Volver arriba" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-brand hover:text-ink">
              <ArrowUp size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
