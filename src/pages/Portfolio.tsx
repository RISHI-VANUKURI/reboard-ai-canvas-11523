import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce AI Platform",
    client: "RetailCorp",
    category: "AI & Automation",
    description: "Built an intelligent product recommendation system that increased sales by 45% using machine learning algorithms and real-time data processing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["AI/ML", "React", "Python", "AWS"],
    results: ["45% increase in sales", "2M+ products processed", "99.9% uptime"],
  },
  {
    title: "Healthcare Management System",
    client: "MediCare Plus",
    category: "Custom Software",
    description: "Developed a comprehensive patient management platform with telemedicine capabilities, serving over 50,000 patients across 20 clinics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "HIPAA"],
    results: ["50K+ active patients", "20 clinics connected", "30% efficiency gain"],
  },
  {
    title: "Financial Analytics Dashboard",
    client: "InvestPro",
    category: "Data Visualization",
    description: "Created a real-time financial analytics platform processing millions of transactions daily with advanced visualization and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["TypeScript", "D3.js", "Real-time", "APIs"],
    results: ["5M+ transactions/day", "Real-time insights", "Custom reports"],
  },
  {
    title: "Smart City IoT Platform",
    client: "CityTech Solutions",
    category: "IoT & Innovation",
    description: "Engineered an IoT platform managing 10,000+ sensors across urban infrastructure for traffic, lighting, and environmental monitoring.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
    tags: ["IoT", "Cloud", "React", "Data Analytics"],
    results: ["10K+ sensors", "40% energy savings", "City-wide coverage"],
  },
  {
    title: "Social Media Content Platform",
    client: "ContentFlow",
    category: "SaaS Product",
    description: "Built a comprehensive social media management tool with AI-powered content suggestions, scheduling, and analytics for 100K+ users.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Next.js", "AI", "MongoDB", "Stripe"],
    results: ["100K+ users", "5M posts managed", "4.8★ rating"],
  },
  {
    title: "Enterprise Resource Planning",
    client: "GlobalManuf Co",
    category: "Enterprise Software",
    description: "Delivered a full-scale ERP system integrating inventory, supply chain, HR, and finance for a global manufacturing company.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Java", "Oracle", "Microservices", "Integration"],
    results: ["15 departments", "Global deployment", "ROI in 18 months"],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how we've helped businesses transform their digital presence with innovative technology solutions
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                id={project.title.toLowerCase().replace(/\s+/g, '-')}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-large transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                </div>
                
                <div className="p-8">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    Client: {project.client}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-6 mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-sm text-muted-foreground whitespace-nowrap">
                            {result}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to start your project?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology
          </p>
          <Button size="lg" className="text-base px-8" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
