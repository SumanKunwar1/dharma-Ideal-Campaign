import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Play } from "lucide-react";
import heroTemple from "@/assets/hero-temple.jpg";

const slides = [
  {
    title: "Let's Be Kind for Children",
    subtitle: "Transforming Lives Through Education & Compassion",
    description:
      "Join us in our mission to provide free education and support to underprivileged children across the world.",
    image:
      heroTemple,
  },
  {
    title: "Get Involved with Helping Hands",
    subtitle: "Together We Can Make a Difference",
    description:
      "Your contribution helps us bring smiles to millions of faces through our charitable initiatives worldwide.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80",
  },
  {
    title: "Bringing Smiles to Millions",
    subtitle: "Spreading Love & Spiritual Wisdom",
    description:
      "Experience the joy of giving and be part of a global movement dedicated to compassion and service.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div
              className={`max-w-2xl text-background transition-all duration-700 ${
                index === currentSlide
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-lg">
                {slide.subtitle}
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl text-background/80 mb-8 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-background/30 text-background bg-background/10 backdrop-blur-sm font-semibold text-lg px-8 py-6 rounded-full hover:bg-background/20 hover:border-background/50 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/50 w-3 hover:bg-background/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
