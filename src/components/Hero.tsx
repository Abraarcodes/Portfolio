import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
    });

    // Animation sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        splineRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <section
  id="hero"
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  {/* Background Spline */}
  <div className="absolute inset-0 w-full h-full">
    <iframe
      src="https://my.spline.design/orb-YRBQR2XM7dof6xmEaYpMAcyb/"
      frameBorder="0"
      width="100%"
      height="100%"
      className="absolute inset-0 w-full h-full object-cover"
      title="3D Orb Animation"
    />
    {/* Optional Glow overlay */}
    <div className="absolute inset-0 bg-gradient-glow opacity-50" />
  </div>

  {/* Floating Background Orbs */}
  <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
  <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
  <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "6s" }} />

  {/* Text Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
    <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold leading-tight text-white">
      Hi, I'm <span className="gradient-text">Abraar</span>
      <br />
      <span className="text-4xl md:text-5xl text-muted-foreground">
        Web Developer
      </span>
    </h1>

    <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mt-6">
      Turning ideas into reality with MERN and AI. 
I build smart, impactful web applications that make a difference.

    </p>

    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mt-8">
      <Button
        onClick={() => scrollToSection("#contact")}
        size="lg"
        className="bg-gradient-primary hover:bg-gradient-secondary border-none text-primary-foreground glow-primary hover:scale-105 transition-all duration-300"
      >
        Hire Me
      </Button>
      <Button
        onClick={() => scrollToSection("#projects")}
        variant="outline"
        size="lg"
        className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        View My Work
      </Button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <button
      onClick={() => scrollToSection("#about")}
      className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
    >
      <span className="text-sm mb-2">Scroll Down</span>
      <ChevronDown size={20} />
    </button>
  </div>
</section>

  );
};

export default Hero;