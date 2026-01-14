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
    id: "free-education",
    icon: GraduationCap,
    title: "Free Education",
    description:
      "Providing quality education to disadvantaged children, helping them break cycles of poverty and build brighter futures.",
    impact: "5,000+ children enrolled annually",
    gradient: "from-[#1E90FF] to-[#3CB371]",
    banner: "/classroom-learning.png",
    fullDescription:
      "Our Free Education Program is dedicated to providing access to quality education for underprivileged children across rural and urban areas. We believe that education is a fundamental right and a powerful tool for social transformation. Through our comprehensive curriculum, trained educators, and modern learning resources, we ensure every child has the opportunity to learn, grow, and achieve their dreams.",
    highlights: [
      "Free quality education for underprivileged children",
      "Trained and dedicated educators",
      "Modern curriculum and learning materials",
      "Scholarship programs for higher education",
      "Community engagement and family support",
      "Digital literacy programs",
    ],
    howItWorks: [
      "Identify communities with limited educational access",
      "Establish learning centers with basic infrastructure",
      "Recruit and train qualified educators",
      "Provide free curriculum and educational materials",
      "Monitor student progress and provide mentorship",
      "Support transition to formal schools and higher education",
    ],
    targetAudience: "Children aged 5-18 from disadvantaged backgrounds",
    fundingGoal: 500000,
    fundingRaised: 325000,
    beneficiaries: "5,000+ children",
  },
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
    title: "Pilgrimage Tours",
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
    id: "medical-support",
    icon: HeartPulse,
    title: "Medical Support",
    description: "We raise funds to help individuals battling life-threatening health conditions with critical care.",
    impact: "$500K+ raised for medical aid",
    gradient: "from-[#CD5C5C] to-[#FF8C00]",
    banner: "/medical-healthcare-hospital-support.jpg",
    fullDescription:
      "Our Medical Support Program provides emergency and critical medical assistance to individuals facing life-threatening health conditions. We raise funds to cover expensive treatments, surgeries, and ongoing medical care that would otherwise be inaccessible to those in need.",
    highlights: [
      "Emergency medical fund assistance",
      "Critical surgery and treatment support",
      "Ongoing medication and healthcare costs",
      "Awareness and health education programs",
      "Partnership with hospitals and clinics",
      "Follow-up care and rehabilitation support",
    ],
    howItWorks: [
      "Identify individuals with critical medical needs",
      "Assess medical condition and treatment requirements",
      "Calculate funding needed and create campaigns",
      "Raise funds through community and donor support",
      "Coordinate with medical facilities",
      "Monitor patient recovery and provide follow-up care",
    ],
    targetAudience: "Individuals facing life-threatening health conditions",
    fundingGoal: 750000,
    fundingRaised: 500000,
    beneficiaries: "$500K+ raised",
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
  {
    id: "women-empowerment",
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development programs empowering women to achieve financial independence and leadership.",
    impact: "1,500+ women trained",
    gradient: "from-[#DAA520] to-[#CD5C5C]",
    banner: "/women-in-skill-training-workshop-empowerment.jpg",
    fullDescription:
      "Our Women Empowerment Program focuses on equipping women with practical skills, knowledge, and confidence to achieve financial independence and leadership roles. Through vocational training, business education, and mentorship, we help women transform their lives and communities.",
    highlights: [
      "Vocational skill training programs",
      "Business and entrepreneurship education",
      "Financial literacy and management",
      "Mentorship from successful women leaders",
      "Access to microfinance and loans",
      "Support networks and community groups",
    ],
    howItWorks: [
      "Identify women seeking skill development",
      "Assess needs and interests",
      "Provide vocational training",
      "Teach business and financial skills",
      "Facilitate mentorship relationships",
      "Support income generation activities",
    ],
    targetAudience: "Women from underprivileged backgrounds seeking economic independence",
    fundingGoal: 400000,
    fundingRaised: 275000,
    beneficiaries: "1,500+ women",
  },
]

export const getProgramById = (id: string): Program | undefined => {
  return programs.find((program) => program.id === id)
}
