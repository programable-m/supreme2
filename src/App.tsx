import Header from './components/Header'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import ConsultationCTA from './sections/ConsultationCTA'
import FirstImpression from './sections/FirstImpression'
import GrowthSection from './sections/GrowthSection'
import Portfolio from './sections/Portfolio'
import PricingOffer from './sections/PricingOffer'
import CompletePackage from './sections/CompletePackage'
import Process from './sections/Process'
import Services from './sections/Services'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />

      <main>
        <Hero />
        <ConsultationCTA />
        <FirstImpression />
        <GrowthSection />
        <Portfolio />
        <PricingOffer />
        <CompletePackage />
        <Process />
        <Services />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingContact />
      <BackToTop />
    </div>
  )
}
