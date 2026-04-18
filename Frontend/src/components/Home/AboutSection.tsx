import { Target, Eye, Heart, Globe, BookOpen, Users } from "lucide-react";
import lotusDecoration from "@/assets/lotus-decoration.png";

// ── Decorative Dharma Wheel ───────────────────────────────────────────────────
const DharmaWheelSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
    <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      const x1 = 50 + 8 * Math.cos(angle);
      const y1 = 50 + 8 * Math.sin(angle);
      const x2 = 50 + 44 * Math.cos(angle);
      const y2 = 50 + 44 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />;
    })}
    <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
  </svg>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-8">
        <img src={lotusDecoration} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-56 h-56 opacity-8 rotate-180">
        <img src={lotusDecoration} alt="" className="w-full h-full object-contain" />
      </div>
      <DharmaWheelSVG className="absolute top-16 left-8 w-40 h-40 text-gold opacity-[0.06]" />
      <DharmaWheelSVG className="absolute bottom-16 right-8 w-32 h-32 text-saffron opacity-[0.06]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4 border border-gold/20">
            About DHARMA IDEAL
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Creating Lasting Change Through{" "}
            <span className="text-gradient-gold">Compassion</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are a global movement dedicated to fostering world peace, spiritual growth, and compassionate living 
            through the authentic teachings of Lord Gautama Buddha.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
                alt="Buddhist temple with offerings and prayer lamps"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="font-serif text-lg text-white italic">
                  "Compassion is the essence of all teachings"
                </p>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-card rounded-2xl p-5 shadow-card border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl gradient-saffron flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">15+ Years</div>
                  <div className="text-sm text-muted-foreground">Serving Communities</div>
                </div>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-foreground">20+</div>
                  <div className="text-xs text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Dharma Ideal Campaign</strong> was founded on the principle that
              genuine change comes from combining spiritual wisdom with practical action. In this campaign,{" "}
              <em>Dharma</em> refers to those on the way of Buddha's virtue through transcendental meditation and
              wisdom, while <em>Ideal</em> refers to personalities who uphold the five foundational precepts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to give birth to and nurture peace lovers, Dharma followers, and ideal personalities —
              conducting regular classes and well-managed camps for world peace, meditation, and spiritual
              reformation for the happiness and enlightenment of all beings.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Free Education Programs",
                "Medical Support & Aid",
                "Weekly Retreat Programs",
                "Spiritual Guidance",
                "Women Empowerment",
                "Community Outreach",
                "Annual Ngyungne Retreat",
                "World Peace Campaigns",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission / Vision / Why Join — 3 cards row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="group p-8 rounded-3xl bg-background border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card">
            <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fostering global peace, prosperity, freedom, and enlightenment by uniting diverse communities through
              spiritual and cultural events — promoting understanding and elevating human consciousness worldwide.
            </p>
          </div>

          {/* Vision */}
          <div className="group p-8 rounded-3xl bg-background border border-border hover:border-saffron/30 transition-all duration-300 hover:shadow-card">
            <div className="w-14 h-14 rounded-2xl gradient-saffron flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A world where harmony prevails, conflicts are resolved through dialogue and mutual respect, and every
              individual has access to spiritual guidance, education, and opportunities for growth and enlightenment.
            </p>
          </div>

          {/* Why Join */}
          <div className="group p-8 rounded-3xl bg-background border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">Why Join Us?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic Buddhist teachings, holistic life transformation, global spiritual network, free &amp;
              accessible programs — and the opportunity to contribute directly to world peace and human welfare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;