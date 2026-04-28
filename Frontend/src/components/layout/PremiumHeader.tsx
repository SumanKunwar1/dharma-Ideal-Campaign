"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Heart, ChevronDown, Copy, Check, Upload } from "lucide-react"
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

// ── Bank Details (shared with SponsorPage) ────────────────────────────────────

function HeaderBankDetails() {
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
        <h4 className="font-semibold text-[#333333] mb-3 text-sm">Nepal — Prabhu Bank, Boudha</h4>
        <div className="space-y-2">
          {[
            { label: "Account Name", value: "B.T.M.C. Foundation" },
            { label: "Account No.", value: "0570155982700014" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between bg-[#FFF8E7] p-2 rounded-lg text-xs">
              <div>
                <span className="text-[#7A5200]">{item.label}: </span>
                <span className="font-semibold text-[#333333]">{item.value}</span>
              </div>
              <CopyBtn text={item.value} label={`h-np-${item.label}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 border border-[#F4C430]/30">
        <h4 className="font-semibold text-[#333333] mb-3 text-sm">India — Bank of India, Salugara</h4>
        <div className="space-y-2">
          {[
            { label: "Account Name", value: "BTMC Foundation" },
            { label: "Account No.", value: "50782011000314" },
            { label: "IFSC Code", value: "BKID0005078" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between bg-[#FFF8E7] p-2 rounded-lg text-xs">
              <div>
                <span className="text-[#7A5200]">{item.label}: </span>
                <span className="font-semibold text-[#333333]">{item.value}</span>
              </div>
              <CopyBtn text={item.value} label={`h-in-${item.label}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Donation Dialog ───────────────────────────────────────────────────────────

function HeaderDonationDialog({
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
                rows={2}
              />
            </div>

            <HeaderBankDetails />

            <div>
              <Label className="text-[#333333] font-semibold">Upload Payment Screenshot *</Label>
              <div className="mt-2 border-2 border-dashed border-[#F4C430]/40 rounded-xl p-4 text-center hover:border-[#F4C430] transition-colors relative">
                <Upload className="w-6 h-6 text-[#F4C430] mx-auto mb-1" />
                <p className="text-sm text-[#7A5200]">
                  {screenshot ? screenshot.name : "Click to upload"}
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
            <h3 className="font-serif text-2xl font-bold text-[#333333] mb-2">Thank You!</h3>
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

// ── Header Component ──────────────────────────────────────────────────────────

const PremiumHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDonateOpen, setIsDonateOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Sponsors", path: "/sponsor" },
    { name: "Projects", path: "/programs" },
  ]

  const dropdownLinks = [
    { name: "Our Masters", path: "/masters" },
    { name: "Popular Causes", path: "/causes" },
    { name: "Membership", path: "/membership" },
    { name: "Contact Us", path: "/contact" },
  ]

  const secondaryLinks = [
    { name: "Team", path: "/team" },
    { name: "Weekly Retreat Sponsors", path: "/sponsor#weekly-retreat" },
    { name: "Ngyungne Retreat Sponsors", path: "/sponsor#ngyungne-retreat" },
    { name: "Volunteer", path: "/volunteer" },
  ]

  const becomeDharmaLink = { name: "Become Dharma Ideal", path: "/membership" }

  const isActive = (path: string) => {
    const basePath = path.split("#")[0]
    return location.pathname === basePath
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-lg shadow-[#F4C430]/10 border-b border-[#F4C430]/20"
            : "bg-[#FFFFFF]/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dihev9qxc/image/upload/v1768125463/dharma-logo_xeh5nn.png"
                  alt="Dharma Ideal Campaign Logo"
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-sm ${
                    isActive(link.path) ? "text-[#F4C430] font-semibold" : "text-[#7A5200]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="relative group">
                <button className="flex items-center gap-1 text-[#7A5200] hover:text-[#F4C430] transition-colors nav-link text-sm">
                  More
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white border border-[#F4C430]/20 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-[#7A5200] hover:bg-[#F4C430]/10 hover:text-[#F4C430] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="border-t border-[#F4C430]/10 my-2"></div>
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-[#7A5200] hover:bg-[#F4C430]/10 hover:text-[#F4C430] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link to={becomeDharmaLink.path}>
                <Button
                  variant="outline"
                  className="border-[#F4C430] text-[#B8860B] hover:bg-[#F4C430]/10"
                >
                  {becomeDharmaLink.name}
                </Button>
              </Link>
              <Button
                onClick={() => setIsDonateOpen(true)}
                className="bg-gradient-to-r from-[#FF8C00] to-[#F4C430] hover:from-[#F4C430] hover:to-[#DAA520] text-white border-0"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#333333] hover:text-[#F4C430] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-[#F4C430]/20 bg-[#FFFFFF]">
              <nav className="flex flex-col gap-2 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      isActive(link.path)
                        ? "bg-[#F4C430]/10 text-[#F4C430] font-semibold"
                        : "text-[#7A5200] hover:bg-[#FFF8E7]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-4 py-2 rounded-lg text-[#7A5200] hover:bg-[#FFF8E7] flex items-center justify-between transition-colors text-left"
                >
                  More
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="bg-[#FFF8E7] rounded-lg ml-4">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-[#7A5200] hover:text-[#F4C430] transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="border-t border-[#F4C430]/10 my-2"></div>
                    {secondaryLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-[#7A5200] hover:text-[#F4C430] transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </nav>
              <Link to={becomeDharmaLink.path} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-[#F4C430] text-[#B8860B] hover:bg-[#F4C430]/10 mb-3"
                >
                  {becomeDharmaLink.name}
                </Button>
              </Link>
              <Button
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsDonateOpen(true)
                }}
                className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] hover:from-[#F4C430] hover:to-[#DAA520] text-white border-0"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Donate Dialog */}
      <HeaderDonationDialog open={isDonateOpen} onOpenChange={setIsDonateOpen} />
    </>
  )
}

export default PremiumHeader
