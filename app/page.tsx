import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import GsapFloatingOrbs from '../components/GsapFloatingOrbs'
import GsapCursor from '../components/GsapCursor'

export default function Home() {
  return (
    <main className="relative bg-paper">
      <GsapFloatingOrbs />
      <GsapCursor />
      <Nav />
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <Projects />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <About />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <Pricing />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <Contact />
      <Footer />
    </main>
  )
}
