"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  Heart,
  Award,
  Crown,
  Star,
  Shield,
  Gem,
  Building2,
  Copy,
  Check,
  Upload,
  ChevronRight,
  Globe,
  Tv,
  Waves,
  Sparkles,
  Users,
  Utensils,
  Building,
  Stethoscope,
  Truck,
  Megaphone,
  HandCoins,
  Package,
  Droplets,
  Flame,
  HeartHandshake,
  Handshake,
} from "lucide-react"
import PremiumHeader from "@/components/layout/PremiumHeader"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import emailjs from "@emailjs/browser"

// ── EmailJS Credentials ────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_j5pdf6r"
const EMAILJS_TEMPLATE_ID = "template_jwarnnq"
const EMAILJS_PUBLIC_KEY = "BHi9kLrnCu3kzGgyW"

// ── Decorative SVG ────────────────────────────────────────────────────────────
const DharmaWheel = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />
    <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180
      const x1 = 50 + 8 * Math.cos(angle)
      const y1 = 50 + 8 * Math.sin(angle)
      const x2 = 50 + 44 * Math.cos(angle)
      const y2 = 50 + 44 * Math.sin(angle)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    })}
    <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
  </svg>
)

// ── Refined 6-Tier Sponsorship Structure ─────────────────────────────────────
type SponsorTier = {
  level: number
  type: string
  positioning: string
  icon: React.ElementType
  color: string
  exclusivity: string
  benefits: string[]
}

const SPONSOR_TIERS: SponsorTier[] = [
  {
    level: 1,
    type: "Title Sponsor",
    positioning: "Exclusive Global Recognition",
    icon: Crown,
    color: "from-[#FFD700] to-[#FF8C00]",
    exclusivity: "Exclusive — 1 Only",
    benefits: [
      "Exclusive event naming rights across all platforms",
      "Top-tier logo placement on all branding materials",
      "Prime visibility on main stage & altar backdrop",
      "Extensive coverage on Dharma Television",
      "Speaking opportunity at opening & closing ceremonies",
      "VIP access & protocol recognition",
      "Dedicated documentary feature highlighting your brand impact",
    ],
  },
  {
    level: 2,
    type: "Powered By Sponsor",
    positioning: "Premium Brand Visibility",
    icon: Sparkles,
    color: "from-[#F4C430] to-[#FF8C00]",
    exclusivity: "Limited — 2 to 3 Only",
    benefits: [
      "Prominent second-tier logo placement",
      "Branding across event banners, website, and social media",
      "Inclusion in major announcements & campaigns",
      "Exhibition booth / display space",
      "Featured presence in media coverage",
    ],
  },
  {
    level: 3,
    type: "Co-Sponsor",
    positioning: "Strong Exposure & Engagement",
    icon: Star,
    color: "from-[#DAA520] to-[#F4C430]",
    exclusivity: "Multiple Available",
    benefits: [
      "Medium-level logo placement",
      "Mentions in selected promotional materials",
      "On-site branding (banners, standees)",
      "Recognition across digital platforms & social media",
    ],
  },
  {
    level: 4,
    type: "Associate Sponsor",
    positioning: "Supporting Partnership",
    icon: Shield,
    color: "from-[#CD853F] to-[#DAA520]",
    exclusivity: "Open Tier",
    benefits: [
      "Logo placement on posters & official website",
      "Limited media mentions",
      "Formal event acknowledgment",
      "Mentioned 'In Association With [Sponsor Name]'",
    ],
  },
  {
    level: 5,
    type: "Partner Sponsor",
    positioning: "Collaborative Engagement",
    icon: Handshake,
    color: "from-[#B8860B] to-[#CD853F]",
    exclusivity: "Open Tier",
    benefits: [
      "Logo listing in 'Our Partners' section",
      "Website recognition",
      "Access to networking opportunities",
      "Community collaboration features",
    ],
  },
  {
    level: 6,
    type: "Supported By Sponsor",
    positioning: "Accessible Contribution Level",
    icon: HeartHandshake,
    color: "from-[#DEB887] to-[#B8860B]",
    exclusivity: "Open to All",
    benefits: [
      "Name / logo acknowledgment",
      "Certificate of appreciation",
      "Recognition in gratitude posts & communications",
    ],
  },
]

// ── Events ───────────────────────────────────────────────────────────────────
const EVENTS = [
  {
    id: "weekly-retreat",
    name: "Weekly 2-Day Free Retreat Program",
    tagline: "52 Weeks · Every Saturday & Sunday",
    period: "May 31, 2026 – May 14, 2027",
    location: "BTMC, Jorpati, Kathmandu, Nepal",
    description:
      "A year-long weekly sanctuary for meditation, mindfulness, and authentic Buddhist practice. ~300 participants per week — 15,600 yearly — across six customized courses for students, professionals, families, and seekers worldwide.",
    raised: 0,
    goal: 500000,
    image: "https://images.unsplash.com/photo-1607827448387-a67db6201026?w=1200&q=80",
    stats: [
      { label: "Weeks", value: "52" },
      { label: "Days/Week", value: "2" },
      { label: "Avg/Week", value: "300" },
      { label: "Yearly Reach", value: "15,600" },
    ],
  },
  {
    id: "ngyungne-retreat",
    name: "3rd International Ngyungne Retreat 2026",
    tagline: "17 Sacred Days · 700 Practitioners Daily",
    period: "December 8 – 24, 2026",
    location: "Jorpati, Kathmandu, Nepal",
    description:
      "An internationally recognized spiritual gathering bringing together thousands of practitioners across 17 days of intensive compassion and wisdom practice, peace dialogues, and global spiritual engagement.",
    raised: 0,
    goal: 1000000,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80",
    stats: [
      { label: "Days", value: "17" },
      { label: "Daily Reach", value: "700" },
      { label: "Total Volume", value: "11,900" },
      { label: "Countries", value: "20+" },
    ],
  },
] as const

