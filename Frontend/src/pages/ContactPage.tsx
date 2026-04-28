import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import ContactSection from "@/components/Home/ContactSection"
import { useEffect } from "react"

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[#F4C430]/15 text-[#B8860B] text-sm font-semibold tracking-widest uppercase mb-4 border border-[#F4C430]/25">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#333333]">
            We'd Love to{" "}
            <span className="bg-gradient-to-r from-[#F4C430] via-[#FF8C00] to-[#DAA520] bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

export default ContactPage
