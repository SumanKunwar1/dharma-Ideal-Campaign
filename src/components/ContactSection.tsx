import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-card relative">
      {/* Prayer Flags Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 prayer-flags" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in{" "}
            <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Head Office</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pragati Marga, Jorpati, Gokarneshwor,<br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +977-14917776<br />
                    +977-9840413934
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-spiritual-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-spiritual-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    info@dharmatelevision.tv
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-spiritual-green/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-spiritual-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Sunday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-background border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <Button type="submit" variant="saffron" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
