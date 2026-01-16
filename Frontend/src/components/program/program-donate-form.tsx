"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Heart, Copy, Check } from "lucide-react"
import type { Program } from "@/data/programs"

interface DonateFormProps {
  program: Program
}

const DONATION_AMOUNTS = [50, 100, 250, 500, 1000]

const QR_CODE_SVG = `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
    <rect width="200" height="200" fill="white"/>
    <rect x="20" y="20" width="40" height="40" fill="black"/>
    <rect x="30" y="30" width="20" height="20" fill="white"/>
    <rect x="140" y="20" width="40" height="40" fill="black"/>
    <rect x="150" y="30" width="20" height="20" fill="white"/>
    <rect x="20" y="140" width="40" height="40" fill="black"/>
    <rect x="30" y="150" width="20" height="20" fill="white"/>
    <rect x="60" y="60" width="80" height="80" fill="none" stroke="black" strokeWidth="2"/>
    <circle cx="100" cy="100" r="20" fill="black"/>
  </svg>
`

export const ProgramDonateForm: React.FC<DonateFormProps> = ({ program }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [totalDonated, setTotalDonated] = useState(0)
  const [updatedFunding, setUpdatedFunding] = useState(program.fundingRaised)
  const [showBankDetails, setShowBankDetails] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const finalAmount = selectedAmount || (customAmount ? Number.parseInt(customAmount) : 0)
  const newFundingTotal = updatedFunding + totalDonated

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!finalAmount || finalAmount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    setTimeout(() => {
      const newTotal = totalDonated + finalAmount
      setTotalDonated(newTotal)
      setUpdatedFunding(program.fundingRaised + newTotal)

      toast({
        title: "Thank You!",
        description: `Your donation of $${finalAmount} to ${program.title} has been recorded. Your generosity makes a difference!`,
      })

      setSelectedAmount(null)
      setCustomAmount("")
      setShowBankDetails(true)
      setLoading(false)
    }, 800)
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fundingPercentage = (newFundingTotal / program.fundingGoal) * 100

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-card space-y-6">
      <div>
        <h3 className="font-serif text-2xl font-bold text-[#333333] mb-4">Support This Program</h3>
        <Label className="text-[#333333] font-semibold mb-3 block">Select Donation Amount</Label>
        <div className="grid grid-cols-2 gap-2">
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
                  ? "border-[#F4C430] bg-[#F4C430]/10 text-[#F4C430]"
                  : "border-[#F4C430]/30 text-[#7A5200] hover:border-[#F4C430]"
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="custom-amount" className="text-[#333333]">
          Or Enter Custom Amount
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-3 text-[#7A5200] font-semibold">$</span>
          <Input
            id="custom-amount"
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

      <div className="bg-[#FFF8E7] border border-[#F4C430]/30 rounded-lg p-4">
        <p className="text-sm text-[#7A5200] mb-2">
          <span className="font-semibold">Funding Progress:</span> ${newFundingTotal.toLocaleString()} of $
          {program.fundingGoal.toLocaleString()}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
            className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
          ></div>
        </div>
        <p className="text-xs text-[#7A5200]">{Math.round(Math.min(fundingPercentage, 100))}% funded</p>
      </div>

      <Button
        type="submit"
        disabled={loading || !finalAmount}
        className="w-full bg-[#F4C430] text-white hover:bg-[#DAA520] font-semibold py-6 text-lg"
      >
        <Heart className="w-5 h-5 mr-2" />
        {loading ? "Processing..." : `Donate $${finalAmount || "0"}`}
      </Button>

      {showBankDetails && (
        <div className="bg-[#FFF8E7] border-2 border-[#F4C430] rounded-2xl p-6 space-y-4 mt-6">
          <h4 className="font-serif text-lg font-bold text-[#333333] mb-4">Bank Transfer Details</h4>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-[#7A5200] mb-1">Account Holder</p>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#F4C430]/30">
                <p className="font-semibold text-[#333333]">Charity Foundation Inc.</p>
                <button
                  type="button"
                  onClick={() => handleCopy("Charity Foundation Inc.")}
                  className="text-[#F4C430] hover:text-[#DAA520]"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#7A5200] mb-1">Account Number</p>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#F4C430]/30">
                <p className="font-semibold text-[#333333]">1234567890</p>
                <button
                  type="button"
                  onClick={() => handleCopy("1234567890")}
                  className="text-[#F4C430] hover:text-[#DAA520]"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#7A5200] mb-1">Bank Name</p>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#F4C430]/30">
                <p className="font-semibold text-[#333333]">National Bank</p>
                <button
                  type="button"
                  onClick={() => handleCopy("National Bank")}
                  className="text-[#F4C430] hover:text-[#DAA520]"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#7A5200] mb-1">SWIFT Code</p>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#F4C430]/30">
                <p className="font-semibold text-[#333333]">NBKIUSSXXX</p>
                <button
                  type="button"
                  onClick={() => handleCopy("NBKIUSSXXX")}
                  className="text-[#F4C430] hover:text-[#DAA520]"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-4 border-t border-[#F4C430]/30">
            <p className="text-xs text-[#7A5200] mb-3 font-semibold">Scan QR Code</p>
            <div className="bg-white p-3 rounded-lg border border-[#F4C430]/30">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
                <rect width="200" height="200" fill="white" />
                <rect x="20" y="20" width="40" height="40" fill="black" />
                <rect x="30" y="30" width="20" height="20" fill="white" />
                <rect x="140" y="20" width="40" height="40" fill="black" />
                <rect x="150" y="30" width="20" height="20" fill="white" />
                <rect x="20" y="140" width="40" height="40" fill="black" />
                <rect x="30" y="150" width="20" height="20" fill="white" />
                <circle cx="100" cy="100" r="30" fill="black" />
              </svg>
            </div>
            <p className="text-xs text-[#7A5200] mt-3 text-center">Scan this QR code with your mobile banking app</p>
          </div>

          <p className="text-xs text-[#7A5200] text-center pt-4 border-t border-[#F4C430]/30">
            Thank you for your generous support. Your donation will be used to make a real impact.
          </p>
        </div>
      )}

      <p className="text-xs text-center text-[#7A5200]">
        Your donation will directly support {program.title} program activities.
      </p>
    </form>
  )
}

export default ProgramDonateForm
