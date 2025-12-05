"use client"

import type React from "react"

import { Calendar, MapPin, ArrowRight, Award, HelpCircle, Music, Crown, Sparkles, ImageIcon, X } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ScrollToTop from "@/components/ScrollToTop"

interface Event {
  icon: any
  title: string
  description: string
  date: string
  location: string
  featured: boolean
  image?: string
}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      icon: Award,
      title: "International Dharma Awards",
      description:
        "Celebrating individuals and organizations contributing to global spiritual progress and compassionate action.",
      date: "Coming Soon",
      location: "Kathmandu, Nepal",
      featured: true,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: HelpCircle,
      title: "Questions of Wisdom",
      description: "A reflective journey into deep philosophical and spiritual inquiries with master teachers.",
      date: "Monthly Events",
      location: "Virtual & In-Person",
      featured: false,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: Music,
      title: "Dharma Tune",
      description: "Sacred melodies designed to inspire meditation, peace, and inner harmony.",
      date: "Weekly Sessions",
      location: "Various Locations",
      featured: false,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: Crown,
      title: "Miss Bhrikuti Tara",
      description: "Honoring exceptional women who embody compassion, leadership, and wisdom.",
      date: "Annual Event",
      location: "Nepal",
      featured: false,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: Sparkles,
      title: "Ngyungne Buddhist Event",
      description: "A global spiritual gathering focused on empowerment, compassion, and purification practices.",
      date: "2025",
      location: "International",
      featured: true,
      image: "/placeholder.svg?height=300&width=500",
    },
  ])

  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedEventIdx, setSelectedEventIdx] = useState<number | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string>("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, eventIdx: number) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageData = event.target?.result as string
        const updatedEvents = [...events]
        updatedEvents[eventIdx].image = imageData
        setEvents(updatedEvents)
        setShowUploadModal(false)
        setSelectedEventIdx(null)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Upcoming <span className="gradient-gold-text">Events</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Join our transformative spiritual gatherings and be part of a global community united in compassion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event, idx) => {
              const EventIcon = event.icon
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-glow hover:-translate-y-1 ${
                    event.featured
                      ? "bg-gradient-to-br from-[#F4C430]/10 to-[#FF8C00]/10 border-[#F4C430]/30 hover:border-[#F4C430]/50"
                      : "bg-[#FFFFFF] border-[#F4C430]/10 hover:border-[#F4C430]/30"
                  }`}
                >
                  {event.featured && (
                    <div className="absolute -top-3 right-6 px-4 py-1 rounded-full gradient-saffron text-white text-xs font-semibold z-10">
                      Featured
                    </div>
                  )}

                  {event.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button
                        onClick={() => {
                          setSelectedEventIdx(idx)
                          setShowUploadModal(true)
                        }}
                        className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
                      >
                        <ImageIcon className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex gap-5">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          event.featured ? "gradient-gold" : "bg-[#F4C430]/10"
                        }`}
                      >
                        <EventIcon className={`w-8 h-8 ${event.featured ? "text-white" : "text-[#F4C430]"}`} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-[#333333] mb-2 group-hover:text-[#F4C430] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-[#7A5200] text-sm leading-relaxed mb-4">{event.description}</p>

                        <div className="flex flex-wrap gap-4 text-sm mb-4">
                          <div className="flex items-center gap-1.5 text-[#7A5200]">
                            <Calendar className="w-4 h-4 text-[#F4C430]" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1.5 text-[#7A5200]">
                            <MapPin className="w-4 h-4 text-[#FF8C00]" />
                            {event.location}
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="border-[#F4C430] text-[#F4C430] hover:bg-[#F4C430] hover:text-white bg-transparent"
                        >
                          Register
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {showUploadModal && selectedEventIdx !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-serif text-2xl font-bold text-[#333333]">Update Event Image</h2>
              <button
                onClick={() => {
                  setShowUploadModal(false)
                  setSelectedEventIdx(null)
                }}
                className="text-[#7A5200] hover:text-[#F4C430] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <label className="flex items-center justify-center w-full p-6 border-2 border-dashed border-[#F4C430]/30 rounded-xl cursor-pointer hover:border-[#F4C430] transition-colors">
              <div className="text-center">
                <ImageIcon className="w-8 h-8 mx-auto mb-2 text-[#F4C430]" />
                <p className="text-sm text-[#7A5200]">Click to upload event image</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, selectedEventIdx)}
                  className="hidden"
                />
              </div>
            </label>
          </div>
        </div>
      )}
      <Footer />
    </main>
    </>
  )

}

export default EventsPage
