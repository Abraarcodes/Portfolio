import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;

    if (!footer || !content) return;

    // Initial state
    gsap.set(content, {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    });

    // Animation
    gsap.to(content, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    // Floating particles animation
    const particles = footer.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Abraarcodes" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-abraar1/" },
  ];

  return (
    <footer ref={footerRef} className="relative bg-card/50 border-t border-glass-border/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full" />
        <div className="particle absolute top-40 right-20 w-3 h-3 bg-secondary/20 rounded-full" />
        <div className="particle absolute bottom-32 left-1/4 w-2 h-2 bg-accent/25 rounded-full" />
        <div className="particle absolute bottom-20 right-1/3 w-4 h-4 bg-primary/15 rounded-full" />
        <div className="particle absolute top-60 left-2/3 w-2 h-2 bg-secondary/30 rounded-full" />
      </div>

      {/* Scroll to Top Button */}
      <div className="absolute top-8 right-8 z-10">
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="sm"
          className="glass-card border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={16} />
        </Button>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-4">Abraar</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Full-stack developer passionate about creating immersive digital 
                experiences with cutting-edge technologies. Always ready for the 
                next exciting challenge.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="text-foreground">Email:</span> mohammedabraar360@gmail.com
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">Location:</span> Available Worldwide
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current animate-pulse" />
            </div>

            {/* Status */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-400">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center glass-card p-8 rounded-2xl">
          <h4 className="text-xl font-semibold mb-3">Ready to start your project?</h4>
          <p className="text-muted-foreground mb-6">
            Let's collaborate and create something amazing together.
          </p>
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-primary hover:bg-gradient-secondary border-none text-primary-foreground glow-primary hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;