import { AboutSection } from './components/sections/AboutSection'
import { BlogSection } from './components/sections/BlogSection'
import { ClientsSection } from './components/sections/ClientsSection'
import { ContactSection } from './components/sections/ContactSection'
import { CtaBannerSection } from './components/sections/CtaBannerSection'
import { HeroSection } from './components/sections/HeroSection'
import { PortfolioSection } from './components/sections/PortfolioSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { TestimonialSection } from './components/sections/TestimonialSection'
import { WorkProcessSection } from './components/sections/WorkProcessSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkProcessSection />
        <PortfolioSection />
        <CtaBannerSection />
        <BlogSection />
        <ServicesSection />
        <ClientsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
