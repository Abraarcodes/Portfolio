import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Award, MapPin, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const journeyItems = [
    {
      id: 1,
      title: "IK Bros Freelance Work",
      subtitle: "Freelance Full-Stack Developer",
      date: "Jul – Sept 2025",
      location: "IK Bros General Trading LLC, Dubai",
      description: "Developed a comprehensive B2B website with advanced features and seamless user experience.",
      link: "#",
      type: "work",
      side: "left"
    },
    {
      id: 2,
      title: "Smart India Hackathon 2024 Win",
      subtitle: "National Level Winner",
      date: "Dec 2024",
      location: "India",
      description: "Won India's biggest hackathon at the national level, showcasing innovative solutions and technical excellence.",
      type: "achievement",
      side: "right"
    },
    {
      id: 3,
      title: "Top 7 Recognition",
      subtitle: "Academic Excellence",
      date: "2024",
      location: "Osmania University Colleges",
      description: "Recognized among Top 7 across all Osmania University Colleges for academic and project excellence.",
      type: "achievement",
      side: "left"
    },
    {
      id: 4,
      title: "Dark Patterns Buster Hackathon",
      subtitle: "National Finalist",
      date: "May 2024",
      location: "India",
      description: "Reached the finals of a national-level hackathon focusing on eliminating dark patterns in user interfaces.",
      type: "achievement",
      side: "right"
    },
    {
      id: 5,
      title: "Honorary Recognition",
      subtitle: "Hack4SDG @ IIT Hyderabad",
      date: "2024",
      location: "IIT Hyderabad",
      description: "Acknowledged for developing an impactful project contributing to Sustainable Development Goals.",
      type: "achievement",
      side: "left"
    },
    {
      id: 6,
      title: "HackRevolution 2023 Win",
      subtitle: "Hackathon Winner",
      date: "2023",
      location: "India",
      description: "Won for developing an innovative cryptocurrency arbitrage bot with advanced trading algorithms.",
      type: "achievement",
      side: "right"
    },
    {
      id: 7,
      title: "Computer Science Engineering",
      subtitle: "B.E. Degree",
      date: "2021 – 2025",
      location: "Muffakham Jah College of Engineering & Technology",
      description: "CGPA: 8.95 - Focused on software engineering, algorithms, and modern development practices.",
      type: "education",
      side: "left"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const timeline = timelineRef.current;
    const line = lineRef.current;

    if (!section || !title || !timeline || !line) return;

    // Initial states
    gsap.set(title, {
      opacity: 0,
      y: 60,
    });

    gsap.set(timeline.children, {
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -60 : 60),
      y: 30,
    });

    gsap.set(line, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.to(line, {
  scaleY: 1,
  transformOrigin: "top center",
  ease: "none",          // smooth linear scaling
  scrollTrigger: {
    trigger: section,
    start: "top top",    // when section top hits top of viewport
    end: "bottom bottom", // until section bottom hits bottom of viewport
    scrub: true,         // link animation to scroll
  },
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

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        timeline.children,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <MapPin size={16} className="text-primary" />;
      case "achievement":
        return <Award size={16} className="text-secondary" />;
      case "education":
        return <Calendar size={16} className="text-accent" />;
      default:
        return <Calendar size={16} className="text-primary" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "border-primary bg-primary/20";
      case "achievement":
        return "border-secondary bg-secondary/20";
      case "education":
        return "border-accent bg-accent/20";
      default:
        return "border-primary bg-primary/20";
    }
  };

  return (
    <section id="journey" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Floating Orbs */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of achievements, learning, and growth in the world of technology 
            and innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-primary transform -translate-x-1/2"
          />

         {/* Timeline Items */}
<div ref={timelineRef} className="space-y-12">
  {journeyItems.map((item) => (
    <div
      key={item.id}
      className={`relative flex items-center ${
        item.side === "left" ? "justify-end" : "justify-start"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-8 h-8 rounded-full border-2 ${getTypeColor(item.type)} flex items-center justify-center`}
        >
          {getTypeIcon(item.type)}
        </div>
      </div>

      {/* Content Card */}
      <div className="w-5/12 text-left">
        <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:glow-primary">
          {/* Date */}
          <div className="flex items-center gap-2 mb-3 text-primary font-medium">
            <Calendar size={14} />
            <span className="text-sm">{item.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <h4 className="text-secondary font-medium mb-3">{item.subtitle}</h4>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <MapPin size={14} />
            <span className="text-sm">{item.location}</span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Link */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm"
            >
              View Project <ExternalLink size={12} />
            </a>
          )}

          {/* Type Badge */}
          <div className="absolute -top-2 -right-2">
            <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(item.type)} border`}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default Journey;