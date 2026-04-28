import { GraduationCap, Home, Mountain, HeartPulse, BookOpen, Users } from "lucide-react"

export interface Program {
  id: string
  icon: any
  title: string
  description: string
  impact: string
  gradient: string
  banner: string
  fullDescription: string
  highlights: string[]
  howItWorks: string[]
  targetAudience: string
  fundingGoal: number
  fundingRaised: number
  beneficiaries: string
}

export const programs: Program[] = [
  
  {
    id: "nyingje-lahakhang",
    icon: Home,
    title: "Nyingje Lahakhang",
    description:
      "A sanctuary for the elderly offering peace, meditation, care, and spiritual support in their golden years.",
    impact: "500+ seniors supported",
    gradient: "from-[#F4C430] to-[#DAA520]",
    banner: "/elderly-people-in-peaceful-meditation-center.jpg",
    fullDescription:
      "Nyingje Lahakhang is a holistic care facility dedicated to providing physical, emotional, and spiritual support to elderly individuals. In many cultures, aging should be a time of wisdom, peace, and spiritual growth. Our sanctuary provides a nurturing environment where seniors can spend their golden years with dignity, comfort, and purpose.",
    highlights: [
      "Comfortable and dignified living space",
      "24/7 healthcare and wellness programs",
      "Spiritual guidance and meditation practices",
      "Nutritious meals and proper healthcare",
      "Social activities and community engagement",
      "Family involvement and visitation programs",
    ],
    howItWorks: [
      "Identify and support elderly individuals in need",
      "Provide safe, comfortable residential space",
      "Offer regular healthcare check-ups and medication",
      "Conduct spiritual and meditation sessions",
      "Organize social and recreational activities",
      "Maintain family connections and support systems",
    ],
    targetAudience: "Elderly individuals aged 60+ seeking care and spiritual support",
    fundingGoal: 300000,
    fundingRaised: 180000,
    beneficiaries: "500+ seniors",
  },
  {
    id: "pilgrimage-tours",
    icon: Mountain,
    title: "World Peace Prayers ",
    description:
      "Guided tours with spiritual teachers, meditation practices, and inner peace experiences in sacred lands.",
    impact: "2,000+ pilgrims annually",
    gradient: "from-[#3CB371] to-[#1E90FF]",
    banner: "/sacred-mountain-landscape-pilgrimage-journey.jpg",
    fullDescription:
      "Our Pilgrimage Tours program offers transformative spiritual journeys to sacred lands around the world. Led by experienced spiritual teachers and guides, these tours combine physical travel with deep meditation, reflection, and spiritual practice. Participants experience profound inner peace, cultural immersion, and personal transformation.",
    highlights: [
      "Expert spiritual guides and experienced teachers",
      "Access to sacred sites and monasteries",
      "Daily meditation and spiritual practice sessions",
      "Cultural immersion and local community engagement",
      "Small group sizes for intimate experiences",
      "Comprehensive travel arrangements and support",
    ],
    howItWorks: [
      "Select sacred pilgrimage destinations worldwide",
      "Arrange transportation and accommodations",
      "Recruit and train spiritual guides",
      "Create daily schedules with meditation and visits",
      "Provide cultural education and spiritual teachings",
      "Support participants in their spiritual journey",
    ],
    targetAudience: "Spiritual seekers and individuals on a spiritual journey",
    fundingGoal: 250000,
    fundingRaised: 190000,
    beneficiaries: "2,000+ pilgrims annually",
  },
 
  {
    id: "monastic-education",
    icon: BookOpen,
    title: "Monastic Education",
    description: "In-depth spiritual and religious studies for monks and practitioners seeking enlightenment.",
    impact: "300+ monks educated",
    gradient: "from-[#FF8C00] to-[#F4C430]",
    banner: "/monks-in-monastery-studying-sacred-texts.jpg",
    fullDescription:
      "Our Monastic Education Program supports the deep spiritual and religious studies of monks and dedicated practitioners. We provide resources, facilities, and expert teachings to help students advance their understanding of spiritual traditions and pursue enlightenment.",
    highlights: [
      "Comprehensive spiritual curriculum",
      "Access to sacred texts and resources",
      "Guidance from senior teachers and gurus",
      "Meditation and contemplative practices",
      "Community learning environment",
      "Scholarship and financial support",
    ],
    howItWorks: [
      "Establish monastic learning centers",
      "Recruit qualified spiritual teachers",
      "Develop comprehensive curriculum",
      "Provide scholarships to students",
      "Create supportive learning environment",
      "Support continued spiritual development",
    ],
    targetAudience: "Monks and dedicated spiritual practitioners",
    fundingGoal: 200000,
    fundingRaised: 120000,
    beneficiaries: "300+ monks",
  },
  
]

export const getProgramById = (id: string): Program | undefined => {
  return programs.find((program) => program.id === id)
}
