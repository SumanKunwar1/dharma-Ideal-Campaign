"use client"

import { Heart, X, Copy, Check, Upload } from "lucide-react"
import { useState } from "react"

interface Cause {
  id: number
  title: string
  description: string
  image: string
  raised: number
  goal: number
  category: string
}

const DONATION_AMOUNTS = [50, 100, 250, 500, 1000]

const CausesPage = () => {
  const [causes, setCauses] = useState<Cause[]>([
    {
      id: 1,
      title: "Peace Campaign Tour",
      description: "A global peace tour fostering understanding and harmony across regions worldwide.",
      image: "/api/placeholder/400/300",
      raised: 5000,
      goal: 500000,
      category: "Peace",
    },
    {
      id: 2,
      title: "International Ngyungne Event",
      description: "A traditional fasting and purification event drawing participants globally.",
      image: "/api/placeholder/400/300",
      raised: 5000,
      goal: 517894,
      category: "Spiritual",
    },
    {
      id: 3,
      title: "Ngyungne Building Development",
      description: "Development and land purchase for international Ngyungne center.",
      image: "/api/placeholder/400/300",
      raised: 3000,
      goal: 406916,
      category: "Infrastructure",
    },
    {
      id: 4,
      title: "Triyana Bodhi Meditation Center",
      description: "Establishing a dedicated space for meditation and spiritual practice worldwide.",
      image: "/api/placeholder/400/300",
      raised: 10000,
      goal: 221955,
      category: "Meditation",
    },
    {
      id: 5,
      title: "Annual Preliminary Retreat Campaign",
      description: "A month-long immersive retreat introducing mindfulness and spiritual practice.",
      image: "/api/placeholder/400/300",
      raised: 0,
      goal: 18499,
      category: "Education",
    },
    {
      id: 6,
      title: "Community Outreach Program",
      description: "Compassionate outreach bringing dharma teachings to underserved communities.",
      image: "/api/placeholder/400/300",
      raised: 7500,
      goal: 150000,
      category: "Community",
    },
  ])

  const [selectedCause, setSelectedCause] = useState<Cause | null>(null)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [donorPhone, setDonorPhone] = useState("")
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null)
  const [screenshotPreview, setScreenshotPreview] = useState<string>("")

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  const openDonateModal = (cause: Cause) => {
    setSelectedCause(cause)
    setSelectedAmount(null)
    setCustomAmount("")
    setDonorName("")
    setDonorEmail("")
    setDonorPhone("")
    setPaymentScreenshot(null)
    setScreenshotPreview("")
  }

  const closeDonateModal = () => {
    setSelectedCause(null)
    setSelectedAmount(null)
    setCustomAmount("")
    setDonorName("")
    setDonorEmail("")
    setDonorPhone("")
    setPaymentScreenshot(null)
    setScreenshotPreview("")
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPaymentScreenshot(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDonateSubmit = () => {
    const finalAmount = selectedAmount || (customAmount ? Number.parseInt(customAmount) : 0)

    if (!finalAmount || finalAmount < 1) {
      alert("Please select or enter a valid donation amount.")
      return
    }

    if (!donorName || !donorEmail || !donorPhone) {
      alert("Please fill in all your details.")
      return
    }

    if (!paymentScreenshot) {
      alert("Please upload payment screenshot.")
      return
    }

    if (!selectedCause) return

    setLoading(true)

    setTimeout(() => {
      // Update the raised amount for the selected cause
      setCauses(prevCauses =>
        prevCauses.map(cause =>
          cause.id === selectedCause.id
            ? { ...cause, raised: cause.raised + finalAmount }
            : cause
        )
      )

      alert(`Thank you ${donorName}! Your donation of $${finalAmount} has been submitted for verification. We'll confirm once the payment is verified.`)
      
      setLoading(false)
      closeDonateModal()
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Popular <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Causes</span>
            </h1>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Support transformative initiatives creating positive global impact through compassion and wisdom.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {causes.map((cause) => (
              <div
                key={cause.id}
                className="group bg-white rounded-3xl border border-yellow-400/10 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-400/10 to-orange-500/10">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                    {cause.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-500 transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-amber-800 text-sm mb-4 leading-relaxed">{cause.description}</p>

                  <div className="mb-4">
                    <div className="w-full bg-yellow-400/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full transition-all duration-500"
                        style={{ width: `${getProgressPercentage(cause.raised, cause.goal)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-3 text-xs">
                      <span className="font-semibold text-gray-800">Raised: ${cause.raised.toLocaleString()}</span>
                      <span className="text-amber-800">Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openDonateModal(cause)}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-600 text-white border-0 rounded-lg py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {selectedCause && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative my-8">
            <button
              onClick={closeDonateModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="p-8">
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-2">
                Support {selectedCause.title}
              </h2>
              <p className="text-amber-800 mb-6">{selectedCause.description}</p>

              <div className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="text-gray-800 font-semibold mb-3 block">Select Donation Amount</label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                    {DONATION_AMOUNTS.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount("")
                        }}
                        className={`p-3 rounded-lg font-semibold transition-all duration-200 border-2 ${
                          selectedAmount === amount
                            ? "border-yellow-400 bg-yellow-400/10 text-yellow-600"
                            : "border-yellow-400/30 text-amber-800 hover:border-yellow-400"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="custom-amount" className="text-gray-800 font-semibold mb-2 block">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-amber-800 font-semibold">$</span>
                    <input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount(null)
                      }}
                      className="w-full pl-8 pr-4 py-3 border-2 border-yellow-400/30 rounded-lg focus:border-yellow-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Payment Details Section */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-yellow-400/30 rounded-2xl p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Payment Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Side - Account Information */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Bank Account Details</h4>
                      
                      {[
                        { label: "Account Holder", value: "Charity Foundation Inc." },
                        { label: "Account Number", value: "1234567890" },
                        { label: "Bank Name", value: "National Bank" },
                        { label: "SWIFT Code", value: "NBKIUSSXXX" },
                      ].map((detail) => (
                        <div key={detail.label}>
                          <p className="text-xs text-amber-800 mb-1 font-medium">{detail.label}</p>
                          <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-yellow-400/30">
                            <p className="font-semibold text-gray-800 text-sm">{detail.value}</p>
                            <button
                              type="button"
                              onClick={() => handleCopy(detail.value)}
                              className="text-yellow-500 hover:text-yellow-600 transition-colors"
                            >
                              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Side - QR Code */}
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl p-6 border border-yellow-400/30">
                      <p className="text-sm text-amber-800 mb-3 font-semibold">Scan QR Code to Pay</p>
                      <div className="bg-gray-50 p-4 rounded-lg border-2 border-yellow-400/20">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48">
                          <rect width="200" height="200" fill="white" />
                          <rect x="20" y="20" width="40" height="40" fill="black" />
                          <rect x="30" y="30" width="20" height="20" fill="white" />
                          <rect x="140" y="20" width="40" height="40" fill="black" />
                          <rect x="150" y="30" width="20" height="20" fill="white" />
                          <rect x="20" y="140" width="40" height="40" fill="black" />
                          <rect x="30" y="150" width="20" height="20" fill="white" />
                          <circle cx="100" cy="100" r="35" fill="black" />
                          <rect x="80" y="60" width="10" height="10" fill="black" />
                          <rect x="110" y="60" width="10" height="10" fill="black" />
                          <rect x="80" y="130" width="10" height="10" fill="black" />
                          <rect x="110" y="130" width="10" height="10" fill="black" />
                        </svg>
                      </div>
                      <p className="text-xs text-amber-700 mt-3 text-center">
                        Use your mobile banking app to scan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Donor Information Form */}
                <div className="bg-white border-2 border-yellow-400/30 rounded-2xl p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Your Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="donor-name" className="text-gray-800 font-medium mb-2 block text-sm">
                        Full Name *
                      </label>
                      <input
                        id="donor-name"
                        type="text"
                        placeholder="Enter your name"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-yellow-400/30 rounded-lg focus:border-yellow-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="donor-email" className="text-gray-800 font-medium mb-2 block text-sm">
                        Email Address *
                      </label>
                      <input
                        id="donor-email"
                        type="email"
                        placeholder="your@email.com"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-yellow-400/30 rounded-lg focus:border-yellow-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="donor-phone" className="text-gray-800 font-medium mb-2 block text-sm">
                      Phone Number *
                    </label>
                    <input
                      id="donor-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-yellow-400/30 rounded-lg focus:border-yellow-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-gray-800 font-medium mb-2 block text-sm">
                      Payment Screenshot *
                    </label>
                    <div className="border-2 border-dashed border-yellow-400/40 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="screenshot-upload"
                      />
                      <label htmlFor="screenshot-upload" className="cursor-pointer">
                        {screenshotPreview ? (
                          <div className="space-y-3">
                            <img
                              src={screenshotPreview}
                              alt="Payment screenshot preview"
                              className="max-h-48 mx-auto rounded-lg"
                            />
                            <p className="text-sm text-green-600 font-medium">✓ Screenshot uploaded</p>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault()
                                setPaymentScreenshot(null)
                                setScreenshotPreview("")
                              }}
                              className="text-xs text-amber-700 hover:text-amber-900 underline"
                            >
                              Change screenshot
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <Upload className="w-12 h-12 mx-auto text-yellow-500" />
                            <div>
                              <p className="text-gray-800 font-medium">Click to upload payment screenshot</p>
                              <p className="text-xs text-amber-700 mt-1">PNG, JPG up to 10MB</p>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Progress Info */}
                <div className="bg-amber-50 border border-yellow-400/30 rounded-lg p-4">
                  <p className="text-sm text-amber-800 mb-2">
                    <span className="font-semibold">Current Progress:</span> ${selectedCause.raised.toLocaleString()} of ${selectedCause.goal.toLocaleString()}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(getProgressPercentage(selectedCause.raised, selectedCause.goal), 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-amber-800">
                    {Math.round(Math.min(getProgressPercentage(selectedCause.raised, selectedCause.goal), 100))}% funded
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleDonateSubmit}
                  disabled={loading || !(selectedAmount || customAmount) || !donorName || !donorEmail || !donorPhone || !paymentScreenshot}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed font-semibold py-4 text-lg rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Heart className="w-5 h-5" />
                  {loading ? "Submitting..." : `Submit Donation $${selectedAmount || customAmount || "0"}`}
                </button>

                <p className="text-xs text-center text-amber-700">
                  * Your donation will be verified within 24 hours. You'll receive a confirmation email once approved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default CausesPage