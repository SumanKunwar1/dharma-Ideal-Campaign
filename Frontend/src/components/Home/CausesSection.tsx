"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { GraduationCap, HeartPulse, Home, BookOpen, Heart, Sparkles, Copy, Check, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// ── EmailJS Credentials ────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_j5pdf6r"
const EMAILJS_TEMPLATE_ID = "template_jwarnnq"
const EMAILJS_PUBLIC_KEY = "BHi9kLrnCu3kzGgyW"

// ── Types ──────────────────────────────────────────────────────────────────────
interface CauseItem {
  icon: React.ElementType
  title: string
  description: string
  raised: number
  goal: number
  donors: number
}

// ── Causes Data ────────────────────────────────────────────────────────────────
const causes: CauseItem[] = [
  {
    icon: Sparkles,
    title: "Weekly 2 Day Free Retreat Program",
    description:
      "From May 31st 2026 – May 14th 2027. A year-long weekly retreat fostering mindfulness, meditation, and spiritual growth for all.",
    raised: 0,
    goal: 50000,
    donors: 0,
  },
  {
    icon: HeartPulse,
    title: "3rd 17 Day Intensive Ngyungne Retreat",
    description:
      "From Dec 8–24, 2026. A sacred 17-day intensive fasting and purification retreat bringing together practitioners worldwide.",
    raised: 0,
    goal: 40000,
    donors: 0,
  },
  {
    icon: GraduationCap,
    title: "Education for Underprivileged",
    description:
      "Help provide quality education to children who lack resources and opportunities.",
    raised: 4500,
    goal: 10000,
    donors: 128,
  },
  {
    icon: Home,
    title: "Elderly Care Facilities",
    description:
      "Sponsor elderly care services providing peace, dignity, and spiritual support.",
    raised: 3800,
    goal: 8000,
    donors: 89,
  },
  {
    icon: BookOpen,
    title: "Spiritual Wisdom Programs",
    description:
      "Fund meditation retreats and spiritual guidance sessions for inner peace.",
    raised: 2100,
    goal: 5000,
    donors: 67,
  },
  {
    icon: HeartPulse,
    title: "Medical Emergency Relief",
    description:
      "Support individuals facing life-threatening conditions with critical medical care.",
    raised: 7200,
    goal: 15000,
    donors: 245,
  },
]

