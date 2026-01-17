const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&gt;_</span> © {currentYear} Ronny Mboya. All rights reserved.
          </div>
          
          <div className="font-mono text-sm text-muted-foreground">
            Built with <span className="text-primary">React</span> & <span className="text-primary">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
