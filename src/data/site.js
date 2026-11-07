// Datos generales del sitio: marca, contacto, horario, navegación y redes.
// Todo lo que cambie del negocio se edita aquí.

export const brand = {
  name: 'ODONTODIZA',
  tagline: 'CLÍNICA DENTAL · ATE',
  shortDescription: 'En Clínica Dental Odontodiza; cuidamos la salud bucal de toda tu familia.',
}

export const contact = {
  phoneDisplay: '999 922 410',
  // Número internacional sin "+" ni espacios (Perú = 51)
  whatsappNumber: '51999922410',
  whatsappFloatingLabel: 'Escríbenos',
  whatsappFloatingSub: 'RESERVAS',
  addressLines: ['Av. San Martín Mz. B Lt. 2 / Asoc. 7 de Abril', 'Frente a Torres de Sta. Clara II', 'Ate, Lima, Perú'],
  addressOneLine: 'Av. San Martín Mz. B Lt. 2 / Asoc. 7 de Abril - frente a Torres de Sta. Clara II, Ate, Lima, Perú',
  // CONFIRMAR: en la captura el pin del mapa muestra otro negocio ("ARYA IMPORT"). Ajustar la consulta o pegar el embed real de Google Maps.
  mapQuery: 'Av. San Martín Mz B Lt 2, Ate, Lima, Perú',
  facebookUrl: '#', // PENDIENTE: link real de Facebook
  instagramUrl: '#', // PENDIENTE: link real de Instagram
}

export const schedule = {
  daysShort: 'Lun – Sáb',
  hours: '9:00 a. m. – 9:00 p. m.',
  full: 'Lunes a sábado: 9:00 a. m. a 9:00 p. m.',
  heroLine: 'Lunes a sábado, 9 a. m. – 9 p. m.',
  closed: 'Domingos: cerrado',
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
  { label: 'Tratamientos', href: '#tratamientos', id: 'tratamientos' },
  { label: 'Testimonios', href: '#testimonios', id: 'testimonios' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
]

// Secciones de la página y a qué link del menú corresponden (para resaltar el menú al hacer scroll)
export const sections = [
  { id: 'inicio', nav: 'inicio' },
  { id: 'nosotros', nav: 'nosotros' },
  { id: 'tratamientos', nav: 'tratamientos' },
  { id: 'por-que-elegirnos', nav: 'nosotros' },
  { id: 'testimonios', nav: 'testimonios' },
  { id: 'reservas', nav: 'contacto' },
  { id: 'contacto', nav: 'contacto' },
]

export const cta = {
  book: 'Reservar cita',
}

export const seo = {
  title: 'Odontodiza | Clínica dental en Ate, Lima',
  description:
    'Clínica Dental Odontodiza en Ate, Lima: diseño de sonrisa, ortodoncia, implantes, blanqueamiento, limpieza y más. Atención para toda la familia de lunes a sábado.',
}

// Helpers para construir links (no tocar)
export const waLink = (text = 'Hola, quisiera reservar una cita en Odontodiza.') =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`
export const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapQuery)}`
