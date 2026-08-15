import { AboutSection } from './components/sections/AboutSection'
import { ClientsSection } from './components/sections/ClientsSection'
import { ContactSection } from './components/sections/ContactSection'
import { CtaBannerSection } from './components/sections/CtaBannerSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { PortfolioSection } from './components/sections/PortfolioSection'
import { StackSection } from './components/sections/StackSection'
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
        <StackSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <WorkProcessSection />
        <PortfolioSection />
        <CtaBannerSection />
        <ServicesSection />
        <ClientsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
