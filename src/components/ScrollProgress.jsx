import { useScrollInfo } from '../hooks/useScrollInfo'

// Barra fina de progreso de lectura en la parte superior.
export default function ScrollProgress() {
  const { progress } = useScrollInfo()
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div className="h-full origin-left bg-gradient-to-r from-teal-brand via-teal-soft to-sky-brand" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
