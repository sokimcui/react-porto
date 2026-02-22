import { useState, useRef, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  Terminal, 
  Cloud,
  Shield,
  Cpu,
  GitBranch,
  Container,
  Layers,
  Zap,
  Bot
} from 'lucide-react';

interface TechSkill {
  name: string;
  icon: React.ElementType;
  category: string;
  color: string;
}

const techSkills: TechSkill[] = [
  // Frontend
  { name: 'React.js', icon: Code2, category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: Layers, category: 'Frontend', color: '#FFFFFF' },
  { name: 'TypeScript', icon: Code2, category: 'Frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: Layout, category: 'Frontend', color: '#06B6D4' },
  
  // Backend
  { name: 'Node.js', icon: Server, category: 'Backend', color: '#339933' },
  { name: 'Python', icon: Terminal, category: 'Backend', color: '#3776AB' },
  { name: 'PostgreSQL', icon: Database, category: 'Backend', color: '#336791' },
  { name: 'MongoDB', icon: Database, category: 'Backend', color: '#47A248' },
  
  // DevOps & Cloud
  { name: 'Docker', icon: Container, category: 'DevOps', color: '#2496ED' },
  { name: 'AWS', icon: Cloud, category: 'DevOps', color: '#FF9900' },
  { name: 'Git', icon: GitBranch, category: 'DevOps', color: '#F05032' },
  { name: 'Linux', icon: Terminal, category: 'DevOps', color: '#FCC624' },
  
  // AI & Security
  { name: 'TensorFlow', icon: Bot, category: 'AI/ML', color: '#FF6F00' },
  { name: 'PyTorch', icon: Cpu, category: 'AI/ML', color: '#EE4C2C' },
  { name: 'Cybersecurity', icon: Shield, category: 'Security', color: '#00D4AA' },
  { name: 'WebSockets', icon: Zap, category: 'Realtime', color: '#FFFFFF' },
];

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'AI/ML', 'Security'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'All' 
    ? techSkills 
    : techSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-red to-transparent" />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ai-blue/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <Cpu className="w-4 h-4 text-ai-blue" />
            <span className="font-rajdhani text-sm text-white/80">Tech Arsenal</span>
          </div>
          
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Tech </span>
            <span className="text-gradient">Stack</span>
          </h2>
          
          <p className="font-rajdhani text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies powering the next generation 
            of web applications and AI solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-rajdhani font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-ai-red to-ai-blue text-white'
                  : 'glass-card text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <div
                key={skill.name}
                className={`group relative ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } transition-all duration-500`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div 
                  className={`relative glass-card rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ${
                    isHovered ? 'scale-110 bg-white/10' : ''
                  }`}
                  style={{
                    boxShadow: isHovered ? `0 0 30px ${skill.color}40` : 'none',
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: `${skill.color}20`,
                      border: `1px solid ${skill.color}40`,
                    }}
                  >
                    <Icon 
                      className="w-6 h-6 transition-all duration-300"
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Name */}
                  <p className="font-rajdhani text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </p>

                  {/* Category Tag */}
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs font-rajdhani rounded bg-white/5 text-white/40">
                    {skill.category}
                  </span>
                </div>

                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-1 rounded-xl transition-opacity duration-300 -z-10 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Hosting & Server */}
          <div className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-ai-red/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Server className="w-7 h-7 text-ai-red" />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-2">
              Web Hosting
            </h3>
            <p className="font-rajdhani text-white/60 text-sm">
              Expert in VPS setup, server configuration, CDN integration, and performance optimization for scalable deployments.
            </p>
          </div>

          {/* Programming Languages */}
          <div className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-ai-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-7 h-7 text-ai-blue" />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-2">
              Programming
            </h3>
            <p className="font-rajdhani text-white/60 text-sm">
              Proficient in JavaScript, TypeScript, Python, PHP, and Bash scripting for diverse development needs.
            </p>
          </div>

          {/* Frameworks */}
          <div className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-2">
              Frameworks
            </h3>
            <p className="font-rajdhani text-white/60 text-sm">
              Mastery of React, Next.js, Express, Django, and modern CSS frameworks for rapid development.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-orbitron text-3xl md:text-4xl font-bold text-ai-red mb-2">10+</p>
              <p className="font-rajdhani text-white/60">Years Coding</p>
            </div>
            <div>
              <p className="font-orbitron text-3xl md:text-4xl font-bold text-ai-blue mb-2">50+</p>
              <p className="font-rajdhani text-white/60">Projects Done</p>
            </div>
            <div>
              <p className="font-orbitron text-3xl md:text-4xl font-bold text-ai-red mb-2">20+</p>
              <p className="font-rajdhani text-white/60">Technologies</p>
            </div>
            <div>
              <p className="font-orbitron text-3xl md:text-4xl font-bold text-ai-blue mb-2">100%</p>
              <p className="font-rajdhani text-white/60">Dedication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-blue to-transparent" />
    </section>
  );
};

export default Skills;
