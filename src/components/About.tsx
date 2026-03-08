import { GraduationCap, MapPin, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-header mb-12">About_Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About text */}
          <div className="card-gradient border border-border rounded-lg p-8 glow-box">
            <p className="font-mono text-muted-foreground leading-relaxed mb-6">
              I am a <span className="text-primary font-semibold">Full-Stack Developer</span> who turns ideas into fast, elegant, production-ready software. 
              I hold a degree in Mathematics and Physics from <span className="text-primary font-semibold">Maseno University</span> — a foundation that sharpened my problem-solving instincts and analytical thinking. 
              I then completed an intensive Software Engineering bootcamp at <span className="text-primary font-semibold">Moringa School</span>, where I honed my craft building real-world, full-stack applications from the ground up.
            </p>
            <p className="font-mono text-muted-foreground leading-relaxed">
              I work across the full stack — crafting responsive, intuitive interfaces with <span className="text-foreground">React.js</span>, and engineering reliable backends with <span className="text-foreground">Python</span> and <span className="text-foreground">FastAPI</span>. 
              What sets me apart is the rare combination of mathematical precision and creative design sense — I don't just build features, I build experiences that are scalable, performant, and delightful to use. 
              If you're looking for a developer who brings both technical depth and genuine passion to every project, you're in the right place.
            </p>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-semibold text-foreground">Education</h3>
                <p className="font-mono text-sm text-muted-foreground">Maseno University (Math & Physics) → Moringa School</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-semibold text-foreground">Location</h3>
                <p className="font-mono text-sm text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-semibold text-foreground">Focus</h3>
                <p className="font-mono text-sm text-muted-foreground">Full-Stack Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
