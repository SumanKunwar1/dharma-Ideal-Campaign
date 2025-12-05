import { GraduationCap, Home, Mountain, HeartPulse, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: GraduationCap,
    title: "Free Education",
    description: "Providing quality education to disadvantaged children, helping them break cycles of poverty.",
    color: "spiritual-blue",
    bgClass: "bg-spiritual-blue/10",
    iconBg: "bg-spiritual-blue",
  },
  {
    icon: Home,
    title: "Nyingje Lahakhang",
    description: "A sanctuary for the elderly offering peace, meditation, care, and spiritual support.",
    color: "gold",
    bgClass: "bg-gold/10",
    iconBg: "gradient-gold",
  },
  {
    icon: Mountain,
    title: "Pilgrimage Tours",
    description: "Guided tours with spiritual teachers, meditation practices, and inner peace experiences.",
    color: "spiritual-green",
    bgClass: "bg-spiritual-green/10",
    iconBg: "bg-spiritual-green",
  },
  {
    icon: HeartPulse,
    title: "Medical Support",
    description: "We raise funds to help individuals battling life-threatening health conditions.",
    color: "spiritual-red",
    bgClass: "bg-spiritual-red/10",
    iconBg: "bg-spiritual-red",
  },
  {
    icon: BookOpen,
    title: "Monastic Education",
    description: "In-depth spiritual and religious studies for monks and practitioners.",
    color: "saffron",
    bgClass: "bg-saffron/10",
    iconBg: "gradient-saffron",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development programs empowering women to achieve financial independence.",
    color: "deep-gold",
    bgClass: "bg-deep-gold/10",
    iconBg: "bg-deep-gold",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-background relative">
      {/* Prayer Flags Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 prayer-flags" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Lives Through{" "}
            <span className="text-gradient-gold">Compassionate Outreach</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our diverse programs address the fundamental needs of communities, 
            providing holistic support for education, health, and spiritual well-being.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-card hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${program.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="saffron" size="xl">
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
