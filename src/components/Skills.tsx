const frontendSkills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'React.js', level: 85 },
];

const backendSkills = [
  { name: 'Python', level: 90 },
  { name: 'FastAPI', level: 85 },
  { name: 'Flask', level: 82 },
  { name: 'PostgreSQL/SQLite', level: 80 },
];

const tools = [
  { name: 'VS Code', icon: '💻' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Git', icon: '📦' },
  { name: 'Postman', icon: '📮' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Netlify', icon: '🌐' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between font-mono text-sm">
      <span className="text-foreground">{name}</span>
      <span className="text-primary">{level}%</span>
    </div>
    <div className="skill-bar">
      <div 
        className="skill-bar-fill transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="section-header mb-12">Technical_Arsenal</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Frontend Skills */}
          <div className="card-gradient border border-border rounded-lg p-8 glow-box">
            <h3 className="font-mono text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <span className="text-2xl">🎨</span> Frontend
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="card-gradient border border-border rounded-lg p-8 glow-box">
            <h3 className="font-mono text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <span className="text-2xl">⚙️</span> Backend
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-mono text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-primary">&gt;_</span> Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div 
                key={tool.name}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-mono text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