type EventId = (typeof EVENTS)[number]["id"]

// ── Membership Tiers ─────────────────────────────────────────────────────────
const MEMBERSHIP_TIERS = [
  {
    name: "1 Year Dharma Ideal Sponsor",
    shortName: "Annual Sponsor",
    duration: "1-Year Commitment",
    priceINR: "10,000",
    priceNPR: "15,999",
    priceForeign: "$100",
    icon: Star,
    color: "from-[#DAA520] to-[#CD853F]",
    commitment: "Follows the principles of morality, concentration, and wisdom. Upholds the five precepts: abstaining from alcohol, avoiding violence, not stealing, not lying, and refraining from sexual misconduct.",
    features: [
      "Official Badge (Pin) & Identity Card",
      "Digital Certificate of Sponsorship",
      "Invitations to programs & updates",
      "Spiritual guidance & teachings",
      "Meditation & practice training",
      "Access to teaching videos",
    ],
  },
  {
    name: "Dharma Ideal Decade Sponsor",
    shortName: "Decade Sponsor",
    duration: "10-Year Commitment",
    priceINR: "1,00,000",
    priceNPR: "1,59,999",
    priceForeign: "$1,000",
    icon: Award,
    color: "from-[#F4C430] to-[#DAA520]",
    featured: true,
    commitment: "A decade-long dedication to the campaign's mission and values, ensuring continuity and significant contributions over an extended period.",
    features: [
      "All 1-Year Sponsor benefits",
      "Appreciation letter from leadership",
      "Half Gold-Plated Sacred Statue",
      "Premium recognition in the campaign",
      "Priority event invitations",
      "Dedicated spiritual coordinator",
    ],
  },
  {
    name: "Dharma Ideal Gem Life Sponsor",
    shortName: "Gem Life Sponsor",
    duration: "Lifetime Commitment",
    priceINR: "5,00,000",
    priceNPR: "7,99,999",
    priceForeign: "$4,500",
    icon: Gem,
    color: "from-[#FF8C00] to-[#F4C430]",
    commitment: "Lifelong dedication representing an unwavering commitment to the campaign's mission — ensuring a lasting legacy in fostering global peace and harmony.",
    features: [
      "All Decade Sponsor benefits",
      "Special recognition in pujas & ceremonies",
      "Honor certificate from Masters",
      "Personal guidance from spiritual masters",
      "Personal/Family Documentary Production",
      "Three Gold-Plated Sacred Statues",
      "Naming opportunities in key programs",
    ],
  },
  {
    name: "Corporate Premium Life Sponsor",
    shortName: "Corporate Sponsor",
    duration: "Lifetime Corporate Partnership",
    priceINR: "20,99,999",
    priceNPR: "33,00,000",
    priceForeign: "$21,999",
    icon: Building2,
    color: "from-[#FFD700] to-[#FF8C00]",
    commitment: "All staff are jointly engaged in holistic spiritual, educational, and wellness programs — reflecting a long-term dedication to the welfare of human civilization.",
    features: [
      "All Gem Sponsor benefits",
      "Special seating in TV reality shows",
      "Corporate Premium Honor Certificate",
      "Corporate guidance lifetime",
      "Executive Brand Story Production",
      "Corporate badge (premium pin)",
      "Five gold-plated Personal Deity statues",
      "Special Lucky Sutra (sacred book)",
    ],
  },
]

