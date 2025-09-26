import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set([titleRef.current, progressBarRef.current], {
      opacity: 0,
      y: 50,
    });

    // Animation sequence
    tl.to([titleRef.current, progressBarRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    })
      .to(
        progressBarRef.current,
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            if (progressTextRef.current) {
              const progress = Math.round(this.progress() * 100);
              progressTextRef.current.textContent = `${progress}%`;
            }
          },
        },
        "-=0.3"
      )
      .to(
        loadingRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete();
          },
        },
        "+=0.5"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" 
           style={{ animationDelay: "0s" }} />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" 
           style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" 
           style={{ animationDelay: "4s" }} />

      <div className="relative z-10 text-center">
        <h1
          ref={titleRef}
          className="mb-12 text-6xl font-bold gradient-text"
        >
          Abraar
        </h1>

        <div className="w-80 mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted-foreground">Loading Experience</span>
            <span ref={progressTextRef} className="text-primary font-medium">
              0%
            </span>
          </div>

          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-20" />
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-primary origin-left scale-x-0 glow-primary"
            />
          </div>
        </div>

        <p className="mt-8 text-muted-foreground animate-pulse">
          Preparing immersive experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;