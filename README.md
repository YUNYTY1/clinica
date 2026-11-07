# Odontodiza · Landing de clínica dental

Landing de una página para **Clínica Dental Odontodiza** (Ate, Lima). Vite + React + Tailwind CSS.

## Cómo correrlo

```bash
npm install
npm run dev        # desarrollo → http://localhost:5173
npm run build      # build de producción (carpeta dist/)
npm run preview    # probar el build
```

## Estructura

```
src/
├─ data/          Todos los textos, links, horarios y listas (se edita aquí, no en los componentes)
│  ├─ site.js           marca, teléfono/WhatsApp, dirección, horario, menú, redes, SEO, links de Maps
│  ├─ hero.js · about.js · treatments.js · why.js
│  ├─ testimonials.js   las 20 reseñas (¡de ejemplo!) + tarjeta "Tu experiencia"
│  └─ booking.js · contact.js · footer.js
├─ components/    Piezas reutilizables (NavBar, Logo, Button, Reveal, TreatmentCard,
│                 TestimonialCard, TestimonialCarousel, BookingForm, MapEmbed, WhatsAppFloat...)
├─ sections/      Una sección por archivo (Hero, About, Treatments, WhyUs, Testimonials, Booking, Contact, Footer)
├─ hooks/         useInView, useScrollInfo, useScrollSpy, useCarousel, usePrefersReducedMotion
├─ assets/        Imágenes locales (placeholders → reemplazar por fotos reales con el MISMO nombre)
└─ App.jsx        Solo importa y ordena las secciones
```

## Imágenes a reemplazar (`src/assets/`, mismo nombre de archivo)

| Archivo | Dónde se usa |
|---|---|
| `hero.jpg` | Foto principal del hero (retrato, formato vertical ~900×1100) |
| `tooth.png` | Tarjeta "Precisión clínica" del hero |
| `clinic-main.jpg` · `clinic-chair.jpg` · `clinic-tools.jpg` | Collage de "Nosotros" |
| `treatment-1-diseno-sonrisa.jpg` … `treatment-9-protesis.jpg` | Tarjetas de tratamientos (4:3) |
| `logo.png` | Logo (también copia en `public/logo.png` para Open Graph) |

El favicon está en `public/favicon.svg`.

## Animaciones

Hero con entrada orquestada y parallax con el mouse, aparición al hacer scroll (`Reveal`), menú que resalta la sección activa,
barra de progreso de lectura, tarjetas con hover, carrusel con autoplay/progreso/swipe, botón de WhatsApp flotante.
Todo respeta `prefers-reduced-motion` (se desactiva si el usuario lo pidió en su sistema).

## Pendientes antes de publicar

- [ ] **Reemplazar las 20 reseñas de ejemplo** (`src/data/testimonials.js`) por reseñas reales, con autorización de cada paciente. Luego poner `SHOW_SAMPLE_NOTICE = false`.
- [ ] Definir cómo se reciben las reseñas nuevas (botón "Compartir mi experiencia": hoy abre WhatsApp).
- [ ] Fotos reales (tabla de arriba) y logo definitivo.
- [ ] Confirmar el **pin del mapa**: en el diseño el pin salía en otro negocio. Ajustar `mapQuery` en `src/data/site.js` o pegar el embed real de Google Maps.
- [ ] Links reales de Facebook e Instagram (`facebookUrl` / `instagramUrl` en `site.js`).
- [ ] Confirmar teléfono/WhatsApp (`999 922 410`), dirección y horario.
- [ ] Formulario de reservas: hoy arma el mensaje y abre WhatsApp (`src/components/BookingForm.jsx`, comentario `TODO`). Si se quiere backend/servicio, se conecta ahí.
- [ ] Botón "Consultar" de cada tratamiento: abre WhatsApp con mensaje prellenado (`TreatmentCard.jsx`).
- [ ] Open Graph: cambiar `og:image` en `index.html` por una URL absoluta (o imagen 1200×630) y revisar título/descripción.
- [ ] Textos de las tarjetas de tratamientos, "Nosotros" y "Por qué elegirnos": confirmar con la clínica.

## Notas técnicas

- `lucide-react` v1 ya no incluye íconos de marcas: Facebook, Instagram y WhatsApp están en `components/BrandIcons.jsx`.
- Tipografías locales con `@fontsource-variable` (Plus Jakarta Sans para títulos, Inter para texto): no dependen de Google Fonts.
- El mapa es un iframe de Google Maps; no necesita API key.
