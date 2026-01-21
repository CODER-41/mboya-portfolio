import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Snake Piece Events Kenya',
    description: 'A comprehensive events management website for organizing and discovering events across Kenya. Features event listings, booking system, and user authentication.',
    tags: ['React.js', 'Tailwind CSS', 'Python', 'FastAPI'],
    type: 'Full-Stack',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    demoLink: 'https://snakepiece-events.onrender.com/',
    codeLink: '#',
  },
  {
    title: 'Gym Fitness & Tracker CLI',
    description: 'A command-line application for tracking gym workouts, exercises, and fitness progress. Built with Python featuring SQLite database for persistent data storage.',
    tags: ['Python', 'SQLite', 'CLI', 'OOP'],
    type: 'Backend',
    gradient: 'from-green-500/20 to-emerald-500/20',
    demoLink: '#',
    codeLink: 'https://github.com/CODER-41/phase-3-project',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with product catalog, shopping cart, user authentication, and order management. Responsive design for all devices.',
    tags: ['React.js', 'JavaScript', 'Flask', 'PostgreSQL'],
    type: 'Full-Stack',
    gradient: 'from-purple-500/20 to-pink-500/20',
    demoLink: 'https://market-hub-roan.vercel.app',
    codeLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-header mb-4">Selected_Works</h2>
        <p className="font-mono text-muted-foreground mb-12">// Premium Deployments</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative rounded-lg border border-border overflow-hidden bg-card hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-6">
                {/* Type badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20 mb-4">
                  {project.type}
                </span>

                {/* Title */}
                <h3 className="font-mono text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-mono text-xs border-muted-foreground/30 hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-mono text-xs border-muted-foreground/30 hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
