import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer / Freelancer",
      company: "Growthify Services",
      location: "Remote",
      period: "Jan 2025 – May 2025",
      type: "Current",
      achievements: [
        "Developed full-stack web and desktop applications with high performance and responsiveness",
        "Designed and maintained CI/CD pipelines using GitHub Actions and CPanel",
        "Led end-to-end project lifecycles including architecture, development, testing, and deployment",
        "Managed and communicated with multiple clients, gathering requirements and delivering scalable solutions",
      ],
      technologies: [
        "Electron.js",
        "MERN",
        "TypeScript",
        "GitHub Actions",
        "MySQL",
      ],
    },
    {
      title: "Frontend Developer",
      company: "HeroXHost",
      location: "Remote",
      period: "May 2023 – Dec 2024",
      type: "Previous",
      achievements: [
        "Designed and implemented responsive websites and single-page applications",
        "Integrated dynamic content using AJAX and modern JavaScript",
        "Converted Figma designs into live React interfaces",
        "Collaborated with design team to improve user experience",
      ],
      technologies: ["React.js", "HTML/CSS", "JavaScript", "Figma"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6">
              Professional journey and key accomplishments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-semibold text-primary">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={exp.type === "Current" ? "default" : "secondary"}
                      className={
                        exp.type === "Current"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                On-Time Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
