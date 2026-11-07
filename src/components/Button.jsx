import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'bg-teal-brand text-ink hover:bg-teal-soft shadow-[0_12px_32px_-12px_rgba(37,211,208,0.7)]',
  outline: 'border border-white/30 text-white hover:border-white/70 hover:bg-white/10',
  outlineLight: 'border border-slate-200 bg-white/70 text-navy-800 hover:border-slate-300 hover:bg-white',
  dark: 'bg-navy-800 text-white hover:bg-navy-900 shadow-[0_12px_30px_-14px_rgba(15,42,82,0.8)]',
  blue: 'bg-sky-brand text-white hover:bg-[#0968a3] shadow-[0_14px_34px_-14px_rgba(10,123,189,0.9)]',
}

const sizes = {
  sm: 'h-11 px-5 text-[0.95rem]',
  md: 'h-12 px-6 text-[0.95rem]',
  lg: 'h-14 px-6 text-base sm:px-7',
}

// Si recibe href renderiza <a>, si no, <button>.
export default function Button({
  variant = 'primary', size = 'md', icon: Icon, arrow = false, caps = false,
  href, className = '', children, ...rest
}) {
  const cls = `group btn-shine inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
    caps ? 'text-[0.68rem] uppercase tracking-[0.08em] sm:text-[0.8rem] sm:tracking-[0.14em]' : ''
  } ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && <Icon size={19} strokeWidth={1.9} aria-hidden="true" className="relative z-[2] transition-transform duration-300 group-hover:scale-110" />}
      <span className="relative z-[2]">{children}</span>
      {arrow && (
        <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" className="relative z-[2] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  )

  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  )
}