// ── Donation Master Plan (per-event support requirements) ────────────────────
const DONATION_SUPPORT_AREAS = [
  {
    icon: Utensils,
    title: "Food & Kitchen Operations",
    color: "from-[#FF8C00] to-[#F4C430]",
    summary: "Bulk meals for 700 practitioners daily during Ngyungne; ~300 per weekend retreat.",
    items: [
      "Rice 140–160 kg/day",
      "Lentils 35–40 kg/day",
      "Vegetables 180–220 kg/day",
      "Flour 120 kg/day",
      "Cooking oil 25–30 L/day",
      "Milk & tea 120 L/day",
      "Fruits 150–200 kg/day",
      "Drinking water 4,000–5,000 L/day",
      "Industrial gas stoves, vessels, rice cookers, refrigerators",
      "1,000 sets of plates/bowls/cups & dishwashing setup",
    ],
  },
  {
    icon: Building,
    title: "Accommodation & Sanitation",
    color: "from-[#F4C430] to-[#DAA520]",
    summary: "Shelter, sleep gear, hygiene & water for 1,000+ residents.",
    items: [
      "1,000 sleeping mats & 1,000 blankets",
      "700 pillows",
      "30+ portable toilets (1 per 25 people)",
      "Bathing units & handwash stations",
      "100+ segregated waste bins",
      "Daily cleaning staff & disinfectants",
      "Water tanks & plumbing setup",
    ],
  },
  {
    icon: Sparkles,
    title: "Practice Materials",
    color: "from-[#DAA520] to-[#CD853F]",
    summary: "Sacred essentials for 1,500+ practitioners.",
    items: [
      "1,400 sets of white robes",
      "1,500 mala beads",
      "1,500 prayer books / Ngyungne texts",
      "Incense sticks (bulk cartons)",
      "Butter lamps (thousands for daily offerings)",
      "Butter oil / ghee — 200–300 L total",
      "300 sets of offering bowls (7-piece)",
      "Puja altar setup — main + secondary altars",
      "Amitabha Buddha statues / thangkas",
    ],
  },
  {
    icon: Stethoscope,
    title: "Health, Safety & Security",
    color: "from-[#CD853F] to-[#B8860B]",
    summary: "Medical care, fire safety, and 24/7 security operations.",
    items: [
      "20+ first aid kits & on-site medical team",
      "Ambulance standby (24/7) during major retreat",
      "Basic medicines, ORS, fasting support",
      "Health check desk",
      "Fire extinguishers (kitchen + tents)",
      "Emergency exits, signage, crowd-control barriers",
      "Day/night security personnel",
      "CCTV (recommended)",
    ],
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    color: "from-[#B8860B] to-[#DAA520]",
    summary: "Movement of people and supplies in and out of the venue.",
    items: [
      "Airport pickup & drop vehicles",
      "Daily shuttle buses",
      "Supply trucks (food & materials)",
      "Volunteer transport coordination",
      "Fuel budget (diesel / petrol)",
    ],
  },
  {
    icon: Megaphone,
    title: "Media, Publicity & Documentation",
    color: "from-[#FF8C00] to-[#FFD700]",
    summary: "Promotion, livestreaming, and Dharma TV coverage.",
    items: [
      "Social media campaigns",
      "Website & registration system",
      "Posters, banners, flex printing",
      "International outreach (travel partners)",
      "6–9 video cameras + tripods, mics, lighting",
      "Live streaming setup",
      "Editing team & software",
      "Documentary production",
    ],
  },
  {
    icon: Users,
    title: "Human Resources & Volunteers",
    color: "from-[#F4C430] to-[#FF8C00]",
    summary: "Trained teams running every operation.",
    items: [
      "10–15 cooks + 20 helpers",
      "Retreat coordinators & spiritual assistants",
      "Registration desk staff",
      "15–20 cleaning staff",
      "10–15 security personnel",
      "Medical team",
    ],
  },
  {
    icon: Package,
    title: "General Equipment & Supplies",
    color: "from-[#DAA520] to-[#FF8C00]",
    summary: "Infrastructure powering the retreat.",
    items: [
      "Registration desks, chairs, tables",
      "Sound system (PA, speakers, mics)",
      "Generator / power backup",
      "Lighting system & extension cables",
      "Stationery (forms, pens, ID cards)",
      "Signage boards",
    ],
  },
  {
    icon: Droplets,
    title: "Daily Consumables",
    color: "from-[#CD853F] to-[#F4C430]",
    summary: "Continuous supplies that keep operations running.",
    items: [
      "Drinking water (bulk tanker supply)",
      "Tissue paper / toilet rolls",
      "Cleaning liquids & disinfectants",
      "Soap, sanitizer",
      "Garbage bags (large quantities)",
    ],
  },
]

// ── Sponsor services (kept) ──────────────────────────────────────────────────
const SPONSOR_SERVICES = [
  {
    icon: Tv,
    title: "Dharma Television Services",
    subtitle: "Stay Connected, Inspired & Informed",
    items: [
      "Special greetings on Buddha Jayanti, Lhosar & sacred occasions",
      "Personalized birthday, congratulations & condolence broadcasts",
      "Family-focused pujas for health, longevity & prosperity",
      "Memorial prayer broadcasts for departed loved ones",
      "Access to teaching videos & spiritual courses",
      "Guided meditation videos for daily practice",
    ],
  },
  {
    icon: Waves,
    title: "BTMC Spiritual & Healing Services",
    subtitle: "Experience Deep Transformation & Inner Peace",
    items: [
      "New Year Special Pujas for removing obstacles",
      "Wish-fulfilling & obstacle-clearing rituals",
      "Personal & family deity (Yidam) practices",
      "Wealth & prosperity (Yang) pujas",
      "Rituals for ancestors and departed souls (49-day prayers)",
      "Buddhist astrology consultation",
    ],
  },
  {
    icon: Globe,
    title: "Integrated Services (Dharma TV + BTMC)",
    subtitle: "Learn, Practice & Grow Globally",
    items: [
      "Introduction to Buddhism & spiritual philosophy",
      "Teachings on Buddhist festivals & sacred days",
      "Training in Ngöndro, Nyungne & advanced practices",
      "Structured courses from basic to advanced levels",
      "Access to exclusive teaching & practice videos",
      "Guidance on Yidam & protector deity practices",
    ],
  },
  {
    icon: Sparkles,
    title: "Global Events & Campaign Activities",
    subtitle: "Be Part of a Worldwide Movement",
    items: [
      "Grand celebrations: Buddha Jayanti & Dharma Events",
      "Nationwide spiritual festivals with lighting & rituals",
      "Global peace campaigns & awareness programs",
      "Organized membership with identity cards & uniforms",
      "International Ngyungne Retreat participation",
      "World Peace Prayers for conflict zones",
    ],
  },
]

