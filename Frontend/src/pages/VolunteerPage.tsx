import { Rocket, Heart, Globe, Zap, Users, BookOpen } from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const VolunteerPage = () => {
  const volunteerRoles = [
    {
      icon: BookOpen,
      title: "Education Volunteers",
      description: "Help teach, mentor, and inspire underprivileged children to achieve their dreams.",
      requirements: "Passion for education, basic teaching skills",
    },
    {
      icon: Heart,
      title: "Healthcare Support",
      description: "Assist in medical camps, wellness programs, and elderly care facilities.",
      requirements: "Medical background or compassion for service",
    },
    {
      icon: Globe,
      title: "Community Coordinators",
      description: "Connect with local communities and help implement our social programs.",
      requirements: "Local knowledge, leadership skills",
    },
    {
      icon: Zap,
      title: "Tech & Digital",
      description: "Support our tech infrastructure, website, and digital outreach initiatives.",
      requirements: "Tech skills, problem-solving mindset",
    },
    {
      icon: Users,
      title: "Event Organizers",
      description: "Help plan and execute our spiritual and community events worldwide.",
      requirements: "Event planning experience, organizational skills",
    },
    {
      icon: Rocket,
      title: "Fundraising Champions",
      description: "Help mobilize resources and reach potential supporters for our mission.",
      requirements: "Communication skills, fundraising experience",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Become A <span className="gradient-gold-text">Volunteer</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-2xl mx-auto">
              Join our global network and contribute your time, talents, and passion to creating lasting change. Whether
              locally or internationally, your service matters.
            </p>
          </div>

          {/* Volunteer Roles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {volunteerRoles.map((role, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#FFFFFF] border border-[#F4C430]/20 hover:border-[#F4C430]/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#333333] mb-3 group-hover:text-[#F4C430] transition-colors">
                  {role.title}
                </h3>
                <p className="text-[#7A5200] text-sm leading-relaxed mb-4">{role.description}</p>
                <p className="text-[#F4C430] font-semibold text-xs">✓ {role.requirements}</p>
              </div>
            ))}
          </div>

          {/* Application CTA */}
          <div className="bg-gradient-to-r from-[#FF8C00]/10 to-[#F4C430]/10 rounded-3xl p-12 border border-[#FF8C00]/30 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl gradient-saffron flex items-center justify-center flex-shrink-0 shadow-glow">
                <Rocket className="w-12 h-12 text-white" />
              </div>

              <div className="flex-1">
                <h2 className="font-serif text-3xl font-bold text-[#333333] mb-3">Ready to Change Lives?</h2>
                <p className="text-[#7A5200] text-lg mb-4">
                  Apply now and become part of a global movement dedicated to compassion, education, and empowerment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-gold text-white border-0 hover:shadow-glow">Apply Now</Button>
                  <Button
                    variant="outline"
                    className="border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="font-serif text-4xl font-bold text-center text-[#333333] mb-12">
              Join in 3 Simple <span className="gradient-gold-text">Steps</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  desc: "Fill out our simple application form and tell us about your interests and skills.",
                },
                {
                  step: "2",
                  title: "Get Matched",
                  desc: "Our team reviews your profile and connects you with opportunities that match your passion.",
                },
                {
                  step: "3",
                  title: "Start Serving",
                  desc: "Begin your volunteer journey and help us create lasting positive change.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-[#F4C430]/5 to-[#FF8C00]/5 border border-[#F4C430]/20 text-center">
                    <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6 shadow-gold">
                      <span className="font-serif text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#333333] mb-3">{item.title}</h3>
                    <p className="text-[#7A5200]">{item.desc}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-1 bg-gradient-to-r from-[#F4C430] to-[#FF8C00]"></div>
                    </div>
                  )}
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

export default VolunteerPage
