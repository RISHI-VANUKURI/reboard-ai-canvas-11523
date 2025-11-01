import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code, Brain, Palette, Headphones, Rocket, Lightbulb, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const servicesDropdown = [
    { name: "Custom Website Development", icon: Code, hash: "#custom-website-development" },
    { name: "Custom Software & App Development", icon: Code, hash: "#custom-software-and-app-development" },
    { name: "AI-Powered Solutions", icon: Brain, hash: "#ai-powered-solutions-and-automation" },
    { name: "UI/UX Design", icon: Palette, hash: "#ui-ux-design-and-digital-branding" },
    { name: "IT Consulting", icon: Headphones, hash: "#it-consulting-and-tech-support" },
    { name: "Product Innovation", icon: Rocket, hash: "#product-innovation-and-mvp-development" },
    { name: "Digital Transformation", icon: Lightbulb, hash: "#digital-transformation" },
  ];

  const portfolioDropdown = [
    { name: "E-Commerce AI Platform", icon: undefined, hash: "#e-commerce-ai-platform" },
    { name: "Healthcare Management System", icon: undefined, hash: "#healthcare-management-system" },
    { name: "Financial Analytics Dashboard", icon: undefined, hash: "#financial-analytics-dashboard" },
    { name: "Smart City IoT Platform", icon: undefined, hash: "#smart-city-iot-platform" },
    { name: "Social Media Content Platform", icon: undefined, hash: "#social-media-content-platform" },
    { name: "Enterprise Resource Planning", icon: undefined, hash: "#enterprise-resource-planning" },
  ];

  const aboutDropdown = [
    { name: "Our Story", icon: undefined, hash: "#our-story" },
    { name: "Mission & Vision", icon: undefined, hash: "#mission-and-vision" },
    { name: "Values", icon: undefined, hash: "#values" },
  ];

  const navLinks = [
    { name: "Home", path: "/", dropdown: null },
    { name: "About", path: "/about", dropdown: aboutDropdown },
    { name: "Services", path: "/services", dropdown: servicesDropdown },
    { name: "Portfolio", path: "/portfolio", dropdown: null },
    { name: "Blog", path: "/blog", dropdown: null },
    { name: "Contact", path: "/contact", dropdown: null },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ReView Logo" className="w-20 h-20" />
            <div className="flex flex-col">
              <span className="font-semibold text-foreground text-2xl leading-tight">
                <span className="text-primary">R</span>e<span className="text-primary">V</span>iew
              </span>
              <span className="text-sm text-muted-foreground leading-tight">AI Tech and Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-base transition-colors ${
                    isActive(link.path)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
                      <div className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={`${link.path}${item.hash}`}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors text-sm text-foreground"
                          >
                            {item.icon && <item.icon className="w-4 h-4 text-primary" />}
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
