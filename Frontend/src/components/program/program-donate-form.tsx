"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Heart } from "lucide-react"
import type { Program } from "@/data/programs"

interface DonateFormProps {
  program: Program
}

const DONATION_AMOUNTS = [50, 100, 250, 500, 1000]

export const ProgramDonateForm: React.FC<DonateFormProps> = ({ program }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [totalDonated, setTotalDonated] = useState(0)
  const [updatedFunding, setUpdatedFunding] = useState(program.fundingRaised)
  const { toast } = useToast()

  const finalAmount = selectedAmount || (customAmount ? Number.parseInt(customAmount) : 0)
  const newFundingTotal = updatedFunding + totalDonated

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newTotal = totalDonated + finalAmount
      setTotalDonated(newTotal)
      setUpdatedFunding(program.fundingRaised + newTotal)

      toast({
        title: "Thank You!",
        description: `Your donation of $${finalAmount} to ${program.title} has been received. Your generosity makes a difference!`,
      })

      setSelectedAmount(null)
      setCustomAmount("")
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
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

      <p className="text-xs text-center text-[#7A5200]">
        Your donation is secure and will directly support {program.title} program activities.
      </p>
    </form>
  )
}

export default ProgramDonateForm
