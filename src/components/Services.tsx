import { Code, Brain, Palette, Headphones, Rocket, Lightbulb, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description: "We build custom websites according to your specific requirements and vision. From simple landing pages to complex web applications, our team brings your ideas to life with modern technologies and best practices.",
    hasDownload: true,
  },
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Intelligent automation and machine learning tools that streamline operations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centric designs that elevate your brand and engage users.",
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    description: "Expert guidance and reliable support to keep your technology running smoothly.",
  },
  {
    icon: Rocket,
    title: "Product Innovation",
    description: "Rapid prototyping and MVP development to bring your ideas to market faster.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "Strategic planning to modernize your business with cutting-edge technology.",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What we do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech solutions designed to empower your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              {service.hasDownload && (
                <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                  <a href="/brochure.pdf" download="ReView-Website-Development-Brochure.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
