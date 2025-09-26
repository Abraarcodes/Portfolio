import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award, Star, Medal, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon Winner",
      subtitle: "National Level Competition",
      year: "2024",
      description: "Won India's biggest hackathon at the national level, competing against thousands of teams across the country.",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 2,
      title: "HackRevolution Winner",
      subtitle: "Cryptocurrency Innovation",
      year: "2023",
      description: "Developed an innovative cryptocurrency arbitrage bot that impressed judges with its advanced trading algorithms.",
      icon: Award,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: 3,
      title: "Top 7 University Ranking",
      subtitle: "Osmania University Excellence",
      year: "2024",
      description: "Ranked among the top 7 students across all Osmania University colleges for outstanding academic and project achievements.",
      icon: Star,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      id: 4,
      title: "IIT Hyderabad Recognition",
      subtitle: "Hack4SDG Honoree",
      year: "2024",
      description: "Received honorary recognition from IIT Hyderabad for developing an impactful project contributing to SDGs.",
      icon: Medal,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      id: 5,
      title: "Dark Patterns Buster Finalist",
      subtitle: "National Hackathon",
      year: "2024",
      description: "Reached the finals of a prestigious national hackathon focused on eliminating dark patterns in user interfaces.",
      icon: Target,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    if (!section || !title || !grid) return;

    // Initial states
    gsap.set(title, {
      opacity: 0,
      y: 60,
    });

    gsap.set(grid.children, {
      opacity: 0,
      y: 50,
      scale: 0.9,
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
    }).to(
      grid.children,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Floating Orbs */}
      <div className="absolute top-40 right-20 w-36 h-36 bg-secondary/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: "5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition and awards that highlight my commitment to excellence 
            and innovation in technology and development.
          </p>
        </div>

        {/* Achievements Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            
            return (
              <div
                key={achievement.id}
                className="group glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:glow-primary relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${achievement.bgColor} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} 
                     style={{ transform: 'translate(50%, -50%)' }} />

                {/* Achievement Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${achievement.bgColor} ${achievement.borderColor} border rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                </div>

                {/* Year Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 ${achievement.bgColor} ${achievement.color} text-sm font-medium rounded-full border ${achievement.borderColor}`}>
                    {achievement.year}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className={`text-sm font-medium ${achievement.color} mb-4`}>
                      {achievement.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 ${achievement.borderColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}

          {/* Summary Card */}
          <div className="md:col-span-2 lg:col-span-1 glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:glow-secondary">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">5+ Major Awards</h3>
                <p className="text-muted-foreground">
                  Recognition across national competitions and academic excellence
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-glass-border/20">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">Hackathon Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">2</div>
                  <div className="text-xs text-muted-foreground">Academic Honors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;