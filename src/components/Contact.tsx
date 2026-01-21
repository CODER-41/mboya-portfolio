import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mboyaronny41@gmail.com',
    href: 'mailto:mboyaronny41@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0769 483 882 / 0759 340 116',
    href: 'tel:+254769483882',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/CODER-41', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/coder41/', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://x.com/Codesorcerdev41', label: 'X' },

];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="section-header mb-4">Get_In_Touch</h2>
        <p className="font-mono text-muted-foreground mb-12">// Let's build something amazing together</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-gradient border border-border rounded-lg p-8 glow-box">
              <h3 className="font-mono text-xl font-semibold text-primary mb-6">
                Ready to collaborate?
              </h3>
              <p className="font-mono text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. 
                Whether you have a question or just want to say hello, feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-mono text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-border bg-card flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-gradient border border-border rounded-lg p-8 glow-box">
            <h3 className="font-mono text-xl font-semibold text-foreground mb-6">
              Send a message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="font-mono text-sm text-muted-foreground block mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-sm text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-sm text-muted-foreground block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button type="submit" className="w-full font-mono group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
