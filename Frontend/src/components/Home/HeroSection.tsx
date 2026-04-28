"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Play,
  Copy,
  Check,
  Upload,
  Mail,
} from "lucide-react"
import heroTemple from "@/assets/hero-temple.jpg"

type SlideAction =
  | { kind: "scroll"; targetId: string; label: string }
  | { kind: "navigate"; to: string; label: string }
  | { kind: "donate"; label: string }

interface Slide {
  title: string
  subtitle: string
  description: string
  image: string
  primary: SlideAction
}

const slides: Slide[] = [
  {
    title: "Become a Free Retreat Trip Partner",
    subtitle: "Travel · Practice · Transform",
    description:
      "Sponsor a participant's journey to our weekly free retreats and the 3rd International Ngyungne Retreat — open the gateway to peace, mindfulness, and inner wisdom for those who need it most.",
    image: heroTemple,
    primary: { kind: "navigate", to: "/sponsor", label: "Become a Trip Partner" },
  },
  {
    title: "Sponsor the Weekly 2-Day Free Retreat",
    subtitle: "52 Weeks · 15,600 Practitioners · One Vision",
    description:
      "Power a year-long sanctuary of meditation, healing, and Dharma practice. Your sponsorship covers food, shelter, and spiritual care for every soul who joins us each weekend.",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80",
    primary: { kind: "navigate", to: "/sponsor#weekly-retreat", label: "Sponsor Weekly Retreat" },
  },
  {
    title: "Sponsor the 3rd International Ngyungne Retreat",
    subtitle: "Dec 8 – 24, 2026 · Kathmandu, Nepal",
    description:
      "17 sacred days. 700 practitioners daily. A globally recognized spiritual gathering. Stand alongside this transformational movement as a Title, Powered-By, Co, Associate, Partner, or Supporting sponsor.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80",
    primary: { kind: "navigate", to: "/sponsor#ngyungne-retreat", label: "Become Ngyungne Sponsor" },
  },
  {
    title: "Register for the Weekly Retreat Program",
    subtitle: "Every Saturday & Sunday — May 31, 2026 → May 14, 2027",
    description:
      "Reserve your seat for a weekend of meditation, mindfulness, and Buddhist practice at BTMC, Jorpati, Kathmandu. Free for all participants — students, professionals, families, seekers.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80",
    primary: { kind: "navigate", to: "/programs", label: "Register Now" },
  },
  {
    title: "Support the Weekly Retreat Program",
    subtitle: "Your Generosity Sustains 15,600 Spiritual Journeys",
    description:
      "Contribute to food, accommodation, healthcare, retreat materials, and operations that keep our weekly retreat free for every practitioner — every weekend, every week, every year.",
    image:
      "https://images.unsplash.com/photo-1607827448387-a67db6201026?w=1920&q=80",
    primary: { kind: "donate", label: "Support the Program" },
  },
]

// ── Bank Details ──────────────────────────────────────────────────────────────

function HeroBankDetails() {
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
              <CopyBtn text={item.value} label={`hero-np-${item.label}`} />
            </div>
          ))}
        </div>
      </div>
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
              value:
                "H No.737, Gr. Fl., BSF Road, Ward No.42, PO Salugara, Jalpaiguri, West Bengal – 734008",
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
              <CopyBtn text={item.value} label={`hero-in-${item.label}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Donation Dialog ───────────────────────────────────────────────────────────

function HeroDonationDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  })
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [screenshotPreview, setScreenshotPreview] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setScreenshot(file)
      const reader = new FileReader()
      reader.onloadend = () => setScreenshotPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", amount: "", message: "" })
    setScreenshot(null)
    setScreenshotPreview("")
    setSubmitted(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8E7]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#333333]">
            Donate to Dharma Ideal
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
              <div>
                <Label className="text-[#333333]">Email *</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-[#333333]">Phone</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  className="border-[#F4C430]/30 focus:border-[#F4C430]"
                />
              </div>
            </div>
            <div>
              <Label className="text-[#333333]">Message (optional)</Label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border-[#F4C430]/30 focus:border-[#F4C430]"
                rows={2}
              />
            </div>

            <HeroBankDetails />

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
                    <p className="text-sm text-green-600 font-medium">
                      Screenshot uploaded
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setScreenshot(null)
                        setScreenshotPreview("")
                      }}
                      className="text-xs text-[#7A5200] hover:text-[#333] underline"
                    >
                      Change screenshot
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-[#F4C430] mx-auto mb-2" />
                    <p className="text-sm text-[#7A5200]">
                      Click to upload or drag and drop
                    </p>
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

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white hover:from-[#F4C430] hover:to-[#DAA520] py-5 text-lg"
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
              Your donation has been recorded. We will verify your payment and
              update accordingly.
            </p>
            <Button
              onClick={handleReset}
              className="gradient-gold text-white border-0"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ── Hero Section ──────────────────────────────────────────────────────────────

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDonateOpen, setIsDonateOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToSponsorVideos = () => {
    const section = document.getElementById("sponsor-videos")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const goToContact = () => {
    navigate("/contact")
  }

  const handlePrimary = (action: SlideAction) => {
    if (action.kind === "donate") {
      setIsDonateOpen(true)
      return
    }
    if (action.kind === "scroll") {
      const section = document.getElementById(action.targetId)
      if (section) section.scrollIntoView({ behavior: "smooth" })
      return
    }
    if (action.kind === "navigate") {
      if (action.to.includes("#")) {
        const [path, hash] = action.to.split("#")
        navigate(path)
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 250)
      } else {
        navigate(action.to)
      }
    }
  }

  return (
    <>
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 flex items-center">
                <div
                  className={`max-w-2xl text-background transition-all duration-700 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-base sm:text-lg">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-background/80 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 relative z-20">
                    <Button
                      type="button"
                      onClick={() => handlePrimary(slide.primary)}
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      {slide.primary.label}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setIsDonateOpen(true)}
                      variant="outline"
                      className="border-2 border-primary/70 text-primary bg-background/90 hover:bg-background backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate Now
                    </Button>
                    <Button
                      type="button"
                      onClick={scrollToSponsorVideos}
                      variant="outline"
                      className="border-2 border-background/40 text-background bg-background/15 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:bg-background/25 hover:border-background/60 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Video
                    </Button>
                    <Button
                      type="button"
                      onClick={goToContact}
                      variant="outline"
                      className="border-2 border-background/40 text-background bg-background/15 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:bg-background/25 hover:border-background/60 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-background/50 w-3 hover:bg-background/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Donate Dialog */}
      <HeroDonationDialog open={isDonateOpen} onOpenChange={setIsDonateOpen} />
    </>
  )
}

export default HeroSection
