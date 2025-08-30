import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      location: "Indore, MP",
      period: "2022 – 2025",
      status: "Completed",
      description:
        "Comprehensive computer science program covering software development, database management, web technologies, and system analysis.",
      highlights: [
        "Computer Networks",
        "Operating System",
        "Software Engineering",
        "Database Management Systems",
        "Web Development",
        "Data Structures & Algorithms",
        "System Analysis & Design",
      ],
    },
    {
      degree: "Higher Secondary School (XII)",
      institution: "N.M. Memorial Higher Secondary School",
      location: "Indore, MP",
      period: "2021 – 2022",
      status: "Completed",
      description:
        "Science stream with focus on Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundation.",
      highlights: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    },
    {
      degree: "High School (X)",
      institution: "N.M. Memorial Higher Secondary School",
      location: "Indore, MP",
      period: "2020",
      status: "Completed",
      description:
        "Foundation education with emphasis on core subjects and extracurricular activities.",
      highlights: [
        "Core Subjects",
        "Basic Computer Skills",
        "Team Leadership",
        "Academic Excellence",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6">
              Academic background and continuous learning journey
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-neon-cyan text-background mt-1">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-primary font-semibold">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-muted-foreground text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={
                        edu.status === "Pursuing" ? "default" : "secondary"
                      }
                      className={
                        edu.status === "Pursuing"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Course Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <Badge
                          key={highlightIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">
                Years of Study
              </div>
            </div>
            <div className="text-center p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">
                Courses Completed
              </div>
            </div>
            <div className="text-center p-6 rounded-xl border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">
                Learning Mindset
              </div>
            </div>
          </div> */}

          {/* Continuous Learning */}
          <div className="mt-12 text-center">
            <Card className="border-primary/20 bg-gradient-to-r from-card to-secondary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground">
                  Always exploring new technologies and frameworks to stay
                  current with industry trends. Currently focusing on advanced
                  React patterns, cloud technologies, and AI integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
