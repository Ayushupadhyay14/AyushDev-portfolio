import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  InfinityIcon,
  Wrench,
  Brain,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["Python", "C/C++", "JavaScript", "SQL"],
      color: "from-neon-cyan to-tech-blue",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Backend Frameworks",
      skills: ["FastAPI", "Django", "Flask", "Django REST Framework"],
      color: "from-primary to-neon-green",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases & Messaging",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "RabbitMQ",
      ],
      color: "from-neon-purple to-primary",
    },
    {
      icon: <InfinityIcon className="h-6 w-6" />,
      title: "DevOps & Deployment",
      skills: [
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Linux Server",
        "Nginx",
        "VPS Hosting",
      ],
      color: "from-tech-blue to-neon-cyan",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & ML",
      skills: [
        "OpenAI APIs",
        "LangChain",
        "Prompt Engineering",
        "Ollama",
        "Hugging Face",
      ],
      color: "from-primary to-neon-green",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Core Concepts",
      skills: [
        "REST API Design",
        "JWT Authentication",
        "RBAC",
        "Microservices",
        "WebSockets",
        "Git",
        "Postman",
      ],
      color: "from-tech-blue to-neon-cyan",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Backend engineering, system design, and AI integration expertise
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
