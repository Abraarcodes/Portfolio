import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Send, Github, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!section || !title || !form || !info) return;

    gsap.set([title, form, info], { opacity: 0, y: 60 });

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
      [form, info],
      {
        opacity: 1,
        y: 0,
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mqayeqda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Abraarcodes",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohammed-abraar1/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      {/* Floating Orbs */}
      <div
        className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:mohammedabraar360@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      mohammedabraar360@gmail.com
                    </a>
                  </div>
                </div>

                {/* Message */}
                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 border border-secondary/30 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Quick Response</h4>
                    <p className="text-muted-foreground">
                      Usually reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 glass-card rounded-xl text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:glow-primary`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-400">
                  Available for new projects
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently accepting new freelance projects and collaboration
                opportunities. Let's discuss your ideas and bring them to life!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="bg-input/50 border-glass-border/30 focus:border-primary focus:ring-primary/20 focus:bg-input/80 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="bg-input/50 border-glass-border/30 focus:border-primary focus:ring-primary/20 focus:bg-input/80 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-input/50 border-glass-border/30 focus:border-primary focus:ring-primary/20 focus:bg-input/80 transition-all resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:bg-gradient-secondary border-none text-primary-foreground glow-primary hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
