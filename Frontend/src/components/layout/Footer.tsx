import { Heart, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold hover:shadow-glow transition-shadow"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </button>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dihev9qxc/image/upload/v1768125463/dharma-logo_xeh5nn.png" 
                  alt="Dharma Ideal Campaign Logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              A worldwide non-profit charity organization dedicated to spreading compassion, 
              education, and spiritual wisdom across the globe.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Popular Links</h4>
            <ul className="space-y-3">
              {["About Us", "Contact Us", "Popular Causes", "Upcoming Events", "Latest Blog", "Our Teams"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {["Free Education", "Elderly Care", "Pilgrimage Tours", "Medical Support", "Monastic Education", "Women Empowerment"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to receive updates about our programs and events.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-gold transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl gradient-saffron text-white font-medium hover:shadow-glow transition-shadow text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © 2025 DHARMA Ideal Campaign. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-spiritual-red" /> for a better world
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;