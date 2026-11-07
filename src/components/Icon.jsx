import {
  Activity, Anchor, CalendarCheck, Clock, Droplets, HeartHandshake, Layers, MapPin, MessageCircle,
  Scissors, ShieldCheck, ShieldPlus, Smile, Sparkles, Stethoscope, Sun, Users,
} from 'lucide-react'

// Los datos usan nombres simples ("sparkles", "clock"...) y aquí se convierten en el ícono real.
const map = {
  activity: Activity,
  anchor: Anchor,
  calendar: CalendarCheck,
  clock: Clock,
  droplets: Droplets,
  heart: HeartHandshake,
  layers: Layers,
  pin: MapPin,
  message: MessageCircle,
  scissors: Scissors,
  shield: ShieldCheck,
  shieldPlus: ShieldPlus,
  smile: Smile,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  sun: Sun,
  users: Users,
}

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  const Cmp = map[name] || Sparkles
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}
