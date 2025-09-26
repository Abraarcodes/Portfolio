import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
