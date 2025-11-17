import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-indigo-50/30 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
