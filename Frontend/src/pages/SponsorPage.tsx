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
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  X,
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

// ── Data ──────────────────────────────────────────────────────────────────────

const EVENTS = [
  {
    id: "weekly-retreat",
    name: "Weekly Retreat",
    tagline: "Starting from 14th of May",
    description:
      "Join us for our weekly retreat sessions focused on mindfulness, meditation, and spiritual growth.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    raised: 0,
    goal: 500000,
    sponsorTypes: [
      {
        type: "Title Sponsor",
        icon: Crown,
        color: "from-[#FFD700] to-[#FF8C00]",
        description: "Primary branding across all retreat materials and events",
      },
      {
        type: "Sponsor",
        icon: Star,
        color: "from-[#F4C430] to-[#DAA520]",
        description: "Featured recognition in retreat communications",
      },
      {
        type: "Co-Sponsor",
        icon: Shield,
        color: "from-[#DAA520] to-[#CD853F]",
        description: "Shared branding with other co-sponsors",
      },
      {
        type: "Powered By Sponsor",
        icon: Zap,
        color: "from-[#FF8C00] to-[#F4C430]",
        description: "'Powered by' tag on select retreat sessions",
      },
      {
        type: "Supporting Sponsor",
        icon: Heart,
        color: "from-[#CD853F] to-[#DEB887]",
        description: "Acknowledgement in retreat programs and website",
      },
    ],
  },
  {
    id: "ngyungne-retreat",
    name: "3rd International Ngyungne Retreat",
    tagline: "Annual Sacred Practice",
    description:
      "The prestigious 3rd International Ngyungne Retreat bringing together practitioners from around the world.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    raised: 0,
    goal: 1000000,
    sponsorTypes: [
      {
        type: "Title Sponsor",
        icon: Crown,
        color: "from-[#FFD700] to-[#FF8C00]",
        description: "Primary branding across all retreat materials and events",
      },
      {
        type: "Sponsor",
        icon: Star,
        color: "from-[#F4C430] to-[#DAA520]",
        description: "Featured recognition in retreat communications",
      },
      {
        type: "Co-Sponsor",
        icon: Shield,
        color: "from-[#DAA520] to-[#CD853F]",
        description: "Shared branding with other co-sponsors",
      },
      {
        type: "Powered By Sponsor",
        icon: Zap,
        color: "from-[#FF8C00] to-[#F4C430]",
        description: "'Powered by' tag on select retreat sessions",
      },
      {
        type: "Supporting Sponsor",
        icon: Heart,
        color: "from-[#CD853F] to-[#DEB887]",
        description: "Acknowledgement in retreat programs and website",
      },
    ],
  },
]

const MEMBERSHIP_TIERS = [
  {
    name: "1 Year Dharma Ideal Sponsor",
    duration: "1-Year Subscription",
    priceINR: "9,999",
    priceNPR: "15,999",
    icon: Star,
    color: "from-[#DAA520] to-[#CD853F]",
    features: [
      "Sponsor recognition on website for 1 year",
      "Quarterly impact reports",
      "Invitation to annual events",
      "Digital certificate of sponsorship",
    ],
  },
  {
    name: "10 Year Dharma Ideal Sponsor",
    duration: "10-Year Subscription",
    priceINR: "99,999",
    priceNPR: "1,59,999",
    icon: Award,
    color: "from-[#F4C430] to-[#DAA520]",
    featured: true,
    features: [
      "All 1-Year benefits",
      "Permanent name on sponsor wall",
      "Monthly impact calls",
      "Priority event invitations",
      "Dedicated impact coordinator",
    ],
  },
  {
    name: "Life Dharma Ideal Gem Sponsor",
    duration: "Lifetime Subscription",
    priceINR: "4,99,999",
    priceNPR: "7,99,999",
    icon: Gem,
    color: "from-[#FF8C00] to-[#F4C430]",
    features: [
      "All 10-Year benefits",
      "Exclusive on-site visits",
      "Naming opportunities",
      "Board engagement invitations",
      "Custom annual impact report",
      "Media coverage & recognition",
    ],
  },
  {
    name: "Corporate Dharma Ideal Sponsor",
    duration: "Lifetime Premium Sponsorship",
    priceINR: "20,99,999",
    priceNPR: "33,59,999",
    icon: Building2,
    color: "from-[#FFD700] to-[#FF8C00]",
    features: [
      "All Gem Sponsor benefits",
      "Corporate branding across all programs",
      "Dedicated CSR partnership manager",
      "Employee engagement programs",
      "Custom impact dashboard",
      "Annual gala VIP access",
      "Press release & media features",
    ],
  },
]

