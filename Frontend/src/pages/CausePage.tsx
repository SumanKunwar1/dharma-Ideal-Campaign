"use client"

import { Heart } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Cause {
  id: number
  title: string
  description: string
  image: string
  raised: number
  goal: number
  category: string
}

const CausesPage = () => {
  const [causes] = useState<Cause[]>([
    {
      id: 1,
      title: "Peace Campaign Tour",
      description: "A global peace tour fostering understanding and harmony across regions worldwide.",
      image: "/placeholder.svg?height=300&width=400",
      raised: 5000,
      goal: 500000,
      category: "Peace",
    },
    {
      id: 2,
      title: "International Ngyungne Event",
      description: "A traditional fasting and purification event drawing participants globally.",
      image: "/placeholder.svg?height=300&width=400",
      raised: 5000,
      goal: 517894,
      category: "Spiritual",
    },
    {
      id: 3,
      title: "Ngyungne Building Development",
      description: "Development and land purchase for international Ngyungne center.",
      image: "/placeholder.svg?height=300&width=400",
      raised: 3000,
      goal: 406916,
      category: "Infrastructure",
    },
    {
      id: 4,
      title: "Triyana Bodhi Meditation Center",
      description: "Establishing a dedicated space for meditation and spiritual practice worldwide.",
      image: "/placeholder.svg?height=300&width=400",
      raised: 10000,
      goal: 221955,
      category: "Meditation",
    },
    {
      id: 5,
      title: "Annual Preliminary Retreat Campaign",
      description: "A month-long immersive retreat introducing mindfulness and spiritual practice.",
      image: "/placeholder.svg?height=300&width=400",
      raised: 0,
      goal: 18499,
      category: "Education",
    },
    {
      id: 6,
      title: "Community Outreach Program",
      description: "Compassionate outreach bringing dharma teachings to underserved communities.",
      image: "/placeholder.svg?height=300&width=400",
      raised: 7500,
      goal: 150000,
      category: "Community",
    },
  ])

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Popular <span className="gradient-gold-text">Causes</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Support transformative initiatives creating positive global impact through compassion and wisdom.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {causes.map((cause) => (
              <div
                key={cause.id}
                className="group bg-white rounded-3xl border border-[#F4C430]/10 overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F4C430]/10 to-[#FF8C00]/10">
                  <img
                    src={cause.image || "/placeholder.svg"}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FF8C00] text-white text-xs font-semibold">
                    {cause.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#333333] mb-2 group-hover:text-[#F4C430] transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-[#7A5200] text-sm mb-4 leading-relaxed">{cause.description}</p>

                  <div className="mb-4">
                    <div className="w-full bg-[#F4C430]/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] h-full transition-all duration-500"
                        style={{ width: `${getProgressPercentage(cause.raised, cause.goal)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-3 text-xs">
                      <span className="font-semibold text-[#333333]">Raised: ${cause.raised.toLocaleString()}</span>
                      <span className="text-[#7A5200]">Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] hover:from-[#F4C430] hover:to-[#DAA520] text-white border-0">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default CausesPage
