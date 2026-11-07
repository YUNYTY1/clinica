import { CalendarDays, MessageCircle, ShieldCheck } from 'lucide-react'
import BookingForm from '../components/BookingForm'
import Reveal from '../components/Reveal'
import { booking } from '../data/booking'
import { contact, schedule } from '../data/site'

export default function Booking() {
  return (
    <section
      id="reservas"
      className="relative isolate overflow-hidden py-20 sm:py-28"
      style={{ backgroundImage: 'radial-gradient(800px 500px at 0% 0%, rgba(14,86,128,0.5), transparent 70%), radial-gradient(700px 500px at 100% 100%, rgba(37,211,208,0.18), transparent 70%), linear-gradient(135deg, #071a33 0%, #0a2a4d 60%, #0b3a5b 100%)' }}
    >
      <div aria-hidden="true" className="bg-grid-dark grid-drift absolute inset-0 -z-10" />

      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <Reveal variant="left">
            <p className="eyebrow text-teal-brand">{booking.eyebrow}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-h2 mt-6 text-white">{booking.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[30rem] text-[1.08rem] leading-[1.75] text-slate-300">{booking.description}</p>
          </Reveal>

          <div className="mt-10 max-w-[34rem] space-y-4">
            <Reveal variant="left" delay={250}>
              <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="glass group flex items-center gap-5 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/15">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-brand text-ink transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <MessageCircle size={24} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-300">{booking.whatsappLabel}</span>
                  <span className="mt-1 block font-display text-[1.6rem] font-extrabold tracking-tight text-white">{contact.phoneDisplay}</span>
                </span>
              </a>
            </Reveal>
            <Reveal variant="left" delay={350}>
              <div className="glass flex items-center gap-5 rounded-2xl p-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-teal-brand">
                  <CalendarDays size={24} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-300">{booking.scheduleLabel}</span>
                  <span className="mt-1 block font-display text-[1.05rem] font-bold text-white">{schedule.full}</span>
                  <span className="block text-[0.85rem] text-slate-400">{schedule.closed}</span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={450}>
            <p className="mt-8 flex max-w-[30rem] items-start gap-3 text-[0.92rem] leading-relaxed text-slate-300">
              <ShieldCheck size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-brand" />
              {booking.privacyNote}
            </p>
          </Reveal>
        </div>

        <Reveal variant="right" delay={150}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  )
}