// ── Bank Details ──────────────────────────────────────────────────────────────
function BankDetails() {
  const [copied, setCopied] = useState("")

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(""), 2000)
  }

  const CopyBtn = ({ text, label }: { text: string; label: string }) => (
    <button type="button" onClick={() => handleCopy(text, label)} className="text-[#F4C430] hover:text-[#DAA520] flex-shrink-0">
      {copied === label ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  )

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-5 border border-[#F4C430]/30">
        <h4 className="font-serif text-base font-bold text-[#333333] mb-3 flex items-center gap-2">
          🇳🇵 Nepal — Bank Transfer
        </h4>
        <p className="text-xs text-[#7A5200] mb-3 font-medium">Prabhu Bank · Boudha Branch</p>
        <div className="space-y-2">
          {[
            { label: "Account Name", value: "B.T.M.C. Foundation" },
            { label: "Account No.", value: "0570155982700014" },
            { label: "Bank", value: "Prabhu Bank (Boudha Branch)" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-[#7A5200] mb-1">{item.label}</p>
              <div className="flex items-center justify-between bg-[#FFF8E7] p-2.5 rounded-lg border border-[#F4C430]/20">
                <p className="font-semibold text-[#333333] text-sm">{item.value}</p>
                <CopyBtn text={item.value} label={`np-${item.label}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-[#F4C430]/30">
        <h4 className="font-serif text-base font-bold text-[#333333] mb-3 flex items-center gap-2">
          🇮🇳 India — Bank Transfer
        </h4>
        <p className="text-xs text-[#7A5200] mb-3 font-medium">Bank of India · Salugara, Siliguri</p>
        <div className="space-y-2">
          {[
            { label: "Account Name", value: "BTMC Foundation" },
            { label: "Account No.", value: "50782011000314" },
            { label: "IFSC Code", value: "BKID0005078" },
            { label: "Branch", value: "Salugara, Siliguri" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-[#7A5200] mb-1">{item.label}</p>
              <div className="flex items-center justify-between bg-[#FFF8E7] p-2.5 rounded-lg border border-[#F4C430]/20">
                <p className="font-semibold text-[#333333] text-sm">{item.value}</p>
                <CopyBtn text={item.value} label={`in-${item.label}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Donation Form ─────────────────────────────────────────────────────────────
function DonationFormDialog({ open, onOpenChange, title }: { open: boolean; onOpenChange: (v: boolean) => void; title: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", amount: "", message: "" })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSendError("")
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        form_type: "Donation", name: formData.name, email: formData.email,
        phone: formData.phone, amount: formData.amount, message: formData.message || "N/A",
        cause: title, organization: "N/A", address: "N/A", tier_name: "N/A",
        price_inr: "N/A", price_npr: "N/A", sponsor_type: "N/A", event_name: "N/A",
        time: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }),
      }, EMAILJS_PUBLIC_KEY)
      setSubmitted(true)
    } catch {
      setSendError("Something went wrong. Please try again.")
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", amount: "", message: "" })
    setScreenshot(null)
    setSubmitted(false)
    setSendError("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">Donate — {title}</DialogTitle>
          <DialogDescription className="text-[#7A5200]">Make a donation via bank transfer and submit your payment details below.</DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label className="text-[#333333]">Full Name *</Label><Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
              <div><Label className="text-[#333333]">Email *</Label><Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label className="text-[#333333]">Phone</Label><Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
              <div><Label className="text-[#333333]">Amount *</Label><Input type="number" required min="1" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
            </div>
            <div><Label className="text-[#333333]">Message (optional)</Label><Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" rows={3} /></div>
            <BankDetails />
            <div>
              <Label className="text-[#333333] font-semibold">Upload Payment Screenshot *</Label>
              <div className="mt-2 border-2 border-dashed border-[#F4C430]/40 rounded-xl p-6 text-center hover:border-[#F4C430] transition-colors relative">
                <Upload className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                <p className="text-sm text-[#7A5200] mb-2">{screenshot ? screenshot.name : "Click to upload or drag and drop"}</p>
                <input type="file" accept="image/*" required onChange={(e) => setScreenshot(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>
            <Button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white hover:from-[#F4C430] hover:to-[#DAA520] py-6 text-lg">
              <Heart className="w-5 h-5 mr-2" />{sending ? "Sending..." : "Submit Donation"}
            </Button>
            {sendError && <p className="text-sm text-red-600 text-center">{sendError}</p>}
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">Thank You!</h3>
            <p className="text-[#7A5200] mb-6">Your donation has been recorded. We will verify your payment and update accordingly. May your generosity bring merit and blessings.</p>
            <Button onClick={handleReset} className="gradient-gold text-white border-0">Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Sponsor Form ──────────────────────────────────────────────────────────────
function SponsorFormDialog({ open, onOpenChange, eventName, sponsorType }: { open: boolean; onOpenChange: (v: boolean) => void; eventName: string; sponsorType: string }) {
  const [formData, setFormData] = useState({ name: "", organization: "", email: "", phone: "", address: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSendError("")
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        form_type: "Event Sponsorship Application", name: formData.name, email: formData.email,
        phone: formData.phone, organization: formData.organization || "N/A",
        address: formData.address || "N/A", message: formData.message || "N/A",
        event_name: eventName, sponsor_type: sponsorType, cause: "N/A", amount: "N/A",
        tier_name: "N/A", price_inr: "N/A", price_npr: "N/A",
        time: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }),
      }, EMAILJS_PUBLIC_KEY)
      setSubmitted(true)
    } catch {
      setSendError("Something went wrong. Please try again.")
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setFormData({ name: "", organization: "", email: "", phone: "", address: "", message: "" })
    setSubmitted(false)
    setSendError("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">Become {sponsorType}</DialogTitle>
          <DialogDescription className="text-[#7A5200]">For: {eventName}</DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label className="text-[#333333]">Full Name *</Label><Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
              <div><Label className="text-[#333333]">Organization</Label><Input value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label className="text-[#333333]">Email *</Label><Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
              <div><Label className="text-[#333333]">Phone *</Label><Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
            </div>
            <div><Label className="text-[#333333]">Address</Label><Input value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
            <div><Label className="text-[#333333]">Message (optional)</Label><Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" rows={3} /></div>
            <Button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white py-6 text-lg">
              {sending ? "Sending..." : "Submit Sponsorship Application"}
            </Button>
            {sendError && <p className="text-sm text-red-600 text-center">{sendError}</p>}
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">Application Submitted!</h3>
            <p className="text-[#7A5200] mb-6">Thank you for your interest in becoming {sponsorType} for {eventName}. We will review your application and get back to you soon.</p>
            <Button onClick={handleReset} className="gradient-gold text-white border-0">Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Membership Form ───────────────────────────────────────────────────────────
function MembershipFormDialog({ open, onOpenChange, tierName, priceINR, priceNPR }: { open: boolean; onOpenChange: (v: boolean) => void; tierName: string; priceINR: string; priceNPR: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", message: "" })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSendError("")
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        form_type: "Dharma Ideal Sponsor Membership", name: formData.name, email: formData.email,
        phone: formData.phone, address: formData.address || "N/A", message: formData.message || "N/A",
        tier_name: tierName, price_inr: priceINR, price_npr: priceNPR,
        cause: "N/A", amount: "N/A", organization: "N/A", sponsor_type: "N/A", event_name: "N/A",
        time: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }),
      }, EMAILJS_PUBLIC_KEY)
      setSubmitted(true)
    } catch {
      setSendError("Something went wrong. Please try again.")
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", address: "", message: "" })
    setScreenshot(null)
    setSubmitted(false)
    setSendError("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">Become {tierName}</DialogTitle>
          <DialogDescription className="text-[#7A5200]">INR {priceINR} / NPR {priceNPR}</DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label className="text-[#333333]">Full Name *</Label><Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
              <div><Label className="text-[#333333]">Email *</Label><Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label className="text-[#333333]">Phone *</Label><Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
              <div><Label className="text-[#333333]">Address</Label><Input value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" /></div>
            </div>
            <div><Label className="text-[#333333]">Message (optional)</Label><Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" rows={3} /></div>
            <div className="bg-white rounded-xl p-4 border border-[#F4C430]/20">
              <p className="text-sm font-semibold text-[#333333] mb-1">Amount to Pay:</p>
              <p className="text-lg font-bold bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">INR {priceINR} / NPR {priceNPR}</p>
            </div>
            <BankDetails />
            <div>
              <Label className="text-[#333333] font-semibold">Upload Payment Screenshot *</Label>
              <div className="mt-2 border-2 border-dashed border-[#F4C430]/40 rounded-xl p-6 text-center hover:border-[#F4C430] transition-colors relative">
                <Upload className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                <p className="text-sm text-[#7A5200] mb-2">{screenshot ? screenshot.name : "Click to upload or drag and drop"}</p>
                <input type="file" accept="image/*" required onChange={(e) => setScreenshot(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>
            <Button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white py-6 text-lg">
              {sending ? "Sending..." : "Submit Membership Application"}
            </Button>
            {sendError && <p className="text-sm text-red-600 text-center">{sendError}</p>}
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">Application Submitted!</h3>
            <p className="text-[#7A5200] mb-6">Thank you for becoming a {tierName}! We will verify your payment and activate your membership soon. May your commitment to Dharma bring peace and blessings.</p>
            <Button onClick={handleReset} className="gradient-gold text-white border-0">Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Event Sponsorship Block (per event) ──────────────────────────────────────
function EventSponsorshipBlock({
  event,
  onApply,
  onDonate,
}: {
  event: (typeof EVENTS)[number]
  onApply: (eventName: string, sponsorType: string) => void
  onDonate: (title: string) => void
}) {
  const progress = Math.round((event.raised / event.goal) * 100)

  return (
    <div id={event.id} className="scroll-mt-28 bg-white rounded-3xl overflow-hidden shadow-card border border-[#F4C430]/20">
      {/* Banner */}
      <div className="relative h-64 md:h-80">
        <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d00] via-[#1a0d00]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F4C430] text-[#1a0d00] text-xs font-bold uppercase tracking-wider mb-3">
            {event.tagline}
          </span>
          <h3 className="font-serif text-2xl md:text-4xl font-bold text-white">{event.name}</h3>
          <p className="text-white/80 mt-2 text-sm md:text-base">
            📅 {event.period} &nbsp;·&nbsp; 📍 {event.location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-10">
        <p className="text-[#7A5200] leading-relaxed mb-6">{event.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {event.stats.map((s) => (
            <div key={s.label} className="bg-gradient-to-br from-[#FFF8E7] to-white rounded-xl p-4 border border-[#F4C430]/20 text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">{s.value}</div>
              <div className="text-[#7A5200] text-xs font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Progress + Donate */}
        <div className="bg-[#FFF8E7] border border-[#F4C430]/20 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#7A5200] text-sm font-semibold">
                Raised: NPR {event.raised.toLocaleString()} / NPR {event.goal.toLocaleString()}
              </span>
              <span className="text-[#F4C430] font-bold text-sm">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] h-2.5 rounded-full"
                style={{ width: `${Math.max(progress, 2)}%` }}
              />
            </div>
          </div>
          <Button
            onClick={() => onDonate(event.name)}
            className="bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white border-0 flex-shrink-0"
          >
            <Heart className="w-4 h-4 mr-2" /> Donate to This Event
          </Button>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#F4C430] to-[#FF8C00]" />
            <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">Sponsorship Opportunities</span>
          </div>
          <h4 className="font-serif text-2xl md:text-3xl font-bold text-[#333333] mb-2">
            Six Partnership Levels
          </h4>
          <p className="text-[#7A5200] text-sm md:text-base">
            Choose the partnership tier that matches your brand goals and CSR objectives. Each level is designed for measurable visibility, global media exposure, and meaningful spiritual impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {SPONSOR_TIERS.map((tier) => (
            <button
              key={tier.type}
              onClick={() => onApply(event.name, tier.type)}
              className="group text-left rounded-2xl bg-[#FFF8E7] border-2 border-[#F4C430]/15 hover:border-[#F4C430] hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${tier.color}`} />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center group-hover:shadow-glow transition-shadow flex-shrink-0`}
                  >
                    <tier.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest mb-0.5">
                      Level {tier.level}
                    </div>
                    <h5 className="font-serif font-bold text-[#333333] text-base leading-tight">
                      {tier.type}
                    </h5>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#B8860B] mb-2 italic">{tier.positioning}</p>
                <p className="text-[11px] text-[#7A5200] mb-3">
                  <span className="inline-block bg-white border border-[#F4C430]/30 rounded-full px-2 py-0.5">
                    {tier.exclusivity}
                  </span>
                </p>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {tier.benefits.slice(0, 3).map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-[#7A5200] leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430] flex-shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                  {tier.benefits.length > 3 && (
                    <li className="text-[11px] italic text-[#B8860B] pl-3">
                      + {tier.benefits.length - 3} more benefits
                    </li>
                  )}
                </ul>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F4C430] group-hover:text-[#FF8C00] transition-colors mt-auto">
                  Apply Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
const SponsorPage = () => {
  const [sponsorForm, setSponsorForm] = useState<{ open: boolean; eventName: string; sponsorType: string }>({ open: false, eventName: "", sponsorType: "" })
  const [donationForm, setDonationForm] = useState<{ open: boolean; title: string }>({ open: false, title: "" })
  const [membershipForm, setMembershipForm] = useState<{ open: boolean; tierName: string; priceINR: string; priceNPR: string }>({ open: false, tierName: "", priceINR: "", priceNPR: "" })
  const [activeEventTab, setActiveEventTab] = useState<EventId>("weekly-retreat")
  const location = useLocation()

  // Smooth scroll to event when URL hash matches
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace("#", "")
    if (id === "weekly-retreat" || id === "ngyungne-retreat") {
      setActiveEventTab(id)
    }
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 200)
  }, [location.hash])

  const activeEvent = EVENTS.find((e) => e.id === activeEventTab)!

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── HERO ──────────────────────────────────────────────────────── */}
          <div className="relative text-center mb-16 py-12">
            <DharmaWheel className="absolute -top-16 -left-16 w-64 h-64 text-[#F4C430] opacity-10" />
            <DharmaWheel className="absolute -bottom-8 -right-16 w-48 h-48 text-[#FF8C00] opacity-10" />
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#F4C430]/15 text-[#B8860B] text-sm font-semibold tracking-widest uppercase mb-6 border border-[#F4C430]/25">
              Sponsorship Proposal
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-6 leading-tight">
              Partner with{" "}
              <span className="bg-gradient-to-r from-[#F4C430] via-[#FF8C00] to-[#DAA520] bg-clip-text text-transparent">
                Dharma Ideal
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#7A5200] max-w-3xl mx-auto leading-relaxed">
              <strong>Weekly 2-Day Free Retreat</strong> &nbsp;·&nbsp; <strong>3rd International Ngyungne Retreat 2026</strong>
            </p>
            <p className="text-sm md:text-base text-[#7A5200]/80 max-w-3xl mx-auto leading-relaxed mt-3">
              📍 Jorpati, Kathmandu, Nepal — bringing together thousands of practitioners worldwide for peace, compassion, and mindfulness.
            </p>
          </div>

          {/* ── INVITATION / VALUE STATEMENT ──────────────────────────────── */}
          <section className="mb-20">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#333333] to-[#1a0f00] relative p-8 md:p-12">
              <DharmaWheel className="absolute -top-16 -right-16 w-72 h-72 text-[#F4C430] opacity-10" />
              <div className="relative grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                    A Globally Respected{" "}
                    <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">
                      Humanitarian & Spiritual Mission
                    </span>
                  </h2>
                  <p className="text-white/75 leading-relaxed mb-4">
                    We respectfully invite esteemed organizations to partner with us as <strong className="text-white">Title Sponsor, Powered By Sponsor, Co-Sponsor, Associate Sponsor, Partner Sponsor,</strong> and <strong className="text-white">Supported By Sponsor</strong> for our Weekly 2-Day Free Retreat Program (52 weeks) and the 17-Day 3rd International Ngyungne Retreat 2026.
                  </p>
                  <p className="text-white/75 leading-relaxed">
                    Your partnership directly supports food, accommodation, healthcare, sanitation, and retreat facilities — while positioning your brand alongside <strong className="text-white">Dharma Television</strong> and our international outreach channels for measurable visibility, global media exposure, and meaningful engagement impact.
                  </p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                  {[
                    { value: "20+", label: "Countries" },
                    { value: "15K+", label: "Yearly Reach" },
                    { value: "17 Days", label: "Ngyungne 2026" },
                    { value: "52 Weeks", label: "Free Retreats" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-5 rounded-2xl bg-white/8 border border-white/10">
                      <div className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">{s.value}</div>
                      <div className="text-white/60 text-xs font-medium mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── SPONSORSHIP POSITIONING TABLE ─────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">🏆 Sponsorship Tiers & Benefits</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-3">
                Six Levels of <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Partnership</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                Each tier is designed for distinct levels of engagement, visibility, and impact — giving every partner a meaningful way to participate.
              </p>
            </div>

            {/* Positioning overview table */}
            <div className="bg-white rounded-3xl border border-[#F4C430]/20 overflow-hidden shadow-card mb-10">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-[#F4C430]/15 to-[#FF8C00]/10">
                    <tr className="text-left text-[#7A5200]">
                      <th className="px-5 py-4 font-bold">Level</th>
                      <th className="px-5 py-4 font-bold">Title</th>
                      <th className="px-5 py-4 font-bold">Positioning</th>
                      <th className="px-5 py-4 font-bold hidden md:table-cell">Exclusivity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SPONSOR_TIERS.map((tier) => (
                      <tr key={tier.type} className="border-t border-[#F4C430]/10 hover:bg-[#FFF8E7] transition-colors">
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r ${tier.color} text-white font-bold text-sm`}>
                            {tier.level}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-serif font-bold text-[#333333]">{tier.type}</td>
                        <td className="px-5 py-4 text-[#7A5200]">{tier.positioning}</td>
                        <td className="px-5 py-4 hidden md:table-cell text-[#B8860B] text-xs font-semibold italic">{tier.exclusivity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SPONSOR_TIERS.map((tier) => (
                <div
                  key={tier.type}
                  className="rounded-3xl bg-white border border-[#F4C430]/20 overflow-hidden shadow-card hover:shadow-glow hover:border-[#F4C430]/50 transition-all"
                >
                  <div className={`bg-gradient-to-r ${tier.color} px-6 py-5 relative`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <tier.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/85">Level {tier.level}</div>
                        <h3 className="font-serif text-lg font-bold text-white">{tier.type}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-[#B8860B] uppercase tracking-widest mb-1">Positioning</p>
                    <p className="text-[#333333] font-medium mb-4">{tier.positioning}</p>
                    <p className="text-[11px] text-[#7A5200] mb-4">
                      <span className="inline-block bg-[#FFF8E7] border border-[#F4C430]/30 rounded-full px-3 py-1">
                        {tier.exclusivity}
                      </span>
                    </p>
                    <p className="text-xs font-bold text-[#B8860B] uppercase tracking-widest mb-2">Key Benefits</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#7A5200] text-sm leading-relaxed">
                          <Check className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── EVENT SPONSORSHIPS (TABBED) ────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">🎯 Sponsorship by Event</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-3">
                Choose Your <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Event Partnership</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                Apply for any of the six tiers across our two flagship events. Each event has its own goals, branding moments, and impact opportunities.
              </p>
            </div>

            {/* Event tab selector */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              {EVENTS.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setActiveEventTab(event.id)}
                  className={`px-6 py-4 rounded-2xl font-serif font-bold transition-all duration-300 text-left ${
                    activeEventTab === event.id
                      ? "bg-gradient-to-r from-[#F4C430] to-[#FF8C00] text-white shadow-glow"
                      : "bg-white border border-[#F4C430]/30 text-[#333333] hover:border-[#F4C430] hover:bg-[#FFF8E7]"
                  }`}
                >
                  <div className="text-sm sm:text-base">{event.name}</div>
                  <div className={`text-xs font-normal mt-0.5 ${activeEventTab === event.id ? "text-white/85" : "text-[#7A5200]"}`}>
                    {event.tagline}
                  </div>
                </button>
              ))}
            </div>

            <EventSponsorshipBlock
              event={activeEvent}
              onApply={(eventName, sponsorType) => setSponsorForm({ open: true, eventName, sponsorType })}
              onDonate={(title) => setDonationForm({ open: true, title })}
            />
          </section>

          {/* ── DONATION SUPPORT MASTER PLAN ──────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">💝 Donation Support Master Plan</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-3">
                Where Your <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Donations Go</span>
              </h2>
              <p className="text-[#7A5200] max-w-3xl mx-auto leading-relaxed">
                A bulk support system covering food, logistics, health & safety, practice materials, and operations
                for both the weekly retreat (52 weeks · 15,600 yearly participants) and the 17-day Ngyungne Retreat
                (700 daily · 11,900 total). Choose any area to support.
              </p>
            </div>

            {/* Program overview cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <div className="bg-gradient-to-br from-[#FFF8E7] to-white rounded-2xl border border-[#F4C430]/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#F4C430] to-[#FF8C00] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#333333]">Weekly Retreat</h3>
                    <p className="text-xs text-[#7A5200]">May 31, 2026 → May 14, 2027</p>
                  </div>
                </div>
                <ul className="text-sm text-[#7A5200] space-y-1.5">
                  <li>📅 52 weeks × 2 days each</li>
                  <li>👥 ~300 participants per week (avg.)</li>
                  <li>🌍 Total yearly participants: <strong>15,600</strong></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#FFF8E7] to-white rounded-2xl border border-[#F4C430]/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#DAA520] flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#333333]">3rd International Ngyungne</h3>
                    <p className="text-xs text-[#7A5200]">December 8 – 24, 2026</p>
                  </div>
                </div>
                <ul className="text-sm text-[#7A5200] space-y-1.5">
                  <li>🕉️ 17 sacred days</li>
                  <li>👥 700 participants daily</li>
                  <li>🌍 Total participation volume: <strong>11,900</strong></li>
                </ul>
              </div>
            </div>

            {/* Support areas grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DONATION_SUPPORT_AREAS.map((area) => (
                <div
                  key={area.title}
                  className="bg-white rounded-2xl border border-[#F4C430]/20 overflow-hidden shadow-card hover:shadow-glow hover:border-[#F4C430]/50 transition-all flex flex-col"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${area.color}`} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center flex-shrink-0`}>
                        <area.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-serif text-base font-bold text-[#333333] leading-tight">{area.title}</h4>
                    </div>
                    <p className="text-xs text-[#B8860B] italic mb-3">{area.summary}</p>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#7A5200] leading-snug">
                          <div className="w-1 h-1 rounded-full bg-[#F4C430] flex-shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setDonationForm({ open: true, title: area.title })}
                      variant="outline"
                      className="w-full border-[#F4C430] text-[#B8860B] hover:bg-[#F4C430]/10 mt-auto"
                    >
                      <HandCoins className="w-4 h-4 mr-2" /> Support This Area
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#F4C430]/10 to-[#FF8C00]/10 border border-[#F4C430]/30 p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-[#333333] mb-3">Prefer a General Donation?</h3>
              <p className="text-[#7A5200] mb-6 max-w-2xl mx-auto">
                Make a single contribution and we'll allocate it where it's most needed across both programs.
              </p>
              <Button
                onClick={() => setDonationForm({ open: true, title: "General Support — Weekly Retreat & Ngyungne 2026" })}
                className="bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white border-0 px-8 py-6 text-lg"
              >
                <Heart className="w-5 h-5 mr-2" /> Make a General Donation
              </Button>
            </div>
          </section>

          {/* ── MEMBERSHIP TIERS ──────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">👥 Sponsor Membership</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-3">
                Become a <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Dharma Ideal Sponsor</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                Four membership tiers for individuals and corporates committed to global peace, spiritual growth, and lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {MEMBERSHIP_TIERS.map((tier, idx) => (
                <div key={idx} className={`relative group rounded-3xl overflow-hidden transition-all duration-300 ${tier.featured ? "shadow-2xl shadow-[#F4C430]/40 ring-2 ring-[#F4C430]" : "shadow-card"} hover:shadow-glow bg-white`}>
                  <div className={`bg-gradient-to-r ${tier.color} px-6 py-5 relative`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <tier.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-white leading-tight">{tier.name}</h3>
                        <p className="text-white/80 text-xs">{tier.duration}</p>
                      </div>
                    </div>
                    {tier.featured && (
                      <div className="absolute top-3 right-4 px-3 py-1 bg-white text-[#F4C430] text-xs font-bold rounded-full">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 bg-[#FFF8E7] rounded-lg px-3 py-1.5 border border-[#F4C430]/20">
                        <span className="text-xs text-[#7A5200] font-medium">🇮🇳 INR</span>
                        <span className="font-bold text-[#333333]">{tier.priceINR}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-[#FFF8E7] rounded-lg px-3 py-1.5 border border-[#F4C430]/20">
                        <span className="text-xs text-[#7A5200] font-medium">🇳🇵 NPR</span>
                        <span className="font-bold text-[#333333]">{tier.priceNPR}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-[#FFF8E7] rounded-lg px-3 py-1.5 border border-[#F4C430]/20">
                        <span className="text-xs text-[#7A5200] font-medium">🌍 USD</span>
                        <span className="font-bold text-[#333333]">{tier.priceForeign}</span>
                      </span>
                    </div>

                    <p className="text-[#7A5200] text-sm leading-relaxed mb-5 italic border-l-2 border-[#F4C430]/40 pl-3">
                      {tier.commitment}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-[#7A5200] text-sm">
                          <Heart className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => setMembershipForm({ open: true, tierName: tier.name, priceINR: tier.priceINR, priceNPR: tier.priceNPR })}
                      className={`w-full ${tier.featured ? "bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white border-0" : "border-2 border-[#F4C430] text-[#F4C430] bg-transparent hover:bg-[#F4C430]/10"} hover:shadow-glow`}
                    >
                      Become {tier.shortName}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SERVICES ─────────────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">✨ Services & Benefits</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-3">
                What Sponsors <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Receive</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                All sponsors gain access to these transformative spiritual and lifestyle programs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {SPONSOR_SERVICES.map((service, idx) => (
                <div key={idx} className="p-7 rounded-3xl bg-white border border-[#F4C430]/20 hover:border-[#F4C430]/45 hover:shadow-[0_8px_30px_rgba(244,196,48,0.12)] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#F4C430] to-[#FF8C00] flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-[#333333] text-lg">{service.title}</h3>
                  </div>
                  <p className="text-[#B8860B] text-sm font-medium mb-4 italic">🌟 {service.subtitle}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, iidx) => (
                      <li key={iidx} className="flex items-start gap-2 text-[#7A5200] text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#F4C430]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── CONCLUSION / CTA ─────────────────────────────────────────── */}
          <div className="rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/12 to-[#FF8C00]/10" />
            <div className="absolute inset-0 border border-[#F4C430]/30 rounded-3xl" />
            <DharmaWheel className="absolute -top-12 -right-12 w-56 h-56 text-[#F4C430] opacity-10" />
            <div className="relative p-10 md:p-16 text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Join a Transformational Global Movement
              </h2>
              <p className="text-[#7A5200] max-w-3xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
                By partnering with this initiative, your organization becomes part of a movement promoting <strong>inner peace, compassion, and humanitarian values</strong>. We welcome the opportunity to customize sponsorship packages aligned with your brand goals and CSR objectives.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => setDonationForm({ open: true, title: "Dharma Ideal Campaign" })} className="gradient-gold text-white border-0 hover:shadow-glow text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
                  <Heart className="w-5 h-5 mr-2" /> Donate Now
                </Button>
                <a href="https://wa.me/9779766883351" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#F4C430] text-[#B8860B] hover:bg-[#F4C430]/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
                    💬 Customize Your Package
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dialogs ───────────────────────────────────────────────────────── */}
      <SponsorFormDialog open={sponsorForm.open} onOpenChange={(v) => setSponsorForm({ ...sponsorForm, open: v })} eventName={sponsorForm.eventName} sponsorType={sponsorForm.sponsorType} />
      <DonationFormDialog open={donationForm.open} onOpenChange={(v) => setDonationForm({ ...donationForm, open: v })} title={donationForm.title} />
      <MembershipFormDialog open={membershipForm.open} onOpenChange={(v) => setMembershipForm({ ...membershipForm, open: v })} tierName={membershipForm.tierName} priceINR={membershipForm.priceINR} priceNPR={membershipForm.priceNPR} />

      <Footer />
    </main>
  )
}

export default SponsorPage
