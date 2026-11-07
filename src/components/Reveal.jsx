import { useInView } from '../hooks/useInView'

// Envuelve cualquier contenido para que aparezca con animación al hacer scroll.
// variant: up | down | left | right | scale | pop | clip   ·   delay en milisegundos
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  const style = { '--d': `${delay}ms` }

  // "clip" usa clip-path, y un IntersectionObserver no detecta elementos recortados por su propio clip-path.
  // Por eso el elemento observado es el contenedor y el recorte se aplica a un hijo.
  if (variant === 'clip') {
    return (
      <Tag ref={ref} className={className} {...rest}>
        <div data-reveal="clip" className={`h-full w-full ${inView ? 'in' : ''}`} style={style}>
          {children}
        </div>
      </Tag>
    )
  }

  return (
    <Tag ref={ref} data-reveal={variant} className={`${inView ? 'in ' : ''}${className}`} style={style} {...rest}>
      {children}
    </Tag>
  )
}
