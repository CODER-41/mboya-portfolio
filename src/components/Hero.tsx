import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 pb-10">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-mono text-sm text-primary">OPEN TO OPPORTUNITIES</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          I craft <span className="text-gradient glow-text">full-stack</span>
          <br />
          experiences that scale.
        </h1>

        {/* Terminal-style intro */}
        <div className="font-mono text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-primary">&gt;_</span> initializing_developer_profile...<span className="terminal-cursor"></span>
        </div>

        {/* Description */}
        <div className="max-w-2xl border-l-2 border-primary/50 pl-6 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="font-mono text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-semibold">Ronny Mboya</span>. A passionate full-stack developer
            and student at <span className="text-primary">Moringa School, Kenya</span>. I build modern web applications
            from frontend to backend.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild variant="default" size="lg" className="font-mono group">
            <a href="#contact">
              Start Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-mono border-muted-foreground/30 hover:border-primary hover:text-primary">
            <a href="#projects">View Work</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
