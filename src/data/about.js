import poster from '../assets/clinic-main.jpg'

export const about = {
  eyebrow: 'LA CLÍNICA',
  title: 'Más que cuidar sonrisas, cuidamos familias.',
  paragraphs: [
    'Odontodiza es una clínica dental en Ate pensada para acompañar la salud bucal de niños, jóvenes y adultos. Creemos que una buena atención empieza por escuchar: entender qué te molesta, qué te preocupa y qué esperas de tu sonrisa.',
    'Trabajamos con un enfoque preventivo y estético, en un espacio cómodo donde cada consulta se explica con claridad y sin prisas.',
  ],
  features: [
    { icon: 'heart', title: 'Trato cercano', text: 'Escuchamos primero y explicamos cada paso del tratamiento con calma.' },
    { icon: 'shield', title: 'Higiene y bioseguridad', text: 'Protocolos de esterilización en cada atención, sin excepciones.' },
    { icon: 'sparkles', title: 'Mirada integral', text: 'Prevención, estética y función pensadas para toda la familia.' },
  ],
  link: { label: 'Conoce nuestros tratamientos', href: '#tratamientos' },
  quote: '“Cuidamos la salud bucal de toda tu familia.”',
  video: {
    // El archivo va en la carpeta /public (ruta pública, no se importa): public/clinic-video.mp4
    src: '/clinic-video.mp4',
    // Imagen que se ve antes de que cargue el video (o si el video no está)
    poster,
    title: 'Recorrido en video por la clínica dental Odontodiza',
  },
}