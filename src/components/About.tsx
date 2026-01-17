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
              I am a passionate <span className="text-primary font-semibold">Full-Stack Developer</span>. I graduated from 
              <span className="text-primary font-semibold">Maseno University</span> with a degree in Mathematics and Physics, 
              and upon completion, I joined <span className="text-primary font-semibold">Moringa School</span> in Kenya to 
              pursue a career in software engineering. My mission is to build applications that are not only functional but 
              also beautifully designed and performant.
            </p>
            <p className="font-mono text-muted-foreground leading-relaxed">
              With expertise ranging from modern frontend frameworks like <span className="text-foreground">React.js</span> to 
              robust backend technologies like <span className="text-foreground">Python</span> and <span className="text-foreground">FastAPI</span>, 
              I bridge the gap between design and functionality. I specialize in creating seamless user experiences 
              backed by solid, scalable architectures.
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
