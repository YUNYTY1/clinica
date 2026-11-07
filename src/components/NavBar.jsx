import { useEffect, useState } from 'react'
import { CalendarCheck, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { cta, navLinks, sections } from '../data/site'
import { useScrollInfo } from '../hooks/useScrollInfo'
import { useScrollSpy } from '../hooks/useScrollSpy'

const sectionIds = sections.map((s) => s.id)

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { scrolled } = useScrollInfo()
  const activeSection = useScrollSpy(sectionIds)
  const activeNav = sections.find((s) => s.id === activeSection)?.nav

  // Cierra el menú con Escape o al pasar a escritorio, y bloquea el scroll mientras está abierto.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl transition-all duration-500 ${
        scrolled ? 'bg-[rgba(8,19,35,0.9)] shadow-[0_12px_40px_-18px_rgba(0,0,0,0.6)]' : 'bg-[rgba(10,22,40,0.82)]'
      }`}
    >
      <div className={`mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 lg:px-10 ${scrolled ? 'h-[66px]' : 'h-[72px]'}`}>
        <Logo />

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((l) => {
              const isActive = activeNav === l.id
              return (
                <li key={l.id}>
                  <a
                    href={l.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative py-2 text-[0.95rem] font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                  >
                    {l.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-teal-brand transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#reservas" icon={CalendarCheck} size="sm" className="hidden md:inline-flex">
            {cta.book}
          </Button>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu size={22} aria-hidden="true" className={`absolute transition-all duration-300 ${open ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
            <X size={22} aria-hidden="true" className={`absolute transition-all duration-300 ${open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`} />
          </button>
        </div>
      </div>

      {/* Menú móvil: se despliega con una transición de altura y los links entran escalonados */}
      <div
        id="menu-movil"
        className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Navegación móvil" className="mx-auto max-w-[1440px] px-5 pb-6 pt-2 sm:px-8">
            <ul className="flex flex-col">
              {navLinks.map((l, i) => (
                <li
                  key={l.id}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                  className={`border-b border-white/10 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className={`flex items-center justify-between py-4 font-display text-xl font-semibold ${activeNav === l.id ? 'text-teal-brand' : 'text-white'}`}
                  >
                    {l.label}
                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${activeNav === l.id ? 'bg-teal-brand' : 'bg-white/20'}`} />
                  </a>
                </li>
              ))}
            </ul>
            <div
              style={{ transitionDelay: open ? '460ms' : '0ms' }}
              className={`mt-5 transition-all duration-500 md:hidden ${open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            >
              <Button href="#reservas" icon={CalendarCheck} size="lg" className="w-full" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {cta.book}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
