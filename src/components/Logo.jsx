import logo from '../assets/logo.png'
import { brand } from '../data/site'

export default function Logo({ size = 'md', href = '#inicio' }) {
  const img = size === 'lg' ? 'h-[3.4rem] w-[3.4rem]' : 'h-12 w-12'
  return (
    <a href={href} aria-label={`${brand.name}, ir al inicio`} className="group flex items-center gap-3.5">
      <img
        src={logo}
        alt={`Logo de ${brand.name}`}
        width="56"
        height="56"
        className={`${img} rounded-full bg-white object-cover ring-2 ring-white/70 transition-transform duration-700 group-hover:rotate-[360deg]`}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.2rem] font-extrabold tracking-[0.16em] text-white">{brand.name}</span>
        <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-teal-brand">{brand.tagline}</span>
      </span>
    </a>
  )
}
