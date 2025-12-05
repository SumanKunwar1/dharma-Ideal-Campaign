import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DHARMA Ideal Campaign changed my life. Thanks to their education program, I was able to complete my studies and now help others in my community.",
    name: "Tenzin Dorje",
    role: "Former Student, Now Volunteer",
    location: "Nepal",
  },
  {
    quote: "The meditation retreats have brought such peace to my life. The spiritual guidance I received has helped me find purpose and inner calm.",
    name: "Sarah Mitchell",
    role: "Program Participant",
    location: "United States",
  },
  {
    quote: "As a volunteer, I've witnessed the incredible impact this organization has on elderly care. Their compassion is truly inspiring.",
    name: "Karma Lhamo",
    role: "Volunteer Coordinator",
    location: "Tibet",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-saffron/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories of{" "}
            <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from the people whose lives have been touched by our programs and initiatives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-foreground leading-relaxed mb-8 mt-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-gold">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
