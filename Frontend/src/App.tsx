"use client"

import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"

// Pages
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProgramsPage from "./pages/ProgramsPage"
import EventsPage from "./pages/EventsPage"
import TeamPage from "./pages/TeamPage"
import SponsorPage from "./pages/SponsorPage"
import VolunteerPage from "./pages/VolunteerPage"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/sponsor" element={<SponsorPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
