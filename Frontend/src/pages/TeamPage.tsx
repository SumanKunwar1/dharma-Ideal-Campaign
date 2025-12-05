import { Users, ArrowRight } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const TeamPage = () => {
  const teamRoles = [
    {
      role: "Founder & CEO",
      description: "Visionary leader guiding our mission with deep wisdom and unwavering compassion.",
      members: "1",
    },
    {
      role: "Chief Executives",
      description: "Strategic minds driving operational excellence, growth, and program development.",
      members: "3",
    },
    {
      role: "Senior Advisors",
      description: "Experienced mentors providing guidance, spiritual insight, and strategic direction.",
      members: "5",
    },
    {
      role: "Program Directors",
      description: "Dedicated leaders overseeing education, healthcare, and community programs.",
      members: "8",
    },
    {
      role: "Community Coordinators",
      description: "On-the-ground champions connecting with and serving communities worldwide.",
      members: "25+",
    },
    {
      role: "Global Volunteers",
      description: "Passionate individuals contributing time and skills to spread compassion.",
      members: "400+",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Meet The <span className="gradient-gold-text">Team</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Our dedicated team of leaders, coordinators, and volunteers work tirelessly to bring positive change to
              communities worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teamRoles.map((member, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#FFFFFF] border border-[#F4C430]/20 hover:border-[#F4C430]/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-glow transition-shadow">
                  <span className="font-serif text-3xl font-bold text-white">{member.members.split("+")[0]}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#333333] mb-3 group-hover:text-[#F4C430] transition-colors">
                  {member.role}
                </h3>
                <p className="text-[#7A5200] text-sm leading-relaxed mb-4">{member.description}</p>
                <p className="text-[#F4C430] font-semibold text-sm">
                  {member.members} member{Number.parseInt(member.members) !== 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>

          {/* Volunteer CTA */}
          <div className="relative p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00]/20 to-[#F4C430]/20 border border-[#FF8C00]/30 rounded-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl gradient-saffron flex items-center justify-center flex-shrink-0 shadow-glow">
                <Users className="w-12 h-12 text-white" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-4xl font-bold text-[#333333] mb-3">Join Our Team</h2>
                <p className="text-[#7A5200] text-lg">
                  Whether you're a student, professional, or simply passionate about creating change, there's a place
                  for you in our global community of changemakers.
                </p>
              </div>

              <Button className="gradient-gold text-white border-0 hover:shadow-glow text-lg px-8 py-6 flex-shrink-0">
                Become a Volunteer
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default TeamPage
