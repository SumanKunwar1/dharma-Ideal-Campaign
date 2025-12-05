import { Calendar, MapPin, ArrowRight, Award, HelpCircle, Music, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    icon: Award,
    title: "International Dharma Awards",
    description: "Celebrating individuals and organizations contributing to global spiritual progress.",
    date: "Coming Soon",
    location: "Kathmandu, Nepal",
    featured: true,
  },
  {
    icon: HelpCircle,
    title: "Questions of Wisdom",
    description: "A reflective journey into deep philosophical and spiritual inquiries.",
    date: "Monthly Events",
    location: "Virtual & In-Person",
    featured: false,
  },
  {
    icon: Music,
    title: "Dharma Tune",
    description: "Sacred melodies designed to inspire meditation, peace, and inner harmony.",
    date: "Weekly Sessions",
    location: "Various Locations",
    featured: false,
  },
  {
    icon: Crown,
    title: "Miss Bhrikuti Tara",
    description: "Honoring exceptional women who embody compassion, leadership, and wisdom.",
    date: "Annual Event",
    location: "Nepal",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Ngyungne Buddhist Event",
    description: "A global spiritual gathering focused on empowerment, compassion, and purification practices.",
    date: "2024",
    location: "International",
    featured: true,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 mandala-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Upcoming Events
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our{" "}
            <span className="text-gradient-gold">Spiritual Gatherings</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Participate in transformative events that nurture the soul and strengthen community bonds.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                event.featured
                  ? "bg-gradient-to-br from-gold/5 to-saffron/5 border-gold/30 hover:border-gold/50 shadow-card"
                  : "bg-background border-border hover:border-gold/30"
              }`}
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full gradient-saffron text-white text-xs font-semibold">
                  Featured
                </div>
              )}

              <div className="flex gap-5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  event.featured ? "gradient-gold" : "bg-gold/10"
                }`}>
                  <event.icon className={`w-7 h-7 ${event.featured ? "text-primary-foreground" : "text-gold"}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-gold" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-saffron" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
