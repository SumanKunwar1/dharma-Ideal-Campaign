"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const PremiumHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
    { name: "Programs", path: "/programs" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Sponsor", path: "/sponsor" },
    { name: "Volunteer", path: "/volunteer" },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
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
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-2xl font-bold text-white">☸</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-bold text-[#333333]">DHARMA</span>
              <span className="block text-xs text-[#7A5200] tracking-wider font-medium">Ideal Campaign</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? "text-[#F4C430] font-semibold" : "text-[#7A5200]"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Button className="bg-gradient-to-r from-[#FF8C00] to-[#F4C430] hover:from-[#F4C430] hover:to-[#DAA520] text-white border-0">
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
            </nav>
            <Button className="w-full bg-gradient-to-r from-[#FF8C00] to-[#F4C430] hover:from-[#F4C430] hover:to-[#DAA520] text-white border-0">
              <Heart className="w-4 h-4" />
              Donate Now
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

export default PremiumHeader
