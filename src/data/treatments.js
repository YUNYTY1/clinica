import t1 from '../assets/diseño.jpg'
import t2 from '../assets/ortodoncia.jpg'
import t3 from '../assets/implantes.jpg'
import t4 from '../assets/blanqueamiento.jpg'
import t5 from '../assets/limpieza.jpg'
import t6 from '../assets/endodoncia.jpg'
import t7 from '../assets/extracciones.jpg'
import t8 from '../assets/curaciones.jpg'
import t9 from '../assets/protesis.jpg'

export const treatmentsIntro = {
  eyebrow: 'TRATAMIENTOS',
  title: 'Todo lo que tu sonrisa necesita.',
  description: 'Descubre nuestros tratamientos odontológicos y encuentra la atención que necesitas para cuidar tu salud bucal.',
  cta: 'RESERVA TU EVALUACIÓN',
  footerNote: { before: '¿No sabes qué tratamiento necesitas? Escríbenos por ', link: 'WhatsApp', after: ' y te orientamos.' },
  cardCta: 'Consultar',
}

export const treatments = [
  {
    id: 'diseno-de-sonrisa', icon: 'sparkles', title: 'Diseño de sonrisa',
    subtitle: 'Armonía, proporción y naturalidad en cada detalle.',
    description: 'Evaluamos la forma, el color y la proporción de tus dientes para planificar una sonrisa que se vea natural y se sienta tuya.',
    image: { src: t1, alt: 'Primer plano de una sonrisa con dientes blancos y alineados' },
  },
  {
    id: 'ortodoncia', icon: 'smile', title: 'Ortodoncia',
    subtitle: 'Alineamos tu mordida con precisión.',
    description: 'Alternativas fijas y removibles para corregir la posición de los dientes, evaluadas según tu caso.',
    image: { src: t2, alt: 'Alineador dental transparente sostenido con guantes azules' },
  },
  {
    id: 'implantes-dentales', icon: 'anchor', title: 'Implantes dentales',
    subtitle: 'Recupera piezas perdidas.',
    description: 'Reemplazo de piezas dentales mediante implantes, con una valoración previa de tu salud bucal.',
    image: { src: t3, alt: 'Implante dental con corona sobre fondo azul oscuro' },
  },
  {
    id: 'blanqueamiento-dental', icon: 'sun', title: 'Blanqueamiento dental',
    subtitle: 'Un tono más luminoso, con control profesional.',
    description: 'Aclaramos el tono de tus dientes con un procedimiento supervisado y adaptado a tu sensibilidad.',
    image: { src: t4, alt: 'Paciente con lámpara de luz azul durante un blanqueamiento dental' },
  },
  {
    id: 'limpieza-dental', icon: 'droplets', title: 'Limpieza dental',
    subtitle: 'Prevención en cada visita.',
    description: 'Removemos placa y sarro para mantener tus encías sanas y tu sonrisa fresca.',
    image: { src: t5, alt: 'Odontólogo realizando una limpieza dental a una paciente' },
  },
  {
    id: 'endodoncia', icon: 'activity', title: 'Endodoncia',
    subtitle: 'Tratamiento del nervio dental.',
    description: 'Aliviamos el dolor y conservamos la pieza dental cuando la pulpa está comprometida.',
    image: { src: t6, alt: 'Microscopio y limas de endodoncia durante un tratamiento de conducto' },
  },
  {
    id: 'extracciones', icon: 'scissors', title: 'Extracciones',
    subtitle: 'Cuando la pieza ya no puede conservarse.',
    description: 'Retiro de piezas dentales con protocolos de cuidado y acompañamiento en la recuperación.',
    image: { src: t7, alt: 'Bandeja con fórceps e instrumental para extracciones dentales' },
  },
  {
    id: 'curaciones-dentales', icon: 'shieldPlus', title: 'Curaciones dentales',
    subtitle: 'Detenemos la caries a tiempo.',
    description: 'Restauramos piezas afectadas devolviendo forma, función y un acabado natural.',
    image: { src: t8, alt: 'Odontólogo aplicando luz de fotocurado en una restauración dental' },
  },
  {
    id: 'protesis-dentales', icon: 'layers', title: 'Prótesis dentales',
    subtitle: 'Volver a morder y sonreír con seguridad.',
    description: 'Soluciones fijas y removibles para recuperar piezas y mejorar tu comodidad diaria.',
    image: { src: t9, alt: 'Modelo de yeso con prótesis dental removible' },
  },
]
