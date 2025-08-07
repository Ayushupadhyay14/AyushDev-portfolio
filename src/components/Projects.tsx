import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Database,
  Users,
  FileText,
  BarChart3,
  Bot,
  Book,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GiveWise - Donation Management CRM",
      description:
        "A comprehensive desktop-based CRM software for NGOs to manage donations, automate receipt generation, send SMS receipts via Twilio, and filter donation data by date or category.",
      longDescription:
        "Built with Electron.js for cross-platform desktop compatibility, featuring real-time filtering, category tagging, in-kind donations management, and exportable Excel reports.",
      technologies: [
        "Electron.js",
        "React.js",
        "TailwindCSS",
        "SCSS",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Prisma",
        "MySQL",
        "VPS",
        "Nginx",
        "pm2",
      ],
      features: [
        "Receipt generation",
        "Real-time filtering",
        "Category tagging",
        "In-kind donations",
        "Exportable excel reports",
        "Twilio-based SMS notifications",
      ],
      links: {
        github: "https://github.com/lovesinghkalbhor/GiveWise_Donation",
        live: "https://github.com/lovesinghkalbhor/GiveWise_Donation/releases/tag/v1.0.11",
        docs: "https://drive.google.com/file/d/156Pxd_evkKFUf-KJS6edTvYWW7aZlHcY/view",
      },
      icon: <Database className="h-6 w-6" />,
      type: "Desktop Application",
      for: "Freelance Project",
    },

    {
      title: "Intelligence AI",
      description:
        "A responsive, full-stack chat application featuring multimodal AI conversations with Groq's high-speed LLM, persistent chat history, and an intuitive user interface.",
      longDescription:
        "This project integrates a React frontend with an Express.js backend to provide a seamless chat experience. It supports both text and image-based messages, leveraging Groq's API for fast, AI-powered responses. Conversations are stored in MongoDB, ensuring a persistent chat history.",
      technologies: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "Node.js",
        "Express.js",
        "Mongoose",
        "MongoDB",
        "Groq API",
        "VPS",
        "Nginx",
        "pm2",
      ],
      features: [
        "Multimodal chat (text and image)",
        "Persistent conversation history",
        "Optimistic UI updates",
        "Dynamic chat titles",
        "Responsive design",
        "Robust API error handling",
      ],
      links: {
        github: "https://github.com/lovesinghkalbhor/intelligence",
        live: "https://intelligence.projects.growthifyservices.in/",
        docs: "https://github.com/lovesinghkalbhor/intelligence",
      },
      icon: <Bot className="h-6 w-6" />,
      type: "Web Application",
      for: "Personal Project",
    },
    {
      title: "Growthify Services Website",
      description:
        "Complete website lifecycle development from UI/UX design to frontend development and deployment for a digital services company.",
      longDescription:
        "Designed and developed the entire website including landing pages, service pages, and contact forms with responsive design and smooth animations.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Framer Motion",

        "Cpanel",
        "Shared Hosting",
      ],
      features: [
        "Responsive design",
        "SEO optimization",
        "Contact forms",
        "Smooth animations",
        "Performance optimization",
      ],
      links: {
        github: "https://github.com/lovesinghkalbhor/Growthify",
        live: "https://growthifyservices.in/",
        docs: "https://share.google/jocWm9UiXi0da1r1N",
      },
      icon: <BarChart3 className="h-6 w-6" />,
      for: "Freelance Project",
      type: "Web Application",
    },
    {
      title: "RideNowIndore Platform",
      description:
        "Transportation platform connecting riders with drivers, featuring real-time booking, route optimization, and payment integration.",
      longDescription:
        "Full-stack application with user authentication, ride booking system, real-time tracking, and admin dashboard for managing operations.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Google Maps API",
        "Shared Hosting",
        "Cpanel",
      ],
      features: [
        "Call to Service Provider",
        "Check Pickup Location",
        "Book Ride",
        "Minimal UI",
      ],
      links: {
        github: "https://github.com/lovesinghkalbhor/Ridenow",
        live: "https://www.ridenowindore.com/",
        docs: "https://share.google/Tc5b5sxTiAgOFTtKc",
      },
      icon: <Users className="h-6 w-6" />,
      type: "Web Application",
      for: "Freelance Project",
    },
    {
      title: "Arvind Kumar NIT Surat - Educational Platform",
      description:
        "An online educational platform for students preparing for NIOS, JEE, and NEET exams, providing video lectures, study materials, solved assignments (TMA), and practical files.",
      longDescription:
        "The platform, led by an NITian, focuses on guiding students to academic success. It offers a range of digital products including solved assignments (TMA), practical files for various subjects, and up-to-date information for NIOS students. The site functions as an e-commerce platform for digital educational resources.",
      technologies: [
        "Website (HTML/CSS/JS)",
        "php",
        "Payment Gateway Integration",
        "Digital Product Delivery",
      ],
      features: [
        "NIOS lecture videos",
        "Solved TMA (Tutor Marked Assignments)",
        "Solved practical files",
        "Notes and sample papers",
        "E-commerce functionality for digital products",
        "Instant download and email delivery",
      ],
      links: {
        github: null,
        live: "https://arvindkumarnitsurat.com/",
        docs: null,
      },
      icon: <Book className="h-6 w-6" />,
      for: "Freelance Project",
      type: "Educational E-commerce Website",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing my expertise through real-world applications and
              innovative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Project Info */}
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-neon-cyan text-background">
                            {project.icon}
                          </div>
                          <div className="space-x-2">
                            <CardTitle className="text-xl mb-1">
                              {project.title}
                            </CardTitle>
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 text-xs"
                            >
                              {project.type}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 text-xs"
                            >
                              {project.for}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3">
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3">
                            Tech Stack:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
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
                      </div>
                    </CardContent>
                  </div>

                  {/* Project Actions */}
                  <div className="p-6 bg-card/50 border-l border-primary/10">
                    <div className="h-full flex flex-col justify-between">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-3">
                          Project Links:
                        </h4>
                        <div className="space-y-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-primary/30 text-primary hover:bg-primary/10 justify-start"
                            asChild
                          >
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-primary/30 text-primary hover:bg-primary/10 justify-start"
                            asChild
                          >
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-primary/30 text-primary hover:bg-primary/10 justify-start"
                            asChild
                          >
                            <a
                              href={project.links.docs}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              Documentation
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                          <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                          <span className="text-xs text-primary font-medium">
                            Production Ready
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Projects CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/lovesinghkalbhor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
