import { Calendar, MapPin, ArrowRight, Award, HelpCircle, Music, Crown, Sparkles } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const EventsPage = () => {
  const events = [
    {
      icon: Award,
      title: "International Dharma Awards",
      description:
        "Celebrating individuals and organizations contributing to global spiritual progress and compassionate action.",
      date: "Coming Soon",
      location: "Kathmandu, Nepal",
      featured: true,
    },
    {
      icon: HelpCircle,
      title: "Questions of Wisdom",
      description: "A reflective journey into deep philosophical and spiritual inquiries with master teachers.",
      date: "Monthly Events",
      location: "Virtual & In-Person",
      featured: false,
    },
    {
      icon: Music,
      title: "Dharma Tune",
      description: "Sacred melodies designed to inspire meditation, peace, and inner harmony.",
      date: "Weekly Sessions",
      location: "Various Locations",
      featured: false,
    },
    {
      icon: Crown,
      title: "Miss Bhrikuti Tara",
      description: "Honoring exceptional women who embody compassion, leadership, and wisdom.",
      date: "Annual Event",
      location: "Nepal",
      featured: false,
    },
    {
      icon: Sparkles,
      title: "Ngyungne Buddhist Event",
      description: "A global spiritual gathering focused on empowerment, compassion, and purification practices.",
      date: "2025",
      location: "International",
      featured: true,
    },
  ]

  return (
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
            {events.map((event, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-glow hover:-translate-y-1 ${
                  event.featured
                    ? "bg-gradient-to-br from-[#F4C430]/10 to-[#FF8C00]/10 border-[#F4C430]/30 hover:border-[#F4C430]/50"
                    : "bg-[#FFFFFF] border-[#F4C430]/10 hover:border-[#F4C430]/30"
                }`}
              >
                {event.featured && (
                  <div className="absolute -top-3 right-6 px-4 py-1 rounded-full gradient-saffron text-white text-xs font-semibold">
                    Featured
                  </div>
                )}

                <div className="flex gap-5">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      event.featured ? "gradient-gold" : "bg-[#F4C430]/10"
                    }`}
                  >
                    <event.icon className={`w-8 h-8 ${event.featured ? "text-white" : "text-[#F4C430]"}`} />
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default EventsPage
