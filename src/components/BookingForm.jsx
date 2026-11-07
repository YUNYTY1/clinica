import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { booking } from '../data/booking'
import { treatments } from '../data/treatments'
import { waLink } from '../data/site'

const f = booking.form
const todayISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}
const isSunday = (iso) => new Date(`${iso}T12:00:00`).getDay() === 0

const inputCls = (error) =>
  `h-[3.6rem] w-full rounded-2xl border bg-white px-5 text-[1rem] text-navy-800 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-sky-brand focus:shadow-[0_0_0_4px_rgba(10,123,189,0.12)] ${
    error ? 'border-red-400 shake' : 'border-slate-200 hover:border-slate-300'
  }`

function Field({ label, htmlFor, error, optional, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-[0.9rem] font-medium text-slate-600">
        {label}
        {optional ? <span className="font-normal text-slate-400"> {optional}</span> : <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="msg-in mt-1.5 text-[0.82rem] font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default function BookingForm() {
  const [values, setValues] = useState({ name: '', phone: '', treatment: '', date: '', time: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
    setSent(false)
  }

  const validate = () => {
    const er = {}
    if (values.name.trim().length < 3) er.name = f.errors.name
    if (values.phone.replace(/\D/g, '').length < 9) er.phone = f.errors.phone
    if (!values.treatment) er.treatment = f.errors.treatment
    if (!values.date) er.date = f.errors.date
    else if (isSunday(values.date)) er.date = f.errors.sunday
    if (!values.time) er.time = f.errors.time
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      document.getElementById(`cita-${Object.keys(er)[0]}`)?.focus()
      return
    }
    const treatmentTitle = treatments.find((t) => t.id === values.treatment)?.title ?? values.treatment
    const [y, m, d] = values.date.split('-')
    const text = [
      'Hola, quisiera reservar una cita en Odontodiza.',
      `Nombre: ${values.name.trim()}`,
      `Contacto: ${values.phone.trim()}`,
      `Tratamiento: ${treatmentTitle}`,
      `Fecha preferida: ${d}/${m}/${y}`,
      `Horario preferido: ${values.time}`,
      values.message.trim() ? `Mensaje: ${values.message.trim()}` : null,
    ].filter(Boolean).join('\n')

    // TODO: aquí se define a dónde va la solicitud. Hoy abre WhatsApp con el mensaje armado.
    // Para usar un backend o servicio (Formspree, EmailJS, API propia), reemplazar esta línea por un fetch/POST
    // con `values`, y mostrar el estado de éxito/error en pantalla.
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.75rem] bg-white p-6 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)] sm:rounded-[2rem] sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-[1.35rem] font-bold tracking-[-0.03em] text-navy-800">{f.title}</h3>
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-400">{f.badge}</span>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label={f.name.label} htmlFor="cita-name" error={errors.name}>
          <input id="cita-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} placeholder={f.name.placeholder} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cita-name-error' : undefined} className={inputCls(errors.name)} />
        </Field>
        <Field label={f.phone.label} htmlFor="cita-phone" error={errors.phone}>
          <input id="cita-phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} placeholder={f.phone.placeholder} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'cita-phone-error' : undefined} className={inputCls(errors.phone)} />
        </Field>

        <Field label={f.treatment.label} htmlFor="cita-treatment" error={errors.treatment} className="sm:col-span-2">
          <div className="relative">
            <select id="cita-treatment" value={values.treatment} onChange={set('treatment')} aria-invalid={!!errors.treatment} aria-describedby={errors.treatment ? 'cita-treatment-error' : undefined} className={`${inputCls(errors.treatment)} appearance-none pr-12 ${values.treatment ? '' : 'text-navy-800'}`}>
              <option value="">{f.treatment.placeholder}</option>
              {treatments.map((t) => (
                <option key={t.id} value={t.id}>{t.title}</option>
              ))}
            </select>
            <ChevronDown size={20} aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </Field>

        <Field label={f.date.label} htmlFor="cita-date" error={errors.date}>
          <input id="cita-date" type="date" min={todayISO()} value={values.date} onChange={set('date')} aria-invalid={!!errors.date} aria-describedby={errors.date ? 'cita-date-error' : undefined} className={`${inputCls(errors.date)} min-w-0`} />
        </Field>

        <div>
          <p id="cita-time-label" className="mb-2 block text-[0.9rem] font-medium text-slate-600">{f.time.label}<span aria-hidden="true"> *</span></p>
          <div role="radiogroup" aria-labelledby="cita-time-label" aria-describedby={errors.time ? 'cita-time-error' : undefined} className={`grid grid-cols-3 gap-2.5 ${errors.time ? 'shake' : ''}`}>
            {f.time.options.map((opt, i) => {
              const on = values.time === opt
              return (
                <button
                  key={opt}
                  id={i === 0 ? 'cita-time' : undefined}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => { setValues((v) => ({ ...v, time: opt })); setErrors((er) => ({ ...er, time: undefined })); setSent(false) }}
                  className={`h-[3.6rem] rounded-2xl border text-[0.95rem] font-medium transition-all duration-300 active:scale-95 ${
                    on ? 'border-navy-800 bg-navy-800 text-white shadow-[0_10px_24px_-12px_rgba(15,42,82,0.9)]' : errors.time ? 'border-red-400 text-slate-600' : 'border-slate-200 text-slate-600 hover:border-sky-brand hover:text-sky-brand'
                  }`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          {errors.time && <p id="cita-time-error" role="alert" className="msg-in mt-1.5 text-[0.82rem] font-medium text-red-500">{errors.time}</p>}
        </div>

        <Field label={f.message.label} optional={f.message.optional} htmlFor="cita-message" className="sm:col-span-2">
          <textarea id="cita-message" rows={4} value={values.message} onChange={set('message')} placeholder={f.message.placeholder} className={`${inputCls(false)} h-32 resize-none py-4`} />
        </Field>
      </div>

      <button type="submit" className="group btn-shine mt-7 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-sky-brand text-[1.02rem] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(10,123,189,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0968a3] active:translate-y-0 active:scale-[0.99]">
        <MessageCircle size={20} aria-hidden="true" className="relative z-[2] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
        <span className="relative z-[2]">{f.submit}</span>
      </button>

      <p role="status" className="msg-in mt-4 min-h-[1.2rem] text-center text-[0.88rem] font-medium text-emerald-600">
        {sent ? 'Abrimos WhatsApp con tu solicitud. Envía el mensaje para confirmar.' : ''}
      </p>
      <p className="mt-1 text-center text-[0.8rem] leading-relaxed text-slate-400">{f.legal}</p>
    </form>
  )
}
