"use client"

import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProgramById } from "@/data/programs"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { ProgramRegisterForm } from "@/components/program/Program-register-form"
import { ProgramDonateForm } from "@/components/program/program-donate-form"
import { ArrowLeft, CheckCircle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const ProgramDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const program = getProgramById(id || "")

  if (!program) {
    return (
      <main className="min-h-screen bg-[#FFF8E7]">
        <PremiumHeader />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold text-[#333333] mb-4">Program Not Found</h1>
          <Button onClick={() => navigate("/programs")} className="gradient-gold text-white">
            Back to Programs
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  const fundingPercentage = (program.fundingRaised / program.fundingGoal) * 100

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/programs")}
            className="flex items-center gap-2 text-[#F4C430] hover:text-[#FF8C00] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Programs
          </button>

          {/* Banner Section */}
          <div
            className={`h-72 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-lg`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(244, 196, 48, 0.1), rgba(255, 140, 0, 0.1)), url('${program.banner}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full flex items-end p-8 md:p-12 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex items-center gap-6">
                <div
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${program.gradient} flex items-center justify-center shadow-lg`}
                >
                  {React.createElement(program.icon, { className: "w-12 h-12 text-white" })}
                </div>
                <div>
                  <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-2">{program.title}</h1>
                  <p className="text-xl text-white/90">{program.impact}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Program Description */}
              <section className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="font-serif text-3xl font-bold text-[#333333] mb-4">About This Program</h2>
                <p className="text-[#7A5200] text-lg leading-relaxed">{program.fullDescription}</p>
              </section>

              {/* Highlights */}
              <section className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="font-serif text-3xl font-bold text-[#333333] mb-6">Program Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle className="w-6 h-6 text-[#F4C430] flex-shrink-0 mt-1" />
                      <p className="text-[#333333] font-medium">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Works */}
              <section className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="font-serif text-3xl font-bold text-[#333333] mb-6">How It Works</h2>
                <div className="space-y-4">
                  {program.howItWorks.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${program.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}
                      >
                        {index + 1}
                      </div>
                      <p className="text-[#333333] text-lg pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Target Audience */}
              <section className="bg-white rounded-3xl p-8 shadow-card">
                <div className="flex gap-4 items-start">
                  <Lightbulb className="w-8 h-8 text-[#F4C430] flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">Who Benefits</h3>
                    <p className="text-[#7A5200] text-lg">{program.targetAudience}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - Forms and Funding */}
            <div className="space-y-8">
              {/* Funding Progress */}
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h3 className="font-serif text-xl font-bold text-[#333333] mb-4">Funding Progress</h3>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#7A5200] font-semibold">
                      ${program.fundingRaised.toLocaleString()} of ${program.fundingGoal.toLocaleString()}
                    </span>
                    <span className="text-[#F4C430] font-bold">{Math.round(fundingPercentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${fundingPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-[#7A5200]">
                  Beneficiaries: <span className="font-semibold">{program.beneficiaries}</span>
                </p>
              </div>

              {/* Donation Form */}
              <ProgramDonateForm program={program} />

              {/* Register Form */}
              <ProgramRegisterForm program={program} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default ProgramDetails
