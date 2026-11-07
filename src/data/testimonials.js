// ⚠️ PLACEHOLDER: estas 20 reseñas son TEXTOS DE EJEMPLO para el diseño.
// Antes de publicar hay que reemplazarlas por reseñas reales, con autorización de cada paciente.
// Para quitar el aviso de "ejemplo", cambia SHOW_SAMPLE_NOTICE a false.

export const SHOW_SAMPLE_NOTICE = true

export const testimonialsIntro = {
  eyebrow: 'TESTIMONIOS',
  title: 'Lo que nuestros pacientes comparten.',
  description: 'Experiencias de pacientes de Odontodiza, compartidas con su autorización.',
  sampleNotice: 'Reseñas de ejemplo (diseño). Se reemplazarán por testimonios reales.',
}

export const shareCard = {
  eyebrow: 'TU EXPERIENCIA',
  title: '¿Ya nos visitaste? Cuéntanos cómo fue.',
  description: 'Con tu autorización podemos compartir tu experiencia en esta sección.',
  cta: 'Compartir mi experiencia',
  // TODO: definir cómo se recibirán las reseñas (WhatsApp, formulario, Google Reviews, etc.).
  // Por ahora abre WhatsApp con este mensaje:
  whatsappMessage: 'Hola, estuve en Odontodiza y me gustaría compartir mi experiencia.',
}

export const testimonials = [
  { id: 1, treatment: 'Limpieza dental', headline: 'Me explicaron todo con calma.', text: 'Fui con miedo a la limpieza y me explicaron cada paso antes de empezar. No sentí molestias y salí tranquila.', name: 'María L.', place: 'Ate, Lima' },
  { id: 2, treatment: 'Ortodoncia', headline: 'Mi sonrisa va cambiando mes a mes.', text: 'Cada control es puntual y me muestran el avance. Se nota el cuidado en los detalles.', name: 'Carlos R.', place: 'Ate, Lima' },
  { id: 3, treatment: 'Atención familiar', headline: 'Fuimos toda la familia.', text: 'Llevé a mis dos hijos y a mi esposo el mismo día. Fueron pacientes con los niños y todo fue ordenado.', name: 'Rosa M.', place: 'Santa Clara, Ate' },
  { id: 4, treatment: 'Blanqueamiento dental', headline: 'Resultado natural, sin exagerar.', text: 'Quería aclarar el tono sin que se vea artificial. Me atendieron según mi sensibilidad y quedé conforme.', name: 'Jimena P.', place: 'Ate, Lima' },
  { id: 5, treatment: 'Endodoncia', headline: 'Me quitaron el dolor.', text: 'Llegué con un dolor muy fuerte y me atendieron rápido. Conservaron mi muela y ahora puedo comer normal.', name: 'Luis A.', place: 'Vitarte, Ate' },
  { id: 6, treatment: 'Implantes dentales', headline: 'Volví a masticar con confianza.', text: 'Antes de decidir hicieron una valoración completa y me dieron opciones claras. Muy profesionales.', name: 'Héctor S.', place: 'Ate, Lima' },
  { id: 7, treatment: 'Curaciones dentales', headline: 'Rápido y sin complicaciones.', text: 'Tenía una caries pequeña y la resolvieron en una sola cita. El acabado quedó muy natural.', name: 'Andrea C.', place: 'Ate, Lima' },
  { id: 8, treatment: 'Diseño de sonrisa', headline: 'Me escucharon primero.', text: 'Me preguntaron qué quería cambiar antes de proponerme algo. Eso hizo la diferencia.', name: 'Valeria T.', place: 'La Molina' },
  { id: 9, treatment: 'Extracciones', headline: 'Buen acompañamiento después.', text: 'Me indicaron cómo cuidarme en la recuperación y me escribieron para saber cómo estaba.', name: 'Pedro Q.', place: 'Ate, Lima' },
  { id: 10, treatment: 'Prótesis dentales', headline: 'Más comodidad cada día.', text: 'Mi mamá estrenó su prótesis y está feliz. Le ajustaron todo con paciencia hasta que quedó cómoda.', name: 'Daniela V.', place: 'Ate, Lima' },
  { id: 11, treatment: 'Limpieza dental', headline: 'Un lugar limpio y ordenado.', text: 'Se nota la higiene en todo el consultorio. Eso me da mucha seguridad al atenderme.', name: 'Fiorella G.', place: 'Ate, Lima' },
  { id: 12, treatment: 'Ortodoncia', headline: 'Horarios que se adaptan a mí.', text: 'Salgo tarde del trabajo y pude agendar en la noche. Eso para mí es clave.', name: 'Jorge N.', place: 'Ate, Lima' },
  { id: 13, treatment: 'Atención familiar', headline: 'Mi hija ya no tiene miedo.', text: 'Le tenía pánico al dentista. Aquí la trataron con tanta calma que ahora pide volver.', name: 'Lucía F.', place: 'Santa Anita' },
  { id: 14, treatment: 'Blanqueamiento dental', headline: 'Valió la pena.', text: 'Me lo hice antes de una reunión importante y noté el cambio desde la primera sesión.', name: 'Sofía D.', place: 'Ate, Lima' },
  { id: 15, treatment: 'Endodoncia', headline: 'Me explicaron el procedimiento.', text: 'Sabía qué iban a hacer en cada momento. Salí sin dolor y con indicaciones claras.', name: 'Miguel B.', place: 'Ate, Lima' },
  { id: 16, treatment: 'Diseño de sonrisa', headline: 'Se siente como mi sonrisa.', text: 'No quería verme operada ni artificial. Cuidaron la forma y el color para que se vea natural.', name: 'Camila H.', place: 'Ate, Lima' },
  { id: 17, treatment: 'Curaciones dentales', headline: 'Atención puntual.', text: 'Me atendieron a la hora de mi cita y sin esperas largas. Se agradece.', name: 'Raúl E.', place: 'Ate, Lima' },
  { id: 18, treatment: 'Implantes dentales', headline: 'Un proceso claro de principio a fin.', text: 'Me detallaron cada etapa y los tiempos. Siempre tuve respuesta a mis dudas.', name: 'Teresa O.', place: 'Chosica' },
  { id: 19, treatment: 'Extracciones', headline: 'Trato humano.', text: 'Fui con nervios y el doctor me tranquilizó. Todo fue más fácil de lo que pensaba.', name: 'Diego Z.', place: 'Ate, Lima' },
  { id: 20, treatment: 'Reservas por WhatsApp', headline: 'Reservar fue muy fácil.', text: 'Escribí por WhatsApp y en minutos tenía mi cita confirmada. Todo simple y directo.', name: 'Karen J.', place: 'Ate, Lima' },
]
