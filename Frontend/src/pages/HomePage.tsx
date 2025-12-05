import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/Home/HeroSection"
import AboutSection from "@/components/Home/AboutSection"
import ProgramsSection from "@/components/Home/ProgramsSection"
import CausesSection from "@/components/Home/CausesSection"
import EventsSection from "@/components/Home/EventsSection"
import TeamSection from "@/components/Home/TeamSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import ContactSection from "@/components/Home/ContactSection"

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
