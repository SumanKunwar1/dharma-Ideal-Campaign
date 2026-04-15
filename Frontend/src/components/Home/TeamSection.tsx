import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Khenpo Sonam Gyurme Tamang",
    role: "Founder & CEO",
    description:
      "Visionary leader guiding our mission with wisdom, compassion, and unwavering dedication to the Dharma.",
    photo:
      "https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776225248/WhatsApp_Image_2026-04-14_at_16.44.17_ccts41.jpg",
  },
  {
    name: "H.E. Syalpa Tenzin Rinpoche",
    role: "Peace Ambassador Nepal",
    description:
      "A revered spiritual figure dedicated to promoting peace and harmony across Nepal and beyond.",
    photo:
      "https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776225248/WhatsApp_Image_2026-04-14_at_16.47.52_jstdoj.jpg",
  },
  {
    name: "HRH Princess Asharaje Gaekwad",
    role: "Peace Ambassador India",
    description:
      "A distinguished ambassador championing peace, spiritual growth, and community welfare in India.",
    photo:
      "https://res.cloudinary.com/dihev9qxc/image/upload/q_auto/f_auto/v1776225250/WhatsApp_Image_2026-04-14_at_18.31.39_y91mnr.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
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
            Our dedicated leaders work tirelessly to bring positive change to
            communities around the world.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-3xl bg-background border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold/50 transition-colors shadow-lg group-hover:shadow-glow">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-gold transition-colors">
                {member.name}
              </h3>
              <p className="text-gold font-semibold text-sm mb-3">{member.role}</p>
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
                  Join our global network of volunteers and contribute to positive
                  change. Your time and skills can make a real difference in
                  someone's life.
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
