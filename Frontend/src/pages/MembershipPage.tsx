"use client"

import { useState } from "react"
import {
  Heart,
  Award,
  Star,
  Gem,
  Building2,
  Copy,
  Check,
  Upload,
  Users,
} from "lucide-react"
import emailjs from "@emailjs/browser"
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

// ── EmailJS Credentials ──────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_j5pdf6r"
const EMAILJS_TEMPLATE_ID = "template_jwarnnq"
const EMAILJS_PUBLIC_KEY = "BHi9kLrnCu3kzGgyW"

// ── Decorative SVG ──────────────────────────────────────────────────────────
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

// ── 4 Dharma Ideal Membership Tiers ─────────────────────────────────────────
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
    commitment:
      "Follows the principles of morality, concentration, and wisdom. Upholds the five precepts: abstaining from alcohol, avoiding violence, not stealing, not lying, and refraining from sexual misconduct.",
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
    commitment:
      "A decade-long dedication to the campaign's mission and values, ensuring continuity and significant contributions over an extended period.",
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
    commitment:
      "Lifelong dedication representing an unwavering commitment to the campaign's mission — ensuring a lasting legacy in fostering global peace and harmony.",
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
    commitment:
      "All staff are jointly engaged in holistic spiritual, educational, and wellness programs — reflecting a long-term dedication to the welfare of human civilization.",
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

const SAMPLE_MEMBERS: { name: string; tier: string; photo: string }[] = []

// ── Bank Details ────────────────────────────────────────────────────────────
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

// ── Membership Form Dialog ──────────────────────────────────────────────────
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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          form_type: "Dharma Ideal Sponsor Membership",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address || "N/A",
          message: formData.message || "N/A",
          tier_name: tierName,
          price_inr: priceINR,
          price_npr: priceNPR,
          cause: "N/A",
          amount: "N/A",
          organization: "N/A",
          sponsor_type: "N/A",
          event_name: "N/A",
          time: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }),
        },
        EMAILJS_PUBLIC_KEY
      )
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
          <DialogDescription className="text-[#7A5200]">
            INR {priceINR} / NPR {priceNPR}
          </DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Full Name *</Label>
                <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" />
              </div>
              <div>
                <Label className="text-[#333333]">Email *</Label>
                <Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Phone *</Label>
                <Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" />
              </div>
              <div>
                <Label className="text-[#333333]">Address</Label>
                <Input value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" />
              </div>
            </div>
            <div>
              <Label className="text-[#333333]">Message (optional)</Label>
              <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="border-[#F4C430]/30 focus:border-[#F4C430]" rows={3} />
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#F4C430]/20">
              <p className="text-sm font-semibold text-[#333333] mb-1">Amount to Pay:</p>
              <p className="text-lg font-bold bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">
                INR {priceINR} / NPR {priceNPR}
              </p>
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
            <p className="text-[#7A5200] mb-6">
              Thank you for becoming a {tierName}! We will verify your payment and activate your membership soon.
              May your commitment to Dharma bring peace and blessings.
            </p>
            <Button onClick={handleReset} className="gradient-gold text-white border-0">Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────
const MembershipPage = () => {
  const [membershipForm, setMembershipForm] = useState<{
    open: boolean
    tierName: string
    priceINR: string
    priceNPR: string
  }>({ open: false, tierName: "", priceINR: "", priceNPR: "" })

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <PremiumHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── HERO ─────────────────────────────────────────────────────── */}
          <div className="relative text-center mb-16 py-12">
            <DharmaWheel className="absolute -top-16 -left-16 w-64 h-64 text-[#F4C430] opacity-10" />
            <DharmaWheel className="absolute -bottom-8 -right-16 w-48 h-48 text-[#FF8C00] opacity-10" />
            <span className="inline-block px-5 py-1.5 rounded-full bg-[#F4C430]/15 text-[#B8860B] text-sm font-semibold tracking-widest uppercase mb-6 border border-[#F4C430]/25">
              Become Dharma Ideal
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-6 leading-tight">
              Become a{" "}
              <span className="bg-gradient-to-r from-[#F4C430] via-[#FF8C00] to-[#DAA520] bg-clip-text text-transparent">
                Dharma Ideal Member
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#7A5200] max-w-3xl mx-auto leading-relaxed">
              Choose your level of commitment and join a global community devoted to peace, wisdom,
              and compassion. Four tiers — from one year to lifetime, individuals to corporates.
            </p>
          </div>

          {/* ── MEMBERSHIP PROCESS ───────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">📋 How It Works</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-3">
                Membership <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-[#7A5200] max-w-xl mx-auto">Three simple steps to begin your Dharma Ideal journey.</p>
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

          {/* ── 4 MEMBERSHIP TIERS ───────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest">💎 Membership Tiers</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mt-2 mb-3">
                Four Levels of <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Dharma Commitment</span>
              </h2>
              <p className="text-[#7A5200] max-w-2xl mx-auto">
                Designed for individuals at every stage of their spiritual journey, plus a dedicated tier for organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {MEMBERSHIP_TIERS.map((tier, idx) => (
                <div
                  key={idx}
                  className={`relative group rounded-3xl overflow-hidden transition-all duration-300 ${
                    tier.featured ? "shadow-2xl shadow-[#F4C430]/40 ring-2 ring-[#F4C430]" : "shadow-card"
                  } hover:shadow-glow bg-white`}
                >
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
                      Become {tier.shortName}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MEMBERS GALLERY ──────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#333333] mb-3">
                Our <span className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] bg-clip-text text-transparent">Dharma Ideal Members</span>
              </h2>
              <p className="text-[#7A5200] max-w-xl mx-auto">
                Meet the generous individuals and organizations supporting our mission worldwide.
              </p>
            </div>
            {SAMPLE_MEMBERS.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {SAMPLE_MEMBERS.map((member, idx) => (
                  <div key={idx} className="text-center bg-white rounded-2xl p-4 shadow-card border border-[#F4C430]/10 hover:shadow-glow transition-all">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#F4C430]/20 to-[#FF8C00]/20 mx-auto mb-3 overflow-hidden border-2 border-[#F4C430]/30">
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-[#F4C430]" />
                        </div>
                      )}
                    </div>
                    <p className="font-semibold text-[#333333] text-sm">{member.name}</p>
                    <p className="text-[10px] text-[#B8860B] font-medium mt-0.5">{member.tier}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#F4C430]/20 shadow-card">
                <div className="text-5xl mb-4">🙏</div>
                <p className="text-[#7A5200] text-lg mb-2 font-serif font-semibold">Be the First Dharma Ideal Member!</p>
                <p className="text-[#7A5200]/60 text-sm max-w-sm mx-auto">
                  Your name and photo will be featured here as a testament to your generosity and commitment to global peace.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

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

export default MembershipPage
