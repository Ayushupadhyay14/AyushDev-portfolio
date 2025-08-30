import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="border border-primary/20 animate-pulse"
              style={{ animationDelay: `${(i % 12) * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className=" animate-fade-in">
            <span className="text-primary font-mono text-lg">Hello, I'm</span>
          </div>

          {/* Name with glow effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 p-10 rounded-2xl bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent ">
            Ayush Upadhyay
          </h1>

          {/* Subtitle with typewriter effect */}
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
             Python Developer & Software Engineer
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications and delivering innovative solutions. Specialized in Python development with experience in full-stack development.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-neon-cyan hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <a href="/Ayush-Upadhyay-Resume.pdf" download={"Ayush-Upadhyay-Resume.pdf.pdf"}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/Ayushupadhyay14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-website205822248/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:Ayushup17@yahoo.com"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="tel:+918815152801"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
            >
              <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-float">
            <button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
