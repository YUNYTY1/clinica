import NavBar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'
import WhatsAppFloat from './components/WhatsAppFloat'
import Hero from './sections/Hero'
import About from './sections/About'
import Treatments from './sections/Treatments'
import WhyUs from './sections/WhyUs'
import Testimonials from './sections/Testimonials'
import Booking from './sections/Booking'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// App solo ordena las secciones. Todo el contenido vive en src/data/.
export default function App() {
  return (
    <>
      <ScrollProgress />
      <NavBar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Treatments />
        <WhyUs />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}