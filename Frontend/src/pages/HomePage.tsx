import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProgramsSection from "@/components/ProgramsSection"
import CausesSection from "@/components/CausesSection"
import EventsSection from "@/components/EventsSection"
import TeamSection from "@/components/TeamSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <CausesSection />
        <EventsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

export default HomePage
