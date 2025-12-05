import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamRoles = [
  {
    role: "Founder & CEO",
    description: "Visionary leader guiding our mission with wisdom and compassion.",
    initial: "FC",
  },
  {
    role: "Chief Executives",
    description: "Strategic minds driving operational excellence and growth.",
    initial: "CE",
  },
  {
    role: "Advisors",
    description: "Experienced mentors providing guidance and spiritual insight.",
    initial: "AD",
  },
  {
    role: "Community Coordinators",
    description: "Dedicated individuals connecting with communities worldwide.",
    initial: "CC",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-spiritual-blue/10 text-spiritual-blue text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the{" "}
            <span className="text-gradient-gold">Compassionate Hearts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our dedicated team of leaders and volunteers work tirelessly to bring 
            positive change to communities around the world.
          </p>
        </div>

        {/* Team Roles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamRoles.map((member, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-3xl bg-background border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-glow transition-shadow">
                <span className="font-serif text-2xl font-bold text-primary-foreground">
                  {member.initial}
                </span>
              </div>
              
              <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                {member.role}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Volunteer CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-saffron opacity-10" />
            <div className="absolute inset-0 border-2 border-saffron/30 rounded-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl gradient-saffron flex items-center justify-center flex-shrink-0">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Become a Volunteer
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  Join our global network of volunteers and contribute to positive change. 
                  Your time and skills can make a real difference in someone's life.
                </p>
              </div>

              <Button variant="saffron" size="xl" className="flex-shrink-0">
                Join Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
