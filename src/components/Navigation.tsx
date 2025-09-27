import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail,FileText } from "lucide-react";

import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          isScrolled
            ? "glass-card border-b border-glass-border/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold gradient-text">Abraar</h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/Abraarcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-abraar1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://docs.google.com/document/d/1lVmEt6ukatfU_0You-qNZV4KoxkA3q0P/edit?usp=sharing&ouid=107706890794007077665&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors "
                >
                <FileText size={18}/>
                </a>
                {/* <a
                  href="mailto:hello@abraar.dev"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                </a> */}
              </div>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="sm"
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-primary"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </Button>

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center space-x-6 mt-8">
              <a
                href="https://github.com/Abraarcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-abraar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              {/* <a
                href="mailto:hello@abraar.dev"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a> */}
            </div>

            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              className="mt-8 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-primary"
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;