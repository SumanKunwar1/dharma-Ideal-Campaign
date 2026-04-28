"use client"

import { useState } from "react"
import { Play, X, Heart, Sparkles, Globe, Award, Users, Tv, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface SponsorVideo {
  id: string
  title: string
  description: string
  url: string
}

const SPONSOR_VIDEOS: SponsorVideo[] = [
  {
    id: "1",
    title: "Why Become a Dharma Ideal Sponsor",
    description:
      "Hear from our spiritual masters about the lasting impact of becoming a Dharma Ideal sponsor.",
    url: "https://www.facebook.com/reel/1205814651443890",
  },
]

type Reason = {
  icon: React.ElementType
  title: string
  description: string
}

const REASONS: Reason[] = [
  {
    icon: Sparkles,
    title: "Authentic Buddhist Teachings",
    description:
      "Direct access to teachings, retreats, and practices guided by accomplished spiritual masters in an unbroken lineage.",
  },
  {
    icon: Globe,
    title: "Global Spiritual Network",
    description:
      "Join a community of practitioners spanning 20+ countries, united in compassion, mindfulness, and service.",
  },
  {
    icon: Award,
    title: "Lasting Brand Recognition",
    description:
      "Featured visibility on Dharma Television, retreat platforms, and international outreach — recognition that endures.",
  },
  {
    icon: Heart,
    title: "Holistic Life Transformation",
    description:
      "Personal growth, inner peace, and well-being for you, your family, and your team — through proven spiritual practice.",
  },
  {
    icon: Users,
    title: "Free & Accessible Programs",
    description:
      "Your sponsorship keeps weekly retreats, education, and prayer programs free for those who need them most.",
  },
  {
    icon: Globe,
    title: "Contribute to World Peace",
    description:
      "Be part of a humanitarian movement holding World Peace Prayers across Sri Lanka, India, China, and Indonesia.",
  },
  {
    icon: Tv,
    title: "Dharma Television Privileges",
    description:
      "Personalized broadcasts, special pujas, memorial prayers, and ongoing access to wisdom teachings.",
  },
  {
    icon: BookOpen,
    title: "Sacred Knowledge Access",
    description:
      "Exclusive teachings, structured courses from basic to advanced, and guidance on Yidam & protector deity practices.",
  },
]

function getFacebookEmbedUrl(url: string): string {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    url
  )}&show_text=false&width=720&height=405&appId`
}

const SponsorVideosSection = () => {
  const [activeVideo, setActiveVideo] = useState<SponsorVideo | null>(null)
  const featuredVideo = SPONSOR_VIDEOS[0]

  return (
    <section id="sponsor-videos" className="py-24 bg-[#FFF8E7] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F4C430]/8 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#FF8C00]/8 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4C430]/10 text-[#B8860B] text-sm font-semibold tracking-widest uppercase mb-4 border border-[#F4C430]/20">
            🌟 Why Sponsor Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Why I Should Become a{" "}
            <span className="gradient-gold-text">Dharma Ideal Sponsor</span>
          </h2>
          <p className="text-[#7A5200] text-lg leading-relaxed">
            Watch the story, then explore the reasons. Your sponsorship is more than a contribution —
            it's a lifelong partnership with a globally respected spiritual mission.
          </p>
        </div>

        {/* Video + Reading Article */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left — Video Player */}
          <div className="flex flex-col">
            <div className="group rounded-3xl overflow-hidden bg-white shadow-card border border-[#F4C430]/15 hover:shadow-glow hover:border-[#F4C430]/40 transition-all duration-300 flex-1 flex flex-col">
              <div className="relative aspect-video overflow-hidden bg-black">
                <iframe
                  src={getFacebookEmbedUrl(featuredVideo.url)}
                  className="w-full h-full border-0 pointer-events-none"
                  allow="encrypted-media"
                  allowFullScreen={false}
                  tabIndex={-1}
                />
                <button
                  onClick={() => setActiveVideo(featuredVideo)}
                  aria-label="Play video"
                  className="absolute inset-0 z-10 bg-black/15 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full bg-white/95 shadow-lg flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-[#F4C430] ml-1" />
                  </div>
                </button>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl font-bold text-[#333333] mb-2">
                  {featuredVideo.title}
                </h3>
                <p className="text-sm text-[#7A5200] leading-relaxed mb-5">
                  {featuredVideo.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Button
                    onClick={() => setActiveVideo(featuredVideo)}
                    className="bg-gradient-to-r from-[#FF8C00] to-[#F4C430] text-white border-0"
                  >
                    <Play className="w-4 h-4 mr-2" /> Watch Full Story
                  </Button>
                  <Link to="/sponsor">
                    <Button variant="outline" className="border-[#F4C430] text-[#B8860B] hover:bg-[#F4C430]/10">
                      <Heart className="w-4 h-4 mr-2" /> Become a Sponsor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Reasons table / reading article */}
          <div className="bg-white rounded-3xl border border-[#F4C430]/20 shadow-card overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-[#F4C430] to-[#FF8C00] px-6 py-5">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                Top Reasons to Sponsor
              </h3>
              <p className="text-white/85 text-sm">A reading guide for prospective partners</p>
            </div>
            <div className="divide-y divide-[#F4C430]/15 max-h-[28rem] overflow-y-auto">
              {REASONS.map((reason, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 px-5 md:px-6 py-4 hover:bg-[#FFF8E7] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F4C430]/20 to-[#FF8C00]/15 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-[#F4C430]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h4 className="font-serif font-bold text-[#333333] text-base leading-tight">
                        {reason.title}
                      </h4>
                    </div>
                    <p className="text-sm text-[#7A5200] mt-1 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-[#F4C430]/15 bg-[#FFF8E7]">
              <p className="text-xs text-[#7A5200] italic">
                💡 Read at your pace — every reason matters. When you're ready, take the first step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Dialog */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{activeVideo?.title ?? "Video"}</DialogTitle>
            <DialogDescription>Sponsor story video</DialogDescription>
          </DialogHeader>

          <button
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {activeVideo && (
            <div className="aspect-video w-full">
              <iframe
                src={`${getFacebookEmbedUrl(activeVideo.url)}&autoplay=1`}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default SponsorVideosSection
