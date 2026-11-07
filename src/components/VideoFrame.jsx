import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

// Video dentro de un marco con contorno azul animado.
// Se reproduce solo cuando está en pantalla (en silencio, en bucle) y se pausa al salir.
// Si el usuario prefiere "reducir movimiento", no arranca solo: lo inicia con el botón.
export default function VideoFrame({ src, poster, title, className = '' }) {
  const videoRef = useRef(null)
  const [wrapRef, inView] = useInView({ once: false, threshold: 0.35 })
  const reduced = usePrefersReducedMotion()
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [wantPlay, setWantPlay] = useState(null) // null = automático, true/false = decisión del usuario

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const shouldPlay = inView && (wantPlay ?? !reduced)
    if (shouldPlay) v.play().catch(() => {})
    else v.pause()
  }, [inView, wantPlay, reduced])

  const togglePlay = () => setWantPlay(!playing)
  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const btn =
    'flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-sky-brand active:scale-95'

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* Contorno decorativo desplazado + anillo giratorio */}
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full rounded-[2.1rem] border-2 border-sky-brand/25 sm:block" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-7 -top-7 hidden h-24 w-24 animate-spinSlow rounded-full border border-dashed border-sky-brand/40 sm:block" />

      {/* Marco: borde con degradado azul que se desplaza suavemente */}
      <div className="relative animate-shimmer rounded-[2rem] bg-[linear-gradient(120deg,#0a7bbd,#3aa7e0,#25d3d0,#0a7bbd)] bg-[length:200%_100%] p-[5px] shadow-[0_30px_70px_-30px_rgba(10,123,189,0.6)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem] bg-navy-800">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="h-full w-full object-cover"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/50 to-transparent" />

          <div className="absolute bottom-4 left-4 flex gap-2.5">
            <button type="button" onClick={togglePlay} aria-label={playing ? 'Pausar video' : 'Reproducir video'} className={btn}>
              {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" className="ml-0.5" />}
            </button>
            <button type="button" onClick={toggleMute} aria-label={muted ? 'Activar sonido' : 'Silenciar video'} className={btn}>
              {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}