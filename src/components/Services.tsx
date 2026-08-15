import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MonitorSmartphone,
  ShoppingCart,
  Code,
  Network,
  LifeBuoy,
} from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      icon: <MonitorSmartphone className="h-8 w-8" />,
      title: "Website Development",
      description: "Professional, responsive, and fast-loading websites tailored to your business needs.",
      color: "from-neon-cyan to-tech-blue",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Robust and secure online stores designed to maximize conversions and user experience.",
      color: "from-primary to-neon-green",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software",
      description: "Scalable custom software solutions powered by Python and Django to automate your workflows.",
      color: "from-neon-purple to-primary",
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "API Development",
      description: "Secure and efficient RESTful APIs to seamlessly integrate your systems and services.",
      color: "from-tech-blue to-neon-cyan",
    },
    {
      icon: <LifeBuoy className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing support, bug fixes, and performance optimization to keep your applications running smoothly.",
      color: "from-primary to-neon-green",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              My Services
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-neon-cyan mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              I provide end-to-end solutions to help your business grow and succeed in the digital world.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group h-full"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-background shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
