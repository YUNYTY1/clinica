import { useEffect, useState } from 'react'

// Información de scroll para el header y la barra de progreso.
export function useScrollInfo(threshold = 24) {
  const [state, setState] = useState({ scrolled: false, progress: 0 })

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setState((prev) => {
        const scrolled = y > threshold
        const progress = max > 0 ? Math.min(1, y / max) : 0
        if (prev.scrolled === scrolled && Math.abs(prev.progress - progress) < 0.002) return prev
        return { scrolled, progress }
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [threshold])

  return state
}
