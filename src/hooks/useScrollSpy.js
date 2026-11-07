import { useEffect, useState } from 'react'

// Devuelve el id de la sección que está actualmente en pantalla (la última cuyo borde superior ya pasó el offset).
export function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let raf = 0
    const compute = () => {
      raf = 0
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|'), offset])

  return active
}
