"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
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
  /** Facebook reel/video URL (not the embed URL) */
  url: string
}

const SPONSOR_VIDEOS: SponsorVideo[] = [
  {
    id: "1",
    title: "Dharma Ideal Sponsor",
    description: "Learn about our sponsorship program and the impact it creates",
    url: "https://www.facebook.com/reel/1205814651443890",
  },
  // Add more videos here in the future:
  // {
  //   id: "2",
  //   title: "10 Year Sponsor",
  //   description: "A decade of supporting dharma activities",
  //   url: "https://www.facebook.com/reel/...",
  // },
]

/** Convert a Facebook reel/video URL into its embeddable plugin URL */
function getFacebookEmbedUrl(url: string): string {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    url
  )}&show_text=false&width=720&height=405&appId`
}

const SponsorVideosSection = () => {
  const [activeVideo, setActiveVideo] = useState<SponsorVideo | null>(null)

  return (
    <section id="sponsor-videos" className="py-24 bg-[#FFF8E7] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4C430]/10 text-[#F4C430] text-sm font-medium mb-4">
            Sponsor Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Meet Our <span className="gradient-gold-text">Sponsor Members</span>
          </h2>
          <p className="text-[#7A5200] text-lg leading-relaxed">
            Watch stories from our sponsor members and discover the meaningful impact of their
            generous support.
          </p>
        </div>

        {/* Videos Grid */}
        <div
          className={`mx-auto ${
            SPONSOR_VIDEOS.length === 1
              ? "max-w-2xl"
              : SPONSOR_VIDEOS.length === 2
              ? "max-w-4xl"
              : "max-w-6xl"
          }`}
        >
          <div
            className={`grid gap-6 ${
              SPONSOR_VIDEOS.length === 1
                ? "grid-cols-1"
                : SPONSOR_VIDEOS.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : SPONSOR_VIDEOS.length === 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {SPONSOR_VIDEOS.map((video) => (
              <div
                key={video.id}
                className="group rounded-2xl overflow-hidden bg-white shadow-card border border-[#F4C430]/15 hover:shadow-glow hover:border-[#F4C430]/40 transition-all duration-300"
              >
                {/* Live video thumbnail from Facebook embed */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  {/* Actual Facebook embed – shows the real video poster/thumbnail */}
                  <iframe
                    src={getFacebookEmbedUrl(video.url)}
                    className="w-full h-full border-0 pointer-events-none"
                    allow="encrypted-media"
                    allowFullScreen={false}
                    tabIndex={-1}
                  />

                  {/* Clickable overlay with play button */}
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="absolute inset-0 z-10 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-7 h-7 text-[#F4C430] ml-1" />
                    </div>
                  </button>
                </div>

                {/* Info */}
                <button
                  onClick={() => setActiveVideo(video)}
                  className="w-full text-left p-4 cursor-pointer"
                >
                  <h3 className="font-serif text-lg font-bold text-[#333333] mb-1 group-hover:text-[#F4C430] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[#7A5200] line-clamp-2">{video.description}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Popup Dialog */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{activeVideo?.title ?? "Video"}</DialogTitle>
            <DialogDescription>Sponsor member video</DialogDescription>
          </DialogHeader>

          {/* Close button */}
          <button
            onClick={() => setActiveVideo(null)}
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
