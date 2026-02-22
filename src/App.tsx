import { useEffect, useRef, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Navigation from './sections/Navigation';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-ai-black overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 z-50 bg-ai-black flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-ai-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-orbitron text-ai-blue animate-pulse">INITIALIZING SYSTEM...</p>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-ai-dark border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 font-rajdhani">
            &copy; 2024 <span className="text-ai-red">Pillar.ai</span> | Built with 
            <span className="text-ai-blue"> React</span> + 
            <span className="text-ai-red"> Node.js</span> + 
            <span className="text-ai-blue"> Tailwind</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
