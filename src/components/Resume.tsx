import { Download, FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  // Replace this with your actual resume PDF path
  const resumeUrl = '/resume.pdf';

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-header mb-4">Resume_</h2>
        <p className="font-mono text-muted-foreground mb-12">// Download my CV</p>

        <div className="max-w-2xl mx-auto">
          <div className="card-gradient border border-border rounded-lg p-8 glow-box text-center">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <FileText className="w-10 h-10 text-primary" />
            </div>

            {/* Title */}
            <h3 className="font-mono text-2xl font-semibold text-foreground mb-3">
              Ronny Mboya
            </h3>
            <p className="font-mono text-primary mb-2">Full-Stack Developer</p>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              Maseno University Graduate • Moringa School Alumni
            </p>

            {/* Resume highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Technologies', value: '10+' },
                { label: 'Education', value: '2' },
                { label: 'Experience', value: 'Entry' },
              ].map((stat) => (
                <div key={stat.label} className="p-3 rounded-lg bg-muted/50 border border-border">
                  <p className="font-mono text-xl font-bold text-primary">{stat.value}</p>
                  <p className="font-mono text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glow" 
                size="lg" 
                className="font-mono"
                asChild
              >
                <a href="/resume.html" download="Ronny_Mboya_Resume.html">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-mono border-muted-foreground/30 hover:border-primary hover:text-primary"
                asChild
              >
                <a href="/resume.html" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-5 h-5 mr-2" />
                  View Online
                </a>
              </Button>
            </div>

            {/* Note */}
            <p className="font-mono text-xs text-muted-foreground mt-6">
              PDF format • Last updated January 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
