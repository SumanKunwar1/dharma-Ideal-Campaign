import { GraduationCap, Home, Mountain, HeartPulse, BookOpen, Users, ArrowRight } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const ProgramsPage = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Free Education",
      description:
        "Providing quality education to disadvantaged children, helping them break cycles of poverty and build brighter futures.",
      impact: "5,000+ children enrolled annually",
      gradient: "from-[#1E90FF] to-[#3CB371]",
    },
    {
      icon: Home,
      title: "Nyingje Lahakhang",
      description:
        "A sanctuary for the elderly offering peace, meditation, care, and spiritual support in their golden years.",
      impact: "500+ seniors supported",
      gradient: "from-[#F4C430] to-[#DAA520]",
    },
    {
      icon: Mountain,
      title: "Pilgrimage Tours",
      description:
        "Guided tours with spiritual teachers, meditation practices, and inner peace experiences in sacred lands.",
      impact: "2,000+ pilgrims annually",
      gradient: "from-[#3CB371] to-[#1E90FF]",
    },
    {
      icon: HeartPulse,
      title: "Medical Support",
      description: "We raise funds to help individuals battling life-threatening health conditions with critical care.",
      impact: "$500K+ raised for medical aid",
      gradient: "from-[#CD5C5C] to-[#FF8C00]",
    },
    {
      icon: BookOpen,
      title: "Monastic Education",
      description: "In-depth spiritual and religious studies for monks and practitioners seeking enlightenment.",
      impact: "300+ monks educated",
      gradient: "from-[#FF8C00] to-[#F4C430]",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development programs empowering women to achieve financial independence and leadership.",
      impact: "1,500+ women trained",
      gradient: "from-[#DAA520] to-[#CD5C5C]",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              What We <span className="gradient-gold-text">Do</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Our comprehensive programs address education, health, spirituality, and empowerment across 20+ countries.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-32 bg-gradient-to-r ${program.gradient} p-6 flex items-end`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-8 bg-[#FFFFFF]">
                  <h3 className="font-serif text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#F4C430] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-[#7A5200] mb-4 text-sm leading-relaxed">{program.description}</p>
                  <p className="text-[#F4C430] font-semibold text-sm mb-4">✓ {program.impact}</p>
                  <Button
                    variant="outline"
                    className="w-full border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#F4C430]/10 to-[#FF8C00]/10 rounded-3xl p-12 border border-[#F4C430]/30 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#333333] mb-4">Support Our Programs</h2>
            <p className="text-[#7A5200] max-w-2xl mx-auto mb-8 text-lg">
              Your donation directly transforms lives. Choose a program that resonates with your heart.
            </p>
            <Button className="gradient-gold text-white border-0 hover:shadow-glow text-lg px-8 py-6">
              Make a Donation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default ProgramsPage
