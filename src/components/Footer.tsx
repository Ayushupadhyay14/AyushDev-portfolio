import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent mb-4">
              Ayush Upadhyay
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
               Passionate about building scalable web applications and delivering innovative solutions. Specialized in Python development with experience in full-stack development.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Ayushupadhyay14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-website205822248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:Ayushup17@yahoo.com"
                className="p-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="tel:+918815152801"
                className="p-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { label: "About Me", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <a
                  href="mailto:Ayushup17@yahoo.com"
                  className="text-primary hover:text-neon-cyan transition-colors"
                >
                  Ayushup17@yahoo.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <a
                  href="tel:+918815152801"
                  className="text-primary hover:text-neon-cyan transition-colors"
                >
                  +91 8815152801
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="text-foreground">Indore, MP, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025 Ayush Upadhyay. Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        </div>

        {/* Availability Status */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm text-primary font-medium">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
