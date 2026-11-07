import { useCallback, useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export const AUTOPLAY_MS = 6500

// Lógica del carrusel: índice, autoplay (se pausa con hover/foco/pestaña oculta), swipe y teclado.
// Vive en un hook para que las flechas de la cabecera y el carrusel compartan el mismo estado.
export function useCarousel(count) {
  const [index, setIndex] = useState(0)
  const [hover, setHover] = useState(false)
  const [focus, setFocus] = useState(false)
  const [visible, setVisible] = useState(true)
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState(0)
  const reduced = usePrefersReducedMotion()
  const startX = useRef(null)
  const wrapRef = useRef(null)

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  // Solo avanza si la pestaña y el carrusel están visibles en pantalla.
  useEffect(() => {
    const onVis = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVis)
    const el = wrapRef.current
    let io
    if (el && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting && !document.hidden), { threshold: 0.25 })
      io.observe(el)
    }
    return () => {
      document.removeEventListener('visibilitychange', onVis)
      io?.disconnect()
    }
  }, [])

  const playing = !hover && !focus && visible && !reduced && !dragging
  useEffect(() => {
    if (!playing) return undefined
    const t = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [playing, index, next])

  const onPointerDown = (e) => {
    if (e.target.closest('button, a')) return
    startX.current = e.clientX
    setDragging(true)
  }
  const onPointerMove = (e) => {
    if (startX.current == null) return
    setOffset(e.clientX - startX.current)
  }
  const onPointerUp = (e) => {
    if (startX.current == null) return
    const dx = e.clientX - startX.current
    startX.current = null
    setDragging(false)
    setOffset(0)
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)()
  }
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
  }

  return {
    index, count, go, next, prev, playing, reduced, dragging, offset, wrapRef,
    wrapperProps: {
      onKeyDown,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
    },
    dragProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onPointerLeave: (e) => startX.current != null && onPointerUp(e),
    },
  }
}
