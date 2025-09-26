import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
// import project5 from "@/assets/project-5.png";
// import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
     {
    id: 1,
    title: "VibeForge | No-Code AI Website Generator",
    description: `
      Developed a cutting-edge platform using React that allows users to generate full-stack websites from natural language prompts.
      Integrated WebContainers to execute code within the browser and utilized Google Gemini LLM for AI-powered code generation.
      Features a real-time preview, file structure generation, and a live code editor.
    `,
    image: project1,
    tags: ["Python", "ReactJS", "Google Gemini API", "WebContainers"],
    liveUrl: "https://vibeforge.netlify.app/",
    githubUrl: "https://github.com/Abraarcodes/Vibeforge",
    category: "AI SASS"
  },
  {
    id: 2,
    title: "IKBROS | B2B Website",
    description: `
      Engineered and launched a fully responsive B2B website from the ground up using Next.js, replacing an outdated PHP-based platform.
      Eliminated server and hosting costs by deploying the static site on Vercel, providing a cost-effective solution for the client.
      Improved UX with modern UI, intuitive product categories, and dynamic search functionality.
      Executed a comprehensive SEO strategy to boost online visibility.
    `,
    image: project2,
    tags: ["Next.js", "ReactJS", "TailwindCSS", "Vercel", "SEO"],
    liveUrl: "https://ikbros.com",
    githubUrl: "#",
    category: "Freelance"
  },
  {
    id: 3,
    title: "NoteFlow | AI Notes Landing Page",
    description: `
      Simple yet polished landing page for NoteFlow, an AI-powered note-taking app.
      Built using ReactJS, TailwindCSS, and Framer Motion for smooth animations and modern UI.
      Designed for clarity, user engagement, and portfolio showcase.
    `,
    image: project3,
    tags: ["ReactJS", "TailwindCSS", "Framer Motion"],
    liveUrl: "https://noteflowlandingpage.netlify.app/",
    githubUrl: "https://github.com/Abraarcodes/NoteFlow",
    category: "Web Development"
  },
  {
    id: 4,
    title: "PingMe | Real-Time Chat App",
    description: `
      Full-stack real-time chat application with features like instant messaging, user authentication, and message persistence.
      Built using ReactJS for the frontend, Node.js + Socket.io for real-time communication, and MongoDB for data storage.
      Deployed live for testing and demonstration purposes.
    `,
    image: project4,
    tags: ["ReactJS", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://pingme-frontend.netlify.app/",
    githubUrl: "https://github.com/Abraarcodes/Chat_App",
    category: "Web Development"
  },
    // {
    //   id: 5,
    //   title: "Animation Learning Platform",
    //   description: "Interactive learning platform for web animation tools with hands-on tutorials and projects.",
    //   image: project5,
    //   tags: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   category: "Education"
    // },
    // {
    //   id: 6,
    //   title: "Animated Developer Portfolio",
    //   description: "A step-by-step tutorial project showcasing modern portfolio development techniques.",
    //   image: project6,
    //   tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   category: "Tutorial"
    // },
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
        stagger: 0.2,
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-float" 
           style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects that demonstrate my expertise 
            in modern web development and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:glow-primary"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-glass-surface/80 border-glass-border/30 text-foreground hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-glass-surface/80 border-glass-border/30 text-foreground hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-glass-border/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-glass-border/20">
                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary-glow"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Project →
                      </a>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;