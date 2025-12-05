import { Heart, Target, Award, Users } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              About Our <span className="gradient-gold-text">Masters</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-3xl">
              Learn about the visionary leaders and compassionate hearts behind DHARMA Ideal Campaign who dedicate their
              lives to spreading wisdom and creating lasting change.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <div className="aspect-square rounded-3xl gradient-gold p-1 shadow-card">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#F4C430]/20 to-[#FF8C00]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto rounded-full gradient-gold flex items-center justify-center shadow-glow mb-6">
                      <span className="text-7xl">✨</span>
                    </div>
                    <p className="font-serif text-2xl text-[#333333] italic">
                      "Wisdom guided by compassion transforms the world"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-[#333333] mb-6">Our Founding Vision</h2>
              <p className="text-[#7A5200] mb-4 leading-relaxed">
                DHARMA Ideal Campaign was founded on the principle that genuine change comes from combining spiritual
                wisdom with practical action. Our masters have spent decades studying compassion, meditation, and
                community development.
              </p>
              <p className="text-[#7A5200] mb-6 leading-relaxed">
                Today, we continue their legacy by empowering communities, supporting the vulnerable, and spreading the
                timeless teachings of kindness and equality across borders.
              </p>
              <Button className="gradient-gold text-white border-0 hover:shadow-glow">
                <Heart className="w-5 h-5" />
                Support Our Mission
              </Button>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="font-serif text-4xl font-bold text-[#333333] text-center mb-12">
              Core <span className="gradient-gold-text">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Compassion", desc: "Heartfelt care for all beings" },
                { icon: Target, title: "Purpose", desc: "Clear mission to serve" },
                { icon: Users, title: "Community", desc: "United in service" },
                { icon: Award, title: "Excellence", desc: "Highest standards in all we do" },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#F4C430]/20 hover:border-[#F4C430]/50 hover:shadow-card transition-all text-center group"
                >
                  <div className="w-16 h-16 rounded-full gradient-gold mx-auto mb-4 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#333333] mb-2 text-lg">{value.title}</h3>
                  <p className="text-[#7A5200] text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-[#F4C430]/10 via-[#FF8C00]/10 to-[#1E90FF]/10 rounded-3xl p-12 border border-[#F4C430]/20">
            <h2 className="font-serif text-4xl font-bold text-center text-[#333333] mb-12">Our Impact by Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Countries Served" },
                { number: "15+", label: "Years of Service" },
                { number: "400+", label: "Active Team Members" },
                { number: "721K+", label: "Lives Touched" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-serif text-5xl font-bold gradient-gold-text mb-2">{stat.number}</div>
                  <p className="text-[#7A5200] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default AboutPage