const SAMPLE_SPONSORS: { name: string; photo: string }[] = []

// ── Bank Details Component ────────────────────────────────────────────────────

function BankDetails() {
  const [copied, setCopied] = useState("")

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(""), 2000)
  }

  const CopyBtn = ({ text, label }: { text: string; label: string }) => (
    <button
      type="button"
      onClick={() => handleCopy(text, label)}
      className="text-[#F4C430] hover:text-[#DAA520] flex-shrink-0"
    >
      {copied === label ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  )

  return (
    <div className="space-y-6">
      {/* Nepal */}
      <div className="bg-white rounded-2xl p-6 border border-[#F4C430]/30">
        <h4 className="font-serif text-lg font-bold text-[#333333] mb-4 flex items-center gap-2">
          Nepal — Bank Transfer
        </h4>
        <p className="text-sm text-[#7A5200] mb-3 font-medium">
          Prabhu Bank &middot; Boudha Branch
        </p>
        <div className="space-y-3">
          {[
            { label: "Account Name", value: "B.T.M.C. Foundation" },
            { label: "Account No.", value: "0570155982700014" },
            { label: "Bank", value: "Prabhu Bank (Boudha Branch)" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-[#7A5200] mb-1">{item.label}</p>
              <div className="flex items-center justify-between bg-[#FFF8E7] p-3 rounded-lg border border-[#F4C430]/20">
                <p className="font-semibold text-[#333333] text-sm">{item.value}</p>
                <CopyBtn text={item.value} label={`np-${item.label}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* India */}
      <div className="bg-white rounded-2xl p-6 border border-[#F4C430]/30">
        <h4 className="font-serif text-lg font-bold text-[#333333] mb-4 flex items-center gap-2">
          India — Bank Transfer
        </h4>
        <p className="text-sm text-[#7A5200] mb-3 font-medium">
          Bank of India &middot; Salugara, Siliguri
        </p>
        <div className="space-y-3">
          {[
            { label: "Account Name", value: "BTMC Foundation" },
            { label: "Account No.", value: "50782011000314" },
            { label: "IFSC Code", value: "BKID0005078" },
            { label: "Branch", value: "Salugara, Siliguri" },
            {
              label: "Address",
              value:
                "H No.737, Gr. Fl., BSF Road, Ward No.42, PO Salugara, Jalpaiguri, West Bengal – 734008",
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-[#7A5200] mb-1">{item.label}</p>
              <div className="flex items-center justify-between bg-[#FFF8E7] p-3 rounded-lg border border-[#F4C430]/20">
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

// ── Donation Form Dialog ──────────────────────────────────────────────────────

function DonationFormDialog({
  open,
  onOpenChange,
  title,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  title: string
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", amount: "", message: "" })
    setScreenshot(null)
    setSubmitted(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">
            Donate — {title}
          </DialogTitle>
          <DialogDescription className="text-[#7A5200]">
            Make a donation via bank transfer and upload your payment screenshot.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Full Name *</Label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
              <div>
                <Label className="text-[#333333]">Email *</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Phone</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
              <div>
                <Label className="text-[#333333]">Amount *</Label>
                <Input
                  type="number"
                  required
                  min="1"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div>
              <Label className="text-[#333333]">Message (optional)</Label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-[#F4C430]/30 focus:border-[#F4C430]"
                rows={3}
              />
            </div>

            <BankDetails />

            <div>
              <Label className="text-[#333333] font-semibold">
                Upload Payment Screenshot *
              </Label>
              <div className="mt-2 border-2 border-dashed border-[#F4C430]/40 rounded-xl p-6 text-center hover:border-[#F4C430] transition-colors">
                <Upload className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                <p className="text-sm text-[#7A5200] mb-2">
                  {screenshot ? screenshot.name : "Click to upload or drag and drop"}
                </p>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                  className="w-full opacity-0 absolute inset-0 cursor-pointer"
                  style={{ position: "relative", opacity: 1, fontSize: "0.875rem" }}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white hover:from-[#F4C430] hover:to-[#DAA520] py-6 text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Submit Donation
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">
              Thank You!
            </h3>
            <p className="text-[#7A5200] mb-6">
              Your donation has been recorded. We will verify your payment and update accordingly.
            </p>
            <Button onClick={handleReset} className="gradient-gold text-white border-0">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Sponsor Form Dialog ───────────────────────────────────────────────────────

function SponsorFormDialog({
  open,
  onOpenChange,
  eventName,
  sponsorType,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  eventName: string
  sponsorType: string
}) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: "", organization: "", email: "", phone: "", address: "", message: "" })
    setScreenshot(null)
    setSubmitted(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">
            Become {sponsorType}
          </DialogTitle>
          <DialogDescription className="text-[#7A5200]">
            For: {eventName}
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Full Name *</Label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
              <div>
                <Label className="text-[#333333]">Organization</Label>
                <Input
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Email *</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
              <div>
                <Label className="text-[#333333]">Phone *</Label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div>
              <Label className="text-[#333333]">Address</Label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="border-[#F4C430]/30 focus:border-[#F4C430]"
              />
            </div>
            <div>
              <Label className="text-[#333333]">Message (optional)</Label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-[#F4C430]/30 focus:border-[#F4C430]"
                rows={3}
              />
            </div>

            <BankDetails />

            <div>
              <Label className="text-[#333333] font-semibold">
                Upload Payment Screenshot *
              </Label>
              <div className="mt-2 border-2 border-dashed border-[#F4C430]/40 rounded-xl p-6 text-center hover:border-[#F4C430] transition-colors relative">
                <Upload className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                <p className="text-sm text-[#7A5200] mb-2">
                  {screenshot ? screenshot.name : "Click to upload or drag and drop"}
                </p>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white hover:from-[#F4C430] hover:to-[#DAA520] py-6 text-lg"
            >
              Submit Sponsorship Application
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">
              Application Submitted!
            </h3>
            <p className="text-[#7A5200] mb-6">
              Thank you for your interest in becoming a {sponsorType} for {eventName}. We will
              review your application and get back to you soon.
            </p>
            <Button onClick={handleReset} className="gradient-gold text-white border-0">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Membership Form Dialog ────────────────────────────────────────────────────

function MembershipFormDialog({
  open,
  onOpenChange,
  tierName,
  priceINR,
  priceNPR,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  tierName: string
  priceINR: string
  priceNPR: string
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", address: "", message: "" })
    setScreenshot(null)
    setSubmitted(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">
            Become {tierName}
          </DialogTitle>
          <DialogDescription className="text-[#7A5200]">
            INR {priceINR} / NPR {priceNPR}
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Full Name *</Label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
              <div>
                <Label className="text-[#333333]">Email *</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Phone *</Label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
              <div>
                <Label className="text-[#333333]">Address</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div>
              <Label className="text-[#333333]">Message (optional)</Label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-[#F4C430]/30 focus:border-[#F4C430]"
                rows={3}
              />
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#F4C430]/20">
              <p className="text-sm font-semibold text-[#333333] mb-1">Amount to Pay:</p>
              <p className="text-lg font-bold gradient-gold-text">
                INR {priceINR} / NPR {priceNPR}
              </p>
            </div>

            <BankDetails />

            <div>
              <Label className="text-[#333333] font-semibold">
                Upload Payment Screenshot *
              </Label>
              <div className="mt-2 border-2 border-dashed border-[#F4C430]/40 rounded-xl p-6 text-center hover:border-[#F4C430] transition-colors relative">
                <Upload className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                <p className="text-sm text-[#7A5200] mb-2">
                  {screenshot ? screenshot.name : "Click to upload or drag and drop"}
                </p>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white hover:from-[#F4C430] hover:to-[#DAA520] py-6 text-lg"
            >
              Submit Membership Application
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">
              Application Submitted!
            </h3>
            <p className="text-[#7A5200] mb-6">
              Thank you for becoming a {tierName}! We will verify your payment and activate your
              membership soon.
            </p>
            <Button onClick={handleReset} className="gradient-gold text-white border-0">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const SponsorPage = () => {
  const [sponsorForm, setSponsorForm] = useState<{
    open: boolean
    eventName: string
    sponsorType: string
  }>({ open: false, eventName: "", sponsorType: "" })

  const [donationForm, setDonationForm] = useState<{
    open: boolean
    title: string
  }>({ open: false, title: "" })

  const [membershipForm, setMembershipForm] = useState<{
    open: boolean
    tierName: string
    priceINR: string
    priceNPR: string
  }>({ open: false, tierName: "", priceINR: "", priceNPR: "" })

  const [expandedEvent, setExpandedEvent] = useState<string | null>(EVENTS[0].id)

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Become a <span className="gradient-gold-text">Sponsor</span>
            </h1>
            <p className="text-xl text-[#7A5200] max-w-3xl mx-auto">
              Partner with Dharma Ideal to create meaningful, lasting impact. Choose an event to
              sponsor or become a long-term Dharma Ideal sponsor member.
            </p>
          </div>

          {/* ── Event Sponsors Section ──────────────────────────────────────── */}
          <section className="mb-20">
            <h2 className="font-serif text-4xl font-bold text-center text-[#333333] mb-4">
              Event <span className="gradient-gold-text">Sponsorships</span>
            </h2>
            <p className="text-center text-[#7A5200] mb-12 max-w-2xl mx-auto">
              Choose an upcoming event and become a sponsor. Click on any sponsorship type to apply.
            </p>

            <div className="space-y-8">
              {EVENTS.map((event) => (
                <div
                  key={event.id}
                  id={event.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-card border border-[#F4C430]/20"
                >
                  {/* Event Header */}
                  <button
                    onClick={() =>
                      setExpandedEvent(expandedEvent === event.id ? null : event.id)
                    }
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-[#FFF8E7]/50 transition-colors"
                  >
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#333333]">
                        {event.name}
                      </h3>
                      <p className="text-[#F4C430] font-semibold mt-1">{event.tagline}</p>
                      <p className="text-[#7A5200] mt-2 text-sm">{event.description}</p>
                    </div>
                    {expandedEvent === event.id ? (
                      <ChevronUp className="w-6 h-6 text-[#F4C430] flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#F4C430] flex-shrink-0 ml-4" />
                    )}
                  </button>

                  {expandedEvent === event.id && (
                    <div className="px-6 md:px-8 pb-8">
                      {/* Video Section */}
                      <div className="mb-8 rounded-2xl overflow-hidden aspect-video bg-black">
                        <iframe
                          src={event.videoUrl}
                          title={event.name}
                          className="w-full h-full"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      {/* Funding Progress */}
                      <div className="bg-[#FFF8E7] border border-[#F4C430]/30 rounded-xl p-4 mb-8">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#7A5200] font-semibold">
                            Raised: NPR {event.raised.toLocaleString()} of NPR{" "}
                            {event.goal.toLocaleString()}
                          </span>
                          <span className="text-[#F4C430] font-bold">
                            {Math.round((event.raised / event.goal) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] h-3 rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min((event.raised / event.goal) * 100, 100)}%`,
                            }}
                          />
                        </div>
                        <div className="mt-3 flex gap-3">
                          <Button
                            onClick={() =>
                              setDonationForm({ open: true, title: event.name })
                            }
                            className="bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white hover:from-[#F4C430] hover:to-[#DAA520] border-0"
                          >
                            <Heart className="w-4 h-4 mr-2" />
                            Donate Now
                          </Button>
                        </div>
                      </div>

                      {/* Sponsor Types Grid */}
                      <h4 className="font-serif text-xl font-bold text-[#333333] mb-4">
                        Sponsorship Opportunities
                      </h4>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {event.sponsorTypes.map((sponsor) => (
                          <button
                            key={sponsor.type}
                            onClick={() =>
                              setSponsorForm({
                                open: true,
                                eventName: event.name,
                                sponsorType: sponsor.type,
                              })
                            }
                            className="group text-left p-5 rounded-2xl bg-[#FFF8E7] border border-[#F4C430]/20 hover:border-[#F4C430] hover:shadow-lg transition-all"
                          >
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${sponsor.color} flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow`}
                            >
                              <sponsor.icon className="w-6 h-6 text-white" />
                            </div>
                            <h5 className="font-semibold text-[#333333] mb-1">
                              {sponsor.type}
                            </h5>
                            <p className="text-sm text-[#7A5200]">{sponsor.description}</p>
                            <span className="inline-block mt-3 text-sm font-semibold text-[#F4C430] group-hover:text-[#FF8C00] transition-colors">
                              Apply Now &rarr;
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── General Sponsor Membership Section ─────────────────────────── */}
          <section className="mb-20">
            <h2 className="font-serif text-4xl font-bold text-center text-[#333333] mb-4">
              Dharma Ideal <span className="gradient-gold-text">Sponsor Membership</span>
            </h2>
            <p className="text-center text-[#7A5200] mb-12 max-w-2xl mx-auto">
              Not for any particular event — become a long-term Dharma Ideal sponsor member and
              support all our initiatives.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {MEMBERSHIP_TIERS.map((tier, idx) => (
                <div
                  key={idx}
                  className={`relative group rounded-3xl overflow-hidden transition-all duration-300 ${
                    tier.featured ? "shadow-2xl shadow-[#F4C430]/40 ring-2 ring-[#F4C430]" : "shadow-card"
                  } hover:shadow-glow bg-white`}
                >
                  <div className={`h-24 bg-gradient-to-r ${tier.color} p-6 flex items-center gap-4`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <tier.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">{tier.name}</h3>
                      <p className="text-white/80 text-sm">{tier.duration}</p>
                    </div>
                    {tier.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white text-[#F4C430] text-xs font-semibold rounded-full">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="bg-[#FFF8E7] rounded-xl px-4 py-2 border border-[#F4C430]/20">
                        <p className="text-xs text-[#7A5200]">INR</p>
                        <p className="font-bold text-[#333333]">{tier.priceINR}</p>
                      </div>
                      <div className="bg-[#FFF8E7] rounded-xl px-4 py-2 border border-[#F4C430]/20">
                        <p className="text-xs text-[#7A5200]">NPR</p>
                        <p className="font-bold text-[#333333]">{tier.priceNPR}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-[#7A5200] text-sm">
                          <Heart className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() =>
                        setMembershipForm({
                          open: true,
                          tierName: tier.name,
                          priceINR: tier.priceINR,
                          priceNPR: tier.priceNPR,
                        })
                      }
                      className={`w-full ${
                        tier.featured
                          ? "bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white border-0"
                          : "border-2 border-[#F4C430] text-[#F4C430] bg-transparent hover:bg-[#F4C430]/10"
                      } hover:shadow-glow`}
                    >
                      Become a Member
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Sponsor Members Gallery ────────────────────────────────────── */}
          <section className="mb-20">
            <h2 className="font-serif text-4xl font-bold text-center text-[#333333] mb-4">
              Our <span className="gradient-gold-text">Sponsor Members</span>
            </h2>
            <p className="text-center text-[#7A5200] mb-12 max-w-2xl mx-auto">
              Meet the generous individuals and organizations supporting Dharma Ideal.
            </p>

            {SAMPLE_SPONSORS.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {SAMPLE_SPONSORS.map((sponsor, idx) => (
                  <div
                    key={idx}
                    className="text-center bg-white rounded-2xl p-4 shadow-card border border-[#F4C430]/10 hover:shadow-glow transition-all"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#F4C430]/20 to-[#FF8C00]/20 mx-auto mb-3 overflow-hidden border-2 border-[#F4C430]/30">
                      {sponsor.photo ? (
                        <img
                          src={sponsor.photo}
                          alt={sponsor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-[#F4C430]" />
                        </div>
                      )}
                    </div>
                    <p className="font-semibold text-[#333333] text-sm">{sponsor.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#F4C430]/20 shadow-card">
                <Users className="w-16 h-16 text-[#F4C430]/40 mx-auto mb-4" />
                <p className="text-[#7A5200] text-lg mb-2">Be the first sponsor member!</p>
                <p className="text-[#7A5200]/60 text-sm">
                  Sponsor members will be featured here with their name and photo.
                </p>
              </div>
            )}
          </section>

          {/* ── Why Sponsor ────────────────────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-center text-[#333333] mb-12">
              Why Sponsor <span className="gradient-gold-text">DHARMA?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Measurable Impact",
                  desc: "Track your contribution's real-world results",
                },
                {
                  icon: Users,
                  title: "Global Reach",
                  desc: "Partner with programs across multiple countries",
                },
                {
                  icon: Award,
                  title: "Recognition",
                  desc: "Get recognized for your compassionate support",
                },
                {
                  icon: Heart,
                  title: "Spiritual Merit",
                  desc: "Accumulate merit through supporting Dharma activities",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#F4C430]/20 hover:border-[#F4C430]/50 hover:shadow-card transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-full gradient-gold mx-auto mb-4 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#333333] mb-2">{benefit.title}</h4>
                  <p className="text-[#7A5200] text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────────── */}
          <div className="bg-gradient-to-r from-[#F4C430]/10 to-[#FF8C00]/10 rounded-3xl p-12 border border-[#F4C430]/30 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#333333] mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-[#7A5200] max-w-2xl mx-auto mb-8 text-lg">
              Your sponsorship directly supports spiritual programs, retreats, and community
              initiatives.
            </p>
            <Button
              onClick={() =>
                setDonationForm({ open: true, title: "Dharma Ideal Campaign" })
              }
              className="gradient-gold text-white border-0 hover:shadow-glow text-lg px-8 py-6"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
          </div>
        </div>
      </div>

      {/* ── Dialogs ──────────────────────────────────────────────────────── */}
      <SponsorFormDialog
        open={sponsorForm.open}
        onOpenChange={(v) => setSponsorForm({ ...sponsorForm, open: v })}
        eventName={sponsorForm.eventName}
        sponsorType={sponsorForm.sponsorType}
      />

      <DonationFormDialog
        open={donationForm.open}
        onOpenChange={(v) => setDonationForm({ ...donationForm, open: v })}
        title={donationForm.title}
      />

      <MembershipFormDialog
        open={membershipForm.open}
        onOpenChange={(v) => setMembershipForm({ ...membershipForm, open: v })}
        tierName={membershipForm.tierName}
        priceINR={membershipForm.priceINR}
        priceNPR={membershipForm.priceNPR}
      />

      <Footer />
    </main>
  )
}

export default SponsorPage
