import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Prayer Flags Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 prayer-flags" />

      {/* Subtle background motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/5" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-saffron/5" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-semibold mb-4 border border-saffron/20">
            Contact Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in{" "}
            <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or want to get involved? We'd love to hear from you — reach out through any of our channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Contact Info ─────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-4">
            {/* Head Office */}
            <div className="p-5 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors">
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

            {/* Phone */}
            <div className="p-5 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone / Office</h4>
                  <p className="text-muted-foreground text-sm">
                    +977-14917776
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-5 rounded-2xl bg-background border border-border hover:border-green-400/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    🇳🇵 Nepal: +977-9766883351<br />
                    🇳🇵 Nepal: +977-9818123174<br />
                    🇮🇳 India: +91-7363933945<br />
                    🇮🇳 India: +91-7319133145
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-background border border-border hover:border-spiritual-blue/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-spiritual-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-spiritual-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    info@dharmaideal.org<br />
                    info@dharmatelevision.tv
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-5 rounded-2xl bg-background border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-spiritual-green/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-spiritual-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Sunday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Websites & Social */}
            <div className="p-5 rounded-2xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Online</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>🌐 <a href="https://www.dharmaideal.org" className="hover:text-gold transition-colors">www.dharmaideal.org</a></p>
                    <p>🌐 <a href="https://www.dharmatelevision.tv" className="hover:text-gold transition-colors">www.dharmatelevision.tv</a></p>
                    <p>📱 Mobile App: Dharma TV</p>
                    <p>📘 Facebook: Dharma Television</p>
                    <p>▶️ YouTube: Dharma Television</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact Form ─────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center p-12 rounded-3xl bg-background border border-border">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🙏</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon. May peace and wisdom guide your path.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-background border border-border h-full">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Send a Message</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Whether you'd like to join, volunteer, donate, or simply learn more — we're here to help.
                </p>

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
                      placeholder="Full Name"
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
                      placeholder="your@email.com"
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
                    placeholder="Tell us about your interest, questions, or how you'd like to get involved..."
                    required
                  />
                </div>

                {/* Quick-links for WhatsApp */}
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200">
                  <p className="text-sm text-green-800 font-medium mb-1">💬 Prefer WhatsApp?</p>
                  <p className="text-xs text-green-700">
                    Nepal: +977-9766883351 &nbsp;|&nbsp; India: +91-7363933945
                  </p>
                </div>

                <Button type="submit" variant="saffron" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;