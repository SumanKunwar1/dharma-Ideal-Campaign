"use client"

import { Check, Award, Crown, Sparkles } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Member {
  id: number
  name: string
  membership: string
  contact: string
  image: string
  duration: number
}

const MembershipPage = () => {
  const [members] = useState<Member[]>([
    {
      id: 1,
      name: "John Doe",
      membership: "One Year Member",
      contact: "(123) 456-7890",
      image: "/placeholder.svg?height=300&width=300",
      duration: 1,
    },
    {
      id: 2,
      name: "Jane Smith",
      membership: "Four Year Member",
      contact: "(987) 654-3210",
      image: "/placeholder.svg?height=300&width=300",
      duration: 4,
    },
    {
      id: 3,
      name: "Alice Brown",
      membership: "Ten Year Member",
      contact: "(456) 789-1234",
      image: "/placeholder.svg?height=300&width=300",
      duration: 10,
    },
    {
      id: 4,
      name: "Bob White",
      membership: "One Year Member",
      contact: "(321) 654-0987",
      image: "/placeholder.svg?height=300&width=300",
      duration: 1,
    },
    {
      id: 5,
      name: "Sarah Johnson",
      membership: "Lifetime Member",
      contact: "(555) 123-4567",
      image: "/placeholder.svg?height=300&width=300",
      duration: 20,
    },
    {
      id: 6,
      name: "Michael Chen",
      membership: "Five Year Member",
      contact: "(888) 456-7890",
      image: "/placeholder.svg?height=300&width=300",
      duration: 5,
    },
    {
      id: 7,
      name: "Emma Davis",
      membership: "Two Year Member",
      contact: "(777) 234-5678",
      image: "/placeholder.svg?height=300&width=300",
      duration: 2,
    },
    {
      id: 8,
      name: "David Kumar",
      membership: "Lifetime Member",
      contact: "(666) 789-0123",
      image: "/placeholder.svg?height=300&width=300",
      duration: 15,
    },
  ])

  const membershipTiers = [
    {
      name: "Sponsor Member",
      icon: Award,
      duration: "1 Year",
      price: "$500",
      benefits: [
        "Digital membership certificate",
        "Member directory listing",
        "Event invitations",
        "Quarterly newsletter",
        "10% donation tax benefit",
      ],
      color: "from-[#FF8C00] to-[#F4C430]",
    },
    {
      name: "Gold Patron",
      icon: Crown,
      duration: "Lifetime",
      price: "$2,500",
      benefits: [
        "Lifetime membership status",
        "Premium directory listing",
        "VIP event access",
        "Monthly personal updates",
        "Recognition in annual report",
        "Full tax benefits",
        "Dedicated support contact",
      ],
      color: "from-[#F4C430] to-[#DAA520]",
      featured: true,
    },
    {
      name: "Dharma Partner",
      icon: Sparkles,
      duration: "5 Years",
      price: "$1,500",
      benefits: [
        "Five-year commitment",
        "Premium listing",
        "All events access",
        "Monthly updates",
        "Recognition benefits",
        "Priority support",
      ],
      color: "from-[#1E90FF] to-[#3CB371]",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Dharma Ideal <span className="gradient-gold-text">Membership</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Join our community of dedicated members supporting global spiritual transformation.
            </p>
          </div>

          {/* Membership Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {membershipTiers.map((tier, idx) => {
              const TierIcon = tier.icon
              return (
                <div
                  key={idx}
                  className={`group relative rounded-3xl p-8 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 ${
                    tier.featured
                      ? `bg-gradient-to-br ${tier.color} text-white border-2 border-[#F4C430] shadow-lg`
                      : "bg-white border border-[#F4C430]/20 hover:border-[#F4C430]/50"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-[#CD5C5C] text-white text-xs font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${tier.featured ? "bg-white/20" : "bg-[#F4C430]/10"}`}
                  >
                    <TierIcon className={`w-7 h-7 ${tier.featured ? "text-white" : "text-[#F4C430]"}`} />
                  </div>

                  <h3
                    className={`font-serif text-2xl font-bold mb-1 ${tier.featured ? "text-white" : "text-[#333333]"}`}
                  >
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-4 ${tier.featured ? "text-white/80" : "text-[#7A5200]"}`}>
                    {tier.duration}
                  </p>
                  <p
                    className={`font-serif text-3xl font-bold mb-6 ${tier.featured ? "text-white" : "text-[#F4C430]"}`}
                  >
                    {tier.price}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, bidx) => (
                      <li
                        key={bidx}
                        className={`flex items-start gap-3 ${tier.featured ? "text-white/90" : "text-[#7A5200]"}`}
                      >
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      tier.featured
                        ? "bg-white text-[#F4C430] hover:bg-[#FFF8E7]"
                        : "bg-gradient-to-r from-[#FF8C00] to-[#F4C430] hover:from-[#F4C430] hover:to-[#DAA520] text-white border-0"
                    }`}
                  >
                    Join Now
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Members Gallery */}
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-bold text-center text-[#333333] mb-12">
              Meet Our <span className="gradient-gold-text">Sponsor Members</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F4C430]/10 to-[#FF8C00]/10">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-serif font-bold text-[#333333] mb-1">{member.name}</h4>
                    <p className="text-xs text-[#F4C430] font-semibold mb-2">{member.membership}</p>
                    <p className="text-xs text-[#7A5200]">Contact: {member.contact}</p>
                  </div>
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

export default MembershipPage
