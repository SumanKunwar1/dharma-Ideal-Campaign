"use client"

import type React from "react"

import { GraduationCap, Home, Mountain, HeartPulse, BookOpen, Users, ArrowRight, ImageIcon, X } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Program {
  icon: any
  title: string
  description: string
  impact: string
  gradient: string
  image?: string
}

const ProgramsPage = () => {
  const [programs, setPrograms] = useState<Program[]>([
    {
      icon: GraduationCap,
      title: "Free Education",
      description:
        "Providing quality education to disadvantaged children, helping them break cycles of poverty and build brighter futures.",
      impact: "5,000+ children enrolled annually",
      gradient: "from-[#1E90FF] to-[#3CB371]",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Home,
      title: "Nyingje Lahakhang",
      description:
        "A sanctuary for the elderly offering peace, meditation, care, and spiritual support in their golden years.",
      impact: "500+ seniors supported",
      gradient: "from-[#F4C430] to-[#DAA520]",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Mountain,
      title: "Pilgrimage Tours",
      description:
        "Guided tours with spiritual teachers, meditation practices, and inner peace experiences in sacred lands.",
      impact: "2,000+ pilgrims annually",
      gradient: "from-[#3CB371] to-[#1E90FF]",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: HeartPulse,
      title: "Medical Support",
      description: "We raise funds to help individuals battling life-threatening health conditions with critical care.",
      impact: "$500K+ raised for medical aid",
      gradient: "from-[#CD5C5C] to-[#FF8C00]",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: BookOpen,
      title: "Monastic Education",
      description: "In-depth spiritual and religious studies for monks and practitioners seeking enlightenment.",
      impact: "300+ monks educated",
      gradient: "from-[#FF8C00] to-[#F4C430]",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development programs empowering women to achieve financial independence and leadership.",
      impact: "1,500+ women trained",
      gradient: "from-[#DAA520] to-[#CD5C5C]",
      image: "/placeholder.svg?height=300&width=400",
    },
  ])

  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedProgramIdx, setSelectedProgramIdx] = useState<number | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, programIdx: number) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageData = event.target?.result as string
        const updatedPrograms = [...programs]
        updatedPrograms[programIdx].image = imageData
        setPrograms(updatedPrograms)
        setShowUploadModal(false)
        setSelectedProgramIdx(null)
      }
      reader.readAsDataURL(file)
    }
  }

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
            {programs.map((program, idx) => {
              const ProgramIcon = program.icon
              return (
                <div
                  key={idx}
                  className="group rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                >
                  {program.image && (
                    <div className="relative h-40 overflow-hidden bg-gradient-to-r from-[#F4C430]/10 to-[#FF8C00]/10">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button
                        onClick={() => {
                          setSelectedProgramIdx(idx)
                          setShowUploadModal(true)
                        }}
                        className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
                      >
                        <ImageIcon className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}

                  <div className={`h-32 bg-gradient-to-r ${program.gradient} p-6 flex items-end`}>
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                      <ProgramIcon className="w-8 h-8 text-white" />
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
              )
            })}
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

      {showUploadModal && selectedProgramIdx !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-serif text-2xl font-bold text-[#333333]">Update Program Image</h2>
              <button
                onClick={() => {
                  setShowUploadModal(false)
                  setSelectedProgramIdx(null)
                }}
                className="text-[#7A5200] hover:text-[#F4C430] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <label className="flex items-center justify-center w-full p-6 border-2 border-dashed border-[#F4C430]/30 rounded-xl cursor-pointer hover:border-[#F4C430] transition-colors">
              <div className="text-center">
                <ImageIcon className="w-8 h-8 mx-auto mb-2 text-[#F4C430]" />
                <p className="text-sm text-[#7A5200]">Click to upload program image</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, selectedProgramIdx)}
                  className="hidden"
                />
              </div>
            </label>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

export default ProgramsPage
