import { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sinar Sako Residence',
    category: 'Real Estate',
    description: 'Luxury property listing platform with advanced search, virtual tours, and integrated CRM system for real estate agents.',
    image: '/portfolio-sinar-sako.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Three.js'],
    link: '#',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'Pillar.ai',
    category: 'AI Platform',
    description: 'Next-generation AI analytics platform featuring neural network visualizations, predictive modeling, and real-time data processing.',
    image: '/portfolio-pillar-ai.jpg',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    link: '#',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: 3,
    title: 'StyleHub Online Shop',
    category: 'E-Commerce',
    description: 'Full-featured e-commerce platform with AI-powered recommendations, seamless checkout, and inventory management.',
    image: '/portfolio-online-shop.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    link: '#',
    color: 'from-orange-500 to-red-400',
  },
  {
    id: 4,
    title: 'ProBuild Materials',
    category: 'Construction',
    description: 'Industrial-grade e-commerce for construction materials with bulk ordering, supplier management, and logistics tracking.',
    image: '/portfolio-construction.jpg',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    link: '#',
    color: 'from-yellow-500 to-orange-400',
  },
  {
    id: 5,
    title: 'VersaTemplate Pro',
    category: 'Web Template',
    description: 'Multi-purpose website template system with drag-and-drop builder, 50+ components, and customizable themes.',
    image: '/portfolio-template.jpg',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    color: 'from-green-500 to-teal-400',
  },
];

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-red to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <Eye className="w-4 h-4 text-ai-blue" />
            <span className="font-rajdhani text-sm text-white/80">Featured Work</span>
          </div>
          
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Project </span>
            <span className="text-gradient">Matrix</span>
          </h2>
          
          <p className="font-rajdhani text-lg text-white/60 max-w-2xl mx-auto">
            Selected builds from the digital frontier. Each project represents a unique 
            challenge solved with cutting-edge technology and creative innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              onMouseEnter={() => {
                setHoveredCard(project.id);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
              }}
            >
              <div 
                className={`portfolio-card relative h-full glass-card rounded-2xl overflow-hidden cursor-pointer ${
                  hoveredCard === project.id ? 'scale-[1.02]' : ''
                }`}
                style={{
                  transform: hoveredCard === project.id 
                    ? 'translateY(-10px) rotateX(5deg)' 
                    : 'translateY(0) rotateX(0)',
                  transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCard === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-ai-black via-ai-black/50 to-transparent transition-opacity duration-500 ${
                    hoveredCard === project.id ? 'opacity-90' : 'opacity-70'
                  }`} />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-orbitron bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-orbitron text-xl font-bold text-white group-hover:text-ai-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-rajdhani text-white/60 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-rajdhani bg-white/5 border border-white/10 rounded text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex gap-3 pt-2 transition-all duration-300 ${
                    hoveredCard === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <a
                      href={project.link}
                      className="flex-1 cyber-btn rounded-lg py-3 text-center text-sm"
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-lg font-orbitron text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-blue to-transparent" />
    </section>
  );
};

export default Portfolio;
