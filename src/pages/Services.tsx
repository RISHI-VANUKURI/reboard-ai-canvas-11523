import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Brain, Palette, Headphones, Rocket, Lightbulb, ArrowRight, Check, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Services = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (serviceIndex: number, featureIndex: number) => {
    const key = `${serviceIndex}-${featureIndex}`;
    setExpandedFeature(expandedFeature === key ? null : key);
  };

  const services = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "We build custom websites according to your specific requirements and vision. From simple landing pages to complex web applications, our team creates tailored solutions that perfectly match your business needs.",
      hasDownload: true,
      features: [
        {
          title: "Flexible Solutions",
          detail: "Whether you need a basic business website or a full-featured e-commerce platform, we adapt to your requirements and budget."
        },
        {
          title: "Modern Design",
          detail: "Beautiful, responsive designs that work seamlessly across all devices - from smartphones to desktops."
        },
        {
          title: "Custom Features",
          detail: "We build exactly what you need - contact forms, galleries, admin panels, chatbots, payment integration, and more."
        },
        {
          title: "Ongoing Support",
          detail: "Comprehensive support and maintenance packages to keep your website running smoothly."
        },
        {
          title: "SEO & Performance",
          detail: "Optimized for search engines and fast loading times to help your business grow online."
        },
      ],
    },
    {
      icon: Code,
      title: "Custom Software & App Development",
      description: "Build powerful, scalable applications tailored to your unique business needs.",
      features: [
        {
          title: "Web and mobile application development",
          detail: "Cross-platform solutions that work seamlessly on any device, from responsive web apps to native mobile experiences."
        },
        {
          title: "Full-stack development (React, Node.js, Python)",
          detail: "End-to-end development using modern tech stacks, ensuring robust frontend and backend integration."
        },
        {
          title: "Cloud-native architecture",
          detail: "Scalable solutions built for the cloud with microservices, containerization, and serverless technologies."
        },
        {
          title: "API development and integration",
          detail: "RESTful and GraphQL APIs designed for performance, with seamless third-party service integrations."
        },
        {
          title: "Database design and optimization",
          detail: "Efficient data structures with SQL and NoSQL databases, optimized for speed and reliability."
        },
      ],
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions & Automation",
      description: "Leverage artificial intelligence to streamline operations and gain competitive advantages.",
      features: [
        {
          title: "Machine learning model development",
          detail: "Custom ML models trained on your data to solve specific business challenges and automate decision-making."
        },
        {
          title: "Natural language processing",
          detail: "Text analysis, sentiment detection, and language understanding to extract insights from unstructured data."
        },
        {
          title: "Intelligent chatbots and assistants",
          detail: "AI-powered conversational interfaces that provide 24/7 customer support and automate routine tasks."
        },
        {
          title: "Predictive analytics",
          detail: "Forecast trends and behaviors using advanced algorithms to make data-driven strategic decisions."
        },
        {
          title: "Process automation and RPA",
          detail: "Automate repetitive tasks and workflows to increase efficiency and reduce operational costs."
        },
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design & Digital Branding",
      description: "Create beautiful, user-centric designs that elevate your brand and engage users.",
      features: [
        {
          title: "User interface and experience design",
          detail: "Intuitive interfaces designed with user behavior in mind, creating delightful experiences that drive engagement."
        },
        {
          title: "Brand identity development",
          detail: "Complete brand packages including logos, color palettes, and visual guidelines that make your brand memorable."
        },
        {
          title: "Prototyping and wireframing",
          detail: "Interactive prototypes to visualize and test your product before development, saving time and resources."
        },
        {
          title: "Design systems and style guides",
          detail: "Comprehensive design systems ensuring consistency across all platforms and speeding up future development."
        },
        {
          title: "User research and testing",
          detail: "Data-driven insights from real users to validate design decisions and optimize user journeys."
        },
      ],
    },
    {
      icon: Headphones,
      title: "IT Consulting & Tech Support",
      description: "Expert guidance and reliable support to keep your technology running smoothly.",
      features: [
        {
          title: "Technology strategy consulting",
          detail: "Strategic guidance to align your technology investments with business objectives and maximize ROI."
        },
        {
          title: "Infrastructure planning and setup",
          detail: "Design and implementation of reliable IT infrastructure tailored to your specific needs and growth plans."
        },
        {
          title: "24/7 technical support",
          detail: "Round-the-clock assistance ensuring your systems stay operational with minimal downtime."
        },
        {
          title: "Security audits and implementation",
          detail: "Comprehensive security assessments and implementation of best practices to protect your digital assets."
        },
        {
          title: "Performance optimization",
          detail: "System analysis and tuning to improve speed, efficiency, and resource utilization across your tech stack."
        },
      ],
    },
    {
      icon: Rocket,
      title: "Product Innovation & MVP Development",
      description: "Rapidly prototype and validate your ideas with minimum viable products.",
      features: [
        {
          title: "Rapid prototyping",
          detail: "Quick turnaround from concept to working prototype, allowing you to test ideas before full investment."
        },
        {
          title: "MVP development and launch",
          detail: "Build and launch your minimum viable product in weeks, not months, to start gathering real user feedback."
        },
        {
          title: "Product-market fit validation",
          detail: "Systematic testing and validation to ensure your product solves real problems for your target market."
        },
        {
          title: "Iterative development process",
          detail: "Agile methodology with regular sprints and releases, adapting based on user feedback and metrics."
        },
        {
          title: "Go-to-market strategy",
          detail: "Comprehensive launch planning including positioning, marketing channels, and growth tactics."
        },
      ],
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation",
      description: "Modernize your business with strategic planning and cutting-edge technology.",
      features: [
        {
          title: "Digital strategy development",
          detail: "Comprehensive roadmaps that align digital initiatives with business goals and competitive positioning."
        },
        {
          title: "Legacy system modernization",
          detail: "Upgrade outdated systems to modern architectures without disrupting ongoing operations."
        },
        {
          title: "Cloud migration services",
          detail: "Seamless transition to cloud infrastructure with improved scalability, reliability, and cost efficiency."
        },
        {
          title: "Change management support",
          detail: "Guide your team through transitions with structured processes that ensure adoption and minimize resistance."
        },
        {
          title: "Training and documentation",
          detail: "Comprehensive training programs and detailed documentation to empower your team with new technologies."
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Comprehensive technology solutions designed to empower your business
            and drive measurable results
          </p>
          <Link to="/contact">
            <Button size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  {service.hasDownload && (
                    <Button variant="outline" size="lg" asChild>
                      <a href="/brochure.pdf" download="ReView-Website-Packages.pdf">
                        <Download className="w-5 h-5 mr-2" />
                        Download Brochure
                      </a>
                    </Button>
                  )}
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-secondary/50 rounded-2xl p-8">
                    <h3 className="text-lg font-semibold mb-6 text-foreground">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => {
                        const featureKey = `${index}-${idx}`;
                        const isExpanded = expandedFeature === featureKey;
                        
                        return (
                          <li key={idx} className="border border-border rounded-lg overflow-hidden">
                            <button
                              onClick={() => toggleFeature(index, idx)}
                              className="w-full flex items-start gap-3 p-4 hover:bg-secondary/80 transition-colors text-left"
                            >
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground font-medium flex-1">{feature.title}</span>
                              <ArrowRight 
                                className={`w-4 h-4 text-primary flex-shrink-0 mt-0.5 transition-transform ${
                                  isExpanded ? 'rotate-90' : ''
                                }`}
                              />
                            </button>
                            {isExpanded && (
                              <div className="px-4 pb-4 pl-12 bg-background/50">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {feature.detail}
                                </p>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your business with technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
