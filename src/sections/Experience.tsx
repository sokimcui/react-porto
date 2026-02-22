import { useRef, useEffect, useState } from 'react';
import { 
  GraduationCap, 
  Globe, 
  Server, 
  Code, 
  Shield, 
  Bot,
  Cpu,
  Terminal,
  Gamepad2,
  BookOpen
} from 'lucide-react';

interface ExperienceItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  side: 'left' | 'right';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    year: '2011 - 2016',
    title: 'Japan Robotics Education',
    description: 'Studied advanced robotics engineering in Japan. Mastered Japanese language achieving N1 certification. Specialized in automation systems and AI fundamentals.',
    icon: GraduationCap,
    color: 'text-ai-red',
    side: 'left',
  },
  {
    id: 2,
    year: '2008',
    title: 'Ragnarok Private Server',
    description: 'Built and managed a private Ragnarok Online server from scratch. Handled VPS setup, server configuration, script editing, and command line operations.',
    icon: Gamepad2,
    color: 'text-ai-blue',
    side: 'right',
  },
  {
    id: 3,
    year: 'Language Skills',
    title: 'Multilingual Proficiency',
    description: 'Japanese N1 (Native-level proficiency) and English Intermediate. Able to communicate technical concepts fluently in multiple languages.',
    icon: Globe,
    color: 'text-green-400',
    side: 'left',
  },
  {
    id: 4,
    year: 'Web Development',
    title: 'Full-Stack Mastery',
    description: 'Extensive experience in website development and server hosting. From frontend design to backend architecture and database management.',
    icon: Code,
    color: 'text-purple-400',
    side: 'right',
  },
  {
    id: 5,
    year: 'Present',
    title: 'Advanced Learning Journey',
    description: 'Currently advancing skills in frontend and backend development, internet security, physical robotics with electronic components, and developing Pillar.ai.',
    icon: Bot,
    color: 'text-ai-red',
    side: 'left',
  },
];

const skills = [
  { name: 'React.js', icon: Code, level: 95 },
  { name: 'Node.js', icon: Server, level: 90 },
  { name: 'Python', icon: Terminal, level: 85 },
  { name: 'AI/ML', icon: Cpu, level: 80 },
  { name: 'Security', icon: Shield, level: 75 },
  { name: 'Robotics', icon: Bot, level: 70 },
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    const items = document.querySelectorAll('.experience-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, ((windowHeight - sectionTop) / (windowHeight + sectionHeight)) * 100)
        );
        setLineProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-red to-transparent" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-ai-blue/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-ai-red/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-ai-red" />
            <span className="font-rajdhani text-sm text-white/80">Career Journey</span>
          </div>
          
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">System </span>
            <span className="text-gradient">Log</span>
          </h2>
          
          <p className="font-rajdhani text-lg text-white/60 max-w-2xl mx-auto">
            A timeline of continuous learning and innovation. From robotics education in Japan 
            to building AI-powered solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            {/* Background Line */}
            <div className="absolute inset-0 bg-white/10" />
            {/* Progress Line */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-ai-red via-ai-blue to-ai-red transition-all duration-300"
              style={{ height: `${lineProgress}%` }}
            />
            
            {/* Data Packets */}
            <div 
              className="absolute w-3 h-3 bg-ai-red rounded-full shadow-glow-red animate-pulse"
              style={{ top: `${lineProgress}%`, transform: 'translateX(-33%)' }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12 lg:space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isVisible = visibleItems.has(exp.id);
              
              return (
                <div
                  key={exp.id}
                  data-id={exp.id}
                  className={`experience-item relative grid lg:grid-cols-2 gap-8 items-center ${
                    exp.side === 'right' ? 'lg:text-left' : 'lg:text-right'
                  }`}
                >
                  {/* Content */}
                  <div 
                    className={`${exp.side === 'right' ? 'lg:order-2' : 'lg:order-1'} ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${exp.side === 'left' ? '-translate-x-12' : 'translate-x-12'}`
                    } transition-all duration-700`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 ${
                      exp.side === 'right' ? 'lg:ml-8' : 'lg:mr-8'
                    }`}>
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 mb-4 ${exp.side === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                        <span className="px-3 py-1 rounded-full text-xs font-orbitron bg-ai-red/20 text-ai-red border border-ai-red/30">
                          {exp.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-orbitron text-xl font-bold text-white mb-3">
                        {exp.title}
                      </h3>

                      {/* Description */}
                      <p className="font-rajdhani text-white/60 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  } transition-all duration-500`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-2 border-ai-red/50">
                        <Icon className={`w-8 h-8 ${exp.color}`} />
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-ai-red/30 animate-ping" />
                    </div>
                  </div>

                  {/* Empty Space for Grid */}
                  <div className={`hidden lg:block ${exp.side === 'right' ? 'lg:order-1' : 'lg:order-2'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
              Technical <span className="text-gradient">Expertise</span>
            </h3>
            <p className="font-rajdhani text-white/60">
              Core competencies across the full development stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group glass-card p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-ai-blue/20 rounded-full blur-xl group-hover:bg-ai-red/20 transition-colors duration-300" />
                    <div className="relative w-full h-full rounded-full glass-card flex items-center justify-center border border-white/10 group-hover:border-ai-red/50 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-ai-blue group-hover:text-ai-red transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h4 className="font-orbitron text-sm text-white mb-2">{skill.name}</h4>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-ai-red to-ai-blue rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  
                  <span className="font-rajdhani text-xs text-white/50 mt-1 block">
                    {skill.level}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-blue to-transparent" />
    </section>
  );
};

export default Experience;
