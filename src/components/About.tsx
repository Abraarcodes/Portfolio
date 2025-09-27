import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "@/assets/profile.png";
import { Button } from "./ui/button";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    // Initial states
    gsap.set([image, content], {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    });

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(image, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
    }).to(
      content,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Floating Orbs */}
      <div className="absolute top-32 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float" 
           style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing Frame */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-20 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative glass-card rounded-full p-2 hover:scale-105 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src={profileImage}
                    alt="Abraar - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-full" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/20 rounded-full animate-pulse" 
                   style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
  I'm a full-stack developer who turns ideas into real, impactful applications. 
  I build solutions tailored to user needs, combining clean code with innovative 
  features to create experiences that truly matter.
</p>

<p>
  My work speaks through results — from winning national-level hackathons like 
  the Smart India Hackathon to building projects that solve real-world problems. 
  I specialize in MERN stack development and leverage AI to add intelligence 
  and efficiency to the applications I craft.
</p>

<p>
  Beyond coding, I'm always exploring new technologies, experimenting with 
  unique ideas. I thrive on 
  challenges, continuously pushing the boundaries of what's possible in web 
  development.
</p>
 <a
  href="https://drive.google.com/file/d/1X4hilEbn2Okd2e6JqpJV2bJRzI_AgQtJ/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground rounded-lg glow-primary hover:scale-105 transition-all duration-300 text-lg font-medium"
>
  View My Resume
</a>

            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-glass-border/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">0+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;