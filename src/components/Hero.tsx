import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productMockup from "@/assets/product-mockup.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              <span className="text-primary">R</span>e
              <span className="text-primary">V</span>iew
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              We build cutting-edge digital products and empower businesses with intelligent automation
            </p>

            {/* Two Content Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              {/* ReView Portal Box */}
              <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-4">ReView Portal</h3>
                <p className="text-muted-foreground mb-6">
                  Access our comprehensive AI-powered review management platform
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://ReViewrv25.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit ReView Portal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Review Tech Club Box */}
              <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-4">Review Tech Club</h3>
                <p className="text-muted-foreground mb-6">
                  Join our community of tech enthusiasts and innovators
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://reviewaitechsolutions.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Tech Club
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="text-base px-8" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Product Video */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <video
                src={productMockup}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl shadow-large"
              />
            </div>

            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 scale-90"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
