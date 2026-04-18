"use client"

import { useState } from "react"
import {
  Heart,
  Award,
  Users,
  TrendingUp,
  Zap,
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
  BookOpen,
  Tv,
  Waves,
  Church,
  Sparkles,
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

// ── Data ──────────────────────────────────────────────────────────────────────
const EVENTS = [
  {
    id: "weekly-retreat",
    name: "Weekly 2-Day Free Retreat",
    tagline: "Every Saturday & Sunday — Starting 14th May",
    description:
      "Join our weekly retreat sessions at BTMC, Jorpati, Kathmandu. Focused on mindfulness, meditation, healing, and spiritual growth — serving students, professionals, and business individuals globally with six customized courses.",
    raised: 0,
    goal: 500000,
    image: "https://images.unsplash.com/photo-1607827448387-a67db6201026?w=800&q=80",
    sponsorTypes: [
      { type: "Title Sponsor", icon: Crown, color: "from-[#FFD700] to-[#FF8C00]", description: "Primary branding across all retreat materials, banners, and digital platforms" },
      { type: "Sponsor", icon: Star, color: "from-[#F4C430] to-[#DAA520]", description: "Featured recognition in all retreat communications and publications" },
      { type: "Co-Sponsor", icon: Shield, color: "from-[#DAA520] to-[#CD853F]", description: "Shared branding with other co-sponsors across retreat materials" },
      { type: "Powered By Sponsor", icon: Zap, color: "from-[#FF8C00] to-[#F4C430]", description: "'Powered by' tag on select retreat sessions and broadcasts" },
      { type: "Supporting Sponsor", icon: Heart, color: "from-[#CD853F] to-[#DEB887]", description: "Acknowledgement in retreat programs, website, and social channels" },
    ],
  },
  {
    id: "ngyungne-retreat",
    name: "3rd International Ngyungne Retreat",
    tagline: "Annual Sacred Practice — Kathmandu, Nepal",
    description:
      "The prestigious 3rd International Ngyungne Retreat brings together practitioners from around the world for 17 days of intensive compassion and wisdom practice, peace dialogues, and community spiritual engagement.",
    raised: 0,
    goal: 1000000,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    sponsorTypes: [
      { type: "Title Sponsor", icon: Crown, color: "from-[#FFD700] to-[#FF8C00]", description: "Primary branding across all international retreat materials and events" },
      { type: "Sponsor", icon: Star, color: "from-[#F4C430] to-[#DAA520]", description: "Featured recognition across all retreat communications globally" },
      { type: "Co-Sponsor", icon: Shield, color: "from-[#DAA520] to-[#CD853F]", description: "Shared branding on international retreat platforms" },
      { type: "Powered By Sponsor", icon: Zap, color: "from-[#FF8C00] to-[#F4C430]", description: "'Powered by' tag on select retreat broadcasts and sessions" },
      { type: "Supporting Sponsor", icon: Heart, color: "from-[#CD853F] to-[#DEB887]", description: "Acknowledged in programs, website, and international communications" },
    ],
  },
]

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
    emoji: "🌟",
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
    emoji: "💎",
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
    emoji: "👑",
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
    emoji: "🏢",
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

// ── Services offered to all sponsors ─────────────────────────────────────────
const SPONSOR_SERVICES = [
  {
    icon: Tv,
    emoji: "🎥",
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
    emoji: "🧘",
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
    emoji: "🤝",
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
    emoji: "🌟",
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

const SAMPLE_SPONSORS: { name: string; photo: string }[] = []

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
      {/* Nepal */}
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

      {/* India */}
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
    } catch (error) {
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
    } catch (error) {
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
    } catch (error) {
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

// ── Main Page ─────────────────────────────────────────────────────────────────
const SponsorPage = () => {
  const [sponsorForm, setSponsorForm] = useState<{ open: boolean; eventName: string; sponsorType: string }>({ open: false, eventName: "", sponsorType: "" })
  const [donationForm, setDonationForm] = useState<{ open: boolean; title: string }>({ open: false, title: "" })
  const [membershipForm, setMembershipForm] = useState<{ open: boolean; tierName: string; priceINR: string; priceNPR: string }>({ open: false, tierName: "", priceINR: "", priceNPR: "" })
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── HERO ──────────────────────────────────────────────────────── */}
          <div className="relative text-center mb-20 py-12">
            <DharmaWheel className="absolute -top-16 -left-16 w-64 h-64 text-[#F4C430] opacity-10" />
            <DharmaWheel className="absolute -bottom-8 -right-16 w-48 h-48 text-[#FF8C00] opacity-10" />
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#F4C430]/15 text-[#B8860B] text-sm font-semibold tracking-widest uppercase mb-6 border border-[#F4C430]/25">
              Join the Movement
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#333333] mb-6 leading-tight">
              Become a{" "}
              <span className="bg-gradient-to-r from-[#F4C430] via-[#FF8C00] to-[#DAA520] bg-clip-text text-transparent">
                Dharma Ideal
              </span>
              <br />
              Sponsor
            </h1>
            <p className="text-xl text-[#7A5200] max-w-3xl mx-auto leading-relaxed">
              Partner with Dharma Ideal Campaign to create meaningful, lasting impact. Your support fuels
              authentic Buddhist teachings, world peace programs, and spiritual transformation for thousands.
            </p>
          </div>

          {/* ── WHY JOIN ──────────────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#333333] to-[#1a0f00] relative p-10 md:p-14">
              <DharmaWheel className="absolute -top-16 -right-16 w-64 h-64 text-[#F4C430] opacity-10" />
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="font-serif text-4xl font-bold text-white mb-5">
                    🚀 Why Join Dharma Ideal Campaign?
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Human civilization has endured remarkable milestones over millennia. These achievements are at risk
                    due to destructive tendencies — arrogance, egoism, and pride — that drive conflicts. Dharma Ideal
                    Campaign is dedicated to safeguarding peace for all generations.
                  </p>
                  <div className="space-y-3">
                    {[
                      "✔️ Authentic Buddhist teachings",
                      "✔️ Holistic life transformation",
                      "✔️ Global spiritual network",
                      "✔️ Free & accessible programs",
                      "✔️ Contribute to world peace",
                    ].map((item, idx) => (
                      <div key={idx} className="text-white/90 font-medium">{item}</div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: "🌏", value: "20+", label: "Countries Served" },
                    { emoji: "⏳", value: "15+", label: "Years of Service" },
                    { emoji: "🤝", value: "400+", label: "Active Members" },
                    { emoji: "✨", value: "721K+", label: "Lives Touched" },
                  ].map((s, idx) => (
                    <div key={idx} className="text-center p-5 rounded-2xl bg-white/8 border border-white/10">
                      <div className="text-3xl mb-1">{s.emoji}</div>
                      <div className="font-serif text-3xl font-bold bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">{s.value}</div>
                      <div className="text-white/60 text-xs font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── MEMBERSHIP PROCESS ────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-serif text-4xl font-bold text-[#333333] mb-3">
                Membership <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-[#7A5200] max-w-xl mx-auto">Simple steps to begin your Dharma Ideal journey</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", icon: "📋", title: "Complete KYDI Form", desc: "Fill in the Know Your Dharma Ideal (KYDI) form with two passport-sized photos and a photocopy of your citizenship or any valid ID." },
                { step: "02", icon: "💳", title: "Pay Sponsorship Fee", desc: "Deposit the specified sponsorship fee to our bank account. Keep the bank voucher — you'll need it for registration." },
                { step: "03", icon: "🎖️", title: "Receive Your Member Kit", desc: "Present your bank voucher to receive your registration number, official badge, certificate, and identity card." },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="relative p-7 rounded-2xl bg-white border border-[#F4C430]/20 hover:border-[#F4C430]/50 hover:shadow-[0_8px_30px_rgba(244,196,48,0.15)] transition-all">
                  <div className="absolute top-4 right-4 font-serif text-4xl font-bold text-[#F4C430]/15">{step}</div>
                  <div className="text-3xl mb-4">{icon}</div>
                  <h4 className="font-serif font-bold text-[#333333] text-lg mb-2">{title}</h4>
                  <p className="text-[#7A5200] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MEMBERSHIP TIERS ──────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-[#333333] mb-3">
                Dharma Ideal <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Sponsor Membership</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                Four tiers designed to match your level of commitment to global peace, spiritual growth, and lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {MEMBERSHIP_TIERS.map((tier, idx) => (
                <div key={idx} className={`relative group rounded-3xl overflow-hidden transition-all duration-300 ${tier.featured ? "shadow-2xl shadow-[#F4C430]/40 ring-2 ring-[#F4C430]" : "shadow-card"} hover:shadow-glow bg-white`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${tier.color} px-7 py-6 relative`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <tier.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-white leading-tight">{tier.name}</h3>
                        <p className="text-white/80 text-sm">{tier.duration}</p>
                      </div>
                    </div>
                    {tier.featured && (
                      <div className="absolute top-3 right-4 px-3 py-1 bg-white text-[#F4C430] text-xs font-bold rounded-full">
                        Most Popular
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    {/* Prices */}
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

                    {/* Commitment blurb */}
                    <p className="text-[#7A5200] text-sm leading-relaxed mb-5 italic border-l-2 border-[#F4C430]/40 pl-3">
                      {tier.commitment}
                    </p>

                    {/* Features */}
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

          {/* ── SERVICES GRID ─────────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-[#333333] mb-3">
                Services & <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                ✨ Transform Your Life with Wisdom, Peace & Purpose — all sponsors receive access to these transformative programs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {SPONSOR_SERVICES.map((service, idx) => (
                <div key={idx} className="p-7 rounded-3xl bg-white border border-[#F4C430]/20 hover:border-[#F4C430]/45 hover:shadow-[0_8px_30px_rgba(244,196,48,0.12)] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{service.emoji}</span>
                    <h3 className="font-serif font-bold text-[#333333] text-lg">{service.title}</h3>
                  </div>
                  <p className="text-[#B8860B] text-sm font-medium mb-5 italic">🌟 {service.subtitle}</p>
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
                  <p className="mt-4 text-xs text-[#B8860B] italic">👉 Stay spiritually connected anytime, anywhere.</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── EVENT SPONSORSHIPS ────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-[#333333] mb-3">
                Event <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Sponsorships</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                Sponsor a specific upcoming event and get featured across all related materials and broadcasts.
              </p>
            </div>

            {selectedEvent === null ? (
              <div className="grid md:grid-cols-2 gap-8">
                {EVENTS.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className="group text-left bg-white rounded-3xl overflow-hidden shadow-card border border-[#F4C430]/20 hover:shadow-glow hover:border-[#F4C430]/50 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d00]/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-serif text-xl font-bold text-white">{event.name}</h3>
                        <p className="text-white/80 text-sm">{event.tagline}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#7A5200] mb-4 text-sm leading-relaxed">{event.description}</p>
                      <div className="bg-[#FFF8E7] border border-[#F4C430]/20 rounded-xl p-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#7A5200] text-xs font-semibold">Raised: NPR {event.raised.toLocaleString()}</span>
                          <span className="text-[#F4C430] font-bold text-xs">{Math.round((event.raised / event.goal) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] h-2 rounded-full" style={{ width: `${Math.max(Math.min((event.raised / event.goal) * 100, 100), 2)}%` }} />
                        </div>
                        <p className="text-xs text-[#7A5200] mt-1">Goal: NPR {event.goal.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#7A5200]">{event.sponsorTypes.length} sponsorship types available</span>
                        <span className="flex items-center gap-1 text-[#F4C430] font-semibold text-sm group-hover:text-[#FF8C00] transition-colors">
                          View Opportunities <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              (() => {
                const event = EVENTS.find((e) => e.id === selectedEvent)!
                return (
                  <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-[#F4C430]/20">
                    <div className="relative h-56">
                      <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d00]/70 to-transparent" />
                      <div className="absolute top-5 left-5">
                        <button onClick={() => setSelectedEvent(null)} className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors bg-black/30 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                          ← Back to Events
                        </button>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <h3 className="font-serif text-3xl font-bold text-white">{event.name}</h3>
                        <p className="text-white/80 font-medium mt-1">{event.tagline}</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-[#7A5200] mb-6">{event.description}</p>
                      <div className="bg-[#FFF8E7] border border-[#F4C430]/20 rounded-xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[#7A5200] text-sm font-semibold">Raised: NPR {event.raised.toLocaleString()} of NPR {event.goal.toLocaleString()}</span>
                            <span className="text-[#F4C430] font-bold text-sm">{Math.round((event.raised / event.goal) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] h-2.5 rounded-full" style={{ width: `${Math.max(Math.min((event.raised / event.goal) * 100, 100), 2)}%` }} />
                          </div>
                        </div>
                        <Button onClick={() => setDonationForm({ open: true, title: event.name })} className="bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white border-0 flex-shrink-0">
                          <Heart className="w-4 h-4 mr-2" /> Donate Now
                        </Button>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#333333] mb-6">Sponsorship Opportunities</h4>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {event.sponsorTypes.map((sponsor) => (
                          <button key={sponsor.type} onClick={() => setSponsorForm({ open: true, eventName: event.name, sponsorType: sponsor.type })} className="group text-left rounded-2xl bg-[#FFF8E7] border-2 border-[#F4C430]/15 hover:border-[#F4C430] hover:shadow-lg transition-all duration-200 overflow-hidden">
                            <div className={`h-2 bg-gradient-to-r ${sponsor.color}`} />
                            <div className="p-5">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${sponsor.color} flex items-center justify-center group-hover:shadow-glow transition-shadow flex-shrink-0`}>
                                  <sponsor.icon className="w-5 h-5 text-white" />
                                </div>
                                <h5 className="font-bold text-[#333333] text-base">{sponsor.type}</h5>
                              </div>
                              <p className="text-sm text-[#7A5200] mb-3 leading-relaxed">{sponsor.description}</p>
                              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#F4C430] group-hover:text-[#FF8C00] transition-colors">
                                Apply Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })()
            )}
          </section>

          {/* ── SPONSOR MEMBERS GALLERY ───────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-serif text-4xl font-bold text-[#333333] mb-3">
                Our <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Sponsor Members</span>
              </h2>
              <p className="text-[#7A5200] max-w-xl mx-auto">Meet the generous individuals and organizations supporting Dharma Ideal Campaign.</p>
            </div>
            {SAMPLE_SPONSORS.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {SAMPLE_SPONSORS.map((sponsor, idx) => (
                  <div key={idx} className="text-center bg-white rounded-2xl p-4 shadow-card border border-[#F4C430]/10 hover:shadow-glow transition-all">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#F4C430]/20 to-[#FF8C00]/20 mx-auto mb-3 overflow-hidden border-2 border-[#F4C430]/30">
                      {sponsor.photo ? <img src={sponsor.photo} alt={sponsor.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><Users className="w-8 h-8 text-[#F4C430]" /></div>}
                    </div>
                    <p className="font-semibold text-[#333333] text-sm">{sponsor.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#F4C430]/20 shadow-card">
                <div className="text-5xl mb-4">🙏</div>
                <p className="text-[#7A5200] text-lg mb-2 font-serif font-semibold">Be the First Sponsor Member!</p>
                <p className="text-[#7A5200]/60 text-sm max-w-sm mx-auto">Your name and photo will be featured here as a testament to your generosity and commitment to global peace.</p>
              </div>
            )}
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div className="rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/12 to-[#FF8C00]/10" />
            <div className="absolute inset-0 border border-[#F4C430]/30 rounded-3xl" />
            <DharmaWheel className="absolute -top-12 -right-12 w-56 h-56 text-[#F4C430] opacity-10" />
            <div className="relative p-12 md:p-16 text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h2 className="font-serif text-4xl font-bold text-[#333333] mb-4">
                Take the First Step Today
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                Join a life-changing journey of <strong>peace, wisdom, and compassion</strong>. Your sponsorship
                directly supports spiritual programs, retreats, world peace campaigns, and community transformation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => setDonationForm({ open: true, title: "Dharma Ideal Campaign" })} className="gradient-gold text-white border-0 hover:shadow-glow text-lg px-8 py-6">
                  <Heart className="w-5 h-5 mr-2" /> Donate Now
                </Button>
                <a href="https://wa.me/9779766883351" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#F4C430] text-[#B8860B] hover:bg-[#F4C430]/10 text-lg px-8 py-6">
                    💬 Contact on WhatsApp
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