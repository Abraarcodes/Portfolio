import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StackIcon from 'tech-stack-icons'; 

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Nodejs", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Nextjs", category: "Framework" },
    { name: "MongoDB", category: "Database" },
    { name: "Expressjs", category: "Backend" },
    { name: "Js", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "Flask", category: "Framework" },
    { name: "TailwindCSS", category: "Styling" },
    { name: "Redux", category: "State Management" },
    { name: "Java", category: "Language" },
    { name: "HTML5", category: "Markup" },
    { name: "CSS3", category: "Styling" },
    { name: "Git", category: "Version Control" },
  ];

  

  useEffect(() => {
  const section = sectionRef.current;
  const title = titleRef.current;
  const grid = skillsGridRef.current;

  if (!section || !title || !grid) return;

  gsap.set(title, { opacity: 0, y: 60 });
  gsap.set(grid.children, { opacity: 0, y: 30, scale: 0.9 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(title, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }).to(
    grid.children,
    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
    "-=0.5"
  );

  // Cleanup function
  return () => {
    tl.kill();
  };
}, []);

const darkIcons = ["nextjs", "expressjs", "python","flask"];

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      {/* Floating Orbs */}
      <div className="absolute top-40 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={skillsGridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:glow-primary"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center text-4xl">
                  <StackIcon name={skill.name.toLowerCase()}  
                   className={`w-full h-full object-contain ${darkIcons.includes(skill.name.toLowerCase()) ? "filter invert" : ""}`}/>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {Array.from(new Set(skills.map((skill) => skill.category))).map((category) => (
              <span key={category} className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground border border-glass-border/20">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
