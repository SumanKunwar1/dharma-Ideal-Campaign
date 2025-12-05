import { GraduationCap, HeartPulse, Home, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const causes = [
  {
    icon: GraduationCap,
    title: "Education for Underprivileged",
    description: "Help provide quality education to children who lack resources and opportunities.",
    raised: 4500,
    goal: 10000,
    donors: 128,
  },
  {
    icon: HeartPulse,
    title: "Medical Emergency Relief",
    description: "Support individuals facing life-threatening conditions with critical medical care.",
    raised: 7200,
    goal: 15000,
    donors: 245,
  },
  {
    icon: Home,
    title: "Elderly Care Facilities",
    description: "Sponsor elderly care services providing peace, dignity, and spiritual support.",
    raised: 3800,
    goal: 8000,
    donors: 89,
  },
  {
    icon: BookOpen,
    title: "Spiritual Wisdom Programs",
    description: "Fund meditation retreats and spiritual guidance sessions for inner peace.",
    raised: 2100,
    goal: 5000,
    donors: 67,
  },
];

const CausesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-spiritual-green/10 text-spiritual-green text-sm font-medium mb-4">
            Popular Causes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Make a{" "}
            <span className="text-gradient-gold">Difference Today</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Your contribution directly impacts lives. Choose a cause close to your heart 
            and help us create meaningful change.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {causes.map((cause, index) => {
            const progress = (cause.raised / cause.goal) * 100;
            
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <cause.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {cause.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cause.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full gradient-gold transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-lg font-bold text-gold">${cause.raised.toLocaleString()}</span>
                    <span className="text-muted-foreground"> / ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{cause.donors}</span> donors
                  </div>
                </div>

                {/* Donate Button */}
                <Button variant="saffron" className="w-full">
                  <Heart className="w-4 h-4" />
                  Donate to This Cause
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
