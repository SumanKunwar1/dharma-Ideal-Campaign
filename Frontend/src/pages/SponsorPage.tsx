import { Gift, Heart, Award, Users, TrendingUp, Zap } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const SponsorPage = () => {
  const sponsorLevels = [
    {
      level: "Bronze Sponsor",
      donation: "$5,000+",
      benefits: ["Recognition on website", "Quarterly impact reports", "Social media features", "Tax documentation"],
      color: "from-[#DAA520] to-[#CD5C5C]",
      icon: Award,
    },
    {
      level: "Silver Sponsor",
      donation: "$15,000+",
      benefits: [
        "All Bronze benefits",
        "Monthly impact calls",
        "Custom project support",
        "Corporate event invitations",
        "Dedicated impact coordinator",
      ],
      color: "from-[#F4C430] to-[#DAA520]",
      icon: Gift,
      featured: true,
    },
    {
      level: "Gold Sponsor",
      donation: "$50,000+",
      benefits: [
        "All Silver benefits",
        "Exclusive on-site visits",
        "Naming opportunities",
        "Board engagement",
        "Custom annual report",
        "Media coverage",
      ],
      color: "from-[#FF8C00] to-[#F4C430]",
      icon: Zap,
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Dharma Ideal <span className="gradient-gold-text">Sponsor</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Partner with us to create meaningful, lasting impact. Become a strategic sponsor and help us transform
              lives globally.
            </p>
          </div>

          {/* Sponsorship Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sponsorLevels.map((sponsor, idx) => (
              <div
                key={idx}
                className={`relative group rounded-3xl overflow-hidden transition-all duration-300 ${
                  sponsor.featured ? "md:scale-105 shadow-2xl shadow-[#F4C430]/40" : "shadow-card"
                } hover:shadow-glow`}
              >
                <div className={`h-32 bg-gradient-to-r ${sponsor.color} p-8 flex items-end`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <sponsor.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-8 bg-[#FFFFFF]">
                  {sponsor.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#F4C430] text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">{sponsor.level}</h3>
                  <p className="text-4xl font-bold gradient-gold-text mb-6">{sponsor.donation}</p>

                  <ul className="space-y-3 mb-8">
                    {sponsor.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-3 text-[#7A5200]">
                        <Heart className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      sponsor.featured ? "gradient-gold text-white border-0" : "border-[#F4C430] text-[#F4C430]"
                    } hover:shadow-glow`}
                  >
                    Become a Sponsor
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-center text-[#333333] mb-12">
              Why Sponsor <span className="gradient-gold-text">DHARMA?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Measurable Impact",
                  desc: "Track your contribution's real-world results",
                },
                {
                  icon: Users,
                  title: "Global Reach",
                  desc: "Partner with programs in 20+ countries",
                },
                {
                  icon: Award,
                  title: "Recognition",
                  desc: "Get recognized for your compassionate support",
                },
                {
                  icon: Gift,
                  title: "Tax Benefits",
                  desc: "Full tax deductibility for your contribution",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#F4C430]/20 hover:border-[#F4C430]/50 hover:shadow-card transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-full gradient-gold mx-auto mb-4 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#333333] mb-2">{benefit.title}</h4>
                  <p className="text-[#7A5200] text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#F4C430]/10 to-[#FF8C00]/10 rounded-3xl p-12 border border-[#F4C430]/30 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#333333] mb-4">Ready to Make a Difference?</h2>
            <p className="text-[#7A5200] max-w-2xl mx-auto mb-8 text-lg">
              Contact our sponsorship team to discuss the perfect partnership for your organization.
            </p>
            <Button className="gradient-gold text-white border-0 hover:shadow-glow text-lg px-8 py-6">
              Contact Sponsorship Team
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default SponsorPage
