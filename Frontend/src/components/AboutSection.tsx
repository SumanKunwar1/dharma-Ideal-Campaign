import { Target, Eye, Heart } from "lucide-react";
import lotusDecoration from "@/assets/lotus-decoration.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <img src={lotusDecoration} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 rotate-180">
        <img src={lotusDecoration} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            About DHARMA
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Creating Lasting Change Through{" "}
            <span className="text-gradient-gold">Compassion</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are a global non-profit organization dedicated to creating lasting change by providing 
            educational, medical, spiritual, and social support to those in need.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
              <div className="w-full h-full bg-gradient-to-br from-gold/20 via-saffron/10 to-spiritual-blue/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-glow animate-glow-pulse">
                    <span className="text-6xl">☸</span>
                  </div>
                  <p className="font-serif text-2xl text-foreground italic">
                    "Compassion is the essence of all teachings"
                  </p>
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-card rounded-2xl p-6 shadow-card border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl gradient-saffron flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">15+ Years</div>
                  <div className="text-sm text-muted-foreground">Serving Communities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our initiatives uplift underprivileged communities through free education, 
              compassionate elderly care, pilgrimage tours, meditation retreats, healthcare 
              assistance, monastic education, and women empowerment programs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At the heart of our work is a commitment to compassion, kindness, spiritual 
              wisdom, and equality, striving to build a more just and harmonious world.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Free Education Programs",
                "Medical Support & Aid",
                "Elderly Care Services",
                "Spiritual Guidance",
                "Women Empowerment",
                "Community Outreach",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group p-8 rounded-3xl bg-background border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card">
            <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower individuals through education, healthcare, spirituality, and compassion. 
              We aim to help children build brighter futures, support people suffering from critical 
              medical conditions, and provide spiritual enrichment through guidance and meditation programs.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group p-8 rounded-3xl bg-background border border-border hover:border-saffron/30 transition-all duration-300 hover:shadow-card">
            <div className="w-16 h-16 rounded-2xl gradient-saffron flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision a world where everyone has access to education, healthcare, spiritual 
              guidance, and opportunities for growth. We strive for a future where compassion and 
              empowerment eliminate suffering, creating a peaceful and thriving global community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
