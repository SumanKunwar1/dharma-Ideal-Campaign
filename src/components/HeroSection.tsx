import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";
import heroMandala from "@/assets/hero-mandala.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroMandala}
          alt="Sacred mandala pattern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Mandala Pattern Overlay */}
      <div className="absolute inset-0 mandala-pattern opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-gold/10 blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-saffron/10 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-spiritual-blue/10 blur-xl animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-gold/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Worldwide Non-Profit Charity Organization</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Spreading{" "}
            <span className="text-gradient-gold">Compassion</span>
            <br />
            Across the World
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Empowering communities through education, healthcare, spiritual guidance, 
            and compassionate outreach. Together, we create lasting positive change.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl">
              <Heart className="w-5 h-5" />
              Make a Donation
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            {[
              { number: "20+", label: "Countries Reached" },
              { number: "400+", label: "Active Volunteers" },
              { number: "721K+", label: "People Helped" },
              { number: "$11K+", label: "Funds Raised" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
