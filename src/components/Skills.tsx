import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  InfinityIcon,
  Settings,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages",
      skills: ["Python", "(OOPS)", "C/C++", "SQL"],
      color: "from-neon-cyan to-tech-blue",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frameworks & Technologies",
      skills: [
        "Django",
        "FastAPI",
        "Django REST Framework (DRF)",
        // "HTML/CSS",
      ],
      color: "from-primary to-neon-green",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Machine Learning (Basics)",
      skills: [
        "PyTorch",
      ],
      color: "from-primary to-neon-green",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["MongoDB", "DBMS","PostgreSQL","Redis"],
      color: "from-neon-purple to-primary",
    },

    {
      icon: <InfinityIcon className="h-6 w-6" />,
      title: "DevOps & Hosting",
      skills: [
        "GitHub Actions",
        "CI/CD",
        "Vps",
        "Nginx",
        "Docker",
        "Vercel",
        "Render",
      ],
      color: "from-tech-blue to-neon-cyan",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Others",
      skills: [
        "Generative Ai",
        "UI/UX Design",
        "Git",
        "GitHub",
        "Postman",
        "REST APIs",
      ],
      color: "from-tech-blue to-neon-cyan",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group h-full"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-background`}
                    >
                      {category.icon}
                    </div>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Level Indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-6 rounded-xl border border-primary/20 bg-card">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-neon-cyan"></div>
                <span className="text-sm text-muted-foreground">Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-tech-blue"></div>
                <span className="text-sm text-muted-foreground">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
