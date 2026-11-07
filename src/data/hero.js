import heroImg1 from '../assets/hero.jpg'
import heroImg2 from '../assets/hero2.jpg' // Reemplaza con la ruta de tu segunda imagen
import heroImg3 from '../assets/hero3.jpg' // Reemplaza con la ruta de tu tercera imagen
import toothImg from '../assets/tooth.png'

export const hero = {
  eyebrow: 'CLÍNICA DENTAL · ATE, LIMA',
  titleLines: ['Tu sonrisa', 'merece una'],
  titleAccent: 'atención especial',
  description: 'En Clínica Dental Odontodiza; cuidamos la salud bucal de toda tu familia. 🦷',
  primaryCta: 'Agenda tu cita',
  secondaryCta: 'CONOCE NUESTROS TRATAMIENTOS',
  // Arreglo de imágenes para el carrusel
  images: [
    { src: heroImg1, alt: 'Paciente sonriendo en el consultorio de Clínica Dental Odontodiza' },
    { src: heroImg2, alt: 'Instalaciones y equipos modernos de la clínica dental' },
    { src: heroImg3, alt: 'Atención odontológica especializada para toda la familia' },
  ],
  floatingCard: {
    label: 'PRECISIÓN CLÍNICA',
    image: { src: toothImg, alt: 'Ilustración 3D de una pieza dental' },
  },
  infoItems: [
    { icon: 'clock', text: 'Lunes a sábado, 9 a. m. – 9 p. m.' },
    { icon: 'pin', text: 'Ate, Lima' },
    { icon: 'users', text: 'Atención para toda la familia' },
  ],
}