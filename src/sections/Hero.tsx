import { useEffect, useRef, useState } from 'react';
import { ChevronRight, Sparkles, Code2, Cpu } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const fullText = 'Full-Stack Architect & AI Visionary';
  const heroRef = useRef<HTMLDivElement>(null);

  // Text decode animation
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        fullText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return fullText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= fullText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-red/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-blue/20 rounded-full blur-[150px] animate-pulse animation-delay-1000" />

      {/* Floating Electrons */}
      <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-white rounded-full shadow-glow-white animate-electron-orbit" />
      <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-ai-red rounded-full shadow-glow-red animate-electron-orbit animation-delay-1000" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-ai-blue rounded-full shadow-glow-blue animate-electron-orbit animation-delay-2000" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <Sparkles className="w-4 h-4 text-ai-red" />
              <span className="font-rajdhani text-sm text-white/80">Available for Projects</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">I am</span>
                <br />
                <span className="text-gradient">The Developer</span>
              </h1>
              
              {/* Animated Subtitle */}
              <div className="h-12 flex items-center">
                <p className="font-orbitron text-xl md:text-2xl text-ai-blue tracking-wider">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="font-rajdhani text-lg text-white/70 max-w-xl leading-relaxed">
              Crafting digital realities at the intersection of robust engineering and 
              artificial intelligence. I build systems that think, adapt, and evolve. 
              From full-stack web applications to AI-powered solutions, transforming 
              ideas into intelligent digital experiences.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-ai-red" />
                  <span className="font-orbitron text-3xl font-bold text-white">10+</span>
                </div>
                <p className="font-rajdhani text-sm text-white/50">Years Experience</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-ai-blue" />
                  <span className="font-orbitron text-3xl font-bold text-white">50+</span>
                </div>
                <p className="font-rajdhani text-sm text-white/50">Projects Built</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-ai-red" />
                  <span className="font-orbitron text-3xl font-bold text-white">AI</span>
                </div>
                <p className="font-rajdhani text-sm text-white/50">Powered Solutions</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="cyber-btn rounded-lg flex items-center gap-2 group"
              >
                <span>Initialize Contact</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 font-orbitron font-semibold text-sm uppercase tracking-wider border border-white/20 rounded-lg hover:border-ai-blue hover:bg-ai-blue/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Brain Logo Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30">
              <img
                src="/brain-logo.png"
                alt="AI Brain"
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>

            {/* Profile Image Container */}
            <div
              className="relative z-10"
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
            >
              {/* Neon Border Ring */}
              <div className={`absolute -inset-4 rounded-2xl transition-all duration-500 ${
                isHoveringImage ? 'opacity-100' : 'opacity-50'
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ai-red via-ai-blue to-ai-red animate-pulse-glow" />
              </div>

              {/* Image */}
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-2xl overflow-hidden glass-card">
                <img
                  src="/profile-photo.jpg"
                  alt="Developer Profile"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isHoveringImage ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Holographic Scan Effect */}
                {isHoveringImage && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-blue/30 to-transparent animate-scan-line" />
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ai-black/80 via-transparent to-transparent" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-card p-4 rounded-xl">
                    <p className="font-orbitron text-sm text-ai-red mb-1">STATUS</p>
                    <p className="font-rajdhani text-white">Active Development</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-rajdhani text-xs text-white/60">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -left-8 top-1/4 glass-card px-4 py-2 rounded-lg animate-float">
                <span className="font-orbitron text-sm text-ai-blue">React.js</span>
              </div>
              <div className="absolute -right-4 top-1/3 glass-card px-4 py-2 rounded-lg animate-float animation-delay-1000">
                <span className="font-orbitron text-sm text-ai-red">Node.js</span>
              </div>
              <div className="absolute -left-4 bottom-1/4 glass-card px-4 py-2 rounded-lg animate-float animation-delay-2000">
                <span className="font-orbitron text-sm text-ai-blue">AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ai-black to-transparent" />
    </section>
  );
};

export default Hero;
