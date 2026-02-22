import { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  MessageSquare,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - In production, replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would typically send the data to your backend:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@pillar.ai',
      href: 'mailto:contact@pillar.ai',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 812-3456-7890',
      href: 'tel:+6281234567890',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indonesia',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-red to-transparent" />

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-red/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-blue/10 rounded-full blur-[150px] animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-ai-red" />
            <span className="font-rajdhani text-sm text-white/80">Get In Touch</span>
          </div>
          
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Establish </span>
            <span className="text-gradient">Connection</span>
          </h2>
          
          <p className="font-rajdhani text-lg text-white/60 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something extraordinary together. 
            Reach out and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <div 
            className={`lg:col-span-2 space-y-8 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            } transition-all duration-700`}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-ai-red/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-ai-red" />
                    </div>
                    <div>
                      <p className="font-rajdhani text-sm text-white/50">{item.label}</p>
                      <p className="font-orbitron text-white group-hover:text-ai-blue transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-xl">
              <p className="font-orbitron text-sm text-white/50 mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:bg-ai-blue/20 hover:border-ai-blue/50 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-ai-blue transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-card p-6 rounded-xl border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="font-orbitron text-green-400">Available for Work</p>
              </div>
              <p className="font-rajdhani text-white/60 text-sm">
                Currently accepting new projects and collaboration opportunities. 
                Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            } transition-all duration-700 delay-200`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block font-rajdhani text-sm text-white/60 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-ai-red transition-all duration-300"
                        placeholder="John Doe"
                      />
                      <div 
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-ai-red to-ai-blue transition-all duration-300 ${
                          focusedField === 'name' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block font-rajdhani text-sm text-white/60 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-ai-red transition-all duration-300"
                        placeholder="john@example.com"
                      />
                      <div 
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-ai-red to-ai-blue transition-all duration-300 ${
                          focusedField === 'email' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label className="block font-rajdhani text-sm text-white/60 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-ai-red transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-ai-red to-ai-blue transition-all duration-300 ${
                        focusedField === 'subject' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block font-rajdhani text-sm text-white/60 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-ai-red transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-ai-red to-ai-blue transition-all duration-300 ${
                        focusedField === 'message' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cyber-btn rounded-lg py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="glass-card border-white/10 text-white max-w-md">
          <DialogHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <DialogTitle className="font-orbitron text-2xl">Message Received!</DialogTitle>
            <DialogDescription className="font-rajdhani text-white/60">
              Thank you for reaching out. Your message has been successfully transmitted 
              and stored in our database. I'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setShowSuccess(false)}
            className="w-full cyber-btn rounded-lg py-3 mt-4"
          >
            <span>Close</span>
          </button>
        </DialogContent>
      </Dialog>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-blue to-transparent" />
    </section>
  );
};

export default Contact;
