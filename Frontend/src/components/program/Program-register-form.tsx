"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import type { Program } from "@/data/programs"

interface RegisterFormProps {
  program: Program
}

export const ProgramRegisterForm: React.FC<RegisterFormProps> = ({ program }) => {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        program: program.title,
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success!",
        description: "Your registration has been submitted. We'll contact you soon.",
      })

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

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-card space-y-4">
      <h3 className="font-serif text-2xl font-bold text-[#333333] mb-4">Join This Program</h3>
      <div>
        <Label htmlFor="name" className="text-[#333333]">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Enter your full name"
          className="border-[#F4C430]/30 focus:border-[#F4C430]"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-[#333333]">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="border-[#F4C430]/30 focus:border-[#F4C430]"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-[#333333]">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          className="border-[#F4C430]/30 focus:border-[#F4C430]"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-[#333333]">
          Why are you interested in this program?
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share your motivation and goals..."
          className="border-[#F4C430]/30 focus:border-[#F4C430] resize-none"
          rows={4}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#F4C430] text-white hover:bg-[#DAA520] font-semibold"
      >
        {loading ? "Registering..." : "Register Now"}
      </Button>
    </form>
  )
}

export default ProgramRegisterForm