// ── Bank Details ───────────────────────────────────────────────────────────────
function BankDetailsBlock() {
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
    <div className="space-y-4">
      {/* Nepal */}
      <div className="bg-white rounded-xl p-4 border border-[#F4C430]/30">
        <h4 className="font-semibold text-[#333333] mb-3 text-sm">
          Nepal — Prabhu Bank, Boudha Branch
        </h4>
        <div className="space-y-2">
          {[
            { label: "Account Name", value: "B.T.M.C. Foundation" },
            { label: "Account No.", value: "0570155982700014" },
            { label: "Bank", value: "Prabhu Bank (Boudha Branch)" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between bg-[#FFF8E7] p-2.5 rounded-lg text-xs"
            >
              <div>
                <span className="text-[#7A5200]">{item.label}: </span>
                <span className="font-semibold text-[#333333]">{item.value}</span>
              </div>
              <CopyBtn text={item.value} label={`cs-np-${item.label}`} />
            </div>
          ))}
        </div>
      </div>

      {/* India */}
      <div className="bg-white rounded-xl p-4 border border-[#F4C430]/30">
        <h4 className="font-semibold text-[#333333] mb-3 text-sm">
          India — Bank of India, Salugara, Siliguri
        </h4>
        <div className="space-y-2">
          {[
            { label: "Account Name", value: "BTMC Foundation" },
            { label: "Account No.", value: "50782011000314" },
            { label: "IFSC Code", value: "BKID0005078" },
            { label: "Branch", value: "Salugara, Siliguri" },
            {
              label: "Address",
              value: "H No.737, Gr. Fl., BSF Road, Ward No.42, PO Salugara, Jalpaiguri, West Bengal – 734008",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between bg-[#FFF8E7] p-2.5 rounded-lg text-xs"
            >
              <div className="min-w-0 mr-2">
                <span className="text-[#7A5200]">{item.label}: </span>
                <span className="font-semibold text-[#333333]">{item.value}</span>
              </div>
              <CopyBtn text={item.value} label={`cs-in-${item.label}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Donation Dialog ────────────────────────────────────────────────────────────
function CauseDonationDialog({
  open,
  onOpenChange,
  causeTitle,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  causeTitle: string
}) {
  const AMOUNTS = [50, 100, 250, 500, 1000]

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [screenshotPreview, setScreenshotPreview] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const finalAmount = selectedAmount || (customAmount ? Number.parseInt(customAmount) : 0)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setScreenshot(file)
      const reader = new FileReader()
      reader.onloadend = () => setScreenshotPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!finalAmount || finalAmount < 1) return
    if (!formData.name || !formData.email || !formData.phone) return
    if (!screenshot) return

    setSending(true)
    setSendError("")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          cause: causeTitle,
          amount: finalAmount,
          time: new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        },
        EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
    } catch (error) {
      console.error("EmailJS error:", error)
      setSendError("Something went wrong. Please try again.")
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setSelectedAmount(null)
    setCustomAmount("")
    setFormData({ name: "", email: "", phone: "" })
    setScreenshot(null)
    setScreenshotPreview("")
    setSubmitted(false)
    setSendError("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">
            Donate — {causeTitle}
          </DialogTitle>
          <DialogDescription className="text-[#7A5200]">
            Make a donation via bank transfer and upload your payment screenshot.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Amount Buttons */}
            <div>
              <Label className="text-[#333333] font-semibold mb-2 block">
                Select Donation Amount
              </Label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                    className={`p-3 rounded-lg font-semibold transition-all border-2 text-sm ${
                      selectedAmount === amount
                        ? "border-[#F4C430] bg-[#F4C430]/10 text-[#F4C430]"
                        : "border-[#F4C430]/30 text-[#7A5200] hover:border-[#F4C430]"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <Label className="text-[#333333]">Or Enter Custom Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-[#7A5200] font-semibold">$</span>
                <Input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="pl-8 border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>

            {/* Bank Details */}
            <BankDetailsBlock />

            {/* Donor Info */}
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
            <div>
              <Label className="text-[#333333]">Phone *</Label>
              <Input
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-[#F4C430]/30 focus:border-[#F4C430]"
              />
            </div>

            {/* Screenshot Upload */}
            <div>
              <Label className="text-[#333333] font-semibold">
                Upload Payment Screenshot *
              </Label>
              <div className="mt-2 border-2 border-dashed border-[#F4C430]/40 rounded-xl p-5 text-center hover:border-[#F4C430] transition-colors relative">
                {screenshotPreview ? (
                  <div className="space-y-2">
                    <img
                      src={screenshotPreview}
                      alt="Preview"
                      className="max-h-40 mx-auto rounded-lg"
                    />
                    <p className="text-sm text-green-600 font-medium">Screenshot uploaded</p>
                    <button
                      type="button"
                      onClick={() => { setScreenshot(null); setScreenshotPreview("") }}
                      className="text-xs text-[#7A5200] hover:text-[#333] underline"
                    >
                      Change screenshot
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                    <p className="text-sm text-[#7A5200]">Click to upload or drag and drop</p>
                    <input
                      type="file"
                      accept="image/*"
                      required
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Error */}
            {sendError && (
              <p className="text-sm text-red-600 text-center">{sendError}</p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={sending || !finalAmount || !formData.name || !formData.email || !formData.phone || !screenshot}
              className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white hover:from-[#F4C430] hover:to-[#DAA520] disabled:from-gray-300 disabled:to-gray-400 py-6 text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              {sending ? "Sending..." : `Submit Donation $${finalAmount || "0"}`}
            </Button>

            <p className="text-xs text-center text-[#7A5200]">
              Your donation will be verified within 24 hours. You'll receive a confirmation email once approved.
            </p>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">Thank You!</h3>
            <p className="text-[#7A5200] mb-6">
              Your donation of ${finalAmount} to {causeTitle} has been submitted for verification.
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

// ── Section ────────────────────────────────────────────────────────────────────
const CausesSection = () => {
  const [donateDialog, setDonateDialog] = useState<{ open: boolean; title: string }>({
    open: false,
    title: "",
  })

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-spiritual-green/10 text-spiritual-green text-sm font-medium mb-4">
            Popular Causes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Make a <span className="text-gradient-gold">Difference Today</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Your contribution directly impacts lives. Choose a cause close to your heart and help us create meaningful change.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {causes.map((cause, index) => {
            const progress = cause.goal > 0 ? (cause.raised / cause.goal) * 100 : 0
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <cause.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {cause.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cause.description}
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full gradient-gold transition-all duration-1000 ease-out"
                      style={{ width: `${Math.max(progress, progress > 0 ? 2 : 0)}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-lg font-bold text-gold">${cause.raised.toLocaleString()}</span>
                    <span className="text-muted-foreground"> / ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{cause.donors}</span> donors
                  </div>
                </div>

                <Button
                  variant="saffron"
                  className="w-full"
                  onClick={() => setDonateDialog({ open: true, title: cause.title })}
                >
                  <Heart className="w-4 h-4" />
                  Donate to This Cause
                </Button>
              </div>
            )
          })}
        </div>
      </div>

      <CauseDonationDialog
        open={donateDialog.open}
        onOpenChange={(v) => setDonateDialog({ ...donateDialog, open: v })}
        causeTitle={donateDialog.title}
      />
    </section>
  )
}

export default CausesSection