import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="space-y-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">
                      Based in Indore, MP, India
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">
                      2+ Years Experience
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">
                      Bachelor of Computer Applications
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">Email:</span>{" "}
                  Ayushup17@yahoo.com
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">Phone:</span> +91
                  9340233410
                </p>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern
                web technologies. I specialize in building scalable applications
                using the MERN stack and have experience in both frontend and
                backend development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working as a freelancer, I've successfully delivered
                multiple projects ranging from desktop applications to
                comprehensive web solutions for various clients.
              </p>

              {/* Key Strengths */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  Key Strengths
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Problem Solving
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Team Collaboration
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Clean Code
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Agile Development
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    UI/UX Design
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
