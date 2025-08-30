import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-neon-cyan text-background">
                      <Mail className="h-5 w-5" />
                    </div>
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ayushup17@yahoo.com
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="mailto:lAyushup17@yahoo.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-neon-cyan text-background">
                      <Phone className="h-5 w-5" />
                    </div>
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+91 8815152801</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="tel:+918815152801">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-neon-cyan text-background">
                      <MapPin className="h-5 w-5" />
                    </div>
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Indore, Madhya Pradesh, India
                  </p>
                  <p className="text-sm text-muted-foreground/80 mt-1">
                    Available for remote work worldwide
                  </p>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/lovesinghkalbhor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 justify-start"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/love-singh-01a073242/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                {/* <a
                  href="/Love_Singh_Resume.pdf"
                  download="Love_Singh_Resume.pdf"
                >
                  <Button className="w-full bg-gradient-to-r from-primary to-neon-cyan hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a> */}
              </div>
            </div>

            {/* About Me Section */}
            <div className="lg:col-span-2">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-neon-cyan text-background">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    Let's Build Something Amazing Together
                  </CardTitle>
                  <p className="text-muted-foreground">
                    I'm passionate about creating innovative solutions that make
                    a real impact. Whether you have a project idea, job
                    opportunity, or just want to connect, I'd love to hear from
                    you.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">
                        What I Can Help With:
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                          Full-stack web development
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                          MERN stack applications
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                          API development & integration
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                          Database design & optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                          Technical consulting
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">
                        Response Time:
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="text-primary font-medium">
                            Within 24 hours
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Phone:</span>
                          <span className="text-primary font-medium">
                            Same day
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            LinkedIn:
                          </span>
                          <span className="text-primary font-medium">
                            Within 12 hours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-primary/20 pt-6">
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      Preferred Contact Methods:
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Button
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 h-auto py-4 flex-col gap-2"
                        asChild
                      >
                        <a href="mailto:lAyushup17@yahoo.com">
                          <Mail className="h-6 w-6" />
                          <span className="text-sm">
                            For detailed discussions
                          </span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 h-auto py-4 flex-col gap-2"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/ayush-website205822248/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-6 w-6" />
                          <span className="text-sm">
                            For professional networking
                          </span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 h-auto py-4 flex-col gap-2"
                        asChild
                      >
                        <a href="tel:+918815152801">
                          <Phone className="h-6 w-6" />
                          <span className="text-sm">For quick calls</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="border-primary/20 bg-gradient-to-r from-card to-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited to work on new challenges and bring
                  innovative ideas to life. Let's discuss how we can make your
                  vision a reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-neon-cyan hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:lAyushup17@yahoo.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Start a Conversation
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="tel:+918815152801">
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
